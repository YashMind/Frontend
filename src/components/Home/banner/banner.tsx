"use client"
import React, {useState} from "react";
import { useRouter } from "next/navigation";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
const HomeBanner = () => {
const [currentSlide, setCurrentSlide] = useState(0);
const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    })

const slideCount = instanceRef.current?.track.details.slides.length || 0;
const router = useRouter();
  return (
    <div
      className="home-banner h-full lg:h-screen bg-center bg-cover bg-no-repeat banner "
      style={{ backgroundImage: "url('/images/home-banner.png')" }}
    >
      <div ref={sliderRef} className="keen-slider">
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
          <button className="py-[14px] px-[43px] text-white text-base font-medium rounded-[18px] bg-[linear-gradient(90.04deg,_#501794_0.03%,_#3E70A1_101.88%)] hover:from-purple-700 hover:to-blue-600 transition-all cursor-pointer" onClick={()=> router.push("/signup")}>
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
          <button className="py-[14px] px-[43px] text-white text-base font-medium rounded-[18px] bg-[linear-gradient(90.04deg,_#501794_0.03%,_#3E70A1_101.88%)] hover:from-purple-700 hover:to-blue-600 transition-all cursor-pointer" onClick={()=> router.push("/signup")}>
            Sign up2
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
          <button className="py-[14px] px-[43px] text-white text-base font-medium rounded-[18px] bg-[linear-gradient(90.04deg,_#501794_0.03%,_#3E70A1_101.88%)] hover:from-purple-700 hover:to-blue-600 transition-all cursor-pointer" onClick={()=> router.push("/signup")}>
            Sign up3
          </button>
        </div>
      </div>
      </div>
    </div>

    {/* Arrows */}
    <button
        className="absolute bottom-20 left-6 bg-white/80 rounded-full p-3 text-black hover:bg-white"
        onClick={() => instanceRef.current?.prev()}
      >
        ←
      </button>
      <button
        className="absolute bottom-20 right-6 bg-white/80 rounded-full p-3 text-black hover:bg-white"
        onClick={() => instanceRef.current?.next()}
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {[...Array(slideCount)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
