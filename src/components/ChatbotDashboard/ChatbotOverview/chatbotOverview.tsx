import ChatbotHeader from "@/components/chatbot/header/chatbotHeader";
import React from "react";
import Image from "next/image";

const ChatbotOverview = () => {
  return (
    <div className=" bg-gradient-to-r from-[#002B58] to-[#3B0459] ">
      {/* header */}
      <ChatbotHeader noFix={true} addBgColor={true} />
      <div className="min-h-screen bg-gradient-to-br from-[#1a1440] to-[#2a0e61] text-white p-4">
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
          <div className="bg-[#2a2561]   rounded-[58px] w-[90%]  flex gap-[68px]">
            <div className="w-[220px] h-screen bg-black text-white p-4 flex flex-col gap-6  rounded-tl-[58px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[58px]">
              {/* Section: Overview */}
              <div>
                <p className="text-cyan-400 font-semibold flex items-center gap-2">
                  <i className="fas fa-th-large"></i> Overview
                </p>
              </div>

              {/* Section: Activity */}
              <div className="flex flex-col gap-3">
                <p className="text-gray-400">Activity</p>
                <p className="flex items-center gap-2">
                  <i className="far fa-comment-dots"></i> Chat logs
                </p>
                <p className="flex items-center gap-2">
                  <i className="fas fa-user-friends"></i> Leads
                </p>
              </div>

              {/* Section: Training Data */}
              <div className="flex flex-col gap-3">
                <p className="text-gray-400">Training Data</p>
                <p className="flex items-center gap-2">
                  <i className="far fa-file-alt"></i> Data Input
                </p>
                <p className="flex items-center gap-2">
                  <i className="fas fa-upload"></i> Content Upload
                </p>
                <p className="flex items-center gap-2">
                  <i className="fas fa-pen-square"></i> FAQs
                </p>
              </div>

              {/* Section: Behaviour */}
              <div className="flex flex-col gap-3">
                <p className="text-gray-400">Behaviour</p>
                <p className="flex items-center gap-2">
                  <i className="fas fa-sliders-h"></i> Response Tuning
                </p>
              </div>

              {/* Section: Deployment */}
              <div className="flex flex-col gap-3">
                <p className="text-gray-400">Deployment</p>
                <p className="flex items-center gap-2">
                  <i className="fas fa-eye"></i> Visual Setting
                </p>
                <p className="flex items-center gap-2">
                  <i className="fas fa-cogs"></i> Launch Setting
                </p>
              </div>

              {/* Section: Advance */}
              <div className="flex flex-col gap-3">
                <p className="text-gray-400">Advance</p>
                <p className="flex items-center gap-2">
                  <i className="fas fa-plug"></i> Connect Apps
                </p>
                <p className="flex items-center gap-2">
                  <i className="fas fa-cog"></i> Settings Preferences
                </p>
              </div>
            </div>
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

          {/* My Bot List */}

          {/* Right Sidebar */}
        </div>
      </div>
    </div>
  );
};

export default ChatbotOverview;
