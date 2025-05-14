"use client";
import React, { useEffect } from "react";
import HomeHeader from "@/components/Common/header/header";
import HomeBanner from "@/components/Home/banner/banner";
import HomeProducts from "@/components/Home/products/products";
import ChatbotSection from "@/components/Home/chatbotSection/chatbotSection";
import ChatLLM from "@/components/Home/chatLLM/chatLLM";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { getMeData } from "@/store/slices/auth/authSlice";
import { useRouter } from "next/navigation";
import PriceSection from "@/components/Home/priceSection/priceSection";
import Testimonials from "@/components/Home/testimonials/testimonials";
import FaqSection from "@/components/Home/faqSection/faqSection";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    dispatch(getMeData({ router }));
  }, [router]);

  return (
    <div>
      {/* banner section */}
      <HomeBanner />

      {/* Our Products */}
      <HomeProducts />

      {/* Chat Bot Sec */}
      <ChatbotSection />

      {/* Chat LLM section */}
      <ChatLLM />

      {/* Voice Agent section */}
      {/* <VoiceAgent /> */}

      {/* price section */}
      <PriceSection />

      {/* Testimonials section */}
      <Testimonials />

      {/* faq section */}
      <FaqSection />
    </div>
  );
};

export default Home;
