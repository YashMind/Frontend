"use client"
import React from "react";
import { useRouter } from "next/navigation";

const HomeBanner = () => {
const router = useRouter();
  return (
    <div
      className="home-banner h-full lg:h-screen bg-center bg-cover bg-no-repeat banner "
      style={{ backgroundImage: "url('/images/home-banner.png')" }}
    >
      <div className="container">
        <div className="banner-text pt-44 text-white max-w-[682px] ">
          <h2
            className="text-[74px] leading-[100%] py-4"
            style={{
              fontFamily: "'Audiowide', sans-serif",
            }}
          >
            AI That Thinks Ahead
          </h2>
          <p className="my-[26px] font-bold  [font-family:'Roboto_Flex',sans-serif]">
            Innovative AI solutions designed to simplify and accelerate your
            workflow.
          </p>
          <button className="py-[14px] px-[43px] text-white text-base font-medium rounded-[18px] bg-[linear-gradient(90.04deg,_#501794_0.03%,_#3E70A1_101.88%)] hover:from-purple-700 hover:to-blue-600 transition-all cursor-pointer" onClick={()=> router.push("/signup")}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
