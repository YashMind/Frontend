import React from "react";
import ChatbotHeader from "@/components/chatbot/header/chatbotHeader";
import ChatbotFooter from "@/components/chatbot/footer/chatbotFooter";
import ChatbotBanner from "@/components/chatbot/banner/chatbotBanner";
import WhyChooseUs from "@/components/chatbot/whyChooseUs/whyChooseUs";
import OurChatbots from "@/components/chatbot/ourChatbots/ourChatbots";
import OurPlans from "@/components/chatbot/ourPlans/ourPlans";
import ChatbotFaqs from "@/components/chatbot/chatbotFaqs/chatbotFaqs";
import ClientSays from "@/components/chatbot/clientSays/clientSays";

const Chatbot = () => {
  return (
    <div className="bg-white">
      {/* header */}
      <ChatbotHeader fix={false} addBgColor={false} />

      {/* banner */}
      <ChatbotBanner />

      {/* Why Choose Us? */}
      <WhyChooseUs />

      {/* our chatbots */}
      <OurChatbots />
      {/* basic price */}
      <OurPlans />

      {/* what our client says */}
      <ClientSays />
      {/* faq */}
      <ChatbotFaqs />

      {/* footer */}
      <ChatbotFooter />
    </div>
  );
};

export default Chatbot;
