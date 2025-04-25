import React from "react";
import Image from "next/image";
const PriceSection = () => {
  return (
    <div className="price mt-[81px]">
      <div className="container px-4">
        <h1
          className="font-normal text-[24px] sm:text-[30px] text-white text-center sm:text-left"
          style={{ fontFamily: "'Audiowide', sans-serif" }}
        >
          Pricing & Plans
        </h1>
        <img src="/images/heading.png" className="mx-auto sm:mx-0 mt-2" />

        <div className="my-[40px]">
          <div className="flex flex-col gap-3 items-center justify-center sm:flex-row sm:gap-4">
            {/* Active Button */}
            <button className="bg-[#2D2095] text-white px-6 py-2 rounded-[22px] text-lg font-semibold">
              Chat Bot
            </button>

            {/* Inactive Buttons */}
            <button className="border border-white text-white text-lg font-semibold px-6 py-2 rounded-[22px]">
              Voice agent
            </button>

            <button className="border border-white text-white text-lg font-semibold px-6 py-2 rounded-[22px]">
              Chat LLM
            </button>
          </div>

          <div className="flex items-center justify-center mt-8">
            <span className="mr-3 font-medium text-white">Monthly</span>

            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-blue-500 peer-focus:outline-none rounded-full peer peer-checked:bg-gray-300 transition duration-300"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
            </label>

            <span className="ml-3 font-medium text-white">Annually</span>
          </div>
        </div>
        <div className="">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* === BASIC Plan === */}
            <div className="bg-[#1B1441] rounded-tr-[18px] rounded-bl-[18px] border border-[#FFFFFF33] p-6 text-white flex flex-col justify-between">
              <div>
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: "'Audiowide', sans-serif" }}
                >
                  Basic
                </h3>
                <img src="/images/Line.png" />
                <p className="text-sm font-normal mt-[10px]">
                  Access basic animation tools and templates with
                  standard-quality — perfect for beginners to get started, at no
                  cost.
                </p>
                <div className="flex justify-between my-[20px]">
                  <h2 className="text-[28px] font-semibold ">
                    $500{" "}
                    <span className="text-xs font-normal text-[#FFFFFFA1]">
                      /month
                    </span>
                  </h2>
                  <p className="text-base font-normal">500 CREDITS</p>
                </div>
                <p className="font-semibold text-sm mb-[20px]">
                  OR Get Free Trail for 7 days{" "}
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <Image
                      alt="alt"
                      src="/images/star.png"
                      height={20}
                      width={20}
                    />
                    2 Chatbots
                  </li>
                  <li className="flex gap-2">
                    <Image
                      alt="alt"
                      src="/images/star.png"
                      height={20}
                      width={20}
                    />{" "}
                    Rs. 1 for 1000 tokens
                  </li>
                  <li className="flex gap-2">
                    <Image
                      alt="alt"
                      src="/images/star.png"
                      height={20}
                      width={20}
                    />{" "}
                    5 Million Characters
                  </li>
                  <li className="flex gap-2">
                    <Image
                      alt="alt"
                      src="/images/star.png"
                      height={20}
                      width={20}
                    />{" "}
                    Crawl Website Pages 2000 Pages
                  </li>
                  <li className="flex gap-2">
                    <Image
                      alt="alt"
                      src="/images/star.png"
                      height={20}
                      width={20}
                    />{" "}
                    Chat History
                  </li>
                  <li className="flex gap-2">
                    <Image
                      alt="alt"
                      src="/images/star.png"
                      height={20}
                      width={20}
                    />{" "}
                    Add to Unlimited Websites
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <hr className="border-[2.31px] border-transparent [border-image-source:linear-gradient(98.8deg,#DE4DBC_26.92%,#1D86C2_68.19%,#2B126F_132.4%)] [border-image-slice:1] my-[20px]" />
              </div>
            </div>

            {/* === PRO Plan (middle) === */}
            <div className="p-[2.31px] rounded-tr-[18px] rounded-bl-[18px] bg-gradient-to-r from-[#4E2295] to-[#42579D] h-full">
              <div className="bg-[#1B1441] rounded-tr-[16px] rounded-bl-[16px] backdrop-blur-[32.8px] shadow px-5 py-8 text-white flex flex-col justify-between h-full">
                <div>
                  <h3
                    className="text-lg font-bold"
                    style={{ fontFamily: "'Audiowide', sans-serif" }}
                  >
                    Pro
                  </h3>
                  <img src="/images/Line.png" />
                  <p className="text-sm font-normal mt-[10px] mb-[15px]">
                    Unlock advanced AI features, full customization, and
                    high-quality exports — ideal for serious creators.
                  </p>
                  <div className="flex justify-between my-[20px]">
                    <h2 className="text-[28px] font-semibold ">
                      $3000{" "}
                      <span className="text-xs font-normal text-[#FFFFFFA1]">
                        /month
                      </span>
                    </h2>
                    <p className="text-base font-normal">3000 CREDITS</p>
                  </div>
                  <button className="w-full rounded-full bg-gradient-to-r from-[#501794] to-[#40659F] py-2 mb-6 text-white font-medium text-[17px]">
                    Choose This Plan
                  </button>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <Image
                        alt="alt"
                        src="/images/star.png"
                        height={20}
                        width={20}
                      />{" "}
                      5 Chatboot
                    </li>
                    <li className="flex gap-2">
                      <Image
                        alt="alt"
                        src="/images/star.png"
                        height={20}
                        width={20}
                      />{" "}
                      Rs. 1 for 1200 tokens
                    </li>
                    <li className="flex gap-2">
                      <Image
                        alt="alt"
                        src="/images/star.png"
                        height={20}
                        width={20}
                      />{" "}
                      20 Million Characters
                    </li>
                    <li className="flex gap-2">
                      <Image
                        alt="alt"
                        src="/images/star.png"
                        height={20}
                        width={20}
                      />{" "}
                      Crawl Website Upto 10000 Pages
                    </li>
                    <li className="flex gap-2">
                      <Image
                        alt="alt"
                        src="/images/star.png"
                        height={20}
                        width={20}
                      />{" "}
                      Chat History
                    </li>
                    <li className="flex gap-2">
                      <Image
                        alt="alt"
                        src="/images/star.png"
                        height={20}
                        width={20}
                      />{" "}
                      Chat Translation
                    </li>
                    <li className="flex gap-2">
                      <Image
                        alt="alt"
                        src="/images/star.png"
                        height={20}
                        width={20}
                      />{" "}
                      Integrations
                    </li>
                    <li className="flex gap-2">
                      <Image
                        alt="alt"
                        src="/images/star.png"
                        height={20}
                        width={20}
                      />{" "}
                      Zapier AI Actions
                    </li>
                    <li className="flex gap-2">
                      <Image
                        alt="alt"
                        src="/images/star.png"
                        height={20}
                        width={20}
                      />{" "}
                      Auto Retrain
                    </li>
                    <li className="flex gap-2">
                      <Image
                        alt="alt"
                        src="/images/star.png"
                        height={20}
                        width={20}
                      />{" "}
                      Chat History
                    </li>
                    <li className="flex gap-2">
                      <Image
                        alt="alt"
                        src="/images/star.png"
                        height={20}
                        width={20}
                      />{" "}
                      Add to Unlimited Websites
                    </li>
                    <li className="flex gap-2">
                      <Image
                        alt="alt"
                        src="/images/star.png"
                        height={20}
                        width={20}
                      />{" "}
                      5 Team Members
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <hr className="border-[2.31px] border-transparent [border-image-source:linear-gradient(98.8deg,#DE4DBC_26.92%,#1D86C2_68.19%,#2B126F_132.4%)] [border-image-slice:1] my-[20px]" />
                </div>
              </div>
            </div>

            {/* === ENT Plan === */}
            <div className="bg-[#1B1441] rounded-tr-[18px] rounded-bl-[18px] border border-[#FFFFFF33] p-6 text-white flex flex-col justify-between">
              <div>
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: "'Audiowide', sans-serif" }}
                >
                  enterprise
                </h3>
                <img src="/images/Line.png" />
                <p className="text-sm font-normal mt-[10px] mb-[15px]">
                  Designed for businesses with unlimited exports, custom
                  integrations, and dedicated support—custom pricing available.
                </p>
                <div className="flex justify-between my-[20px]">
                  <h2 className="text-[28px] font-semibold ">
                    $10,000{" "}
                    <span className="text-xs font-normal text-[#FFFFFFA1]">
                      /month
                    </span>
                  </h2>
                  <p className="text-base font-normal">10,000 CREDITS</p>
                </div>
                <button className="w-full rounded-full bg-gradient-to-r from-[#501794] to-[#40659F] py-2 mb-6 text-white font-medium text-[17px]">
                  Choose This Plan
                </button>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <Image
                      alt="alt"
                      src="/images/star.png"
                      height={20}
                      width={20}
                    />{" "}
                    10 Chatboot
                  </li>
                  <li className="flex gap-2">
                    <Image
                      alt="alt"
                      src="/images/star.png"
                      height={20}
                      width={20}
                    />{" "}
                    Rs. 1 for 1500 tokens
                  </li>
                  <li className="flex gap-2">
                    <Image
                      alt="alt"
                      src="/images/star.png"
                      height={20}
                      width={20}
                    />{" "}
                    50 Million Characters
                  </li>
                  <li className="flex gap-2">
                    <Image
                      alt="alt"
                      src="/images/star.png"
                      height={20}
                      width={20}
                    />{" "}
                    Crawl Website Upto 30000 Pages
                  </li>
                  <li className="flex gap-2">
                    <Image
                      alt="alt"
                      src="/images/star.png"
                      height={20}
                      width={20}
                    />{" "}
                    Chat History
                  </li>
                  <li className="flex gap-2">
                    <Image
                      alt="alt"
                      src="/images/star.png"
                      height={20}
                      width={20}
                    />{" "}
                    Chat Translation
                  </li>
                  <li className="flex gap-2">
                    <Image
                      alt="alt"
                      src="/images/star.png"
                      height={20}
                      width={20}
                    />{" "}
                    Integrations
                  </li>
                  <li className="flex gap-2">
                    <Image
                      alt="alt"
                      src="/images/star.png"
                      height={20}
                      width={20}
                    />{" "}
                    Zapier AI Actions
                  </li>
                  <li className="flex gap-2">
                    <Image
                      alt="alt"
                      src="/images/star.png"
                      height={20}
                      width={20}
                    />{" "}
                    Zapier AI Actions
                  </li>
                  <li className="flex gap-2">
                    <Image
                      alt="alt"
                      src="/images/star.png"
                      height={20}
                      width={20}
                    />{" "}
                    Auto Retrain
                  </li>
                  <li className="flex gap-2">
                    <Image
                      alt="alt"
                      src="/images/star.png"
                      height={20}
                      width={20}
                    />{" "}
                    Chat History
                  </li>
                  <li className="flex gap-2">
                    <Image
                      alt="alt"
                      src="/images/star.png"
                      height={20}
                      width={20}
                    />{" "}
                    Add to Unlimited Websites
                  </li>
                  <li className="flex gap-2">
                    <Image
                      alt="alt"
                      src="/images/star.png"
                      height={20}
                      width={20}
                    />{" "}
                    5 Team Members
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <hr className="border-[2.31px] border-transparent [border-image-source:linear-gradient(98.8deg,#DE4DBC_26.92%,#1D86C2_68.19%,#2B126F_132.4%)] [border-image-slice:1] my-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
