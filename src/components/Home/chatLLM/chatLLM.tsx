import React from "react";

const ChatLLM = () => {
  return (
    <div className="Chat-LLM mt-[80px] md:mt-[117px]">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h1
          className="font-normal text-[24px] md:text-[30px] text-white text-center md:text-left"
          style={{ fontFamily: "'Audiowide', sans-serif" }}
        >
          Voice Agent
        </h1>
        <img
          src="/images/heading.png"
          alt="Heading"
          className="mx-auto md:mx-0 mt-2"
        />

        {/* Content */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 mt-6 md:mt-10">
          {/* Left Content */}
          <div className="chatbox-content w-full md:w-1/2 text-white text-center md:text-left">
            <h2
              className="text-2xl md:text-3xl font-normal mb-4 md:mb-[22px]"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              How <span className="text-[#05BDFD]">AI Voice Agent</span> Work?
            </h2>
            <p className="font-light text-base md:text-xl leading-relaxed">
              An AI Voice Agent works by using speech recognition to convert
              spoken words into text, natural language processing (NLP) to
              understand the intent, and text-to-speech (TTS) to respond in a
              human-like voice. It processes user input in real-time, accessing
              databases or APIs to provide relevant information or take action.
              Machine learning continuously improves its accuracy and response
              quality based on interactions.
            </p>
          </div>

          {/* Right Image */}
          <div className="Chat-img w-full md:w-1/2">
            <img
              src="/images/laptop.png"
              alt="Laptop"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLLM;
