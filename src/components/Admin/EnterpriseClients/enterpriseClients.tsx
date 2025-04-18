import React from "react";
import Image from "next/image";
const EnterpriseClients = () => {
  return (
    <div>
      <div className="">
        <div className="bg-[#081028] text-white min-h-screen flex gap-[32px]">

          <div className="dashboard-right flex-1 mr-[30px]">
            {/* Enterprise Clients */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Enterprise Clients</h2>
                <button className="bg-[#18B91F] hover:bg-green-600 text-white px-4 py-1 rounded text-xs">
                  Add Client
                </button>
              </div>
              <div className="rounded-lg overflow-hidden border border-gray-700">
                <div className="px-8 py-6  border-b border-gray-700 text-base">
                  <h5>All Plans</h5>
                </div>
                <table className="w-full text-left mx-8 my-4">
                  <thead className="text-xs uppercase text-gray-400 border-b border-[#0B1739]">
                    <tr>
                      <th className="p-6">
                        <input
                          type="checkbox"
                          className="form-checkbox accent-purple-500"
                        />
                      </th>
                      <th className="p-6 flex gap-1 justify-start items-center text-white">
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
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                          />
                        </svg>
                        <span>Name</span>
                      </th>
                      <th className="p-6 text-white">Key Contact</th>
                      <th className="p-6 text-white">Status</th>
                      <th className="p-6 text-white">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-[#0A1330] hover:bg-[#1A1F3C] ">
                      <td className="p-6">
                        <input
                          type="checkbox"
                          className="form-checkbox accent-purple-500"
                        />
                      </td>
                      <td className="p-6 font-medium text-xs">Acme Corp</td>
                      <td className="p-6 text-xs text-gray-300">
                        john.doe@acme.com
                      </td>

                      <td className="p-6 text-xs">
                        <span className="bg-[#18B91F] text-white text-xs px-3 py-1 rounded-full">
                          Active
                        </span>
                      </td>
                      <td className="p-6 space-x-2 flex">
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
                            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#1A1F3C] ">
                      <td className="p-6">
                        <input
                          type="checkbox"
                          className="form-checkbox accent-purple-500"
                        />
                      </td>
                      <td className="p-6 font-medium text-xs">Globex Inc</td>
                      <td className="p-6 text-xs text-gray-300">
                        sarah.smith@globex.com
                      </td>

                      <td className="p-6">
                        <span className="bg-[#C38F00] text-white text-xs px-3 py-1 rounded-full">
                          Trail
                        </span>
                      </td>
                      <td className="p-6 space-x-2 flex">
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
                            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#1A1F3C] bg-[#0A1330]">
                      <td className="p-6">
                        <input
                          type="checkbox"
                          className="form-checkbox accent-purple-500"
                        />
                      </td>
                      <td className="p-6 font-medium text-xs">Initech</td>
                      <td className="p-6 text-xs text-gray-300">
                        peter.gibbons@initech.com
                      </td>

                      <td className="p-6">
                        <span className="bg-[#18B91F] text-white text-xs px-3 py-1 rounded-full">
                          Active
                        </span>
                      </td>
                      <td className="p-6 space-x-2 flex">
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
                            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                          />
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* token rate */}
            <div className="px-6 ">
              {/* Custom Token Rate Section */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold"> Custom token rate</h2>
                <button className="bg-[#18B91F] hover:bg-green-600 text-white px-4 py-1 rounded text-xs">
                  Save
                </button>
              </div>
              <div className="flex flex-col md:flex-row gap-5 mb-10">
                {/* Left Table */}
                <div className="w-full md:w-1/2  border border-gray-700 rounded-lg">
                  <div className="px-8 py-5 border-b border-gray-600 text-base font-medium">
                    All Plans
                  </div>
                  <div className="text-xs ">
                    <div className="flex justify-between items-center px-4 py-5">
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="form-checkbox accent-purple-500"
                        />
                        Select Client
                      </span>
                      <span className="text-gray-300">
                        Base rate (per token)
                      </span>
                    </div>
                    <div className="flex justify-between items-center px-4 py-5 bg-[#0A1330]">
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="form-checkbox accent-purple-500"
                        />
                        Acme Corp
                      </span>
                      <span className="text-gray-300">$ 0000</span>
                    </div>
                    <div className="flex justify-between items-center px-4 py-5">
                      <span className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        Globex Inc
                      </span>
                      <span className="text-gray-300">$ 0000</span>
                    </div>
                    <div className="flex justify-between items-center px-4 py-5 bg-[#0A1330] mb-5">
                      <span className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        Initech
                      </span>
                      <span className="text-gray-300">$ 0000</span>
                    </div>
                  </div>
                </div>

                {/* Right Table */}
                <div className="w-full md:w-1/2  border border-gray-700 rounded-lg">
                  <div className="flex justify-between items-center px-4 py-5 border-b border-gray-600">
                    <span className="text-base font-medium">
                      Volume Discount
                    </span>
                  </div>
                  <div className="text-xs ">
                    <div className="flex justify-between px-4 py-5">
                      <span className="text-gray-300 flex gap-1">
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
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                          />
                        </svg>
                        Tier
                      </span>
                      <span className="text-gray-300">Min Tokens</span>
                      <span className="text-gray-300">Discount</span>
                    </div>
                    <div className="flex justify-between px-4 py-5 bg-[#0A1330]">
                      <span>1</span>
                      <span>0M - 1M</span>
                      <span>0%</span>
                    </div>
                    <div className="flex justify-between px-4 py-5">
                      <span>2</span>
                      <span>1M - 5 M</span>
                      <span>5%</span>
                    </div>
                    <div className="flex justify-between px-4 py-5 bg-[#0A1330] mb-5">
                      <span>3</span>
                      <span>5M +</span>
                      <span>10%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Usage Analytics */}
            <div className=" bg-[#0B0F29] text-white p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Usage Analytics</h2>
                <span className="text-xs bg-purple-600 text-white rounded-full px-3 py-1">
                  Last 30 days
                </span>
              </div>

              <div className="rounded-lg overflow-hidden border border-[#1E243A]">
                {/* Tabs */}
                <div className="flex border-b border-[#1E243A] gap-40 py-5 px-3">
                  <button className="px-4 py-2 text-sm font-medium border-b-2 border-white text-white">
                    Chatbot
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white">
                    Voice Agent
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white">
                    LLM
                  </button>
                </div>

                {/* Chart Area */}
                <div className="h-58 flex items-center justify-center bg-[#0A1330] text-base m-6 rounded-2xl text-gray-400">
                  [Usage Chart: Tokens/Messages over time]
                </div>
              </div>
            </div>
            {/*  Contracts & SLA Status  */}
            <div className=" p-6 mx-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">
                  Contracts & SLA Status
                </h2>
                <button className="bg-purple-600 text-sm px-3 py-1 rounded hover:bg-purple-700">
                  Add Note +
                </button>
              </div>

              <div className="px-6 py-8 rounded-lg border border-[#343B4F] grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="bg-[#0A1330] rounded-md p-4 border border-[#343B4F]">
                  <div className="flex justify-between items-center mb-2 py-5">
                    <span className="font-semibold text-base">Acme Corp</span>
                    <span className="text-base text-gray-400">
                      (Renews in 30 days)
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-sm text-gray-300 mb-1">SLA uptime</div>
                    <div className="text-sm text-right text-gray-300 mb-2">
                      94.4%
                    </div>
                  </div>
                  <div className="relative h-3 rounded bg-gray-700 overflow-hidden mb-8">
                    <div
                      className="absolute top-0 left-0 h-3 bg-[#18B91F]"
                      style={{ width: "94.4%" }}
                    ></div>
                  </div>

                  <div className="text-base text-gray-400 pb-5">
                    Notes: Contract includes premium support and custom model
                    fine-tuning.
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#0A1330]  rounded-md p-4 border border-[#343B4F]">
                  <div className="flex justify-between items-center mb-2 py-5">
                    <span className="font-semibold text-base">Globex Inc</span>
                    <span className="text-base text-green-500">Active</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-sm text-gray-300 mb-1">SLA uptime</div>
                    <div className="text-sm text-right text-gray-300 mb-2">
                      94.4%
                    </div>
                  </div>
                  <div className="relative h-3 rounded bg-gray-700 overflow-hidden mb-8">
                    <div
                      className="absolute top-0 left-0 h-3 bg-[#18B91F]"
                      style={{ width: "94.4%" }}
                    ></div>
                  </div>
                  <div className="text-base text-gray-400 pb-5">
                    Notes: Data residency requirements in EU. Next review Q3.
                  </div>
                </div>
              </div>
            </div>
            {/*  Support Ticket History */}
            <div className="p-6 mx-auto">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold">
                  Support Ticket History
                </h2>
              </div>

              <div className=" p-5 rounded-lg border border-[#343B4F] grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Open Tickets */}
                <div className="bg-[#0A1330] rounded-md p-6 border border-[#343B4F] ">
                  <div className="flex justify-between items-center mb-5">
                    <span className="font-medium text-sm">Open</span>
                    <span className="w-6 h-6 rounded-full flex justify-center items-center bg-[#7D7373] text-white">
                      3
                    </span>
                  </div>
                  {/* Ticket 1 */}
                  <div className="bg-[#081028] p-3 rounded mb-8">
                    <div className="text-sm font-semibold">
                      Chatbot API Errors
                    </div>
                    <div className="flex justify-between items-center mt-5">
                      <div className="text-xs text-gray-400">Acme Corp</div>
                      <div className="text-xs text-red-500 text-right">
                        High
                      </div>
                    </div>
                  </div>

                  {/* Ticket 2 */}
                  <div className="bg-[#081028] p-3 rounded">
                    <div className="text-sm font-semibold">Billing Dispute</div>
                    <div className="flex justify-between items-center mt-5">
                      <div className="text-xs text-gray-400">Initech</div>
                      <div className="text-xs text-yellow-500 ">Medium</div>
                    </div>
                  </div>
                </div>

                {/* In Progress Tickets */}
                <div className="bg-[#0A1330] rounded-md p-6 border border-[#343B4F] ">
                  <div className="flex justify-between items-center mb-5">
                    <span className="font-medium text-sm">In Progress</span>
                    <span className="w-6 h-6 rounded-full flex justify-center items-center bg-[#7D7373] text-white">
                      2
                    </span>
                  </div>

                  {/* Ticket */}
                  <div className="bg-[#081028] p-3 rounded">
                    <div className="text-sm font-semibold">
                      Custom Model Request
                    </div>
                    <div className="flex justify-between items-center mt-5">
                      <div className="text-xs text-gray-400">Globex Inc</div>
                      <div className="text-xs text-yellow-500">Medium</div>
                    </div>
                  </div>
                </div>

                {/* Resolved Tickets */}
                <div className="bg-[#0A1330] rounded-md p-6 border border-[#343B4F] h-58">
                  <div className="flex justify-between items-center mb-5">
                    <span className="font-medium text-sm">Resolved</span>
                    <span className="w-6 h-6 rounded-full flex justify-center items-center bg-[#7D7373] text-white">
                      5
                    </span>
                  </div>

                  {/* Ticket */}
                  <div className="bg-[#081028] p-3 rounded mb-8">
                    <div className="text-sm font-semibold">Latency Issues</div>

                    <div className="flex justify-between items-center mt-5">
                      <div className="text-xs text-gray-400">Acme Corp</div>
                      <div className="text-xs text-green-500">Low</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseClients;
