import React, { useState } from "react";

const FaqSection = () => {
  const [openContent, setOpenContent] = useState(false);
  const [accordianItems, setAccordianItems] = useState<string[]>([]);
  const faqsData = [
    {
      title: "Do you maintain your apps?",
      paragraph:
        "AI has the best record in software maintenance and upgrades. Over and over we get praises and accolades from our customers for taking good care of our apps. AI has the best record in software maintenance and upgrades. Over and over we get praises and accolades from our customers for taking good care of our apps. AI has the best record in software maintenance and upgrades. Over and over we get praises and accolades from our customers for taking good care of our apps.",
    },
    {
      title: "How does AI Collective get all these AIs?",
      paragraph:
        "AI has the best record in software maintenance and upgrades. Over and over we get praises and accolades from our customers for taking good care of our apps. AI has the best record in software maintenance and upgrades. Over and over we get praises and accolades from our customers for taking good care of our apps. AI has the best record in software",
    },
    {
      title: "Why is it so affordable?",
      paragraph:
        "AI has the best record in software maintenance and upgrades. Over and over we get praises and accolades from our customers for taking good care of our apps. AI has the best record in software maintenance and upgrades. Over and over we get praises and accolades",
    },
    {
      title: "Can I get a free trial?",
      paragraph:
        "AI has the best record in software maintenance and upgrades. Over and over we get praises and accolades from our customers for taking good care of our apps.",
    },
    {
      title: "How can I cancel my purchase?",
      paragraph: "AI has the best record in software maintenance and upgrades.",
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
          <div className="relative z-10 flex flex-col md:flex-row gap-10 justify-center items-center py-[65px] px-4 md:px-0">
            <div className="container">
              <div className="faq-flex flex flex-col md:flex-row justify-center gap-10 md:gap-20 items-start">
                {/* Left Side */}
                <div className="w-full md:w-[30%] text-center md:text-left flex flex-col items-center md:items-start">
                  <h2
                    className="text-[30px] md:text-[40px] font-normal text-white"
                    style={{
                      fontFamily: "'Audiowide', sans-serif",
                    }}
                  >
                    Frequently Asked Question
                  </h2>
                  <img
                    src="/images/robo.png"
                    alt="Bot"
                    className="mt-6 w-[100px] md:w-auto"
                  />
                </div>

                {/* Right Side */}
                <div className="w-full md:w-[70%] space-y-4">
                  {faqsData?.map((item, index) => (
                    <div
                      key={index}
                      className={`border ${
                        accordianItems.includes(item?.title)
                          ? "border-cyan-400"
                          : "border-[#747474]"
                      } rounded-lg overflow-hidden bg-[#0f003e]`}
                    >
                      <div className="flex items-center justify-between pl-6 pr-4 pb-4 pt-[16]">
                        <div className="flex gap-3 items-center">
                          <span className="text-white font-medium text-xl md:text-2xl">
                            0{index}
                          </span>
                          <h3 className="text-white font-normal text-[18px] md:text-[20px]">
                            {item?.title}
                          </h3>
                        </div>
                        <button
                          className={`text-white ${
                            accordianItems.includes(item?.title)
                              ? "bg-cyan-400"
                              : "bg-[#152329]"
                          } w-[60px] md:w-[86px] h-[60px] md:h-[80px] flex items-center justify-center rounded-sm text-2xl md:text-3xl`}
                          onClick={() => handleAccordian(item?.title)}
                        >
                          {accordianItems.includes(item?.title) ? "-" : "+"}
                        </button>
                      </div>

                      {accordianItems.includes(item?.title) && (
                        <div className="px-6 py-4 mb-[16px]  text-base leading-relaxed text-white">
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
