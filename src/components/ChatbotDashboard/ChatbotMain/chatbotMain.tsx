"use client";
import React, { useEffect, useMemo, useState } from "react";
import CreatebotModal from "./Createbot/createbot";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import RightSection from "./RightSection/rightSection";
import ChatbotDashboardHeader from "../ChatbotHeader/chatbotHeader";
import ChatbotAI from "@/components/ChatbotDashboard/ChatbotAI/chatbotAI";
import ChatbotQA from "@/components/ChatbotDashboard/ChatbotQ&A/chatbotQ&A";
import ChatbotDashboard from "@/components/ChatbotDashboard/chatbotDashboard";
import ChatbotLeads from "@/components/ChatbotDashboard/ChatbotLeads/chatbotLeads";
import ChatbotTexts from "@/components/ChatbotDashboard/ChatbotTexts/chatbotTexts";
import RealTimeCount from "@/components/ChatbotDashboard/RealTimeCount/realTimeCount";
import ChatbotDeploy from "@/components/ChatbotDashboard/ChatbotDeploy/chatbotDeploy";
import ChatbotHistory from "@/components/ChatbotDashboard/ChatbotHistory/chatbotHistory";
import ChatbotSidebar from "@/components/ChatbotDashboard/ChatbotSidebar/chatbotSidebar";
import ChatbotOverview from "@/components/ChatbotDashboard/ChatbotOverview/chatbotOverview";
import ChatbotSettings from "@/components/ChatbotDashboard/ChatbotSettings/chatbotSettings";
import ChatbotLinksDocs from "@/components/ChatbotDashboard/ChatbotLinksDocs/chatbotLinksDocs";
import ChatbotAppearence from "@/components/ChatbotDashboard/ChatbotAppearence/chatbotAppearence";
import ChatbotIntegration from "@/components/ChatbotDashboard/ChatbotIntegration/chatbotIntegration";
import { fetchChatMessageTokens, getChatbots, getSingleChatbot } from "@/store/slices/chats/chatSlice";
import { getSubscriptionPlan } from "@/store/slices/admin/adminSlice";

type ChatbotMainProps = {
  botPage?: string;
  botId?: number;
  role?: string;
};

const ChatbotMain = ({ botPage, botId, role }: ChatbotMainProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { chatbotData: activeChatbot, loading: chatbotLoading, error: chatbotError } = useSelector((state: RootState) => state.chat);
  const [modalShow, setModalShow] = useState(false);
  const [planName, setPlanName] = useState("");

  useEffect(() => {
    if (botId !== undefined) {
      dispatch(getSingleChatbot({ botId }));
    }
  }, [dispatch, botId]);

  useEffect(() => {
    dispatch(getChatbots());
    dispatch(getSubscriptionPlan()).unwrap().then((res) => { setPlanName(res.data.name) });
    dispatch(fetchChatMessageTokens());
  }, [dispatch]);

  const showModal = () => setModalShow(true);
  const hideModal = () => setModalShow(false);

  const renderPageContent = () => {
    switch (botPage) {
      case "main": return <ChatbotDashboard showModal={showModal} />;
      case "update": return <ChatbotOverview botPage={botPage} botId={botId} />;
      case "overview": return <ChatbotOverview botPage={botPage} botId={botId} />;
      case "chat-history": return <ChatbotHistory botId={botId} />;
      case "chat-leads": return <ChatbotLeads botPage={botPage} botId={botId} />
      case "links-docs": return <ChatbotLinksDocs botPage={botPage} botId={botId} />
      case "texts": return <ChatbotTexts botId={botId} />;
      case "faqs": return <ChatbotQA botId={botId} />;
      case "ai": return <ChatbotAI botId={botId} />;
      case "appearence": return <ChatbotAppearence botId={botId} />;
      case "deploy": return <ChatbotDeploy />;
      case "integration": return <ChatbotIntegration botId={botId} />;
      case "settings": return <ChatbotSettings botId={botId} />;

      default: return null;
    }
  };


  const renderMainContent = useMemo(() => {
    if (chatbotError) {
      return (
        <div className="min-h-screen flex items-center justify-center text-white text-2xl font-bold">
          <div className="p-8 bg-white text-black">
            {chatbotError} Yet !!
          </div>
        </div>
      );
    }

    if (botPage === "voice-agent" || botPage === "llm") {
      return (
        <div className="min-h-screen flex items-center justify-center text-white text-2xl font-bold">
          <div className="p-8 bg-white text-black">
            Product Active is not Yet !!
          </div>
        </div>
      );
    }

    return (
      <div className="bg-gradient-to-br from-[#1a1440] to-[#2a0e61] text-white p-4 h-full flex flex-col">
        {/* Header area - fixed height */}
        <div className="h-[17%] min-h-[60px]">
          <RealTimeCount />
        </div>

        {/* Main content area - takes remaining space */}
        <div className="flex gap-4 flex-1 min-h-0">
          {/* Sidebar */}
          {botPage !== "main" && (
            <div className="overflow-y-auto flex-shrink-0 w-[15%] no-scrollbar rounded-3xl">
              <ChatbotSidebar botPage={botPage} botId={botId} />
            </div>
          )}

          {/* Main content */}
          <div className={`relative bg-[#2a2561] rounded-2xl flex-1 min-h-0 flex flex-col `}>
            <div className="overflow-y-auto no-scrollbar">
              {renderPageContent()}
            </div>
            <div className="absolute top-5 right-5 flex items-center gap-10">
              {botPage !== "main" && (
                <div className="text-gray-200 text-base font-semibold uppercase">
                  {activeChatbot.chatbot_name}
                </div>
              )}
              {planName && <div className="text-gray-200 text-base font-semibold uppercase">
                {planName}
              </div>}
            </div>

          </div>

          {/* Right section */}
          <div className="relative overflow-y-auto w-[7%] flex-shrink-0 hidden lg:block p-0.5 bg-[#2a2561] rounded-2xl border-l border-[#3a3461] no-scrollbar">
            <RightSection showModal={showModal} botId={botId} />
          </div>
        </div>

        <CreatebotModal show={modalShow} onHide={hideModal} />
      </div>
    );
  }, [botPage, botId, chatbotError, modalShow, activeChatbot]);


  return (
    <div className="flex flex-col h-screen">
      {/* Fixed header - outside the scrollable area */}
      <ChatbotDashboardHeader
        fix={true}
        addBgColor={true}
        role={role}
        chatbotError={chatbotError}
      />

      {/* Scrollable content */}
      <div className="bg-gradient-to-r from-[#002B58] to-[#3B0459] flex-1 overflow-hidden">
        {renderMainContent}
      </div>
    </div>
  );
};

export default ChatbotMain;