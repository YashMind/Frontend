import React from "react";
import ChatbotHeader from "@/components/chatbot/header/chatbotHeader";
import ChatbotFooter from "@/components/chatbot/footer/chatbotFooter";
const VoiceAgent = () => {
  return (
    <div className="bg-gradient-to-b from-[#2B255D] to-[#110FB9]">
      {/* header */}
      <ChatbotHeader fix={false} addBgColor={false} />
      {/* banner sec */}
      <div className="intract-banner   w-full py-[61px] text-center h-screen">
        <div className="container">
          <h1
            className="text-[74px]  text-white"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            Revolution the way you Interact with technology
          </h1>
          <p className="[font-family:'Roboto_Flex',sans-serif] font-bold text-white text-base my-[41px] w-[556px]  m-auto ">
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
      <div className="  text-center">
        <img className="m-auto" src="/images/Voice Companion2.png" />
        <h2
          className="text-[44px]  py-4 text-white w-[768px]  m-auto  mt-[43px]"
          style={{ fontFamily: "'Audiowide', sans-serif" }}
        >
          Why Vocal AI is your Ultimate{" "}
          <span className="text-[#34C8FB]">Voice Companion </span>{" "}
        </h2>
      </div>
      {/* task management */}
      <div className="container">
        <div className="flex gap-[25px] mt-[60px]">
          <div className="w-[60%] bg-[#0C0A30] p-[40px] rounded-[16px]">
            <h3 className="text-white text-2xl font-bold">Task Management</h3>
            <p className="text-[#6F6C90] text-[17px] py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
              pretium libero. Nullam varius, enim placerat molestie viverra,
              arcu elit euismod mauris, non rutrum massa sapien eget ante.
            </p>
            <div className="flex justify-between">
              <img src="/images/both-circle.png" />
              <img src="/images/effective.png" />
            </div>
          </div>
          <div className="w-[40%] bg-[#0C0A30] p-[40px] rounded-[16px]">
            <h3 className="text-white text-2xl font-bold">Instant Response</h3>
            <p className="text-[#6F6C90] text-[17px] py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
              pretium libero. Nullam varius, enim placerat molestie viverra,
              arcu elit euismod mauris, non rutrum massa sapien eget ante.
            </p>
            <img className="m-auto" src="/images/instant.png" />
          </div>
        </div>

        <div className="flex gap-[25px]  mt-[25px]">
          <div className="w-[40%] bg-[#0C0A30] p-[40px] rounded-[16px]">
            <h3 className="text-white text-2xl font-bold">Instant Response</h3>
            <p className="text-[#6F6C90] text-[17px] py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
              pretium libero. Nullam varius, enim placerat molestie viverra,
              arcu elit euismod mauris, non rutrum massa sapien eget ante.
            </p>
            <img className="m-auto" src="/images/instant.png" />
          </div>

          <div className="w-[60%] bg-[#0C0A30] p-[40px] rounded-[16px]">
            <h3 className="text-white text-2xl font-bold">Task Management</h3>
            <p className="text-[#6F6C90] text-[17px] py-3">
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
        <p
          className="text-base font-normal text-white 
w-[556px] m-auto"
        >
          Imagine a world where every device understands you, adapts to you, and
          works with you—effortlessly. That’s the future we’re building.
        </p>

        <div className=" py-20 px-8 relative text-white">
          <div className="max-w-6xl mx-auto flex justify-between items-center relative">
            {/* Left Side */}
            <div className="flex flex-col gap-[100px]">
              {/* Item 1 */}
              <div className="flex items-center gap-4">
                <div className="">
                  <img src="/images/how-works2.png" />
                </div>
                <div>
                  <h3 className=" text-2xl font-semibold ">
                    Speak Your Command
                  </h3>
                  <p className="text-base font-light text-white">
                    Say what you need
                  </p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex items-center gap-4">
                <div className="">
                  <img src="/images/seem.png" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold ">Seam Execution</h3>
                  <p className="text-base font-light text-white">
                    Your task are done instantly
                  </p>
                </div>
              </div>
            </div>

            {/* Center Dashed Line */}
            <div className="absolute t transform -translate-x-1/2 -translate-y-1/2  w-[223px] left-[48%] top-[45%] w-[223px]">
              <img src="/images/how-works.png" />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <div className="">
                <img src="/images/listens.png" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold ">
                  AI listens and understand
                </h3>
                <p className="text-base font-light text-white">
                  Your success succeeded
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <ChatbotFooter />
    </div>
  );
};

export default VoiceAgent;
