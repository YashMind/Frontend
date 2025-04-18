"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
interface ChatbotDashboardProps {
  showModal: () => void;
}
const ChatbotDashboard = ({showModal}:ChatbotDashboardProps) => {
  return (
    <div className="flex gap-6">
      <div className="bg-[#2a2561]  py-4 rounded-[58px] w-[90%] px-10">
        <h2 className="text-2xl font-bold mb-4">Owner</h2>
        <div className="flex flex-wrap gap-4 w-[786px] bg-[#FFFFFF80] px-4  py-[37px] rounded-[28px] ">
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 w-full sm:w-[48%] "
            >
              <div className="flex justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Image
                    alt="alt"
                    src="/images/bot2.png"
                    height={46}
                    width={46}
                  />
                </div>
                <span className="font-semibold text-base text-black">
                  12/12/25
                </span>
              </div>
              <div className="flex justify-between items-center mb-[26px] mt-[10px]">
                <h2 className="text-black font-semibold text-lg ">Jhon Doe</h2>
                <span className="w-3 h-3 bg-green-400 rounded-full" />
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href="/chatbot-dashboard/overview"
                  className="text-[#23c4f2] text-sm underline"
                >
                  Allocated message
                </Link>
                <Image
                  alt="alt"
                  src="/images/password.png"
                  height={21}
                  width={16}
                />
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-[36px] mb-4">My Bot List</h2>
        <div className="flex gap-4 w-full">
          {/* first div */}
          <div className="flex flex-wrap gap-4 w-[786px] bg-[#FFFFFF80] px-4  py-[37px] rounded-[28px]">
            <div className="bg-[#fff] p-4 rounded-2xl flex-1 min-w-[300px]">
              <div className="flex items-center justify-between">
                <p className="mb-2 text-black font-semibold text-lg">
                  Messages consumed
                </p>
                <p className="text-right font-semibold mt-1 text-[#501794] text-lg">
                  0/50
                </p>
              </div>
              <div className="w-full bg-gray-600 h-2 rounded-full">
                <div className="text-[#501794] h-2 rounded-full w-0" />
              </div>
            </div>
            <div className="bg-[#fff] p-4 rounded-2xl flex-1 min-w-[300px] ">
              <div className="flex items-center justify-between">
                <p className="mb-2 text-black font-semibold text-lg">
                  Messages allocated
                </p>
                <p className="text-right font-semibold mt-1 text-[#501794] text-lg">
                  0/50
                </p>
              </div>
              <div className="w-full bg-gray-600 h-2 rounded-full">
                <div className="text-[#501794]  h-2 rounded-full w-0" />
              </div>
            </div>
          </div>
          {/* second div */}
          <div className="flex items-center justify-center border border-dashed border-gray-400 rounded-2xl flex-1  min-w-[400px] cursor-pointer"
          onClick={()=> showModal()}>
            <span className="font-semibold text-lg text-white text-center">
              Create New Bot <br></br> +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotDashboard;
