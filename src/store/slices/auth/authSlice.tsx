import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/services/http/baseUrl";
import {
  startLoadingActivity,
  stopLoadingActivity,
} from "../activity/activitySlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { toasterError, toasterSuccess } from "@/services/utils/toaster";
import { getAdminUsers, getClientUsers } from "../admin/adminSlice";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

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
  role: "",
};

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId: number, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.delete(`/auth/${userId}`);

      if (response.status === 200) {
        toasterSuccess("User deleted successfully!", 2000, "id");
        return userId;
      }
      return rejectWithValue("Failed to delete user");
    } catch (error: any) {
      const errorMessage = error.response?.data?.detail || "Failed to delete user";
      toasterError(errorMessage, 2000, "id");
      return rejectWithValue(errorMessage);
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

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
        toasterSuccess("user created successfully!", 2000, "id");
        // toast.success("user created successfully!");
        router.push("/auth/signin");
        return response.data;
      } else {
        return rejectWithValue("Signup failed");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        if (error.response.data.detail === "ERR_ALREADY_EXIST") {
          toasterError("Email Already Exists");
        }
        return rejectWithValue(error.response.data.detail);
      }
      return rejectWithValue("An error occurred during signup");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

// Async thunk for signup
export const signUpAdmin = createAsyncThunk<any, { payload: AdminSignUpForm }>(
  "auth/signUpAdmin",
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.post("/auth/signup", payload);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toast.success(`${payload?.role ?? "Client"} created successfully!`);
        dispatch(payload.role ? getAdminUsers() : getClientUsers());
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

export const getMeData = createAsyncThunk<any, { router: AppRouterInstance }>(
  "auth/getMeData",
  async ({ router }, { dispatch, rejectWithValue }) => {
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
        router.push("/auth/signin");
        return rejectWithValue(error.response.data.message);
      }
      router.push("/auth/signin");
      return rejectWithValue("An error occurred during auth");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const isLoggedin = createAsyncThunk<any>(
  "auth/isLoggedin",
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

      return rejectWithValue("An error occurred during auth");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);


export const getRecentSignups = createAsyncThunk<any, void>(
  "admin/getRecentSignups",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());

      const response = await http.get("/auth/recent-signups");

      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        return response.data;
      } else {
        return rejectWithValue("Failed to fetch recent signups!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toasterError(error?.response?.data?.detail, 2000, "id");
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred while fetching recent signups.");
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
        dispatch(getMeData({ router }));
        toasterSuccess("user logged in successfully!", 2000, "id");
        // toast.success("user logged in successfully!");
        // router.push("/chatbot-dashboard/main");
        return response.data;
      } else {
        return rejectWithValue("Signup failed");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toasterError(error?.response?.data?.detail, 2000, "id");
        // toast.error(error?.response?.data?.detail);
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
      // toast.success("user logout successfully!");
      toasterSuccess("user logout successfully!", 2000, "id");
      router.push("/auth/signin");
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

export const updateUserProfile = createAsyncThunk<
  any,
  { payload: any; router: AppRouterInstance }
>(
  "auth/updateUserProfile",
  async ({ payload, router }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.put("/auth/update-profile", payload);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        dispatch(getMeData({ router }));
        toasterSuccess("Profile updated successfully!", 2000, "id");
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
interface AuthState {
  loading: boolean;
  data: any[]; // if used somewhere else, else remove it
  userData: UserProfileData | null; // currently used for logged-in user profile
  loggedInUser: UserProfileData | null; // currently used for logged-in user profile
  userDetails: any;
  recentSignups: {
    count: number;
    data: UserProfileData[];
  } | null;  // <-- Add this
}

export const changePassword = createAsyncThunk<
  any,
  { data: { old_password: string, new_password: string } }>(
    "auth/changePassword",
    async ({ data }, { dispatch, rejectWithValue }) => {
      try {
        dispatch(startLoadingActivity());
        const response = await http.post("/auth/change-password", data, { withCredentials: true });
        if (response.status === 200) {
          dispatch(stopLoadingActivity());
          toasterSuccess("Password changed successfully!", 2000, "id");
          return response.data;
        } else {
          return rejectWithValue("Password change failed");
        }
      } catch (error: any) {
        if (error.response && error.response.status === 400) {
          return rejectWithValue(error.response.data.message);
        }
        return rejectWithValue("An error occurred during password change");
      } finally {
        dispatch(stopLoadingActivity());
      }
    }


  )
// Thunk for forget password
export const forgetPassword = createAsyncThunk(
  'password/forgetPassword',
  async (email, { rejectWithValue }) => {
    try {
      const response = await http.post('/auth/forget-password', { email });
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({ detail: 'Network error or server is down' });
    }
  }
);

// Thunk for reset password
export const resetPassword = createAsyncThunk(
  'password/resetPassword',
  async ({ token, password }, { rejectWithValue }) => {
    try {
      const new_password = password;
      console.log(new_password)
      const response = await http.post('/auth/reset-password', { token, new_password });
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({ detail: 'Network error or server is down' });
    }
  }
);


const initialState: AuthState = {
  loading: false,
  data: [],
  userData: UserData as UserProfileData,
  userDetails: {},
  recentSignups: null,
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
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.loading = false;
        state.loggedInUser = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(getRecentSignups.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRecentSignups.fulfilled, (state, action) => {
        state.loading = false;
        state.recentSignups = action.payload;
      })
      .addCase(getRecentSignups.rejected, (state) => {
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
      })
      .addCase(isLoggedin.pending, (state) => {
        state.loading = true;
      })
      .addCase(isLoggedin.fulfilled, (state, action) => {
        state.loading = false;
        state.loggedInUser = action.payload.data || action.payload.user;
      })
      .addCase(isLoggedin.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(forgetPassword.pending, (state) => {
        state.loading = true;

      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(forgetPassword.rejected, (state, action) => {
        state.loading = false;

      })

      // Reset Password cases
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;

      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
