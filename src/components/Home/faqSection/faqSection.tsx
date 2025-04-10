import React from 'react'

const FaqSection = () => {
  return (
    <div className="faq mt-40 ">
        <div className="container mb-[55px] ">
          <div className="mb-[55px]">
            <h1
              className="font-normal text-[30px] text-white"
              style={{
                fontFamily: "'Audiowide', sans-serif",
              }}
            >
              FAQ
            </h1>
            <img className="w-[9%]" src="/images/heading.png" />
          </div>
        </div>
        {/* faq */}
        <div className=" text-white ">
          <div className="relative">
            {/* Background Image Overlay */}
            <div
              className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-[0.18] z-0 "
              style={{ backgroundImage: "url('/images/frame.png')" }}
            ></div>

            {/* Actual Content on top of overlay */}
            <div className="relative z-10 flex-col md:flex-row gap-10 banner justify-center items-center py-[65px]">
              <div className="container">
                <div className="faq-flex flex justify-center ">
                  {/* Left Side: Heading + Bot Image */}
                  <div className="w-[30%] text-center md:text-left">
                    <h2
                      className="text-[40px] font-normal text-white leading-[100%]"
                      style={{
                        fontFamily: "'Audiowide', sans-serif",
                      }}
                    >
                      Frequently
                      <br />
                      Asked
                      <br />
                      Question
                    </h2>
                    <img src="/images/robo.png" alt="Bot" className="" />
                  </div>

                  {/* Right Side: Accordion */}
                  <div className="w-[70%] space-y-4">
                    {/* Accordion Item 1 (Open) */}
                    <div className="border border-cyan-400 rounded-lg overflow-hidden bg-[#0f003e]">
                      <div className="flex items-center justify-between pl-6 border-cyan-400">
                        <div className="flex gap-3 items-center">
                          <span className="text-white font-medium text-2xl">
                            01
                          </span>
                          <h3 className="text-white font-normal text-[22px]">
                            Do you maintain your apps?
                          </h3>
                        </div>
                        <button className="text-white bg-cyan-400 w-[86px] h-[80px] flex items-center justify-center rounded-sm text-3xl">
                          −
                        </button>
                      </div>
                      <div className="px-6 py-4 text-sm leading-relaxed text-gray-300">
                        AI has the best record in software maintenance and
                        upgrades. Over and over we get praises and accolades
                        from our customers for taking good care of our apps. AI
                        has the best record in software maintenance and
                        upgrades. Over and over we get praises and accolades
                        from our customers for taking good care of our apps. AI
                        has the best record in software maintenance and
                        upgrades. Over and over we get praises and accolades
                        from our customers for taking good care of our apps.
                      </div>
                    </div>

                    {/* Accordion Item 2 */}
                    <div className="border border-[#747474] rounded-lg bg-[#0f003e]">
                      <div className="flex items-center justify-between pl-6 relative min-h-[77px]">
                        <div className="flex gap-3 items-center">
                          <span className="text-white font-semibold">02</span>
                          <h3 className="text-white font-normal text-[22px]">
                            How does AI Collective get all these AIs?
                          </h3>
                        </div>
                        <button className="text-white bg-[#152329] w-[86px] h-[80px] flex items-center justify-center rounded-sm text-xl absolute -top-px -right-[2px]">
                          +
                        </button>
                      </div>
                    </div>

                    {/* Accordion Item 3 */}
                    <div className="border border-[#747474] rounded-lg bg-[#0f003e]">
                      <div className="flex items-center justify-between pl-6 relative min-h-[77px]">
                        <div className="flex gap-3 items-center">
                          <span className="text-white font-semibold">03</span>
                          <h3 className="text-white font-normal text-[22px]">
                            Why is it so affordable?
                          </h3>
                        </div>
                        <button className="text-white bg-[#152329] w-[86px] h-[80px] flex items-center justify-center rounded-sm text-xl absolute -top-px -right-[2px]">
                          +
                        </button>
                      </div>
                    </div>

                    {/* Accordion Item 4 */}
                    <div className="border border-[#747474] rounded-lg bg-[#0f003e]">
                      <div className="flex items-center justify-between pl-6 relative min-h-[77px]">
                        <div className="flex gap-3 items-center">
                          <span className="text-white font-semibold">04</span>
                          <h3 className="text-white font-normal text-[22px]">
                            Can I get a free trial?
                          </h3>
                        </div>
                        <button className="text-white bg-[#152329] w-[86px] h-[80px] flex items-center justify-center rounded-sm text-xl absolute -top-px -right-[2px]">
                          +
                        </button>
                      </div>
                    </div>

                    {/* Accordion Item 5 */}
                    <div className="border border-[#747474] rounded-lg bg-[#0f003e]">
                      <div className="flex items-center justify-between pl-6 relative min-h-[77px]">
                        <div className="flex gap-3 items-center">
                          <span className="text-white font-semibold">05</span>
                          <h3 className="text-white font-normal text-[22px]">
                            How can I cancel my purchase?
                          </h3>
                        </div>
                        <button className="text-white bg-[#152329] w-[86px] h-[80px] flex items-center justify-center rounded-sm text-xl absolute -top-px -right-[2px]">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
  )
}

export default FaqSection;
