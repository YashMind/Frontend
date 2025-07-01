"use client";
import React, { useEffect, useRef } from "react";
import AddBotData from "../ChatbotMain/AddData/addData";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import ChatbotSection from "./chatbotSection/chatbotSection";
import ChatbotDetails from "./chatbotDetails/chatbotDetails";
import { createChatsId } from "@/store/slices/chats/chatSlice";
import { ChatbotsData } from "@/types/chatTypes";
const ChatbotOverview = ({
  botPage,
  botId,
}: {
  botPage?: string;
  botId?: number;
}) => {
  const chatbotData: ChatbotsData = useSelector(
    (state: RootState) => state.chat.chatbotData
  );
  const dispatch = useDispatch<AppDispatch>();
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    if (botPage === "overview" && botId !== undefined) {
      dispatch(createChatsId({ bot_id: botId }));
    }
  }, [dispatch, botPage, botId]);

  return (
    <div className="w-full m-4">
      {botPage === "overview" ? (
        <h2 className="max-md:ml-12 text-2xl font-bold mb-3 ">Overview</h2>
      ) : null}
      {botPage === "overview" ? (
        <div className="flex flex-wrap flex-row-reverse md:flex-row gap-10 w-full">
          <ChatbotDetails botId={botId} />
          {/* right chatbot */}
          <ChatbotSection botId={botId} chatbotData={chatbotData} />
        </div>
      ) : null}
      {botPage === "update" && botId ? (
        <AddBotData botId={botId} handleBack={() => null} />
      ) : null}
    </div>
  );
};

export default ChatbotOverview;
