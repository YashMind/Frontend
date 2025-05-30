"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
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
    <div className="w-full m-10">
      {botPage === "overview" ? (
        <h2 className="ml-24 text-2xl font-bold my-4">Owner</h2>
      ) : null}
      {botPage === "overview" ? (
        <div className="flex gap-10 w-full">
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
