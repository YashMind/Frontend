'use client';

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, useRouter } from "next/navigation";
import { resetPassword } from "@/store/slices/auth/authSlice";
import { AppDispatch } from "@/store/store";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const token = searchParams.get('token') || '';
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetStatus, setResetStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async () => {

    if (!token) {
      setResetStatus({
        success: false,
        message: "Invalid reset token",
      });
      return;
    }

    if (password !== confirmPassword) {
      setResetStatus({
        success: false,
        message: "Passwords do not match",
      });
      return;
    }
    if (!/[a-z]/.test(password)) {
      setResetStatus({
        success: false,
        message: "Password must contain at least one lowercase letter.",
      });
      return;

    } else if (!/[A-Z]/.test(password)) {

      setResetStatus({
        success: false,
        message: "Password must contain at least one Uppercase letter.",
      });
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setResetStatus({
        success: false,
        message: "Password must contain at least one sepical character.",
      });
      return;
    }

    if (password.length < 8) {
      setResetStatus({
        success: false,
        message: "Password must be at least 8 characters",
      });
      return;
    }


    setIsLoading(true);
    setResetStatus(null);

    console.log(password)

    try {
      await dispatch(resetPassword({ token, password })).unwrap();
      setResetStatus({
        success: true,
        message: "Password reset successfully! Redirecting to login...",
      });
      setTimeout(() => router.push('/login'), 3000);
    } catch (error: any) {
      setResetStatus({
        success: false,
        message: error.payload?.detail || error.message || "Failed to reset password",
      });
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="min-h-screen bg-center bg-cover bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url('/images/banner.png')" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8">

          {/* Left Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img src="/images/robo.png" alt="Robot" className="max-w-full h-auto" />
          </div>

          {/* Form Section */}
          <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl p-8 relative z-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-center lg:text-left">
              RESET PASSWORD
            </h1>
            <p className="text-white mb-6 text-center lg:text-left">
              Enter your new password
            </p>

            {/* Status Messages */}
            {!token && (
              <div className="mb-4 p-3 bg-red-500 text-white rounded-lg">
                Missing reset token. Please use the link from your email.
              </div>
            )}

            {resetStatus && (
              <div className={`mb-4 p-3 rounded-lg ${resetStatus.success ? "bg-green-500" : "bg-red-500"}`}>
                {resetStatus.message}
              </div>
            )}

            {/* Password Inputs */}
            <div className="space-y-4">
              <div className="relative">
                <input

                  placeholder="New Password (min 8 characters)"
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-[#261046] text-white p-4 pl-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
                <button onClick={handleShowPassword} type="button" className="absolute right-4 top-6 transform -translate-y-1/2 text-white">{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</button>
                {/* <img 
                  src="/images/lock-icon.png" 
                  alt="Password" 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                /> */}
              </div>

              <div className="relative">
                <input

                  placeholder="Confirm New Password"
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-[#261046] text-white p-4 pl-12 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={isLoading}
                />
                <button onClick={handleShowPassword} type="button" className="absolute right-4 top-6 transform -translate-y-1/2 text-white">{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</button>
                {/* <img 
                  src="/images/lock-icon.png" 
                  alt="Confirm Password" 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                /> */}
              </div>
            </div>

            <button
              className={`w-full mt-6 bg-gradient-to-r from-[#501794] to-[#3E70A1] text-white py-3 rounded-lg text-lg font-medium transition ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
                }`}
              onClick={handleResetPassword}
              disabled={isLoading || !token}
            >
              {isLoading ? "Processing..." : "Reset Password"}
            </button>

            <div className="text-center mt-4">
              <a href="/auth/signin" className="text-cyan-400 hover:underline text-sm">
                Back to Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;