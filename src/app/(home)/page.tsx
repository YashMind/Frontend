<<<<<<< HEAD:src/components/Home/home.tsx
"use client";
import React, { useEffect } from "react";
import HomeHeader from "@/components/Common/header/header";
=======
import React from "react";
import "./style.css";
>>>>>>> 509bde275f41c39f56abe87fe8c9a8b4be1c59be:src/app/(home)/page.tsx
import HomeBanner from "@/components/Home/banner/banner";
import HomeProducts from "@/components/Home/products/products";
import ChatbotSection from "@/components/Home/chatbotSection/chatbotSection";
import ChatLLM from "@/components/Home/chatLLM/chatLLM";
<<<<<<< HEAD:src/components/Home/home.tsx
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
  
=======
import VoiceAgent from "@/components/voiceAgent/voiceAgent";
import PriceSection from "@/components/Home/priceSection/priceSection";
import Testimonials from "@/components/Home/testimonials/testimonials";
import FaqSection from "@/components/Home/faqSection/faqSection";
const HomePage = () => {
>>>>>>> 509bde275f41c39f56abe87fe8c9a8b4be1c59be:src/app/(home)/page.tsx
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

export default HomePage;
