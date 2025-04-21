"use client"
import React from "react";
import Image from "next/image";
import AddBotData from "../ChatbotMain/AddData/addData";
const ChatbotOverview = ({botPage, botId}:{botPage?: string, botId?: number}) => {
  console.log("botPage11111111111111111111 ", botPage);
  console.log("botId botId ", botId);
  return (
    <div className="w-full">
      {botPage==="overview" ? <h2 className="text-2xl font-bold my-4">Owner</h2> : null }
      {botPage==="overview" ? 
      <div className="flex gap-10">
        <div className="">
          <div className="flex flex-wrap gap-4 w-[650px] bg-[#FFFFFF80] px-4  py-[37px] rounded-[28px] ">
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
          <div className="flex flex-wrap gap-4 w-[650px] bg-[#FFFFFF80] px-4  py-[37px] rounded-[28px] mt-[22px] ">
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
                    <span className="text-[#6B6B6B]">Messages:</span>
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* right chatbot */}
       <div className="w-[320] bg-white  h-[500px] rounded-lg shadow-md flex flex-col justify-between ">
          <div className="p-4 flex items-center gap-2 border-b">
            <img
              src="/images/face2.webp"
              alt="Bot"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-semibold text-black">Akhil</span>
          </div>
          <div className="flex-1 p-4 overflow-y-auto text-black">
            <div className="flex items-start gap-2 mb-2">
              <img src="/images/face2.webp" className="w-6 h-6 rounded-full" />
              <p className="bg-gray-200 text-sm p-2 rounded-md max-w-xs">
                Hi, How can I help you today?
              </p>
            </div>
          </div>
          <div className="border-t p-2 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full p-2 text-sm rounded-md border text-black border-gray-300 focus:outline-none"
            />
            <button className="bg-[#05BDFD] p-2 rounded text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M2.01 21L23 12 2.01 3v7l15 2-15 2z" />
              </svg>
            </button>
          </div>
          <div className="text-[#6B6B6B] text-center text-sm py-5">
            <h6>powered by fasterbots</h6>
          </div>
        </div>
      </div> : null }
      {!botPage && botId ? <AddBotData botId={botId} /> : null}
    </div>
  );
};

export default ChatbotOverview;
