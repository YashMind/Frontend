import Link from 'next/link'
import React from 'react'

const ChatbotBanner = () => {
  return (
    <div className="chatbot-banner bg-gradient-to-t from-[#2B255C] via-[#1300AF] to-[#0083FF] mt-[162px] pt-[155px] h-screen">
        <div className="container">
          <div className="flex">
            <div className="">
              <h1
                className="text-[74px] leading-[100%] py-4 text-white"
                style={{ fontFamily: "'Audiowide', sans-serif" }}
              >
                Custom AI Chatbots
              </h1>
              <p className="font-bold text-white text-base my-[22px]">
                Innovative AI solutions designed to simplify and accelerate your
                workflow.
              </p>
              <Link
                href="/signin"
                className="bg-white text-lg font-semibold py-[7px] px-[49px] rounded-[22px] "
              >
                Sign In
              </Link>
            </div>
            <div className="">
              <img src="/images/slide-img.png" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default ChatbotBanner
