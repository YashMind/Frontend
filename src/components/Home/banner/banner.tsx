"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { getMeData, isLoggedin } from "@/store/slices/auth/authSlice";

const slideData = [
  {
    title: "AI That Thinks Ahead",
    description:
      "Innovative AI solutions designed to simplify and accelerate your workflow.",
  },
  {
    title: "Powerful AI, Seamless Experience",
    description:
      "Our technology blends performance with simplicity, delivering a frictionless experience from day one.",
  },
  {
    title: "Automate. Accelerate. Achieve.",
    description:
      "Let AI take care of the routine, so you can focus on innovation and growth.",
  },
];

const CTAButton = ({ onClick }: { onClick?: () => void }) => (
  <button
    className="py-[14px] px-[43px] text-white text-base font-medium rounded-[18px] bg-[linear-gradient(90.04deg,_#501794_0.03%,_#3E70A1_101.88%)] hover:from-purple-700 hover:to-blue-600 transition-all cursor-pointer"
    onClick={onClick}
  >
    Sign up
  </button>
);
const CTADashboardButton = ({ onClick }: { onClick?: () => void }) => (
  <button
    className="py-[14px] px-[43px] text-white text-base font-medium rounded-[18px] bg-[linear-gradient(90.04deg,_#501794_0.03%,_#3E70A1_101.88%)] hover:from-purple-700 hover:to-blue-600 transition-all cursor-pointer"
    onClick={onClick}
  >
    Dashboard
  </button>
);

const HomeBanner = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const userData: UserProfileData | null = useSelector(
    (state: RootState) => state.auth.loggedInUser
  );

  useEffect(() => {
    dispatch(isLoggedin())
  }, [])

  const slideCount =
    instanceRef.current?.track?.details?.slides?.length || slideData.length;

  return (
    <div
      className="home-banner h-screen bg-center bg-cover bg-no-repeat banner"
      style={{ backgroundImage: "url('/images/home-banner.png')" }}
    >
      <div ref={sliderRef} className="keen-slider h-full">
        {slideData.map((slide, idx) => (
          <div key={idx} className="keen-slider__slide">
            <div className="container">
              <div className="banner-text pt-44 text-white max-w-[682px]">
                <h2
                  className="text-[74px] leading-[100%] py-4"
                  style={{ fontFamily: "'Audiowide', sans-serif" }}
                >
                  {slide.title}
                </h2>
                <p className="my-[26px] font-bold [font-family:'Roboto_Flex',sans-serif]">
                  {slide.description}
                </p>
                {userData ? <CTADashboardButton onClick={() => router.push("/chat-dashboard/main")} /> : <CTAButton onClick={() => router.push("/auth/signup")} />}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container relative">
        <button
          className="absolute bottom-20 p-3"
          onClick={() => instanceRef.current?.prev()}
        >
          <img src="/images/arrow-lft.png" alt="Previous" className="cursor-pointer" />
        </button>
        <button
          className="absolute bottom-20 right-0 p-3"
          onClick={() => instanceRef.current?.next()}
        >
          <img src="/images/arrow-right.png" alt="Next" className="cursor-pointer" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {[...Array(slideCount)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`cursor-pointer w-[16px] h-[16px] rounded-full ${currentSlide === idx
              ? "bg-[#01BEED]"
              : "bg-transparent border border-[#01BEED]"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
