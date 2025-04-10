import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const startLoadingActivity: any = createAsyncThunk(
  "activity/startLoadingActivity",
  async () => {}
);

export const stopLoadingActivity: any = createAsyncThunk(
  "activity/stopLoadingActivity",
  async () => {}
);

export const activitySlice = createSlice({
  name: "activity",
  initialState: {
    loading: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(startLoadingActivity.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(startLoadingActivity.fulfilled, (state, _action) => {
        state.loading = true;
      })
      .addCase(startLoadingActivity.rejected, (state, _action) => {
        state.loading = false;
      })

      .addCase(stopLoadingActivity.pending, (state, _action) => {
        state.loading = false;
      })
      .addCase(stopLoadingActivity.fulfilled, (state, _action) => {
        state.loading = false;
      })
      .addCase(stopLoadingActivity.rejected, (state, _action) => {
        state.loading = false;
      });
  },
});

export default activitySlice.reducer;
