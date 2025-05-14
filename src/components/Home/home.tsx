"use client";
import React, { useEffect } from "react";
import HomeHeader from "@/components/Common/header/header";
import HomeBanner from "@/components/Home/banner/banner";
import HomeProducts from "@/components/Home/products/products";
import ChatbotSection from "@/components/Home/chatbotSection/chatbotSection";
import HomeFooter from "@/components/Common/footer/footer";
import FaqSection from "@/components/Home/faqSection/faqSection";
import Testimonials from "@/components/Home/testimonials/testimonials";
import PriceSection from "@/components/Home/priceSection/priceSection";
import VoiceAgent from "@/components/Home/voiceAgent/voiceAgent";
import ChatLLM from "@/components/Home/chatLLM/chatLLM";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { getMeData } from "@/store/slices/auth/authSlice";
import { useRouter } from "next/navigation";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()

  useEffect(() => {
    dispatch(getMeData({ router }));
  }, [router]);
  
  return (
    <div>
      {/* header */}
      <HomeHeader />

      {/* banner section */}
      <HomeBanner />

      {/* Our Products */}
      <HomeProducts />

      {/* Chat Bot Sec */}
      <ChatbotSection />

      {/* Chat LLM section */}
      <ChatLLM />

      {/* Voice Agent section */}
      <VoiceAgent />

      {/* price section */}
      <PriceSection />

      {/* Testimonials section */}
      <Testimonials />

      {/* faq section */}
      <FaqSection />

      {/* footer */}
      <HomeFooter />
    </div>
  );
};

export default Home;
