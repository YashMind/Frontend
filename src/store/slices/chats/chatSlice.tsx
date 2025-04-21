import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/services/http/baseUrl";
import {
  startLoadingActivity,
  stopLoadingActivity,
} from "../activity/activitySlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const getChatbots = createAsyncThunk<any, void>(
  "chat/getChatbots",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.get("/chatbot/get-all");
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        return response.data;
      } else {
        return rejectWithValue("failed to fetch chatbots");
      }
    } catch (error:any) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during auth");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const createChatbot = createAsyncThunk<
  any,
  { payload: any; router: ReturnType<typeof useRouter> }
>(
  "chat/createChatbot",
  async ({ payload, router }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.post("/chatbot/create-bot", payload);
      console.log("chat bot ", response);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toast.success("chatbot created successfully!");
        dispatch(getChatbots());
        router.push(`/chatbot-dashboard/overview/${response?.data?.id}`);
        return response.data;
      } else {
        return rejectWithValue("failed to create chatbot!");
      }
    } catch (error:any) {
      if (error.response && error.response.status === 400) {
        toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during chatbot");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const updateChatbot = createAsyncThunk<
  any,
  { payload: any; router: ReturnType<typeof useRouter> }
>(
  "chat/updateChatbot",
  async ({ payload, router }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.put("/chatbot/update-bot", payload);
      console.log("chat bot ", response);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toast.success("chatbot updated successfully!");
        dispatch(getChatbots());
        router.push("/chatbot-dashboard/overview");
        return response.data;
      } else {
        return rejectWithValue("failed to create chatbot!");
      }
    } catch (error:any) {
      if (error.response && error.response.status === 400) {
        toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during chatbot");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const uploadDocument = createAsyncThunk<
  any,
  { payload: FormData }
>(
  "chat/uploadDocument",
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.post("/chatbot/upload-document", payload, {headers: {
        "Content-Type": "multipart/form-data"
      }});
      console.log("chat bot ", response);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toast.success("Document uploaded successfully!");
        dispatch(getChatbots());
        return response.data;
      } else {
        return rejectWithValue("failed to create chatbot!");
      }
    } catch (error:any) {
      if (error.response && error.response.status === 400) {
        toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during chatbot");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

const initialState = {
  loading: false,
  data: [],
  botData: {},
  chatbots: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createChatbot.pending, (state) => {
        state.loading = true;
      })
      .addCase(createChatbot.fulfilled, (state, action) => {
        state.loading = false;
        state.botData = action?.payload?.data;
      })
      .addCase(createChatbot.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(getChatbots.pending, (state) => {
        state.loading = true;
      })
      .addCase(getChatbots.fulfilled, (state, action) => {
        state.loading = false;
        state.chatbots = action?.payload;
      })
      .addCase(getChatbots.rejected, (state, action) => {
        state.loading = false;
      })
  },
});

export default chatSlice.reducer;
