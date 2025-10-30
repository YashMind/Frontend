import React from "react";
import "./style.css";
import HomeBanner from "@/components/Home/banner/banner";
import HomeProducts from "@/components/Home/products/products";
import ChatbotSection from "@/components/Home/chatbotSection/chatbotSection";
import PriceSection from "@/components/Home/priceSection/priceSection";
import Testimonials from "@/components/Home/testimonials/testimonials";
import FaqSection from "@/components/Home/faqSection/faqSection";

const HomePage = () => {
  return (
    <div>
      {/* banner section */}
      <HomeBanner />

      {/* Our Products */}
      <HomeProducts />

      {/* Chat Bot Sec */}
      <ChatbotSection />

      {/* Voice Agent section */}
      {/* <VoiceAgent /> */}

      {/* Chat LLM section */}
      {/* <ChatLLM /> */}

      {/* price section */}
      <PriceSection />

      {/* Testimonials section */}
      <Testimonials />

      {/* faq section */}
      <FaqSection />
    </div>
  );
};

export default HomePage;
