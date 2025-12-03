import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "@/store/slices/auth/authSlice";
import activitySlice from "@/store/slices/activity/activitySlice";
import chatSlice from "@/store/slices/chats/chatSlice";
import promptsSlice from "@/store/slices/chats/tuningSlice";
import appearanceSlice from "@/store/slices/chats/appearanceSettings";
import adminSlice from "@/store/slices/admin/adminSlice";
import invitationSlice from "@/store/slices/invitations/invitationSlice";
import ticketSlice from "@/store/slices/supportTicket/slice";
import tokenAnalyticSlice from "@/store/slices/admin/tokenAnalytic";
import countrySlice from "@/store/slices/auth/country";
import paymentSlice from "@/store/slices/payments/slice";
import messageSlice from "./slices/admin/messageSlice";
import announcementSlice from "./slices/admin/announcementSlice";
import noticeSlice from "./slices/admin/noticesSlice";

export const store = configureStore({
  reducer: {
    auth: signUpSlice,
    activity: activitySlice,
    chat: chatSlice,
    tuning: promptsSlice,
    appearance: appearanceSlice,
    admin: adminSlice,
    invitations: invitationSlice,
    tickets: ticketSlice,
    tokens: tokenAnalyticSlice, countries: countrySlice,
    payment: paymentSlice,
    messages: messageSlice,
    announcements: announcementSlice,
    notice: noticeSlice,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
