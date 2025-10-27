"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Link from "next/link";

const ChatbotBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: { perView: 1, spacing: 0 },
      },
      "(max-width: 1023px)": {
        slides: { perView: 1, spacing: 0 },
      },
    },
  });

  const slideCount = instanceRef.current?.track.details.slides.length || 0;
  const router = useRouter();
  const userData = useSelector((state: RootState) => state.auth.loggedInUser);
  return (
    <div className="relative h-screen z-70">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/ai-generated.png')" }}
      ></div>

      <div
        className="absolute inset-0 bg-[linear-gradient(360deg,_#0083FF_-17.49%,_#1300AF_4.72%,_#2B255C_98.87%)]
 opacity-70"
      ></div>
      <div ref={sliderRef} className="keen-slider container h-full">
        {/* Slide 1 */}
        <div className="keen-slider__slide flex flex-col lg:flex-row items-start justify-center pt-28 lg:justify-between px-4">
          <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[74px] leading-[100%] py-4 text-white"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              Custom AI Chatbots
            </h1>
            <p className="font-bold text-white text-sm sm:text-base my-4 sm:my-[22px] [font-family:'Roboto_Flex',sans-serif]">
              Innovative AI solutions designed to simplify and accelerate your
              workflow.
            </p>

            <Link
              className="cursor-pointer bg-white text-black px-6 py-2 rounded-full text-lg font-semibold shadow-md mb-8 hover:bg-gray-100 transition-colors duration-300"
              href={userData ? "/chat-dashboard/main" : "/auth/signin"}
            >
              {userData ? "Dashboard" : "Sign In"}
            </Link>
          </div>
          {/* <div className="lg:w-1/2 flex justify-center " >
            <img
              src="/images/ai-generated.png"
              className="max-w-[80%] lg:max-w-full"
              alt="AI Chatbot Illustration"
            />
          </div> */}
        </div>

        {/* Slide 2 */}
        <div className="keen-slider__slide flex flex-col lg:flex-row items-start pt-24 justify-center lg:justify-between px-4">
          <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[74px] leading-[100%] py-4 text-white"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              Smart Automation Tools
            </h1>
            <p className="font-bold text-white text-sm sm:text-base my-4 sm:my-[22px]">
              Revolutionize repetitive tasks with intelligent systems that learn
              and adapt to your business needs.
            </p>
            <Link
              className="cursor-pointer bg-white text-black px-6 py-2 rounded-full text-lg font-semibold shadow-md mb-8 hover:bg-gray-100 transition-colors duration-300"
              href={userData ? "/chat-dashboard/main" : "/auth/signin"}
            >
              {userData ? "Dashboard" : "Sign In"}
            </Link>
          </div>
          {/* <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/slide-img.png"
              className="max-w-[80%] lg:max-w-full"
              alt="Automation Tools Illustration"
            />
          </div> */}
        </div>

        {/* Slide 3 */}
        <div className="keen-slider__slide flex flex-col lg:flex-row items-start pt-24 justify-center lg:justify-between px-4">
          <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[74px] leading-[100%] py-4 text-white"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              AI-Powered Customer Support
            </h1>
            <p className="font-bold text-white text-sm sm:text-base my-4 sm:my-[22px]">
              Enhance user satisfaction with 24/7 virtual assistants that
              provide instant, accurate responses.
            </p>
            <Link
              className="cursor-pointer bg-white text-black px-6 py-2 rounded-full text-lg font-semibold shadow-md mb-8 hover:bg-gray-100 transition-colors duration-300"
              href={userData ? "/chat-dashboard/main" : "/auth/signin"}

            >
              {userData ? "Dashboard" : "Sign In"}
            </Link>
          </div>
          {/* <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/slide-img.png"
              className="max-w-[80%] lg:max-w-full"
              alt="Customer Support Illustration"
            />
          </div> */}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="container relative">
        <button
          className="absolute bottom-20 left-4 p-3 z-10"
          onClick={() => instanceRef.current?.prev()}
          aria-label="Previous slide"
        >
          <img
            src="/images/arrow-right.png"
            className="cursor-pointer w-8 h-8"
            alt="Previous"
          />
        </button>
        <button
          className="absolute bottom-20 right-4 p-3 z-10"
          onClick={() => instanceRef.current?.next()}
          aria-label="Next slide"
        >
          <img
            src="/images/arrow-right.png"
            className="cursor-pointer w-8 h-8 rotate-180"
            alt="Next"
          />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {[...Array(slideCount)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`cursor-pointer w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors ${currentSlide === idx
              ? "bg-[#01BEED]"
              : "bg-transparent border border-[#01BEED]"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatbotBanner;
