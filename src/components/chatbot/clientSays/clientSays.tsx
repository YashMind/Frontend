"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const ClientSays = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 1,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const slideCount = instanceRef.current?.track.details.slides.length || 0;

  const reviewData = [
    {
      count: 1,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit scelerisque quam, id imperdiet nunc rhoncus ut. Maecenas vitae finibus odio, non egestas odio. Aliquam et vestibulum ligula, sed eleifend urna. Duis commodo imperdiet neque, bibendum mollis dui ultrices nec. Quisque sollicitudin.",
    },

    {
      count: 2,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit scelerisque quam, id imperdiet nunc rhoncus ut. Maecenas vitae finibus odio, non egestas odio. Aliquam et vestibulum ligula, sed eleifend urna. Duis commodo imperdiet neque, bibendum mollis dui ultrices nec. Quisque sollicitudin.",
    },
    {
      count: 3,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit scelerisque quam, id imperdiet nunc rhoncus ut. Maecenas vitae finibus odio, non egestas odio. Aliquam et vestibulum ligula, sed eleifend urna. Duis commodo imperdiet neque, bibendum mollis dui ultrices nec. Quisque sollicitudin.",
    },
    {
      count: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit scelerisque quam, id imperdiet nunc rhoncus ut. Maecenas vitae finibus odio, non egestas odio. Aliquam et vestibulum ligula, sed eleifend urna. Duis commodo imperdiet neque, bibendum mollis dui ultrices nec. Quisque sollicitudin.",
    },
    {
      count: 5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit scelerisque quam, id imperdiet nunc rhoncus ut. Maecenas vitae finibus odio, non egestas odio. Aliquam et vestibulum ligula, sed eleifend urna. Duis commodo imperdiet neque, bibendum mollis dui ultrices nec. Quisque sollicitudin.",
    },
    {
      count: 6,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit scelerisque quam, id imperdiet nunc rhoncus ut. Maecenas vitae finibus odio, non egestas odio. Aliquam et vestibulum ligula, sed eleifend urna. Duis commodo imperdiet neque, bibendum mollis dui ultrices nec. Quisque sollicitudin.",
    },
  ];
  return (
    <div className="bg-[#2b1e8f]  py-10 px-4 md:px-10">
      <div className="container">
        <h2
          className="text-white text-2xl md:text-3xl font-semibold mb-10"
          style={{
            fontFamily: "'Audiowide', sans-serif",
          }}
        >
          What our <span className="text-[#28e0f2]">Client Says</span>
        </h2>
      </div>
      <div className="relative flex items-center justify-center gap-4 max-w-6xl mx-auto">
        {/* Left Arrow */}
        <button className="" onClick={() => instanceRef.current?.prev()}>
          <Image alt="alt" src="/images/left.png" height={68} width={68} />
        </button>

        {/* Testimonials */}
        <div
          ref={sliderRef}
          className="keen-slider flex overflow-hidden items-center"
        >
          {/* Card 1 */}
          {reviewData &&
            reviewData?.map((item, index: number) => {
              const isFirstSlide =
                index === (currentSlide) % reviewData.length;
              const isSecondSlide =
                index === (currentSlide + 1) % reviewData.length;
              const isThirdSlide =
                index === (currentSlide + 2) % reviewData.length;
              return (
                <div
                  className={`keen-slider__slide bg-white rounded-xl w-72 flex flex-col items-center text-center shadow-[0_0_14px_7px_#00000040]  ${
                    isSecondSlide
                      ? "h-[550px] w-[250px]"
                      : "h-[500px] w-[250px]"
                  }`}
                  key={index}
                >
                  <img
                    src="/images/testi-1.png"
                    alt="client"
                    className="w-full rounded-t-xl h-100 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-center text-yellow-400 mb-3 text-2xl">
                      ★★★★★
                    </div>
                    <p className="text-xs text-[#6F6C90]">
                      {item?.count + " " + item?.review}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Right Arrow */}
        <button className="" onClick={() => instanceRef.current?.next()}>
          <Image alt="alt" src="/images/left.png" height={68} width={68} />
        </button>
      </div>
    </div>
  );
};

export default ClientSays;
