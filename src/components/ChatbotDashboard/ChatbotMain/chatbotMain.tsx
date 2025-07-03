"use client";
import React, { useEffect, useState } from "react";
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
import { getUserTimezone } from "@/components/utils/formatDateTime";

const ChatbotMain = ({
  botPage,
  botId,
  role,
}: {
  botPage?: string;
  botId?: number;
  role?: string;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { chatbotData: activeChatbot, loading: chatbotLoading } = useSelector((state: RootState) =>
    state.chat
  );

  useEffect(() => {
    if (botId !== undefined) {
      dispatch(getSingleChatbot({ botId }));
    }
  }, [dispatch, botId]);

  useEffect(() => {
    dispatch(getChatbots());
    dispatch(fetchChatMessageTokens());
  }, [dispatch]);

  const [modalShow, setModalShow] = useState<boolean>(false);
  const chatbotError: any = useSelector((state: RootState) => state.chat.error);

  const showModal = () => {
    setModalShow(true);
  };

  return (<>
    <ChatbotDashboardHeader fix={true} addBgColor={true} role={role} chatbotError={chatbotError} />
    <div className=" bg-gradient-to-r from-[#002B58] to-[#3B0459]">
      {/* header */}

      {(botPage == "voice-agent" || botPage == "llm") ? <div className="min-h-screen flex items-center justify-center text-white text-2xl font-bold">
        <div className="p-8 bg-white text-black">
          Product Active is not Yet !!
        </div>
      </div> :
        <>
          {!chatbotError ? <>
            <div className=" bg-gradient-to-br from-[#1a1440] to-[#2a0e61] text-white p-4 h-full min-h-screen">
              {/* Real Time Count + Table */}
              <RealTimeCount />
              <div className="flex gap-4">
                {/* Owner Section */}
                <div
                  className={`relative h-full overflow-auto bg-[#2a2561] rounded-2xl w-full lg:w-[90%] flex ${botId ? "" : "gap-[25px]"
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
                  {botPage === "chat-leads" ? (
                    <ChatbotLeads botPage={botPage} botId={botId} />
                  ) : null}
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
                  {botPage === "integration" ? (
                    <ChatbotIntegration botId={botId} />
                  ) : null}
                  {botPage === "settings" ? <ChatbotSettings botId={botId} /> : null}
                  {/* second div */}
                  {botPage !== "main" && < div className="absolute top-5 right-5 text-right text-gray-200 text-base font-semibold uppercase">
                    {activeChatbot.chatbot_name}
                  </div>}
                </div>
                <RightSection showModal={showModal} botId={botId} />
                <CreatebotModal show={modalShow} onHide={() => setModalShow(false)} />
              </div>
            </div>

          </> : <div className="min-h-screen flex items-center justify-center text-white text-2xl font-bold">
            <div className="p-8 bg-white text-black">
              {chatbotError} Yet !!

            </div>
          </div>}
        </>}
    </div ></>
  );
};

export default ChatbotMain;
