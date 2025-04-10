import React from 'react'

const ChatLLM = () => {
  return (
    <div className="Chat-LLM mt-[117px]">
        <div className="container">
          <h1
            className="font-normal text-[30px] text-white"
            style={{
              fontFamily: "'Audiowide', sans-serif",
            }}
          >
            Voice Agent
          </h1>
          <img src="/images/heading.png" />
          <div className="flex items-center mt-5 ">
            <div className="chatbox-content w-1/2 text-white">
              <h2
                className="text-3xl font-normal  mb-[22px]"
                style={{
                  fontFamily: "'Audiowide', sans-serif",
                }}
              >
                How <span className="text-[#05BDFD]">AI Voice Agent</span> Work?
              </h2>
              <p className=" font-light text-xl">
                An AI Voice Agent works by using speech recognition to convert
                spoken words into text, natural language processing (NLP) to
                understand the intent, and text-to-speech (TTS) to respond in a
                human-like voice. It processes user input in real-time,
                accessing databases or APIs to provide relevant information or
                take action. Machine learning continuously improves its accuracy
                and response quality based on interactions.
              </p>
            </div>
            <div className="Chat-img w-1/2">
              <img src="/images/laptop.png" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default ChatLLM;
