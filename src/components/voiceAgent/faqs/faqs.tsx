"use client";
import React, { useState } from "react";
import Image from "next/image";

const Faqs = () => {
  const [accordianItems, setAccordianItems] = useState<string[]>([]);
  const faqsData = [
    {
      title: "What is Voice agent?",
      paragraph:
        "Voiceagent is an intuitive AI chatbot builder. It allows you to create a chatbot trained on the content of your webpages, documents, and more. This chatbot can then be integrated into your website to function as a question-answer bot, offering 24/7 multilingual support..",
    },
    {
      title: "How is this more cost-effective for my organisation?",
      paragraph:
        "Voiceagent is an intuitive AI chatbot builder. It allows you to create a chatbot trained on the content of your webpages, documents, and more. This chatbot can then be integrated into your website to function as a question-answer bot, offering 24/7 multilingual support..",
    },
    {
      title: "What is the difference from other AI voice competitors?",
      paragraph:
        "Voiceagent is an intuitive AI chatbot builder. It allows you to create a chatbot trained on the content of your webpages, documents, and more. This chatbot can then be integrated into your website to function as a question-answer bot, offering 24/7 multilingual support.",
    },
    {
      title:
        "I need holistic customization, what types of support does your platform offer?",
      paragraph:
        "Voiceagent is an intuitive AI chatbot builder. It allows you to create a chatbot trained on the content of your webpages, documents, and more. This chatbot can then be integrated into your website to function as a question-answer bot, offering 24/7 multilingual support..",
    },
    {
      title: "Is it difficult to set up?",
      paragraph:
        "Voiceagent is an intuitive AI chatbot builder. It allows you to create a chatbot trained on the content of your webpages, documents, and more. This chatbot can then be integrated into your website to function as a question-answer bot, offering 24/7 multilingual support..",
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
