import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
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
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toast.success("chatbot updated successfully!");
        dispatch(getChatbots());
        router.push(`/chatbot-dashboard/overview/${payload.id}`);
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

export const getSingleChatbot = createAsyncThunk<
  any,
  { botId: number }
>(
  "chat/getSingleChatbot",
  async ({ botId }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.get("/chatbot/get-bot", { params: { botId }});
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
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

export const getChatbotsMessages = createAsyncThunk<
  any,
  { chat_id?: number }
>(
  "chat/getChatbotsMessages",
  async ({ chat_id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.get(`/chatbot/chats/${chat_id}`);
      console.log("chat bot ", response);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        return response.data;
      } else {
        return rejectWithValue("failed to get chats!");
      }
    } catch (error:any) {
      if (error.response && error.response.status === 400) {
        toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during fetching chats");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const createChatsId = createAsyncThunk<
  any,
  { bot_id?: number }
>(
  "chat/createChatsId",
  async ({ bot_id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.post("/chatbot/chats-id",  {bot_id} );
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        dispatch(getChatbotsMessages({chat_id: response?.data?.id}))
        return response.data;
      } else {
        return rejectWithValue("failed to create chatbot id!");
      }
    } catch (error:any) {
      if (error.response && error.response.status === 400) {
        toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during creating chatbot id");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const addUserMessage = createAction<{ message: string; sender: string }>('chat/addUserMessage');

export const conversationMessage = createAsyncThunk<
  any,
  { payload: TextMessage }
>(
  "chat/getSingleChatbot",
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      dispatch(addUserMessage({ message: payload.message, sender: "user" }));
      const response = await http.post(`/chatbot/chats/${payload?.chat_id}/message`, payload);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        dispatch(getChatbotsMessages({chat_id: payload.chat_id}))
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
  chatbotData:{} as ChatbotsData,
  chatIdData:{} as chatsIdData,
  chatMessages:[] as ChatbotMessages[]
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

      .addCase(getSingleChatbot.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleChatbot.fulfilled, (state, action) => {
        state.loading = false;
        state.chatbotData = action?.payload;
      })
      .addCase(getSingleChatbot.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(createChatsId.pending, (state) => {
        state.loading = true;
      })
      .addCase(createChatsId.fulfilled, (state, action) => {
        state.loading = false;
        state.chatIdData = action?.payload;
      })
      .addCase(createChatsId.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(getChatbotsMessages.pending, (state) => {
        state.loading = true;
      })
      .addCase(getChatbotsMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.chatMessages = action?.payload;
      })
      .addCase(getChatbotsMessages.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(addUserMessage, (state, action) => {
        state.chatMessages.push(action.payload);
      });
  },
});

export default chatSlice.reducer;
