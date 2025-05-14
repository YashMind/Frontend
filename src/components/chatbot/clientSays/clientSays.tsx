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

  const reviewData = [
    {
      count: 1,
      name: "NovaTech Solutions",

      review:
        "Working with this team has been an absolute game-changer for our business. From the initial consultation to the final delivery, they maintained excellent communication and demonstrated a deep understanding of our project goals. What stood out the most was their ability to take feedback constructively and apply it immediately, without compromising the vision.",
    },
    {
      count: 2,
      name: "GreenBridge Analytics",
      review:
        "I was hesitant at first to outsource such a critical part of our platform, but this team quickly earned our trust. Not only did they deliver high-quality code, but they also took the time to explain the decisions made throughout the process. Their proactive approach saved us time and resources. Truly a professional and talented group of individuals who care about the success of your project.",
    },
    {
      count: 3,
      name: "Skyline Retail Group",
      review:
        "Their attention to detail is unmatched. Every feature was implemented with precision, and the UI/UX design reflects a solid understanding of modern design principles. We had a tight deadline and were prepared for delays, but the team delivered everything ahead of schedule and with zero compromises on quality. I couldn’t have asked for a better development partner.",
    },
    {
      count: 4,
      name: "PulseWave Health",
      review:
        "This is the most seamless collaboration I’ve had with any remote development team. They are responsive, technically proficient, and genuinely invested in helping you succeed. The regular updates and quick iterations made the process stress-free, and the outcome was a polished, professional application that our users love. Highly recommended!",
    },
    {
      count: 5,
      name: "EcoFleet Logistics",
      review:
        "From day one, the experience was top-notch. We had multiple revisions and updates, and the team handled each one gracefully, ensuring that we felt heard and valued throughout the journey. Their expertise goes beyond just writing code—they truly understand the business impact of what they build. If you're looking for reliability and excellence, this is the team to go with.",
    },
    {
      count: 6,
      name: "Luminary Creative Studio",
      review:
        "It’s rare to find a development team that is both technically skilled and emotionally intelligent. They knew when to push back with better suggestions and when to simply execute. I appreciated their commitment to delivering not just a website, but a complete user experience. The feedback from our users has been overwhelmingly positive. Will definitely work with them again.",
    },
  ];

  return (
    <div className="bg-[#2b1e8f]  py-10 px-4 md:px-10" id="reviews">
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
        <div ref={sliderRef} className="keen-slider flex items-center">
          {/* Card 1 */}
          {reviewData &&
            reviewData?.map((item, index: number) => {
              const isSecondSlide =
                index === (currentSlide + 1) % reviewData.length;
              return (
                <div
                  className={`keen-slider__slide bg-white rounded-xl flex flex-col items-center text-center shadow-lg overflow-hidden transition-all duration-300 ${
                    isSecondSlide
                      ? "h-[550px] w-[301px]"
                      : "h-[500px] w-[250px]"
                  } hover:shadow-xl `}
                  key={index}
                >
                  <div className="relative w-full h-56 overflow-hidden rounded-t-xl">
                    <img
                      src="/images/testi-1.png"
                      alt="client"
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
                  </div>

                  <div className="p-6 flex flex-col items-center flex-grow">
                    <div className="mb-4">
                      <svg
                        width="20"
                        height="15"
                        viewBox="0 0 40 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-200"
                      >
                        <path
                          d="M10.25 30L15.5 0H0L10.25 30ZM30.25 30L35.5 0H20L30.25 30Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>

                    <p
                      className={`text-sm text-gray-600 mb-6 ${
                        isSecondSlide ? "overflow-y-auto" : "line-clamp-5"
                      }`}
                    >
                      {item?.review}
                    </p>

                    <div className="mt-auto">
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {item.name}
                      </h4>
                      <div className="flex justify-center space-x-1 text-yellow-400 mb-3 text-lg">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
