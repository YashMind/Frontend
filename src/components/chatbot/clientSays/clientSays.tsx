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
      name: "Maria Gonzalez, CX Manager, Madrid",
      review:
        "Yashraa’s chatbot revolutionized our customer support — it’s fast, intelligent, and easy to customize. We deployed it in minutes, and the AI’s natural tone surprised even our team! Support requests dropped by 40% while satisfaction soared.",
    },
    {
      count: 2,
      name: "James Patel, Agency Founder, London",
      review:
        "We switched to this chatbot after trying several platforms — the difference is night and day! The ability to import knowledge from our PDFs and tailor the bot’s personality makes this a game-changer. Our clients love interacting with it.",
    },
    {
      count: 3,
      name: "Anika Sharma, SaaS Entrepreneur, Bengaluru",
      review:
        "As a startup, we needed a chatbot that didn’t require coding but could still deliver results. YASHRAA gave us exactly that — simple setup, powerful features, and fantastic support. Our first week saw 2x more lead conversions!",
    },
    {
      count: 4,
      name: "Tobias Müller, EdTech Consultant, Berlin",
      review:
        "We operate in the education sector — this chatbot helps us engage with students 24/7. The custom persona and multi-LLM flexibility are huge advantages. Highly reliable and secure too!",
    },
    {
      count: 5,
      name: "William Johnson, E-commerce Director, New York",
      review:
        "On this platform, our custom chatbots have elevated our ecommerce experience. The bots guide customers through FAQs, recommend products, and even handle post-sale support. We’re seeing higher retention and fewer abandoned carts.",
    },
    {
      count: 6,
      name: "Hiroshi Tanaka, Software Consultant, Tokyo",
      review:
        "As a freelance developer, I needed a flexible AI chatbot for my clients. YASHRAA’s marketplace model and easy integration made it my go-to platform. Each project is unique — and YASHRAA lets me deliver custom solutions easily.",
    },
    {
      count: 7,
      name: "Mark Evans, AI Consultant, Toronto",
      review:
        "We tested YASHRAA side-by-side with three major chatbot providers — its performance, security, won hands down. I now recommend it to every client looking to level up their customer engagement.",
    },
    {
      count: 8,
      name: "Sophia Lee, Marketing Manager, Seoul",
      review:
        "With YASHRAA, we built a branded chatbot in less than an hour. The ability to import our training materials and monitor chat history has been a huge win. The flexibility is unmatched.",
    },
    {
      count: 9,
      name: "Hannah Wilson, Creative Director, Sydney",
      review:
        "As a creative agency, we love how this platform lets us craft chatbots that match our clients’ brand voice. Plus, it gives us the flexibility to test and optimize easily.",
    },
    {
      count: 10,
      name: "Ahmed Nasser, Operations Manager, Dubai",
      review:
        "YASHRAA’s AI chatbot helped us automate 80% of our customer service inquiries — freeing up our team for higher-value work. The dashboard is intuitive, and the results speak for themselves.",
    },
    {
      count: 11,
      name: "Dr. Elena Petrova, HealthTech Innovator, Moscow",
      review:
        "Our healthcare chatbot needed to handle sensitive data securely — this bot gave us the privacy controls we needed along with fantastic AI performance. Very impressed.",
    },
    {
      count: 12,
      name: "Jason Wu, Startup Founder, Singapore",
      review:
        "I’m amazed at how fast we got our chatbot live with YASHRAA — zero coding, simple uploads, and amazing AI responses. It's an ideal solution for any fast-paced startup.",
    },
    {
      count: 13,
      name: "Matteo Ricci, FinTech Consultant, Milan",
      review:
        "The fact that YASHRAA supports multiple AI models under one platform is a major plus — no vendor lock-in. Our finance clients appreciate the accuracy and control this gives us. Highly recommended.",
    }
  ]

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
                  className={`keen-slider__slide bg-white rounded-xl flex flex-col items-center text-center shadow-lg overflow-hidden transition-all duration-300 ${isSecondSlide
                    ? " w-[301px]"
                    : " w-[250px]"
                    } hover:shadow-xl `}
                  key={index}
                >
                  {/* <div className="relative w-full h-56 overflow-hidden rounded-t-xl">
                    <img
                      src="/images/testi-1.png"
                      alt="client"
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
                  </div> */}

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
                      className={`text-sm text-gray-600 mb-6 ${isSecondSlide ? "overflow-y-auto" : "line-clamp-5"
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
