import React from "react";

const AiArea = () => {
  return (
    <div className="bg-[#1D0F8DED] text-white py-[18px] overflow-hidden">
      <div className="container">
        <div className=" md:block lg:flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          {/* Left Section */}
          <div className="w-full md:w-1/2 mob-view">
            <h1
              className="text-[28px] sm:text-[34px] md:text-[40px]  "
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              You get all of this <br className="hidden md:block" /> at one
              place
            </h1>
            <p className="font-bold text-white text-sm sm:text-base my-[22px] [font-family:'Roboto_Flex',sans-serif]">
              Let our LLM help your customers across multiple social media
              channels at once
            </p>
            <button className="cursor-pointer mt-4 px-6 py-2 bg-white text-[#1503A6] font-semibold rounded-full shadow-md hover:bg-gray-100 transition">
              Try Now
            </button>
            <div className="mt-6 ">
              <img
                alt="alt"
                src="/images/chat1.png"
                className="w-full max-w-[422px] mx-auto"
              />
            </div>
          </div>

          {/* Right Slides Section */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0 absolute right-0 overflow-hidden absolute-mob">
            <div className="relative md:-right-[74px] overflow-hidden">
              <h2 className="text-lg font-semibold mb-4">For Content</h2>
              <div className="flex flex-wrap gap-3">
                {Array(16)
                  .fill("Articles")
                  .map((text, idx) => (
                    <button
                      key={`content-${idx}`}
                      className="px-4 py-2 bg-white text-[#1503A6] rounded-full text-sm font-medium shadow-sm"
                    >
                      {text}
                    </button>
                  ))}
              </div>
            </div>
            <div className="relative md:-right-[74px] mt-8 overflow-hidden">
              <h2 className="text-lg font-semibold mb-4">For Marketing</h2>
              <div className="flex flex-wrap gap-3">
                {Array(16)
                  .fill("Articles")
                  .map((text, idx) => (
                    <button
                      key={`marketing-${idx}`}
                      className="px-4 py-2 bg-white text-[#1503A6] rounded-full text-sm font-medium shadow-sm"
                    >
                      {text}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiArea;
