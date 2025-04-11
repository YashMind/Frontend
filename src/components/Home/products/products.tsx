import React from "react";

const HomeProducts = () => {
  return (
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

        <div className="   flex   gap-[41px] relative mt-[71px] gap-mob">
          <div className="relative  w-[220px] arrow-circle ">
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
              Transform the way you interact with technology—just speak, and let
              our voice agent handle the rest with precision and intelligence.
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
  );
};

export default HomeProducts;
