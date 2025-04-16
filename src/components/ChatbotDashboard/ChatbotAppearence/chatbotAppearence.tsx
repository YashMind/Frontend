import ChatbotHeader from "@/components/chatbot/header/chatbotHeader";
import React from "react";
import Image from "next/image";
import RealTimeCount from "@/components/ChatbotDashboard/RealTimeCount/realTimeCount";
import ChatbotSidebar from "@/components/ChatbotDashboard/ChatbotSidebar/chatbotSidebar";

const ChatbotAppearence = () => {
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
              <h2 className="text-2xl font-bold mt-[30]">Appearence</h2>
              <p className="text-sm font-light my-[22px]">
                You can customise the look and feel of your chatbot interface
                here.
              </p>
              <div className=" bg-[#9e99b6] p-[36] rounded-[20px]">
                <div className="bg-white rounded-2xl shadow-md p-6 w-full ">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h2 className=" font-medium text-gray-900 text-base">
                        Title
                      </h2>
                      <p className="text-sm  text-[#727272]">
                        To be shown in the shared website
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-12 h-6 bg-[#9592AD] rounded-full peer-checked:bg-[#9592AD] transition-colors duration-300"></div>
                      <div className="absolute left-1 top-1 bg-black w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
                    </label>
                  </div>

                  <input
                    type="text"
                    placeholder="Enter title"
                    className="w-full p-3 rounded-full bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
                  />

                  <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-4 py-2 rounded-xl">
                    Save
                  </button>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6 w-full mt-5 ">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h2 className=" font-medium text-gray-900 text-base">
                        Title
                      </h2>
                      <p className="text-sm  text-[#727272]">
                        To be shown in the shared website
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-12 h-6 bg-[#9592AD] rounded-full peer-checked:bg-[#9592AD] transition-colors duration-300"></div>
                      <div className="absolute left-1 top-1 bg-black w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
                    </label>
                  </div>

                  <input
                    type="text"
                    placeholder="Enter title"
                    className="w-full p-3 rounded-full bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
                  />

                  <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-4 py-2 rounded-xl">
                    Save
                  </button>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6 w-full mt-5 ">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h2 className=" font-medium text-gray-900 text-base">
                        Title
                      </h2>
                      <p className="text-sm  text-[#727272]">
                        To be shown in the shared website
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-12 h-6 bg-[#9592AD] rounded-full peer-checked:bg-[#9592AD] transition-colors duration-300"></div>
                      <div className="absolute left-1 top-1 bg-black w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
                    </label>
                  </div>

                  <input
                    type="text"
                    placeholder="Enter title"
                    className="w-full p-3 rounded-full bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
                  />

                  <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-4 py-2 rounded-xl">
                    Save
                  </button>
                </div>

                <div className="mt-[23] flex gap-3">
                  <button className="bg-[#340555] text-white px-4 py-2 text-base  font-semibold rounded-[10px]">
                    Reset Appearence
                  </button>
                  <button className="bg-[#01BEED] text-white px-4 py-2 text-base  font-semibold rounded-[10px]">
                    Save Changes
                  </button>
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

export default ChatbotAppearence;
