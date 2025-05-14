import React from "react";
import NavSection from "@/components/chatbot/navSection/navSection";
import ChatbotBanner from "@/components/chatbot/banner/chatbotBanner";
import WhyChooseUs from "@/components/chatbot/whyChooseUs/whyChooseUs";
import OurChatbots from "@/components/chatbot/ourChatbots/ourChatbots";
import WhyChooseChatbot from "@/components/chatbot/whyChoseChatbot/whyChooseChatbot";
import CustomGpt from "@/components/chatbot/customGpt/customGpt";
import AddYourBot from "@/components/chatbot/addYourBot/addYourBot";
import TurnConversation from "@/components/chatbot/turnConversation/turnConversation";
import ClientSays from "@/components/chatbot/clientSays/clientSays";
import ChatbotFaqs from "@/components/chatbot/chatbotFaqs/chatbotFaqs";
const ChatbotPage = () => {
  return (
    <div className="">
      {/* header */}
      <NavSection />

      {/* banner */}
      <ChatbotBanner />

      {/* Why Choose Us? */}
      <WhyChooseUs />

      {/* our chatbots */}
      <OurChatbots />
      {/* 1 why choose chatbot*/}
      <WhyChooseChatbot />

      {/* 2 custom gpt */}
      <CustomGpt />

      {/* 3 add your chatbot */}
      <AddYourBot />

      {/* 4 tern conversation */}
      <TurnConversation />

      {/* basic price */}
      {/* <OurPlans /> */}

      {/* what our client says */}
      <ClientSays />

      {/* faq */}
      <ChatbotFaqs />
    </div>
  );
};

export default ChatbotPage;
