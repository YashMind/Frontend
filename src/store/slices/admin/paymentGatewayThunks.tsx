import { createAsyncThunk } from "@reduxjs/toolkit";
import { startLoadingActivity, stopLoadingActivity } from "../activity/activitySlice";
import { toasterError, toasterSuccess } from "@/services/utils/toaster";
import http from "@/services/http/baseUrl";

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
                toasterSuccess(
                    `Payment ${payload?.id ? "updated" : "added"} successfully!`
                );
                return response.data;
            } else {
                return rejectWithValue("failed to create chatbot!");
            }
        } catch (error: any) {
            if (error.response && error.response.status === 400) {
                toasterError(error?.response?.data?.detail);
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
                toasterError(error?.response?.data?.detail);
                return rejectWithValue(error.response.data.message);
            }
            return rejectWithValue("An error occurred during fetching chats");
        } finally {
            dispatch(stopLoadingActivity());
        }
    }
);