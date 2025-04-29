// promptsSlice.ts
import http from "@/services/http/baseUrl";
import { RootState } from "@/store/store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PromptState {
  promptsByBotId: { [botId: number]: InstructionPrompt[] };
  loading: boolean;
  error: string | null;
  currentBotId: number | null;
}

interface InstructionPrompt {
  id?: number;
  user_id?: number;
  bot_id?: number;
  type: string;
  prompt: string;
  created_at?: string;
  updated_at?: string;
}

interface BotInstructionPrompts {
  bot_id: number;
  prompts: InstructionPrompt[];
}

const initialState: PromptState = {
  promptsByBotId: {},
  loading: false,
  error: null,
  currentBotId: null,
};

// Thunks
export const fetchBotPrompts = createAsyncThunk(
  "prompts/fetchBotPrompts",
  async (botId: number, { rejectWithValue }) => {
    try {
      const response = await http.get<BotInstructionPrompts>(
        `/tuning/bots/${botId}/prompts`
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch prompts"
      );
    }
  }
);

export const createPrompt = createAsyncThunk(
  "prompts/createPrompt",
  async (
    data: { bot_id: number; prompts: Omit<InstructionPrompt, "id">[] },
    { rejectWithValue }
  ) => {
    try {
      const response = await http.post<InstructionPrompt>(
        "/tuning/prompts",
        data
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create prompt"
      );
    }
  }
);

export const deletePrompt = createAsyncThunk(
  "prompts/deletePrompt",
  async (promptId: number, { rejectWithValue }) => {
    try {
      await http.delete(`/tuning/prompts/${promptId}`);
      return promptId;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete prompt"
      );
    }
  }
);

const promptsSlice = createSlice({
  name: "prompts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Prompts
      .addCase(fetchBotPrompts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBotPrompts.fulfilled, (state, action) => {
        state.loading = false;
        state.promptsByBotId[action.payload.bot_id] = action.payload.prompts;
      })
      .addCase(fetchBotPrompts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Create Prompt
      .addCase(createPrompt.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPrompt.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.bot_id) {
          state.promptsByBotId[action.payload.bot_id] = [
            ...(state.promptsByBotId[action.payload.bot_id] || []),
            action.payload,
          ];
        }
      })
      .addCase(createPrompt.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Delete Prompt
      .addCase(deletePrompt.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePrompt.fulfilled, (state, action) => {
        state.loading = false;
        if (state.currentBotId) {
          state.promptsByBotId[state.currentBotId] = state.promptsByBotId[
            state.currentBotId
          ].filter((prompt) => prompt.id !== action.payload);
        }
      })
      .addCase(deletePrompt.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default promptsSlice.reducer;
