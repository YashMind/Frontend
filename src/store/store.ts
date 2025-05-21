import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "@/store/slices/auth/authSlice";
import activitySlice from "@/store/slices/activity/activitySlice";
import chatSlice from "@/store/slices/chats/chatSlice";
import promptsSlice from "@/store/slices/chats/tuningSlice";
import appearanceSlice from "@/store/slices/chats/appearanceSettings";
import adminSlice from "@/store/slices/admin/adminSlice";
import invitationSlice from "@/store/slices/invitations/invitationSlice";

export const store = configureStore({
  reducer: {
    auth: signUpSlice,
    activity: activitySlice,
    chat: chatSlice,
    tuning: promptsSlice,
    appearance: appearanceSlice,
    admin: adminSlice,
    invitations: invitationSlice,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
