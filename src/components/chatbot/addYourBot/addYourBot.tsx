import Image from "next/image";
import React from "react";

const AddYourBot = () => {
  return (
    <div className="bg-white py-16 px-4 lg:px-24">
      <div className="container">
        <div className="  grid grid-cols-1 lg:grid-cols-2 gap-10 ">
          {/* Left Text */}
          <div className="text-center lg:text-left">
            <h2
              className="text-[40px] font-normal  text-black leading-snug "
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              Add Your Chatbot <br />
              To <span className="text-[#34C8FB]">Any Website</span>
            </h2>
            <p className="text-base text-[#686868] mt-4 font-bold lg:w-[439px] w-full">
              Install our Chatbots on any Website platform by adding one line of
              code
            </p>
          </div>

          {/* Right Platforms */}
          <div className="grid grid-cols-2 gap-6">
            {/* Wordpress */}
            <div className="border border-[#2D2095] rounded-full  px-2 flex  items-center shadow-sm relative justify-center pt-[33px] pb-[18] mb-[18px]">
              <Image
                alt="alt"
                className="absolute top-[-33px] left-1/2 transform -translate-x-1/2 -translate-y-1/"
                src="/images/website.png"
                height={58}
                width={58}
              />

              <p className="text-lg font-bold text-black">Wordpress</p>
            </div>

            {/* Joomla */}
            <div className="border border-[#2D2095] rounded-full  px-2 flex  items-center shadow-sm relative justify-center pt-[33px] pb-[18] mb-[18px]">
              <Image
                alt="alt"
                className="absolute top-[-33px] left-1/2 transform -translate-x-1/2 -translate-y-1/"
                src="/images/website2.png"
                height={58}
                width={58}
              />

              <p className="text-lg font-bold text-black">Joomla</p>
            </div>

            {/* Shopify */}
            <div className="border border-[#2D2095] rounded-full  px-2 flex  items-center shadow-sm relative justify-center pt-[33px] pb-[18]">
              <Image
                alt="alt"
                className="absolute top-[-33px] left-1/2 transform -translate-x-1/2 -translate-y-1/"
                src="/images/website1.png"
                height={58}
                width={58}
              />

              <p className="text-lg font-bold text-black">Shopify</p>
            </div>

            {/* GoDaddy */}
            <div className="border border-[#2D2095] rounded-full  px-2 flex  items-center shadow-sm relative justify-center pt-[33px] pb-[18]">
              <Image
                alt="alt"
                className="absolute top-[-33px] left-1/2 transform -translate-x-1/2 -translate-y-1/"
                src="/images/website4.png"
                height={58}
                width={58}
              />

              <p className="text-lg font-bold text-black">GoDaddy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddYourBot;
