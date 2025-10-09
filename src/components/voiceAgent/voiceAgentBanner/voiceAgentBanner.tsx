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
      <div
        ref={sliderRef}
        className="keen-slider intract-banner w-full  text-center h-screen pt-48"
      >
        {bannerData.map((item, index) => {
          return (
            <div key={item.heading + index} className="keen-slider__slide container">
              <div>
                <Image
                  alt="alt"
                  src="/images/banner-bg.png"
                  height={828}
                  width={1770}
                />
              </div>
              <h1
                className="text-transparent bg-[linear-gradient(90deg,_#271F6A_-3.02%,_#FFFFFF_47.85%,_#261E6C_102.96%)] bg-clip-text text-[36px] md:text-[74px] max-w-7xl mx-auto"
                style={{ fontFamily: "'Audiowide', sans-serif" }}
              >
                {item.heading}
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
                {userData ? "Dashboard" : "Sing In"}
              </button>
            </div>
          );
        })}

        {/* Dots */}
        <div className="mt-2 absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {[...Array(slideCount)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-[16px] h-[16px] rounded-full ${currentSlide === idx
                  ? "bg-[#01BEED]"
                  : "bg-transparent border  border-[#01BEED]"
                }`}
            />
          ))}
        </div>

        {/* Dots removed */}
      </div>
    </div>
  );
};

export default VoiceAgentBanner;