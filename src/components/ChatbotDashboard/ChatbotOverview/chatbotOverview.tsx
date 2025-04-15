import React from "react";
import ChatbotHeader from "@/components/chatbot/header/chatbotHeader";
import Image from "next/image";
import ChatbotSidebar from "@/components/ChatbotDashboard/ChatbotSidebar/chatbotSidebar";
import RealTimeCount from "@/components/ChatbotDashboard/RealTimeCount/realTimeCount";

const ChatbotOverview = () => {
  return (
    <div className=" bg-gradient-to-r from-[#002B58] to-[#3B0459] ">
      {/* header */}
      <ChatbotHeader noFix={true} addBgColor={true} />
      <div className="min-h-screen bg-gradient-to-br from-[#1a1440] to-[#2a0e61] text-white p-4">
        {/* Real Time Count + Table */}
        <RealTimeCount />

        {/* Owner Section */}
        <div className="flex gap-6">
          <div className="bg-[#2a2561]   rounded-[58px] w-[90%]  flex gap-[68px]">
            <ChatbotSidebar />
            <div>
              <h2 className="text-2xl font-bold mb-4">Owner</h2>
              <div className="flex flex-wrap gap-4 w-[786px] bg-[#FFFFFF80] px-4  py-[37px] rounded-[28px] ">
                {[1, 2].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-4 w-full sm:w-[48%] "
                  >
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center space-x-2 justify-between w-full">
                        <p className="font-semibold text-base  text-[#000]">
                          Today’s user and time
                        </p>
                        <div>
                          <Image
                            alt="alt"
                            src="/images/Stop-watch.png"
                            height={46}
                            width={46}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex  items-center mb-[10px] mt-[10px] gap-10">
                      <h2 className="text-black font-semibold text-lg ">
                        <span className="text-[#6B6B6B]">Users:</span> 0
                      </h2>
                      <h2 className="text-black font-semibold text-lg ">
                        <span className="text-[#6B6B6B]">Messages:</span> 0
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 w-[786px] bg-[#FFFFFF80] px-4  py-[37px] rounded-[28px] mt-[22px] ">
                {[1, 2].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-4 w-full sm:w-[48%] "
                  >
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center space-x-2 justify-between w-full">
                        <p className="font-semibold text-base  text-[#000]">
                          Message
                        </p>
                        <div>
                          <Image
                            alt="alt"
                            src="/images/Stop-watch.png"
                            height={46}
                            width={46}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex  items-center mb-[10px] mt-[10px] gap-10">
                      <h2 className="text-black font-semibold text-lg ">
                        <span className="text-[#6B6B6B]">Users:</span> 0
                      </h2>
                      <h2 className="text-black font-semibold text-lg ">
                        <span className="text-[#6B6B6B]">Messages:</span> 0
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[10%] bg-[#2a2561]  rounded-[58px]">
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
        </div>
      </div>
    </div>
  );
};

export default ChatbotOverview;
