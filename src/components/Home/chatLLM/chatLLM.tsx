import React from "react";

const ChatLLM = () => {
  return (
    <div className="Voice-Agent mt-[80px] md:mt-[117px]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1
          className="font-normal text-[24px] md:text-[30px] text-white text-center md:text-left"
          style={{ fontFamily: "'Audiowide', sans-serif" }}
        >
          Chat LLM
        </h1>
        <img
          src="/images/heading.png"
          alt="Heading"
          className="mx-auto md:mx-0 mt-2"
        />

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center  gap-6 mt-6 md:mt-10">
          {/* Image */}
          <div className="Chat-img w-full md:w-[40%]">
            <img
              src="/images/ai-box.png"
              alt="AI Box"
              className="w-full h-auto"
            />
          </div>

          {/* Text Content */}
          <div className="chatbox-content w-full md:w-[50%] pl-8 text-white text-center md:text-left">
            <h2
              className="text-2xl md:text-3xl font-normal mb-4 md:mb-[22px]"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              What You Can Do with <span className="text-[#05BDFD]">Chat LLM</span> ?
            </h2>
            <p className="font-light text-base md:text-xl leading-relaxed">
              Harness multiple leading Language Models in one platform. Seamlessly compare responses from ChatGPT, Gemini, Deepseek, Claude, Qwen, LLaMA, Mistral Large and more.
            </p><p className="font-light text-base md:text-xl leading-relaxed">
              Evaluate accuracy, tone, and relevance — empowering your teams to select the right model for every task or project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLLM;
