import React from "react";
import Image from "next/image";
const TokenAnalytics = () => {
  return (
    <div>
      <div className="">
        <div className="bg-[#081028] text-white min-h-screen flex gap-[32px]">
          <div className="dashboard-right flex-1 mr-[30px]">
            {/* graph start */}
            <div className="pt-10 text-white">
              <h2 className="text-2xl font-semibold mb-6">Token Analytics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Token Usage Trends */}
                <div className="bg-[#0E1A47] rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-white/80 flex gap-2 justify-start items-center font-semibold text-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                          />
                        </svg>
                        Token Usage Trends
                      </h3>
                    </div>
                    <div className="flex justify-center gap-2 items-center text-[#AEB9E1] text-sm">
                      <div className="p-1 bg-[#CB3CFF] rounded-full"></div>
                      <h6>Revenue</h6>
                    </div>
                    <div className="flex justify-center gap-2 items-center text-[#AEB9E1] text-sm">
                      <div className="p-1 bg-[#00C2FF] rounded-full"></div>
                      <h6>Expenses</h6>
                    </div>
                    <div className="relative inline-block text-left">
                      {/* Hidden Checkbox Toggle */}
                      <input
                        type="checkbox"
                        id="dropdown-toggle"
                        className="peer hidden"
                      />
                      {/* Button */}
                      <label
                        htmlFor="dropdown-toggle"
                        className="inline-flex items-center justify-between w-46 px-2 py-1 bg-[#0A1330] border border-[#0B1739] rounded-md cursor-pointer text-[#AEB9E1] text-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                          />
                        </svg>
                        Select Option
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </label>

                      {/* Dropdown Menu */}
                      <div className="peer-checked:block hidden absolute z-10 mt-2 w-40 bg-white rounded-md shadow-lg border border-gray-200">
                        <ul className="py-1 text-sm text-gray-700">
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Option 1
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Option 2
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Option 3
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-0 justify-center text-xs">
                    <button className="bg-[#C8C8C8] px-2 py-1  text-[#121212]">
                      Daily
                    </button>
                    <button className="bg-white px-2 py-1  text-[#121212]">
                      Weekly
                    </button>
                  </div>
                  <img src="/images/img3.png" alt="" />
                </div>

                {/* Breakdown by Product */}
                <div className="bg-[#0E1A47] rounded-xl p-4 shadow-lg">
                  <h3 className="text-white/80 font-semibold flex justify-start gap-2 items-center text-base mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                      />
                    </svg>
                    Breakdown by Product
                  </h3>
                  <div className="flex justify-center">
                    <img src="/images/token-graph-1.png" alt="" />
                  </div>
                  <div className="flex gap-4 justify-center mt-4 text-base font-medium">
                    <span className="bg-[#8CA6FF] text-white px-3 py-2 rounded">
                      ChatBot
                    </span>
                    <span className="bg-[#01BEED] text-white px-3 py-2 rounded">
                      Voice Agent
                    </span>
                    <span className="bg-[#E0AC0D] text-white px-3 py-2 rounded">
                      LLM
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* token price start */}
            <div className="mt-6 p-8 rounded-md text-white border border-[#343B4F] shadow-2xl">
              <h2 className="text-lg font-semibold mb-4">Token Price</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                  <thead>
                    <tr className=" text-gray-400 uppercase text-xs">
                      <th className="px-6 py-4 font-medium">Bot</th>
                      <th className="px-6 py-4 font-medium">Pricing</th>
                      <th className="px-6 py-4 font-medium">Tokens</th>
                      <th className="px-6 py-4 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Row 1 */}
                    <tr className=" hover:bg-[#111827] bg-[#0A1330] transition">
                      <td className="px-6 py-4 flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#a855f7]"></div>
                        ChatGPT
                      </td>
                      <td className="px-6 py-4">1 INR</td>
                      <td className="px-6 py-4">1000</td>
                      <td className="px-6 py-4 space-x-2">
                        <button className="text-[#AEB9E1]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                            />
                          </svg>
                        </button>
                        <button className="text-[#AEB9E1]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                    {/* Row 2 */}
                    <tr className=" hover:bg-[#111827] transition">
                      <td className="px-6 py-4 flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#a855f7]"></div>
                        Gemini
                      </td>
                      <td className="px-6 py-4">1 INR</td>
                      <td className="px-6 py-4">1000</td>
                      <td className="px-6 py-4 space-x-2">
                        <button className="text-[#AEB9E1]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                            />
                          </svg>
                        </button>
                        <button className="text-[#AEB9E1]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                    {/* Row 3 */}
                    <tr className="bg-[#0A1330] hover:bg-[#111827] transition">
                      <td className="px-6 py-4 flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#a855f7]"></div>
                        Microsoft Copilot
                      </td>
                      <td className="px-6 py-4">1 INR</td>
                      <td className="px-6 py-4">1000</td>
                      <td className="px-6 py-4 space-x-2">
                        <button className="text-[#AEB9E1]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                            />
                          </svg>
                        </button>
                        <button className="text-[#AEB9E1]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                    {/* Row 4 */}
                    <tr className="hover:bg-[#111827] transition">
                      <td className="px-6 py-4 flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#a855f7]"></div>
                        Deep Seek
                      </td>
                      <td className="px-6 py-4">1 INR</td>
                      <td className="px-6 py-4">1000</td>
                      <td className="px-6 py-4 space-x-2">
                        <button className="text-[#AEB9E1]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                            />
                          </svg>
                        </button>
                        <button className="text-[#AEB9E1]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* user list start */}
            {/* user list start */}
            <div className="max-w-full overflow-x-auto mt-5 bg-[#0B1739] p-5">
              <div className="flex justify-between border-b border-[#1f355c]">
                <h1 className="text-white text-lg font-semibold mb-4 ">
                  Top 10 Users by Token Consumption
                </h1>
              </div>
              <table className="min-w-full overflow-hidden text-sm">
                <thead>
                  <tr className="text-left text-gray-300 ">
                    <th className="p-4">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 bg-[#CB3CFF] form-checkbox rounded-sm focus:outline-none"
                      />
                    </th>
                    <th className="p-4 text-xs font-medium flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                      Name
                    </th>
                    <th className="p-4 text-xs font-medium">Email</th>
                    <th className="p-4 text-xs font-medium">Pricing</th>
                    <th className="p-4 text-xs font-medium">Token Limits</th>
                    <th className="p-4 text-xs font-medium">Features</th>
                    <th className="p-4 text-xs font-medium">Users Active</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  <tr className="bg-[#0A1330] hover:bg-[#1A2C56]">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="form-checkbox appearance-none w-4 h-4  rounded-sm bg-[#CB3CFF]"
                      />
                    </td>
                    <td className="p-4 flex items-center text-xs gap-2">
                      <img src="/images/Avatar Circle.png" alt="" />
                      John Carter
                    </td>
                    <td className="p-4 text-[#AEB9E1] text-xs">
                      Demo@gmail.com
                    </td>
                    <td className="p-4 text-[#AEB9E1] text-xs">Pro</td>
                    <td className="p-4 text-[#AEB9E1] text-xs">12</td>
                    <td className="p-4 text-[#AEB9E1] text-xs">01-2-2024</td>
                    <td className="p-4">
                      <span className="bg-[#AEB9E133] text-[#AEB9E1] text-xs px-2 py-1 rounded">
                        Online
                      </span>
                    </td>
                  </tr>
                  <tr className=" hover:bg-[#1A2C56]">
                    <td className="p-4">
                      <input type="checkbox" className="form-checkbox" />
                    </td>
                    <td className="p-4 flex items-center text-xs gap-2">
                      <img src="/images/Avatar Circle (1).png" alt="" />
                      Sophie Moore
                    </td>
                    <td className="p-4 text-[#AEB9E1] text-xs">
                      Demo@gmail.com
                    </td>
                    <td className="p-4 text-[#AEB9E1] text-xs">Pro</td>
                    <td className="p-4 text-[#AEB9E1] text-xs">12</td>
                    <td className="p-4 text-[#AEB9E1] text-xs">01-2-2024</td>
                    <td className="p-4">
                      <span className="bg-[#05C16833] text-[#14CA74] text-xs px-2 py-1 rounded">
                        Online
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-[#0A1330] hover:bg-[#1A2C56]">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="form-checkbox appearance-none w-4 h-4  rounded-sm bg-[#CB3CFF]"
                      />
                    </td>
                    <td className="p-4 flex items-center text-xs gap-2">
                      <img src="/images/Avatar Circle (2).png" alt="" />
                      Matt Cannon
                    </td>
                    <td className="p-4 text-[#AEB9E1] text-xs">
                      Demo@gmail.com
                    </td>
                    <td className="p-4 text-[#AEB9E1] text-xs">Pro</td>
                    <td className="p-4 text-[#AEB9E1] text-xs">12</td>
                    <td className="p-4 text-[#AEB9E1] text-xs">01-2-2024</td>
                    <td className="p-4">
                      <span className="bg-[#AEB9E133] text-[#AEB9E1] text-xs px-2 py-1 rounded">
                        Online
                      </span>
                    </td>
                  </tr>
                  <tr className=" hover:bg-[#1A2C56]">
                    <td className="p-4">
                      <input type="checkbox" className="form-checkbox" />
                    </td>
                    <td className="p-4 flex items-center text-xs gap-2">
                      <img src="/images/Avatar Circle (1).png" alt="" />
                      Graham Hills
                    </td>
                    <td className="p-4 text-[#AEB9E1] text-xs">
                      Demo@gmail.com
                    </td>
                    <td className="p-4 text-[#AEB9E1] text-xs">Pro</td>
                    <td className="p-4 text-[#AEB9E1] text-xs">12</td>
                    <td className="p-4 text-[#AEB9E1] text-xs">01-2-2024</td>
                    <td className="p-4">
                      <span className="bg-[#05C16833] text-[#14CA74] text-xs px-2 py-1 rounded">
                        Online
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-[#0A1330] hover:bg-[#1A2C56]">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="form-checkbox appearance-none w-4 h-4  rounded-sm bg-[#CB3CFF]"
                      />
                    </td>
                    <td className="p-4 flex items-center text-xs gap-2">
                      <img src="/images/Avatar Circle (3).png" alt="" />
                      Sandy Houston
                    </td>
                    <td className="p-4 text-[#AEB9E1] text-xs">
                      Demo@gmail.com
                    </td>
                    <td className="p-4 text-[#AEB9E1] text-xs">Pro</td>
                    <td className="p-4 text-[#AEB9E1] text-xs">12</td>
                    <td className="p-4 text-[#AEB9E1] text-xs">01-2-2024</td>
                    <td className="p-4">
                      <span className="bg-[#AEB9E133] text-[#AEB9E1] text-xs px-2 py-1 rounded">
                        Online
                      </span>
                    </td>
                  </tr>
                  <tr className=" hover:bg-[#1A2C56]">
                    <td className="p-4">
                      <input type="checkbox" className="form-checkbox" />
                    </td>
                    <td className="p-4 flex items-center text-xs gap-2">
                      <img src="/images/Avatar Circle (4).png" alt="" />
                      Andy Smith
                    </td>
                    <td className="p-4 text-[#AEB9E1] text-xs">
                      Demo@gmail.com
                    </td>
                    <td className="p-4 text-[#AEB9E1] text-xs">Pro</td>
                    <td className="p-4 text-[#AEB9E1] text-xs">12</td>
                    <td className="p-4 text-[#AEB9E1] text-xs">01-2-2024</td>
                    <td className="p-4">
                      <span className="bg-[#05C16833] text-[#14CA74] text-xs px-2 py-1 rounded">
                        Online
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-[#0A1330] hover:bg-[#1A2C56]">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="form-checkbox appearance-none w-4 h-4  rounded-sm bg-[#CB3CFF]"
                      />
                    </td>
                    <td className="p-4 flex items-center text-xs gap-2">
                      <img src="/images/Avatar Circle (4).png" alt="" />
                      Lilly Woods
                    </td>
                    <td className="p-4 text-[#AEB9E1] text-xs">
                      Demo@gmail.com
                    </td>
                    <td className="p-4 text-[#AEB9E1] text-xs">Pro</td>
                    <td className="p-4 text-[#AEB9E1] text-xs">12</td>
                    <td className="p-4 text-[#AEB9E1] text-xs">01-2-2024</td>
                    <td className="p-4">
                      <span className="bg-[#AEB9E133] text-[#AEB9E1] text-xs px-2 py-1 rounded">
                        Online
                      </span>
                    </td>
                  </tr>
                  <tr className=" hover:bg-[#1A2C56]">
                    <td className="p-4">
                      <input type="checkbox" className="form-checkbox" />
                    </td>
                    <td className="p-4 flex items-center text-xs gap-2">
                      <img src="/images/Avatar Circle (5).png" alt="" />
                      Patrick Meyer
                    </td>
                    <td className="p-4 text-[#AEB9E1] text-xs">
                      Demo@gmail.com
                    </td>
                    <td className="p-4 text-[#AEB9E1] text-xs">Pro</td>
                    <td className="p-4 text-[#AEB9E1] text-xs">12</td>
                    <td className="p-4 text-[#AEB9E1] text-xs">01-2-2024</td>
                    <td className="p-4">
                      <span className="bg-[#05C16833] text-[#14CA74] text-xs px-2 py-1 rounded">
                        Online
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-[#0A1330] hover:bg-[#1A2C56]">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="form-checkbox appearance-none w-4 h-4  rounded-sm bg-[#CB3CFF]"
                      />
                    </td>
                    <td className="p-4 flex items-center text-xs gap-2">
                      <img src="/images/Avatar Circle (6).png" alt="" />
                      Frances Willen
                    </td>
                    <td className="p-4 text-[#AEB9E1] text-xs">
                      Demo@gmail.com
                    </td>
                    <td className="p-4 text-[#AEB9E1] text-xs">Pro</td>
                    <td className="p-4 text-[#AEB9E1] text-xs">12</td>
                    <td className="p-4 text-[#AEB9E1] text-xs">01-2-2024</td>
                    <td className="p-4">
                      <span className="bg-[#AEB9E133] text-[#AEB9E1] text-xs px-2 py-1 rounded">
                        Online
                      </span>
                    </td>
                  </tr>
                  <tr className=" hover:bg-[#1A2C56]">
                    <td className="p-4">
                      <input type="checkbox" className="form-checkbox" />
                    </td>
                    <td className="p-4 flex items-center text-xs gap-2">
                      <img src="/images/Avatar Circle (7).png" alt="" />
                      Ernest Houston
                    </td>
                    <td className="p-4 text-[#AEB9E1] text-xs">
                      Demo@gmail.com
                    </td>
                    <td className="p-4 text-[#AEB9E1] text-xs">Pro</td>
                    <td className="p-4 text-[#AEB9E1] text-xs">12</td>
                    <td className="p-4 text-[#AEB9E1] text-xs">01-2-2024</td>
                    <td className="p-4">
                      <span className="bg-[#05C16833] text-[#14CA74] text-xs px-2 py-1 rounded">
                        Online
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenAnalytics;
