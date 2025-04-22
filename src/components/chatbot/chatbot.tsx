import React from "react";
import ChatbotHeader from "@/components/chatbot/header/chatbotHeader";
import ChatbotFooter from "@/components/chatbot/footer/chatbotFooter";
import ChatbotBanner from "@/components/chatbot/banner/chatbotBanner";
import WhyChooseUs from "@/components/chatbot/whyChooseUs/whyChooseUs";
import OurChatbots from "@/components/chatbot/ourChatbots/ourChatbots";
import OurPlans from "@/components/chatbot/ourPlans/ourPlans";
import ChatbotFaqs from "@/components/chatbot/chatbotFaqs/chatbotFaqs";
import ClientSays from "@/components/chatbot/clientSays/clientSays";
import Image from "next/image";

const Chatbot = () => {
  return (
    <div className="bg-white">
      {/* header */}
      <ChatbotHeader fix={false} addBgColor={false} />
      <nav className="bg-white">
        <ul className="flex justify-center gap-12 py-4 text-black font-medium">
          <li>
            <a href="#features" className="hover:text-[#2C1F94] transition">
              Feature
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-[#2C1F94] transition">
              Pricing
            </a>
          </li>
          <li>
            <a href="#reviews" className="hover:text-[#2C1F94] transition">
              Reviews
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-[#2C1F94] transition">
              FAQs
            </a>
          </li>
        </ul>
      </nav>

      {/* banner */}
      <ChatbotBanner />

      {/* Why Choose Us? */}
      <WhyChooseUs />

      {/* our chatbots */}
      <OurChatbots />
      {/* 1 why choose */}
      <div>
        <div className="bg-white mt-[88px] px-4 lg:px-24 bg-[url('/images/roboot.png')] bg-no-repeat bg-left-bottom">
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
                We pride ourselves on making it easy for individuals and
                business owners around the world to use artificial intelligence
                to become more productive.
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
                    Take a look at each and every conversation that’s taken
                    place within any of your chatbots.
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
                    Change the bot prompt to change the character and purpose of
                    the chatbot for your needs.
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
                    Select from Open AI GPTs, Claude 3.5, or Google Gemini
                    language models, depending on your requirements.
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
                    Import PDFs, TXT, DOCX, CSV, XLS files, Google Sheets,
                    Websites, and YouTube Videos into your chatbot .
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
                    We use military grade encryption on all uploaded data for
                    your security and peace of mind.
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
                    Customise your chatbot with your own avatar, text colours
                    and chatbot bubble to match your own branding.
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
                    Take a look at each and every conversation that's taken
                    place within any of your chatbots.
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
                    Choose to share your Chatbot publicly by embedding or keep
                    for private use within your FastBots account.
                  </p>
                </div>
              </div>
              {/* Add the remaining blocks similarly... */}
            </div>
          </div>
        </div>
      </div>
      {/* 2 custom gpt */}
      <div>
        <div className="bg-[#2C1F94] text-white py-[42px]">
          <div className="container  flex justify-between items-center ">
            {/* Left Section */}
            <div className="lg:w-2/3 space-y-10 ">
              {/* Step 1 */}
              <div className="flex items-start gap-10">
                <div className="flex-shrink-0">
                  <Image
                    alt="alt"
                    src="/images/laptop2.png"
                    height={172}
                    width={144}
                  />
                </div>
                <div className="w-[247]">
                  <div className="flex items-center space-x-3 ">
                    <span className="bg-white text-black  w-[56px] h-[56px] rounded-full flex items-center justify-center text-[22px] font-bold">
                      1
                    </span>
                    <h3 className="text-lg font-bold">Import Data</h3>
                  </div>
                  <p className="text-xs font-light mt-[20px]">
                    Add any Website, DOCX, TXT, PDF, CSV files, or even YouTube
                    videos securely into your chatbot in minutes.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-10 my-[76px]">
                <div className="w-[247]">
                  <div className="flex items-center space-x-3 ">
                    <span className="bg-white text-black  w-[56px] h-[56px] rounded-full flex items-center justify-center text-[22px] font-bold">
                      2
                    </span>
                    <h3 className="text-lg font-bold">Customise Bot </h3>
                  </div>
                  <p className="text-xs font-light mt-[20px]">
                    Choose your welcome message, chat icon and colour scheme to
                    match your brand and needs.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Image
                    alt="alt"
                    src="/images/emp.png"
                    height={172}
                    width={144}
                  />
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-10">
                <div className="flex-shrink-0">
                  <Image
                    alt="alt"
                    src="/images/laptop2.png"
                    height={172}
                    width={144}
                  />
                </div>
                <div className="w-[247]">
                  <div className="flex items-center space-x-3 ">
                    <span className="bg-white text-black w-[56px] h-[56px] rounded-full flex items-center justify-center text-[22px] font-bold">
                      3
                    </span>
                    <h3 className="text-lg font-bold">Start Using</h3>
                  </div>
                  <p className="text-xs font-light mt-[20px]">
                    Simply grab the link to your custom chatbot or embed into a
                    Website of your choice.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/3 text-center mt-12 lg:mt-0">
              <h2
                className=" text-[40px] font-normal leading-tight"
                style={{ fontFamily: "'Audiowide', sans-serif" }}
              >
                3 steps to <br />
                your custom <br />
                <span className="text-[#34C8FB]">ChatGPT agent</span>
              </h2>
              <p className="text-base  font-bold mt-[22px]">
                Gain a new employee who helps 24/7/365 answer any questions
                about your business or chosen data
              </p>
              <div className="text-right">
                <button className="bg-white text-[#363636] font-semibold px-6 py-2 rounded-[22px] mt-[22px]">
                  Try Now
                </button>
              </div>
              <div className="mt-8">
                <Image
                  alt="alt"
                  src="/images/robot-small.png"
                  height={269}
                  width={286}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 add your chatbot */}
      <div>
        <div className="bg-white py-16 px-4 lg:px-24">
          <div className="container">
            <div className="  grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left Text */}
              <div>
                <h2
                  className="text-[40px] font-normal  text-black leading-snug "
                  style={{ fontFamily: "'Audiowide', sans-serif" }}
                >
                  Add Your Chatbot <br />
                  To <span className="text-[#34C8FB]">Any Website</span>
                </h2>
                <p className="text-base text-[#686868] mt-4 font-bold w-[439px]">
                  Install our Chatbots on any Website platform by adding one
                  line of code
                </p>
              </div>

              {/* Right Platforms */}
              <div className="grid grid-cols-2 gap-6">
                {/* Wordpress */}
                <div className="border border-[#2D2095] rounded-full  px-2 flex  items-center shadow-sm relative justify-center pt-[33px] pb-[18] mb-[18px]">
                  <Image
                    alt="alt"
                    className="absolute top-[-33px] left-1/2 transform -translate-x-1/2 -translate-y-1/"
                    src="/images/website.png"
                    height={58}
                    width={58}
                  />

                  <p className="text-lg font-bold text-black">Wordpress</p>
                </div>

                {/* Joomla */}
                <div className="border border-[#2D2095] rounded-full  px-2 flex  items-center shadow-sm relative justify-center pt-[33px] pb-[18] mb-[18px]">
                  <Image
                    alt="alt"
                    className="absolute top-[-33px] left-1/2 transform -translate-x-1/2 -translate-y-1/"
                    src="/images/website2.png"
                    height={58}
                    width={58}
                  />

                  <p className="text-lg font-bold text-black">Joomla</p>
                </div>

                {/* Shopify */}
                <div className="border border-[#2D2095] rounded-full  px-2 flex  items-center shadow-sm relative justify-center pt-[33px] pb-[18]">
                  <Image
                    alt="alt"
                    className="absolute top-[-33px] left-1/2 transform -translate-x-1/2 -translate-y-1/"
                    src="/images/website1.png"
                    height={58}
                    width={58}
                  />

                  <p className="text-lg font-bold text-black">Shopify</p>
                </div>

                {/* GoDaddy */}
                <div className="border border-[#2D2095] rounded-full  px-2 flex  items-center shadow-sm relative justify-center pt-[33px] pb-[18]">
                  <Image
                    alt="alt"
                    className="absolute top-[-33px] left-1/2 transform -translate-x-1/2 -translate-y-1/"
                    src="/images/website4.png"
                    height={58}
                    width={58}
                  />

                  <p className="text-lg font-bold text-black">GoDaddy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 tern conversation */}
      <div>
        <div className="bg-[#2C1F94] py-20  lg:px-24 text-white mb-[78px]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Column Features */}
            <div className="flex flex-col gap-16">
              <div>
                <div className="mb-2">
                  <Image
                    alt="alt"
                    src="/images/Frame-icon.png"
                    height={29}
                    width={29}
                  />
                  <h3 className="font-bold text-lg">
                    Turn Conversations into Actions with AI Agents
                  </h3>
                </div>
                <p className="text-xs text-white font-light mb-4 ">
                  Enhance your chatbot’s capabilities by connecting it to Zapier
                  & AI actions.
                </p>
                <button className="bg-[#0073AA] text-white text-xs px-6 py-2 rounded-[22px] font-bold">
                  Try Now
                </button>
              </div>

              <div>
                <div className=" mb-2">
                  <Image
                    alt="alt"
                    src="/images/Frame-icon.png"
                    height={29}
                    width={29}
                  />
                  <h3 className="font-bold text-lg">
                    Automated Translations for Global Engagement
                  </h3>
                </div>
                <p className="text-xs text-white font-light mb-4">
                  If your chatbot serves users in worldwide, language barriers
                  could make communication challenging.
                </p>
                <button className="bg-[#0073AA] text-white text-xs px-6 py-2 rounded-[22px] font-bold">
                  Try Now
                </button>
              </div>
            </div>

            {/* Center Image */}
            <div className="flex justify-center">
              <Image
                alt="alt"
                src="/images/laptop-screen.png"
                height={384}
                width={483}
              />
            </div>

            {/* Right Column Features */}
            <div className="flex flex-col gap-16">
              <div>
                <div className=" mb-2">
                  <Image
                    alt="alt"
                    src="/images/Frame-icon.png"
                    height={29}
                    width={29}
                  />
                  <h3 className="font-bold text-lg">
                    Turn Conversations into Leads Automatically
                  </h3>
                </div>
                <p className="text-xs text-white font-light mb-4">
                  With Fastdata, lead collection is effortless by allowing your
                  chatbot to gather contact details directly from users during
                  conversations.
                </p>
                <button className="bg-[#0073AA] text-white text-xs px-6 py-2 rounded-[22px] font-bold">
                  Try Now
                </button>
              </div>

              <div>
                <div className=" mb-2">
                  <Image
                    alt="alt"
                    src="/images/Frame-icon.png"
                    height={29}
                    width={29}
                  />
                  <h3 className="font-bold text-lg">
                    Keep Your Up-to-Date With Automated Retraining
                  </h3>
                </div>
                <p className="text-xs text-white font-light mb-4">
                  Keeping your chatbot up-to-date is crucial when managing a
                  website that frequently changes content or receives updates.
                </p>
                <button className="bg-[#0073AA] text-white text-xs px-6 py-2 rounded-[22px] font-bold">
                  Try Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* basic price */}
      <OurPlans />

      {/* what our client says */}
      <ClientSays />
      {/* faq */}
      <ChatbotFaqs />

      {/* footer */}
      <ChatbotFooter />
    </div>
  );
};

export default Chatbot;
