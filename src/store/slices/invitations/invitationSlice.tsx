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
        toasterSuccess("Invitations sent successfully!", 2000, "id");
        return response.data;
      } else {
        return rejectWithValue("Failed to send invitations");
      }
    } catch (error: any) {
      console.error("Invitation error:", error);
      if (error.response && error.response.status === 400) {
        toasterError(error?.response?.data?.detail, 2000, "id");
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
        toasterError(error?.response?.data?.detail, 2000, "id");
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
        toasterSuccess("Invitation accepted successfully!", 2000, "id");
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

        toasterError(errorMessage, 2000, "id");
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

const initialState: InvitationState = {
  loading: false,
  error: null,
  success: false,
  users: [],
};

const invitationSlice = createSlice({
  name: "invitations",
  initialState,
  reducers: {
    resetInvitationState: (state) => {
      state.success = false;
      state.error = null;
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
      });
  },
});

export const { resetInvitationState } = invitationSlice.actions;
export default invitationSlice.reducer;
