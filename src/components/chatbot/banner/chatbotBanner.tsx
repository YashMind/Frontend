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

  return (
    <div className="chatbot-banner bg-gradient-to-t from-[#2B255C] via-[#1300AF] to-[#0083FF] h-screen">
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
              href="/auth/signin"
              className="bg-white text-base sm:text-lg font-semibold py-2 px-6 sm:py-[7px] sm:px-[49px] rounded-[22px] inline-block"
            >
              Sign In
            </Link>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/slide-img.png"
              className="max-w-[80%] lg:max-w-full"
              alt="AI Chatbot Illustration"
            />
          </div>
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
              href="/auth/signin"
              className="bg-white text-base sm:text-lg font-semibold py-2 px-6 sm:py-[7px] sm:px-[49px] rounded-[22px] inline-block"
            >
              Sign In
            </Link>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/slide-img.png"
              className="max-w-[80%] lg:max-w-full"
              alt="Automation Tools Illustration"
            />
          </div>
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
              href="/auth/signin"
              className="bg-white text-base sm:text-lg font-semibold py-2 px-6 sm:py-[7px] sm:px-[49px] rounded-[22px] inline-block"
            >
              Sign In
            </Link>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/slide-img.png"
              className="max-w-[80%] lg:max-w-full"
              alt="Customer Support Illustration"
            />
          </div>
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
            src="/images/arrow-lft.png"
            className="cursor-pointer w-8 h-8"
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