// paymentSlice.ts
import http from '@/services/http/baseUrl';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface PaymentState {
    orderId: string | null;
    paymentSessionId: string | null;
    orderAmount: number | null;
    orderStatus: string | null;
    loading: boolean;
    error: string | null;
    paymentData: any | null;
    verificationStatus: string | null;
}

const initialState: PaymentState = {
    orderId: null,
    paymentSessionId: null,
    orderAmount: null,
    orderStatus: null,
    loading: false,
    error: null,
    paymentData: null,
    verificationStatus: null,
};

// Create payment order
export const createPaymentOrder = createAsyncThunk(
    'payment/createOrder',
    async (orderData: {
        customer_id: number;
        return_url: string;
        plan_id: number;
    }, { rejectWithValue }) => {
        try {
            const response = await http.post('/payment/cashfree/create-order', orderData);
            return response.data;
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue({ message: error.message });
        }
    }
);

// Verify payment
export const verifyPayment = createAsyncThunk(
    'payment/verifyPayment',
    async (verificationData: { order_id: string; payment_id?: string }, { rejectWithValue }) => {
        try {
            const response = await http.post('/payment/cashfree/verify-payment', verificationData);
            return response.data;
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue({ message: error.message });
        }
    }
);

const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        resetPaymentState: () => initialState,
        setPaymentSessionId: (state, action: PayloadAction<string>) => {
            state.paymentSessionId = action.payload;
        },
        clearPaymentError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Create Payment Order
            .addCase(createPaymentOrder.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createPaymentOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.orderId = action.payload.order_id;
                state.paymentSessionId = action.payload.payment_session_id;
                state.orderAmount = action.payload.order_amount;
                state.orderStatus = action.payload.order_status;
            })
            .addCase(createPaymentOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = (action.payload as any)?.message || 'Failed to create payment order';
            })

            // Verify Payment
            .addCase(verifyPayment.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.verificationStatus = null;
            })
            .addCase(verifyPayment.fulfilled, (state, action) => {
                state.loading = false;
                state.verificationStatus = action.payload.status;
                state.paymentData = action.payload.payment_data;
                if (action.payload.status === 'SUCCESS') {
                    state.orderStatus = 'completed';
                }
            })
            .addCase(verifyPayment.rejected, (state, action) => {
                state.loading = false;
                state.error = (action.payload as any)?.message || 'Failed to verify payment';
                state.verificationStatus = 'FAILED';
            });
    },
});

export const { resetPaymentState, setPaymentSessionId, clearPaymentError } = paymentSlice.actions;

export default paymentSlice.reducer;