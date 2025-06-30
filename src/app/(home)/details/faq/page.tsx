"use client";
import React, { useState } from "react";

const faqsData = [
  {
    title: "Do you maintain your apps?",
    paragraph:
      "Yes, we provide ongoing maintenance and updates for all our applications. Our team actively monitors performance, resolves bugs, and rolls out enhancements to ensure optimal functionality and user experience. Customer satisfaction is a top priority, and we take pride in offering reliable long-term support.",
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
      "Yashraa leverages leading large language models such as OpenAI’s GPT, Google’s Gemini , Anthropic's Claude , Deepseek ,  Alibaba’s Qwen and other state-of-the-art AI models. This ensures accurate, contextual, and human-like responses tailored to your content.",
  },
  {
    title: "How do I contact customer support?",
    paragraph:
      "You can reach Yashraa’s support team via email, live chat on our website, or through your client dashboard. We offer 24/7 assistance to ensure your chatbot runs smoothly and your questions are promptly answered.",
  },
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

export default function Page() {
  const [activeItems, setActiveItems] = useState<string[]>([]);

  const handleAccordion = (title: string) => {
    setActiveItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <div
      className="h-full min-h-screen bg-center bg-cover bg-no-repeat flex justify-center items-center py-12 pt-48"
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      <div className="container">
        <h2 className="text-3xl font-bold text-white mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-2">
          {faqsData?.map((item, index: number) => (
            <div
              className="border-b border-white/30 transition-all duration-300 rounded-lg"
              key={index}
            >
              <button
                className="w-full text-left py-4 px-4 flex justify-between items-center font-semibold text-xl text-[#FAFAFA] hover:bg-white/10 transition-colors duration-200 rounded-lg"
                onClick={() => handleAccordion(item.title)}
                aria-expanded={activeItems.includes(item.title)}
                aria-controls={`faq-content-${index}`}
              >
                {item.title}
                <span
                  className={`text-white text-xl font-normal cursor-pointer transition-transform duration-300 ${activeItems.includes(item.title) ? "rotate-180" : ""
                    }`}
                >
                  ˄
                </span>
              </button>

              <div
                id={`faq-content-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeItems.includes(item.title)
                  ? "max-h-96 opacity-100 px-4"
                  : "max-h-0 opacity-0"
                  }`}
              >
                {activeItems.includes(item.title) && (
                  <p className="pb-4 text-base text-[#FAFAFA]">
                    {item.paragraph}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
}
