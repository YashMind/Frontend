import React from "react";
import Image from "next/image";
const SubscriptionPlans = () => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
