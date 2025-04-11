import React from "react";
import ChatbotHeader from "@/components/chatbot/header/chatbotHeader";
import ChatbotFooter from "@/components/chatbot/footer/chatbotFooter";
import ChatbotBanner from "@/components/chatbot/banner/chatbotBanner";
import WhyChooseUs from "@/components/chatbot/whyChooseUs/whyChooseUs";
import OurChatbots from "@/components/chatbot/ourChatbots/ourChatbots";
import OurPlans from "@/components/chatbot/ourPlans/ourPlans";
import ChatbotFaqs from "@/components/chatbot/chatbotFaqs/chatbotFaqs";

const Chatbot = () => {
  return (
    <div className="bg-white">
      {/* header */}
      <ChatbotHeader />

      {/* banner */}
      <ChatbotBanner />

      {/* Why Choose Us? */}
      <WhyChooseUs />

      {/* our chatbots */}
      <OurChatbots />
      {/* basic price */}
      <OurPlans />

      {/* faq */}
      <ChatbotFaqs />

      {/* footer */}
      <ChatbotFooter />
    </div>
  );
};

export default Chatbot;
