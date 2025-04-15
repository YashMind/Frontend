import ChatbotHeader from "@/components/chatbot/header/chatbotHeader";
import React from "react";
import Image from "next/image";           
import RealTimeCount from "@/components/ChatbotDashboard/RealTimeCount/realTimeCount";
import ChatbotSidebar from "@/components/ChatbotDashboard/ChatbotSidebar/chatbotSidebar";

const ChatbotAI = () => {
  return (
    <div className=" bg-gradient-to-r from-[#002B58] to-[#3B0459] ">
      {/* header */}
      <ChatbotHeader noFix={true} addBgColor={true} />
      <div className="min-h-screen bg-gradient-to-br from-[#1a1440] to-[#2a0e61] text-white p-4">
        {/* Real Time Count + Table */}
        <RealTimeCount />
        {/* Owner Section */}
        <div className="flex gap-3 justify-between">
          <div className="bg-[#2a2561]   rounded-[58px] w-full pr-3 flex gap-[35px]">
          <ChatbotSidebar />            
            <div className="w-full">
              <h2 className="text-2xl font-bold my-4">AI</h2>
              <div className="min-h-screen ">
                {/* AI Creativity Section */}
                <div className="bg-white rounded-xl p-6 mb-6">
                  <h2 className="text-lg font-bold text-black mb-1">
                    AI Creativity
                  </h2>
                  <p className="text-sm text-gray-700 mb-4">
                    Change the slider to increase or reduce creativity of the
                    bot <br />
                    (also known as ‘temperature’ parameter)
                  </p>
                  {/* Progress bar */}
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-[#00ADEF] w-[25%] rounded-full"></div>
                  </div>
                </div>

                {/* AI Instruction Prompt Section */}
                <div className="bg-white rounded-xl p-6">
                  <h2 className="text-lg font-bold text-black mb-1">
                    AI Instruction Prompt
                  </h2>
                  <p className="text-sm text-gray-700 mb-4">
                    Give instructions here to tune the behaviour of the bot. You
                    can simply explain how you want the bot to behave. <br />
                    This will be used as part of the prompt to the AI model.
                  </p>

                  {/* Dropdown + Buttons */}
                  <div className="flex items-center justify-between mb-4">
                    <select className="bg-[#797879] text-sm font-bold px-4 py-2 rounded-md border-transparent outline-0">
                      <option>General Customer Service</option>
                      <option>Technical Support</option>
                      <option>Sales Assistant</option>
                    </select>
                    <div className="flex gap-2">
                      <button className="bg-[#4B4351] text-white text-sm px-4 py-2 rounded-md">
                        Delete
                      </button>
                      <button className="bg-[#340555] text-white text-sm px-4 py-2 rounded-md ">
                        Add Prompt
                      </button>
                    </div>
                  </div>

                  {/* Prompt Box */}
                  <div className="bg-[#DADADA] rounded-xl p-4 max-h-52 overflow-y-auto mb-4">
                    <h3 className="font-bold text-sm mb-2 text-black">
                      Chatbot Role and Function
                    </h3>
                    <p className="text-sm text-[#727272]">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum."Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. "Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.""Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum."
                      {/* You can add full content here or dynamically pass it */}
                      ”
                    </p>
                  </div>

                  {/* Reset Button */}
                  <div className="flex justify-end">
                    <button className="bg-[#625A67] px-4 py-1 rounded-md text-sm">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100px] bg-[#2a2561]  rounded-[58px]">
            <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center m-auto mb-5">
              <Image
                className="m-auto mb-4"
                alt="alt"
                src="/images/face1.png"
                height={68}
                width={58}
              />
            </div>
            <Image
              className="m-auto"
              alt="alt"
              src="/images/face2.png"
              height={68}
              width={58}
            />
            <hr className="bg-[linear-gradient(90deg,#501794_49.49%,#3E70A1_50.51%)] p-[1px] rounded-md my-6"></hr>
            <Image
              className="m-auto"
              alt="alt"
              src="/images/plus.png"
              height={24}
              width={24}
            />
          </div>

          {/* My Bot List */}

          {/* Right Sidebar */}
        </div>
      </div>
    </div>
  );
};

export default ChatbotAI;
