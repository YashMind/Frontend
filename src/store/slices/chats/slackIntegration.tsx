// slackThunks.ts
import http from "@/services/http/baseUrl";
import { RootState } from "@/store/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const registerSlackCredentials = createAsyncThunk(
  "integration/registerSlackCredentials",
  async (
    data: {
      bot_id: number;
      client_id: string;
      client_secret: string;
      signing_secret: string;
    },
    thunkAPI
  ) => {
    try {
      const response = await http.post("/slack/save-credentials", data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.detail || "Failed to save credentials"
      );
    }
  }
);

// Start OAuth flow
export const startSlackOAuth = createAsyncThunk(
  "integration/startSlackOAuth",
  async (
    data: {
      bot_id: number;
      client_id: string;
    },
    thunkAPI
  ) => {
    try {
      const response = await http.get("/slack/oauth/start", {
        params: {
          bot_id: data.bot_id,
          client_id: data.client_id,
        },
      });
      return response.data.oauth_url;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.detail || "Failed to start OAuth"
      );
    }
  }
);

// Get Slack Installations for a Bot
export const getSlackCredentials = createAsyncThunk(
  "integration/getSlackCredentials",
  async (bot_id: string, thunkAPI) => {
    try {
      const response = await http.get(`/slack/installation/${bot_id}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.detail || "Failed to fetch Slack installation"
      );
    }
  }
);

// Update Slack Installation
export const updateSlackCredentials = createAsyncThunk(
  "integration/updateSlackCredentials",
  async (
    data: {
      installation_id: number;
      client_secret?: string;
      signing_secret?: string;
      is_active?: boolean;
    },
    thunkAPI
  ) => {
    try {
      // Encrypt updated secrets if provided
      const updateData: any = {};
      if (data.client_secret) {
        updateData.client_secret = data.client_secret;
      }
      if (data.signing_secret) {
        updateData.signing_secret = data.signing_secret;
      }
      if (data.is_active !== undefined) {
        updateData.is_active = data.is_active;
      }

      const response = await http.put(
        `/slack/installation/${data.installation_id}`,
        updateData
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.detail || "Failed to update Slack installation"
      );
    }
  }
);

// Delete Slack Installation
export const deleteSlackInstallation = createAsyncThunk(
  "integration/deleteSlackInstallation",
  async (installation_id: number, thunkAPI) => {
    try {
      await http.delete(`/slack/installation/${installation_id}`);
      return installation_id;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.detail || "Failed to delete Slack installation"
      );
    }
  }
);

// Verify Slack credentials
export const verifySlackCredentials = createAsyncThunk(
  "integration/verifySlackCredentials",
  async (data: { client_id: string; client_secret: string }, thunkAPI) => {
    try {
      const response = await http.post("/slack/verify-credentials", data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.detail || "Invalid Slack credentials"
      );
    }
  }
);
interface SlackState {
  installation: any;
  activeInstallation: any;
  loading: boolean;
  error: string | null; // Change this
  verification: {
    status: string;
    data: any;
    error: string | null; // Change this too
  };
  events: {
    processing: boolean;
    lastEvent: any;
  };
}
const initialState: SlackState = {
  installation: null,
  activeInstallation: null,
  loading: false,
  error: null,
  verification: {
    status: "idle",
    data: null,
    error: null,
  },
  events: {
    processing: false,
    lastEvent: null,
  },
};

const slackSlice = createSlice({
  name: "slack",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Registration
      .addCase(registerSlackCredentials.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerSlackCredentials.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(registerSlackCredentials.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get installations
      .addCase(getSlackCredentials.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSlackCredentials.fulfilled, (state, action) => {
        state.loading = false;
        state.installation = action.payload;
      })
      .addCase(getSlackCredentials.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update installation
      .addCase(updateSlackCredentials.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSlackCredentials.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updateSlackCredentials.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete installation
      .addCase(deleteSlackInstallation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteSlackInstallation.fulfilled, (state: any, action) => {
        state.loading = false;
      })
      .addCase(deleteSlackInstallation.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Credential verification
      .addCase(verifySlackCredentials.pending, (state: any) => {
        state.verification.status = "loading";
        state.verification.error = null;
      })
      .addCase(verifySlackCredentials.fulfilled, (state: any, action: any) => {
        state.verification.status = "succeeded";
        state.verification.data = action.payload;
      })
      .addCase(verifySlackCredentials.rejected, (state: any, action: any) => {
        state.verification.status = "failed";
        state.verification.error = action.payload;
      });

    // // Event handling
    // .addCase(handleSlackEvent.pending, (state) => {
    //     state.events.processing = true;
    // })
    // .addCase(handleSlackEvent.fulfilled, (state, action) => {
    //     state.events.processing = false;
    //     state.events.lastEvent = {
    //         type: 'event',
    //         data: action.payload,
    //         timestamp: new Date().toISOString()
    //     };
    // })
    // .addCase(handleSlackEvent.rejected, (state, action) => {
    //     state.events.processing = false;
    //     state.error = action.payload;
    // })

    // // Command handling
    // .addCase(handleSlackCommand.pending, (state) => {
    //     state.events.processing = true;
    // })
    // .addCase(handleSlackCommand.fulfilled, (state, action) => {
    //     state.events.processing = false;
    //     state.events.lastEvent = {
    //         type: 'command',
    //         data: action.payload,
    //         timestamp: new Date().toISOString()
    //     };
    // });
  },
});

export default slackSlice.reducer;
