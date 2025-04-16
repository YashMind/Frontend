import ChatbotHeader from "@/components/chatbot/header/chatbotHeader";
import React from "react";
import Image from "next/image";
import RealTimeCount from "@/components/ChatbotDashboard/RealTimeCount/realTimeCount";
import ChatbotSidebar from "@/components/ChatbotDashboard/ChatbotSidebar/chatbotSidebar";

const ChatbotSettings = () => {
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
              <h2 className="text-2xl font-bold my-[24] ">Settings</h2>

              <div className="bg-[#312d63] min-h-screen p-4 w-[675px] rounded-[38px] mb-5">
                <div className="w-full  py-[50] ">
                  {/* Basic Section */}
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                    <div className="bg-black text-white px-4 py-2 font-bold text-[22px]">
                      Basic
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="flex items-center justify-between text-sm font-light text-black">
                        <label>Enter the name of your bot</label>
                        <div className="flex items-center gap-1 text-xs">
                          <span className="font-bold">Public</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-9 h-5 bg-gray-300 rounded-full peer peer-checked:bg-black transition duration-300"></div>
                            <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-full transition duration-300"></div>
                          </label>
                        </div>
                      </div>
                      <input
                        type="text"
                        placeholder="Jhon Doe"
                        className=" px-4 py-2 rounded-full bg-[#D9D9D9] text-sm focus:outline-none text-[#727272] placeholder-[#727272]"
                      />
                      <div>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-1.5 text-sm font-bold rounded-[10px]">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Security Section */}
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                    <div className="bg-black  text-white px-4 py-2 font-bold text-[22px]">
                      Security
                    </div>
                    <div className="p-4 space-y-4 font-light text-gray-700 text-base">
                      <div className="flex justify-between items-center">
                        <span>
                          Allow these domains only to add the chatbot to their
                          website
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            defaultChecked
                          />
                          <div className="w-9 h-5 bg-black rounded-full peer peer-checked:bg-black transition duration-300"></div>
                          <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-full transition duration-300"></div>
                        </label>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Enable rate limiting</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-9 h-5 bg-gray-300 rounded-full peer peer-checked:bg-black transition duration-300"></div>
                          <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-full transition duration-300"></div>
                        </label>
                      </div>
                      <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-1.5 text-sm font-bold rounded-[10px]">
                        Save
                      </button>
                    </div>
                  </div>

                  {/* Delete Account Section */}
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                    <div className="bg-black text-white px-4 py-2 font-bold text-[22px]">
                      Delete Account
                    </div>
                    <div className="p-4 space-y-4 text-base text-black  font-light">
                      <p>
                        Deleting a bot is a permanent action that cannot be
                        reversed. Deleting the bot will delete all documents
                        indexed against it and all history.
                      </p>
                      <input
                        type="text"
                        placeholder="Jhon Doe"
                        className="px-4 py-2 rounded-full bg-[#D9D9D9] text-sm focus:outline-none text-[#727272] placeholder-[#727272]"
                      />
                      <div>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-1.5 text-sm font-bold rounded-[10px]">
                          Save
                        </button>
                      </div>
                    </div>
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

export default ChatbotSettings;
