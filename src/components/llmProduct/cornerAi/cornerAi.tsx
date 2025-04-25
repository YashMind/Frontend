import Image from 'next/image'
import React from 'react'

const CornerAi = () => {
  return (
<div className="bg-white py-16 px-4 md:px-20 text-center my-[70px] space-mob ">
        <div className="container">
          {/* Title */}
          <h2 className="text-3xl md:text-5xl  mb-12 [font-family:'Audiowide',sans-serif] w-full text-left lg:w-[603px]">
            AI Collective Covers Every{" "}
            <span className="text-[#271F6A]">Corner of AI.</span>
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto my-[68px]">
            {[
              {
                title: "Chat GPT",
                desc: "Fast and high-quality AI. Great for content generation or for high quality research.",
              },
              {
                title: "GPT 01",
                desc: "AI reasoning model designed to solve hard problems across domains.",
              },
              {
                title: "GPT 01",
                desc: "AI reasoning model designed to solve hard problems across domains.",
              },
              {
                title: "Chat GPT",
                desc: "Fast and high-quality AI. Great for content generation or for high quality research.",
              },
              {
                title: "GPT 01",
                desc: "AI reasoning model designed to solve hard problems across domains.",
              },
              {
                title: "GPT 01",
                desc: "AI reasoning model designed to solve hard problems across domains.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-[#B6B6B6] rounded-[12px] px-6 pt-10 pb-6 relative"
              >
                {/* Icon */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-[48px] h-[48px] bg-white border border-[#B6B6B6] rounded-full flex items-center justify-center">
                  <Image
                    alt="alt"
                    src="/images/ai.png"
                    height={23}
                    width={53}
                  />
                </div>
                {/* Title */}
                <h3 className="font-semibold text-lg md:text-xl mb-2">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-sm md:text-base text-[#4B4B4B] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="bg-[#271F6A] text-white px-8 py-3 rounded-full font-semibold">
            Show More
          </button>
        </div>
      </div>
  )
}

export default CornerAi
