"use client";
import React, { useEffect, useState } from "react";
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
import ChatbotDashboardHeader from "../ChatbotHeader/chatbotHeader";
import RightSection from "./RightSection/rightSection";

const ChatbotMain = ({
  botPage,
  botId,
}: {
  botPage?: string;
  botId?: number;
}) => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const showModal = () => {
    setModalShow(true);
  };

  useEffect(() => {
    if (botId !== undefined) {
      dispatch(getSingleChatbot({ botId }));
    }
  }, [dispatch, botId]);

  return (
    <div className=" bg-gradient-to-r from-[#002B58] to-[#3B0459] ">
      {/* header */}
      <ChatbotDashboardHeader fix={true} addBgColor={true} />
      <div className="min-h-screen bg-gradient-to-br from-[#1a1440] to-[#2a0e61] text-white p-4 ">
        {/* Real Time Count + Table */}
        <RealTimeCount />

        {/* Owner Section */}
        <div className="flex gap-6">
          <div
            className={`bg-[#2a2561]   rounded-[58px] w-full lg:w-[90%]  flex ${
              botId ? "" : "gap-[25px]"
            }`}
          >
            {botPage !== "main" ? (
              <ChatbotSidebar botPage={botPage} botId={botId} />
            ) : null}
            {botPage === "main" ? (
              <ChatbotDashboard showModal={showModal} />
            ) : null}
            {botPage === "update" || botPage === "overview" ? (
              <ChatbotOverview botPage={botPage} botId={botId} />
            ) : null}
            {botPage === "chat-history" ? (
              <ChatbotHistory botId={botId} />
            ) : null}
            {botPage === "chat-leads" ? <ChatbotLeads /> : null}
            {botPage === "links-docs" ? (
              <ChatbotLinksDocs botPage={botPage} botId={botId} />
            ) : null}
            {botPage === "texts" ? <ChatbotTexts botId={botId} /> : null}
            {botPage === "faqs" ? <ChatbotQA botId={botId} /> : null}
            {botPage === "ai" ? <ChatbotAI botId={botId} /> : null}
            {botPage === "appearence" ? (
              <ChatbotAppearence botId={botId} />
            ) : null}
            {botPage === "deploy" ? <ChatbotDeploy /> : null}
            {botPage === "integration" ? <ChatbotIntegration /> : null}
            {botPage === "settings" ? <ChatbotSettings botId={botId} /> : null}
            {/* second div */}
          </div>
          <RightSection showModal={showModal} />
          <CreatebotModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </div>
  );
};

export default ChatbotMain;
