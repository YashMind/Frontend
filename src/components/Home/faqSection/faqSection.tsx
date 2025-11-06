"use client";
import React, { useState } from "react";

const FaqSection = () => {
  const [accordianItems, setAccordianItems] = useState<string[]>([]);
  const faqsData = [
    {
      title: "How does Yashraa's wallet credit system work?",
      paragraph:
        "Yashraa's wallet credit system operates on a simple conversion: 1 credit = ₹1 for Indian users. For example, in the ₹500 Basic Plan, you receive 500 credits; in the ₹2000 Pro Plan, you receive 2000 credits, and similarly for other plans. For overseas clients (using USD pricing), 1 credit equals 1 cent (USD 0.01). You can also add additional credits as needed during an active plan.",
    },
    {
      title: "How does AI Collective get all these AIs?",
      paragraph:
        "AI Collective partners with leading AI providers and platforms to bring together a wide range of AI tools in one place. We continuously research, evaluate, and integrate the most effective solutions to ensure our users have access to powerful and up-to-date AI capabilities.",
    },
    {
      title: "Why is it so affordable?",
      paragraph:
        "We've designed our pricing to be accessible while maintaining high-quality standards. By leveraging scalable infrastructure, automation, and strong partnerships, we're able to reduce costs and pass those savings on to our customers without compromising value.",
    },
    {
      title: "Can I get a free trial?",
      paragraph:
        "Yes! We offer a free trial so you can explore the platform and experience the features firsthand before making a commitment. It’s the best way to see if our tools are the right fit for your needs.",
    },
    {
      title: "How can I cancel my purchase?",
      paragraph:
        "You can cancel your subscription or purchase at any time through your account settings. If you need assistance, our support team is always available to help with the process and ensure a smooth experience.",
    },
  ];

  const handleAccordian = (title: string) => {
    setAccordianItems((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };
  return (
    <div className="faq mt-[110px]">
      <div className="container mb-[55px]">
        <div className="mb-[55px] text-center md:text-left">
          <h1
            className="font-normal text-[30px] text-white"
            style={{
              fontFamily: "'Audiowide', sans-serif",
            }}
          >
            FAQ
          </h1>
          <img
            className="w-[60px] md:w-[9%] mx-auto md:mx-0"
            src="/images/heading.png"
          />
        </div>
      </div>

      {/* faq content */}
      <div className="text-white">
        <div className="relative">
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-[0.18] z-0"
            style={{ backgroundImage: "url('/images/frame.png')" }}
          ></div>

          {/* Content Section */}
          <div className="relative z-1 flex flex-col md:flex-row gap-10 justify-center items-center  px-4 md:px-0">
            <div className="container">
              <div className="faq-flex flex flex-col md:flex-row justify-center gap-10 md:gap-20 items-start">
                {/* Left Side */}
                <div className="w-full md:w-[30%] text-center md:text-left flex flex-col items-center md:items-start">
                  <h2
                    className="text-[30px] md:text-[40px] font-normal text-white leading-tight md:leading-[100%]"
                    style={{
                      fontFamily: "'Audiowide', sans-serif",
                    }}
                  >
                    Frequently Asked Question
                  </h2>

                  <img src="/images/ai-generated-img.png" className="mt-20 hidden md:block" />
                </div>

                {/* Right Side */}
                <div className="w-full md:w-[70%] space-y-4">
                  {faqsData?.map((item, index) => (
                    <div
                      key={index}
                      className={`border ${accordianItems.includes(item?.title)
                        ? "border-cyan-400"
                        : "border-[#747474]"
                        } rounded-lg overflow-hidden bg-[#0f003e]`}
                    >
                      <div className="flex items-center justify-between pl-6 pr-4 py-4">
                        <div className="flex gap-3 items-center">
                          <span className="text-white font-medium text-xl md:text-2xl">
                            0{index + 1}
                          </span>
                          <h3 className="text-white font-normal text-[18px] md:text-[22px]">
                            {item?.title}
                          </h3>
                        </div>
                        <button
                          className={`text-white cursor-pointer ${accordianItems.includes(item?.title)
                            ? "bg-cyan-400"
                            : "bg-[#152329]"
                            } w-[60px] md:w-[86px] h-[60px] md:h-[80px] flex items-center justify-center rounded-sm text-2xl md:text-3xl`}
                          onClick={() => handleAccordian(item?.title)}
                        >
                          {accordianItems.includes(item?.title) ? "-" : "+"}
                        </button>
                      </div>

                      {accordianItems.includes(item?.title) && (
                        <div className="px-6 py-4 text-sm leading-relaxed text-gray-300">
                          {item?.paragraph}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
