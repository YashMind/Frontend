import ChatbotHeader from "@/components/chatbot/header/chatbotHeader";
import React from "react";
import Image from "next/image";
import RealTimeCount from "@/components/ChatbotDashboard/RealTimeCount/realTimeCount";
import ChatbotSidebar from "@/components/ChatbotDashboard/ChatbotSidebar/chatbotSidebar";

const ChatbotQANew = () => {
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
              <h2 className="text-2xl font-bold mt-[30]">Links / Docs</h2>
              <div className="bg-[#2E265C] ">
                {/* Header */}
                <div className="bg-[#FFFFFF80] rounded-t-xl flex items-center justify-between px-5 py-2">
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-3xl  font-bold text-[#2E265C]">
                      +
                    </button>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-2 flex items-center text-gray-500">
                        <Image
                          className="m-auto"
                          alt="alt"
                          src="/images/search.png"
                          height={14}
                          width={14}
                        />
                      </span>
                      <input
                        type="text"
                        placeholder="Search..."
                        className="pl-8 pr-3 py-1 rounded-md outline-none text-sm w-64 border border-white"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-[#340555] text-white text-sm px-3 py-1 font-bold rounded-md">
                      Export All
                    </button>
                    <button className="bg-[#4B4351] text-white text-sm px-3 py-1 font-bold rounded-md">
                      Delete
                    </button>
                    <button className="bg-[#18B91F]  text-white text-sm px-3 py-1 font-bold rounded-md">
                      Save
                    </button>
                  </div>
                </div>

                {/* Question Box */}
                <div className="bg-white rounded-b-xl p-5 ">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-bold text-black">Question</h2>
                    <button className="bg-[#FF0004] text-white px-3 py-1 text-sm rounded-md font-bold">
                      Delete
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <textarea
                      placeholder="Enter Question............"
                      className="w-full bg-[#D9D9D9] p-2 rounded-md resize-none text-[#727272] placeholder-[#727272] text-sm font-bold"
                      rows={2}
                    />
                    <textarea
                      placeholder="Enter Answer............"
                      className="w-full bg-[#D9D9D9] p-2 rounded-md resize-none text-[#727272] placeholder-[#727272] text-sm font-bold"
                      rows={3}
                    />
                  </div>
                  <hr className="my-[29] border-bottom border-black"></hr>
                  <div className="flex justify-between items-center mb-2  ">
                    <h2 className="text-xl font-bold text-black">Question</h2>
                    <button className="bg-[#FF0004] text-white px-3 py-1 text-sm rounded-md font-bold">
                      Delete
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <textarea
                      placeholder="Enter Question............"
                      className="w-full bg-[#D9D9D9] p-2 rounded-md resize-none text-[#727272] placeholder-[#727272] text-sm font-bold"
                      rows={2}
                    />
                    <textarea
                      placeholder="Enter Answer............"
                      className="w-full bg-[#D9D9D9] p-2 rounded-md resize-none text-[#727272] placeholder-[#727272] text-sm font-bold"
                      rows={3}
                    />
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

export default ChatbotQANew;
