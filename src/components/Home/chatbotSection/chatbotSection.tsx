import React from "react";

const ChatbotSection = () => {
  return (
    <div className="Chat-Bot mt-[80px] md:mt-[144px]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1
          className="font-normal text-[24px] md:text-[30px] text-white text-center md:text-left"
          style={{
            fontFamily: "'Audiowide', sans-serif",
          }}
        >
          Chat Bot
        </h1>
        <img
          src="/images/heading.png"
          alt="Heading"
          className="mx-auto md:mx-0 mt-2"
        />

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row items-center gap-6 mt-6 md:mt-10">
          {/* Left Image */}
          <div className="Chat-img w-full md:w-1/2">
            <img
              src="/images/chat-box.png"
              alt="Chat Box"
              className="w-full h-auto"
            />
          </div>

          {/* Right Content */}
          <div className="chatbox-content w-full md:w-1/2 text-white text-center md:text-right">
            <h2
              className="text-2xl md:text-3xl font-normal mb-4 md:mb-[22px]"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              What <span className="text-[#05BDFD]">Chat Bot</span> Can Do?
            </h2>
            <p className="font-light text-base md:text-xl leading-relaxed">
              Chatbots can be rule-based, where they follow predefined scripts
              and decision trees, or they can be powered by artificial
              intelligence (AI) and natural language processing (NLP) to
              understand and respond to user inputs more dynamically. The
              sophistication of a chatbot's capabilities can vary widely
              depending on its design and the technology behind it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotSection;
