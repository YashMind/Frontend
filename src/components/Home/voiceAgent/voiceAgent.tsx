import React from 'react'

const VoiceAgent = () => {
  return (
    <div className="Voice-Agent mt-[117px]">
        <div className="container">
          <h1
            className="font-normal text-[30px] text-white"
            style={{
              fontFamily: "'Audiowide', sans-serif",
            }}
          >
            Chat Bot
          </h1>
          <img src="/images/heading.png" />
          <div className="flex items-center mt-5 ">
            <div className="Chat-img w-[40%]">
              <img src="/images/ai-box.png" />
            </div>
            <div className="chatbox-content w-[80%] text-white">
              <h2
                className="text-3xl font-normal text-right mb-[22px]"
                style={{
                  fontFamily: "'Audiowide', sans-serif",
                }}
              >
                What <span className="text-[#05BDFD]">Chat Bot</span> Can Do?
              </h2>
              <p className="text-right font-light text-xl">
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
  )
}

export default VoiceAgent;
