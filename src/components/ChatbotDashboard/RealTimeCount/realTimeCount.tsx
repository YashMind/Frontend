import Image from "next/image";
import React from "react";

const RealTimeCount = () => {
  return (
    <div className="  p-4 mb-[20px] mt-[108px] mx-auto w-[1200px] ">
      <div className="flex flex-wrap gap-7 p-6">
        {/* Card */}
        <div className="bg-white rounded-lg shadow-md p-[14px] w-48 relative">
          <div className=" mb-2">
            <div className="bg-[#EC9B43] p-2 rounded-full w-[36px] h-[36px] absolute -top-[15px] -left-[18px]">
              {/* Icon */}
              <span role="img" aria-label="Chat">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1580_20804)">
                    <path
                      d="M9.38029 0.534668C14.2619 0.534668 18.5184 4.56457 18.5184 9.21586C18.5184 13.7886 14.3578 17.3871 9.38029 17.3871C8.31567 17.3879 7.25769 17.2195 6.24592 16.8882C5.82191 17.2994 5.67662 17.4392 4.77651 18.3074C4.12771 18.7972 3.51728 18.9635 2.97174 18.6546C2.42162 18.3439 2.25622 17.739 2.36862 16.9421L2.73415 14.823C1.14686 13.3298 0.242188 11.356 0.242188 9.21586C0.242188 4.56457 4.4978 0.534668 9.38029 0.534668ZM9.38029 1.814C5.18955 1.814 1.52152 5.28648 1.52152 9.21586C1.52152 11.0846 2.35492 12.8053 3.82432 14.0865L3.8426 14.102L4.114 14.3378L4.05278 14.6941L3.92667 15.4289L3.89286 15.6244L3.63242 17.1395C3.6175 17.2416 3.60835 17.3444 3.60501 17.4475V17.5343C3.60501 17.5385 3.6044 17.541 3.60318 17.5416C3.60958 17.5324 3.73386 17.4931 3.94677 17.3378L5.92974 15.4133L6.30806 15.5559C7.29085 15.9223 8.33139 16.1096 9.38029 16.1087C13.6898 16.1087 17.2391 13.0383 17.2391 9.21586C17.2391 5.28739 13.571 1.814 9.38029 1.814ZM5.01867 7.67426C5.20277 7.66754 5.38633 7.69799 5.55839 7.7638C5.73045 7.82961 5.88748 7.92943 6.0201 8.05729C6.15272 8.18515 6.2582 8.33843 6.33025 8.50797C6.4023 8.67752 6.43943 8.85985 6.43943 9.04406C6.43943 9.22828 6.4023 9.41061 6.33025 9.58015C6.2582 9.7497 6.15272 9.90298 6.0201 10.0308C5.88748 10.1587 5.73045 10.2585 5.55839 10.3243C5.38633 10.3901 5.20277 10.4206 5.01867 10.4139C4.66404 10.4009 4.32825 10.2509 4.08194 9.99545C3.83563 9.73998 3.698 9.39894 3.698 9.04406C3.698 8.68919 3.83563 8.34815 4.08194 8.09268C4.32825 7.83721 4.66404 7.68722 5.01867 7.67426ZM9.58589 7.67426C9.76999 7.66754 9.95355 7.69799 10.1256 7.7638C10.2977 7.82961 10.4547 7.92943 10.5873 8.05729C10.7199 8.18515 10.8254 8.33843 10.8975 8.50797C10.9695 8.67752 11.0067 8.85985 11.0067 9.04406C11.0067 9.22828 10.9695 9.41061 10.8975 9.58015C10.8254 9.7497 10.7199 9.90298 10.5873 10.0308C10.4547 10.1587 10.2977 10.2585 10.1256 10.3243C9.95355 10.3901 9.76999 10.4206 9.58589 10.4139C9.23126 10.4009 8.89547 10.2509 8.64916 9.99545C8.40285 9.73998 8.26522 9.39894 8.26522 9.04406C8.26522 8.68919 8.40285 8.34815 8.64916 8.09268C8.89547 7.83721 9.23126 7.68722 9.58589 7.67426ZM14.1522 7.67426C14.3363 7.66754 14.5199 7.69799 14.6919 7.7638C14.864 7.82961 15.021 7.92943 15.1536 8.05729C15.2862 8.18515 15.3917 8.33843 15.4638 8.50797C15.5358 8.67752 15.573 8.85985 15.573 9.04406C15.573 9.22828 15.5358 9.41061 15.4638 9.58015C15.3917 9.7497 15.2862 9.90298 15.1536 10.0308C15.021 10.1587 14.864 10.2585 14.6919 10.3243C14.5199 10.3901 14.3363 10.4206 14.1522 10.4139C13.7976 10.4009 13.4618 10.2509 13.2155 9.99545C12.9692 9.73998 12.8315 9.39894 12.8315 9.04406C12.8315 8.68919 12.9692 8.34815 13.2155 8.09268C13.4618 7.83721 13.7976 7.68722 14.1522 7.67426Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1580_20804">
                      <rect
                        width="18.2762"
                        height="18.2762"
                        fill="white"
                        transform="translate(0.242188 0.534668)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
            <h2 className="text-base font-bold text-black text-center">
              Chat Bot
            </h2>
          </div>
          <div className="flex items-center gap-2 justify-between">
            <p className="text-xs text-black font-normal">Consumed</p>
            <p className="text-xs font-semibold text-black">200</p>
          </div>
          <div className="flex items-center gap-2 justify-between mt-[7px]">
            <p className="text-xs text-black font-normal">Used Credit</p>
            <p className="text-xs font-semibold text-black">8</p>
          </div>
          <div className="w-full h-[10px] bg-gray-200 rounded-full mt-2">
            <div className="h-full bg-[#2B255C] rounded-full w-[20%]"></div>
          </div>
          <p className="text-xs text-black mt-[7px] text-right font-semibold">
            20%
          </p>
        </div>

        {/* Copy the above block and change content for other cards */}
        {/* Example: Voice Agent */}
        <div className="bg-white rounded-lg shadow-md p-[14px] w-48 relative">
          <div className=" mb-2">
            <div className="bg-[#6AC0E7] p-2 rounded-full w-[36px] h-[36px] absolute -top-[15px] -left-[18px]">
              {/* Icon */}
              <span role="img" aria-label="Chat">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.40087 11.1957C8.76628 11.1957 8.22688 10.9736 7.78266 10.5294C7.33845 10.0852 7.11634 9.54578 7.11634 8.91119V4.34214C7.11634 3.70755 7.33845 3.16815 7.78266 2.72394C8.22688 2.27972 8.76628 2.05762 9.40087 2.05762C10.0355 2.05762 10.5749 2.27972 11.0191 2.72394C11.4633 3.16815 11.6854 3.70755 11.6854 4.34214V8.91119C11.6854 9.54578 11.4633 10.0852 11.0191 10.5294C10.5749 10.9736 10.0355 11.1957 9.40087 11.1957ZM8.63936 16.5263V14.1846C7.31941 14.0069 6.22792 13.4168 5.36488 12.4141C4.50183 11.4115 4.07031 10.2438 4.07031 8.91119H5.59333C5.59333 9.96461 5.96469 10.8627 6.70741 11.6054C7.45014 12.3481 8.34796 12.7192 9.40087 12.7187C10.4538 12.7182 11.3519 12.3469 12.0951 11.6046C12.8383 10.8624 13.2094 9.96461 13.2084 8.91119H14.7314C14.7314 10.2438 14.2999 11.4115 13.4369 12.4141C12.5738 13.4168 11.4823 14.0069 10.1624 14.1846V16.5263H8.63936Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <h2 className="text-base font-bold text-black text-center">
              Voice Agent
            </h2>
          </div>
          <div className="flex items-center gap-2 justify-between">
            <p className="text-xs text-black font-normal">Consumed</p>
            <p className="text-xs font-semibold text-black">200</p>
          </div>
          <div className="flex items-center gap-2 justify-between mt-[7px]">
            <p className="text-xs text-black font-normal">Used Credit</p>
            <p className="text-xs font-semibold text-black">8</p>
          </div>
          <div className="w-full h-[10px] bg-gray-200 rounded-full mt-2">
            <div className="h-full bg-[#2B255C] rounded-full w-[20%]"></div>
          </div>
          <p className="text-xs text-black mt-[7px] text-right font-semibold">
            20%
          </p>
        </div>

        {/* Similarly Chat LLM, Total Credit, Main Balance */}
        <div className="bg-white rounded-lg shadow-md p-[14px] w-48 relative">
          <div className=" mb-2">
            <div className="bg-[#6AC0E7] p-2 rounded-full w-[36px] h-[36px] absolute -top-[15px] -left-[18px]">
              {/* Icon */}
              <span role="img" aria-label="Chat">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.40087 11.1957C8.76628 11.1957 8.22688 10.9736 7.78266 10.5294C7.33845 10.0852 7.11634 9.54578 7.11634 8.91119V4.34214C7.11634 3.70755 7.33845 3.16815 7.78266 2.72394C8.22688 2.27972 8.76628 2.05762 9.40087 2.05762C10.0355 2.05762 10.5749 2.27972 11.0191 2.72394C11.4633 3.16815 11.6854 3.70755 11.6854 4.34214V8.91119C11.6854 9.54578 11.4633 10.0852 11.0191 10.5294C10.5749 10.9736 10.0355 11.1957 9.40087 11.1957ZM8.63936 16.5263V14.1846C7.31941 14.0069 6.22792 13.4168 5.36488 12.4141C4.50183 11.4115 4.07031 10.2438 4.07031 8.91119H5.59333C5.59333 9.96461 5.96469 10.8627 6.70741 11.6054C7.45014 12.3481 8.34796 12.7192 9.40087 12.7187C10.4538 12.7182 11.3519 12.3469 12.0951 11.6046C12.8383 10.8624 13.2094 9.96461 13.2084 8.91119H14.7314C14.7314 10.2438 14.2999 11.4115 13.4369 12.4141C12.5738 13.4168 11.4823 14.0069 10.1624 14.1846V16.5263H8.63936Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <h2 className="text-base font-bold text-black text-center">
              Chat LLM
            </h2>
          </div>
          <div className="flex items-center gap-2 justify-between">
            <p className="text-xs text-black font-normal">Consumed</p>
            <p className="text-xs font-semibold text-black">200</p>
          </div>
          <div className="flex items-center gap-2 justify-between mt-[7px]">
            <p className="text-xs text-black font-normal">Used Credit</p>
            <p className="text-xs font-semibold text-black">8</p>
          </div>
          <div className="w-full h-[10px] bg-gray-200 rounded-full mt-2">
            <div className="h-full bg-[#2B255C] rounded-full w-[20%]"></div>
          </div>
          <p className="text-xs text-black mt-[7px] text-right font-semibold">
            20%
          </p>
        </div>

        {/* Total Credit */}
        <div className="bg-white rounded-lg shadow-md p-[14px] w-48 relative">
          <div className=" mb-2">
            <div className="bg-[#6AC0E7] p-2 rounded-full w-[36px] h-[36px] absolute -top-[15px] -left-[18px]">
              {/* Icon */}
              <span role="img" aria-label="Chat">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.40087 11.1957C8.76628 11.1957 8.22688 10.9736 7.78266 10.5294C7.33845 10.0852 7.11634 9.54578 7.11634 8.91119V4.34214C7.11634 3.70755 7.33845 3.16815 7.78266 2.72394C8.22688 2.27972 8.76628 2.05762 9.40087 2.05762C10.0355 2.05762 10.5749 2.27972 11.0191 2.72394C11.4633 3.16815 11.6854 3.70755 11.6854 4.34214V8.91119C11.6854 9.54578 11.4633 10.0852 11.0191 10.5294C10.5749 10.9736 10.0355 11.1957 9.40087 11.1957ZM8.63936 16.5263V14.1846C7.31941 14.0069 6.22792 13.4168 5.36488 12.4141C4.50183 11.4115 4.07031 10.2438 4.07031 8.91119H5.59333C5.59333 9.96461 5.96469 10.8627 6.70741 11.6054C7.45014 12.3481 8.34796 12.7192 9.40087 12.7187C10.4538 12.7182 11.3519 12.3469 12.0951 11.6046C12.8383 10.8624 13.2094 9.96461 13.2084 8.91119H14.7314C14.7314 10.2438 14.2999 11.4115 13.4369 12.4141C12.5738 13.4168 11.4823 14.0069 10.1624 14.1846V16.5263H8.63936Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <h2 className="text-base font-bold text-black text-center">
              Wallet Status
            </h2>
          </div>
          <div className="flex items-center gap-2 justify-between">
            <p className="text-xs text-black font-normal">Consumed</p>
            <p className="text-xs font-semibold text-black">200</p>
          </div>
          <div className="flex items-center gap-2 justify-between mt-[7px]">
            <p className="text-xs text-black font-normal">Used Credit</p>
            <p className="text-xs font-semibold text-black">8</p>
          </div>
          <div className="w-full h-[10px] bg-gray-200 rounded-full mt-2">
            <div className="h-full bg-[#2B255C] rounded-full w-[20%]"></div>
          </div>
          <p className="text-xs text-black mt-[7px] text-right font-semibold">
            20%
          </p>
        </div>

        {/* Main Balance */}
        <div className="bg-white rounded-lg shadow-md p-[14px] w-48 relative">
          <div className=" mb-2">
            <div className="bg-[#6AC0E7] p-2 rounded-full w-[36px] h-[36px] absolute -top-[15px] -left-[18px]">
              {/* Icon */}
              <span role="img" aria-label="Chat">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.40087 11.1957C8.76628 11.1957 8.22688 10.9736 7.78266 10.5294C7.33845 10.0852 7.11634 9.54578 7.11634 8.91119V4.34214C7.11634 3.70755 7.33845 3.16815 7.78266 2.72394C8.22688 2.27972 8.76628 2.05762 9.40087 2.05762C10.0355 2.05762 10.5749 2.27972 11.0191 2.72394C11.4633 3.16815 11.6854 3.70755 11.6854 4.34214V8.91119C11.6854 9.54578 11.4633 10.0852 11.0191 10.5294C10.5749 10.9736 10.0355 11.1957 9.40087 11.1957ZM8.63936 16.5263V14.1846C7.31941 14.0069 6.22792 13.4168 5.36488 12.4141C4.50183 11.4115 4.07031 10.2438 4.07031 8.91119H5.59333C5.59333 9.96461 5.96469 10.8627 6.70741 11.6054C7.45014 12.3481 8.34796 12.7192 9.40087 12.7187C10.4538 12.7182 11.3519 12.3469 12.0951 11.6046C12.8383 10.8624 13.2094 9.96461 13.2084 8.91119H14.7314C14.7314 10.2438 14.2999 11.4115 13.4369 12.4141C12.5738 13.4168 11.4823 14.0069 10.1624 14.1846V16.5263H8.63936Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <h2 className="text-base font-bold text-black text-center">
              Balance
            </h2>
          </div>
          <div className="flex items-center gap-2 justify-between">
            <p className="text-xs text-black font-normal">Balance Credit</p>
            <p className="text-xs font-semibold text-black">500</p>
          </div>
          <div className="text-center">
            <button className="mt-4 bg-[#5AB88B] font-semibold text-white text-xs py-2 rounded-md hover:bg-green-600 transition px-4">
              Add Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeCount;
