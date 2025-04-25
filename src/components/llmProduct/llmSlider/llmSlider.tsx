import Image from 'next/image'
import React from 'react'

const LlmSlider = () => {
  return (
    <div className="py-12 px-4 md:px-20 bg-white container">
        {/* <!-- Testimonials --> */}
        <div className="relative py-20 bg-white block lg:flex  lg:text-left flex-wrap justify-between text-center">
          {/* <!-- Left Text --> */}
          <div className="mb-16 md:mb-0 w-full lg:w-[40%] relative lg:top-[140px]">
            <h2
              className="text-[40px] w-full lg:w-[440px]"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              What our <span className="text-[#34C8FB]">Client Says</span>
              <br />
            </h2>
            <p className="text-base font-normal text-black mt-4 mb-3 lg:mb-0">
              Read the testimonial by our clients
              <br />
              to find out more about our services
            </p>
          </div>

          {/* <!-- Testimonials --> */}
          <div className="w-full lg:w-[60%]">
            {/* <!-- Top Right Card --> */}
            <div className="flex flex-wrap items-center justify-between">
              {/* <!-- Bottom Left Card --> */}
              <div className="w-full lg:w-[387px] bg-[#7C66FD] rounded-lg p-[12px] shadow-md z-0 mb-6 lg:mb-0">
                <div className="flex items-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/20.jpg"
                    className="w-14 h-14 rounded-full border-4 border-white"
                  />
                  <div>
                    <h4 className="text-white font-bold text-xl">John doe</h4>
                    <p className="text-white text-xs">Lorem ipsum</p>
                  </div>
                </div>
                <div className="text-[#E3E3E3] mt-4 p-[8px] rounded-md font-light bg-[#2D2095] leading-relaxed text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean hendrerit scelerisque quam, id imperdiet nunc rhoncus
                  ut. Maecenas vitae finibus odio, non egestas odio. Aliquam et
                  vestibulum
                </div>
              </div>
              <Image
                className="m-auto"
                alt="alt"
                src="/images/frame-qute.png"
                height={28}
                width={28}
              />
            </div>
          </div>
          <div className="w-full lg:w-[387px] bg-[#7C66FD] rounded-lg p-[12px] shadow-md z-0 absolute lg:-bottom-[42%] right-0 lg:absolute-mob mt-3 lg:mt-0">
            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/20.jpg"
                className="w-14 h-14 rounded-full border-4 border-white"
              />
              <div>
                <h4 className="text-white font-bold text-xl">John doe</h4>
                <p className="text-white text-xs">Lorem ipsum</p>
              </div>
            </div>
            <div className="text-[#E3E3E3] mt-4 p-[8px] rounded-md font-light bg-[#2D2095] leading-relaxed text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              hendrerit scelerisque quam, id imperdiet nunc rhoncus ut. Maecenas
              vitae finibus odio, non egestas odio. Aliquam et vestibulum
            </div>
          </div>
        </div>
        {/* <!-- Navigation Arrows --> */}
        <div className="flex justify-center mt-40 gap-4">
          <button className="w-6 h-6 bg-gray-400 rounded-full text-white flex items-center justify-center text-xs">
            &lt;
          </button>
          <button className="w-6 h-6 bg-[#7C66FD] rounded-full text-white flex items-center justify-center text-xs">
            &gt;
          </button>
        </div>
      </div>
  )
}

export default LlmSlider
