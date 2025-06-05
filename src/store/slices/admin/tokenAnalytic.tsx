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
        return response.data;
    } catch (err: any) {
        return rejectWithValue(err.response?.data?.detail || 'Failed to fetch admin token report');
    }
});

export const fetchAdminTransactions = createAsyncThunk<
    AdminTransactionsType,
    { page?: number; perPage?: number },
    { rejectValue: string }
>('tokenCredit/fetchAdminTransactions', async ({ page = 1, perPage = 100 }, { rejectWithValue }) => {
    try {
        const response = await http.get(`/admin/transactions?page=${page}&per_page=${perPage}`);
        return response.data;
    } catch (err: any) {
        return rejectWithValue(err.response?.data?.detail || 'Failed to fetch admin token report');
    }
});

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
            })
            .addCase(fetchAdminTransactions.rejected, (state, action) => {
                state.transactions.loading = false;
                state.transactions.error = action.payload || 'Unknown error';
            });
    },
});

export default tokenCreditSlice.reducer;
