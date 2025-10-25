import http from "@/services/http/baseUrl";
import { ChatbotSettings } from "@/types/chatTypes";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface ChatbotSettingsState {
  settings: ChatbotSettings | null;
  loading: boolean;
  error: string | null;
}

const initialState: ChatbotSettingsState = {
  settings: null,
  loading: false,
  error: null,
};

// Thunks
export const fetchChatbotSettings = createAsyncThunk(
  "chatbotSettings/fetch",
  async (botId: number, { rejectWithValue }) => {
    try {
      const res = await http.get(`/appearance/settings/${botId}`);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.detail);
    }
  }
);

export const createChatbotSettings = createAsyncThunk(
  "chatbotSettings/create",
  async (
    data: { id: number; data: Partial<ChatbotSettings> },
    { rejectWithValue }
  ) => {
    try {
      const res = await http.post(`/appearance/settings/`, data.data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.detail);
    }
  }
);

export const updateChatbotSettings = createAsyncThunk(
  "chatbotSettings/update",
  async (
    { id, data }: { id: number; data: Partial<ChatbotSettings> },
    { rejectWithValue }
  ) => {
    try {
      const res = await http.put(`/appearance/settings/${id}`, data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.detail);
    }
  }
);

export const deleteChatbotSettings = createAsyncThunk(
  "chatbotSettings/delete",
  async (id: number, { rejectWithValue }) => {
    try {
      const res = await http.delete(`/appearance/settings/${id}`);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.detail);
    }
  }
);

// Slice
const chatbotSettingsSlice = createSlice({
  name: "chatbotSettings",
  initialState,
  reducers: {
    resetSettings(state) {
      state.settings = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchChatbotSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchChatbotSettings.fulfilled,
        (state, action: PayloadAction<ChatbotSettings>) => {
          state.loading = false;
          state.settings = action.payload;
        }
      )
      .addCase(fetchChatbotSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.settings = null;
      })

      // Create
      .addCase(createChatbotSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        createChatbotSettings.fulfilled,
        (state, action: PayloadAction<ChatbotSettings>) => {
          state.loading = false;
          state.settings = action.payload;
        }
      )
      .addCase(createChatbotSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Update
      .addCase(updateChatbotSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateChatbotSettings.fulfilled,
        (state, action: PayloadAction<ChatbotSettings>) => {
          state.loading = false;
          state.settings = action.payload;
        }
      )
      .addCase(updateChatbotSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Delete
      .addCase(deleteChatbotSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteChatbotSettings.fulfilled, (state) => {
        state.loading = false;
        state.settings = null;
      })
      .addCase(deleteChatbotSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default chatbotSettingsSlice.reducer;
