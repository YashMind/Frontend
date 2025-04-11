"use client";
import React, {useEffect} from "react";
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
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { getMeData } from "@/store/slices/auth/authSlice";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(()=>{
  dispatch(getMeData())
  }, [])
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
