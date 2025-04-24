"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
const VoiceAgentBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });
  const slideCount = instanceRef.current?.track.details.slides.length || 0;
  return (
    <div>
      <div
        ref={sliderRef}
        className="keen-slider intract-banner w-full  text-center h-screen"
      >
        <div className="keen-slider__slide container">
          <div>
            <Image
              alt="alt"
              src="/images/banner-bg.png"
              height={828}
              width={1770}
            />
          </div>
          <h1
            className="text-transparent bg-[linear-gradient(90deg,_#271F6A_-3.02%,_#FFFFFF_47.85%,_#261E6C_102.96%)] bg-clip-text text-[36px] md:text-[74px]"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            Revolution the way you Interact with technology
          </h1>

          <p className="[font-family:'Roboto_Flex',sans-serif] font-bold text-white text-sm md:text-base my-[20px] md:my-[41px] w-full md:w-[556px]  md:mx-auto">
            From voice to vision, from touch to thought—explore a new era where
            your interaction with technology feels less like a task, and more
            like a conversation.
          </p>

          <Link
            href="/signin"
            className="bg-white text-black text-lg font-semibold rounded-[22px] px-5 py-1"
          >
            Sign In
          </Link>
        </div>
        <div className="keen-slider__slide container">
          <div>
            <Image
              alt="alt"
              src="/images/banner-bg.png"
              height={828}
              width={1770}
            />
          </div>
          <h1
            className="text-transparent bg-[linear-gradient(90deg,_#271F6A_-3.02%,_#FFFFFF_47.85%,_#261E6C_102.96%)] bg-clip-text text-[36px] md:text-[74px]"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            Revolution the way you Interact with technology
          </h1>

          <p className="[font-family:'Roboto_Flex',sans-serif] font-bold text-white text-sm md:text-base my-[20px] md:my-[41px] w-full md:w-[556px]  md:mx-auto">
            From voice to vision, from touch to thought—explore a new era where
            your interaction with technology feels less like a task, and more
            like a conversation.
          </p>

          <Link
            href="/signin"
            className="bg-white text-black text-lg font-semibold rounded-[22px] px-5 py-1"
          >
            Sign In
          </Link>
        </div>
        <div className="keen-slider__slide container">
          <div>
            <Image
              alt="alt"
              src="/images/banner-bg.png"
              height={828}
              width={1770}
            />
          </div>
          <h1
            className="text-transparent bg-[linear-gradient(90deg,_#271F6A_-3.02%,_#FFFFFF_47.85%,_#261E6C_102.96%)] bg-clip-text text-[36px] md:text-[74px]"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            Revolution the way you Interact with technology
          </h1>

          <p className="[font-family:'Roboto_Flex',sans-serif] font-bold text-white text-sm md:text-base my-[20px] md:my-[41px] w-full md:w-[556px]  md:mx-auto">
            From voice to vision, from touch to thought—explore a new era where
            your interaction with technology feels less like a task, and more
            like a conversation.
          </p>

          <Link
            href="/signin"
            className="bg-white text-black text-lg font-semibold rounded-[22px] px-5 py-1"
          >
            Sign In
          </Link>
        </div>
        {/* Dots */}
        <div className="mt-6 absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {[...Array(slideCount)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-[16px] h-[16px] rounded-full ${
                currentSlide === idx
                  ? "bg-[#01BEED]"
                  : "bg-transparent border  border-[#01BEED]"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="container relative">
        {/* Arrows */}
        <button
          className="absolute bottom-20  p-3 "
          onClick={() => instanceRef.current?.prev()}
        >
          <img src="/images/arrow-lft.png" />
        </button>
        <button
          className="absolute bottom-20  p-3 text-black right-0"
          onClick={() => instanceRef.current?.next()}
        >
          <img src="/images/arrow-right.png" />
        </button>
      </div>
    </div>
  );
};

export default VoiceAgentBanner;
