"use client"
import React from "react";
import Image from "next/image";
import AddBotData from "../ChatbotMain/AddData/addData";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ChatbotSection from "./chatbotSection/chatbotSection";
import ChatbotDetails from "./chatbotDetails/chatbotDetails";
const ChatbotOverview = ({botPage, botId}:{botPage?: string, botId?: number}) => {
  const chatbotData: ChatbotsData = useSelector((state: RootState)=> state.chat.chatbotData);
  console.log("chatbotData ", chatbotData);
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
