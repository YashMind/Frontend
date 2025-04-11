import React from "react";

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

        <div className="pt-12">
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
                <p className="text-sm font-normal mt-[10px] mb-[15px]">
                  Access basic animation tools and templates with
                  standard-quality — perfect for beginners to get started, at no
                  cost.
                </p>
                <h2 className="text-[28px] font-semibold pb-[30px]">
                  $0{" "}
                  <span className="text-xs font-normal text-[#FFFFFFA1]">
                    /month
                  </span>
                </h2>
                <ul className="space-y-2 text-sm">
                  {[...Array(4)].map((_, i) => (
                    <li className="flex gap-2" key={i}>
                      <img src="/images/star.png" /> Lorem ipsum dolor
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <hr className="border-[2.31px] border-transparent [border-image-source:linear-gradient(98.8deg,#DE4DBC_26.92%,#1D86C2_68.19%,#2B126F_132.4%)] [border-image-slice:1] my-[20px]" />
                <p className="text-xs">• 100% Satisfaction Guarantee</p>
                <p className="text-xs">• 24 x 7 Customer Support</p>
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
                  <h2 className="text-[28px] font-semibold pb-[20px]">
                    $4,200{" "}
                    <span className="text-xs font-normal text-[#FFFFFFA1]">
                      /month
                    </span>
                  </h2>
                  <button className="w-full rounded-full bg-gradient-to-r from-[#501794] to-[#40659F] py-2 mb-6 text-white font-medium text-[17px]">
                    Choose This Plan
                  </button>
                  <ul className="space-y-2 text-sm">
                    {[...Array(4)].map((_, i) => (
                      <li className="flex gap-2" key={i}>
                        <img src="/images/star.png" /> Lorem ipsum dolor
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <hr className="border-purple-400 mb-4" />
                  <p className="text-xs">• 100% Satisfaction Guarantee</p>
                  <p className="text-xs">• 24 x 7 Customer Support</p>
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
                  ENT
                </h3>
                <img src="/images/Line.png" />
                <p className="text-sm font-normal mt-[10px] mb-[15px]">
                  Designed for businesses with unlimited exports, custom
                  integrations, and dedicated support—custom pricing available.
                </p>
                <h2 className="text-[28px] font-semibold pb-[20px]">
                  $4,200{" "}
                  <span className="text-xs font-normal text-[#FFFFFFA1]">
                    /month
                  </span>
                </h2>
                <button className="w-full rounded-full bg-gradient-to-r from-[#501794] to-[#40659F] py-2 mb-6 text-white font-medium text-[17px]">
                  Choose This Plan
                </button>
                <ul className="space-y-2 text-sm">
                  {[...Array(4)].map((_, i) => (
                    <li className="flex gap-2" key={i}>
                      <img src="/images/star.png" /> Lorem ipsum dolor
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <hr className="border-blue-400 mb-4" />
                <p className="text-xs">• 100% Satisfaction Guarantee</p>
                <p className="text-xs">• 24 x 7 Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
