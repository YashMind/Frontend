import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/services/http/baseUrl";
import {
  startLoadingActivity,
  stopLoadingActivity,
} from "../activity/activitySlice";
import { toasterError, toasterSuccess } from "@/services/utils/toaster";

// Define types for invitation
interface InvitationPayload {
  chatbotId: number; // Frontend naming convention
  userEmails: string[]; // Frontend naming convention
}

// The API payload will be transformed in the thunk

interface InvitationState {
  loading: boolean;
  error: string | null;
  success: boolean;
  users: any[];
  invitedUsers: any[];
  pagination: {
    current_page: number;
    page_size: number;
    total_items: number;
    total_pages: number;
    has_next: boolean;
    has_prev: boolean;
  } | null;
  revokeLoading: boolean;
  revokeSuccess: boolean;
}

// Async thunk for sending invitations
export const sendInvitations = createAsyncThunk<
  any,
  { chatbotId: number; userEmails: string[] }
>(
  "invitations/sendInvitations",
  async ({ chatbotId, userEmails }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());

      // Transform the payload to match the backend API expectations
      const apiPayload = {
        bot_id: chatbotId,
        user_emails: userEmails,
      };

      // Log the request payload for debugging
      console.log("Sending invitation request with payload:", apiPayload);

      const response = await http.post("/chatbot/invite-users", apiPayload);
      console.log("Invitation response:", response.data);

      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        return response.data;
      } else {
        return rejectWithValue("Failed to send invitations");
      }
    } catch (error: any) {
      console.error("Invitation error:", error);
      if (error.response && error.response.status === 400) {
        toasterError(error?.response?.data?.detail, 10000, "id");
        return rejectWithValue(
          error.response.data.detail || "Error sending invitations"
        );
      }
      return rejectWithValue("An error occurred while sending invitations");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

// Async thunk for getting available users to invite
export const getAvailableUsers = createAsyncThunk<any, void>(
  "invitations/getAvailableUsers",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      console.log("Fetching available users...");

      // If there's no specific endpoint, we can use the client users endpoint
      const response = await http.get("/admin/get-client-users");
      console.log("Available users response:", response.data);

      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        return response.data;
      } else {
        return rejectWithValue("Failed to fetch available users");
      }
    } catch (error: any) {
      console.error("Error fetching available users:", error);
      if (error.response && error.response.status === 400) {
        toasterError(error?.response?.data?.detail, 10000, "id");
        return rejectWithValue(
          error.response.data.detail || "Error fetching users"
        );
      }
      return rejectWithValue("An error occurred while fetching users");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

// Async thunk for getting uninvited users for a specific chatbot
export const getUninvitedUsers = createAsyncThunk<any, number>(
  "invitations/getUninvitedUsers",
  async (botId, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      console.log(`Fetching uninvited users for chatbot ID: ${botId}...`);

      // Call the new endpoint to get uninvited users for the specific chatbot
      console.log(
        `Making API call to: /admin/get-uninvited-users?bot_id=${botId}`
      );

      // Use the admin endpoint with query parameters
      const url = `/admin/get-uninvited-users?bot_id=${botId}`;

      const response = await http.get(url);
      console.log("Uninvited users response:", response.data);

      dispatch(stopLoadingActivity());
      return response.data;
    } catch (error: any) {
      console.error("Error fetching uninvited users:", error);

      if (error.response) {
        const status = error.response.status;
        const errorMessage =
          error.response.data?.detail ||
          `Error ${status}: ${error.response.statusText}`;

        toasterError(errorMessage, 10000, "id");

        return rejectWithValue(errorMessage);
      }

      return rejectWithValue(
        `Network error: ${error.message || "An error occurred while fetching uninvited users"
        }`
      );
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

// Async thunk for accepting an invitation
export const acceptInvitation = createAsyncThunk<any, string>(
  "invitations/acceptInvitation",
  async (token, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      console.log("Accepting invitation with token:", token);

      const response = await http.post(`/chatbot/accept-invite/${token}`);
      console.log("Accept invitation response:", response.data);

      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toasterSuccess("Invitation accepted successfully!", 10000, "id");
        return response.data;
      } else {
        return rejectWithValue("Failed to accept invitation");
      }
    } catch (error: any) {
      console.error("Error accepting invitation:", error);
      if (error.response) {
        let errorMessage = "An error occurred while accepting the invitation.";

        if (error.response.status === 401) {
          errorMessage = "You need to be logged in to accept this invitation.";
        } else if (error.response.status === 403) {
          errorMessage =
            "This invitation was sent to a different email address.";
        } else if (error.response.status === 404) {
          errorMessage = "Invalid or expired invitation.";
        } else if (error.response.data && error.response.data.detail) {
          errorMessage = error.response.data.detail;
        }

        toasterError(errorMessage, 10000, "id");
        return rejectWithValue(errorMessage);
      }
      return rejectWithValue(
        "An error occurred while accepting the invitation"
      );
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

// Async thunk for getting invited users with pagination
export const getInvitedUsers = createAsyncThunk<
  any,
  {
    botId?: number;
    page?: number;
    pageSize?: number;
    search?: string;
    status?: string;
  }
>(
  "invitations/getInvitedUsers",
  async (
    { botId, page = 1, pageSize = 10, search, status },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(startLoadingActivity());

      // Build query parameters
      const params = new URLSearchParams();
      if (botId) params.append("bot_id", botId.toString());
      params.append("page", page.toString());
      params.append("page_size", pageSize.toString());
      if (search) params.append("search", search);
      if (status && status !== "all") params.append("status", status);

      const url = `/admin/get-invited-users?${params.toString()}`;
      console.log("Fetching invited users with URL:", url);

      const response = await http.get(url);

      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        console.log("API Response:", response.data);
        return response.data;
      } else {
        console.error("API Error - Status:", response.status);
        return rejectWithValue("Failed to fetch invited users");
      }
    } catch (error: any) {
      console.error("Error fetching invited users:", error);
      console.error("Error details:", {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
      });

      const errorMessage =
        error.response?.data?.detail || "Failed to fetch invited users";
      toasterError(errorMessage, 10000, "id");

      return rejectWithValue(errorMessage);
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

// Async thunk for revoking access
export const revokeAccess = createAsyncThunk<any, number>(
  "invitations/revokeAccess",
  async (sharingId, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());

      const url = `/admin/revoke-access/${sharingId}`;
      const response = await http.delete(url);

      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toasterSuccess("Access revoked successfully!", 10000, "revoke-access");
        return response.data;
      } else {
        return rejectWithValue("Failed to revoke access");
      }
    } catch (error: any) {
      console.error("Error revoking access:", error);

      const errorMessage =
        error.response?.data?.detail || "Failed to revoke access";
      toasterError(errorMessage, 10000, "id");

      return rejectWithValue(errorMessage);
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

const initialState: InvitationState = {
  loading: false,
  error: null,
  success: false,
  users: [],
  invitedUsers: [],
  pagination: null,
  revokeLoading: false,
  revokeSuccess: false,
};

const invitationSlice = createSlice({
  name: "invitations",
  initialState,
  reducers: {
    resetInvitationState: (state) => {
      state.success = false;
      state.error = null;
    },
    clearUsersList: (state) => {
      state.users = [];
    },
    clearInvitedUsersList: (state) => {
      state.invitedUsers = [];
    },
    resetRevokeState: (state) => {
      state.revokeSuccess = false;
      state.revokeLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendInvitations.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(sendInvitations.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(sendInvitations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getAvailableUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAvailableUsers.fulfilled, (state, action) => {
        state.loading = false;
        // Handle different response formats
        if (action.payload && action.payload.data) {
          state.users = action.payload.data;
        } else if (Array.isArray(action.payload)) {
          state.users = action.payload;
        } else {
          state.users = [];
        }
      })
      .addCase(getAvailableUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getUninvitedUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUninvitedUsers.fulfilled, (state, action) => {
        state.loading = false;
        // Update the users list with uninvited users
        if (Array.isArray(action.payload)) {
          state.users = action.payload;
        } else {
          state.users = [];
        }
      })
      .addCase(getUninvitedUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(acceptInvitation.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(acceptInvitation.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(acceptInvitation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getInvitedUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getInvitedUsers.fulfilled, (state, action) => {
        state.loading = false;
        // Handle the new API response structure with pagination
        if (action.payload && action.payload.data) {
          state.invitedUsers = action.payload.data;
          state.pagination = action.payload.pagination;
        } else {
          // Fallback for old API structure
          state.invitedUsers = action.payload || [];
          state.pagination = null;
        }
      })
      .addCase(getInvitedUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(revokeAccess.pending, (state) => {
        state.revokeLoading = true;
        state.error = null;
        state.revokeSuccess = false;
      })
      .addCase(revokeAccess.fulfilled, (state, action) => {
        state.revokeLoading = false;
        state.revokeSuccess = true;
        // Remove the revoked user from the invited users list
        const sharingId = action.payload.sharing_id;
        state.invitedUsers = state.invitedUsers.filter(
          (user: any) => user.sharing_id !== sharingId
        );
      })
      .addCase(revokeAccess.rejected, (state, action) => {
        state.revokeLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  resetInvitationState,
  clearUsersList,
  clearInvitedUsersList,
  resetRevokeState,
} = invitationSlice.actions;
export default invitationSlice.reducer;
