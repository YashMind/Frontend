// src/redux/slices/messageSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import http from '@/services/http/baseUrl'; // axios or your configured http instance

// Define the state types
type MessageState = {
  total: { month: string; totalMessages: number }[]; // array of month objects
  loading: boolean;
  error: string | null;
};

// Initial state
const initialState: MessageState = {
  total: [],
  loading: false,
  error: null,
};

// Async thunk to fetch total messages
export const fetchTotalMessages = createAsyncThunk<
  { month: string; totalMessages: number }[],
  void,
  { rejectValue: string }
>('messages/fetchTotalMessages', async (_, { rejectWithValue }) => {
  try {
    const response = await http.get('admin/total-messages'); // adjust URL if needed
    return response.data.data; // backend returns { status: "success", data: [...] }
  } catch (err: any) {
    console.error(err);
    return rejectWithValue(err.response?.data?.detail || 'Failed to fetch total messages');
  }
});

// Slice
const messageSlice = createSlice({
  name: 'messages', // keep this name as you imported in store
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTotalMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchTotalMessages.fulfilled,
        (state, action: PayloadAction<{ month: string; totalMessages: number }[]>) => {
          state.loading = false;
          state.total = action.payload;
        }
      )
      .addCase(fetchTotalMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Unknown error';
      });
  },
});

export default messageSlice.reducer;
