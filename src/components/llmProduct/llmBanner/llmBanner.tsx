import Link from "next/link";
import React from "react";

const LlmBanner = () => {
  return (
    <div className="h-auto md:h-screen bg-gradient-to-t from-[#10094A] to-[#1503A6] mt-[27px]">
      <div className="container h-full flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-0 py-10 md:py-0">
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-[30px] sm:text-[36px] md:text-[50px] text-white py-4 "
         style={{ fontFamily: "'Audiowide', sans-serif" }}>Comming Soon</h1>
          <h2
            className="text-[28px] mt-0 sm:text-[36px] md:text-[50px] text-white py-4 "
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            Unlock the Power of AI with Our Large Language Model
          </h2>
          <p className="text-sm sm:text-base font-bold text-white my-[22px] [font-family:'Roboto_Flex',sans-serif]">
            Transform your business with cutting-edge AI language capabilities.
            From natural language understanding to content generation, our LLMs
            deliver unparalleled performance.
          </p>
          <Link
            href="/auth/signin"
            className="bg-white text-[#1503A6] text-sm sm:text-base font-semibold py-[7px] px-[30px] sm:px-[49px] rounded-[22px] inline-block"
          >
            Sign In
          </Link>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/llm-img.png"
            alt="alt"
            className="w-full max-w-[400px] md:max-w-[565px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LlmBanner;
