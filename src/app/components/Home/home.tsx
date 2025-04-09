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
      <div className="faq mt-40">
        <div className="container">
          <h1
            className="font-normal text-[30px] text-white"
            style={{
              fontFamily: "'Audiowide', sans-serif",
            }}
          >
            FAQ
          </h1>
          <img className="w-[9%]" src="/images/heading.png" />
          {/* faq */}
          <div className=" text-white font-sans py-16 px-4 md:px-20" >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">
              {/* Left Side: Heading + Bot Image */}
              <div className="w-[40%] text-center md:text-left">
                <h2
                  className="text-4xl font-normal  text-white"
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
                <img
                  src="/images/robo.png"
                  alt="Bot"
                  className="w-64 mx-auto md:mx-0 mt-10"
                />
              </div>

              {/* Right Side: Accordion */}
              <div className="w-[80%] space-y-4">
                {/* Accordion Item 1 (Open) */}
                <div className="border border-cyan-400 rounded-lg overflow-hidden bg-[#0f003e]">
                  <div className="flex items-center justify-between pl-6   border-cyan-400">
                    <div className="flex gap-3 items-center">
                      <span className="text-white font-medium text-2xl">
                        01
                      </span>
                      <h3 className="text-white font-normal text-[22px]">
                        Do you maintain your apps?
                      </h3>
                    </div>
                    <button className="text-white bg-cyan-400 w-[86px] h-[80px] flex items-center justify-center rounded-sm text-3xl ">
                      −
                    </button>
                  </div>
                  <div className="px-6 py-4 text-sm leading-relaxed text-gray-300">
                    AI has the best record in software maintenance and upgrades.
                    Over and over we get praises and accolades from our
                    customers for taking good care of our apps.AI has the best
                    record in software maintenance and upgrades. Over and over
                    we get praises and accolades from our customers for taking
                    good care of our apps.AI has the best record in software
                    maintenance and upgrades. Over and over we get praises and
                    accolades from our customers for taking good care of our
                    apps.
                  </div>
                </div>

                {/* Accordion Item 2 */}
                <div className="border border-[#747474] rounded-lg bg-[#0f003e]">
                  <div className="flex items-center justify-between pl-6 ">
                    <div className="flex gap-3 items-center">
                      <span className="text-white font-semibold">02</span>
                      <h3 className="text-white font-normal text-[22px]">
                        How does AI Collective get all these AIs?
                      </h3>
                    </div>
                    <button className="text-white bg-[#152329] w-[86px] h-[80px] flex items-center justify-center rounded-sm text-xl ">
                      +
                    </button>
                  </div>
                </div>

                {/* Accordion Item 3 */}
                <div className="border border-[#747474]  rounded-lg bg-[#0f003e]">
                  <div className="flex items-center justify-between pl-6 ">
                    <div className="flex gap-3 items-center">
                      <span className="text-white font-semibold">03</span>
                      <h3 className="text-white font-normal text-[22px]">
                        Why is it so affordable?
                      </h3>
                    </div>
                    <button className="text-white bg-[#152329] w-[86px] h-[80px] flex items-center justify-center rounded-sm text-xl ">
                      +
                    </button>
                  </div>
                </div>

                {/* Accordion Item 4 */}
                <div className="border border-[#747474]  rounded-lg bg-[#0f003e]">
                  <div className="flex items-center justify-between pl-6 ">
                    <div className="flex gap-3 items-center">
                      <span className="text-white font-semibold">04</span>
                      <h3 className="text-white font-normal text-[22px]">
                        Can I get a free trial?
                      </h3>
                    </div>
                    <button className="text-white bg-[#152329] w-[86px] h-[80px] flex items-center justify-center rounded-sm text-xl ">
                      +
                    </button>
                  </div>
                </div>

                {/* Accordion Item 5 */}
                <div className="border border-[#747474]  rounded-lg bg-[#0f003e]">
                  <div className="flex items-center justify-between pl-6 ">
                    <div className="flex gap-3 items-center">
                      <span className="text-white font-semibold">05</span>
                      <h3 className="text-white font-normal text-[22px]">
                        How can I cancel my purchase?
                      </h3>
                    </div>
                    <button className="text-white bg-[#152329] w-[86px] h-[80px] flex items-center justify-center rounded-sm text-xl ">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* footer */}
        </div>
      </div>

      {/* footer */}
      <footer className="bg-gradient-to-r from-[#0f1c3f] to-[#40075b] text-white px-6 md:px-12 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Plan */}
          <div>
            <h1 className="text-2xl font-bold mb-4">LOGO</h1>
            <p className="text-sm text-gray-300 mb-4">
              Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus at
              dui habitasse quisque nisl tincidunt.
            </p>
            <button className="bg-[#6A5ACD] hover:bg-[#7B68EE] text-white text-sm py-2 px-4 rounded-full transition">
              Choose This Plan
            </button>
          </div>

          {/* About Links */}
          <div>
            <h2 className="font-semibold mb-4">About</h2>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">LLM</a>
              </li>
              <li>
                <a href="#">Chat Bot</a>
              </li>
              <li>
                <a href="#">Voice agent</a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h2 className="font-semibold mb-4">Company</h2>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Teams</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h2 className="font-semibold mb-4">Follow us</h2>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto mt-10 border-t border-gray-500 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <div className="flex flex-col md:flex-row items-center space-x-4 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <i className="fas fa-map-marker-alt"></i>
              <span>Lorem ipsum dolor sit amet consectetur:20815</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-envelope"></i>
              <span>lorem@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-phone"></i>
              <span>+1 45676483032</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xs">© 2025 All Rights Reserved</span>
            <button className="bg-white text-black rounded-full p-1 hover:bg-gray-200 transition">
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
