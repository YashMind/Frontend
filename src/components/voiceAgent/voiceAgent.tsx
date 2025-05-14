import React from "react";
import ChatbotHeader from "@/components/chatbot/header/chatbotHeader";
import ChatbotFooter from "@/components/chatbot/footer/chatbotFooter";
import Image from "next/image";
import VoiceAgentBanner from "./voiceAgentBanner/voiceAgentBanner";
import VoiceCompanion from "./voiceCompanion/voiceCompanion";
import TaskManagement from "./taskManagement/taskManagement";
import HowWorks from "./howWorks/howWorks";
import AppsSection from "./appsSection/appsSection";
import Faqs from "./faqs/faqs";
import SubFooter from "./subFooter/subFooter";

const VoiceAgent = () => {
  return (
    <div className="bg-gradient-to-b from-[#2B255D] to-[#110FB9]">
      {/* banner sec */}
      <VoiceAgentBanner />
      {/* Voice Companion */}
      <VoiceCompanion />
      {/* task management */}
      <TaskManagement />

      {/* How it Works */}
      <HowWorks />

      {/* 30apps-sec */}
      <AppsSection />

      {/* faq */}
      <Faqs />
      {/* sub-footer */}
      <SubFooter />
    </div>
  );
};

export default VoiceAgent;
