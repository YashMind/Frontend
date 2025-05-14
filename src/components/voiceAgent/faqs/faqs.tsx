"use client";
import React, { useState } from "react";
import Image from "next/image";

const Faqs = () => {
  const [accordianItems, setAccordianItems] = useState<string[]>([]);
  const faqsData = [
    {
      title: "What is VoiceAgent?",
      paragraph:
        "VoiceAgent by Yashraa is an AI-powered conversational assistant that uses natural language to interact with users via voice. It can be trained on your business content—like websites, documents, or FAQs—and deployed to offer 24/7 multilingual support and task automation.",
    },
    {
      title: "How is this more cost-effective for my organization?",
      paragraph:
        "Yashraa’s VoiceAgent reduces the need for large support teams by handling repetitive inquiries, booking, and updates autonomously. This improves response time, lowers operational costs, and increases customer satisfaction—all while scaling effortlessly.",
    },
    {
      title: "What is the difference from other AI voice competitors?",
      paragraph:
        "Unlike generic voice tools, Yashraa’s VoiceAgent is tailored to your brand and data. It offers deeper customization, better accuracy, multilingual capabilities, and integrates with your workflows—delivering not just answers, but smart actions.",
    },
    {
      title:
        "I need holistic customization, what types of support does your platform offer?",
      paragraph:
        "Yashraa offers full customization—from voice tone and behavior to integrations with your internal tools (CRM, ticketing, analytics, etc.). Our team also provides onboarding assistance, fine-tuning, and ongoing support to align the AI agent with your business goals.",
    },
    {
      title: "Is it difficult to set up?",
      paragraph:
        "Not at all. Yashraa’s platform is user-friendly with a guided setup process. You can train the VoiceAgent with your content in just a few clicks, and our team is available to help with any technical configurations or integration needs.",
    },
  ];

  const handleAccordian = (title: string) => {
    setAccordianItems((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row  text-white px-6 md:px-20 py-12 gap-12 md:gap-24">
        {/* Left side heading */}
        <div className="w-full md:w-1/3 flex items-start md:items-center">
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            Do you have <br />
            <span className="text-cyan-400">questions?</span>
          </h2>
        </div>

        {/* Right side FAQ accordion */}
        <div className="w-full md:w-2/3 space-y-6">
          {/* Item 1 - Open */}
          {faqsData?.map((item, index: number) => (
            <div className="border-b border-[#888888] pb-4" key={index}>
              <div className="flex justify-between items-start cursor-pointer">
                <h3 className="text-[14px] md:text-base font-semibold">
                  {item?.title}
                </h3>
                <span onClick={() => handleAccordian(item?.title)}>
                  {accordianItems.includes(item?.title) ? (
                    <Image
                      alt="alt"
                      src="/images/faq-arrow.png"
                      height={16}
                      width={16}
                    />
                  ) : (
                    <Image
                      alt="alt"
                      src="/images/faq-down.png"
                      height={16}
                      width={16}
                    />
                  )}
                </span>
              </div>
              {accordianItems.includes(item?.title) ? (
                <p className="text-base font-normal text-white mt-2  md:text-base">
                  {item?.paragraph}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
