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

export const updateChatbotTextContent = createAsyncThunk<
  any,
  { payload: TrainingText }
>(
  "chat/updateChatbotTextContent",
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.put("/chatbot/update-bot", payload);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toast.success("chatbot updated successfully!");
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

export const getChatbotsFaqs = createAsyncThunk<
  any,
  { bot_id?: number }
>(
  "chat/getChatbotsFaqs",
  async ({ bot_id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.get(`/chatbot/get-bot-faqs/${bot_id}`);
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

export const deleteChatbotsFaqs = createAsyncThunk<
  any,
  { bot_id?: number, faq_id?: number }
>(
  "chat/deleteChatbotsFaqs",
  async ({ bot_id, faq_id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response:any = await http.delete(`/chatbot/delete-faq/${bot_id}/${faq_id}`);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        getChatbotsFaqs({bot_id:bot_id});
        toast.success("Faq deleted successfully!");
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

export const deleteChatbotsAllFaqs = createAsyncThunk<
  any,
  { bot_id?: number }
>(
  "chat/deleteChatbotsAllFaqs",
  async ({ bot_id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.delete(`/chatbot/delete-all-faqs/${bot_id}`);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        getChatbotsFaqs({bot_id:bot_id});
        toast.success("Deleted all faqs successfully!");
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

export const createChatbotFaqs = createAsyncThunk<
  any,
  { payload: ChatbotFaqs }
>(
  "chat/createChatbotFaqs",
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.post("/chatbot/create-bot-faqs", payload);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toast.success("chatbot faqs created successfully!");
        dispatch(getChatbotsFaqs({bot_id: payload?.bot_id}));
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
  "chat/conversationMessage",
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

export const getChatbotsUserHistory = createAsyncThunk<
  any,
  { bot_id?: number, page?: number; limit?: number; search?: string }
>(
  "chat/getChatbotsUserHistory",
  async ({ bot_id, page = 1, limit = 10, search }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const params = new URLSearchParams({ page: page.toString(), limit: limit.toString() });
      if (search) params.append("search", search);
      const response = await http.get(`/chatbot/chats-history/${bot_id}?${params}`);
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

export const deleteChats = createAsyncThunk<
  any,
  { bot_id?: number, chat_ids?:number[] }
>(
  "chat/deleteChats",
  async ({ bot_id, chat_ids }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.delete(`/chatbot/delete-chats/${bot_id}`, {data:{chat_ids}});
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toast.success("Chats deleted Successfully!");
        dispatch(getChatbotsUserHistory({bot_id: bot_id}));
        return response.data;
      } else {
        return rejectWithValue("failed to delete chats!");
      }
    } catch (error:any) {
      if (error.response && error.response.status === 400) {
        toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during delete chats");
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
  chatMessages:[] as ChatbotMessages[],
  chatbotHistory:{} as ChatbotHistoryMessages,
  chatbotFaqs: [] as ChatbotFaqsQuesAnswer[]
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
      })

      .addCase(getChatbotsUserHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getChatbotsUserHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.chatbotHistory = action?.payload;
      })
      .addCase(getChatbotsUserHistory.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(getChatbotsFaqs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getChatbotsFaqs.fulfilled, (state, action) => {
        state.loading = false;
        state.chatbotFaqs = action?.payload;
      })
      .addCase(getChatbotsFaqs.rejected, (state, action) => {
        state.loading = false;
      })
  },
});

export default chatSlice.reducer;
