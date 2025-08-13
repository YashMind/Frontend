"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { getMeData, isLoggedin } from "@/store/slices/auth/authSlice";
import { FaArrowRight } from "react-icons/fa";

const slideData = [
  {
    title: "One Platform, Endless AI Possibilities",
    description: "YASHRAA is a powerful All-in-one AI Tools Platform offering subscription-based tools like Chatbots, Voice Agents, LLM APIs, and more — all in one place. Subscribe, and deploy AI solutions tailored to your business needs. Build your AI stack with YASHRAA today!",
  },
  {
    title: "Powerful AI, Seamless Experience",
    description: "Our technology blends performance with simplicity, delivering a frictionless experience from day one.",
  },
  {
    title: "Automate. Accelerate. Achieve.",
    description: "Let AI take care of the routine, so you can focus on innovation and growth.",
  },
];

const CTAButton = ({ onClick, children }: { onClick?: () => void; children: React.ReactNode }) => (
  <button
    className="group relative flex items-center justify-center py-3 px-8 md:py-4 md:px-10 text-white text-base md:text-lg font-medium rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300 overflow-hidden"
    onClick={onClick}
  >
    <span className="relative z-10 flex items-center gap-2">
      {children}
      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
    </span>
    <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  </button>
);

const HomeBanner = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 0,
    },
    created() {
      setLoaded(true);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const userData: UserProfileData | null = useSelector(
    (state: RootState) => state.auth.loggedInUser
  );

  useEffect(() => {
    dispatch(isLoggedin());
  }, []);

  const slideCount = loaded ? instanceRef.current?.track.details.slides.length : slideData.length;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/images/home-banner.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
      </div>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider h-full w-full">
        {slideData.map((slide, idx) => (
          <div key={idx} className="keen-slider__slide flex items-center">
            <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
              <div className="max-w-2xl lg:max-w-3xl xl:max-w-[682px] text-white">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[74px] font-bold leading-tight md:leading-[1.1] py-4 font-['Audiowide',sans-serif]">
                  {slide.title}
                </h2>
                <p className="my-4 md:my-6 text-lg md:text-xl font-medium font-['Roboto_Flex',sans-serif]">
                  {slide.description}
                </p>
                <div className="mt-8">
                  {userData ? (
                    <CTAButton onClick={() => router.push("/chat-dashboard/main")}>
                      Go to Dashboard
                    </CTAButton>
                  ) : (
                    <CTAButton onClick={() => router.push("/auth/signup")}>
                      Get Started
                    </CTAButton>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {loaded && instanceRef.current && (
        <>
          <button
            className="hidden sm:flex absolute left-4 md:left-8 bottom-20 p-3 rounded-full bg-black/30 hover:bg-black/50 transition-colors duration-300"
            onClick={(e) => {
              e.stopPropagation();
              instanceRef.current?.prev();
            }}
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="hidden sm:flex absolute right-4 md:right-8 bottom-20 p-3 rounded-full bg-black/30 hover:bg-black/50 transition-colors duration-300"
            onClick={(e) => {
              e.stopPropagation();
              instanceRef.current?.next();
            }}
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Navigation */}
      {loaded && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {[...Array(slideCount)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`cursor-pointer w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${currentSlide === idx
                ? "bg-[#01BEED] scale-125"
                : "bg-white/50 hover:bg-white/70"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeBanner;