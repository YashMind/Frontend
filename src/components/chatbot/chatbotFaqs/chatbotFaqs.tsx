"use client";
import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const ChatbotFaqs = () => {
  const [accordianItems, setAccordianItems] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);
  const faqsData = [
    {
      title: "What is YASHRAA’s AI Chatbot?",
      paragraph:
        "YASHRAA’s AI Chatbot is a customizable, intelligent virtual assistant that can engage with customers, answer questions, automate conversations, and provide support — powered by top-performing AI models.",
    },
    {
      title: "Do I need to know coding to use YASHRAA’s Chatbot?",
      paragraph:
        "No coding required! Our platform is designed for anyone — just sign up, import your data, customize your bot, and launch it in minutes.",
    },
    {
      title: "What AI models does YASHRAA support?",
      paragraph:
        "You can choose from multiple top AI models, including ChatGPT, Gemini, Deepseek, Claude, Qwen, LLaMA, Mistral Large, and more — all available through a single, flexible platform.",
    },
    {
      title: "Can I train the chatbot with my company’s data?",
      paragraph:
        "Yes! You can easily upload documents (full website, single webpage, PDF, DOCX, CSV), website URLs, and more to train your bot with your own knowledge base.",
    },
    {
      title: "Can I customize the chatbot’s personality?",
      paragraph:
        "Absolutely — you can define the bot’s tone, style, and persona to match your brand voice and customer expectations.",
    },
    {
      title: "Is my data safe on YASHRAA?",
      paragraph:
        "Yes. YASHRAA follows strict privacy and security standards, with full GDPR compliance and enterprise-grade encryption.",
    },
    {
      title: "Can I review the chat history?",
      paragraph:
        "Yes, you’ll have full access to chat histories so you can monitor performance, gain insights, and improve user experience.",
    },
    {
      title: "How fast can I launch my chatbot?",
      paragraph:
        "Most users launch their first bot within minutes — our simple onboarding and ready-to-use templates make it easy to get started quickly.",
    },
    {
      title: "What industries can use YASHRAA’s Chatbot?",
      paragraph:
        "Our chatbot is flexible for any industry — from ecommerce, finance, and healthcare, to education, SaaS, real estate, travel, and more.",
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
            <div className="in-h-screen flex flex-col md:flex-row items-center justify-center">
              {/* Left side - Robot Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img src="/images/faq.png" />
              </div>

              {/* Right side - FAQ */}
              <div className="w-full md:w-1/2 bg-gradient-to-b from-[#2D2095] to-[#2D2095] text-white rounded-2xl p-6 md:p-10 space-y-4">
                <h2 className="font-bold mb-4 text-[40px]">
                  Do you have questions?
                </h2>

                {/* FAQ Items - Show first 5 by default */}
                {faqsData?.slice(0, showAll ? faqsData.length : 5).map((item, index: number) => (
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
                          <BiChevronUp />
                        </span>
                      ) : (
                        <span className="text-white text-xl cursor-pointer transition-transform duration-200">
                          <BiChevronDown />
                        </span>
                      )}
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${accordianItems.includes(item?.title)
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

                {/* Show More/Less button if there are more than 5 FAQs */}
                {faqsData?.length > 5 && (
                  <button
                    className="mt-4 text-gray-200 font-extralight text-sm hover:underline focus:outline-none"
                    onClick={() => setShowAll(!showAll)}
                  >
                    {showAll ? 'Show Less' : 'Show More'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChatbotFaqs;
