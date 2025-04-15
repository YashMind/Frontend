"use client";
import React from "react";
import Image from "next/image";
import ChatbotHeader from "@/components/chatbot/header/chatbotHeader";
const ChatbotDashboard = () => {
  return (
    <div className=" bg-gradient-to-r from-[#002B58] to-[#3B0459] ">
      {/* header */}
      <ChatbotHeader />
      <div className="min-h-screen bg-gradient-to-br from-[#1a1440] to-[#2a0e61] text-white p-4 pt-24">
        {/* Top Navbar */}

        {/* Real Time Count + Table */}
        <div className="bg-[#2a2561]  p-4 m-9 rounded-[300px]">
          <div className="flex items-center justify-between mb-2 gap-5">
            <h2 className="font-semibold text-lg">Real Time Count:</h2>
            <div className="overflow-x-auto w-full">
              <table className="w-full text-sm text-white text-center border border-gray-500">
                <thead className="bg-[#2a2463]">
                  <tr>
                    <th className="p-2 border border-white text-sm font-extrabold">
                      Tools
                    </th>
                    <th className="p-2 border border-white text-sm font-extrabold">
                      Chat Bot
                    </th>
                    <th className="p-2 border border-white text-sm font-extrabold">
                      Voice Agent
                    </th>
                    <th className="p-2 border border-white text-sm font-extrabold">
                      LLM
                    </th>
                    <th
                      className="p-2 border border-white text-sm font-extrabold"
                      colSpan={3}
                    >
                      Main Balance : 500$
                    </th>
                  </tr>
                  <tr className="bg-[#2a2463]">
                    <th className="p-2 border border-white text-sm font-extrabold">
                      Consumed
                    </th>
                    <td className="p-2 border border-white font-semibold text-sm">
                      200
                    </td>
                    <td className="p-2 border border-white font-semibold text-sm">
                      100
                    </td>
                    <td className="p-2 border border-white font-semibold text-sm">
                      5000
                    </td>
                    <td className="p-2 border border-white font-semibold text-sm">
                      Total
                    </td>
                    <td className="p-2 border border-white font-semibold text-sm">
                      Main Bal.
                    </td>
                    <td className="p-2 border border-white font-semibold text-sm">
                      Add Credit
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border border-white text-sm font-extrabold">
                      Used Credit
                    </td>
                    <td className="p-2 border border-white font-semibold text-sm">
                      2
                    </td>
                    <td className="p-2 border border-white font-semibold text-sm">
                      5
                    </td>
                    <td className="p-2 border border-white font-semibold text-sm">
                      5
                    </td>
                    <td className="p-2 border border-white font-semibold text-sm">
                      6
                    </td>
                    <td className="p-2 border border-white font-semibold text-sm">
                      500
                    </td>
                    <td className="p-2 border border-white font-semibold text-sm">
                      100
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="font-semibold text-lg">
              Total Credit consumed: <span className="font-semibold">22</span>
            </p>
          </div>
        </div>

        {/* Owner Section */}
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
                    <h2 className="text-black font-semibold text-lg ">
                      Jhon Doe
                    </h2>
                    <span className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                  <div className="flex justify-between items-center">
                    <a href="#" className="text-[#23c4f2] text-sm underline">
                      Allocated message
                    </a>
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
            <div className="flex flex-wrap gap-4 ">
              <div className="flex flex-wrap gap-4 w-[786px] bg-[#FFFFFF80] px-4  py-[37px] rounded-[28px]">
                <div className="bg-[#fff] p-4 rounded-2xl flex-1 min-w-[200px]">
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
                <div className="bg-[#fff] p-4 rounded-2xl flex-1 min-w-[200px] ">
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
              <div className="flex items-center justify-center border border-dashed border-gray-400 rounded-2xl flex-1 cursor-pointer">
                <span className="font-semibold text-lg text-white text-center">
                  Create New Bot <br></br> +
                </span>
              </div>
            </div>
          </div>
          <div className="w-[10%] bg-[#2a2561]  rounded-[58px]">
            <Image
              className="m-auto mb-4"
              alt="alt"
              src="/images/face1.png"
              height={68}
              width={58}
            />
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

export default ChatbotDashboard;
