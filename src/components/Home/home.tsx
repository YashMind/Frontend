import React from "react";

const Home = () => {
  return (
    <div>
      <nav className="  fixed w-full left-0 top-0 z-[9]   ">
        <div className="container">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-[31px]">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            /> */}
              <span className="self-center text-4xl font-semibold whitespace-nowrap  text-white">
                LOGO
              </span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="text-white  f  text-lg px-4 py-2 text-center "
              >
                Sign in
              </button>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex gap-6  py-2 rounded-[43px] backdrop-blur-md  text-white bg-[#FFFFFF45]">
                <li>
                  <a
                    href="#"
                    className="text-lg font-normal py-2 bg-white text-black rounded-[27px] px-3 "
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg font-normal  hover:text-gray-300 px-3"
                  >
                    Chat Bot
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg font-normal py-2  hover:text-gray-300 px-3"
                  >
                    Voice Agent
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg font-normal py-2 px-3 hover:text-gray-300"
                  >
                    Chat LLM
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* banner section */}
      <div
        className="home-banner h-full lg:h-screen bg-center bg-cover bg-no-repeat banner "
        style={{ backgroundImage: "url('/images/home-banner.png')" }}
      >
        <div className="container">
          <div className="banner-text pt-44 text-white max-w-[682px] ">
            <h2
              className="text-[74px] leading-[100%] py-4"
              style={{
                fontFamily: "'Audiowide', sans-serif",
              }}
            >
              AI That Thinks Ahead
            </h2>
            <p className="my-[26px] font-bold  [font-family:'Roboto_Flex',sans-serif]">
              Innovative AI solutions designed to simplify and accelerate your
              workflow.
            </p>
            <button className="py-[14px] px-[43px] text-white text-base font-medium rounded-[18px] bg-[linear-gradient(90.04deg,_#501794_0.03%,_#3E70A1_101.88%)] hover:from-purple-700 hover:to-blue-600 transition-all">
              Sign up
            </button>
          </div>
        </div>
      </div>
      {/* Our Products */}
      <div className="Our Products mt-[60px]">
        <div className="container">
          <div className="inline-block text-center">
            <h1
              className="font-normal text-[30px] text-white"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              Our Products
            </h1>
            <img src="/images/heading.png" />
          </div>
          {/* cards */}

          <div className="   flex   gap-[41px] relative mt-[71px]">
            <div className="relative  w-[220px] ">
              <div className="absolute  left-4 top-1/2 -translate-y-1/2 transform p-[3px] bg-gradient-to-b from-purple-500 to-blue-400 rounded-full hover:scale-105 transition">
                <button className="w-[160px] h-[160px] rounded-full bg-transparent flex items-center justify-center">
                  <img
                    src="/images/left-arrow.png"
                    alt="Left Arrow"
                    className=""
                  />
                </button>
              </div>
            </div>
            {/* Card 1 */}
            <div
              className="relative w-[280px] min-h-[315px]   text-white bg-contain bg-no-repeat py-[38px] px-[14px] flex flex-col items-center text-center "
              style={{ backgroundImage: "url('/images/box-shape.png')" }}
            >
              <div className="absolute -left-[21px]  -top-7 bg-white rounded-full p-3 border ">
                <span className="">
                  {" "}
                  <img src="/images/icons8-voice-64 1.png" />
                </span>
              </div>
              <h3 className=" text-2xl font-bold">Chat Bot</h3>
              <p className="text-base font-light text-justify my-[22px] ">
                Revolutionizing Customer Interaction with Advanced AI Chatbots,
                Providing Instant, Personalized Support and Seamless
                Conversations.
              </p>
              <button className="mt-auto bg-gradient-to-r bg-[linear-gradient(90.04deg,_#501794_0.03%,_#3E70A1_101.88%)] text-white px-6 py-2 rounded-full font-medium text-base hover:from-purple-700 hover:to-blue-600 transition">
                Try Now
              </button>
            </div>

            {/* Card 2 */}
            <div
              className="relative w-[280px] min-h-[315px]   text-white bg-contain bg-no-repeat py-[38px] px-[14px] flex flex-col items-center text-center"
              style={{ backgroundImage: "url('/images/box-shape.png')" }}
            >
              <div className="absolute -left-[21px] -top-7 bg-white rounded-full p-3 border ">
                <span className="">
                  <img src="/images/icons8-voice-64 1 (1).png" />
                </span>
              </div>
              <h3 className="text-2xl font-bold">Voice Agent</h3>
              <p className="text-base font-light text-justify my-[22px] ">
                Transform the way you interact with technology—just speak, and
                let our voice agent handle the rest with precision and
                intelligence.
              </p>
              <button className="mt-auto bg-gradient-to-r bg-[linear-gradient(90.04deg,_#501794_0.03%,_#3E70A1_101.88%)] text-white px-6 py-2 rounded-full font-medium text-base hover:from-purple-700 hover:to-blue-600 transition">
                Try Now
              </button>
            </div>

            {/* Card 3 */}
            <div
              className="relative w-[280px] min-h-[315px]   text-white bg-contain bg-no-repeat py-[38px] px-[14px] flex flex-col items-center text-center"
              style={{ backgroundImage: "url('/images/box-shape.png')" }}
            >
              <div className="absolute -left-[21px] -top-7 bg-white rounded-full p-3 border ">
                <span className="">
                  {" "}
                  <img src="/images/icons8-voice-64 1 (2).png" />
                </span>
              </div>
              <h3 className="text-2xl font-bold">Chat LLM</h3>
              <p className="text-base font-light text-justify my-[22px] ">
                Leveraging Cutting-Edge Large Language Models to Transform
                Multilingual or Document Processing, Enabling Effortless
                Communication.
              </p>
              <button className="mt-auto bg-gradient-to-r bg-[linear-gradient(90.04deg,_#501794_0.03%,_#3E70A1_101.88%)] text-white px-6 py-2 rounded-full font-medium text-base hover:from-purple-700 hover:to-blue-600 transition">
                Try Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Bot Sec */}
      <div className="Chat-Bot mt-[144px]">
        <div className="container">
          <h1
            className="font-normal text-[30px] text-white"
            style={{
              fontFamily: "'Audiowide', sans-serif",
            }}
          >
            Chat Bot
          </h1>
          <img src="/images/heading.png" />
          <div className="flex items-center mt-5 ">
            <div className="Chat-img w-1/2">
              <img src="/images/chat-box.png" />
            </div>
            <div className="chatbox-content w-1/2 text-white">
              <h2
                className="text-3xl font-normal text-right mb-[22px]"
                style={{
                  fontFamily: "'Audiowide', sans-serif",
                }}
              >
                What <span className="text-[#05BDFD]">Chat Bot</span> Can Do?
              </h2>
              <p className="text-right font-light text-xl">
                Chatbots can be rule-based, where they follow predefined scripts
                and decision trees, or they can be powered by artificial
                intelligence (AI) and natural language processing (NLP) to
                understand and respond to user inputs more dynamically. The
                sophistication of a chatbot's capabilities can vary widely
                depending on its design and the technology behind it.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat LLM section */}
      <div className="Chat-LLM mt-[117px]">
        <div className="container">
          <h1
            className="font-normal text-[30px] text-white"
            style={{
              fontFamily: "'Audiowide', sans-serif",
            }}
          >
            Voice Agent
          </h1>
          <img src="/images/heading.png" />
          <div className="flex items-center mt-5 ">
            <div className="chatbox-content w-1/2 text-white">
              <h2
                className="text-3xl font-normal  mb-[22px]"
                style={{
                  fontFamily: "'Audiowide', sans-serif",
                }}
              >
                How <span className="text-[#05BDFD]">AI Voice Agent</span> Work?
              </h2>
              <p className=" font-light text-xl">
                An AI Voice Agent works by using speech recognition to convert
                spoken words into text, natural language processing (NLP) to
                understand the intent, and text-to-speech (TTS) to respond in a
                human-like voice. It processes user input in real-time,
                accessing databases or APIs to provide relevant information or
                take action. Machine learning continuously improves its accuracy
                and response quality based on interactions.
              </p>
            </div>
            <div className="Chat-img w-1/2">
              <img src="/images/laptop.png" />
            </div>
          </div>
        </div>
      </div>

      {/* Voice Agent section */}
      <div className="Voice-Agent mt-[117px]">
        <div className="container">
          <h1
            className="font-normal text-[30px] text-white"
            style={{
              fontFamily: "'Audiowide', sans-serif",
            }}
          >
            Chat Bot
          </h1>
          <img src="/images/heading.png" />
          <div className="flex items-center mt-5 ">
            <div className="Chat-img w-[40%]">
              <img src="/images/ai-box.png" />
            </div>
            <div className="chatbox-content w-[80%] text-white">
              <h2
                className="text-3xl font-normal text-right mb-[22px]"
                style={{
                  fontFamily: "'Audiowide', sans-serif",
                }}
              >
                What <span className="text-[#05BDFD]">Chat Bot</span> Can Do?
              </h2>
              <p className="text-right font-light text-xl">
                Chatbots can be rule-based, where they follow predefined scripts
                and decision trees, or they can be powered by artificial
                intelligence (AI) and natural language processing (NLP) to
                understand and respond to user inputs more dynamically. The
                sophistication of a chatbot's capabilities can vary widely
                depending on its design and the technology behind it.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* price section */}
      <div className="price mt-[81px]">
        <div className="container">
          <h1
            className="font-normal text-[30px] text-white"
            style={{
              fontFamily: "'Audiowide', sans-serif",
            }}
          >
            Pricing & Plans
          </h1>
          <img src="/images/heading.png" />
          <div className="py-12 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-8 h-full">
              {/* FREE Plan */}
              <div className=" rounded-tr-[18px] rounded-bl-[18px]   border border-[#FFFFFF33] backdrop-blur-[32.8032px] shadow-[0px_2.62px_13.12px_-0.66px_#00000000] px-[20px] py-[31px] text-white w-full md:w-1/3 flex flex-col justify-between min-h-full">
                <div>
                  <h3
                    className="text-lg font-bold   "
                    style={{
                      fontFamily: "'Audiowide', sans-serif",
                    }}
                  >
                    FREE
                  </h3>
                  <span className="">
                    {" "}
                    <img src="/images/Line.png" />
                  </span>
                  <p className="text-sm font-normal mt-[10px] mb-[15px]">
                    Access basic animation tools and templates with
                    standard-quality perfect for beginners to get started, at no
                    cost
                  </p>
                  <h2 className="text-[28px] font-semibold pb-[65px]">
                    $0{" "}
                    <span className="text-xs font-normal text-[#FFFFFFA1]">
                      /month
                    </span>
                  </h2>
                  <ul className="mb-6 space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span>
                        <img src="/images/star.png" />
                      </span>{" "}
                      Lorem ipsum dolor
                    </li>
                    <li className="flex gap-2">
                      <span>
                        <img src="/images/star.png" />
                      </span>{" "}
                      Lorem ipsum dolor
                    </li>
                    <li className="flex gap-2">
                      <span>
                        <img src="/images/star.png" />
                      </span>{" "}
                      Lorem ipsum dolor
                    </li>
                    <li className="flex gap-2">
                      <span>
                        <img src="/images/star.png" />
                      </span>{" "}
                      Lorem ipsum dolor
                    </li>
                  </ul>
                </div>
                <div>
                  <hr className="border-[2.31px] border-transparent [border-image-source:linear-gradient(98.8deg,#DE4DBC_26.92%,#1D86C2_68.19%,#2B126F_132.4%)] [border-image-slice:1] my-[20px]" />
                  <p className="text-xs">• 100% Satisfaction Guarantee</p>
                  <p className="text-xs">• 24 x 7 Customer Support</p>
                </div>
              </div>

              {/* BASIC Plan */}
              <div
                className="bg-[#1B1441] rounded-tr-[18px] rounded-bl-[18px]  border-[2.31px] border-transparent backdrop-blur-[32.8032px] shadow-[0px_2.62px_13.12px_-0.66px_#00000000] px-[20px] py-[31px] text-white w-full md:w-1/3 flex flex-col justify-between min-h-full"
                style={{
                  borderImageSource:
                    "linear-gradient(98.62deg, #4E2295 -3.12%, #42579D 79.45%)",
                  borderImageSlice: 1,
                }}
              >
                <div>
                  <h3
                    className="text-lg font-bold  "
                    style={{
                      fontFamily: "'Audiowide', sans-serif",
                    }}
                  >
                    Basic
                  </h3>
                  <span className="">
                    {" "}
                    <img src="/images/Line.png" />
                  </span>
                  <p className="text-sm font-normal mt-[10px] mb-[15px]">
                    Unlock advanced AI features, full customization, and
                    high-quality exports—ideal for serious creators at
                    $19.99/month.
                  </p>
                  <h2 className="text-[28px] font-semibold pb-[27px] ">
                    $4,200{" "}
                    <span className="text-xs font-normal text-[#FFFFFFA1]">
                      /month
                    </span>
                  </h2>
                  <button className="w-full rounded-full bg-[linear-gradient(95.5deg,_#501794_-27.34%,_#40659F_117.34%)] py-2 mb-6 text-white font-medium text-[17px]">
                    Choose This Plan
                  </button>
                  <ul className=" space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span>
                        <img src="/images/star.png" />
                      </span>{" "}
                      Lorem ipsum dolor
                    </li>
                    <li className="flex gap-2">
                      <span>
                        <img src="/images/star.png" />
                      </span>{" "}
                      Lorem ipsum dolor
                    </li>
                    <li className="flex gap-2">
                      <span>
                        <img src="/images/star.png" />
                      </span>{" "}
                      Lorem ipsum dolor
                    </li>
                    <li className="flex gap-2">
                      <span>
                        <img src="/images/star.png" />
                      </span>{" "}
                      Lorem ipsum dolor
                    </li>
                  </ul>
                </div>
                <div>
                  <hr className="border-purple-400 mb-4" />
                  <p className="text-xs">• 100% Satisfaction Guarantee</p>
                  <p className="text-xs">• 24 x 7 Customer Support</p>
                </div>
              </div>

              {/* PRO Plan */}
              <div className="bg-[#1B1441] rounded-[20px] border border-blue-400 p-6 text-white w-full md:w-1/3 flex flex-col justify-between min-h-full">
                <div>
                  <h3
                    className="text-lg font-bold   "
                    style={{
                      fontFamily: "'Audiowide', sans-serif",
                    }}
                  >
                    PRO
                  </h3>
                  <span className="">
                    {" "}
                    <img src="/images/Line.png" />
                  </span>
                  <p className="text-sm font-normal mt-[10px] mb-[15px]">
                    Designed for teams and businesses with unlimited exports,
                    custom integrations, and dedicated support—custom pricing
                    available.
                  </p>
                  <h2 className=" text-[28px] font-semibold pb-[27px]">
                    $4,200{" "}
                    <span className="text-xs font-normal text-[#FFFFFFA1]">
                      /month
                    </span>
                  </h2>
                  <button className="w-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 py-2 mb-6 text-white font-medium">
                    Choose This Plan
                  </button>
                  <ul className="mb-6 space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span>
                        <img src="/images/star.png" />
                      </span>{" "}
                      Lorem ipsum dolor
                    </li>
                    <li className="flex gap-2">
                      <span>
                        <img src="/images/star.png" />
                      </span>{" "}
                      Lorem ipsum dolor
                    </li>
                    <li className="flex gap-2">
                      <span>
                        <img src="/images/star.png" />
                      </span>{" "}
                      Lorem ipsum dolor
                    </li>
                    <li className="flex gap-2">
                      <span>
                        <img src="/images/star.png" />
                      </span>{" "}
                      Lorem ipsum dolor
                    </li>
                  </ul>
                </div>
                <div>
                  <hr className="border-blue-400 mb-4" />
                  <p className="text-xs">• 100% Satisfaction Guarantee</p>
                  <p className="text-xs">• 24 x 7 Customer Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      <div className=" Testimonials">
        <div className="container">
          <h1
            className="font-normal text-[30px] text-white"
            style={{
              fontFamily: "'Audiowide', sans-serif",
            }}
          >
            Testimonials
          </h1>
          <img src="/images/heading.png" />
          {/* silder */}
          <div className="flex">
            <div className="slide"></div>
          </div>
        </div>
      </div>

      {/* faq section */}
      <div className="faq mt-40 ">
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
                    <div className="border border-cyan-400 rounded-lg overflow-hidden bg-[#0f003e]">
                      <div className="flex items-center justify-between pl-6 border-cyan-400">
                        <div className="flex gap-3 items-center">
                          <span className="text-white font-medium text-2xl">
                            01
                          </span>
                          <h3 className="text-white font-normal text-[22px]">
                            Do you maintain your apps?
                          </h3>
                        </div>
                        <button className="text-white bg-cyan-400 w-[86px] h-[80px] flex items-center justify-center rounded-sm text-3xl">
                          −
                        </button>
                      </div>
                      <div className="px-6 py-4 text-sm leading-relaxed text-gray-300">
                        AI has the best record in software maintenance and
                        upgrades. Over and over we get praises and accolades
                        from our customers for taking good care of our apps. AI
                        has the best record in software maintenance and
                        upgrades. Over and over we get praises and accolades
                        from our customers for taking good care of our apps. AI
                        has the best record in software maintenance and
                        upgrades. Over and over we get praises and accolades
                        from our customers for taking good care of our apps.
                      </div>
                    </div>

                    {/* Accordion Item 2 */}
                    <div className="border border-[#747474] rounded-lg bg-[#0f003e]">
                      <div className="flex items-center justify-between pl-6 relative min-h-[77px]">
                        <div className="flex gap-3 items-center">
                          <span className="text-white font-semibold">02</span>
                          <h3 className="text-white font-normal text-[22px]">
                            How does AI Collective get all these AIs?
                          </h3>
                        </div>
                        <button className="text-white bg-[#152329] w-[86px] h-[80px] flex items-center justify-center rounded-sm text-xl absolute -top-px -right-[2px]">
                          +
                        </button>
                      </div>
                    </div>

                    {/* Accordion Item 3 */}
                    <div className="border border-[#747474] rounded-lg bg-[#0f003e]">
                      <div className="flex items-center justify-between pl-6 relative min-h-[77px]">
                        <div className="flex gap-3 items-center">
                          <span className="text-white font-semibold">03</span>
                          <h3 className="text-white font-normal text-[22px]">
                            Why is it so affordable?
                          </h3>
                        </div>
                        <button className="text-white bg-[#152329] w-[86px] h-[80px] flex items-center justify-center rounded-sm text-xl absolute -top-px -right-[2px]">
                          +
                        </button>
                      </div>
                    </div>

                    {/* Accordion Item 4 */}
                    <div className="border border-[#747474] rounded-lg bg-[#0f003e]">
                      <div className="flex items-center justify-between pl-6 relative min-h-[77px]">
                        <div className="flex gap-3 items-center">
                          <span className="text-white font-semibold">04</span>
                          <h3 className="text-white font-normal text-[22px]">
                            Can I get a free trial?
                          </h3>
                        </div>
                        <button className="text-white bg-[#152329] w-[86px] h-[80px] flex items-center justify-center rounded-sm text-xl absolute -top-px -right-[2px]">
                          +
                        </button>
                      </div>
                    </div>

                    {/* Accordion Item 5 */}
                    <div className="border border-[#747474] rounded-lg bg-[#0f003e]">
                      <div className="flex items-center justify-between pl-6 relative min-h-[77px]">
                        <div className="flex gap-3 items-center">
                          <span className="text-white font-semibold">05</span>
                          <h3 className="text-white font-normal text-[22px]">
                            How can I cancel my purchase?
                          </h3>
                        </div>
                        <button className="text-white bg-[#152329] w-[86px] h-[80px] flex items-center justify-center rounded-sm text-xl absolute -top-px -right-[2px]">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
      </div>

      {/* footer */}
      <footer className=" text-white px-6 md:px-12 py-[px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Plan */}
          <div>
            <h1 className="text-4xl font-semibold mb-4">LOGO</h1>
            <p className="text-base text-gray-300 font-normal mb-4">
              Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus at
              dui habitasse quisque nisl tincidunt.
            </p>
            <button className=" w-full bg-gradient-to-r from-[#501794] via-[#5e3aa1] text-[15px] to-[#40659F] font-medium hover:bg-[#7B68EE] text-white text-sm py-2 px-4 rounded-full transition">
              Choose This Plan
            </button>
          </div>

          {/* About Links */}
          <div>
            <h2 className=" text-xl font-bold mb-8 [font-family:'Roboto_Flex',sans-serif]">
              About
            </h2>
            <ul className="text-sm space-y-2 text-white [font-family:'Roboto_Flex',sans-serif]">
              <li className="pb-4">
                <a href="#">Home</a>
              </li>
              <li className="pb-4">
                <a href="#">LLM</a>
              </li>
              <li className="pb-4">
                <a href="#">Chat Bot</a>
              </li>
              <li className="pb-4">
                <a href="#">Voice agent</a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h2 className="text-xl font-bold mb-8 [font-family:'Roboto_Flex',sans-serif]">
              Company
            </h2>
            <ul className="text-sm space-y-2 text-white [font-family:'Roboto_Flex',sans-serif]">
              <li className="pb-4">
                <a href="#">About Us</a>
              </li>
              <li className="pb-4">
                <a href="#">Careers</a>
              </li>
              <li className="pb-4">
                <a href="#">FAQs</a>
              </li>
              <li className="pb-4">
                <a href="#">Teams</a>
              </li>
              <li className="pb-4">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h2 className="text-xl font-bold mb-8 [font-family:'Roboto_Flex',sans-serif]">
              Follow us
            </h2>
            <div className="flex space-x-4 text-xl">
              <a href="#">
                <img className="" src="/images/facebook (3).png" />
              </a>
              <a href="#">
                <img className="" src="/images/social.png" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <img className="" src="/images/instra.png" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <img className="" src="/images/transfer.png" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex container ">
          <div className="w-[25%] "></div>
          <div className="flex justify-between items-center w-[75%] mt-[41px] ">
            <h2 className="font-bold text-lg  [font-family:'Roboto_Flex',sans-serif]">
              Contact Us{" "}
            </h2>
            <div className="flex gap-3">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_5_1991)">
                  <path
                    d="M21 10.7751C21 17.7751 12 23.7751 12 23.7751C12 23.7751 3 17.7751 3 10.7751C3 8.3882 3.94821 6.09901 5.63604 4.41119C7.32387 2.72336 9.61305 1.77515 12 1.77515C14.3869 1.77515 16.6761 2.72336 18.364 4.41119C20.0518 6.09901 21 8.3882 21 10.7751Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 13.7751C13.6569 13.7751 15 12.432 15 10.7751C15 9.11829 13.6569 7.77515 12 7.77515C10.3431 7.77515 9 9.11829 9 10.7751C9 12.432 10.3431 13.7751 12 13.7751Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_1991">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.775146)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <p className="font-normal text-sm">
                {" "}
                Lorem ipsum dolor sit amet <br></br> consectetur.20815
              </p>
            </div>
            <div className="flex gap-3">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4.77515H20C21.1 4.77515 22 5.67515 22 6.77515V18.7751C22 19.8751 21.1 20.7751 20 20.7751H4C2.9 20.7751 2 19.8751 2 18.7751V6.77515C2 5.67515 2.9 4.77515 4 4.77515Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 6.77515L12 13.7751L2 6.77515"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>lorem@gmail.com</p>
            </div>
            <div className="flex  gap-3">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0499 5.77515C16.0267 5.96571 16.9243 6.4434 17.628 7.14708C18.3317 7.85076 18.8094 8.74841 18.9999 9.72515L15.0499 5.77515ZM15.0499 1.77515C17.0792 2.00058 18.9715 2.90932 20.4162 4.35215C21.8608 5.79499 22.7719 7.68616 22.9999 9.71515L15.0499 1.77515ZM21.9999 17.6951V20.6951C22.0011 20.9736 21.944 21.2493 21.8324 21.5045C21.7209 21.7597 21.5572 21.9887 21.352 22.177C21.1468 22.3653 20.9045 22.5086 20.6407 22.5979C20.3769 22.6871 20.0973 22.7202 19.8199 22.6951C16.7428 22.3608 13.7869 21.3093 11.1899 19.6251C8.77376 18.0898 6.72527 16.0413 5.18993 13.6251C3.49991 11.0164 2.44818 8.04614 2.11993 4.95515C2.09494 4.67861 2.12781 4.39991 2.21643 4.13677C2.30506 3.87364 2.4475 3.63184 2.6347 3.42677C2.82189 3.2217 3.04974 3.05786 3.30372 2.94567C3.55771 2.83348 3.83227 2.77541 4.10993 2.77515H7.10993C7.59524 2.77037 8.06572 2.94223 8.43369 3.25868C8.80166 3.57513 9.04201 4.01459 9.10993 4.49515C9.23656 5.45521 9.47138 6.39787 9.80993 7.30515C9.94448 7.66307 9.9736 8.05206 9.89384 8.42603C9.81408 8.79999 9.6288 9.14326 9.35993 9.41515L8.08993 10.6851C9.51349 13.1887 11.5864 15.2616 14.0899 16.6851L15.3599 15.4151C15.6318 15.1463 15.9751 14.961 16.3491 14.8812C16.723 14.8015 17.112 14.8306 17.4699 14.9651C18.3772 15.3037 19.3199 15.5385 20.2799 15.6651C20.7657 15.7337 21.2093 15.9784 21.5265 16.3526C21.8436 16.7269 22.0121 17.2047 21.9999 17.6951Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>+1 45676483032</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto mt-[41px] border-t border-white ">
          <p className="text-center font-light text-xs mt-[41px] ">
            © 2025 All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
