import React from 'react'

const PriceSection = () => {
  return (
    <div className="price mt-[81px]">
            <div className="container">
              <h1
                className="font-normal text-[30px] text-white"
                style={{
                  fontFamily: "'Audiowide', sans-serif",
                }}
              >
                Pricing & Plans
              </h1>
              <img src="/images/heading.png" />
              <div className="pt-12 px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-8 h-full center-img">
                  {/* FREE Plan */}
                  <div className=" bg-[#1B1441] rounded-tr-[18px] rounded-bl-[18px]  border  border-[#FFFFFF33] p-6 text-white w-full md:max-w-[350px] flex flex-col justify-between min-h-full">
                    <div>
                      <h3
                        className="text-lg font-bold   "
                        style={{
                          fontFamily: "'Audiowide', sans-serif",
                        }}
                      >
                        Basic
                      </h3>
                      <span className="">
                        {" "}
                        <img src="/images/Line.png" />
                      </span>
                      <p className="text-sm font-normal mt-[10px] mb-[15px]">
                        Access basic animation tools and templates with
                        standard-quality perfect for beginners to get started, at no
                        cost
                      </p>
                      <h2 className="text-[28px] font-semibold pb-[65px]">
                        $0{" "}
                        <span className="text-xs font-normal text-[#FFFFFFA1]">
                          /month
                        </span>
                      </h2>
                      <ul className="mb-6 space-y-2 text-sm">
                        <li className="flex gap-2">
                          <span>
                            <img src="/images/star.png" />
                          </span>{" "}
                          Lorem ipsum dolor
                        </li>
                        <li className="flex gap-2">
                          <span>
                            <img src="/images/star.png" />
                          </span>{" "}
                          Lorem ipsum dolor
                        </li>
                        <li className="flex gap-2">
                          <span>
                            <img src="/images/star.png" />
                          </span>{" "}
                          Lorem ipsum dolor
                        </li>
                        <li className="flex gap-2">
                          <span>
                            <img src="/images/star.png" />
                          </span>{" "}
                          Lorem ipsum dolor
                        </li>
                      </ul>
                    </div>
                    <div>
                      <hr className="border-[2.31px] border-transparent [border-image-source:linear-gradient(98.8deg,#DE4DBC_26.92%,#1D86C2_68.19%,#2B126F_132.4%)] [border-image-slice:1] my-[20px]" />
                      <p className="text-xs">• 100% Satisfaction Guarantee</p>
                      <p className="text-xs">• 24 x 7 Customer Support</p>
                    </div>
                  </div>
    
                  {/* BASIC Plan */}
                  <div className="p-[2.31px] rounded-tr-[18px] h-[530px] rounded-bl-[18px] bg-gradient-to-r from-[#4E2295] to-[#42579D]">
                    <div className="bg-[#1B1441] rounded-tr-[16px] rounded-bl-[16px] backdrop-blur-[32.8032px] shadow-[0px_2.62px_13.12px_-0.66px_#00000000] px-[20px] py-[31px] text-white w-full max-w-[412px] flex flex-col justify-between min-h-full">
                      <div>
                        <h3
                          className="text-lg font-bold"
                          style={{
                            fontFamily: "'Audiowide', sans-serif",
                          }}
                        >
                          Pro
                        </h3>
                        <span>
                          <img src="/images/Line.png" />
                        </span>
                        <p className="text-sm font-normal mt-[10px] mb-[15px]">
                          Unlock advanced AI features, full customization, and
                          high-quality exports—ideal for serious creators at
                          $19.99/month.
                        </p>
                        <h2 className="text-[28px] font-semibold pb-[27px]">
                          $4,200{" "}
                          <span className="text-xs font-normal text-[#FFFFFFA1]">
                            /month
                          </span>
                        </h2>
                        <button className="w-full rounded-full bg-[linear-gradient(95.5deg,_#501794_-27.34%,_#40659F_117.34%)] py-2 mb-6 text-white font-medium text-[17px]">
                          Choose This Plan
                        </button>
                        <ul className="space-y-2 text-sm">
                          <li className="flex gap-2">
                            <span>
                              <img src="/images/star.png" />
                            </span>{" "}
                            Lorem ipsum dolor
                          </li>
                          <li className="flex gap-2">
                            <span>
                              <img src="/images/star.png" />
                            </span>{" "}
                            Lorem ipsum dolor
                          </li>
                          <li className="flex gap-2">
                            <span>
                              <img src="/images/star.png" />
                            </span>{" "}
                            Lorem ipsum dolor
                          </li>
                          <li className="flex gap-2">
                            <span>
                              <img src="/images/star.png" />
                            </span>{" "}
                            Lorem ipsum dolor
                          </li>
                        </ul>
                      </div>
                      <div>
                        <hr className="border-purple-400 mb-4" />
                        <p className="text-xs">• 100% Satisfaction Guarantee</p>
                        <p className="text-xs">• 24 x 7 Customer Support</p>
                      </div>
                    </div>
                  </div>
    
                  {/* PRO Plan */}
                  <div className="bg-[#1B1441] rounded-tr-[18px] rounded-bl-[18px]   border  border-[#FFFFFF33] p-6 text-white w-full md:max-w-[350px] flex flex-col justify-between min-h-full">
                    <div>
                      <h3
                        className="text-lg font-bold   "
                        style={{
                          fontFamily: "'Audiowide', sans-serif",
                        }}
                      >
                        ENT
                      </h3>
                      <span className="">
                        {" "}
                        <img src="/images/Line.png" />
                      </span>
                      <p className="text-sm font-normal mt-[10px] mb-[15px]">
                        Designed for teams and businesses with unlimited exports,
                        custom integrations, and dedicated support—custom pricing
                        available.
                      </p>
                      <h2 className=" text-[28px] font-semibold pb-[27px]">
                        $4,200{" "}
                        <span className="text-xs font-normal text-[#FFFFFFA1]">
                          /month
                        </span>
                      </h2>
                      <button className="w-full rounded-full bg-[linear-gradient(95.5deg,_#501794_-27.34%,_#40659F_117.34%)] py-2 mb-6 text-white font-medium text-[17px]">
                        Choose This Plan
                      </button>
                      <ul className="mb-6 space-y-2 text-sm">
                        <li className="flex gap-2">
                          <span>
                            <img src="/images/star.png" />
                          </span>{" "}
                          Lorem ipsum dolor
                        </li>
                        <li className="flex gap-2">
                          <span>
                            <img src="/images/star.png" />
                          </span>{" "}
                          Lorem ipsum dolor
                        </li>
                        <li className="flex gap-2">
                          <span>
                            <img src="/images/star.png" />
                          </span>{" "}
                          Lorem ipsum dolor
                        </li>
                        <li className="flex gap-2">
                          <span>
                            <img src="/images/star.png" />
                          </span>{" "}
                          Lorem ipsum dolor
                        </li>
                      </ul>
                    </div>
                    <div>
                      <hr className="border-blue-400 mb-4" />
                      <p className="text-xs">• 100% Satisfaction Guarantee</p>
                      <p className="text-xs">• 24 x 7 Customer Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default PriceSection;
