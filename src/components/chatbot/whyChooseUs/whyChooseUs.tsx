import Link from 'next/link'
import React from 'react'

const WhyChooseUs = () => {
  return (
    <div className="Why Choose Us? padding-[40px]">
        <div className="container">
          <div className="flex items-center">
            <div className="w-1/2">
              <h1
                className="text-[40px] font-normal"
                style={{ fontFamily: "'Audiowide', sans-serif" }}
              >
                Why Choose Us?
              </h1>
              <p className="font-bold text-base my-[22px]">
                We pride ourselves on making it easy for individuals and
                business owners around the world to use artificial intelligence
                to become more productive.
              </p>
              <Link
                href="/signin"
                className=" bg-[#292362] text-lg font-semibold py-[7px] px-[49px] rounded-[22px] text-white "
              >
                Sign In
              </Link>
            </div>
            <div className="w-1/2">
              <img src="/images/chatbot.png" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default WhyChooseUs;
