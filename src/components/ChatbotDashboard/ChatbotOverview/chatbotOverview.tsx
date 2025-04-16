import React from "react";
import Image from "next/image";
const ChatbotOverview = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold my-4">Owner</h2>
      <div className="flex flex-wrap gap-4 w-[786px] bg-[#FFFFFF80] px-4  py-[37px] rounded-[28px] ">
        {[1, 2].map((_, i) => (
          <div key={i} className="bg-white rounded-2xl p-4 w-full sm:w-[48%] ">
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
          <div key={i} className="bg-white rounded-2xl p-4 w-full sm:w-[48%] ">
            <div className="flex justify-between mb-2">
              <div className="flex items-center space-x-2 justify-between w-full">
                <p className="font-semibold text-base  text-[#000]">Message</p>
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
  );
};

export default ChatbotOverview;
