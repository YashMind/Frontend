import Image from "next/image";
import React from "react";

const AdminTopbar = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mt-[40px]">Welcome back, John</h2>
      <p className="text-[#AEB9E1]  text-xs font-normal ">
        Measure your advertising ROI and report website traffic.
      </p>
      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full  mt-[30px]">
        {/* Total Users Card */}
        <div className="bg-[#0B1739] p-[18] rounded-lg shadow-md border border-[#343B4F]">
          <div className="flex items-center justify-between text-sm text-gray-400 mb-2 font-medium ">
            <span className="flex items-center gap-2">
              <Image alt="alt" src="/images/user.png" height={12} width={12} />
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
              <Image alt="alt" src="/images/add.png" height={12} width={12} />
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
  );
};

export default AdminTopbar;
