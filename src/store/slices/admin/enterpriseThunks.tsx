import { createAsyncThunk } from "@reduxjs/toolkit";
import { startLoadingActivity, stopLoadingActivity } from "../activity/activitySlice";
import { toasterError } from "@/services/utils/toaster";
import http from "@/services/http/baseUrl";

export const getEnterpriseUsers = createAsyncThunk<
    any,
    {
        page?: number;
        limit?: number;
        search?: string;
    }
>(
    "admin/getEnterpriseUsers",
    async ({ page = 1, limit = 10, search = "" }, { dispatch, rejectWithValue }) => {
        try {
            dispatch(startLoadingActivity());

            const params = new URLSearchParams();
            params.append("page", page.toString());
            params.append("limit", limit.toString());
            if (search) params.append("search", search);

            const response = await http.get(`/admin/enterprise/users?${params.toString()}`);

            if (response.status === 200) {
                dispatch(stopLoadingActivity());
                return response.data;
            } else {
                return rejectWithValue("Failed to fetch enterprise users!");
            }
        } catch (error: any) {
            if (error.response && error.response.status === 400) {
                toasterError(error?.response?.data?.detail);
                return rejectWithValue(error.response.data.message);
            }
            return rejectWithValue("An error occurred while fetching enterprise users");
        } finally {
            dispatch(stopLoadingActivity());
        }
    }
);
