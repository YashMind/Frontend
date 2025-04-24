import React from "react";
import ChatbotHeader from "@/components/chatbot/header/chatbotHeader";
import ChatbotFooter from "@/components/chatbot/footer/chatbotFooter";
import Image from "next/image";
const LlmProduct = () => {
  return (
    <div className="bg-gradient-to-b from-[#2B255D] to-[#110FB9]">
      {/* header */}
      <ChatbotHeader />

      {/* banner sec */}
      <div className="intract-banner   w-full  text-center h-screen">
        <div className="container">
          <div>
            <Image
              alt="alt"
              src="/images/banner-bg.png"
              height={828}
              width={1770}
            />
          </div>
          <h1
            className="text-transparent bg-[linear-gradient(90deg,_#271F6A_-3.02%,_#FFFFFF_47.85%,_#261E6C_102.96%)] bg-clip-text text-[36px] md:text-[74px]"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            Revolution the way you Interact with technology
          </h1>

          <p className="[font-family:'Roboto_Flex',sans-serif] font-bold text-white text-sm md:text-base my-[20px] md:my-[41px] w-full md:w-[556px]  md:mx-auto">
            From voice to vision, from touch to thought—explore a new era where
            your interaction with technology feels less like a task, and more
            like a conversation.
          </p>

          <a
            href=""
            className="bg-white text-black text-lg font-semibold rounded-[22px] px-5 py-1"
          >
            Sign In
          </a>
        </div>
      </div>
      {/* Voice Companion */}
      <div className="  text-center m-auto">
        <Image
          alt="alt"
          className="m-auto"
          src="/images/Voice-Companion2.png"
          height={704}
          width={629}
        />
        <h2
          className="text-[28px] md:text-[44px] py-4 text-white w-full md:w-[768px] m-auto mt-[43px] text-center "
          style={{ fontFamily: "'Audiowide', sans-serif" }}
        >
          Why Vocal AI is your Ultimate{" "}
          <span className="text-[#34C8FB]">Voice Companion</span>
        </h2>
      </div>
      {/* task management */}
      <div className="container">
        <div className="flex flex-col md:flex-row gap-[25px] mt-[60px]">
          <div className="w-full md:w-[60%] bg-[#0C0A30] p-6 md:p-[40px] rounded-[16px]">
            <h3 className="text-white text-2xl font-bold">Task Management</h3>
            <p className="text-[#6F6C90] text-[16px] md:text-[17px] py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
              pretium libero. Nullam varius, enim placerat molestie viverra,
              arcu elit euismod mauris, non rutrum massa sapien eget ante.
            </p>
            <div className="flex justify-between">
              <img src="/images/both-circle.png" />
              <img src="/images/effective.png" />
            </div>
          </div>
          <div className="w-full md:w-[40%] bg-[#0C0A30] p-6 md:p-[40px] rounded-[16px]">
            <h3 className="text-white text-2xl font-bold">Instant Response</h3>
            <p className="text-[#6F6C90] text-[16px] md:text-[17px] py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
              pretium libero. Nullam varius, enim placerat molestie viverra,
              arcu elit euismod mauris, non rutrum massa sapien eget ante.
            </p>
            <img className="m-auto" src="/images/instant.png" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-[25px] mt-[25px]">
          <div className="w-full md:w-[40%] bg-[#0C0A30] p-6 md:p-[40px] rounded-[16px]">
            <h3 className="text-white text-2xl font-bold">Instant Response</h3>
            <p className="text-[#6F6C90] text-[16px] md:text-[17px] py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
              pretium libero. Nullam varius, enim placerat molestie viverra,
              arcu elit euismod mauris, non rutrum massa sapien eget ante.
            </p>
            <img className="m-auto" src="/images/instant.png" />
          </div>

          <div className="w-full md:w-[60%] bg-[#0C0A30] p-6 md:p-[40px] rounded-[16px]">
            <h3 className="text-white text-2xl font-bold">Task Management</h3>
            <p className="text-[#6F6C90] text-[16px] md:text-[17px] py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
              pretium libero. Nullam varius, enim placerat molestie viverra,
              arcu elit euismod mauris, non rutrum massa sapien eget ante.
            </p>
            <div className="flex justify-between">
              <img src="/images/both-circle.png" />
              <img src="/images/effective.png" />
            </div>
          </div>
        </div>
      </div>

      {/* How it Works */}
      <div className="container text-center ">
        <h1
          className="text-[40px] font-normal text-white mt-[90px]"
          style={{ fontFamily: "'Audiowide', sans-serif" }}
        >
          How it <span className="text-[#34C8FB]"> Works</span>
        </h1>
        <p className="text-base font-normal text-white w-full sm:w-[556px] m-auto">
          Imagine a world where every device understands you, adapts to you, and
          works with you—effortlessly. That’s the future we’re building.
        </p>

        <div className=" py-20  relative text-white">
          <div className="max-w-6xl mx-auto block md:flex justify-between items-center relative">
            {/* Left Side */}
            <div className="flex flex-col !sm:gap-5  gap-mob">
              {/* Item 1 */}
              <div className="flex items-center gap-4">
                <div className="">
                  <Image
                    alt="alt"
                    src="/images/how-works2.png"
                    height={138}
                    width={138}
                    className="w-[100px] max-lg:w-[120px] lg:w-[138px] h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-base max-lg:text-xl lg:text-2xl font-semibold text-left">
                    Speak Your Command
                  </h3>
                  <p className="text-base font-light text-white text-left">
                    Say what you need
                  </p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex items-center gap-4 mb-5 md:mb-0">
                <div className="">
                  <Image
                    alt="alt"
                    src="/images/seem.png"
                    height={138}
                    width={138}
                    className="w-[100px] max-lg:w-[120px] lg:w-[138px] h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-base max-lg:text-xl lg:text-2xl font-semibold text-left ">
                    Seam Execution
                  </h3>
                  <p className="text-base font-light text-white text-left">
                    Your task are done instantly
                  </p>
                </div>
              </div>
            </div>

            {/* Center Dashed Line */}
            <div className="absolute t transform -translate-x-1/2 -translate-y-1/2  w-[223px] left-[48%] top-[45%] hidden md:block">
              <Image
                alt="alt"
                src="/images/how-works.png"
                height={360}
                width={223}
                className="w-[160px] max-lg:w-[180px] lg:w-[223px] h-auto"
              />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <div className="">
                <Image
                  alt="alt"
                  src="/images/listens.png"
                  height={138}
                  width={138}
                  className="w-[100px] max-lg:w-[120px] lg:w-[138px] h-auto"
                />
              </div>
              <div>
                <h3 className="text-base max-lg:text-xl lg:text-2xl font-semibold text-left">
                  AI listens and understand
                </h3>
                <p className="text-base font-light text-white text-left">
                  Your success succeeded
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 30apps-sec */}
      <div className="container">
        <div className="text-white px-6 md:px-16 py-10 md:py-16 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 overflow-hidden">
          {/* Left: Image Box */}
          <div className="w-full md:w-[40%] flex justify-center">
            <Image
              alt="alt"
              src="/images/ai-app.png"
              height={450}
              width={450}
              className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px] h-auto"
            />
          </div>

          {/* Right: Heading and Icons */}
          <div className="flex flex-col justify-start items-center md:items-start gap-6 w-full md:w-[60%]">
            <h2
              className="text-[32px] sm:text-[36px] md:text-[40px] text-center md:text-left w-full md:w-[526px]"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              Integrate with more than{" "}
              <span className="text-[#34C8FB]">30+ apps</span>
            </h2>

            {/* Icons grid */}
            <div className="mt-4 w-full overflow-hidden">
              {/* Right to Left Scroll Row */}
              <div className="RightToLeft flex whitespace-nowrap w-max">
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    {[...Array(6)].map((_, j) => (
                      <Image
                        key={`rtl-${i}-${j}`}
                        alt="alt"
                        src="/images/slide-img1.png"
                        height={52}
                        width={52}
                        className="mx-2 w-[40px] sm:w-[48px] md:w-[52px] h-auto"
                      />
                    ))}
                  </React.Fragment>
                ))}
              </div>

              {/* Spacer */}
              <div className="h-4" />

              {/* Left to Right Scroll Row */}
              <div className="LeftToRight flex whitespace-nowrap w-max">
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    {[...Array(6)].map((_, j) => (
                      <Image
                        key={`ltr-${i}-${j}`}
                        alt="alt"
                        src="/images/slide-img1.png"
                        height={52}
                        width={52}
                        className="mx-2 w-[40px] sm:w-[48px] md:w-[52px] h-auto"
                      />
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* faq */}
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
            <div className="border-b border-[#888888] pb-4">
              <div className="flex justify-between items-start cursor-pointer">
                <h3 className="text-[14px] md:text-base font-semibold">
                  What is Voice agent?
                </h3>
                <span>
                  <Image
                    alt="alt"
                    src="/images/faq-arrow.png"
                    height={16}
                    width={16}
                  />
                </span>
              </div>
              <p className="text-base font-normal text-white mt-2  md:text-base">
                Voiceagent is an intuitive AI chatbot builder. It allows you to
                create a chatbot trained on the content of your webpages,
                documents, and more. This chatbot can then be integrated into
                your website to function as a question-answer bot, offering 24/7
                multilingual support.
              </p>
            </div>

            {/* Item 2 */}
            <div className="border-b border-[#888888] pb-4">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-[14px] md:text-base font-semibold">
                  How is this more cost-effective for my organisation?
                </h3>
                <span>
                  <Image
                    alt="alt"
                    src="/images/faq-down.png"
                    height={16}
                    width={16}
                  />
                </span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="border-b border-[#888888] pb-4">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-[14px] md:text-base font-semibold">
                  What is the difference from other AI voice competitors?
                </h3>
                <span>
                  <Image
                    alt="alt"
                    src="/images/faq-down.png"
                    height={16}
                    width={16}
                  />
                </span>
              </div>
            </div>

            {/* Item 4 */}
            <div className="border-b border-[#888888] pb-4">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-[14px] md:text-base font-semibold">
                  I need holistic customization, what types of support does your
                  platform offer?
                </h3>
                <span>
                  <Image
                    alt="alt"
                    src="/images/faq-down.png"
                    height={16}
                    width={16}
                  />
                </span>
              </div>
            </div>

            {/* Item 5 */}
            <div className="pb-4">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-[14px] md:text-base font-semibold">
                  Is it difficult to set up?
                </h3>
                <span>
                  <Image
                    alt="alt"
                    src="/images/faq-down.png"
                    height={16}
                    width={16}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sub-footer */}
      <div className="container">
        <div className="flex flex-col md:flex-row center-img md:items-start gap-20 text-white p-6 md:p-10 rounded-xl space-y-6 md:space-y-0 mb-[50px] ">
          {/* Image Section */}
          <div className="relative bg-clr ">
            <Image
              alt="alt"
              className="relative z-2"
              src="/images/person.png"
              height={480}
              width={330}
            />
            <div className="text-right py-[22px] text-lg font-extrabold  relative z-2">
              <h4 className="text-sm font-semibold text-white">Horace Cole</h4>
              <p className="text-sm text-[#808080]">Senior Brand Specialist</p>
            </div>
          </div>

          {/* Quote Section */}
          <div className="bg-[#0B0D2E] p-6 pl-6 md:pl-[90px] relative w-full md:w-[650px] pb-6 md:pb-[110px] bg-bottom">
            {/* Quotation mark */}
            <Image
              alt="alt"
              className="absolute -left-[22px] -top-[50px] z-2 md:-left-[22px] md:-top-[6px] w-[70px] md:w-[90px]"
              src="/images/Quotes.png"
              height={90}
              width={90}
            />

            {/* Quote Text */}
            <h2 className="text-2xl md:text-[48px] font-bold mb-4">
              Et enim aperiam molestiae nesciunt
            </h2>
            <div className="lft-border">
              <p className="text-sm md:text-base font-medium text-white leading-relaxed mb-4">
                Nisi ea sed eos. Et eaque dolor consequatur iste corporis. Et
                minima esse vel harum omnis corporis sint. Assumenda temporibus
                non architecto voluptatum officiis tempora maiores sapiente.
                Enim mollitia voluptate ipsa explicabo dolorem.
              </p>
              <p className="text-sm md:text-base font-medium leading-relaxed mb-4">
                Et vel velit et accusamus et accusamus. Et pariatur id ut qui
                quidem est laboriosam saepe ratione et. Voluptate laudantium
                natus recusandae cupiditate rem velit ut cum ipsa ipsa.
              </p>
              <p className="text-sm md:text-base font-medium">Thanks, guys!</p>
            </div>
            {/* Bottom bar */}
          </div>
        </div>
      </div>
      {/* footer */}
      <ChatbotFooter />
    </div>
  );
};

export default LlmProduct;
