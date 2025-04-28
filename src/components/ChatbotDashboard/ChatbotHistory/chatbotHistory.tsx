import React from "react";
import Image from "next/image";

const ChatbotHistory = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold my-4">Leads</h2>
      {/* <table></table> */}
      <div className="bg-white rounded-b-xl overflow-hidden text-sm w-[550px] xl:w-full rounded-[40px] mb-8 mr-3">
        {/* Top Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4  px-6 py-4 ">
          <div className="flex items-center gap-5">
            <label htmlFor="entries" className="text-gray-700 font-medium">
              Show
            </label>
            <div className="relative">
              <select
                id="entries"
                className=" px-2 py-1 bg-[#F8F9FD] rounded-md text-black outline-0 w-[150px]"
              >
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span className="text-gray-700 font-medium absolute right-[23px] top-[5px]">
                entries
              </span>
            </div>
            <div className="flex items-center bg-gray-100 rounded-lg p-3 w-full max-w-md">
              <svg
                className="w-5 h-5 text-gray-500 mr-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className=" focus:outline-none  text-gray-700 placeholder-gray-500 w-[253px]"
              />
            </div>
            {/* <div className="relative w-full max-w-xs">
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
              <input type="text" placeholder="search" />
            </div> */}

            <div className=" flex items-center gap-2 px-4 py-2 rounded-md w-[370px]  border border-white text-[#505A65] bg-[#F8F9FD] focus:outline-none focus:ring-2 focus:ring-purple-500 ">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7704 1.82418L10.1312 1.8242V0.918372C10.1312 0.667258 9.92778 0.463867 9.67667 0.463867C9.42555 0.463867 9.22216 0.667258 9.22216 0.918372V1.82397H5.58613V0.918372C5.58613 0.667258 5.38274 0.463867 5.13162 0.463867C4.88051 0.463867 4.67712 0.667258 4.67712 0.918372V1.82397H1.04426C0.542263 1.82397 0.135254 2.23098 0.135254 2.73298V14.0956C0.135254 14.5976 0.542263 15.0046 1.04426 15.0046H13.7704C14.2724 15.0046 14.6794 14.5976 14.6794 14.0956V2.73298C14.6794 2.23119 14.2724 1.82418 13.7704 1.82418ZM13.7704 14.0956H1.04426V2.73298H4.67712V3.19089C4.67712 3.44199 4.88051 3.6454 5.13162 3.6454C5.38274 3.6454 5.58613 3.44199 5.58613 3.19089V2.73321H9.22216V3.19112C9.22216 3.44223 9.42555 3.64563 9.67667 3.64563C9.92778 3.64563 10.1312 3.44223 10.1312 3.19112V2.73321H13.7704V14.0956ZM10.5889 7.73274H11.4979C11.7488 7.73274 11.9524 7.52913 11.9524 7.27824V6.36923C11.9524 6.11834 11.7488 5.91473 11.4979 5.91473H10.5889C10.338 5.91473 10.1344 6.11834 10.1344 6.36923V7.27824C10.1344 7.52913 10.338 7.73274 10.5889 7.73274ZM10.5889 11.3686H11.4979C11.7488 11.3686 11.9524 11.1652 11.9524 10.914V10.005C11.9524 9.75415 11.7488 9.55053 11.4979 9.55053H10.5889C10.338 9.55053 10.1344 9.75415 10.1344 10.005V10.914C10.1344 11.1654 10.338 11.3686 10.5889 11.3686ZM7.86183 9.55053H6.95282C6.70194 9.55053 6.49832 9.75415 6.49832 10.005V10.914C6.49832 11.1652 6.70194 11.3686 6.95282 11.3686H7.86183C8.11272 11.3686 8.31634 11.1652 8.31634 10.914V10.005C8.31634 9.75438 8.11272 9.55053 7.86183 9.55053ZM7.86183 5.91473H6.95282C6.70194 5.91473 6.49832 6.11834 6.49832 6.36923V7.27824C6.49832 7.52913 6.70194 7.73274 6.95282 7.73274H7.86183C8.11272 7.73274 8.31634 7.52913 8.31634 7.27824V6.36923C8.31634 6.11812 8.11272 5.91473 7.86183 5.91473ZM4.22579 5.91473H3.31679C3.0659 5.91473 2.86228 6.11834 2.86228 6.36923V7.27824C2.86228 7.52913 3.0659 7.73274 3.31679 7.73274H4.22579C4.47668 7.73274 4.6803 7.52913 4.6803 7.27824V6.36923C4.6803 6.11812 4.47668 5.91473 4.22579 5.91473ZM4.22579 9.55053H3.31679C3.0659 9.55053 2.86228 9.75415 2.86228 10.005V10.914C2.86228 11.1652 3.0659 11.3686 3.31679 11.3686H4.22579C4.47668 11.3686 4.6803 11.1652 4.6803 10.914V10.005C4.6803 9.75438 4.47668 9.55053 4.22579 9.55053Z"
                  fill="#505A65"
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
        <div className="overflow-x-auto">
          <table className="min-w-[800px] w-full  text-left text-gray-800">
            <thead className="bg-white text-gray-600 border-y border-gray-300">
              <tr>
                <th className="p-4">
                  <input type="checkbox" className="w-4 h-4 accent-[#5E2EFF]" />
                </th>
                <th className="py-[14px] text-sm font-bold text-black">
                  Country
                </th>
                <th className="py-[14px] text-sm font-bold text-black">
                  Started
                </th>
                <th className="py-[14px] text-sm font-bold text-black">
                  Status
                </th>
                <th className="py-[14px] text-sm font-bold text-black">
                  Language
                </th>
                <th className="py-[14px] text-sm font-bold text-black">
                  Last message
                </th>
                <th className="py-[14px] text-sm font-bold text-black">
                  Platform
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
                    <td className="p-4 text-xs font-medium text-black">
                      India
                    </td>
                    <td className="p-4 text-xs font-medium text-black">
                      2 hours ago
                    </td>
                    <td className="p-4 text-xs font-medium text-black">
                      Original
                    </td>
                    <td className="p-4 text-xs font-medium text-black">
                      Original
                    </td>
                    <td className=" truncate max-w-[150px] p-4 text-xs font-medium text-black">
                      Hi, how are....
                    </td>
                    <td className="py-4">
                      <span className="bg-[#DEDEDE] px-3 py-1 rounded-full text-xs font-medium text-black">
                        Web
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
        </div>
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
    </div>
  );
};

export default ChatbotHistory;
