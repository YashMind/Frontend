import React from "react";

const HomeProducts = () => {
  return (
    <div className="Our Products mt-[60px] text-center md:text-left ">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="inline-block text-center">
          <h1
            className="font-normal text-[24px] md:text-[30px] text-white"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            Our Products
          </h1>
          <img
            src="/images/heading.png"
            alt="Heading"
            className="mx-auto mt-2 "
          />
        </div>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-[41px] relative mt-[40px] space-top">
          {/* Left Arrow */}
          <div className="relative w-[100px] md:w-[220px] arrow-circle">
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transform p-[3px] bg-gradient-to-b from-purple-500 to-blue-400 rounded-full hover:scale-105 transition">
              <button className="w-[80px] h-[80px] md:w-[160px] md:h-[160px] rounded-full bg-transparent flex items-center justify-center">
                <img
                  src="/images/left-arrow.png"
                  alt="Left Arrow"
                  className="w-[24px] md:w-auto cursor-pointer"
                />
              </button>
            </div>
          </div>

          {/* Cards List */}
          {[
            {
              title: "Chat Bot",
              desc: "Revolutionizing Customer Interaction with Advanced AI Chatbots, Providing Instant, Personalized Support and Seamless Conversations.",
              icon: "/images/icons8-voice-64 1.png",
            },
            {
              title: "Voice Agent",
              desc: "Transform the way you interact with technology—just speak, and let our voice agent handle the rest with precision and intelligence.",
              icon: "/images/icons8-voice-64 1 (1).png",
            },
            {
              title: "Chat LLM",
              desc: "Leveraging Cutting-Edge Large Language Models to Transform Multilingual or Document Processing, Enabling Effortless Communication.",
              icon: "/images/icons8-voice-64 1 (2).png",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className=" mob-bg relative w-full max-w-[275px] sm:w-[320px] md:w-[280px] min-h-[315px] text-white bg-contain bg-no-repeat py-[30px] px-[16px] flex flex-col items-center text-center mx-auto"
              style={{ backgroundImage: "url('/images/box-shape.png')" }}
            >
              {/* Icon */}
              <div className="absolute -left-[10px] -top-7 bg-white rounded-full p-2 sm:p-3 border shadow-md">
                <img
                  src={card.icon}
                  alt={`icon-${idx}`}
                  className="w-8 sm:w-10 cursor-pointer"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-2xl font-bold mt-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base font-light text-justify my-[16px] leading-[1.5] px-2">
                {card.desc}
              </p>

              {/* Button */}
              <button className="cursor-pointer mt-auto bg-gradient-to-r from-purple-700 to-blue-600 text-white px-5 py-2 rounded-full font-medium text-sm sm:text-base transition">
                Try Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
