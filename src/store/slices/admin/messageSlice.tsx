// src/redux/slices/messageSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import http from '@/services/http/baseUrl';

// Define types with more specific naming
interface TimePeriodItem {
  label: string;
  totalMessages: number;
}

interface MessageStatistics {
  monthly: TimePeriodItem[];
  weekly: TimePeriodItem[];
  last10Days: TimePeriodItem[];
}

interface MessageState {
  stats: MessageStatistics;
  loading: boolean;
  error: string | null;
  lastFetched: number | null; // Add timestamp of last fetch
}

const initialState: MessageState = {
  stats: {
    monthly: [],
    weekly: [],
    last10Days: []
  },
  loading: false,
  error: null,
  lastFetched: null
};

// More robust error handling
export const fetchMessageStats = createAsyncThunk<
  MessageStatistics,
  void,
  { rejectValue: string }
>('messages/fetchMessageStats', async (_, { rejectWithValue }) => {
  try {
    const response = await http.get('admin/total-messages');

    // Validate response structure
    if (!response.data?.data) {
      throw new Error('Invalid response structure');
    }

    const { monthly, weekly, last_10_days } = response.data.data;

    // Transform data with better type safety
    const transformData = (items: any[], labelKey: string): TimePeriodItem[] => {
      return items.map(item => ({
        label: item[labelKey],
        totalMessages: item.totalMessages
      }));
    };

    return {
      monthly: transformData(monthly, 'month'),
      weekly: transformData(weekly, 'week'),
      last10Days: transformData(last_10_days, 'date')
    };

  } catch (err: any) {
    console.log('Failed to fetch message stats:', err);
    return rejectWithValue(
      err.response?.data?.detail ||
      err.message ||
      'Failed to fetch message statistics'
    );
  }
});

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    // Optional: Add a reset action if needed
    resetMessageStats: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessageStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMessageStats.fulfilled, (state, action: PayloadAction<MessageStatistics>) => {
        state.loading = false;
        state.stats = action.payload;
        state.lastFetched = Date.now(); // Track when data was last fetched
      })
      .addCase(fetchMessageStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Unknown error occurred';
        state.lastFetched = null;
      });
  },
});

export default messageSlice.reducer;