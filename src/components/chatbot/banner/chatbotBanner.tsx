"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const ChatbotBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const slideCount = instanceRef.current?.track.details.slides.length || 0;
  return (
    <div className="chatbot-banner bg-gradient-to-t from-[#2B255C] via-[#1300AF] to-[#0083FF]  pt-[155px] h-screen">
      <div ref={sliderRef} className="keen-slider container h-full">
        <div className="keen-slider__slide flex">
          <div className="">
            <h1
              className="text-[74px] leading-[100%] py-4 text-white"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              Custom AI Chatbots
            </h1>
            <p className="font-bold text-white text-base my-[22px] [font-family:'Roboto_Flex',sans-serif]">
              Innovative AI solutions designed to simplify and accelerate your
              workflow.
            </p>
            <Link
              href="/auth/signin"
              className="bg-white text-lg font-semibold py-[7px] px-[49px] rounded-[22px] "
            >
              Sign In
            </Link>
          </div>
          <div className="">
            <img src="/images/slide-img.png" />
          </div>
        </div>
        <div className="keen-slider__slide flex">
          <div>
            <h1
              className="text-[74px] leading-[100%] py-4 text-white"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              Smart Automation Tools
            </h1>
            <p className="font-bold text-white text-base my-[22px]">
              Revolutionize repetitive tasks with intelligent systems that learn
              and adapt to your business needs.
            </p>
            <Link
              href="/auth/signin"
              className="bg-white text-lg font-semibold py-[7px] px-[49px] rounded-[22px] "
            >
              Sign In
            </Link>
          </div>
          <div className="">
            <img src="/images/slide-img.png" />
          </div>
        </div>

        <div className="keen-slider__slide flex">
          <div className="">
            <h1
              className="text-[74px] leading-[100%] py-4 text-white"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              AI-Powered Customer Support
            </h1>
            <p className="font-bold text-white text-base my-[22px]">
              Enhance user satisfaction with 24/7 virtual assistants that
              provide instant, accurate responses.
            </p>
            <Link
              href="/auth/signin"
              className="bg-white text-lg font-semibold py-[7px] px-[49px] rounded-[22px] "
            >
              Sign In
            </Link>
          </div>
          <div className="">
            <img src="/images/slide-img.png" />
          </div>
        </div>
      </div>
      <div className="container relative">
        {/* Arrows */}
        <button
          className="absolute bottom-20  p-3 "
          onClick={() => instanceRef.current?.prev()}
        >
          <img src="/images/arrow-right.png" className="cursor-pointer" />
        </button>
        <button
          className="absolute bottom-20  p-3 text-black right-0"
          onClick={() => instanceRef.current?.next()}
        >
          <img src="/images/arrow-lft.png" className="cursor-pointer" />
        </button>
      </div>
      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {[...Array(slideCount)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`cursor-pointer w-[16px] h-[16px] rounded-full ${
              currentSlide === idx
                ? "bg-[#01BEED]"
                : "bg-transparent border  border-[#01BEED]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatbotBanner;
