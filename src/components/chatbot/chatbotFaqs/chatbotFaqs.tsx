"use client";
import React, { useState } from "react";

const ChatbotFaqs = () => {
  const [accordianItems, setAccordianItems] = useState<string[]>([]);
  const faqsData = [
    {
      title: "How secure is my data when using ChatBot?",
      paragraph:
        "FastBots is an intuitive AI chatbot builder. It allows you to create a chatbot trained on the content of your webpages, documents, and more. This chatbot can then be integrated into your website to function as a question-answer bot, offering 24/7 multilingual support.",
    },
    {
      title: "What platforms do you integrate with?",
      paragraph:
        "FastBots is an intuitive AI chatbot builder. It allows you to create a chatbot trained on the content of your webpages, documents, and more. This chatbot can then be integrated into your website to function as a question-answer bot",
    },
    {
      title: "What LLMs models does ChatBot use?",
      paragraph:
        "FastBots is an intuitive AI chatbot builder. It allows you to create a chatbot trained on the content of your webpages, documents, and more. ",
    },
    {
      title: "How do I contact customer support?",
      paragraph:
        "FastBots is an intuitive AI chatbot builder. It allows you to create a chatbot trained on the content of your webpages",
    },
  ];

  const handleAccordian = (title: string) => {
    setAccordianItems((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <div>
      <section id="faq">
        <div className="bg-white mpx-6 py-10 ">
          <div className="container">
            <div className="in-h-screen flex flex-col md:flex-row items-center justify-center  ">
              {/* Left side - Robot Image */}
              <div className="w-full md:w-1/2 flex justify-center ">
                <img src="/images/faq.png" />
              </div>

              {/* Right side - FAQ */}
              <div className="w-full md:w-1/2 bg-gradient-to-b from-[#2D2095] to-[#2D2095]  text-white rounded-2xl p-6 md:p-10 space-y-4">
                <h2 className="font-bold mb-4 text-[40px]">
                  Do you have questions?
                </h2>

                {/* FAQ Item */}

                {/* FAQ Collapsed Items */}
                {faqsData?.map((item, index: number) => (
                  <div className="border-b border-white/30" key={index}>
                    <button
                      className="w-full text-left py-3 flex justify-between items-center font-semibold  text-xl text-[#FAFAFA]"
                      onClick={() => handleAccordian(item?.title)}
                    >
                      {item?.title}
                      {accordianItems.includes(item?.title) ? (
                        <span className="text-white text-xl font-normal cursor-pointer">
                          ˄
                        </span>
                      ) : (
                        <span className="text-white text-xl cursor-pointer">
                          ˅
                        </span>
                      )}
                    </button>
                    {accordianItems.includes(item?.title) ? (
                      <p className=" pb-4 text-base text-[#FAFAFA]">
                        {item?.paragraph}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChatbotFaqs;
