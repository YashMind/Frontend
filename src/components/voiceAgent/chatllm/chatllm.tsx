"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const VoiceAgentBanner = () => {
  const router = useRouter();
  const userData = useSelector((state: RootState) => state.auth.loggedInUser);

  return (
    <div>
      <div className="w-full text-center h-screen pt-48">
        <div className="container">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <Image
              alt="background"
              src="/images/banner-bg.png"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Content */}
          <h1
            className="text-transparent bg-[linear-gradient(90deg,_#271F6A_-3.02%,_#FFFFFF_47.85%,_#261E6C_102.96%)] bg-clip-text text-[36px] md:text-[74px] max-w-7xl mx-auto"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            Coming Soon - Revolutionize Your AI Experience
          </h1>

          <p className="[font-family:'Roboto_Flex',sans-serif] font-semibold text-white text-base md:text-base my-[20px] md:my-[41px] w-full md:w-[556px] md:mx-auto">
            We're building something extraordinary! Our advanced AI voice agent is under development and will be launching soon with groundbreaking features.
          </p>

          <button
            className="cursor-pointer bg-white text-black px-6 py-2 rounded-full text-lg font-semibold shadow-md mb-8 hover:bg-gray-100 transition-colors duration-300"
            onClick={() =>
              router.push(
                userData ? "/chat-dashboard/main" : "/auth/signin"
              )
            }
          >
            {userData ? "Dashboard" : "Sign In"}
          </button>
        </div>

        {/* Dots removed */}
      </div>
    </div>
  );
};

export default VoiceAgentBanner;