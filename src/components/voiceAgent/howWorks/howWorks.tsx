import Image from 'next/image'
import React from 'react'

const HowWorks = () => {
  return (
    <div className="container text-center ">
            <h1
              className="text-[40px] font-normal text-white mt-[90px]"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              How it <span className="text-[#34C8FB]"> Works</span>
            </h1>
            <p className="text-base font-normal text-white w-full sm:w-[556px] m-auto">
              Imagine a world where every device understands you, adapts to you, and
              works with you—effortlessly. That’s the future we’re building.
            </p>
    
            <div className=" py-20  relative text-white">
              <div className="max-w-6xl mx-auto block md:flex justify-between items-center relative">
                {/* Left Side */}
                <div className="flex flex-col !sm:gap-5  gap-mob">
                  {/* Item 1 */}
                  <div className="flex items-center gap-4">
                    <div className="">
                      <Image
                        alt="alt"
                        src="/images/how-works2.png"
                        height={138}
                        width={138}
                        className="w-[100px] max-lg:w-[120px] lg:w-[138px] h-auto"
                      />
                    </div>
                    <div>
                      <h3 className="text-base max-lg:text-xl lg:text-2xl font-semibold text-left">
                        Speak Your Command
                      </h3>
                      <p className="text-base font-light text-white text-left">
                        Say what you need
                      </p>
                    </div>
                  </div>
                  {/* Item 2 */}
                  <div className="flex items-center gap-4 mb-5 md:mb-0">
                    <div className="">
                      <Image
                        alt="alt"
                        src="/images/seem.png"
                        height={138}
                        width={138}
                        className="w-[100px] max-lg:w-[120px] lg:w-[138px] h-auto"
                      />
                    </div>
                    <div>
                      <h3 className="text-base max-lg:text-xl lg:text-2xl font-semibold text-left ">
                        Seam Execution
                      </h3>
                      <p className="text-base font-light text-white text-left">
                        Your task are done instantly
                      </p>
                    </div>
                  </div>
                </div>
    
                {/* Center Dashed Line */}
                <div className="absolute t transform -translate-x-1/2 -translate-y-1/2  w-[223px] left-[48%] top-[45%] hidden md:block">
                  <Image
                    alt="alt"
                    src="/images/how-works.png"
                    height={360}
                    width={223}
                    className="w-[160px] max-lg:w-[180px] lg:w-[223px] h-auto"
                  />
                </div>
    
                {/* Right Side */}
                <div className="flex items-center gap-4">
                  <div className="">
                    <Image
                      alt="alt"
                      src="/images/listens.png"
                      height={138}
                      width={138}
                      className="w-[100px] max-lg:w-[120px] lg:w-[138px] h-auto"
                    />
                  </div>
                  <div>
                    <h3 className="text-base max-lg:text-xl lg:text-2xl font-semibold text-left">
                      AI listens and understand
                    </h3>
                    <p className="text-base font-light text-white text-left">
                      Your success succeeded
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default HowWorks
