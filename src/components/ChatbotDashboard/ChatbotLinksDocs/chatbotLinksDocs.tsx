import ChatbotHeader from "@/components/chatbot/header/chatbotHeader";
import React from "react";
import Image from "next/image";

const ChatbotLinksDocs = () => {
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
              <h2 className="text-2xl font-bold mt-[30]">Links / Docs</h2>
              <div className="bg-[#9592AE] justify-evenly rounded-[28px] p-4 flex  items-center w-full my-[30] ">
                {/* Crawled Links */}
                <div className="flex flex-col items-center justify-center w-[143px] h-[147px] rounded-full bg-[#18B91F] text-white text-center">
                  <span className="text-sm font-semibold">Crawled Links</span>
                  <span className="text-lg font-bold mt-1">0</span>
                </div>

                {/* Chars */}
                <div className="flex flex-col items-center justify-center w-[143px] h-[147px] rounded-full bg-white text-black text-center">
                  <span className="text-sm font-semibold">Chars</span>
                  <span className="text-lg font-bold text-purple-900 mt-1">
                    0
                  </span>
                </div>

                {/* Failed */}
                <div className="flex flex-col items-center justify-center w-[143px] h-[147px] rounded-full bg-[#FF0000] text-white text-center">
                  <span className="text-sm font-semibold">Failed</span>
                  <span className="text-lg font-bold mt-1">0</span>
                </div>

                {/* Pending */}
                <div className="flex flex-col items-center justify-center w-[143px] h-[147px] rounded-full bg-[#FFC107] text-black text-center">
                  <span className="text-sm font-semibold">Pending</span>
                  <span className="text-lg font-bold mt-1">0</span>
                </div>

                {/* Indexed */}
                <div className="flex flex-col items-center justify-center w-[143px] h-[147px] rounded-full bg-[#808080] text-white text-center">
                  <span className="text-sm font-semibold">Indexed</span>
                  <span className="text-lg font-bold mt-1">0</span>
                </div>
              </div>

              {/* <table></table> */}
              <div className="bg-white rounded-b-xl overflow-hidden  text-sm w-full rounded-[40px] mb-8 mr-3 ">
                {/* Top Actions */}
                <div className="flex flex-wrap items-center justify-between gap-4 bg-[#9592AE] px-6 py-4 ">
                  <div className="flex items-center gap-2">
                    <label
                      htmlFor="entries"
                      className="text-gray-700 font-medium"
                    >
                      Show
                    </label>
                    <select
                      id="entries"
                      className=" px-2 py-1 bg-[#E0E0E0] rounded-md text-black outline-0"
                    >
                      <option>10</option>
                      <option>25</option>
                      <option>50</option>
                    </select>
                    <span className="text-gray-700 font-medium">entries</span>
                    <div className="relative w-full max-w-xs">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <input
                        type="text"
                        placeholder="Search..."
                        className="border border-white placeholder-white  pl-9  py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-purple-500 w-[140px]"
                      />
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 rounded-md  border border-white text-white bg-[#928eb0] focus:outline-none focus:ring-2 focus:ring-purple-500 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10m-12 8h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Feb/2/2025</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="bg-[#340555] text-white rounded  text-[11px] font-bold py-[7px] px-[11px]">
                      Configure mails
                    </button>
                  </div>
                </div>

                {/* Table */}
                <table className="w-full text-left text-gray-800">
                  <thead className="bg-white text-gray-600 border-y border-gray-300">
                    <tr>
                      <th className="p-4">
                        <input
                          type="checkbox"
                          className="w-4 h-4 accent-[#5E2EFF]"
                        />
                      </th>
                      <th className="py-[14px] text-sm font-bold text-black">
                        Status
                      </th>
                      <th className="py-[14px] text-sm font-bold text-black">
                        Chars
                      </th>
                      <th className="py-[14px] text-sm font-bold text-black">
                        Data
                      </th>
                      <th className="py-[14px] text-sm font-bold text-black">
                        Date Added
                      </th>
                      <th className="py-[14px] text-sm font-bold text-black">
                        Retrain
                      </th>
                      <th className="py-[14px] text-sm font-bold text-black">
                        Type
                      </th>
                      <th className="py-[14px] text-sm font-bold text-black">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#f7f6fd]">
                    {Array(7)
                      .fill(0)
                      .map((_, idx) => (
                        <tr key={idx} className="border-b border-gray-200">
                          <td className="p-4">
                            <input
                              type="checkbox"
                              className="w-4 h-4 accent-[#5E2EFF]"
                            />
                          </td>
                          <td className=" text-xs font-medium text-black ">
                            <div className="flex gap-3">
                              <p className="w-2 h-2 bg-[#DE4DBC] rounded-full"></p>{" "}
                              Pending
                            </div>
                          </td>
                          <td className="py-4 text-xs font-medium text-black">
                            0
                          </td>
                          <td className="py-4 text-xs font-medium text-black">
                            (Your Document)
                          </td>
                          <td className="py-4 text-xs font-medium text-black">
                            28 Feb 2025
                          </td>
                          <td className=" truncate max-w-[150px] p-4 text-xs font-medium text-black">
                            -
                          </td>
                          <td className="py-4">
                            <span className="bg-[#DEDEDE] px-3 py-1 rounded-full text-xs font-medium text-black">
                              .pdf
                            </span>
                          </td>
                          <td className="py-4 flex items-center gap-2">
                            <button>
                              <Image
                                className="m-auto mb-4"
                                alt="alt"
                                src="/images/eye.png"
                                height={24}
                                width={24}
                              />
                            </button>
                            <button>
                              <Image
                                className="m-auto mb-4"
                                alt="alt"
                                src="/images/bx_edit.png"
                                height={24}
                                width={24}
                              />
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-2 px-6 py-4 bg-white border-t border-gray-200">
                  <button className="text-sm text-[#9E9E9E] font-medium">
                    Previous
                  </button>
                  <button className="w-6 h-6 bg-[#624DE3] text-white rounded-[7px] text-sm">
                    1
                  </button>
                  <button className="w-6 h-6 bg-gray-200 text-black rounded-[7px] text-sm">
                    2
                  </button>
                  <button className="w-6 h-6 bg-gray-200 text-black rounded-[7px] text-sm">
                    3
                  </button>
                  <button className="text-sm text-[#9E9E9E] font-medium">
                    Next
                  </button>
                </div>
              </div>

              {/* table */}
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

export default ChatbotLinksDocs;
