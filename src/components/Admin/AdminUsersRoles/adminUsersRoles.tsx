import React from "react";
import Image from "next/image";
const AdminUsersRoles = () => {
  return (
    <div>
      <div className="">
        <div className="bg-[#081028] text-white min-h-screen flex gap-[32px]">
          {/* Sidebar */}
          <aside className="w-[294px] bg-[#081028]   flex flex-col gap-2 rounded-tl-[15px] rounded-bl-[15px]">
            <h2 className="text-xl font-semibold text-center my-[40px]">
              Logo
            </h2>
            <div className="relative px-4">
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

            <nav className="flex flex-col gap-2 px-4 mt-[30px] shadow-2xl shadow-[#0105114D] rounded-md">
              <a
                href="#"
                className="flex items-center text-sm font-medium gap-2 px-3 py-[10px]   text-[#CB3CFF] rounded-[15px]"
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

                <span>Dashboard</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium text-sm  text-[#767F9C]"
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

                <span>Overview</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium text-sm text-white "
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

                <span>Users Management</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium  text-sm text-[#767F9C]"
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

                <span>Subscription Plans</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium text-[#767F9C] text-sm"
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

                <span>Token Analytics</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium text-[#767F9C] text-sm"
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

                <span>Product Monitoring</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium text-[#767F9C] text-sm"
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

                <span>Logs & Activity</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium text-[#767F9C] text-sm"
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

                <span>Billing Settings</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium text-[#767F9C] text-sm"
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

                <span>Admin Users & Roles</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium text-[#767F9C] text-sm"
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

                <span>Admin Users & Roles</span>
              </a>
              <a
                href="#"
                className="flex items-center justify-between gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium text-[#767F9C] text-sm"
              >
                <div className="flex gap-3">
                  {" "}
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
                  <span>Logout</span>
                </div>

                <Image
                  alt="alt"
                  src="/images/right-icon.png"
                  height={12}
                  width={12}
                />
              </a>
              <a
                href="#"
                className="flex items-center justify-between gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium text-[#767F9C] text-sm"
              >
                <div className="flex gap-3">
                  {" "}
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
                  <span>Pricing</span>
                </div>

                <Image
                  alt="alt"
                  src="/images/right-icon.png"
                  height={12}
                  width={12}
                />
              </a>
            </nav>
            <hr className="border-b border-[#FFFFFF]"></hr>

            <a
              href="#"
              className="flex items-center justify-between gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium text-[#767F9C] text-sm"
            >
              <div className="flex gap-3">
                {" "}
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
                <span>Settings</span>
              </div>

              <Image
                alt="alt"
                src="/images/right-icon.png"
                height={12}
                width={12}
              />
            </a>

            <a
              href="#"
              className="flex items-center justify-between gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium text-white text-sm"
            >
              <div className="flex gap-3">
                {" "}
                <Image alt="alt" src="/images/men.png" height={32} width={32} />
                <span>
                  John Carter <br></br>{" "}
                  <span className="text-[#AEB9E1] text-xs ">
                    Account settings
                  </span>
                </span>
              </div>

              <Image
                alt="alt"
                src="/images/right-icon.png"
                height={12}
                width={12}
              />
            </a>
          </aside>

          <div className="dashboard-right flex-1 mr-[30px]">
            <h2 className="text-2xl font-semibold mt-[40px]">
              Welcome back, John
            </h2>
            <p className="text-[#AEB9E1]  text-xs font-normal ">
              Measure your advertising ROI and report website traffic.
            </p>
            {/* cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full  mt-[30px]">
              {/* Total Users Card */}
              <div className="bg-[#0B1739] p-[18] rounded-lg shadow-md border border-[#343B4F]">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2 font-medium ">
                  <span className="flex items-center gap-2">
                    <Image
                      alt="alt"
                      src="/images/user.png"
                      height={12}
                      width={12}
                    />
                    Total users
                  </span>
                  <span className="text-white">•••</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-semibold ">50.8K</div>
                  <div className="text-[#14CA74] text-sm  flex items-center bg-[#05C16833] px-[4] py-[2] border border-[#05C16833] rounded-[2px]">
                    {" "}
                    28.4%{" "}
                    <span>
                      <Image
                        alt="alt"
                        src="/images/top-arrow.png"
                        height={8}
                        width={8}
                      />
                    </span>
                  </div>
                </div>
              </div>

              {/* Tokens Consumed */}
              <div className="bg-[#0B1739] p-[18] rounded-lg shadow-md border border-[#343B4F]">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2 font-medium ">
                  <span className="flex items-center gap-2">
                    <Image
                      alt="alt"
                      src="/images/Views-icon.png"
                      height={14}
                      width={14}
                    />
                    Tokens Consumed This Month
                  </span>
                  <span className="text-white">•••</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-semibold ">23.6K</div>
                  <div className="text-[#FF5A65] text-sm  flex items-center bg-[#FF5A6533] px-[4] py-[2] border border-[#FF5A6533] rounded-[2px]">
                    {" "}
                    12.6%{" "}
                    <span>
                      <Image
                        alt="alt"
                        src="/images/arrow-down.png"
                        height={8}
                        width={8}
                      />
                    </span>
                  </div>
                </div>
              </div>

              {/* New Signups */}
              <div className="bg-[#0B1739] p-[18] rounded-lg shadow-md border border-[#343B4F]">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2 font-medium ">
                  <span className="flex items-center gap-2">
                    <Image
                      alt="alt"
                      src="/images/add.png"
                      height={12}
                      width={12}
                    />
                    New sign ups
                  </span>
                  <span className="text-white">•••</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-semibold ">756</div>
                  <div className="text-[#14CA74] text-sm  flex items-center bg-[#05C16833] px-[4] py-[2] border border-[#05C16833] rounded-[2px]">
                    {" "}
                    3.1%{" "}
                    <span>
                      <Image
                        alt="alt"
                        src="/images/top-arrow.png"
                        height={8}
                        width={8}
                      />
                    </span>
                  </div>
                </div>
              </div>

              {/* Subscriptions */}
              <div className="bg-[#0B1739] p-[18] rounded-lg shadow-md border border-[#343B4F]">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2 font-medium ">
                  <span className="flex items-center gap-2">
                    <Image
                      alt="alt"
                      src="/images/Features-Icon.png"
                      height={12}
                      width={12}
                    />
                    Subscriptions
                  </span>
                  <span className="text-white">•••</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-semibold ">756</div>
                  <div className="text-[#14CA74] text-sm  flex items-center bg-[#05C16833] px-[4] py-[2] border border-[#05C16833] rounded-[2px]">
                    {" "}
                    2.3K{" "}
                    <span>
                      <Image
                        alt="alt"
                        src="/images/top-arrow.png"
                        height={8}
                        width={8}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* admin users */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Admin Users & Roles</h2>
                <button className="bg-[#18B91F] hover:bg-green-600 text-white px-4 py-1 rounded text-xs">
                  Add Admin
                </button>
              </div>
              <div className="rounded-lg overflow-hidden border border-gray-700">
                <div className="px-8 py-6  border-b border-gray-700 text-base">
                  <h5> Admin Users</h5>
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
                      <th className="p-6 text-white">email</th>
                      <th className="p-6 text-white">Role</th>
                      <th className="p-6 text-white">Last Active</th>
                      <th className="p-6 text-white">status</th>
                      <th className="p-6 text-white">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#0B1739] hover:bg-[#1A1F3C] ">
                      <td className="p-6">
                        <input
                          type="checkbox"
                          className="form-checkbox accent-purple-500"
                        />
                      </td>
                      <td className="p-6 font-medium text-xs">Sarah Johnson</td>
                      <td className="p-6 text-xs text-gray-300">
                        sarah@company.com
                      </td>
                      <td className="p-6 text-xs">
                        <span className="bg-[#18B91F] text-white text-xs px-2 py-1 rounded-full">
                          Super Admin
                        </span>
                      </td>
                      <td className="p-6 text-xs text-gray-400">
                        Today, 09:42 AM
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
                    <tr className="hover:bg-[#1A1F3C] border-b border-[#0B1739]">
                      <td className="p-6">
                        <input
                          type="checkbox"
                          className="form-checkbox accent-purple-500"
                        />
                      </td>
                      <td className="p-6 font-medium text-xs">Michael Chen</td>
                      <td className="p-6 text-xs text-gray-300">
                        michael@company.com
                      </td>
                      <td className="p-6 text-xs">
                        <span className="bg-[#C38F00] text-white text-xs px-2 py-1 rounded-full">
                          Billing Admin
                        </span>
                      </td>
                      <td className="p-6 text-xs text-gray-400">
                        Yesterday, 03:15 PM
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
            {/* roles management */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Role Management</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {/* Super Admin Card */}
                <div className="bg-[#0A1330] border border-[#343B4F] rounded-lg p-5">
                  <div className="flex justify-between items-center bg-[#081028] px-4 py-2 rounded">
                    <h3 className="font-semibold text-white">Super Admin</h3>
                    <span className="text-xs text-gray-400">Full Access</span>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium mb-2">Permissions</p>
                    <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
                      <li>Full system access</li>
                      <li>Manage all admin accounts</li>
                      <li>Configure roles & permissions</li>
                      <li>View all activity logs</li>
                    </ul>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-sm text-gray-300">2 admins</span>
                    <button className="text-sm bg-[#3B0459] text-white px-4 py-1 rounded">
                      Edit role
                    </button>
                  </div>
                </div>

                {/* Billing Admin Card */}
                <div className="bg-[#0A1330] border border-[#343B4F] rounded-lg p-5">
                  <div className="flex justify-between items-center bg-[#081028] px-4 py-2 rounded">
                    <h3 className="font-semibold text-white">Billing Admin</h3>
                    <span className="text-xs text-gray-400">
                      Financial Access
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium mb-2">Permissions</p>
                    <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
                      <li>Manage payment gateways</li>
                      <li>View and issue invoices</li>
                      <li>Configure tax settings</li>
                      <li>Process refunds</li>
                    </ul>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-sm text-gray-300">1 admin</span>
                    <button className="text-sm bg-[#3B0459] text-white px-4 py-1 rounded hover:bg-purple-700">
                      Edit role
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {/* product Admin Card */}
                <div className="bg-[#0A1330] border border-[#343B4F] rounded-lg p-5">
                  <div className="flex justify-between items-center bg-[#081028] px-4 py-2 rounded">
                    <h3 className="font-semibold text-white">Product Admin</h3>
                    <span className="text-xs text-gray-400">
                      Technical Access
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium mb-2">Permissions</p>
                    <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
                      <li>Configure API settings</li>
                      <li>Manage model deployments</li>
                      <li>View usage analytics</li>
                      <li>Access developer tools</li>
                    </ul>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-sm text-gray-300">1 admins</span>
                    <button className="text-sm bg-[#3B0459] text-white px-4 py-1 rounded">
                      Edit role
                    </button>
                  </div>
                </div>

                {/* Support Card */}
                <div className="bg-[#0A1330] border border-[#343B4F] rounded-lg p-5">
                  <div className="flex justify-between items-center bg-[#081028] px-4 py-2 rounded">
                    <h3 className="font-semibold text-white">Support</h3>
                    <span className="text-xs text-gray-400">
                      Limited Access
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium mb-2">Permissions</p>
                    <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
                      <li>Access support tickets</li>
                      <li>View client accounts</li>
                      <li>Basic troubleshooting</li>
                      <li> Escalate issues</li>
                    </ul>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-sm text-gray-300">1 admin</span>
                    <button className="text-sm bg-[#3B0459] text-white px-4 py-1 rounded hover:bg-purple-700">
                      Edit role
                    </button>
                  </div>
                </div>
              </div>

              {/* Activity Log */}
              <h2 className="text-xl font-semibold mb-4">Activity Log</h2>
              <div className=" border border-[#343B4F] rounded-lg ">
                <div className="flex justify-start gap-20 items-center mb-4 p-5 border-b border-[#343B4F]">
                  <label className="text-sm font-medium">All Activities</label>
                  <input
                    type="text"
                    placeholder="dd-mm-yyyy"
                    className="bg-[#FFFFFF] text-sm text-[#626161] border w-32 border-gray-600 rounded px-5 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Activity Item 1 */}
                <div className="px-4 py-3 mb-2">
                  <span>Today, 10:15 AM</span>
                </div>
                <div className="bg-[#0A1330] rounded px-4 py-3 mb-2">
                  <div className="flex justify-between items-center text-sm text-gray-400 mb-1">
                    <div className="text-base">
                      <p className="font-semibold text-sm text-white">
                        New admin added
                      </p>
                      <p className="text-sm text-gray-300">
                        Created new support admin account for emily@company.com
                        with Support role
                      </p>
                    </div>
                    <div>
                      <span>Sarah Johnson</span>
                    </div>
                  </div>
                </div>

                {/* Activity Item 2 */}
                <div className="px-4 py-3 mb-2">
                  <span>Yesterday, 03:42 PM</span>
                </div>
                <div className="bg-[#0A1330] rounded px-4 py-3 mb-2">
                  <div className="flex justify-between items-center text-sm text-gray-400 mb-1">
                    <div className="text-base">
                      <p className="font-semibold text-sm text-white">
                        Role modified
                      </p>
                      <p className="text-sm text-gray-300">
                        Updated permissions for Billing Admin role to include
                        refund processing
                      </p>
                    </div>
                    <div>
                      <span>Michael Chen</span>
                    </div>
                  </div>
                </div>

                {/* Activity Item 3 */}
                <div className="px-4 py-3 mb-2">
                  <span>Yesterday, 11:20 AM</span>
                </div>
                <div className="bg-[#0A1330]  rounded px-4 py-3 mb-8">
                  <div className="flex justify-between items-center text-sm text-gray-400 mb-1">
                    <div className="text-base">
                      <p className="font-semibold text-sm text-white">
                        Admin deactivated
                      </p>
                      <p className="text-sm text-gray-300">
                        Deactivated admin account for david@company.com due to
                        departure
                      </p>
                    </div>
                    <div>
                      <span>Sarah Johnson</span>
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

export default AdminUsersRoles;
