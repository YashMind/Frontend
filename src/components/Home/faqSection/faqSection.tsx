import React, { useState } from "react";

const FaqSection = () => {
  const [openContent, setOpenContent] = useState(false);
  const [accordianItems, setAccordianItems] = useState<string[]>([]);
    const faqsData = [
      {title:"Do you maintain your apps?", paragraph:"AI has the best record in software maintenance and upgrades. Over and over we get praises and accolades from our customers for taking good care of our apps. AI has the best record in software maintenance and upgrades. Over and over we get praises and accolades from our customers for taking good care of our apps. AI has the best record in software maintenance and upgrades. Over and over we get praises and accolades from our customers for taking good care of our apps."},
      {title:"How does AI Collective get all these AIs?", paragraph:"AI has the best record in software maintenance and upgrades. Over and over we get praises and accolades from our customers for taking good care of our apps. AI has the best record in software maintenance and upgrades. Over and over we get praises and accolades from our customers for taking good care of our apps. AI has the best record in software"},
      {title:"Why is it so affordable?", paragraph:"AI has the best record in software maintenance and upgrades. Over and over we get praises and accolades from our customers for taking good care of our apps. AI has the best record in software maintenance and upgrades. Over and over we get praises and accolades"},
      {title:"Can I get a free trial?", paragraph:"AI has the best record in software maintenance and upgrades. Over and over we get praises and accolades from our customers for taking good care of our apps."},
      {title:"How can I cancel my purchase?", paragraph:"AI has the best record in software maintenance and upgrades."},
    ]
  
    const handleAccordian = (title: string) => {
      setAccordianItems((prev) =>
          prev.includes(title)
            ? prev.filter((t) => t !== title)
            : [...prev, title]
        );
    }
  return (
    <div className="faq mt-[110px]">
      <div className="container mb-[55px] ">
        <div className="mb-[55px]">
          <h1
            className="font-normal text-[30px] text-white"
            style={{
              fontFamily: "'Audiowide', sans-serif",
            }}
          >
            FAQ
          </h1>
          <img className="w-[9%]" src="/images/heading.png" />
        </div>
      </div>
      {/* faq */}
      <div className=" text-white ">
        <div className="relative">
          {/* Background Image Overlay */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-[0.18] z-0 "
            style={{ backgroundImage: "url('/images/frame.png')" }}
          ></div>

          {/* Actual Content on top of overlay */}
          <div className="relative z-10 flex-col md:flex-row gap-10 banner justify-center items-center py-[65px]">
            <div className="container">
              <div className="faq-flex flex justify-center ">
                {/* Left Side: Heading + Bot Image */}
                <div className="w-[30%] text-center md:text-left">
                  <h2
                    className="text-[40px] font-normal text-white leading-[100%]"
                    style={{
                      fontFamily: "'Audiowide', sans-serif",
                    }}
                  >
                    Frequently
                    <br />
                    Asked
                    <br />
                    Question
                  </h2>
                  <img src="/images/robo.png" alt="Bot" className="" />
                </div>

                {/* Right Side: Accordion */}
                <div className="w-[70%] space-y-4">
                  {/* Accordion Item 1 (Open) */}
                  {faqsData?.map((item, index:number) => (
                  <div className={`border  ${accordianItems.includes(item?.title) ?  "border-cyan-400" : "border-[#747474]"} rounded-lg overflow-hidden bg-[#0f003e]`}>
                    <div className={`flex items-center justify-between pl-6 border-cyan-400`}>
                      <div className="flex gap-3 items-center">
                        <span className="text-white font-medium text-2xl">
                          0{index}
                        </span>
                        <h3 className="text-white font-normal text-[22px]">
                          {item?.title}
                        </h3>
                      </div>
                      <button
                        className={`text-white ${accordianItems.includes(item?.title) ? "bg-cyan-400": "bg-[#152329]"} w-[86px] h-[80px] flex items-center justify-center rounded-sm text-3xl`}
                        onClick={() => handleAccordian(item?.title)}
                      >
                        {accordianItems.includes(item?.title) ? "-" : "+"}
                      </button>
                    </div>
                    
                    {accordianItems.includes(item?.title) ? <div className="px-6 py-4 text-sm leading-relaxed text-gray-300">
                        {item?.paragraph}
                      </div> : null }
                    
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
    </div>
  );
};

export default FaqSection;
