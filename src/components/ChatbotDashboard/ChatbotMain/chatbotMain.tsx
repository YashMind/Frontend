"use client"
import React, {useEffect, useState} from "react";
import ChatbotHeader from "@/components/chatbot/header/chatbotHeader";
import Image from "next/image";
import ChatbotSidebar from "@/components/ChatbotDashboard/ChatbotSidebar/chatbotSidebar";
import RealTimeCount from "@/components/ChatbotDashboard/RealTimeCount/realTimeCount";
import ChatbotOverview from "@/components/ChatbotDashboard/ChatbotOverview/chatbotOverview";
import ChatbotHistory from "@/components/ChatbotDashboard/ChatbotHistory/chatbotHistory";
import ChatbotLeads from "@/components/ChatbotDashboard/ChatbotLeads/chatbotLeads";
import ChatbotLinksDocs from "@/components/ChatbotDashboard/ChatbotLinksDocs/chatbotLinksDocs";
import ChatbotTexts from "@/components/ChatbotDashboard/ChatbotTexts/chatbotTexts";
import ChatbotQA from "@/components/ChatbotDashboard/ChatbotQ&A/chatbotQ&A";
import ChatbotAI from "@/components/ChatbotDashboard/ChatbotAI/chatbotAI";
import ChatbotAppearence from "@/components/ChatbotDashboard/ChatbotAppearence/chatbotAppearence";
import ChatbotDeploy from "@/components/ChatbotDashboard/ChatbotDeploy/chatbotDeploy";
import ChatbotIntegration from "@/components/ChatbotDashboard/ChatbotIntegration/chatbotIntegration";
import ChatbotSettings from "@/components/ChatbotDashboard/ChatbotSettings/chatbotSettings";
import ChatbotDashboard from "@/components/ChatbotDashboard/chatbotDashboard";
import CreatebotModal from "./Createbot/createbot";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { getSingleChatbot } from "@/store/slices/chats/chatSlice";

const ChatbotMain = ({botPage, botId}: {botPage?:string, botId?: number}) => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const showModal = () => {
    setModalShow(true);
  }

  console.log("botPage11111 ", botPage)
  console.log("botId111111 ", botId)
  useEffect(()=>{
    if (botId !== undefined) {
    dispatch(getSingleChatbot({botId}))
    }
  },[dispatch, botId])
  return (
    <div className=" bg-gradient-to-r from-[#002B58] to-[#3B0459] ">
      {/* header */}
      <ChatbotHeader fix={true} addBgColor={true} />
      <div className="min-h-screen bg-gradient-to-br from-[#1a1440] to-[#2a0e61] text-white p-4">
        {/* Real Time Count + Table */}
        <RealTimeCount />
        
        {/* Owner Section */}
        <div className="flex gap-6">
          <div className={`bg-[#2a2561]   rounded-[58px] w-[90%]  flex ${botId ? "" : "gap-[68px]"}`}>
            {botPage!=="main" ? <ChatbotSidebar botPage={botPage} botId={botId} /> : null }
            {botPage==="main" ? <ChatbotDashboard showModal={showModal} /> : null }
            {botPage==="update" || botPage==="overview" ? <ChatbotOverview botPage={botPage} botId={botId} /> : null}
            {botPage==="chat-history" ? <ChatbotHistory /> : null}
            {botPage==="chat-leads" ? <ChatbotLeads /> : null}
            {botPage==="links-docs" ? <ChatbotLinksDocs /> : null}
            {botPage==="texts" ? <ChatbotTexts /> : null}
            {botPage==="faqs" ? <ChatbotQA /> : null}
            {botPage==="ai" ? <ChatbotAI /> : null}
            {botPage==="appearence" ? <ChatbotAppearence /> : null}
            {botPage==="deploy" ? <ChatbotDeploy /> : null}
            {botPage==="integration" ? <ChatbotIntegration /> : null}
            {botPage==="settings" ? <ChatbotSettings /> : null}
          </div>
          {/* second div */}
          <div className="w-[10%] bg-[#2a2561]  rounded-[58px]">
            <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center m-auto mb-5">
              <Image
                className="m-auto mb-4"
                alt="alt"
                src="/images/face1.png"
                height={68}
                width={58}
              />
            </div>
            <Image
              className="m-auto"
              alt="alt"
              src="/images/face2.png"
              height={68}
              width={58}
            />
            <hr className="bg-[linear-gradient(90deg,#501794_49.49%,#3E70A1_50.51%)] p-[1px] rounded-md my-6"></hr>
            <Image
              className="m-auto"
              alt="alt"
              src="/images/plus.png"
              height={24}
              width={24}
              onClick={()=>setModalShow(true)}
            />
          </div>
        </div>
        <CreatebotModal 
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
      </div>
    </div>
  );
};

export default ChatbotMain;