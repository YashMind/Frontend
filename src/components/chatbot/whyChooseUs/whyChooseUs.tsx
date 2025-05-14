import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="py-10 px-4 md:px-10 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1
              className="text-[32px] md:text-[40px] font-normal"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              Why Choose Us?
            </h1>
            <p className="font-bold text-base my-5 md:my-[22px]">
              We pride ourselves on making it easy for individuals and business
              owners around the world to use artificial intelligence to become
              more productive.
            </p>
            <a
              href="/auth/signin"
              className="inline-block bg-[#292362] text-lg font-semibold py-[7px] px-[40px] md:px-[49px] rounded-[22px] text-white"
            >
              Sign In
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/images/chatbot.png"
              alt="Chatbot"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
