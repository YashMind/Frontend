import React from 'react'

const WorkFlowAi = () => {
  return (
    <div className="py-[31px]">
        <div className="container h-full flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-0">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1
              className="text-[28px] sm:text-[36px] md:text-[50px] py-4 text-black leading-tight"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              Supercharge Your Workflow with{" "}
              <span className="text-[#12076B]">ALL The AIs You Need</span>
            </h1>
            <p className="font-bold text-black text-sm sm:text-base my-[22px] [font-family:'Roboto_Flex',sans-serif]">
              Accomplish the simplest tasks, like copywriting, and image
              creations, as well as the most complex tasks like computing,
              analytics and even coding!
            </p>
            <a
              href="/signin"
              className="bg-[#140491] text-sm sm:text-base text-white font-semibold py-[7px] px-[30px] sm:px-[49px] rounded-[22px] inline-block"
            >
              Try Now
            </a>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img
              alt="alt"
              src="/images/roboot2.png"
              className="w-full max-w-[400px] md:max-w-[612px] h-auto"
            />
          </div>
        </div>
      </div>
  )
}

export default WorkFlowAi
