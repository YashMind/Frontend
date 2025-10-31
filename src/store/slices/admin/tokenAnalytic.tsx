// src/redux/slices/tokenCreditSlice.ts

import http from '@/services/http/baseUrl';
import { AdminTokenCreditReport, AdminTransactionsType, UserCreditsAndTokenUsageResponse } from '@/types/adminType';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type TokenCreditState = {
    user: {
        data: UserCreditsAndTokenUsageResponse | null;
        loading: boolean;
        error: string | null;
    };
    admin: {
        data: AdminTokenCreditReport | null;
        loading: boolean;
        error: string | null;
    };
    transactions: {
        data: AdminTransactionsType | null;
        loading: boolean;
        error: string | null;
    };
    usersByPlan: {
        data: UserPlanData[];
        loading: boolean;
        error: string | null;
    };
};

const initialState: TokenCreditState = {
    user: {
        data: null,
        loading: false,
        error: null,
    },
    admin: {
        data: null,
        loading: false,
        error: null,
    },
    transactions: {
        data: null,
        loading: false,
        error: null,
    },
    usersByPlan: {
        data: [],
        loading: false,
        error: null,
    },

};

type UserPlanData = {
    plan: string;
    user_count: number;
};

type Params = {
    filter?: 'daily' | 'monthly' | 'yearly';
};

export const fetchUserCreditsAndTokens = createAsyncThunk<
    UserCreditsAndTokenUsageResponse,
    void,
    { rejectValue: string }
>('tokenCredit/fetchUserCreditsAndTokens', async (_, { rejectWithValue }) => {
    try {
        const response = await http.get('/admin/user-credits');
        return response.data;
    } catch (err: any) {
        return rejectWithValue(err.response?.data?.detail || 'Failed to fetch user credits');
    }
});

export const fetchAdminTokenCreditReport = createAsyncThunk<
    AdminTokenCreditReport,
    { page?: number; perPage?: number },
    { rejectValue: string }
>('tokenCredit/fetchAdminTokenCreditReport', async ({ page = 1, perPage = 100 }, { rejectWithValue }) => {
    try {
        const response = await http.get(`/admin/token-credit-report?page=${page}&per_page=${perPage}`);
        console.log('API Response:', response.data);

        return response.data;
    } catch (err: any) {
        return rejectWithValue(err.response?.data?.detail || 'Failed to fetch admin token report');
    }
});

export const fetchAdminTransactions = createAsyncThunk<
    AdminTransactionsType,
    { page?: number; perPage?: number; groupBy?: string },
    { rejectValue: string }
>('tokenCredit/fetchAdminTransactions', async ({ page = 1, perPage = 100, groupBy = 'monthly' }, { rejectWithValue }) => {
    console.log("thunk started")
    try {
        console.log("make api call")
        let url = `/admin/transactions?page=${page}&per_page=${perPage}`;
        if (groupBy) {
            url += `&group_by=${groupBy}`;
        }

        const response = await http.get(url);
        console.log("response", response)
        return response.data;
    }

    catch (err: any) {
        console.log("error occur", err)
        return rejectWithValue(err.response?.data?.detail || 'Failed to fetch admin token report');
    }
}
);
export const fetchUsersByPlan = createAsyncThunk<
    UserPlanData[],
    Params,
    { rejectValue: string }
>(
    'users/fetchUsersByPlan',
    async ({ filter = '' }, { rejectWithValue }) => {
        try {
            let url = '/admin/usersPlans';
            if (filter) {
                url += `?filter=${filter}`;
            }

            const response = await http.get(url);
            console.log("Complete API response:", response);
            console.log("Response data:", response.data);

            // Try different possible response structures
            return response.data.data || response.data || [];
        } catch (err: any) {
            console.log('Error in fetchUsersByPlan thunk:', err);
            return rejectWithValue(
                err.response?.data?.detail || 'Failed to fetch users by plan'
            );
        }
    }
);

const tokenCreditSlice = createSlice({
    name: 'tokenCredit',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // User
            .addCase(fetchUserCreditsAndTokens.pending, (state) => {
                state.user.loading = true;
                state.user.error = null;
            })
            .addCase(fetchUserCreditsAndTokens.fulfilled, (state, action: PayloadAction<UserCreditsAndTokenUsageResponse>) => {
                state.user.loading = false;
                state.user.data = action.payload;

            })
            .addCase(fetchUserCreditsAndTokens.rejected, (state, action) => {
                state.user.loading = false;
                state.user.error = action.payload || 'Unknown error';
            })

            // Admin
            .addCase(fetchAdminTokenCreditReport.pending, (state) => {
                state.admin.loading = true;
                state.admin.error = null;
            })
            .addCase(fetchAdminTokenCreditReport.fulfilled, (state, action: PayloadAction<AdminTokenCreditReport>) => {
                state.admin.loading = false;
                state.admin.data = action.payload;
            })
            .addCase(fetchAdminTokenCreditReport.rejected, (state, action) => {
                state.admin.loading = false;
                state.admin.error = action.payload || 'Unknown error';
            })

            .addCase(fetchAdminTransactions.pending, (state) => {
                state.transactions.loading = true;
                state.transactions.error = null;
            })
            .addCase(fetchAdminTransactions.fulfilled, (state, action: PayloadAction<AdminTransactionsType>) => {
                state.transactions.loading = false;
                state.transactions.data = action.payload;
                // console.log("aaaaaaaaaaaaaaaaaaa",state.transactions.data)
            })
            .addCase(fetchAdminTransactions.rejected, (state, action) => {
                state.transactions.loading = false;
                state.transactions.error = action.payload || 'Unknown error';
            })
            .addCase(fetchUsersByPlan.pending, (state) => {
                state.usersByPlan.loading = true;
                state.usersByPlan.error = null;
            })
            .addCase(fetchUsersByPlan.fulfilled, (state, action) => {
                state.usersByPlan.loading = false;
                state.usersByPlan.data = action.payload;
                console.log("-----", action.payload)
            })
            .addCase(fetchUsersByPlan.rejected, (state, action) => {
                state.usersByPlan.loading = false;
                state.usersByPlan.error = action.payload || 'Unknown error';
            });
    },
});

export default tokenCreditSlice.reducer;
