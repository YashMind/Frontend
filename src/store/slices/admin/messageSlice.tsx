// src/redux/slices/messageSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import http from '@/services/http/baseUrl'; // or axios if you prefer

// Define the state types
type MessageState = {
  total: number | null;
  loading: boolean;
  error: string | null;
};

// Initial state
const initialState: MessageState = {
  total: null,
  loading: false,
  error: null,
};

// Async thunk to fetch total messages
export const fetchTotalMessages = createAsyncThunk<
  number,
  void,
  { rejectValue: string }
>('messages/fetchTotalMessages', async (_, { rejectWithValue }) => {
  try {
    const response = await http.get('admin/total-messages'); // adjust URL
    return response.data.total_messages; // assuming API returns { total_messages: number }
  } catch (err: any) {
    console.error(err);
    return rejectWithValue(err.response?.data?.detail || 'Failed to fetch total messages');
  }
});

// Slice
const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTotalMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTotalMessages.fulfilled, (state, action: PayloadAction<number>) => {
        state.loading = false;
        state.total = action.payload;
      })
      .addCase(fetchTotalMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Unknown error';
      });
  },
});

export default messageSlice.reducer;
