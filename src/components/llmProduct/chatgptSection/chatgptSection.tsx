import Image from "next/image";
import React from "react";

const ChatgptSection = () => {
  return (
    <div className="bg-[#2D2095] overflow-hidden py-[68px]">
      <div className="container">
        <h1
          className="text-[28px] sm:text-[32px] md:text-4xl font-bold text-white max-w-full md:w-[672px] text-center md:text-left mx-auto md:mx-0"
          style={{ fontFamily: "'Audiowide', sans-serif" }}
        >
          You can do it by just one click{" "}
          <span className="text-[#34C8FB]">what ever you want</span>
        </h1>

        <div
          className="my-[73px] main relative m-auto max-w-full
            before:content-[''] before:absolute before:left-0 before:-top-[48px] before:w-full before:h-full before:bg-[url('/images/circle.png')] before:bg-no-repeat before:z-[1]
            after:content-[''] after:absolute after:right-0 after:-bottom-[240px] after:w-full after:h-full after:bg-[url('/images/circle.png')] after:bg-no-repeat after:bg-right after:z-[1]"
        >
          <Image
            alt="alt"
            src="/images/img-gpt.png"
            className="m-auto z-2 relative max-w-full h-auto"
            height={551}
            width={792}
          />

          {/* Buttons - Responsive positioning */}
          <div className="absolute top-[14px] left-[25%] sm:left-[30%] md:left-[30%] z-[9]">
            <button className="bg-white text-black border border-[#05BDFD] rounded-[10px] shadow-[0px_0px_12px_0px_#05BDFD] py-1 px-3 text-[18px] sm:text-[20px] md:text-[27px]">
              Chat GPT
            </button>
          </div>

          <div className="absolute bottom-[21%] left-[8%] sm:left-[12%] z-[3]">
            <button className="bg-[#34C8FB] text-white border border-[#05BDFD] rounded-[10px] shadow-[0px_0px_12px_0px_#05BDFD] py-1 px-4 sm:px-6 text-[18px] sm:text-[20px] md:text-[27px]">
              Gemini
            </button>
          </div>

          <div className="absolute right-[10%] sm:right-[18%] top-[25%] z-[2]">
            <button className="bg-[#262626] text-white border border-[#05BDFD] rounded-[10px] shadow-[0px_0px_12px_0px_#05BDFD] py-1 px-4 sm:px-6 text-[18px] sm:text-[20px] md:text-[27px]">
              Meta
            </button>
          </div>

          <div className="absolute right-[8%] sm:right-[13%] bottom-0 z-[2]">
            <button className="bg-white text-black border border-[#05BDFD] rounded-[10px] shadow-[0px_0px_12px_0px_#05BDFD] py-1 px-4 sm:px-6 text-[18px] sm:text-[20px] md:text-[27px]">
              Reka
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatgptSection;
