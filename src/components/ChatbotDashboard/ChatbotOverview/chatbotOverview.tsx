"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import AddBotData from "../ChatbotMain/AddData/addData";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import ChatbotSection from "./chatbotSection/chatbotSection";
import ChatbotDetails from "./chatbotDetails/chatbotDetails";
import { createChatsId, getSingleChatbot } from "@/store/slices/chats/chatSlice";
import { ChatbotsData } from "@/types/chatTypes";
const ChatbotOverview = ({
  botId,
}: {
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
    if (botId !== undefined) {
      dispatch(getSingleChatbot({ botId: botId }))
      dispatch(createChatsId({ bot_id: botId }));
    }
  }, [dispatch, botId]);

  return (
    <div className="w-full m-4">
      <h2 className="text-2xl my-4 font-bold">Owner</h2>
      <div className="flex gap-4 w-full">
        <ChatbotDetails botId={botId} />
        {/* right chatbot */}
        <ChatbotSection botId={botId} chatbotData={chatbotData} />
      </div>

    </div>
  );
};

export default ChatbotOverview;
