import ChatbotHeader from "@/components/chatbot/header/chatbotHeader";
import React from "react";
import Image from "next/image";

const ChatbotDeploy = () => {
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
              <h2 className="text-2xl font-bold my-[30]">Deploy</h2>
              <div className="bg-[#312d63] min-h-screen flex items-center justify-center p-4 rounded-[28px]">
                <div className="w-full max-w-6xl space-y-6">
                  {/* Top Section */}
                  <div className="bg-white rounded-2xl shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    {/* Left */}
                    <div className="space-y-4">
                      <Image
                        className="m-auto mb-4"
                        alt="alt"
                        src="/images/direct-link.png"
                        height={216}
                        width={198}
                      />

                      <div className="text-center md:text-left">
                        <h2 className=" text-black text-2xl font-medium text-center">
                          Direct Link
                        </h2>
                        <p className="font-light text-xs text-black text-center">
                          Share access to your chatbot by using the link below
                          or with the QR code.
                        </p>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          className="w-full bg-[#D9D9D9] text-[#727272] px-4 py-2 rounded-full text-sm placeholder-[#727272]"
                          value="1234kbk@job.com"
                          readOnly
                        />
                        <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
                          <Image
                            className=""
                            alt="alt"
                            src="/images/file.png"
                            height={14}
                            width={16}
                          />
                        </span>
                      </div>
                      <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-6 py-1.5 rounded mt-[15px]">
                        Save
                      </button>
                    </div>

                    {/* Right (QR) */}
                    <div className="flex flex-col items-center justify-center gap-4">
                      <Image
                        className="m-auto mb-4"
                        alt="alt"
                        src="/images/qr.png"
                        height={304}
                        width={304}
                      />
                      <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-6 py-1.5 rounded">
                        Download QR
                      </button>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Display Inside Webpage */}
                    <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
                      <Image
                        className="m-auto mb-4"
                        alt="alt"
                        src="/images/direct-link.png"
                        height={216}
                        width={198}
                      />
                      <div className="text-center">
                        <h2 className=" text-black text-2xl font-medium text-center">
                          Display Inside Webpage
                        </h2>
                        <p className=" font-light text-xs text-black text-center">
                          Add the code below to the header of your Website to
                          display the chatbot on all pages.
                        </p>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          className="w-full bg-[#D9D9D9] text-[#727272] px-4 py-2 rounded-full text-sm placeholder-[#727272]"
                          value="1234kbk@job.com"
                          readOnly
                        />
                        <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
                          <Image
                            className=""
                            alt="alt"
                            src="/images/file.png"
                            height={14}
                            width={16}
                          />
                        </span>
                      </div>
                      <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-6 py-1.5 rounded mt-[15px]">
                        Save
                      </button>
                    </div>

                    {/* Add to a Website */}
                    <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
                      <Image
                        className="m-auto mb-4"
                        alt="alt"
                        src="/images/image-3.png"
                        height={132}
                        width={121}
                      />
                      <div className="text-center">
                        <h2 className=" text-black text-2xl font-medium text-center">
                          Add to a Website
                        </h2>
                        <p className=" font-light text-xs text-black text-center">
                          Display the open chatbot window inside a webpage with
                          an i-frame, ready to use.
                        </p>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          className="w-full bg-[#D9D9D9] text-[#727272] px-4 py-2 rounded-full text-sm placeholder-[#727272]"
                          value="1234kbk@job.com"
                          readOnly
                        />
                        <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
                          <Image
                            className=""
                            alt="alt"
                            src="/images/file.png"
                            height={14}
                            width={16}
                          />
                        </span>
                      </div>
                      <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-6 py-1.5 rounded mt-[15px]d">
                        Save
                      </button>
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

export default ChatbotDeploy;
