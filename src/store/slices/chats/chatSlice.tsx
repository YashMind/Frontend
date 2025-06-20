import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import http from "@/services/http/baseUrl";
import {
  startLoadingActivity,
  stopLoadingActivity,
} from "../activity/activitySlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  ArchivedHistoryMessages,
  ChatbotDocLinksData,
  ChatbotFaqs,
  ChatbotFaqsQuesAnswer,
  ChatbotHistoryMessages,
  ChatbotLeads,
  ChatbotMessages,
  ChatbotsData,
  ChatMessageTokens,
  ChatMessageTokensToday,
  chatsIdData,
  TextMessage,
} from "@/types/chatTypes";
import { toasterError, toasterSuccess } from "@/services/utils/toaster";

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
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.detail);
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
      const response = await http.post("/chatbot/create-bot", {
        data: payload,
      });
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toasterSuccess("chatbot created successfully!", 2000, "id");
        // toast.success("chatbot created successfully!");
        dispatch(getChatbots());
        router.push(`/chatbot-dashboard/overview/${response?.data?.id}`);
        return response.data;
      } else {
        return rejectWithValue("failed to create chatbot!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toasterError(error?.response?.data?.detail, 2000, "id");
        // toast.error(error?.response?.data?.detail);
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
        toasterSuccess("chatbot updated successfully!", 2000, "id");
        toast.success("chatbot updated successfully!");
        dispatch(getChatbots());
        router.push(`/chatbot-dashboard/overview/${payload.id}`);
        return response.data;
      } else {
        return rejectWithValue("failed to create chatbot!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toasterError(error?.response?.data?.detail, 2000, "id");
        // toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during chatbot");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const createChatbotDocLinks = createAsyncThunk<any, { payload: any }>(
  "chat/createChatbotDocLinks",
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.post(
        "/chatbot/create-bot-doc-links",
        payload
      );
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toasterSuccess("chatbot updated successfully!", 2000, "id");

        // toast.success("chatbot updated successfully!");
        dispatch(
          getChatbotsDocLinks({
            bot_id: payload?.bot_id,
          })
        );
        return response.data;
      } else {
        return rejectWithValue("failed to create chatbot!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        // toast.error(error?.response?.data?.detail);
        toasterError(error?.response?.data?.detail, 2000, "id");
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during chatbot");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const updateChatbotWithoutRouter = createAsyncThunk<
  any,
  { payload: any }
>(
  "chat/updateChatbotTextContent",
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.put("/chatbot/update-bot", payload);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toasterSuccess("chatbot updated successfully!", 2000, "id");
        // toast.success("chatbot updated successfully!");
        dispatch(getChatbots());
        dispatch(getSingleChatbot({ botId: payload?.id }));
        return response.data;
      } else {
        return rejectWithValue("failed to create chatbot!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        // toast.error(error?.response?.data?.detail);
        toasterError(error?.response?.data?.detail, 2000, "id");
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during chatbot");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getChatbotsFaqs = createAsyncThunk<any, { bot_id?: number }>(
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
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        // toast.error(error?.response?.data?.detail);
        toasterError(error?.response?.data?.detail, 2000, "id");
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
  { bot_id?: number; faq_id?: number }
>(
  "chat/deleteChatbotsFaqs",
  async ({ bot_id, faq_id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response: any = await http.delete(
        `/chatbot/delete-faq/${bot_id}/${faq_id}`
      );
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        getChatbotsFaqs({ bot_id: bot_id });
        toasterSuccess("Faq deleted successfully!", 2000, "id");
        // toast.success("Faq deleted successfully!");
        return response.data;
      } else {
        return rejectWithValue("failed to get chats!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        // toast.error(error?.response?.data?.detail);
        toasterError(error?.response?.data?.detail, 2000, "id");
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during fetching chats");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const deleteChatbotsAllFaqs = createAsyncThunk<any, { bot_id?: number }>(
  "chat/deleteChatbotsAllFaqs",
  async ({ bot_id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.delete(`/chatbot/delete-all-faqs/${bot_id}`);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        getChatbotsFaqs({ bot_id: bot_id });
        toasterSuccess("Deleted all faqs successfully!", 2000, "id");
        // toast.success("Deleted all faqs successfully!");
        return response.data;
      } else {
        return rejectWithValue("failed to get chats!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toasterError(error?.response?.data?.detail, 2000, "id");
        // toast.error(error?.response?.data?.detail)
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
        toasterSuccess("chatbot faqs created successfully!", 2000, "id");
        // toast.success("chatbot faqs created successfully!");
        dispatch(getChatbotsFaqs({ bot_id: payload?.bot_id }));
        return response.data;
      } else {
        return rejectWithValue("failed to create chatbot!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        // toast.error(error?.response?.data?.detail);
        toasterError(error?.response?.data?.detail, 2000, "id");
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during chatbot");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const uploadDocument = createAsyncThunk<any, { payload: FormData }>(
  "chat/uploadDocument",
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.post("/chatbot/upload-document", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toasterSuccess("Document uploaded successfully!", 2000, "id");
        // toast.success("Document uploaded successfully!");
        dispatch(getChatbots());
        return response.data;
      } else {
        return rejectWithValue("failed to create chatbot!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        // toast.error(error?.response?.data?.detail);
        toasterError(error?.response?.data?.detail, 2000, "id");
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during chatbot");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getSingleChatbot = createAsyncThunk<any, { botId: number }>(
  "chat/getSingleChatbot",
  async ({ botId }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.get("/chatbot/get-bot", {
        params: { botId },
      });
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        return response.data;
      } else {
        return rejectWithValue("failed to create chatbot!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        // toast.error(error?.response?.data?.detail);
        toasterError(error?.response?.data?.detail, 2000, "id");
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during chatbot");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getChatbotsMessages = createAsyncThunk<any, { chat_id?: number }>(
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
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        // toast.error(error?.response?.data?.detail);
        toasterError(error?.response?.data?.detail, 2000, "id");
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during fetching chats");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const createChatsId = createAsyncThunk<any, { bot_id?: number }>(
  "chat/createChatsId",
  async ({ bot_id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.post("/chatbot/chats-id", { bot_id });
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        dispatch(getChatbotsMessages({ chat_id: response?.data?.id }));
        return response.data;
      } else {
        return rejectWithValue("failed to create chatbot id!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        // toast.error(error?.response?.data?.detail);
        toasterError(error?.response?.data?.detail, 2000, "id");
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during creating chatbot id");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const createChatsIdToken = createAsyncThunk<any, { token?: string }>(
  "chat/createChatsIdToken",
  async ({ token }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.post("/chatbot/chats-id-token", { token });
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        dispatch(getChatbotsMessages({ chat_id: response?.data?.id }));
        dispatch(getSingleChatbot({ botId: response?.data?.bot_id }));
        return response.data;
      } else {
        return rejectWithValue("failed to create chatbot id!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toasterError(error?.response?.data?.detail, 2000, "id");
        // toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during creating chatbot id");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const deleteChatsMessagesToken = createAsyncThunk<
  any,
  { token?: string; chat_id?: number }
>(
  "chat/deleteChatsMessagesToken",
  async ({ token, chat_id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.delete(
        `/chatbot/chats-delete-token/${token}`
      );
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        dispatch(getChatbotsMessages({ chat_id: chat_id }));
        return response.data;
      } else {
        return rejectWithValue("failed to create chatbot id!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toasterError(error?.response?.data?.detail, 2000, "id");
        // toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during creating chatbot id");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const deleteUserChatsMessages = createAsyncThunk<
  any,
  { token?: string; chat_id?: number }
>(
  "chat/deleteUserChatsMessages",
  async ({ chat_id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.delete(
        `/chatbot/user-chats-delete/${chat_id}`
      );
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        dispatch(getChatbotsMessages({ chat_id: chat_id }));
        toasterSuccess("Chat messages deleted successfully!", 2000, "id");
        // toast.success("Chat messages deleted successfully!");
        return response.data;
      } else {
        return rejectWithValue("failed to delete chat messages!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        // toast.error(error?.response?.data?.detail);
        toasterError(error?.response?.data?.detail, 2000, "id");
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during creating chatbot id");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);
export const archiveUserChatsMessages = createAsyncThunk<any>(
  "chat/deleteUserChatsMessages",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.put(`/chatbot/chats/archive`);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toasterSuccess("Chat messages archived successfully!", 2000, "id");
        // toast.success("Chat messages deleted successfully!");
        return response.data;
      } else {
        return rejectWithValue("failed to archive chat messages!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        // toast.error(error?.response?.data?.detail);
        toasterError(error?.response?.data?.detail, 2000, "id");
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during archiving chats");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const addUserMessage = createAction<{ message: string; sender: string }>(
  "chat/addUserMessage"
);

export const conversationMessage = createAsyncThunk<
  any,
  { payload: TextMessage }
>(
  "chat/conversationMessage",
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      dispatch(addUserMessage({ message: payload.message, sender: "user" }));
      const response = await http.post(
        `/chatbot/chats/${payload?.chat_id}/message`,
        payload
      );
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        dispatch(getChatbotsMessages({ chat_id: payload.chat_id }));
        return response.data;
      } else {
        return rejectWithValue("failed to create chatbot!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        // toast.error(error?.response?.data?.detail);
        toasterError(error?.response?.data?.detail, 2000, "id");
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
  { bot_id?: number; page?: number; limit?: number; search?: string }
>(
  "chat/getChatbotsUserHistory",
  async (
    { bot_id, page = 1, limit = 10, search },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(startLoadingActivity());
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
      });
      if (search) params.append("search", search);
      const response = await http.get(
        `/chatbot/chats-history/${bot_id}?${params}`
      );
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        return response.data;
      } else {
        return rejectWithValue("failed to get chats!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        // toast.error(error?.response?.data?.detail);
        toasterError(error?.response?.data?.detail, 2000, "id");
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
  { bot_id?: number; chat_ids?: number[] }
>(
  "chat/deleteChats",
  async ({ bot_id, chat_ids }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.delete(`/chatbot/delete-chats/${bot_id}`, {
        data: { chat_ids },
      });
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toasterSuccess("Chats deleted Successfully!", 2000, "id");
        // toast.success("Chats deleted Successfully!");
        dispatch(getChatbotsUserHistory({ bot_id: bot_id }));
        return response.data;
      } else {
        return rejectWithValue("failed to delete chats!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        // toast.error(error?.response?.data?.detail);
        toasterError(error?.response?.data?.detail, 2000, "id");
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during delete chats");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const deleteAllBotsChats = createAsyncThunk<any>(
  "chat/deleteChats",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.delete(`/chatbot/chats/delete-all`);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toasterSuccess("Chats deleted Successfully!", 2000, "id");
        return response.data;
      } else {
        return rejectWithValue("failed to delete chats!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        // toast.error(error?.response?.data?.detail);
        toasterError(error?.response?.data?.detail, 2000, "id");
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during delete chats");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getChatbotsDocLinks = createAsyncThunk<
  any,
  {
    bot_id?: number;
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: string;
  }
>(
  "chat/getChatbotsDocLinks",
  async (
    { bot_id, page, limit, search, sortBy, sortOrder },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(startLoadingActivity());
      const params = {
        search: search,
        page: page?.toString(),
        limit: limit?.toString(),
        sort_by: sortBy,
        sort_order: sortOrder,
      };
      const response = await http.get(`/chatbot/get-bot-doc-links/${bot_id}`, {
        params,
      });
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        return response.data;
      } else {
        return rejectWithValue("failed to get chats!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toasterError(error?.response?.data?.detail, 2000, "id");
        // toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during fetching chats");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const deleteDocLinks = createAsyncThunk<
  any,
  {
    bot_id?: number;
    doc_ids?: number[];
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: string;
  }
>(
  "chat/deleteDocLinks",
  async (
    { bot_id, doc_ids, page, limit, search, sortBy, sortOrder },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.delete(
        `/chatbot/delete-doc-links/${bot_id}`,
        {
          data: { doc_ids },
        }
      );
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toasterSuccess("Chats deleted Successfully!", 2000, "id");
        // toast.success("Chats deleted Successfully!");
        dispatch(
          getChatbotsDocLinks({
            bot_id: bot_id,
            page,
            limit,
            search,
            sortBy,
            sortOrder,
          })
        );
        return response.data;
      } else {
        return rejectWithValue("failed to delete chats!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        // toast.error(error?.response?.data?.detail);
        toasterError(error?.response?.data?.detail, 2000, "id");
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during delete chats");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const deleteChatbot = createAsyncThunk<
  any,
  { bot_id?: number; router: ReturnType<typeof useRouter> }
>(
  "chat/deleteChatbot",
  async ({ bot_id, router }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.delete(`/chatbot/delete-bot/${bot_id}`);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        router.push("/chatbot-dashboard/main");
        return response.data;
      } else {
        return rejectWithValue("failed to get chats!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toasterError(error?.response?.data?.detail, 2000, "id");
        // toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during fetching chats");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const createChatbotLeads = createAsyncThunk<any, { payload: any }>(
  "chat/createChatbotLeads",
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.post("/chatbot/create-bot-leads", payload);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toasterSuccess("chatbot lead created successfully!", 2000, "id");
        // toast.success("chatbot lead created successfully!");
        return response.data;
      } else {
        return rejectWithValue("failed to create chatbot!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toasterError(error?.response?.data?.detail, 2000, "id");
        // toast.error(error?.response?.data?.detail);
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during chatbot");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getChatbotsLeads = createAsyncThunk<
  any,
  {
    bot_id?: number;
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: string;
  }
>(
  "chat/getChatbotsLeads",
  async (
    { bot_id, page, limit, search, sortBy, sortOrder },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(startLoadingActivity());
      const params = {
        search: search,
        page: page?.toString(),
        limit: limit?.toString(),
        sort_by: sortBy,
        sort_order: sortOrder,
      };
      const response = await http.get(`/chatbot/get-chatbot-leads/${bot_id}`, {
        params,
      });
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        return response.data;
      } else {
        return rejectWithValue("failed to get chats!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        // toast.error(error?.response?.data?.detail);
        toasterError(error?.response?.data?.detail, 2000, "id");
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during fetching chats");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const deleteChatbotLeads = createAsyncThunk<
  any,
  {
    bot_id?: number;
    lead_ids?: number[];
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: string;
  }
>(
  "chat/deleteChatbotLeads",
  async (
    { bot_id, lead_ids, page, limit, search, sortBy, sortOrder },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.delete(
        `/chatbot/delete-chatbot-leads/${bot_id}`,
        {
          data: { lead_ids },
        }
      );
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toasterSuccess("chatbot lead deleted successfully!", 2000, "id");
        // toast.success("Chatbot leads deleted Successfully!");
        dispatch(
          getChatbotsLeads({
            bot_id: bot_id,
            page,
            limit,
            search,
            sortBy,
            sortOrder,
          })
        );
        return response.data;
      } else {
        return rejectWithValue("failed to delete chats!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        // toast.error(error?.response?.data?.detail);
        toasterError(error?.response?.data?.detail, 2000, "id");
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during delete chats");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getChatbotsLeadMessages = createAsyncThunk<
  any,
  { chat_id?: number }
>(
  "chat/getChatbotsLeadMessages",
  async ({ chat_id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.get(`/chatbot/leads/${chat_id}/messages`);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        return response.data;
      } else {
        return rejectWithValue("failed to get chats!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        // toast.error(error?.response?.data?.detail);
        toasterError(error?.response?.data?.detail, 2000, "id");
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during fetching chats");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const fetchChatMessageTokens = createAsyncThunk<
  ChatMessageTokens,
  void,
  { rejectValue: string }
>("chatTokens/fetch", async (_, thunkAPI) => {
  try {
    const response = await http.get<ChatMessageTokens>("/chatbot/tokens", {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error?.response?.data?.detail || "Failed to fetch tokens"
    );
  }
});

export const fetchChatMessageTokensToday = createAsyncThunk(
  "chatTokens/fetchToday",
  async ({ bot_id }: { bot_id: number }, thunkAPI) => {
    try {
      const response = await http.get<ChatMessageTokensToday>(
        `/chatbot/tokens/${bot_id}/today`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.detail ||
        error.message ||
        "Failed to fetch today's tokens"
      );
    }
  }
);

export const registerWhatsappPhoneNumber = createAsyncThunk(
  "integration/registerWhatsappPhoneNumber",
  async (
    data: {
      whatsapp_number: string;
      bot_id: number;
      access_token: string;
      phone_number_id: string;
      business_account_id: string;
      webhook_secret: string;
    },
    thunkAPI
  ) => {
    try {
      const response = await http.post("/whatsapp/register", data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.detail || "Failed to fetch tokens"
      );
    }
  }
);

interface WhatsAppRegistration {
  whatsapp_number: string;
  phone_number_id: string;
  business_account_id: string;
  is_active: boolean;
  opt_in_date: string;
}

interface WhatsAppUpdateData {
  access_token?: string;
  phone_number_id?: string;
  business_account_id?: string;
  webhook_secret?: string;
  is_active?: boolean;
}

export const fetchWhatsappRegistration = createAsyncThunk(
  "integration/fetchWhatsappRegistration",
  async (bot_id: number, thunkAPI) => {
    try {
      const response = await http.get(`/whatsapp/${bot_id}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.detail || "Failed to fetch WhatsApp registration"
      );
    }
  }
);

export const updateWhatsappRegistration = createAsyncThunk(
  "integration/updateWhatsappRegistration",
  async (
    data: {
      bot_id: number;
      access_token?: string;
      phone_number_id?: string;
      business_account_id?: string;
      webhook_secret?: string;
      is_active?: boolean;
    },
    thunkAPI
  ) => {
    try {
      const { bot_id, ...updateData } = data;
      const response = await http.put(`/whatsapp/${bot_id}`, updateData, {
        withCredentials: true,
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.detail ||
        "Failed to update WhatsApp registration"
      );
    }
  }
);

export const deactivateWhatsappRegistration = createAsyncThunk(
  "integration/deactivateWhatsappRegistration",
  async (bot_id: number, thunkAPI) => {
    try {
      const response = await http.delete(`/whatsapp/${bot_id}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.detail ||
        "Failed to deactivate WhatsApp registration"
      );
    }
  }
);

export const deleteWhatsappRegistration = createAsyncThunk(
  "integration/deleteWhatsappRegistration",
  async (bot_id: number, thunkAPI) => {
    try {
      const response = await http.delete(`/whatsapp/delete/${bot_id}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.detail ||
        "Failed to deactivate WhatsApp registration"
      );
    }
  }
);

export const fetchArchivedUserMessages = createAsyncThunk(
  "messages/fetchArchivedUserMessages",
  async (
    { page, limit, search }: { page: number; limit: number; search?: string },
    thunkAPI
  ) => {
    try {
      const response = await http.get("/chatbot/chats-history/archived", {
        params: { page, limit, search },
        withCredentials: true,
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.detail || "Failed to fetch archived messages"
      );
    }
  }
);

const initialState = {
  loading: false,
  error: null as null | string,
  data: [],
  botData: {},
  chatbots: [] as ChatbotsData[],
  chatbotData: {} as ChatbotsData,
  chatIdData: {} as chatsIdData,
  chatMessages: [] as ChatbotMessages[],
  chatbotHistory: {} as ChatbotHistoryMessages,
  chatbotFaqs: [] as ChatbotFaqsQuesAnswer[],
  ChatbotDocLinksData: {} as ChatbotDocLinksData,
  chatbotLeadsData: {} as ChatbotLeads,
  chatbotLeadMessages: [] as ChatbotMessages[],
  archivedUserMessages: {} as ArchivedHistoryMessages,
  tokens: {} as ChatMessageTokens,
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
        state.error = null;
      })
      .addCase(getChatbots.rejected, (state, action) => {
        state.error = action.payload as string;
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

      .addCase(createChatsIdToken.pending, (state) => {
        state.loading = true;
      })
      .addCase(createChatsIdToken.fulfilled, (state, action) => {
        state.loading = false;
        state.chatIdData = action?.payload;
      })
      .addCase(createChatsIdToken.rejected, (state, action) => {
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
      .addCase(getChatbotsDocLinks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getChatbotsDocLinks.fulfilled, (state, action) => {
        state.loading = false;
        state.ChatbotDocLinksData = action?.payload;
      })
      .addCase(getChatbotsDocLinks.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(getChatbotsLeads.pending, (state) => {
        state.loading = true;
      })
      .addCase(getChatbotsLeads.fulfilled, (state, action) => {
        state.loading = false;
        state.chatbotLeadsData = action?.payload;
      })
      .addCase(getChatbotsLeads.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(getChatbotsLeadMessages.pending, (state) => {
        state.loading = true;
      })
      .addCase(getChatbotsLeadMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.chatbotLeadMessages = action?.payload;
      })
      .addCase(getChatbotsLeadMessages.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchChatMessageTokens.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChatMessageTokens.fulfilled, (state, action) => {
        state.loading = false;
        state.tokens = action.payload;
      })
      .addCase(fetchChatMessageTokens.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Unknown error";
      })
      .addCase(fetchArchivedUserMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArchivedUserMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.archivedUserMessages = action.payload;
      })
      .addCase(fetchArchivedUserMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Unknown error";
      });
  },
});

export default chatSlice.reducer;
