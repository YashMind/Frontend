"use client"; // Add this at the top since we're using hooks
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import React from "react";
const WhyChooseUs = () => {
  const router = useRouter();
  const userData = useSelector((state: RootState) => state.auth.loggedInUser);
  return (
    <div className="py-10 px-4 md:px-10 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1
              className="text-[32px] md:text-[40px] font-normal"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              Why Choose YASHRAA?
            </h1>
            <p className="font-bold text-base my-5 md:my-[22px]">
              Access world-class chatbots, customize AI personalities, and
              seamlessly integrate your data. weather you scaling customer
              support or automating tasks — YASHRAA makes AI adoption
              effortless, flexible, and ROI-focused for businesses of all sizes.
            </p>
            {/* <a
              href="/auth/signin"
              className="inline-block bg-[#292362] text-lg font-semibold py-[7px] px-[40px] md:px-[49px] rounded-[22px] text-white"
            >
              Sign In
            </a> */}
            <button
              className="inline-block bg-[#292362] text-lg font-semibold py-[7px] px-[40px] md:px-[49px] rounded-[22px] text-white"
              onClick={() =>
                router.push(userData ? "/chat-dashboard/main" : "/auth/signin")
              }
            >
              {userData ? "Dashboard" : "Sign In"}
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/images/chatbot.png"
              alt="Chatbot"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
