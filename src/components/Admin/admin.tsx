import React from "react";
import Image from "next/image";
const Admin = () => {
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

            {/* Total revenu */}
            <div className="total-revenu mt-[17]">
              <div className="  text-white ">
                <div className="grid grid-cols-1 md:grid-cols-3 bg-[#0B1739] ">
                  {/* Total Revenue Card */}
                  <div className="col-span-2 p-4 border border-[#343B4F] shadow">
                    <h2 className="text-lg font-semibold mb-2">
                      Total revenue
                    </h2>
                    <div className="text-3xl font-bold">
                      $240.8K{" "}
                      <span className="text-green-400 text-sm ml-2">24.8%</span>
                    </div>
                    <Image
                      alt="alt"
                      src="/images/img3.png"
                      className="w-full"
                      height={394}
                      width={593}
                    />
                  </div>

                  {/* Right Side Cards */}
                  <div className="">
                    {/* Total Profit Card */}
                    <div className="bg-[#151A2E]  border border-[#343B4F] shadow p-[25]">
                      <h2 className="text-lg font-semibold ">Total profit</h2>
                      <div className="text-2xl font-bold">
                        $144.6K{" "}
                        <span className="text-green-400 text-sm ml-2">
                          28.5%
                        </span>
                      </div>
                      <Image
                        alt="alt"
                        className=""
                        src="/images/img4.png"
                        height={123}
                        width={320}
                      />

                      <div className="text-xs text-gray-400 mt-2">
                        Last 12 months{" "}
                        <span className="text-purple-400 ml-2 cursor-pointer">
                          View report
                        </span>
                      </div>
                    </div>

                    {/* Total Sessions Card */}
                    <div className="bg-[#151A2E] rounded-xl shadow-md p-[25]">
                      <h2 className="text-lg font-semibold mb-2">
                        Total sessions
                      </h2>
                      <div className="text-2xl font-bold">
                        400{" "}
                        <span className="text-green-400 text-sm ml-2">
                          16.9%
                        </span>
                      </div>
                      <Image
                        alt="alt"
                        className=""
                        src="/images/img1.png"
                        height={171}
                        width={312}
                      />
                      <div className="text-xs text-green-400 mt-2">
                        ● Live{" "}
                        <span className="text-white ml-2">10k visitors</span>
                        <span className="text-purple-400 ml-2 cursor-pointer">
                          View report
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* report overviews */}
            <div className="flex justify-between items-center mb-6 mt-[40px]">
              <h1 className="text-xl font-semibold">Reports overview</h1>
              <div className="flex gap-2">
                <button className="bg-[#13192f] text-white px-3 py-2 text-sm rounded flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 9h10M5 21h14a2 2 0 002-2v-5H3v5a2 2 0 002 2z"
                    />
                  </svg>
                  Select date
                </button>
                <button className="bg-[#13192f] text-white px-3 py-2 text-sm rounded">
                  Export data ↓
                </button>
                <button className="bg-[#9d34da] text-white px-3 py-2 text-sm rounded">
                  Create report
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Alerts Section */}
              <div className="bg-[#13192f] p-6 rounded-xl">
                <h2 className="text-sm text-gray-400 mb-4">
                  Alerts (Quota overuse, payment failures)
                </h2>
                <div className="flex justify-center mb-4">
                  {/* Circular Chart Placeholder */}
                  <svg width="160" height="80" viewBox="0 0 160 80">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      fill="transparent"
                      stroke="#e74c3c"
                      strokeWidth="15"
                      strokeDasharray="120"
                      strokeDashoffset="0"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      fill="transparent"
                      stroke="#3498db"
                      strokeWidth="15"
                      strokeDasharray="60"
                      strokeDashoffset="-120"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      fill="transparent"
                      stroke="#1abc9c"
                      strokeWidth="15"
                      strokeDasharray="30"
                      strokeDashoffset="-180"
                    />
                  </svg>
                </div>
                <div className="text-center text-3xl font-semibold">23,648</div>
                <p className="text-center text-sm text-gray-400">
                  Users by device
                </p>
                <div className="mt-6 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#d946ef] rounded-full"></span>{" "}
                      Desktop users
                    </span>
                    <span>15,624</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#38bdf8] rounded-full"></span>{" "}
                      Phone app users
                    </span>
                    <span>5,546</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#22d3ee] rounded-full"></span>{" "}
                      Laptop users
                    </span>
                    <span>2,478</span>
                  </div>
                </div>
              </div>

              {/* Top Active Users Table */}
              <div className="bg-[#13192f] p-6 rounded-xl">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-sm text-gray-400">Top Active Users</h2>
                  <button className="text-sm text-white bg-[#0d1224] border border-gray-600 px-2 py-1 rounded">
                    Jan 2024
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead className="text-gray-400 text-left">
                      <tr>
                        <th className="py-2">#</th>
                        <th className="py-2">Date</th>
                        <th className="py-2">Status</th>
                        <th className="py-2">Total</th>
                      </tr>
                    </thead>
                    <tbody className="text-white divide-y divide-gray-700">
                      <tr>
                        <td className="py-2">2</td>
                        <td>Dec 30, 10:06 AM</td>
                        <td>
                          <span className="bg-[#05C16833] text-[#14CA74] px-2 py-1 rounded text-xs">
                            Paid
                          </span>
                        </td>
                        <td>$329.40</td>
                      </tr>
                      <tr>
                        <td className="py-2">3</td>
                        <td>Dec 29, 2:59 AM</td>
                        <td>
                          <span className="bg-[#FFB01633] text-[#FDB52A] px-2 py-1 rounded text-xs">
                            Pending
                          </span>
                        </td>
                        <td>$117.24</td>
                      </tr>
                      <tr>
                        <td className="py-2">4</td>
                        <td>Dec 29, 12:54 AM</td>
                        <td>
                          <span className="bg-[#FFB01633] text-[#FDB52A] px-2 py-1 rounded text-xs">
                            Pending
                          </span>
                        </td>
                        <td>$52.16</td>
                      </tr>
                      <tr>
                        <td className="py-2">5</td>
                        <td>Dec 28, 2:32 PM</td>
                        <td>
                          <span className="bg-[#05C16833] text-[#14CA74] px-2 py-1 rounded text-xs">
                            Paid
                          </span>
                        </td>
                        <td>$350.52</td>
                      </tr>
                      <tr>
                        <td className="py-2">6</td>
                        <td>Dec 27, 2:20 PM</td>
                        <td>
                          <span className="bg-[#FFB01633] text-[#FDB52A] px-2 py-1 rounded text-xs">
                            Pending
                          </span>
                        </td>
                        <td>$246.78</td>
                      </tr>
                      <tr>
                        <td className="py-2">7</td>
                        <td>Dec 26, 9:48 AM</td>
                        <td>
                          <span className="bg-[#05C16833] text-[#14CA74] px-2 py-1 rounded text-xs">
                            Paid
                          </span>
                        </td>
                        <td>$64.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* users by country */}
            <div className="bg-[#0B1739] mt-5 text-white p-6 rounded-xl w-full mx-auto">
              <p className="text-base pb-2 text-white">Users by country</p>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 w-full lg:w-1/3">
                <div>
                  <div className="flex items-end gap-2">
                    <h2 className="text-3xl font-semibold">12.4 K</h2>
                    <span className="text-[#14CA74] bg-[#05C16833] bg-opacity-30 px-2 py-0.5 text-sm rounded">
                      28.5%
                    </span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-4">
                  <p className="text-sm text-gray-400">Total Users</p>
                  <button className="text-sm text-gray-400 bg-[#0A1330] p-2 hover:text-white">
                    Export ↓
                  </button>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left List */}
                <div className="w-full lg:w-1/3 space-y-4">
                  {[
                    { name: "United States", users: 3600, percent: "30%" },
                    { name: "United Kingdom", users: 3000, percent: "25%" },
                    { name: "Canada", users: 2400, percent: "20%" },
                    {
                      name: "Australia",
                      users: 1800,
                      percent: "15%",
                      active: true,
                    },
                    { name: "Spain", users: 1500, percent: "15%" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center my-10"
                    >
                      <div className="w-30">
                        <p
                          className={`text-sm ${
                            item.active ? "text-cyan-400" : "text-white"
                          }`}
                        >
                          {item.name}
                        </p>
                        <div className="w-full bg-gray-700 h-1 rounded-full mt-1">
                          <div
                            className={`h-1 rounded-full ${
                              item.active ? "bg-cyan-400" : "bg-purple-500"
                            }`}
                            style={{ width: item.percent }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs">{item.users}</p>
                      </div>
                      <div className="">
                        <p className="text-xs text-gray-400">{item.percent}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Map */}
                <div className="w-full h-full lg:w-2/3 relative">
                  <img
                    src="images/graph-image.png"
                    alt="World map with highlighted regions"
                    className="w-full rounded-lg"
                  />
                  <div className="absolute top-1/2 left-[60%] transform -translate-x-1/2 -translate-y-1/2 bg-[#1B2040] text-cyan-300 p-4 rounded-lg shadow-xl">
                    <p className="text-sm">1.88 K</p>
                    <p className="text-xs text-white">Australia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* popup start */}
            <div className="bg-[#0b1437] p-6 rounded-xl shadow-md w-[800px] my-5">
              <h1 className="text-xl font-semibold mb-6">Users</h1>

              {/* Tabs */}
              <div className="flex space-x-2 mb-4">
                <button className="bg-white text-[#0b1437] px-4 py-1 rounded">
                  Basic
                </button>
                <button className="border border-gray-400 text-gray-400 px-4 py-1 rounded">
                  Pro
                </button>
                <button className="border border-gray-400 text-gray-400 px-4 py-1 rounded">
                  Enterprise
                </button>
              </div>

              {/* Table */}
              <div className="bg-[#0f1b46] rounded-lg overflow-hidden border-b  border-gray-700 pb-5">
                <div className="p-4 border-b  border-gray-700 font-medium">
                  Basic Plan
                </div>
                <table className="w-full text-sm pb-4">
                  <thead className="text-left text-gray-300 py-4">
                    <tr className="">
                      <th className="px-4 py-3">Name</th>
                      <div className="flex justify-start items-center px-2 py-2 ">
                        <span>
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
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                            />
                          </svg>
                        </span>
                        <th className="px-1 py-3">Key Contact</th>
                      </div>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-100">
                    <tr className=" hover:bg-[#19224e] bg-[#0A1330] py-3">
                      <td className="px-4 py-5 flex items-center gap-3">
                        <div className="w-3 h-3 bg-purple-500"></div>
                        Acme Corp
                      </td>
                      <td className="px-4 py-3 text-[#AEB9E1]">
                        john.doe@acme.com
                      </td>
                      <td className="px-4 py-3">
                        <span className="bg-[#18B91F] text-xs px-2 py-1 rounded-full text-white">
                          Active
                        </span>
                      </td>
                      <td className="px-4 py-3 flex space-x-2 ">
                        <button>
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
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                            />
                          </svg>
                        </button>
                        <button>
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
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                    <tr className=" hover:bg-[#19224e] py-3">
                      <td className="px-4 py-5 flex items-center gap-3">
                        <div className="w-3 h-3 bg-purple-500"></div>
                        Globex Inc
                      </td>
                      <td className="px-4 py-3 text-[#AEB9E1]">
                        sarah.smith@globex.com
                      </td>
                      <td className="px-4 py-3">
                        <span className="bg-[#C38F00] text-xs px-2 py-1 rounded-full text-white">
                          Trial
                        </span>
                      </td>
                      <td className="px-4 py-3 flex space-x-2">
                        <button>
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
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                            />
                          </svg>
                        </button>
                        <button>
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
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#19224e] bg-[#0A1330]">
                      <td className="px-4 py-5 flex items-center gap-3">
                        <div className="w-3 h-3 bg-purple-500"></div>
                        Initech
                      </td>
                      <td className="px-4 py-3 text-[#AEB9E1]">
                        peter.gibbons@initech.com
                      </td>
                      <td className="px-4 py-3">
                        <span className="bg-[#18B91F]  text-xs px-2 py-1 rounded-full text-white">
                          Active
                        </span>
                      </td>
                      <td className="px-4 py-3 flex space-x-2">
                        <button>
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
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                            />
                          </svg>
                        </button>
                        <button>
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
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Exit Button */}
              <div className="mt-6 text-left">
                <button className="border border-white px-6 py-1 rounded">
                  Exit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
