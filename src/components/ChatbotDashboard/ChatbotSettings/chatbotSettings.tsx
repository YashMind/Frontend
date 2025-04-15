import ChatbotHeader from "@/components/chatbot/header/chatbotHeader";
import React from "react";
import Image from "next/image";

const ChatbotSettings = () => {
  return (
    <div className=" bg-gradient-to-r from-[#002B58] to-[#3B0459] ">
      {/* header */}
      <ChatbotHeader noFix={true} addBgColor={true} />
      <div className="min-h-screen bg-gradient-to-br from-[#1a1440] to-[#2a0e61] text-white p-4">
        {/* Real Time Count + Table */}
        <div className="bg-[#2a2561]  p-4 mb-[20px] mt-[125px] rounded-[300px]">
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
                      className="p-2 border border-white text-sm font-extrabold "
                      colSpan={3}
                    >
                      <div className="flex justify-between items-center ">
                        <div>
                          {" "}
                          <p>
                            {" "}
                            Main Balance :{" "}
                            <span className="text-[#18B91F] ml-6">
                              {" "}
                              500$
                            </span>{" "}
                          </p>
                        </div>
                        <div>
                          <Image
                            className=""
                            alt="alt"
                            src="/images/refresh.png"
                            height={12}
                            width={12}
                          />
                        </div>
                      </div>
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
        <div className="flex gap-3 justify-between">
          <div className="bg-[#2a2561]   rounded-[58px] w-full pr-3 flex gap-[35px]">
            <div className="w-[220px]  bg-black text-white p-4 flex flex-col gap-6  rounded-tl-[58px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[58px]">
              {/* Section: Overview */}
              <div>
                <p className="text-white text-sm flex items-center gap-2 font-light">
                  <Image
                    className="m-auto mb-4"
                    alt="alt"
                    src="/images/dashboard.png"
                    height={20}
                    width={20}
                  />{" "}
                  Overview
                </p>
              </div>

              {/* Section: Activity */}
              <div className="flex flex-col gap-3">
                <p className="text-[#898989] font-normal text-sm">Activity</p>
                <p className="flex  gap-2 text-[#01BEED] text-xs font-light items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  Chat logs
                </p>
                <p className="flex items-center gap-2 text-white text-xs font-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  Leads
                </p>
              </div>

              {/* Section: Training Data */}
              <div className="flex flex-col gap-3">
                <p className="text-[#898989] font-normal text-sm">
                  Training Data
                </p>
                <p className="flex items-center gap-2 text-white text-xs font-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  Data Input
                </p>
                <p className="flex items-center gap-2 text-white text-xs font-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>{" "}
                  Content Upload
                </p>
                <p className="flex items-center gap-2 text-white text-xs font-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>{" "}
                  FAQs
                </p>
              </div>

              {/* Section: Behaviour */}
              <div className="flex flex-col gap-3">
                <p className=" text-[#898989] font-normal text-sm">Behaviour</p>
                <p className="flex items-center gap-2 text-white text-xs font-light">
                  <i className="fas fa-sliders-h"></i> Response Tuning
                </p>
              </div>

              {/* Section: Deployment */}
              <div className="flex flex-col gap-3">
                <p className="text-[#898989] font-normal text-sm">Deployment</p>
                <p className="flex items-center gap-2 text-white text-xs font-light">
                  <i className="fas fa-eye"></i> Visual Setting
                </p>
                <p className="flex items-center gap-2 text-white text-xs font-light">
                  <i className="fas fa-cogs"></i> Launch Setting
                </p>
              </div>

              {/* Section: Advance */}
              <div className="flex flex-col gap-3">
                <p className="text-[#898989] font-normal text-sm">Advance</p>
                <p className="flex items-center gap-2 text-white text-xs font-light">
                  <i className="fas fa-plug"></i> Connect Apps
                </p>
                <p className="flex items-center gap-2 text-white text-xs font-light">
                  <i className="fas fa-cog"></i> Settings Preferences
                </p>
              </div>
            </div>
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
