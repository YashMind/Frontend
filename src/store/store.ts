import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "@/store/slices/auth/authSlice";
import activitySlice from "@/store/slices/activity/activitySlice";
import chatSlice from "@/store/slices/chats/chatSlice";

export const store = configureStore({
  reducer: {
    auth: signUpSlice,
    activity: activitySlice,
    chat: chatSlice
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
