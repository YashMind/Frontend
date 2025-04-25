import React from "react";
import ChatbotHeader from "@/components/chatbot/header/chatbotHeader";
import ChatbotFooter from "@/components/chatbot/footer/chatbotFooter";
import Image from "next/image";
const LlmProduct = () => {
  return (
    <div className="">
      {/* header */}
      <ChatbotHeader />

      {/* banner sec */}
      <div className="h-auto md:h-screen bg-gradient-to-t from-[#10094A] to-[#1503A6] mt-[27px]">
        <div className="container h-full flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-0 py-10 md:py-0">
          {/* Left Side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1
              className="text-[28px] sm:text-[36px] md:text-[50px] text-white py-4 "
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              Unlock the Power of AI with Our Large Language Model
            </h1>
            <p className="text-sm sm:text-base font-bold text-white my-[22px] [font-family:'Roboto_Flex',sans-serif]">
              Transform your business with cutting-edge AI language
              capabilities. From natural language understanding to content
              generation, our LLMs deliver unparalleled performance.
            </p>
            <a
              href="/signin"
              className="bg-white text-[#1503A6] text-sm sm:text-base font-semibold py-[7px] px-[30px] sm:px-[49px] rounded-[22px] inline-block"
            >
              Sign In
            </a>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/llm-img.png"
              alt="alt"
              className="w-full max-w-[400px] md:max-w-[565px] h-auto"
            />
          </div>
        </div>
      </div>

      {/* workflow AI */}
      <div className="py-[31px]">
        <div className="container h-full flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-0">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1
              className="text-[28px] sm:text-[36px] md:text-[50px] py-4 text-black leading-tight"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              Supercharge Your Workflow with{" "}
              <span className="text-[#12076B]">ALL The AIs You Need</span>
            </h1>
            <p className="font-bold text-black text-sm sm:text-base my-[22px] [font-family:'Roboto_Flex',sans-serif]">
              Accomplish the simplest tasks, like copywriting, and image
              creations, as well as the most complex tasks like computing,
              analytics and even coding!
            </p>
            <a
              href="/signin"
              className="bg-[#140491] text-sm sm:text-base text-white font-semibold py-[7px] px-[30px] sm:px-[49px] rounded-[22px] inline-block"
            >
              Try Now
            </a>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img
              alt="alt"
              src="/images/roboot2.png"
              className="w-full max-w-[400px] md:max-w-[612px] h-auto"
            />
          </div>
        </div>
      </div>

      {/* ai area */}
      <div className="bg-[#1D0F8DED] text-white py-[18px] overflow-hidden">
        <div className="container">
          <div className=" md:block lg:flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            {/* Left Section */}
            <div className="w-full md:w-1/2 mob-view">
              <h1
                className="text-[28px] sm:text-[34px] md:text-[40px]  "
                style={{ fontFamily: "'Audiowide', sans-serif" }}
              >
                You get all of this <br className="hidden md:block" /> at one
                place
              </h1>
              <p className="font-bold text-white text-sm sm:text-base my-[22px] [font-family:'Roboto_Flex',sans-serif]">
                Let our LLM help your customers across multiple social media
                channels at once
              </p>
              <button className="mt-4 px-6 py-2 bg-white text-[#1503A6] font-semibold rounded-full shadow-md hover:bg-gray-100 transition">
                Try Now
              </button>
              <div className="mt-6 ">
                <img
                  alt="alt"
                  src="/images/chat1.png"
                  className="w-full max-w-[422px] mx-auto"
                />
              </div>
            </div>

            {/* Right Slides Section */}
            <div className="w-full md:w-1/2 mt-10 md:mt-0 absolute right-0 overflow-hidden absolute-mob">
              <div className="relative md:-right-[74px] overflow-hidden">
                <h2 className="text-lg font-semibold mb-4">For Content</h2>
                <div className="flex flex-wrap gap-3">
                  {Array(16)
                    .fill("Articles")
                    .map((text, idx) => (
                      <button
                        key={`content-${idx}`}
                        className="px-4 py-2 bg-white text-[#1503A6] rounded-full text-sm font-medium shadow-sm"
                      >
                        {text}
                      </button>
                    ))}
                </div>
              </div>
              <div className="relative md:-right-[74px] mt-8 overflow-hidden">
                <h2 className="text-lg font-semibold mb-4">For Marketing</h2>
                <div className="flex flex-wrap gap-3">
                  {Array(16)
                    .fill("Articles")
                    .map((text, idx) => (
                      <button
                        key={`marketing-${idx}`}
                        className="px-4 py-2 bg-white text-[#1503A6] rounded-full text-sm font-medium shadow-sm"
                      >
                        {text}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cornor of ai */}
      <div className="bg-white py-16 px-4 md:px-20 text-center my-[70px] space-mob ">
        <div className="container">
          {/* Title */}
          <h2 className="text-3xl md:text-5xl  mb-12 [font-family:'Audiowide',sans-serif] w-full text-left lg:w-[603px]">
            AI Collective Covers Every{" "}
            <span className="text-[#271F6A]">Corner of AI.</span>
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto my-[68px]">
            {[
              {
                title: "Chat GPT",
                desc: "Fast and high-quality AI. Great for content generation or for high quality research.",
              },
              {
                title: "GPT 01",
                desc: "AI reasoning model designed to solve hard problems across domains.",
              },
              {
                title: "GPT 01",
                desc: "AI reasoning model designed to solve hard problems across domains.",
              },
              {
                title: "Chat GPT",
                desc: "Fast and high-quality AI. Great for content generation or for high quality research.",
              },
              {
                title: "GPT 01",
                desc: "AI reasoning model designed to solve hard problems across domains.",
              },
              {
                title: "GPT 01",
                desc: "AI reasoning model designed to solve hard problems across domains.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-[#B6B6B6] rounded-[12px] px-6 pt-10 pb-6 relative"
              >
                {/* Icon */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-[48px] h-[48px] bg-white border border-[#B6B6B6] rounded-full flex items-center justify-center">
                  <Image
                    alt="alt"
                    src="/images/ai.png"
                    height={23}
                    width={53}
                  />
                </div>
                {/* Title */}
                <h3 className="font-semibold text-lg md:text-xl mb-2">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-sm md:text-base text-[#4B4B4B] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="bg-[#271F6A] text-white px-8 py-3 rounded-full font-semibold">
            Show More
          </button>
        </div>
      </div>
      {/* chat gpt sec */}
      <div className="bg-[#2D2095] overflow-hidden py-[68px]">
        <div className="container">
          <h1
            className="text-[28px] sm:text-[32px] md:text-4xl font-bold text-white max-w-full md:w-[672px] text-center md:text-left mx-auto md:mx-0"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            You can do it by just one click{" "}
            <span className="text-[#34C8FB]">what ever you want</span>
          </h1>

          <div
            className="my-[73px] main relative m-auto max-w-full
        before:content-[''] before:absolute before:left-0 before:-top-[48px] before:w-full before:h-full before:bg-[url('/images/circle.png')] before:bg-no-repeat before:z-[1]
        after:content-[''] after:absolute after:right-0 after:-bottom-[240px] after:w-full after:h-full after:bg-[url('/images/circle.png')] after:bg-no-repeat after:bg-right after:z-[1]"
          >
            <Image
              alt="alt"
              src="/images/img-gpt.png"
              className="m-auto z-2 relative max-w-full h-auto"
              height={551}
              width={792}
            />

            {/* Buttons - Responsive positioning */}
            <div className="absolute top-[14px] left-[25%] sm:left-[30%] md:left-[30%] z-[9]">
              <button className="bg-white text-black border border-[#05BDFD] rounded-[10px] shadow-[0px_0px_12px_0px_#05BDFD] py-1 px-3 text-[18px] sm:text-[20px] md:text-[27px]">
                Chat GPT
              </button>
            </div>

            <div className="absolute bottom-[21%] left-[8%] sm:left-[12%] z-[3]">
              <button className="bg-[#34C8FB] text-white border border-[#05BDFD] rounded-[10px] shadow-[0px_0px_12px_0px_#05BDFD] py-1 px-4 sm:px-6 text-[18px] sm:text-[20px] md:text-[27px]">
                Gemini
              </button>
            </div>

            <div className="absolute right-[10%] sm:right-[18%] top-[25%] z-[2]">
              <button className="bg-[#262626] text-white border border-[#05BDFD] rounded-[10px] shadow-[0px_0px_12px_0px_#05BDFD] py-1 px-4 sm:px-6 text-[18px] sm:text-[20px] md:text-[27px]">
                Meta
              </button>
            </div>

            <div className="absolute right-[8%] sm:right-[13%] bottom-0 z-[2]">
              <button className="bg-white text-black border border-[#05BDFD] rounded-[10px] shadow-[0px_0px_12px_0px_#05BDFD] py-1 px-4 sm:px-6 text-[18px] sm:text-[20px] md:text-[27px]">
                Reka
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* slider */}
      <div className="py-12 px-4 md:px-20 bg-white container">
        {/* <!-- Testimonials --> */}
        <div className="relative py-20 bg-white block lg:flex  lg:text-left flex-wrap justify-between text-center">
          {/* <!-- Left Text --> */}
          <div className="mb-16 md:mb-0 w-full lg:w-[40%] relative lg:top-[140px]">
            <h2
              className="text-[40px] w-full lg:w-[440px]"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              What our <span className="text-[#34C8FB]">Client Says</span>
              <br />
            </h2>
            <p className="text-base font-normal text-black mt-4 mb-3 lg:mb-0">
              Read the testimonial by our clients
              <br />
              to find out more about our services
            </p>
          </div>

          {/* <!-- Testimonials --> */}
          <div className="w-full lg:w-[60%]">
            {/* <!-- Top Right Card --> */}
            <div className="flex flex-wrap items-center justify-between">
              {/* <!-- Bottom Left Card --> */}
              <div className="w-full lg:w-[387px] bg-[#7C66FD] rounded-lg p-[12px] shadow-md z-0 mb-6 lg:mb-0">
                <div className="flex items-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/20.jpg"
                    className="w-14 h-14 rounded-full border-4 border-white"
                  />
                  <div>
                    <h4 className="text-white font-bold text-xl">John doe</h4>
                    <p className="text-white text-xs">Lorem ipsum</p>
                  </div>
                </div>
                <div className="text-[#E3E3E3] mt-4 p-[8px] rounded-md font-light bg-[#2D2095] leading-relaxed text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean hendrerit scelerisque quam, id imperdiet nunc rhoncus
                  ut. Maecenas vitae finibus odio, non egestas odio. Aliquam et
                  vestibulum
                </div>
              </div>
              <Image
                className="m-auto"
                alt="alt"
                src="/images/frame-qute.png"
                height={28}
                width={28}
              />
            </div>
          </div>
          <div className="w-full lg:w-[387px] bg-[#7C66FD] rounded-lg p-[12px] shadow-md z-0 absolute lg:-bottom-[42%] right-0 lg:absolute-mob mt-3 lg:mt-0">
            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/20.jpg"
                className="w-14 h-14 rounded-full border-4 border-white"
              />
              <div>
                <h4 className="text-white font-bold text-xl">John doe</h4>
                <p className="text-white text-xs">Lorem ipsum</p>
              </div>
            </div>
            <div className="text-[#E3E3E3] mt-4 p-[8px] rounded-md font-light bg-[#2D2095] leading-relaxed text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              hendrerit scelerisque quam, id imperdiet nunc rhoncus ut. Maecenas
              vitae finibus odio, non egestas odio. Aliquam et vestibulum
            </div>
          </div>
        </div>
        {/* <!-- Navigation Arrows --> */}
        <div className="flex justify-center mt-40 gap-4">
          <button className="w-6 h-6 bg-gray-400 rounded-full text-white flex items-center justify-center text-xs">
            &lt;
          </button>
          <button className="w-6 h-6 bg-[#7C66FD] rounded-full text-white flex items-center justify-center text-xs">
            &gt;
          </button>
        </div>
      </div>

      {/* price sec */}
      <section id="pricing">
        <div className="tab-sec mt-[100px]">
          <div className="container">
            {/* Toggle Switch */}
            <div className="flex  sm:flex-row items-center justify-center bg-white gap-4 sm:gap-2">
              <span className="font-medium text-indigo-900">Monthly</span>

              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-blue-500 peer-focus:outline-none rounded-full peer peer-checked:bg-gray-300 transition duration-300"></div>
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
              </label>

              <span className="font-medium text-gray-700">Annually</span>
            </div>

            {/* Plan Buttons */}
            <div className="my-[50px]">
              <div className="flex flex-wrap gap-3 justify-center">
                <button className="bg-[#2D2095] text-white px-6 py-2 rounded-[22px] text-lg font-semibold">
                  Chat Bot
                </button>
                <button className="border border-[#2D2095] text-black text-lg font-semibold px-6 py-2 rounded-[22px]">
                  Voice agent
                </button>
                <button className="border border-[#2D2095] text-black text-lg font-semibold px-6 py-2 rounded-[22px]">
                  Chat LLM
                </button>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6">
              {/* CARD */}
              {[...Array(3)].map((_, i) => {
                const data = [
                  {
                    title: "Basic",
                    for: "individuals",
                    price: "$99",
                    image: "/images/price1.png",
                    features: [
                      "All analytics features",
                      "Up to 250,000 tracked visits",
                      "Normal support",
                      "Up to 3 team members",
                    ],
                  },
                  {
                    title: "Pro",
                    for: "startups",
                    price: "$199",
                    image: "/images/price-2.png",
                    features: [
                      "All analytics features",
                      "Up to 1,000,000 tracked visits",
                      "Premium support",
                      "Up to 10 team members",
                    ],
                  },
                  {
                    title: "Enterprise",
                    for: "big companies",
                    price: "$399",
                    image: "/images/price-3.png",
                    features: [
                      "All analytics features",
                      "Up to 5,000,000 tracked visits",
                      "Dedicated support",
                      "Up to 50 team members",
                    ],
                  },
                ][i];

                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl shadow-md p-8 w-full lg:w-1/3 hover:bg-[#2D2095] hover:text-white group transition-all duration-300"
                  >
                    <div className="flex gap-3 mb-4">
                      <img src={data.image} alt="" />
                      <div>
                        <h3 className="text-sm font-medium text-[#6F6C90] group-hover:text-white">
                          For {data.for}
                        </h3>
                        <h2 className="text-xl font-bold text-[#170F49] group-hover:text-white">
                          {data.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-[#6F6C90] text-sm mb-4 group-hover:text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    <p className="text-4xl font-bold text-[#170F49] group-hover:text-white mb-4">
                      {data.price}{" "}
                      <span className="text-lg font-medium text-[#6F6C90] group-hover:text-white">
                        /monthly
                      </span>
                    </p>

                    <h4 className="mt-6 mb-2 font-bold text-[#170F49] text-base group-hover:text-white">
                      What’s included
                    </h4>

                    <ul className="text-sm text-gray-600 space-y-2 mb-6 group-hover:text-white">
                      {data.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-blue-500 mr-2">
                            <img src="/images/Check Circle.png" alt="check" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className="bg-blue-500 text-white py-2 px-6 rounded-full font-medium hover:bg-blue-600 transition">
                      Get started
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      <section id="faq">
        <div className="bg-white px-6  my-[27px]">
          <div className="container mx-auto">
            <div className=" flex flex-col md:flex-row items-center justify-center gap-10">
              {/* Left side - Robot Image */}
              <div className="w-full max-md:w-auto lg:w-1/2 flex justify-center">
                <img
                  src="/images/faq.png"
                  alt="FAQ Robot"
                  className="max-w-full"
                />
              </div>

              {/* Right side - Static FAQ */}
              <div className="w-full md:w-1/2 bg-gradient-to-b from-[#2D2095] to-[#2D2095] text-white rounded-2xl p-6 md:p-10 space-y-6">
                <h2 className="font-bold text-[32px] md:text-[40px] ">
                  Do you have questions?
                </h2>

                {/* Static FAQ Items */}
                <div className="border-b border-white/30 pb-4">
                  <p className="text-xl font-semibold">
                    What is this platform?
                  </p>
                  <p className="text-sm text-[#FAFAFA] mt-2">
                    This platform is designed to help you manage FAQs
                    efficiently with a beautiful UI.
                  </p>
                </div>

                <div className="border-b border-white/30 pb-4">
                  <p className="text-xl font-semibold">How do I get started?</p>
                  <p className="text-sm text-[#FAFAFA] mt-2">
                    Simply sign up and follow the onboarding steps to create
                    your first FAQ section.
                  </p>
                </div>

                <div className="border-b border-white/30 pb-4">
                  <p className="text-xl font-semibold">
                    Is it mobile friendly?
                  </p>
                  <p className="text-sm text-[#FAFAFA] mt-2">
                    Yes, this design is fully responsive and optimized for all
                    devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <ChatbotFooter />
    </div>
  );
};

export default LlmProduct;
