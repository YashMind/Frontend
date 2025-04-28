"use client";
import React, { useState } from "react";
import Image from "next/image";
import ChatbotLinksDocsUpload from "../ChatbotLinksDocsUpload/chatbotLinksDocsUpload";

const ChatbotLinksDocs = () => {
  const [uploadDocs, setUploadDocs] = useState(false);
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold my-[30]">Links / Docs</h2>
      <div className="">
        {/* Top Cards */}
        <div className="flex flex-wrap gap-4 mb-6 bg-[#9592AE] p-6 rounded-[10px] justify-around">
          <div className="bg-white rounded-md p-4 text-black w-[200px]">
            <h2 className="text-sm  font-bold mb-2">Total Character</h2>
            <p className="text-sm ">12/250</p>
          </div>
          <div className="bg-white rounded-md p-4 text-black w-[200px]">
            <h2 className="text-sm font-semibold mb-2">Total Crawls</h2>
            <p className="text-sm">12/250</p>
          </div>
          <div className="bg-white rounded-md p-4 text-black w-[200px]">
            <h2 className="text-sm font-semibold mb-2">Total Crawls</h2>
            <p className="text-sm">12/250</p>
          </div>
          <div className="bg-white rounded-md p-4 text-black w-[200px]">
            <h2 className="text-sm font-semibold mb-2">Total Crawls</h2>
            <p className="text-sm">12/250</p>
          </div>
          <div className="bg-white rounded-md p-4 text-black w-[200px]">
            <h2 className="text-sm font-semibold mb-2">Total Crawls</h2>
            <p className="text-sm">12/250</p>
          </div>
        </div>

        {/* Search and Buttons */}
        <div className="flex items-center flex-wrap gap-4 mb-6">
          {/* Search Box */}
          <div className="flex items-center px-3  w-64  !bg-transparent border border-white text-white py-1 rounded-md">
            <svg
              className="w-5 h-5 text-white mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.6 3.6a7.5 7.5 0 0012.45 12.45z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className=" focus:outline-none w-full placeholder-white text-white "
            />
          </div>

          {/* Buttons */}
          <button className="bg-white text-[#9592AE] px-4 py-2 rounded-md text-xs font-medium ">
            Retain the bot
          </button>

          <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold">
            Delete
          </button>

          <button className="ml-auto bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold">
            Add Links / Upload docs
          </button>
        </div>

        {/* Bottom Cards */}
        <div className="flex flex-wrap gap-4 mb-6 bg-[#9592AE] p-6 rounded-[10px] justify-around">
          <div className="bg-white rounded-md p-4 text-black w-[200px]">
            <h2 className="text-sm  font-bold mb-2">Characters</h2>
            <p className="text-sm ">12/250</p>
          </div>
          <div className="bg-white rounded-md p-4 text-black w-[200px]">
            <h2 className="text-sm font-semibold mb-2">Crawl Links</h2>
            <p className="text-sm">12/250</p>
          </div>
          <div className="bg-white rounded-md p-4 text-black w-[200px]">
            <h2 className="text-sm font-semibold mb-2">Train</h2>
            <p className="text-sm">12/250</p>
          </div>
          <div className="bg-white rounded-md p-4 text-black w-[200px]">
            <h2 className="text-sm font-semibold mb-2">Pending</h2>
            <p className="text-sm">12/250</p>
          </div>
          <div className="bg-white rounded-md p-4 text-black w-[200px]">
            <h2 className="text-sm font-semibold mb-2">Failed</h2>
            <p className="text-sm">12/250</p>
          </div>
        </div>
      </div>

      {/* <table></table> */}
      <div className="bg-white rounded-b-xl overflow-hidden  text-sm w-full rounded-[40px] mb-8 mr-3 ">
        {/* Top Actions */}

        {/* Table */}
        <table className="w-full text-left text-gray-800">
          <thead className="bg-white text-gray-600 border-y border-gray-300">
            <tr>
              <th className="p-4"></th>
              <th className="py-[14px] text-sm font-bold text-black">Status</th>
              <th className="py-[14px] text-sm font-bold text-black">Chars</th>
              <th className="py-[14px] text-sm font-bold text-black">Data</th>
              <th className="py-[14px] text-sm font-bold text-black">
                Date Added
              </th>
              <th className="py-[14px] text-sm font-bold text-black">
                Retrain
              </th>
              <th className="py-[14px] text-sm font-bold text-black">Type</th>
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
                    <div className="flex gap-3"> Train</div>
                  </td>
                  <td className="py-4 text-xs font-medium text-black">6,560</td>
                  <td className="py-4 text-xs font-medium text-black">
                    (Your Document)
                  </td>
                  <td className="py-4 text-xs font-medium text-black">
                    yashmind
                  </td>
                  <td className=" truncate max-w-[150px] p-4 text-xs font-medium text-black">
                    -
                  </td>
                  <td className="py-4">
                    <span className="">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.02 21.25C17.1275 21.25 21.25 17.1075 21.25 11.98C21.25 6.8725 17.1275 2.75 12.02 2.75M12.02 21.25C6.8925 21.25 2.75 17.1075 2.75 11.98C2.75 6.8725 6.8925 2.75 12.02 2.75M12.02 21.25V2.75M20.026 7.375H3.98M20.0775 16.5125H3.9285M2.8 12H21.2"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.01 21.25C14.564 21.25 16.625 17.1075 16.625 11.98C16.625 6.8725 14.564 2.75 12.01 2.75C9.446 2.75 7.375 6.8725 7.375 11.98C7.375 17.1075 9.446 21.25 12.01 21.25Z"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
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
          <button className="text-sm text-[#9E9E9E] font-medium">Next</button>
        </div>
      </div>

      {/* table */}

      {/* page2 */}
      <div className="">
        <h2 className="text-2xl font-bold my-[30]">Links / Docs</h2>
        <div className="">
          {/* Top Cards */}
          <div className="flex flex-wrap gap-4 mb-6 bg-[#9592AE] p-6 rounded-[10px] justify-around">
            <div className="bg-white rounded-md p-4 text-black w-[200px]">
              <h2 className="text-sm  font-bold mb-2">Total Character</h2>
              <p className="text-sm ">12/250</p>
            </div>
            <div className="bg-white rounded-md p-4 text-black w-[200px]">
              <h2 className="text-sm font-semibold mb-2">Total Crawls</h2>
              <p className="text-sm">12/250</p>
            </div>
            <div className="bg-white rounded-md p-4 text-black w-[200px]">
              <h2 className="text-sm font-semibold mb-2">Total Crawls</h2>
              <p className="text-sm">12/250</p>
            </div>
            <div className="bg-white rounded-md p-4 text-black w-[200px]">
              <h2 className="text-sm font-semibold mb-2">Total Crawls</h2>
              <p className="text-sm">12/250</p>
            </div>
            <div className="bg-white rounded-md p-4 text-black w-[200px]">
              <h2 className="text-sm font-semibold mb-2">Total Crawls</h2>
              <p className="text-sm">12/250</p>
            </div>
          </div>

          {/* Search and Buttons */}
          <div className="flex items-center flex-wrap gap-4 mb-6">
            {/* Search Box */}
            <div className="flex items-center px-3  w-64  !bg-transparent border border-white text-white py-1 rounded-md">
              <svg
                className="w-5 h-5 text-white mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.6 3.6a7.5 7.5 0 0012.45 12.45z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className=" focus:outline-none w-full placeholder-white text-white "
              />
            </div>

            {/* Buttons */}
            <button className="bg-white text-[#9592AE] px-4 py-2 rounded-md text-xs font-medium ">
              Retain the bot
            </button>

            <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold">
              Delete
            </button>

            <button className="ml-auto bg-[#9592AE] text-white px-4 py-2 rounded-md text-sm ">
              Add Links / Upload docs
            </button>
          </div>

          {/* Bottom Cards */}
          <div className="flex flex-wrap gap-4 mb-6 bg-[#9592AE] p-6 rounded-[10px] justify-around">
            <div className="bg-white rounded-md p-4 text-black w-[200px]">
              <h2 className="text-sm  font-bold mb-2">Characters</h2>
              <p className="text-sm ">12/250</p>
            </div>
            <div className="bg-white rounded-md p-4 text-black w-[200px]">
              <h2 className="text-sm font-semibold mb-2">Crawl Links</h2>
              <p className="text-sm">12/250</p>
            </div>
            <div className="bg-white rounded-md p-4 text-black w-[200px]">
              <h2 className="text-sm font-semibold mb-2">Train</h2>
              <p className="text-sm">12/250</p>
            </div>
            <div className="bg-white rounded-md p-4 text-black w-[200px]">
              <h2 className="text-sm font-semibold mb-2">Pending</h2>
              <p className="text-sm">12/250</p>
            </div>
            <div className="bg-white rounded-md p-4 text-black w-[200px]">
              <h2 className="text-sm font-semibold mb-2">Failed</h2>
              <p className="text-sm">12/250</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="bg-[#F7F6FE] text-black px-6 rounded-tl-[7px] rounded-tr-[7px]">
            www.xyz.com
          </button>
          <button className=" text-white border border-white px-6 rounded-tl-[7px] rounded-tr-[7px]">
            www.xyz.com
          </button>
          <button className=" text-white border border-white px-6 rounded-tl-[7px] rounded-tr-[7px]">
            www.xyz.com
          </button>
          <button className=" text-white border border-white px-6 rounded-tl-[7px] rounded-tr-[7px]">
            www.xyz.com
          </button>
        </div>
        <div className="bg-white rounded-b-xl overflow-hidden  text-sm w-full rounded-tr-[40px] rounded-br-[40px] rounded-bl-[40px] mb-8 mr-3 ">
          {/* Top Actions */}

          {/* Table */}
          <table className="w-full text-left text-gray-800">
            <thead className="bg-white text-gray-600 border-y border-gray-300">
              <tr>
                <th className="p-4"></th>
                <th className="py-[14px] text-sm font-bold text-black">
                  Status
                </th>
                <th className="py-[14px] text-sm font-bold text-black">
                  Chars
                </th>
                <th className="py-[14px] text-sm font-bold text-black">Data</th>
                <th className="py-[14px] text-sm font-bold text-black">
                  Date Added
                </th>
                <th className="py-[14px] text-sm font-bold text-black">
                  Retrain
                </th>
                <th className="py-[14px] text-sm font-bold text-black">Type</th>
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
                      <div className="flex gap-3"> Train</div>
                    </td>
                    <td className="py-4 text-xs font-medium text-black">
                      6,560
                    </td>
                    <td className="py-4 text-xs font-medium text-black">
                      (Your Document)
                    </td>
                    <td className="py-4 text-xs font-medium text-black">
                      yashmind
                    </td>
                    <td className=" truncate max-w-[150px] p-4 text-xs font-medium text-black">
                      -
                    </td>
                    <td className="py-4">
                      <span className="">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.02 21.25C17.1275 21.25 21.25 17.1075 21.25 11.98C21.25 6.8725 17.1275 2.75 12.02 2.75M12.02 21.25C6.8925 21.25 2.75 17.1075 2.75 11.98C2.75 6.8725 6.8925 2.75 12.02 2.75M12.02 21.25V2.75M20.026 7.375H3.98M20.0775 16.5125H3.9285M2.8 12H21.2"
                            stroke="black"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.01 21.25C14.564 21.25 16.625 17.1075 16.625 11.98C16.625 6.8725 14.564 2.75 12.01 2.75C9.446 2.75 7.375 6.8725 7.375 11.98C7.375 17.1075 9.446 21.25 12.01 21.25Z"
                            stroke="black"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
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
            <button className="text-sm text-[#9E9E9E] font-medium">Next</button>
          </div>
        </div>
      </div>

      {/* Appearence page */}
      <div className="bg-[#2d2165]  p-8 text-white">
        {/* Branding Section */}
        <h2 className="text-2xl font-bold mb-6">Branding</h2>

        <div className="flex flex-wrap gap-10">
          {/* Left Side */}
          <div className="flex flex-col items-center gap-6">
            {/* Avatar 1 */}
            <div className="">
              <Image
                alt="alt"
                src="/images/profile-circle.png"
                className="rounded-full"
                height={278}
                width={200}
              />
            </div>
            <p>Chatbot Avatar</p>
            <button className="bg-[#05BDFD] text-white px-4 py-2 rounded-md text-sm">
              Upload Image
            </button>
          </div>

          {/* Arrow */}
          <div className="">
            <Image
              alt="alt"
              src="/images/frame-circle.png"
              height={200}
              width={200}
            />
            <div className="flex flex-col items-center gap-6">
              <div className="" />
              <p>Chatbot Avatar</p>
              <div className="border border-white rounded-md px-4 py-2 text-sm">
                #038af9
              </div>
            </div>
          </div>

          {/* Right Side Avatar */}

          {/* Chat Color Settings */}
          <div className="bg-[#8a84b8] p-6 rounded-2xl w-full max-w-xl text-white">
            {/* Single Row */}
            <div className="space-y-6">
              {/* Row 1 */}
              <div>
                <label className="block mb-2 text-sm">
                  Chat Window Background
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      className="w-8 h-8 rounded-md border-none"
                    />
                    <input
                      type="text"
                      value="#ffffff"
                      className="bg-white text-gray-700 rounded-md px-4 py-2 w-32 focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      className="w-8 h-8 rounded-md border-none"
                    />
                    <input
                      type="text"
                      value="#165ccn"
                      className="bg-white text-gray-700 rounded-md px-4 py-2 w-32 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div>
                <label className="block mb-2 text-sm">
                  User chat message background
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      className="w-8 h-8 rounded-md border-none"
                    />
                    <input
                      type="text"
                      value="#ffffff"
                      className="bg-white text-gray-700 rounded-md px-4 py-2 w-32 focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      className="w-8 h-8 rounded-md border-none"
                    />
                    <input
                      type="text"
                      value="#165ccn"
                      className="bg-white text-gray-700 rounded-md px-4 py-2 w-32 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div>
                <label className="block mb-2 text-sm">
                  Chatbot Chat Message Background
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      className="w-8 h-8 rounded-md border-none"
                    />
                    <input
                      type="text"
                      value="#ffffff"
                      className="bg-white text-gray-700 rounded-md px-4 py-2 w-32 focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      className="w-8 h-8 rounded-md border-none"
                    />
                    <input
                      type="text"
                      value="#165ccn"
                      className="bg-white text-gray-700 rounded-md px-4 py-2 w-32 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Row 4 */}
              <div>
                <label className="block mb-2 text-sm">
                  Chatbot Thinking Dots
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      className="w-8 h-8 rounded-md border-none"
                    />
                    <input
                      type="text"
                      value="#ffffff"
                      className="bg-white text-gray-700 rounded-md px-4 py-2 w-32 focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      className="w-8 h-8 rounded-md border-none"
                    />
                    <input
                      type="text"
                      value="#165ccn"
                      className="bg-white text-gray-700 rounded-md px-4 py-2 w-32 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* White Label Section */}
        <h2 className="text-2xl font-bold mt-16 mb-6">White Label</h2>

        <p className="mb-4">Customize the Chatbot Branding</p>

        <div className=" mb-6 w-[348px]">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white w-full">
            <span>
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11.5586" r="11" fill="#D9D9D9" />
              </svg>
            </span>{" "}
            Hide chatbot Branding
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white bg-transprent w-full  my-[30px]">
            <span>
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11.5586" r="11" fill="#D9D9D9" />
              </svg>
            </span>{" "}
            Use Custom Branding
          </button>
        </div>

        <div className="flex gap-4">
          <button className="bg-green-500 text-white px-6 py-2 rounded-md ">
            Save
          </button>
          <button className="bg-transpernt text-white px-6 py-2 rounded-md border border-white ">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotLinksDocs;
