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
      console.log("response ", response);
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

const initialState = {
  loading: false,
  data: [],
  allUsersData: {} as AdminAllUsers,
  subscriptionPlansData: {} as SubscriptionPlansData,
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
      });
  },
});

export default adminSlice.reducer;
