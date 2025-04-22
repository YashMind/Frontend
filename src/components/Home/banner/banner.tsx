"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const slideCount = instanceRef.current?.track.details.slides.length || 0;
  const router = useRouter();
  return (
    <div
      className="home-banner h-screen bg-center bg-cover bg-no-repeat banner "
      style={{ backgroundImage: "url('/images/home-banner.png')" }}
    >
      <div ref={sliderRef} className="keen-slider h-full">
        <div className="keen-slider__slide">
          <div className="container">
            <div className="banner-text pt-44 text-white max-w-[682px] ">
              <h2
                className="text-[74px] leading-[100%] py-4"
                style={{
                  fontFamily: "'Audiowide', sans-serif",
                }}
              >
                AI That Thinks Ahead
              </h2>
              <p className="my-[26px] font-bold  [font-family:'Roboto_Flex',sans-serif]">
                Innovative AI solutions designed to simplify and accelerate your
                workflow.
              </p>
              <Link href="/signup"
                className="py-[14px] px-[43px] text-white text-base font-medium rounded-[18px] bg-[linear-gradient(90.04deg,_#501794_0.03%,_#3E70A1_101.88%)] hover:from-purple-700 hover:to-blue-600 transition-all cursor-pointer"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className="container">
            <div className="banner-text pt-44 text-white max-w-[682px] ">
              <h2
                className="text-[74px] leading-[100%] py-4"
                style={{
                  fontFamily: "'Audiowide', sans-serif",
                }}
              >
                AI That Thinks Ahead
              </h2>
              <p className="my-[26px] font-bold  [font-family:'Roboto_Flex',sans-serif]">
                Innovative AI solutions designed to simplify and accelerate your
                workflow.
              </p>
              <button
                className="py-[14px] px-[43px] text-white text-base font-medium rounded-[18px] bg-[linear-gradient(90.04deg,_#501794_0.03%,_#3E70A1_101.88%)] hover:from-purple-700 hover:to-blue-600 transition-all cursor-pointer"
                onClick={() => router.push("/signup")}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className="container">
            <div className="banner-text pt-44 text-white max-w-[682px] ">
              <h2
                className="text-[74px] leading-[100%] py-4"
                style={{
                  fontFamily: "'Audiowide', sans-serif",
                }}
              >
                AI That Thinks Ahead
              </h2>
              <p className="my-[26px] font-bold  [font-family:'Roboto_Flex',sans-serif]">
                Innovative AI solutions designed to simplify and accelerate your
                workflow.
              </p>
              <button
                className="py-[14px] px-[43px] text-white text-base font-medium rounded-[18px] bg-[linear-gradient(90.04deg,_#501794_0.03%,_#3E70A1_101.88%)] hover:from-purple-700 hover:to-blue-600 transition-all cursor-pointer"
                onClick={() => router.push("/signup")}
              >
                Sign up
              </button>
            </div>
          </div>
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
      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
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
  );
};

export default HomeBanner;
