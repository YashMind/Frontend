'use client';

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { forgetPassword } from "@/store/slices/auth/authSlice";
import { AppDispatch } from "@/store/store";

const page = () => {
  console.log("component called")
  const dispatch = useDispatch<AppDispatch>();
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [forgotPasswordStatus, setForgotPasswordStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleForgotPassword = async () => {
    try {
      await dispatch(forgetPassword(forgotPasswordEmail)).unwrap();
      setForgotPasswordStatus({
        success: true,
        message: "Password reset link sent to your email! it will expire in 15 minutes",
      });
    } catch (error: any) {
      setForgotPasswordStatus({
        success: false,
        message: error.message || "Failed to send reset link",
      });
    }
  };

    return (
      <div
        className="h-full lg:h-screen banner bg-center bg-cover bg-no-repeat flex justify-center items-center"
        style={{ backgroundImage: "url('/images/banner.png')" }}
      >
        <div className="container">
          <div className="flex lg:flex-row items-center justify-between custom-gap-margin">
            <div className="left">
              <img className="rounded:xl-custom" src="/images/robo.png" />
            </div>

            <div className="form-sec w-[460px] rounded:xl-custom">
              <div className="rounded-2xl max-w-md w-full text-white">
                <h1 className="text-[77.71px] font-bold text-center lg:text-left mob-text">
                  FORGOT PASSWORD
                </h1>
                <p className="text-[15px] my-[20px] font-bold text-center lg:text-left">
                  Enter your email to receive a reset link
                </p>

                {forgotPasswordStatus && (
                  <div
                    className={`mb-4 p-3 rounded-lg ${
                      forgotPasswordStatus.success
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {forgotPasswordStatus.message}
                  </div>
                )}

                <div className="mb-[20px]">
                  <label className="block relative">
                    <span className="absolute px-[22px] top-1/2 transform -translate-y-1/2 text-gray-400 z-1">
                      <img src="/images/Vector.png" />
                    </span>
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      value={forgotPasswordEmail}
                      onChange={(e) => setForgotPasswordEmail(e.target.value)}
                      className="w-full shadow-[inset_0px_0px_11.28px_0px_#00000029] backdrop-blur-[15.23px] text-base font-medium pl-14 px-[22px] py-4 rounded-lg bg-[#261046] text-[#A4A4A4] focus:outline-none"
                    />
                  </label>
                </div>

                <button
                  onClick={handleForgotPassword}
                  className="cursor-pointer w-full py-3 rounded-[18px] bg-[linear-gradient(90.04deg,_#501794_0.03%,_#3E70A1_101.88%)] text-[22px] font-medium hover:opacity-90 transition"
                >
                  Send Reset Link
                </button>

                <div className="text-center mt-4">
                  <button
                    onClick={() => setShowForgotPassword(false)}
                    className="text-cyan-400 hover:underline text-sm"
                  >
                    Back to Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );


}

export default page;
