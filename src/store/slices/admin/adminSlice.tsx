import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/services/http/baseUrl";
import {
  startLoadingActivity,
  stopLoadingActivity,
} from "../activity/activitySlice";
import toast from "react-hot-toast";
import { toasterError, toasterSuccess } from "@/services/utils/toaster";

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
        toasterError(error?.response?.data?.detail, 2000, "id")
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during fetching chats");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getAllSubscriptionPlans = createAsyncThunk<any, void>(
  "admin/getAllSubscriptionPlans",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());

      const response = await http.get("/admin/subscription-plans");

      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        return response.data;
      } else {
        return rejectWithValue("Failed to fetch subscription plans!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toasterError(error?.response?.data?.detail, 2000, "id");
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred while fetching subscription plans.");
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
        toasterSuccess("Plan created successfully!", 2000, "id")
        dispatch(
          getAllSubscriptionPlans()
        );
        return response.data;
      } else {
        return rejectWithValue("failed to create chatbot!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toasterError(error?.response?.data?.detail, 2000, "id")
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during chatbot");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);


export const toggleSubscriptionPlanStatus = createAsyncThunk<
  any,
  { plan_id: number; is_active: boolean }
>("admin/toggleSubscriptionPlanStatus", async ({ plan_id, is_active }, { dispatch, rejectWithValue }) => {
  try {
    const response = await http.post(`/admin/subscription-plans/${plan_id}/status`, {
      is_active,
    });

    if (response.status === 200) {
      toasterSuccess(response.data.message, 2000, "id");
      dispatch(getAllSubscriptionPlans());
      return response.data;
    }
  } catch (error: any) {
    toasterError(error?.response?.data?.detail || "Failed to update status", 2000, "id");
    return rejectWithValue(error.response?.data);
  }
});



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
          getAllSubscriptionPlans()
        );
        toasterSuccess("Plan deleted successfully!", 2000, "id")
        return response.data;
      } else {
        return rejectWithValue("failed to get chats!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toasterError(error?.response?.data?.detail, 2000, "id")
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
    { },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.get("/admin/tools", {});
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        return response.data;
      } else {
        return rejectWithValue("failed to get token bots!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toasterError(error?.response?.data?.detail, 2000, "id")
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
        toasterSuccess("Token created successfully!", 2000, "id")
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
        toasterError(error?.response?.data?.detail, 2000, "id")
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
        toasterSuccess("Token bot deleted successfully!", 2000, "id")
        return response.data;
      } else {
        return rejectWithValue("failed to get chats!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toasterError(error?.response?.data?.detail, 2000, "id")
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
        toasterError(error?.response?.data?.detail, 2000, "id")
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during fetching chats");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getAdminUsers = createAsyncThunk<any, void>(
  "admin/getAdminUsers",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.get("/admin/get-admin-users");
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

export const getClientUsers = createAsyncThunk<any, void>(
  "admin/getClientUsers",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.get("/admin/get-client-users");
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

export const getAdminsLogsActivity = createAsyncThunk<
  AdminLogsActivity[],
  { date_filter?: any }
>(
  "admin/getAdminsLogsActivity",
  async ({ date_filter = "" }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.get(
        `/activity/activity-logs?start_date=${date_filter ?? ""}`
      );
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

export const getClientLogsActivity = createAsyncThunk<
  any,
  { date_filter: any }
>(
  "admin/getClientLogsActivity",
  async ({ date_filter }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.get(
        `/admin/get-client-logs-activity?date_filter=${date_filter ?? ""}`
      );
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
        dispatch(getAdminUsers());
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

export const updateClientByAdmin = createAsyncThunk<
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
  "admin/updateClientByAdmin",
  async (
    { payload, page, limit, search, sortBy, sortOrder },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.put("/admin/update-client-admin", payload);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toasterSuccess("Client updated successfully!", 2000, "id");
        dispatch(
          getAllUsers({
            page,
            limit,
            search,
            sortBy,
            sortOrder,
          })
        );
        dispatch(getClientUsers());
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

export const updateTools = createAsyncThunk<any, { id: number; status: string }>(
  "admin/updateBotToken",
  async ({ id, status }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.put(`/admin/tool/${id}/status`, { status });
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toasterSuccess("Tools Status updated successfully!", 2000, "id")
        dispatch(
          getAllTokenBots({})
        );
        return response.data;
      } else {
        return rejectWithValue("failed to create chatbot!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toasterError(error?.response?.data?.detail, 2000, "id")
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during chatbot");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);


export const updateBotProductStatus = createAsyncThunk<
  any,
  { id: number; status: string }
>(
  "admin/updateBotProductStatus",
  async ({ id, status }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.put(`/admin/products/${id}/status`, { status });

      if (response.status === 200) {
        toasterSuccess(`Product status updated successfully!`, 2000, "id");
        dispatch(
          getAllBotProducts({})
        );
        return response.data;
      } else {
        return rejectWithValue("Failed to update product status!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toasterError(error.response.data.detail, 2000, "id");
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred while updating product status");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getAllBotProducts = createAsyncThunk<any, {}>(
  "admin/getAllBotProducts",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());

      const response = await http.get("/admin/products");

      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        return response.data;
      } else {
        return rejectWithValue("failed to get products!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toasterError(error?.response?.data?.detail, 2000, "id");
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during fetching products");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const updateRoleAdmin = createAsyncThunk<any, { payload: any }>(
  "auth/updateRoleAdmin",
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.post("/admin/assign", payload);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        dispatch(getMyPermissions());
        toast.success("Permissions updated successfully!");
        return response.data;
      } else {
        return rejectWithValue("Profile update failed");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during profile update");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const updateAdminUser = createAsyncThunk<any, { payload: any }>(
  "auth/updateAdminUser",
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.put("/admin/update-admin-user", payload);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        dispatch(getAdminUsers());
        toast.success("User updated successfully!");
        return response.data;
      } else {
        return rejectWithValue("Profile update failed");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during profile update");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getRolePermissions = createAsyncThunk<any, string>(
  "auth/getRolePermissions",
  async (role, { rejectWithValue }) => {
    try {
      const response = await http.get(`/admin/get?role=${encodeURIComponent(role)}`);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        toast.error("Role not found");
        return rejectWithValue("Role not found");
      }
      toast.error("Failed to fetch role permissions");
      return rejectWithValue("Error fetching role permissions");
    }
  }
);

export const updateClientUser = createAsyncThunk<any, { payload: any }>(
  "auth/updateAdminUser",
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.put("/admin/update-client-user", payload);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        dispatch(getClientUsers());
        toast.success("Client updated successfully!");
        return response.data;
      } else {
        return rejectWithValue("Profile update failed");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during profile update");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const deleteAdminUser = createAsyncThunk<any, { id?: any }>(
  "admin/deleteAdminUser",
  async ({ id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response: any = await http.delete(`/admin/delete-admin-user/${id}`);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        dispatch(getAdminUsers());
        toast.success("User deleted successfully!");
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

export const deleteClientUser = createAsyncThunk<any, { id?: number }>(
  "admin/deleteClientUser",
  async ({ id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response: any = await http.delete(`/admin/delete-client-user/${id}`);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        dispatch(getClientUsers());
        toast.success("User deleted successfully!");
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

export const AddUpdatePaymentGateway = createAsyncThunk<
  any,
  {
    payload: any;
  }
>(
  "admin/AddUpdatePaymentGateway",
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.post(
        "/admin/create-update-payment-gateway",
        payload
      );
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        dispatch(getAllPaymentGateway());
        toast.success(
          `Payment ${payload?.id ? "updated" : "added"} successfully!`
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

export const getAllPaymentGateway = createAsyncThunk<any>(
  "admin/getAllPaymentGateway",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.get("/admin/get-payments-gateway");
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

export const deletePaymentsGateway = createAsyncThunk<any, { id?: number }>(
  "admin/deletePaymentsGateway",
  async ({ id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response: any = await http.delete(
        `/admin/delete-payments-gateway/${id}`
      );
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        dispatch(getAllPaymentGateway());
        toast.success("Payment deleted successfully!");
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

export const getMyPermissions = createAsyncThunk<any, void>(
  "admin/rolesPermissions",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());

      const response = await http.get("/admin/roles_permissions");

      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        return response.data;
      } else {
        return rejectWithValue("Failed to fetch roles and permissions!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toasterError(error?.response?.data?.detail, 2000, "id");
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred while fetching roles and permissions");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

const initialState = {
  loading: false,
  data: [],
  myPermissions: [] as string[],
  permissionsLoading: false,
  allUsersData: {} as AdminAllUsers,
  subscriptionPlansData: {} as SubscriptionPlansData,
  tokenBotsData: {} as TokenBotsData,
  topTokenUsersData: [] as UserProfileData[],
  productMonitoringData: {} as ProductMonitoringData,
  adminUsers: [] as AdminUsersData[],
  clientUsers: [] as ClientUsersData[],
  adminsLogsActivityData: {} as AdminLogsActivity[],
  clientLogsActivityData: {} as ClientLogsActivity,
  paymentGatewayData: [] as PaymentsGateway[],
  rolePermissions: [] as RolePermissions[]
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
      })

      .addCase(getAdminUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAdminUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.adminUsers = action?.payload;
      })
      .addCase(getAdminUsers.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(getClientUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getClientUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.clientUsers = action?.payload;
      })
      .addCase(getClientUsers.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(getRolePermissions.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getRolePermissions.fulfilled, (state, action) => {
        state.loading = false;
        state.rolePermissions = action?.payload;
      })

      .addCase(getAdminsLogsActivity.pending, (state) => {
        state.loading = true;
      })
      .addCase(getClientLogsActivity.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAdminsLogsActivity.fulfilled, (state, action) => {
        state.loading = false;
        state.adminsLogsActivityData = action?.payload;
      })
      .addCase(getClientLogsActivity.fulfilled, (state, action) => {
        state.loading = false;
        state.clientLogsActivityData = action?.payload;
      })
      .addCase(getAdminsLogsActivity.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(getAllPaymentGateway.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPaymentGateway.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentGatewayData = action?.payload;
      })
      .addCase(getAllPaymentGateway.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getMyPermissions.pending, (state) => {
        state.permissionsLoading = true;
      })
      .addCase(getMyPermissions.fulfilled, (state, action) => {
        state.permissionsLoading = false;
        state.myPermissions = action?.payload.permissions;
      })
      .addCase(getMyPermissions.rejected, (state) => {
        state.permissionsLoading = false;
      });
  },
});

export default adminSlice.reducer;
