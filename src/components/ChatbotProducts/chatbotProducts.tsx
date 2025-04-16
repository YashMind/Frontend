import React from "react";
import Image from "next/image";
const ChatbotProducts = () => {
  return (
    <div className="bg-[#2F0448] h-screen">
      {/* banner */}
      <nav className="bg-[#2B255C] fixed w-full z-20 rounded-[36px] top-0 my-[10px] px-[40px] mt-[0px] ">
        <div className=" flex flex-wrap items-center justify-between mx-auto gap-0 p-4 md:gap-4">
          <div className="w-full flex justify-center md:justify-start md:w-auto">
            <a
              className="flex items-center space-x-3 rtl:space-x-reverse"
              href="/"
            >
              <Image
                alt="alt"
                src="/images/bot-logo.png"
                height={80}
                width={65}
              />
            </a>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
            <a
              className="text-white bg-[#05BDFD] text-[15px] rounded-[18px] font-semibold focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              href="/"
            >
              Return to Home
            </a>
            <div className="relative inline-block text-left">
              <button className="focus:outline-none">
                <svg
                  width="21"
                  height="22"
                  className="mx-[18px]"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7917 4.09546C11.691 4.09546 12.5534 4.45267 13.1892 5.08851C13.825 5.72436 14.1823 6.58674 14.1823 7.48596C14.1823 8.38518 13.825 9.24757 13.1892 9.88341C12.5534 10.5193 11.691 10.8765 10.7917 10.8765C9.89253 10.8765 9.03014 10.5193 8.3943 9.88341C7.75846 9.24757 7.40125 8.38518 7.40125 7.48596C7.40125 6.58674 7.75846 5.72436 8.3943 5.08851C9.03014 4.45267 9.89253 4.09546 10.7917 4.09546ZM10.7917 12.5717C14.5383 12.5717 17.5728 14.089 17.5728 15.9622V17.6575H4.01074V15.9622C4.01074 14.089 7.04524 12.5717 10.7917 12.5717Z"
                    fill="white"
                  ></path>
                </svg>
              </button>
            </div>
            <p className="text-white font-semibold text-[15px]"></p>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full md:flex md:flex-row md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col items-center text-[15px] font-normal p-4 md:p-0 mt-4 [font-family:'Roboto_Flex',sans-serif] border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  className="block py-2 px-3 text-white bg-[#05BDFD] rounded-[26px] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                  href="/chatbot-dashboard"
                >
                  Chat Bot
                </a>
              </li>
              <li>
                <a
                  className="block py-2 px-3 text-white rounded-[26px] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  href="/voice-agent"
                >
                  Voice Agent
                </a>
              </li>
              <li>
                <a
                  className="block py-2 px-3 text-white rounded-[26px] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  href="/chatbot"
                >
                  Chat LLM
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* sidebar */}
      <div className="bg-[#1E1B3A] text-white min-h-screen flex m-[10px] pt-[85px] pb-[10px]">
        {/* Sidebar */}
        <aside className="w-[294px] bg-[#2B255C]  flex flex-col gap-2 rounded-tl-[15px] rounded-bl-[15px]">
          <div className="relative mb-4 p-4">
            <Image
              className="absolute left-8 top-1/2 transform -translate-y-1/2"
              alt="search icon"
              src="/images/search2.png"
              height={16}
              width={16}
            />
            <input
              type="text"
              placeholder="Search for..."
              className="w-full py-[15px] pl-10 pr-3 rounded-[26px] bg-[#0B1739] placeholder-[#AEB9E1] text-sm font-medium focus:outline-none text-[#AEB9E1] border border-[#343B4F] shadow-[0px_2px_4px_0px_#01051133]"
            />
          </div>
          <hr className="border-bottom border-[#081028]"></hr>
          <nav className="flex flex-col gap-2 p-4">
            <a
              href="#"
              className="flex items-center text-sm font-medium gap-2 px-3 py-[10px]  bg-[#081028] text-[#01BEED] rounded-[15px]"
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
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>

              <span>Profile</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-light text-sm "
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
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>

              <span>Preference</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-light text-sm"
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
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>

              <span>Team</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-light text-sm"
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
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>

              <span>Help</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-light text-sm"
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
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <span>Settings</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-light text-sm"
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
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                />
              </svg>

              <span>Log Out</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6 bg-[#2B255C] ml-[8px]">
          {/* Profile Section */}
          <div className="bg-[#081028] p-[30px]  rounded-[22px] mb-[8px]">
            <h2 className="text-[21px] mb-4 font-semibold">Profile</h2>
            <div className="flex items-center gap-10">
              <div className="relative w-24 h-24">
                <Image
                  alt="alt"
                  src="/images/profile.png"
                  height={33}
                  width={347}
                />
                <button className="absolute bottom-0 right-0 bg-[#6C1BB0] p-1.5 rounded-full text-white text-xs">
                  <i className="ri-edit-2-line"></i>
                </button>
              </div>
              <div>
                <h3 className="text-[26px] font-medium">Alina</h3>
                <p className="text-base font-medium text-white">Admin</p>
                <p className="text-base font-medium text-white">
                  alina@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Personal Info Section */}
          <div className="bg-[#081028] p-[30px]  rounded-[22px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[21px] mb-4 font-semibold">
                Personal Information
              </h2>
              <button className="bg-[#2F0448] text-white px-4 py-1 rounded-[24px] text-lg font-medium flex items-center gap-1">
                <i className="ri-edit-2-line"></i> Edit
              </button>
            </div>
            <table className="w-full text-sm text-gray-300">
              <thead>
                <tr>
                  <th className="text-left text-[#87888C] font-medium text-lg">
                    Name
                  </th>
                  <th className="text-left text-[#87888C] font-medium text-lg">
                    Email
                  </th>
                  <th className="text-left text-[#87888C] font-medium text-lg">
                    Password
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pt-[13] text-sm font-medium">Alina</td>
                  <td className="pt-[13] text-sm font-medium">
                    joli@gmail.com
                  </td>
                  <td className="pt-[13] text-sm font-medium">******</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* edit profile */}
          <div className="edit-profile p-6 space-y-6 bg-[#2B255C] ml-[8px]">
            <h1 className="font-semibold text-[21px]">Edit Profile</h1>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {/* First Name */}
              <div className="flex flex-col w-[422px]">
                <label
                  htmlFor="firstName"
                  className="mb-[8px] text-lg font-medium"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Alina"
                  className="bg-[#171821] text-white rounded-md p-[12]  outline-none placeholder-[#D2D2D2] text-xs font-medium"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col w-[422px]">
                <label htmlFor="email" className="mb-[8px] text-lg font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="joli@gmail.com"
                  className="bg-[#171821] text-white rounded-md p-[12]  outline-none placeholder-[#D2D2D2] text-xs font-medium"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col md:col-span-2 w-[422px]">
                <label
                  htmlFor="password"
                  className="mb-[8px] text-lg font-medium"
                >
                  Password
                </label>
                <input
                  type=" Password"
                  id="pwd"
                  placeholder="password"
                  className="bg-[#171821] text-white rounded-md p-[12]  outline-none placeholder-[#D2D2D2] text-xs font-medium"
                ></input>
              </div>

              {/* Save Button */}
              <div>
                <button
                  type="submit"
                  className="bg-[#2F0448] px-6 py-2 rounded-[8px] text-white font-mediumtext-lg"
                >
                  Save
                </button>
              </div>
            </form>
          </div>

          {/* Preferences */}
          <div className="Preferences p-6 space-y-6 bg-[#2B255C] ml-[8px]">
            <h2 className="font-semibold text-[21px]">Preferences</h2>
            <p className="text-xs font-light mt-[8px]">
              Connect your chatbot to a WhatsApp business number for automatic
              24/7 responses.
            </p>
            <div className="flex flex-col md:col-span-2 relative w-[422px] mt-[30px]">
              <label
                htmlFor="ai-model"
                className="mb-[8px] text-lg font-medium text-white"
              >
                Prefered AI Modal
              </label>
              <input
                type="text"
                id="ai-model"
                placeholder="Chat LLM"
                className="bg-[#171821] text-white text-sm font-medium placeholder-[#D2D2D2] rounded-md px-4 py-3 appearance-none w-full outline-0"
              ></input>

              {/* Custom dropdown icon */}
            </div>

            <p className="text-xs font-light mt-[8px]">
              This will be your default AI model for all new
              conversations.Remember last used model
            </p>
            <div className="flex flex-col gap-2 text-white mt-[30px]">
              <label className="inline-flex items-start gap-2">
                <input
                  type="checkbox"
                  className="accent-[#D2D2D2] w-[14px] h-[14px] mt-[3px]"
                />
                <span className="text-base font-normal">
                  Remember Last Used Modal
                </span>
              </label>
              <p className="text-xs font-light mt-[8px]">
                Use your previous conversation's model for new chats.
              </p>

              <button className="bg-[#2F0448] px-6 py-2 rounded-[8px] text-white font-mediumtext-lg w-fit">
                Save
              </button>
            </div>
          </div>

          {/* help and suport */}
          <div className=" help-suport p-6 md:p-10 text-white bg-[#2B245D] rounded-lg space-y-6">
            <div>
              <h2 className="font-semibold text-[21px]">Help & Support</h2>
              <p className="text-xs font-light mt-[8px]">
                If you need assistance, please fill out the form below, and our
                support team will get back to you shortly.
              </p>
            </div>

            {/* Subject */}
            <div className="flex flex-col space-y-2 w-[422]">
              <label
                htmlFor="subject"
                className="mb-[8px] text-lg font-medium text-white"
              >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter your issue subject"
                className="bg-[#171821] text-white rounded-md p-[12px] pr-[40px] outline-none placeholder-[#D2D2D2] text-sm font-medium appearance-none w-full"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col space-y-2 ">
              <label
                htmlFor="message"
                className="mb-[8px] text-lg font-medium text-white"
              >
                Message:
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Describe Your Issue In Details...."
                className="bg-[#171821] text-white rounded-md p-[12px] pr-[40px] outline-none placeholder-[#D2D2D2] text-sm font-medium appearance-none w-full"
              />
            </div>

            {/* Button */}
            <button className="bg-[#2F0448] px-6 py-2 rounded-[8px] text-white font-mediumtext-lg">
              Save
            </button>
          </div>

          {/* Team */}
          <div className="team p-6 md:p-10 text-white bg-[#2B245D] rounded-lg space-y-6">
            <h2 className="font-semibold text-[21px]">Team</h2>
            <div className="flex gap-2  my-[30]">
              {" "}
              <h2 className="text-lg font-semibold ">Team Name :</h2>{" "}
              <p className="bg-[#171821] text-white text-sm font-light px-4 rounded-[12px] flex justify-center">
                abcd@123
              </p>
            </div>
            <h2 className="text-sm font-normal mb-[8]">Team Members</h2>
            <p className="text-xs font-light">
              View and manage your archived chats.
            </p>
            <div className="w-[422px] mt-[8px]">
              <input
                type="text"
                placeholder="Alina (Admin)"
                className="bg-[#171821] placeholder-[#42E8E0] text-xs font-medium py-[21] px-[13] rounded-[11px] w-full"
                id=""
              ></input>
              <input
                type="text"
                placeholder="John Doe (Member)"
                className="bg-[#171821] my-[8px] placeholder-[#D2D2D2] text-xs font-medium py-[21] px-[13] rounded-[11px] w-full"
                id=""
              ></input>
              <input
                type="text"
                placeholder="Smith (Member)"
                className="bg-[#171821] placeholder-[#D2D2D2] text-xs font-medium py-[21] px-[13] rounded-[11px] w-full"
                id=""
              ></input>
            </div>
            <h2 className="text-lg font-medium mt-[30px] mb-[8px]">
              Recent Activity
            </h2>
            <a
              href=""
              className="bg-[#01BEED] text-white px-4 py-2 rounded-[12px]"
            >
              Export Data
            </a>
          </div>

          {/* Settings */}
          <div className="mt-[30px]">
            <h2 className="font-semibold text-[21px]">Settings</h2>
            <p className="text-lg font-medium my-[30px]">General</p>
            <div className="flex gap-[30px]">
              <div className="w-[422px]">
                <h3 className="font-medium text-sm mb-[8]"> Archived Chats</h3>
                <p className="text-xs font-light mb-[8px]">
                  View and manage your archived chats.
                </p>
                <input
                  type="text"
                  placeholder="View Archived Chats"
                  className="bg-[#171821] placeholder-[#D2D2D2] text-xs font-medium py-[21] px-[13] rounded-[11px] w-full"
                  id=""
                ></input>
              </div>
              <div className="w-[422px]">
                <h3 className="font-medium text-sm mb-[8]"> Archived Chats</h3>
                <p className="text-xs font-light mb-[8px]">
                  View and manage your archived chats.
                </p>
                <input
                  type="text"
                  placeholder="View Archived Chats"
                  className="bg-[#171821] placeholder-[#D2D2D2] text-xs font-medium py-[21] px-[13] rounded-[11px] w-full"
                  id=""
                ></input>
              </div>
            </div>

            <div className="w-[422px] mt-[30px]">
              <h3 className="font-medium text-sm mb-[8]"> Delete All Chats</h3>
              <p className="text-xs font-light mb-[8px]">
                Permanently delete all your chats. This action cannot be undone.
              </p>
              <input
                type="text"
                placeholder="Delete All Chats"
                className="bg-[#C10000] placeholder-[#D2D2D2] text-xs font-medium py-[21] px-[13] rounded-[11px] w-full"
                id=""
              ></input>

              <p className="text-lg font-medium my-[30px]">Data Control</p>
              <div className="w-[422px]">
                <h3 className="font-medium text-sm mb-[8]"> Archived Chats</h3>
                <p className="text-xs font-light mb-[8px]">
                  You can control all your data here.
                </p>
                <input
                  type="text"
                  placeholder="Select Data"
                  className="bg-[#171821] placeholder-[#D2D2D2] text-xs font-medium py-[21] px-[13] rounded-[11px] w-full "
                  id=""
                ></input>
                <div className="mt-[20px]">
                  <a
                    href=""
                    className="bg-[#01BEED] text-white px-4 py-2 rounded-[12px] "
                  >
                    Export Data
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ChatbotProducts;
