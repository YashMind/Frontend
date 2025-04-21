"use client"
import React, {useState} from "react";
import Image from "next/image";
import EditUserModal from "./EditUser/editUser";
const UserManagement = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  return (
    <div>
      <div className="">
        <div className="bg-[#081028] text-white min-h-screen flex gap-[32px]">
          <div className="dashboard-right flex-1 mr-[30px]">
            {/* user list start */}
            <div className="max-w-full overflow-x-auto mt-5 bg-[#0B1739] p-5">
              <div className="flex justify-between border-b border-[#1f355c]">
                <h1 className="text-white text-lg font-semibold mb-4 ">
                  All Users
                </h1>
                <div className="text-sm text-gray-400 mt-4">
                  <span>1 - 10 of 256</span>
                </div>
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
                    <th className="p-4 text-xs font-medium">Plan</th>
                    <th className="p-4 text-xs font-medium">Token Used</th>
                    <th className="p-4 text-xs font-medium">Signup Date</th>
                    <th className="p-4 text-xs font-medium">Status</th>
                    <th className="p-4 text-xs font-medium">Actions</th>
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
                    <td className="p-4 relative">
                      <div className="flex gap-2 items-center">
                        <button className="text-gray-300 hover:text-white"
                        onClick={()=>setModalShow(true)}>
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
                        <button className="text-gray-300 hover:text-white">
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
                        {/* dropdown start */}
                        <div className="relative inline-block text-left">
                          <input
                            type="checkbox"
                            id="dropdown-toggle"
                            className="peer hidden"
                          />
                          <label htmlFor="dropdown-toggle" className="">
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
                                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                              />
                            </svg>
                          </label>

                          <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 peer-checked:block hidden">
                            <div className="py-1">
                              <a
                                href="#"
                                className="block px-4 py-2 text-xs border-b-1 border-[#CACACA] text-[#5C5C5C] hover:bg-gray-100"
                              >
                                View Detail
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-xs border-b-1 border-[#CACACA] text-[#FF0000] hover:bg-gray-100"
                              >
                                Suspend
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 border-b-1 border-[#CACACA] text-xs text-[#0FB100] hover:bg-gray-100"
                              >
                                Activate
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2   text-xs text-[#CD6600] hover:bg-gray-100"
                              >
                                Reset token quote
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* dropdown end */}
                        <div className="relative group">
                          <button className="text-gray-300 hover:text-white">
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                          <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg hidden group-hover:block z-10">
                            <ul className="text-sm">
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                View Detail
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-red-600">
                                Suspend
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-green-600">
                                Activate
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                Reset token quote
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
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
                    <td className="p-4 relative">
                      <div className="flex gap-2 items-center">
                        <button className="text-gray-300 hover:text-white"
                        onClick={()=>setModalShow(true)}>
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
                        <button className="text-gray-300 hover:text-white">
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
                        {/* dropdown start */}
                        <div className="relative inline-block text-left">
                          <input
                            type="checkbox"
                            id="dropdown-toggle1"
                            className="peer hidden"
                          />
                          <label htmlFor="dropdown-toggle1" className="">
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
                                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                              />
                            </svg>
                          </label>

                          <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 peer-checked:block hidden">
                            <div className="py-1">
                              <a
                                href="#"
                                className="block px-4 py-2 text-xs border-b-1 border-[#CACACA] text-[#5C5C5C] hover:bg-gray-100"
                              >
                                View Detail
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-xs border-b-1 border-[#CACACA] text-[#FF0000] hover:bg-gray-100"
                              >
                                Suspend
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 border-b-1 border-[#CACACA] text-xs text-[#0FB100] hover:bg-gray-100"
                              >
                                Activate
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2   text-xs text-[#CD6600] hover:bg-gray-100"
                              >
                                Reset token quote
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* dropdown end */}
                        <div className="relative group">
                          <button className="text-gray-300 hover:text-white">
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                          <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg hidden group-hover:block z-10">
                            <ul className="text-sm">
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                View Detail
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-red-600">
                                Suspend
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-green-600">
                                Activate
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                Reset token quote
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
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
                    <td className="p-4 relative">
                      <div className="flex gap-2 items-center">
                        <button className="text-gray-300 hover:text-white">
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
                        <button className="text-gray-300 hover:text-white">
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
                        {/* dropdown start */}
                        <div className="relative inline-block text-left">
                          <input
                            type="checkbox"
                            id="dropdown-toggle2"
                            className="peer hidden"
                          />
                          <label htmlFor="dropdown-toggle2" className="">
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
                                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                              />
                            </svg>
                          </label>

                          <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 peer-checked:block hidden">
                            <div className="py-1">
                              <a
                                href="#"
                                className="block px-4 py-2 text-xs border-b-1 border-[#CACACA] text-[#5C5C5C] hover:bg-gray-100"
                              >
                                View Detail
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-xs border-b-1 border-[#CACACA] text-[#FF0000] hover:bg-gray-100"
                              >
                                Suspend
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 border-b-1 border-[#CACACA] text-xs text-[#0FB100] hover:bg-gray-100"
                              >
                                Activate
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2   text-xs text-[#CD6600] hover:bg-gray-100"
                              >
                                Reset token quote
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* dropdown end */}
                        <div className="relative group">
                          <button className="text-gray-300 hover:text-white">
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                          <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg hidden group-hover:block z-10">
                            <ul className="text-sm">
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                View Detail
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-red-600">
                                Suspend
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-green-600">
                                Activate
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                Reset token quote
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
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
                    <td className="p-4 relative">
                      <div className="flex gap-2 items-center">
                        <button className="text-gray-300 hover:text-white">
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
                        <button className="text-gray-300 hover:text-white">
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
                        {/* dropdown start */}
                        <div className="relative inline-block text-left">
                          <input
                            type="checkbox"
                            id="dropdown-toggle3"
                            className="peer hidden"
                          />
                          <label htmlFor="dropdown-toggle3" className="">
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
                                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                              />
                            </svg>
                          </label>

                          <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 peer-checked:block hidden">
                            <div className="py-1">
                              <a
                                href="#"
                                className="block px-4 py-2 text-xs border-b-1 border-[#CACACA] text-[#5C5C5C] hover:bg-gray-100"
                              >
                                View Detail
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-xs border-b-1 border-[#CACACA] text-[#FF0000] hover:bg-gray-100"
                              >
                                Suspend
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 border-b-1 border-[#CACACA] text-xs text-[#0FB100] hover:bg-gray-100"
                              >
                                Activate
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2   text-xs text-[#CD6600] hover:bg-gray-100"
                              >
                                Reset token quote
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* dropdown end */}
                        <div className="relative group">
                          <button className="text-gray-300 hover:text-white">
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                          <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg hidden group-hover:block z-10">
                            <ul className="text-sm">
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                View Detail
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-red-600">
                                Suspend
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-green-600">
                                Activate
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                Reset token quote
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
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
                    <td className="p-4 relative">
                      <div className="flex gap-2 items-center">
                        <button className="text-gray-300 hover:text-white">
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
                        <button className="text-gray-300 hover:text-white">
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
                        {/* dropdown start */}
                        <div className="relative inline-block text-left">
                          <input
                            type="checkbox"
                            id="dropdown-toggle4"
                            className="peer hidden"
                          />
                          <label htmlFor="dropdown-toggle4" className="">
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
                                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                              />
                            </svg>
                          </label>

                          <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 peer-checked:block hidden">
                            <div className="py-1">
                              <a
                                href="#"
                                className="block px-4 py-2 text-xs border-b-1 border-[#CACACA] text-[#5C5C5C] hover:bg-gray-100"
                              >
                                View Detail
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-xs border-b-1 border-[#CACACA] text-[#FF0000] hover:bg-gray-100"
                              >
                                Suspend
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 border-b-1 border-[#CACACA] text-xs text-[#0FB100] hover:bg-gray-100"
                              >
                                Activate
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2   text-xs text-[#CD6600] hover:bg-gray-100"
                              >
                                Reset token quote
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* dropdown end */}
                        <div className="relative group">
                          <button className="text-gray-300 hover:text-white">
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                          <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg hidden group-hover:block z-10">
                            <ul className="text-sm">
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                View Detail
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-red-600">
                                Suspend
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-green-600">
                                Activate
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                Reset token quote
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
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
                    <td className="p-4 relative">
                      <div className="flex gap-2 items-center">
                        <button className="text-gray-300 hover:text-white">
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
                        <button className="text-gray-300 hover:text-white">
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
                        {/* dropdown start */}
                        <div className="relative inline-block text-left">
                          <input
                            type="checkbox"
                            id="dropdown-toggle5"
                            className="peer hidden"
                          />
                          <label htmlFor="dropdown-toggle5" className="">
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
                                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                              />
                            </svg>
                          </label>

                          <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 peer-checked:block hidden">
                            <div className="py-1">
                              <a
                                href="#"
                                className="block px-4 py-2 text-xs border-b-1 border-[#CACACA] text-[#5C5C5C] hover:bg-gray-100"
                              >
                                View Detail
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-xs border-b-1 border-[#CACACA] text-[#FF0000] hover:bg-gray-100"
                              >
                                Suspend
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 border-b-1 border-[#CACACA] text-xs text-[#0FB100] hover:bg-gray-100"
                              >
                                Activate
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2   text-xs text-[#CD6600] hover:bg-gray-100"
                              >
                                Reset token quote
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* dropdown end */}
                        <div className="relative group">
                          <button className="text-gray-300 hover:text-white">
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                          <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg hidden group-hover:block z-10">
                            <ul className="text-sm">
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                View Detail
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-red-600">
                                Suspend
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-green-600">
                                Activate
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                Reset token quote
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
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
                    <td className="p-4 relative">
                      <div className="flex gap-2 items-center">
                        <button className="text-gray-300 hover:text-white">
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
                        <button className="text-gray-300 hover:text-white">
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
                        {/* dropdown start */}
                        <div className="relative inline-block text-left">
                          <input
                            type="checkbox"
                            id="dropdown-toggle6"
                            className="peer hidden"
                          />
                          <label htmlFor="dropdown-toggle6" className="">
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
                                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                              />
                            </svg>
                          </label>

                          <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 peer-checked:block hidden">
                            <div className="py-1">
                              <a
                                href="#"
                                className="block px-4 py-2 text-xs border-b-1 border-[#CACACA] text-[#5C5C5C] hover:bg-gray-100"
                              >
                                View Detail
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-xs border-b-1 border-[#CACACA] text-[#FF0000] hover:bg-gray-100"
                              >
                                Suspend
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 border-b-1 border-[#CACACA] text-xs text-[#0FB100] hover:bg-gray-100"
                              >
                                Activate
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2   text-xs text-[#CD6600] hover:bg-gray-100"
                              >
                                Reset token quote
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* dropdown end */}
                        <div className="relative group">
                          <button className="text-gray-300 hover:text-white">
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                          <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg hidden group-hover:block z-10">
                            <ul className="text-sm">
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                View Detail
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-red-600">
                                Suspend
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-green-600">
                                Activate
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                Reset token quote
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
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
                    <td className="p-4 relative">
                      <div className="flex gap-2 items-center">
                        <button className="text-gray-300 hover:text-white">
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
                        <button className="text-gray-300 hover:text-white">
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
                        {/* dropdown start */}
                        <div className="relative inline-block text-left">
                          <input
                            type="checkbox"
                            id="dropdown-toggle7"
                            className="peer hidden"
                          />
                          <label htmlFor="dropdown-toggle7" className="">
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
                                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                              />
                            </svg>
                          </label>

                          <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 peer-checked:block hidden">
                            <div className="py-1">
                              <a
                                href="#"
                                className="block px-4 py-2 text-xs border-b-1 border-[#CACACA] text-[#5C5C5C] hover:bg-gray-100"
                              >
                                View Detail
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-xs border-b-1 border-[#CACACA] text-[#FF0000] hover:bg-gray-100"
                              >
                                Suspend
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 border-b-1 border-[#CACACA] text-xs text-[#0FB100] hover:bg-gray-100"
                              >
                                Activate
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2   text-xs text-[#CD6600] hover:bg-gray-100"
                              >
                                Reset token quote
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* dropdown end */}
                        <div className="relative group">
                          <button className="text-gray-300 hover:text-white">
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                          <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg hidden group-hover:block z-10">
                            <ul className="text-sm">
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                View Detail
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-red-600">
                                Suspend
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-green-600">
                                Activate
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                Reset token quote
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
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
                    <td className="p-4 relative">
                      <div className="flex gap-2 items-center">
                        <button className="text-gray-300 hover:text-white">
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
                        <button className="text-gray-300 hover:text-white">
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
                        {/* dropdown start */}
                        <div className="relative inline-block text-left">
                          <input
                            type="checkbox"
                            id="dropdown-toggle8"
                            className="peer hidden"
                          />
                          <label htmlFor="dropdown-toggle8" className="">
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
                                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                              />
                            </svg>
                          </label>

                          <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 peer-checked:block hidden">
                            <div className="py-1">
                              <a
                                href="#"
                                className="block px-4 py-2 text-xs border-b-1 border-[#CACACA] text-[#5C5C5C] hover:bg-gray-100"
                              >
                                View Detail
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-xs border-b-1 border-[#CACACA] text-[#FF0000] hover:bg-gray-100"
                              >
                                Suspend
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 border-b-1 border-[#CACACA] text-xs text-[#0FB100] hover:bg-gray-100"
                              >
                                Activate
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2   text-xs text-[#CD6600] hover:bg-gray-100"
                              >
                                Reset token quote
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* dropdown end */}
                        <div className="relative group">
                          <button className="text-gray-300 hover:text-white">
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                          <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg hidden group-hover:block z-10">
                            <ul className="text-sm">
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                View Detail
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-red-600">
                                Suspend
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-green-600">
                                Activate
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                Reset token quote
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
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
                    <td className="p-4 relative">
                      <div className="flex gap-2 items-center">
                        <button className="text-gray-300 hover:text-white">
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
                        <button className="text-gray-300 hover:text-white">
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
                        {/* dropdown start */}
                        <div className="relative inline-block text-left">
                          <input
                            type="checkbox"
                            id="dropdown-toggle9"
                            className="peer hidden"
                          />
                          <label htmlFor="dropdown-toggle9" className="">
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
                                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                              />
                            </svg>
                          </label>

                          <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right h-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 peer-checked:block hidden">
                            <div className="py-1">
                              <a
                                href="#"
                                className="block px-4 py-2 text-xs border-b-1 border-[#CACACA] text-[#5C5C5C] hover:bg-gray-100"
                              >
                                View Detail
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-xs border-b-1 border-[#CACACA] text-[#FF0000] hover:bg-gray-100"
                              >
                                Suspend
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 border-b-1 border-[#CACACA] text-xs text-[#0FB100] hover:bg-gray-100"
                              >
                                Activate
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2   text-xs text-[#CD6600] hover:bg-gray-100"
                              >
                                Reset token quote
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* dropdown end */}
                        <div className="relative group">
                          <button className="text-gray-300 hover:text-white">
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                          <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg hidden group-hover:block z-10">
                            <ul className="text-sm">
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                View Detail
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-red-600">
                                Suspend
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-green-600">
                                Activate
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                Reset token quote
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <EditUserModal 
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
          </div>
        </div>
      </div>
            
    </div>
  );
};

export default UserManagement;
