import Image from "next/image";
import React from "react";

const WhyChooseChatbot = () => {
  return (
    <div id="features" className="bg-white mt-[88px] px-4 lg:px-24 bg-[url('/images/roboot.png')] bg-no-repeat bg-left-bottom">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row  gap-10">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2
            className="text-3xl lg:text-4x text-[40px] font-normal text-black mb-4"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            Why Choose <span className="text-[#34C8FB]  ">ChatBot ai?</span>
          </h2>
          <p className="text-black font-bold text-base leading-relaxed max-w-md mx-auto lg:mx-0 mt-[22px]">
            We pride ourselves on making it easy for individuals and business
            owners around the world to use artificial intelligence to become
            more productive.
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="w-[235px]">
            <div className="flex justify-between items-center">
              <div className="">
                <Image
                  alt="alt"
                  src="/images/chat.png"
                  height={46}
                  width={46}
                />
              </div>
              <div className="text-sm font-light">01</div>
            </div>
            <div>
              <h4 className=" text-black mb-1 text-lg font-bold py-[14px]">
                Chat History
              </h4>
              <p className="text-xs font-light leading-relaxed ">
                Take a look at each and every conversation that’s taken place
                within any of your chatbots.
              </p>
            </div>
          </div>

          <div className="w-[235px] mb-[30px]">
            <div className="flex justify-between items-center">
              <div className="">
                <Image
                  alt="alt"
                  src="/images/bot-icon.png"
                  height={33}
                  width={35}
                />
              </div>
              <div className="text-sm font-light">02</div>
            </div>
            <div>
              <h4 className=" text-black mb-1 text-lg font-bold py-[14px]">
                Bot Personas
              </h4>
              <p className="text-xs font-light leading-relaxed ">
                Change the bot prompt to change the character and purpose of the
                chatbot for your needs.
              </p>
            </div>
          </div>

          <div className="w-[235px] mb-[30px]">
            <div className="flex justify-between items-center">
              <div className="">
                <Image
                  alt="alt"
                  src="/images/ai-icon.png"
                  height={33}
                  width={35}
                />
              </div>
              <div className="text-sm font-light">03</div>
            </div>
            <div>
              <h4 className=" text-black mb-1 text-lg font-bold py-[14px]">
                Choose Your AI
              </h4>
              <p className="text-xs font-light leading-relaxed ">
                Select from Open AI GPTs, Claude 3.5, or Google Gemini language
                models, depending on your requirements.
              </p>
            </div>
          </div>
          <div className="w-[235px] mb-[30px]">
            <div className="flex justify-between items-center">
              <div className="">
                <Image
                  alt="alt"
                  src="/images/import-icon.png"
                  height={33}
                  width={35}
                />
              </div>
              <div className="text-sm font-light">04</div>
            </div>
            <div>
              <h4 className=" text-black mb-1 text-lg font-bold py-[14px]">
                Import Your Data
              </h4>
              <p className="text-xs font-light leading-relaxed ">
                Import PDFs, TXT, DOCX, CSV, XLS files, Google Sheets, Websites,
                and YouTube Videos into your chatbot .
              </p>
            </div>
          </div>

          <div className="w-[235px] mb-[30px]">
            <div className="flex justify-between items-center">
              <div className="">
                <Image
                  alt="alt"
                  src="/images/lock-icon.png"
                  height={33}
                  width={35}
                />
              </div>
              <div className="text-sm font-light">05</div>
            </div>
            <div>
              <h4 className=" text-black mb-1 text-lg font-bold py-[14px]">
                Privacy & Security
              </h4>
              <p className="text-xs font-light leading-relaxed ">
                We use military grade encryption on all uploaded data for your
                security and peace of mind.
              </p>
            </div>
          </div>
          <div className="w-[235px] mb-[30px]">
            <div className="flex justify-between items-center">
              <div className="">
                <Image
                  alt="alt"
                  src="/images/brand-icon.png"
                  height={33}
                  width={35}
                />
              </div>
              <div className="text-sm font-light">06</div>
            </div>
            <div>
              <h4 className=" text-black mb-1 text-lg font-bold py-[14px]">
                Branding
              </h4>
              <p className="text-xs font-light leading-relaxed ">
                Customise your chatbot with your own avatar, text colours and
                chatbot bubble to match your own branding.
              </p>
            </div>
          </div>

          <div className="w-[235px] mb-[30px]">
            <div className="flex justify-between items-center">
              <div className="">
                <Image
                  alt="alt"
                  src="/images/Channel.png"
                  height={33}
                  width={35}
                />
              </div>
              <div className="text-sm font-light">07</div>
            </div>
            <div>
              <h4 className=" text-black mb-1 text-lg font-bold py-[14px]">
                Multi Channel
              </h4>
              <p className="text-xs font-light leading-relaxed ">
                Take a look at each and every conversation that's taken place
                within any of your chatbots.
              </p>
            </div>
          </div>
          <div className="w-[235px] mb-[30px]">
            <div className="flex justify-between items-center">
              <div className="">
                <Image
                  alt="alt"
                  src="/images/access.png"
                  height={33}
                  width={35}
                />
              </div>
              <div className="text-sm font-light">08</div>
            </div>
            <div>
              <h4 className=" text-black mb-1 text-lg font-bold py-[14px]">
                Control Access
              </h4>
              <p className="text-xs font-light leading-relaxed ">
                Choose to share your Chatbot publicly by embedding or keep for
                private use within your FastBots account.
              </p>
            </div>
          </div>
          {/* Add the remaining blocks similarly... */}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseChatbot;
