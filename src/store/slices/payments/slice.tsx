// paymentSlice.ts
import http from '@/services/http/baseUrl';
import { toasterError } from '@/services/utils/toaster';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import { boolean } from 'yup';

interface PaymentState {
  orderId: string | null;
  paymentSessionId: string | null;
  orderAmount: number | null;
  orderStatus: string | null;
  loading: boolean;
  error: string | null;
  paymentData: any | null;
  verificationStatus: string | null;
  success: boolean | null;
  notificationData: any | null;
  data: {
    id?: number;
    push_notification_admin_emails?: [string];
    toggle_push_notifications?: boolean;
  } | null;

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
  success: null,
  notificationData: null,
  data: null,

};


// Create payment order
export const createPaymentOrderCashfree = createAsyncThunk(
  'payment/createPaymentOrderCashfree',
  async (orderData: {
    customer_id: number;
    return_url: string;
    plan_id?: number;
    credit?: number;
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

export const createPaymentOrderPaypal = createAsyncThunk(
  'payment/createPaymentOrderPaypal',
  async (orderData: {
    customer_id: number;
    return_url: string;
    plan_id?: number;
    credit?: number;
  }, { rejectWithValue }) => {
    try {
      const response = await http.post('/payment/paypal/create-paypal-order', orderData);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({ message: error.message });
    }
  }
);
export const createPaymentOrderRazorPay = createAsyncThunk(
  'payment/createPaymentOrderRazorpay',
  async (orderData: {
    customer_id: number;
    return_url: string;
    plan_id?: number;
    credit?: number;
  }, { rejectWithValue }) => {
    try {
      const response = await http.post('/payment/razorpay/create-order-razorpay', orderData);
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
export const verifyPaymentCashfree = createAsyncThunk(
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

export const fetchIsInternational = createAsyncThunk<
  { is_international: boolean },
  void,
  { rejectValue: { message: string } }
>(
  'payment/is-international',
  async (_, { rejectWithValue }) => {
    try {
      const response = await http.get('/payment/cashfree/is-international');
      return response.data; // Must be { is_international: boolean }
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({ message: error.message });
    }
  }
);

export const activateTrial = createAsyncThunk<
  {
    success: boolean,
    token_entries: any,
    details: string,
  },
  void,
  { rejectValue: { message: string } }
>(
  'payment/activateTrial',
  async (_, { rejectWithValue }) => {
    try {
      const response = await http.get('/webhook/payments/activate-trial');
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({ message: error.message });
    }
  }
);


// ---------------------------------------
// 
// Push Notifications
// 
// ---------------------------------------

// ---------------------------------------
// 1. Get Settings
// ---------------------------------------
export const getPushNotificationSettings = createAsyncThunk(
  "settings/getPushNotificationSettings",
  async (_, { rejectWithValue }) => {
    try {
      const response = await http.get("admin/settings/");
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({ message: error.message });
    }
  }
);

// ---------------------------------------
// 2. Upsert Settings (create or update entire object)
// ---------------------------------------
export const upsertPushNotificationSettings = createAsyncThunk(
  "settings/upsertPushNotificationSettings",
  async (
    data: {
      push_notification_admin_emails: string[];
      toggle_push_notifications: boolean;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await http.post("admin/settings/", data);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({ message: error.message });
    }
  }
);

// ---------------------------------------
// 3. Patch (partial update)
// ---------------------------------------
export const patchPushNotificationSettings = createAsyncThunk(
  "settings/patchPushNotificationSettings",
  async (
    data: {
      push_notification_admin_emails?: string[];
      toggle_push_notifications?: boolean;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await http.patch("admin/settings/", data);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({ message: error.message });
    }
  }
);

// ---------------------------------------
// 4. Add Email
// ---------------------------------------
export const addPushNotificationEmail = createAsyncThunk(
  "settings/addPushNotificationEmail",
  async (email: string, { rejectWithValue }) => {
    try {
      const response = await http.post("admin/settings/add-email", null, {
        params: { email },
      });
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({ message: error.message });
    }
  }
);

// ---------------------------------------
// 5. Remove Email
// ---------------------------------------
export const removePushNotificationEmail = createAsyncThunk(
  "settings/removePushNotificationEmail",
  async (email: string, { rejectWithValue }) => {
    try {
      const response = await http.delete("admin/settings/remove-email", {
        params: { email },
      });
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({ message: error.message });
    }
  }
);

// ---------------------------------------
// 6. Edit Email
// ---------------------------------------
export const editPushNotificationEmail = createAsyncThunk(
  "settings/editPushNotificationEmail",
  async (
    data: { old_email: string; new_email: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await http.put("admin/settings/edit-email", null, {
        params: data,
      });
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({ message: error.message });
    }
  }
);

// ---------------------------------------
// 7. Toggle Push Notifications
// ---------------------------------------
export const togglePushNotifications = createAsyncThunk(
  "settings/togglePushNotifications",
  async (_, { rejectWithValue }) => {
    try {
      const response = await http.patch("admin/settings/toggle");
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        toasterError(error.response.data.detail)
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
      .addCase(createPaymentOrderCashfree.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPaymentOrderCashfree.fulfilled, (state, action) => {
        state.loading = false;
        state.orderId = action.payload.order_id;
        state.paymentSessionId = action.payload.payment_session_id;
        state.orderAmount = action.payload.order_amount;
        state.orderStatus = action.payload.order_status;
      })
      .addCase(createPaymentOrderCashfree.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as any)?.message || 'Failed to create payment order';
      })

      // Verify Payment
      .addCase(verifyPaymentCashfree.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.verificationStatus = null;
      })
      .addCase(verifyPaymentCashfree.fulfilled, (state, action) => {
        state.loading = false;
        state.verificationStatus = action.payload.status;
        state.paymentData = action.payload.payment_data;
        if (action.payload.status === 'SUCCESS') {
          state.orderStatus = 'completed';
        }
      })
      .addCase(verifyPaymentCashfree.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as any)?.message || 'Failed to verify payment';
        state.verificationStatus = 'FAILED';
      })
      .addCase(createPaymentOrderRazorPay.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.verificationStatus = null;
      })
      .addCase(createPaymentOrderRazorPay.fulfilled, (state, action) => {
        state.loading = false;
        state.verificationStatus = action.payload.status;
        state.paymentData = action.payload.payment_data;
        if (action.payload.status === 'SUCCESS') {
          state.orderStatus = 'completed';
        }
      })
      .addCase(createPaymentOrderRazorPay.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as any)?.message || 'Failed to verify payment';
        state.verificationStatus = 'FAILED';
      })
      // 🔹 GET — Fetch Settings
      .addCase(getPushNotificationSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPushNotificationSettings.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getPushNotificationSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as any)?.message || 'Failed to fetch settings';
      })

      // 🔹 POST — Create / Update All Settings
      .addCase(upsertPushNotificationSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(upsertPushNotificationSettings.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(upsertPushNotificationSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as any)?.message || 'Failed to update settings';
      })

      // 🔹 PATCH — Partial Update (toggle or single field)
      .addCase(patchPushNotificationSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(patchPushNotificationSettings.fulfilled, (state, action) => {
        state.loading = false;
        // Merge old + updated settings
        state.data = { ...state.data, ...action.payload };
        state.error = null;
      })
      .addCase(patchPushNotificationSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as any)?.message || 'Failed to patch settings';
      })
      .addCase(togglePushNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(togglePushNotifications.fulfilled, (state, action) => {
        state.loading = false;
        // Merge old + updated settings
        state.data = { ...state.data, ...action.payload };
        state.error = null;
      })
      .addCase(togglePushNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as any)?.message || 'Failed to patch settings';
      });
  },
});

export const { resetPaymentState, setPaymentSessionId, clearPaymentError } = paymentSlice.actions;

export default paymentSlice.reducer;