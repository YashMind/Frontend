import { toasterError, toasterSuccess } from "@/services/utils/toaster";
import { startLoadingActivity, stopLoadingActivity } from "../activity/activitySlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/services/http/baseUrl";

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
                toasterError(error?.response?.data?.detail, 10000, "id");
                return rejectWithValue(error.response.data.message);
            }
            return rejectWithValue("An error occurred while fetching subscription plans.");
        } finally {
            dispatch(stopLoadingActivity());
        }
    }
);

export const getPublicSubscriptionPlans = createAsyncThunk<any, void>(
    "admin/getPublicSubscriptionPlans",
    async (_, { dispatch, rejectWithValue }) => {
        try {
            dispatch(startLoadingActivity());

            const response = await http.get("/admin/subscription-plans/public");
            if (response.status === 200) {
                dispatch(stopLoadingActivity());
                return response.data.data;
            } else {
                return rejectWithValue("Failed to fetch subscription plans!");
            }
        } catch (error: any) {
            if (error.response && error.response.status === 400) {
                toasterError(error?.response?.data?.detail, 10000, "id");
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
                toasterSuccess("Plan created successfully!", 10000, "id")
                dispatch(
                    getAllSubscriptionPlans()
                );
                return response.data;
            } else {
                return rejectWithValue("failed to create chatbot!");
            }
        } catch (error: any) {
            if (error.response && error.response.status === 400) {
                toasterError(error?.response?.data?.detail, 10000, "id")
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
            toasterSuccess(response.data.message, 10000, "id");
            dispatch(getAllSubscriptionPlans());
            return response.data;
        }
    } catch (error: any) {
        toasterError(error?.response?.data?.detail || "Failed to update status", 10000, "id");
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
                toasterSuccess("Plan deleted successfully!", 10000, "id")
                return response.data;
            } else {
                return rejectWithValue("failed to get chats!");
            }
        } catch (error: any) {
            if (error.response && error.response.status === 400) {
                toasterError(error?.response?.data?.detail, 10000, "id")
                return rejectWithValue(error.response.data.message);
            }
            return rejectWithValue("An error occurred during fetching chats");
        } finally {
            dispatch(stopLoadingActivity());
        }
    }
);

export const getSubscriptionPlan = createAsyncThunk<
    any
>(
    "admin/getSubscriptionPlan",
    async (_, { dispatch, rejectWithValue }) => {
        try {
            dispatch(startLoadingActivity());

            const response: any = await http.get(
                `/admin/get-subscription-plan`
            );

            if (response.status === 200) {
                dispatch(stopLoadingActivity());
                return response.data;
            } else {
                return rejectWithValue("Failed to fetch subscription plan!");
            }
        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                return rejectWithValue(error.response.data.detail);
            } else if (error.response && error.response.data?.detail) {
                toasterError(error.response.data.detail, 10000, "id");
                return rejectWithValue(error.response.data.detail);
            } else {
                toasterError("An unexpected error occurred!", 10000, "id");
                return rejectWithValue("An unexpected error occurred");
            }
        } finally {
            dispatch(stopLoadingActivity());
        }
    }
);