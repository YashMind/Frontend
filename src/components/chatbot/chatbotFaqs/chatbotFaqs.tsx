"use client";
import React, { useState } from "react";

const ChatbotFaqs = () => {
  const [accordianItems, setAccordianItems] = useState<string[]>([]);
  const faqsData = [
    {
      title: "How secure is my data when using ChatBot?",
      paragraph:
        "At Yashraa, data security is a top priority. All information is encrypted in transit and at rest, and we comply with industry-standard practices to ensure your chatbot and user data remain safe and private at all times.",
    },
    {
      title: "What platforms do you integrate with?",
      paragraph:
        "Yashraa ChatBots integrate seamlessly with a wide range of platforms including websites (via embedded widgets), Slack, Microsoft Teams, WhatsApp, Facebook Messenger, and more. We also offer custom integrations through APIs.",
    },
    {
      title: "What LLM models does ChatBot use?",
      paragraph:
        "Yashraa leverages leading large language models such as OpenAI’s GPT, Google’s PaLM, and other state-of-the-art AI models. This ensures accurate, contextual, and human-like responses tailored to your content.",
    },
    {
      title: "How do I contact customer support?",
      paragraph:
        "You can reach Yashraa’s support team via email, live chat on our website, or through your client dashboard. We offer 24/7 assistance to ensure your chatbot runs smoothly and your questions are promptly answered.",
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
                  <div
                    className="border-b border-white/30 transition-all duration-300"
                    key={index}
                  >
                    <button
                      className="w-full text-left py-3 px-2 flex justify-between items-center font-semibold text-xl text-[#FAFAFA] hover:bg-white/10 transition-colors duration-200 rounded"
                      onClick={() => handleAccordian(item?.title)}
                    >
                      {item?.title}
                      {accordianItems.includes(item?.title) ? (
                        <span className="text-white text-xl font-normal cursor-pointer transition-transform duration-300 rotate-180">
                          ˄
                        </span>
                      ) : (
                        <span className="text-white text-xl cursor-pointer transition-transform duration-200">
                          ˅
                        </span>
                      )}
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        accordianItems.includes(item?.title)
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {accordianItems.includes(item?.title) && (
                        <p className="pb-4 text-base text-[#FAFAFA]">
                          {item?.paragraph}
                        </p>
                      )}
                    </div>
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
