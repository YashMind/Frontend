"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import AddBotData from "../ChatbotMain/AddData/addData";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import ChatbotSection from "./chatbotSection/chatbotSection";
import ChatbotDetails from "./chatbotDetails/chatbotDetails";
import { createChatsId } from "@/store/slices/chats/chatSlice";
const ChatbotOverview = ({botPage, botId}:{botPage?: string, botId?: number}) => {
  const chatbotData: ChatbotsData = useSelector((state: RootState)=> state.chat.chatbotData);
  const dispatch = useDispatch<AppDispatch>();
  const hasRun = useRef(false);
  useEffect(()=>{
    if (hasRun.current) return;
    hasRun.current = true;
      if (botPage==="overview" && botId !== undefined) {
      dispatch(createChatsId({bot_id: botId}));
      }
    },[dispatch, botPage, botId])
  return (
    <div className="w-full">
      {botPage==="overview" ? <h2 className="text-2xl font-bold my-4">Owner</h2> : null }
      {botPage==="overview" ? 
      <div className="flex gap-10">
        <ChatbotDetails />
        {/* right chatbot */}
       <ChatbotSection chatbotData={chatbotData}/>
      </div> : null }
      {botPage==="update" && botId ? <AddBotData botId={botId} /> : null}
    </div>
  );
};

export default ChatbotOverview;
