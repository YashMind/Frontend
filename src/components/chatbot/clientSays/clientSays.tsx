"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
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
  return (
    <div className="bg-[#2b1e8f]  py-10 px-4 md:px-10">
      <h2 className="text-white text-center text-2xl md:text-3xl font-semibold mb-10">
        What our <span className="text-[#28e0f2]">Client Says</span>
      </h2>

      <div className="relative flex items-center justify-center gap-4 max-w-6xl mx-auto">
        {/* Left Arrow */}
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#2b1e8f] hover:bg-[#28e0f2] transition"
          onClick={() => instanceRef.current?.prev()}
        >
          <svg
            className="w-5 h-5 rotate-180"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Testimonials */}
        <div ref={sliderRef} className="keen-slider flex overflow-hidden">
          {/* Card 1 */}
          <div className="keen-slider__slide bg-white rounded-xl w-72 shadow-md flex flex-col items-center text-center">
            <img
              src="/images/testi-1.png"
              alt="client"
              className="w-full rounded-t-xl h-100 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-center text-yellow-400 mb-3 text-2xl">
                ★★★★★
              </div>
              <p className="text-sm text-[#6F6C90]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                hendrerit scelerisque quam, id imperdiet nunc rhoncus ut.
                Maecenas vitae finibus odio, non egestas odio. Aliquam et
                vestibulum ligula, sed eleifend urna. Duis commodo imperdiet
                neque, bibendum mollis dui ultrices nec. Quisque sollicitudin.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="keen-slider__slide bg-white rounded-xl w-72 shadow-md flex flex-col items-center text-center">
            <img
              src="/images/testi-1.png"
              alt="client"
              className="w-full rounded-t-xl h-100 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-center text-yellow-400 mb-3 text-2xl">
                ★★★★★
              </div>
              <p className="text-sm text-[#6F6C90]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                hendrerit scelerisque quam, id imperdiet nunc rhoncus ut.
                Maecenas vitae finibus odio, non egestas odio. Aliquam et
                vestibulum ligula, sed eleifend urna. Duis commodo imperdiet
                neque, bibendum mollis dui ultrices nec. Quisque sollicitudin.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="keen-slider__slide bg-white rounded-xl w-72 shadow-md flex flex-col items-center text-center">
            <img
              src="/images/testi-1.png"
              alt="client"
              className="w-full rounded-t-xl h-100 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-center text-yellow-400 mb-3 text-2xl">
                ★★★★★
              </div>
              <p className="text-sm text-[#6F6C90]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                hendrerit scelerisque quam, id imperdiet nunc rhoncus ut.
                Maecenas vitae finibus odio, non egestas odio. Aliquam et
                vestibulum ligula, sed eleifend urna. Duis commodo imperdiet
                neque, bibendum mollis dui ultrices nec. Quisque sollicitudin.
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="keen-slider__slide bg-white rounded-xl w-72 shadow-md flex flex-col items-center text-center">
            <img
              src="/images/testi-1.png"
              alt="client"
              className="w-full rounded-t-xl h-100 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-center text-yellow-400 mb-3 text-2xl">
                ★★★★★
              </div>
              <p className="text-sm text-[#6F6C90]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                hendrerit scelerisque quam, id imperdiet nunc rhoncus ut.
                Maecenas vitae finibus odio, non egestas odio. Aliquam et
                vestibulum ligula, sed eleifend urna. Duis commodo imperdiet
                neque, bibendum mollis dui ultrices nec. Quisque sollicitudin.
              </p>
            </div>
          </div>
          {/* Card 5 */}
          <div className="keen-slider__slide bg-white rounded-xl w-72 shadow-md flex flex-col items-center text-center">
            <img
              src="/images/testi-1.png"
              alt="client"
              className="w-full rounded-t-xl h-100 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-center text-yellow-400 mb-3 text-2xl">
                ★★★★★
              </div>
              <p className="text-sm text-[#6F6C90]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                hendrerit scelerisque quam, id imperdiet nunc rhoncus ut.
                Maecenas vitae finibus odio, non egestas odio. Aliquam et
                vestibulum ligula, sed eleifend urna. Duis commodo imperdiet
                neque, bibendum mollis dui ultrices nec. Quisque sollicitudin.
              </p>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#2b1e8f] hover:bg-[#28e0f2] transition"
          onClick={() => instanceRef.current?.next()}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ClientSays;
