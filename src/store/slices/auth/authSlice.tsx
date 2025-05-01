import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/services/http/baseUrl";
import {
  startLoadingActivity,
  stopLoadingActivity,
} from "../activity/activitySlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const UserData = {
  id: 0,
  email: "",
  fullName: "",
  password: "",
  created_at: "",
  isMFA: false,
  isRestricted: false,
  provider: "",
  googleId: "",
  picture: "",
  updated_at: "",
};

// Async thunk for signup
export const signUpUser = createAsyncThunk<
  any,
  { payload: SignUpForm; router: ReturnType<typeof useRouter> }
>(
  "auth/signUpUser",
  async ({ payload, router }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.post("/auth/signup", payload);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toast.success("user created successfully!");
        router.push("/signin");
        return response.data;
      } else {
        return rejectWithValue("Signup failed");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during signup");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getMeData = createAsyncThunk<any, void>(
  "auth/getMeData",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.get("/auth/me");
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        return response.data;
      } else {
        return rejectWithValue("auth failed");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during auth");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const signInUser = createAsyncThunk<
  any,
  { payload: any; router: ReturnType<typeof useRouter> }
>(
  "auth/signInUser",
  async ({ payload, router }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());

      const response = await http.post("/auth/signin", payload);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        dispatch(getMeData());
        toast.success("user logged in successfully!");
        router.push("/chatbot");
        return response.data;
      } else {
        return rejectWithValue("Signup failed");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during signup");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const logoutUser = createAsyncThunk<
  any,
  { router: ReturnType<typeof useRouter> }
>("auth/logoutUser", async ({ router }, { dispatch, rejectWithValue }) => {
  try {
    dispatch(startLoadingActivity());
    const response = await http.post("/auth/logout");
    if (response.status === 200) {
      dispatch(stopLoadingActivity());
      toast.success("user logout successfully!");
      router.push("/signin");
      return response.data;
    } else {
      return rejectWithValue("auth failed");
    }
  } catch (error: any) {
    if (error.response && error.response.status === 400) {
      return rejectWithValue(error.response.data.message);
    }
    return rejectWithValue("An error occurred during auth");
  } finally {
    dispatch(stopLoadingActivity());
  }
});

export const updateUserProfile = createAsyncThunk<any, { payload: any }>(
  "auth/updateUserProfile",
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.put("/auth/update-profile", payload);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        dispatch(getMeData());
        toast.success("Profile updated successfully!");
        return response.data;
      } else {
        return rejectWithValue("Profile update failed");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during profile update");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

const initialState = {
  loading: false,
  data: [],
  userData: UserData,
  userDetails: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action?.payload?.data;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(signInUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload.data;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(getMeData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMeData.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload.data || action.payload.user;
      })
      .addCase(getMeData.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
