import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/services/http/baseUrl";
import {
  startLoadingActivity,
  stopLoadingActivity,
} from "../activity/activitySlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import SubscriptionPlans from "@/components/Admin/SubscriptionPlans/subscriptionPlans";

export const getAllUsers = createAsyncThunk<
  any,
  {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: string;
  }
>(
  "admin/getAllUsers",
  async (
    { page, limit, search, sortBy, sortOrder },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(startLoadingActivity());
      const params = {
        search: search,
        page: page?.toString(),
        limit: limit?.toString(),
        sort_by: sortBy,
        sort_order: sortOrder,
      };
      const response = await http.get("/admin/get-all-users", {
        params,
      });
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        return response.data;
      } else {
        return rejectWithValue("failed to get chats!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during fetching chats");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const updateUserByAdmin = createAsyncThunk<
  any,
  {
    payload: any;
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: string;
  }
>(
  "admin/updateUserByAdmin",
  async (
    { payload, page, limit, search, sortBy, sortOrder },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.put("/admin/update-user-admin", payload);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toast.success("user updated successfully!");
        dispatch(
          getAllUsers({
            page,
            limit,
            search,
            sortBy,
            sortOrder,
          })
        );
        return response.data;
      } else {
        return rejectWithValue("failed to create chatbot!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during chatbot");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getAllSubscriptionPlans = createAsyncThunk<
  any,
  {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: string;
  }
>(
  "admin/getAllSubscriptionPlans",
  async (
    { page, limit, search, sortBy, sortOrder },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(startLoadingActivity());
      const params = {
        search: search,
        page: page?.toString(),
        limit: limit?.toString(),
        sort_by: sortBy,
        sort_order: sortOrder,
      };
      const response = await http.get("/admin/get-all-subscription-plans", {
        params,
      });
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        return response.data;
      } else {
        return rejectWithValue("failed to get chats!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during fetching chats");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const createSubscriptionPlan = createAsyncThunk<any, { payload: any }>(
  "admin/createSubscriptionPlan",
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.post(
        "/admin/create-subscription-plans",
        payload
      );
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toast.success("Plan created successfully!");
        dispatch(
          getAllSubscriptionPlans({
            page: 1,
            limit: 10,
          })
        );
        return response.data;
      } else {
        return rejectWithValue("failed to create chatbot!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during chatbot");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const deleteSubscriptionsPlan = createAsyncThunk<
  any,
  { plan_id?: number }
>(
  "admin/deleteSubscriptioPlans",
  async ({ plan_id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response: any = await http.delete(
        `/admin/delete-subscription-plan/${plan_id}`
      );
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        dispatch(
          getAllSubscriptionPlans({
            page: 1,
            limit: 10,
          })
        );
        toast.success("Plan deleted successfully!");
        return response.data;
      } else {
        return rejectWithValue("failed to get chats!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during fetching chats");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getAllTokenBots = createAsyncThunk<
  any,
  {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: string;
  }
>(
  "admin/getAllTokenBots",
  async (
    { page, limit, search, sortBy, sortOrder },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(startLoadingActivity());
      const params = {
        search: search,
        page: page?.toString(),
        limit: limit?.toString(),
        sort_by: sortBy,
        sort_order: sortOrder,
      };
      const response = await http.get("/admin/get-all-token-bots", {
        params,
      });
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        return response.data;
      } else {
        return rejectWithValue("failed to get token bots!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during fetching chats");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const createTokenBots = createAsyncThunk<any, { payload: any }>(
  "admin/createTokenBots",
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.post("/admin/create-token-bots", payload);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toast.success("Token created successfully!");
        dispatch(
          getAllTokenBots({
            page: 1,
            limit: 10,
          })
        );
        return response.data;
      } else {
        return rejectWithValue("failed to create chatbot!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during chatbot");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const deleteTokenBots = createAsyncThunk<any, { token_bot_id?: number }>(
  "admin/deleteTokenBots",
  async ({ token_bot_id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response: any = await http.delete(
        `/admin/delete-token-bot/${token_bot_id}`
      );
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        dispatch(
          getAllTokenBots({
            page: 1,
            limit: 10,
          })
        );
        toast.success("Token bot deleted successfully!");
        return response.data;
      } else {
        return rejectWithValue("failed to get chats!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during fetching chats");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getTopConsumptionUsers = createAsyncThunk<any, void>(
  "admin/getTopConsumptionUsers",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.get("/admin/get-top-consumption-users");
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        return response.data;
      } else {
        return rejectWithValue("failed to get token bots!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during fetching chats");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const updateBotToken = createAsyncThunk<any, { payload: any }>(
  "admin/updateBotToken",
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.put("/admin/update-bot-token", payload);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toast.success("chatbot updated successfully!");
        dispatch(
          getAllTokenBots({
            page: 1,
            limit: 10,
          })
        );
        return response.data;
      } else {
        return rejectWithValue("failed to create chatbot!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during chatbot");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getAllBotProducts = createAsyncThunk<
  any,
  {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: string;
  }
>(
  "admin/getAllBotProducts",
  async (
    { page, limit, search, sortBy, sortOrder },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(startLoadingActivity());
      const params = {
        search: search,
        page: page?.toString(),
        limit: limit?.toString(),
        sort_by: sortBy,
        sort_order: sortOrder,
      };
      const response = await http.get("/admin/get-bot-products", {
        params,
      });
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        return response.data;
      } else {
        return rejectWithValue("failed to get chats!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during fetching chats");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const createUpdateBotProduct = createAsyncThunk<any, { payload: any }>(
  "admin/createUpdateBotProduct",
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.post(
        "/admin/create-update-bot-product",
        payload
      );
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toast.success(
          `Product ${payload.id ? "updated" : "created"} successfully!`
        );
        dispatch(
          getAllBotProducts({
            page: 1,
            limit: 10,
          })
        );
        return response.data;
      } else {
        return rejectWithValue("failed to create chatbot!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during chatbot");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

const initialState = {
  loading: false,
  data: [],
  allUsersData: {} as AdminAllUsers,
  subscriptionPlansData: {} as SubscriptionPlansData,
  tokenBotsData: {} as TokenBotsData,
  topTokenUsersData: [] as UserProfileData[],
  productMonitoringData: {} as ProductMonitoringData,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.allUsersData = action?.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(getAllSubscriptionPlans.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllSubscriptionPlans.fulfilled, (state, action) => {
        state.loading = false;
        state.subscriptionPlansData = action?.payload;
      })
      .addCase(getAllSubscriptionPlans.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(getAllTokenBots.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTokenBots.fulfilled, (state, action) => {
        state.loading = false;
        state.tokenBotsData = action?.payload;
      })
      .addCase(getAllTokenBots.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(getTopConsumptionUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTopConsumptionUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.topTokenUsersData = action?.payload;
      })
      .addCase(getTopConsumptionUsers.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(getAllBotProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBotProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productMonitoringData = action?.payload;
      })
      .addCase(getAllBotProducts.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default adminSlice.reducer;
