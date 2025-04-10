import React from "react";

const Chatbot = () => {
  return (
    <div className="bg-white">
      {/* header */}
      <nav className="bg-[#2D2095] fixed w-full z-20  rounded-[36px] top-0   my-9">
        <div className="container">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse "
            >
              <img src="/images/bot-logo.png" />
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
              <button
                type="button"
                className="text-white bg-[#05BDFD] text-[15px] rounded-[18px]  font-semibold focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Return to Home
              </button>
              <svg
                width="21"
                height="22"
                className="mx-[18px]"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7917 4.09546C11.691 4.09546 12.5534 4.45267 13.1892 5.08851C13.825 5.72436 14.1823 6.58674 14.1823 7.48596C14.1823 8.38518 13.825 9.24757 13.1892 9.88341C12.5534 10.5193 11.691 10.8765 10.7917 10.8765C9.89253 10.8765 9.03014 10.5193 8.3943 9.88341C7.75846 9.24757 7.40125 8.38518 7.40125 7.48596C7.40125 6.58674 7.75846 5.72436 8.3943 5.08851C9.03014 4.45267 9.89253 4.09546 10.7917 4.09546ZM10.7917 12.5717C14.5383 12.5717 17.5728 14.089 17.5728 15.9622V17.6575H4.01074V15.9622C4.01074 14.089 7.04524 12.5717 10.7917 12.5717Z"
                  fill="white"
                />
              </svg>

              <p className="text-white font-semibold text-[15px]">User</p>
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
              <ul className="flex flex-col items-center  text-[15px] font-normal p-4 md:p-0 mt-4  [font-family:'Roboto_Flex',sans-serif]  border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   ">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white bg-[#434343] rounded-[26px]"
                    aria-current="page"
                  >
                    Chat Bot
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Voice Agent
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Chat LLM
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* banner */}
      <div className="chatbot-banner bg-gradient-to-t from-[#2B255C] via-[#1300AF] to-[#0083FF] mt-[162px] pt-[155px] h-screen">
        <div className="container">
          <div className="flex">
            <div className="">
              <h1
                className="text-[74px] leading-[100%] py-4 text-white"
                style={{ fontFamily: "'Audiowide', sans-serif" }}
              >
                Custom AI Chatbots
              </h1>
              <p className="font-bold text-white text-base my-[22px]">
                Innovative AI solutions designed to simplify and accelerate your
                workflow.
              </p>
              <a
                href=""
                className="bg-white text-lg font-semibold py-[7px] px-[49px] rounded-[22px] "
              >
                Sign In
              </a>
            </div>
            <div className="">
              <img src="/images/slide-img.png" />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us? */}
      <div className="Why Choose Us? padding-[40px]">
        <div className="container">
          <div className="flex items-center">
            <div className="w-1/2">
              <h1
                className="text-[40px] font-normal"
                style={{ fontFamily: "'Audiowide', sans-serif" }}
              >
                Why Choose Us?
              </h1>
              <p className="font-bold text-base my-[22px]">
                We pride ourselves on making it easy for individuals and
                business owners around the world to use artificial intelligence
                to become more productive.
              </p>
              <a
                href=""
                className=" bg-[#292362] text-lg font-semibold py-[7px] px-[49px] rounded-[22px] text-white "
              >
                Sign In
              </a>
            </div>
            <div className="w-1/2">
              <img src="/images/chatbot.png" />
            </div>
          </div>
        </div>
      </div>

      {/* our chatbots */}
      <div className="bg-[#1D0F8DED]  md:px-20 text-white py-[64px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 container">
          {/* Left Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-2/3 text-center">
            {/* Card 1 */}
            <div className="bg-white text-black rounded-2xl pb-[12px] pt-[25px]  px-[47px] shadow-lg relative">
              <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-[#DF437E] bg-[#D9D9D9] rounded-full h-[58px] w-[58px] flex justify-center items-center">
                <img className="" src="/images/icon1.png" />
              </div>
              <h2 className="pt-[9px] font-medium text-sm">Instagram</h2>
              <p className="text-xs py-[9px] font-light">
                Use your chatbot to respond to incoming messages to your
                Instagram business account.
              </p>
              <button className="bg-[#CC39A2] text-white px-4 py-1 rounded-full text-[12px] font-bold">
                Export All
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white text-black rounded-2xl pb-[12px] pt-[25px]  px-[47px] shadow-lg relative">
              <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-[#DF437E] bg-[#D9D9D9] rounded-full h-[58px] w-[58px] flex justify-center items-center">
                <img className="" src="/images/icon1.png" />
              </div>
              <h2 className="pt-[9px] font-medium text-sm">Instagram</h2>
              <p className="text-xs py-[9px] font-light">
                Use your chatbot to respond to incoming messages to your
                Instagram business account.
              </p>
              <button className="bg-[#CC39A2] text-white px-4 py-1 rounded-full text-[12px] font-bold">
                Export All
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-white text-black rounded-2xl pb-[12px] pt-[25px]  px-[47px] shadow-lg relative my-[22px]">
              <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-[#DF437E] bg-[#D9D9D9] rounded-full h-[58px] w-[58px] flex justify-center items-center">
                <img className="" src="/images/icon1.png" />
              </div>
              <h2 className="pt-[9px] font-medium text-sm">Instagram</h2>
              <p className="text-xs py-[9px] font-light">
                Use your chatbot to respond to incoming messages to your
                Instagram business account.
              </p>
              <button className="bg-[#CC39A2] text-white px-4 py-1 rounded-full text-[12px] font-bold">
                Export All
              </button>
            </div>

            {/* Card 4 */}
            <div className="bg-white text-black rounded-2xl pb-[12px] pt-[25px]  px-[47px] shadow-lg relative my-[22px]">
              <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-[#DF437E] bg-[#D9D9D9] rounded-full h-[58px] w-[58px] flex justify-center items-center">
                <img className="" src="/images/icon1.png" />
              </div>
              <h2 className="pt-[9px] font-medium text-sm">Instagram</h2>
              <p className="text-xs py-[9px] font-light">
                Use your chatbot to respond to incoming messages to your
                Instagram business account.
              </p>
              <button className="bg-[#CC39A2] text-white px-4 py-1 rounded-full text-[12px] font-bold">
                Export All
              </button>
            </div>

            {/* Card 5 */}
            <div className="bg-white text-black rounded-2xl pb-[12px] pt-[25px]  px-[47px] shadow-lg relative">
              <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-[#DF437E] bg-[#D9D9D9] rounded-full h-[58px] w-[58px] flex justify-center items-center">
                <img className="" src="/images/icon1.png" />
              </div>
              <h2 className="pt-[9px] font-medium text-sm">Instagram</h2>
              <p className="text-xs py-[9px] font-light">
                Use your chatbot to respond to incoming messages to your
                Instagram business account.
              </p>
              <button className="bg-[#CC39A2] text-white px-4 py-1 rounded-full text-[12px] font-bold">
                Export All
              </button>
            </div>

            {/* Card 6 */}
            <div className="bg-white text-black rounded-2xl pb-[12px] pt-[25px]  px-[47px] shadow-lg relative">
              <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-[#DF437E] bg-[#D9D9D9] rounded-full h-[58px] w-[58px] flex justify-center items-center">
                <img className="" src="/images/icon1.png" />
              </div>
              <h2 className="pt-[9px] font-medium text-sm">Instagram</h2>
              <p className="text-xs py-[9px] font-light">
                Use your chatbot to respond to incoming messages to your
                Instagram business account.
              </p>
              <button className="bg-[#CC39A2] text-white px-4 py-1 rounded-full text-[12px] font-bold">
                Export All
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-left w-full md:w-1/3">
            <h2
              className="text-3xl md:text-4xl font-normal mb-4 leading-snug text-right"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              Our Chatbots <br />
              <span className="text-cyan-400 text-right">Integrate With</span>
            </h2>
            <p className="font-bold text-base mb-6 text-right ">
              Let our chatbots help your customers across multiple <br />
              social media channels at once
            </p>
            <div className=" text-right">
              <button className="bg-white text-black px-6 py-2 rounded-full text-lg  font-semibold shadow-md mb-8">
                Try Now
              </button>
            </div>
            <img src="/images/chat1.png" alt="Robot" className="" />
          </div>
        </div>
      </div>
      {/* basic price */}
      <div className="tab-sec my-[40px]">
        <div className="container">
          <div className="flex items-center justify-center mb-[73px] bg-white">
            <span className="mr-3 font-medium text-indigo-900">Monthly</span>

            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-blue-500 peer-focus:outline-none rounded-full peer peer-checked:bg-gray-300 transition duration-300"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
            </label>

            <span className="ml-3 font-medium text-gray-700">Annually</span>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 ">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl shadow-md p-6 w-full md:w-1/3 text-center">
              <div className="flex justify-center mb-4">
                <div className="h-[58px] w-[58px] flex justify-center items-center rounded-full bg-blue-100">
                  <div className="h-6 w-6 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-sm text-gray-500">For individuals</h3>
              <h2 className="text-xl font-semibold mb-2">Basic</h2>
              <p className="text-gray-500 mb-4">
                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                adipiscing elit.
              </p>
              <p className="text-3xl font-bold">
                $99{" "}
                <span className="text-base font-medium text-gray-500">
                  /monthly
                </span>
              </p>
              <h4 className="mt-6 mb-2 font-semibold text-left">
                What's included
              </h4>
              <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✔</span> All analytics
                  features
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✔</span> Up to 250,000
                  tracked visits
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✔</span> Normal support
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✔</span> Up to 3 team
                  members
                </li>
              </ul>
              <button className="bg-blue-500 text-white py-2 px-6 rounded-full font-medium hover:bg-blue-600 transition">
                Get started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-[#501794] to-[#40659F] rounded-2xl shadow-xl p-6 w-full md:w-1/3 text-center text-white relative">
              <div className="absolute top-4 right-4 bg-white text-sm text-gray-700 px-2 py-1 rounded-full">
                Popular
              </div>
              <div className="flex justify-center mb-4">
                <div className="h-[58px] w-[58px] flex justify-center items-center rounded-full bg-white/30">
                  <div className="h-6 w-6 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-sm text-white/80">For startups</h3>
              <h2 className="text-xl font-semibold mb-2">Pro</h2>
              <p className="text-white/90 mb-4">
                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                adipiscing elit.
              </p>
              <p className="text-3xl font-bold">
                $199{" "}
                <span className="text-base font-medium text-white/80">
                  /monthly
                </span>
              </p>
              <h4 className="mt-6 mb-2 font-semibold text-left">
                What's included
              </h4>
              <ul className="text-left text-sm text-white space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-white mr-2">✔</span> All analytics
                  features
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">✔</span> Up to 1,000,000
                  tracked visits
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">✔</span> Premium support
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">✔</span> Up to 10 team
                  members
                </li>
              </ul>
              <button className="bg-white text-blue-600 py-2 px-6 rounded-full font-medium hover:bg-gray-100 transition">
                Get started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl shadow-md p-6 w-full md:w-1/3 text-center">
              <div className="flex justify-center mb-4">
                <div className="h-[58px] w-[58px] flex justify-center items-center rounded-full bg-blue-100">
                  <div className="h-6 w-6 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-sm text-gray-500">For big companies</h3>
              <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
              <p className="text-gray-500 mb-4">
                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                adipiscing elit.
              </p>
              <p className="text-3xl font-bold">
                $399{" "}
                <span className="text-base font-medium text-gray-500">
                  /monthly
                </span>
              </p>
              <h4 className="mt-6 mb-2 font-semibold text-left">
                What's included
              </h4>
              <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✔</span> All analytics
                  features
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✔</span> Up to 5,000,000
                  tracked visits
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✔</span> Dedicated
                  support
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✔</span> Up to 50 team
                  members
                </li>
              </ul>
              <button className="bg-blue-500 text-white py-2 px-6 rounded-full font-medium hover:bg-blue-600 transition">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* faq */}
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
              <div className="border-b border-white/30">
                <button className="w-full text-left py-3 flex justify-between items-center  font-semibold  text-xl text-[#FAFAFA]">
                  What is ChatBot?
                  <span className="text-white text-xl font-normal">˄</span>
                </button>
                <p className=" pb-4 text-base text-[#FAFAFA]">
                  FastBots is an intuitive AI chatbot builder. It allows you to
                  create a chatbot trained on the content of your webpages,
                  documents, and more. This chatbot can then be integrated into
                  your website to function as a question-answer bot, offering
                  24/7 multilingual support.
                </p>
              </div>

              {/* FAQ Collapsed Items */}
              {[
                "How secure is my data when using ChatBot?",
                "What platforms do you integrate with?",
                "What LLMs models does ChatBot use?",
                "How do I contact customer support?",
              ].map((question, idx) => (
                <div className="border-b border-white/30" key={idx}>
                  <button className="w-full text-left py-3 flex justify-between items-center font-semibold  text-xl text-[#FAFAFA]">
                    {question}
                    <span className="text-white text-xl">˅</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer
        className=" text-white  py-[65px] px-8 md:px-16 lg:px-24  bg-center bg-cover bg-no-repeat bg-[#2d2095]"
        style={{ backgroundImage: "url('/images/footer.png')" }}
      >
        <div className="container [font-family:'Roboto_Flex',sans-serif]">
          <img src="/images/bot-logo.png" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            {/* Logo and Product */}
            <div>
              <h3 className="font-bold text-lg my-[30px] ">Product</h3>
              <ul className="font-normal text-sm test-white ">
                <li className="mb-[16px]">Lorem Ipsum</li>
                <li className="mb-[16px]">Lorem Ipsum</li>
                <li className="mb-[16px]">Lorem Ipsum</li>
                <li className="mb-[16px]">Lorem Ipsum</li>
              </ul>
            </div>

            {/* Use Cases */}
            <div>
              <h3 className="font-bold text-lg my-[30px]">Use Cases</h3>
              <ul className="font-normal text-sm test-white ">
                <li className="mb-[16px]">Lorem Ipsum</li>
                <li className="mb-[16px]">Lorem Ipsum</li>
                <li className="mb-[16px]">Lorem Ipsum</li>
                <li className="mb-[16px]">Lorem Ipsum</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold text-lg my-[30px]">Resources</h3>
              <ul className="font-normal text-sm test-white ">
                <li className="mb-[16px]">Lorem Ipsum</li>
                <li className="mb-[16px]">Lorem Ipsum</li>
                <li className="mb-[16px]">Lorem Ipsum</li>
                <li className="mb-[16px]">Lorem Ipsum</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-lg my-[30px]">Company</h3>
              <ul className="font-normal text-sm test-white ">
                <li className="mb-[16px]">Lorem Ipsum</li>
                <li className="mb-[16px]">Lorem Ipsum</li>
                <li className="mb-[16px]">Lorem Ipsum</li>
                <li className="mb-[16px]">Lorem Ipsum</li>
              </ul>
            </div>

            {/* Social + CTA */}
            <div>
              <h3 className="text-lg mb-[13px] font-bold">Let's do it!</h3>
              <div className="flex space-x-3 mb-4">
                <img src="/images/1.png" />
                <img src="/images/2.png" />
                <img src="/images/3.png" />
                <img src="/images/4.png" />
                <img src="/images/5.png" />
              </div>
              <div className=" space-x-4">
                <button className="bg-black text-white px-4 py-2 rounded-full  w-full font-normal text-base">
                  Get started
                </button>
                <button className="bg-white text-black px-4 py-2 rounded-full w-full mt-4 font-normal text-base">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="border-t border-white/20 mt-12 pt-4 flex flex-col md:flex-row justify-between ">
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-normal text-sm text-white">
              <span>Privacy Policy</span>
              <span>Terms of Use</span>
              <span>Sales and Refunds</span>
              <span>Legal</span>
              <span>Site Map</span>
            </div>
            <div className="mt-2 md:mt-0 font-light text-xs">
              © 2021 All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Chatbot;
