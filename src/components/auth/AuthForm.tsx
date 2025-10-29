// AuthForm.tsx
"use client";
import React, { useState } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { useRouter, useSearchParams } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  signInUser,
  signUpUser,
  forgetPassword,
} from "@/store/slices/auth/authSlice";
import LoginWithGoogle from "@/components/auth/LoginWithGoogle/loginWithGoogle";
import Link from "next/link";
import LoginWithFacebook from "@/components/auth/LoginWithFacebook/loginWithFacebook";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import HomeHeader from "@/components/Common/header/header";
interface SignInForm {
  email: string;
  password: string;
}

interface SignUpForm extends SignInForm {
  fullName: string;
  confirmPassword: string;
}

type AuthFormInput = {
  email: string;
  password: string;
  fullName?: string;
  confirmPassword?: string;
};

const getValidationSchema = (type: "signin" | "signup") => {
  const baseSchema = {
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Minimum 8 characters")
      .matches(/[a-z]/, "One lowercase letter required")
      .matches(/[A-Z]/, "One uppercase letter required")
      .matches(/\d/, "One number required")
      .matches(/[@$!%*?&#]/, "One special character required"),
  };

  if (type === "signin") return yup.object(baseSchema);

  return yup.object({
    ...baseSchema,
    fullName: yup
      .string()
      .required("Full Name is required")
      .min(3, "Full name must be at least 3 characters"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password")], "Passwords must match"),
  });
};

const AuthForm = ({ formType }: { formType: "signin" | "signup" }) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  // const searchParams = useSearchParams()
  //     const [showForgotPassword, setShowForgotPassword] = useState(false);
  //     const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  // const [forgotPasswordStatus, setForgotPasswordStatus] = useState<{
  //     success: boolean;
  //     message: string;
  //         } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthFormInput>({
    resolver: yupResolver(getValidationSchema(formType)),
  });
  const searchParams = useSearchParams();

  const onSubmit = (data: AuthFormInput) => {
    if (formType === "signin") {
      const { email, password } = data as SignInForm;
      dispatch(signInUser({ payload: { email, password }, router }))
        .unwrap()
        .then((res) => {
          if (searchParams?.get("from")) {
            router.push(
              searchParams.get("from") ?? "/chatboard-dashboard/main"
            );
            return;
          }
          router.push("/chatboard-dashboard/main");
        });
    } else {
      const { email, password, fullName, confirmPassword } = data as SignUpForm;
      dispatch(
        signUpUser({
          payload: { email, password, fullName, confirmPassword },
          router,
        })
      );
    }
    reset();
  };

  // const handleForgotPassword = async () => {
  //     try {
  //         await dispatch(forgetPassword(forgotPasswordEmail)).unwrap();
  //         setForgotPasswordStatus({
  //             success: true,
  //             message: "Password reset link sent to your email!"
  //         });
  //     } catch (error: any) {
  //         setForgotPasswordStatus({
  //             success: false,
  //             message: error.message || "Failed to send reset link"
  //         });
  //     }
  // };
  //   if (showForgotPassword) {
  //     return (
  //         <div className="h-full lg:h-screen banner bg-center bg-cover bg-no-repeat flex justify-center items-center" style={{ backgroundImage: "url('/images/banner.png')" }}>
  //             <div className="container">
  //                 <div className="flex lg:flex-row items-center justify-between custom-gap-margin">
  //                     <div className="left">
  //                         <img className="rounded:xl-custom" src="/images/robo.png" />
  //                     </div>

  //                     <div className="form-sec w-[460px] rounded:xl-custom">
  //                         <div className="rounded-2xl max-w-md w-full text-white">
  //                             <h1 className="text-[77.71px] font-bold text-center lg:text-left mob-text">
  //                                 FORGOT PASSWORD
  //                             </h1>
  //                             <p className="text-[15px] my-[20px] font-bold text-center lg:text-left">
  //                                 Enter your email to receive a reset link
  //                             </p>

  //                             {forgotPasswordStatus && (
  //                                 <div className={`mb-4 p-3 rounded-lg ${forgotPasswordStatus.success ? 'bg-green-500' : 'bg-red-500'}`}>
  //                                     {forgotPasswordStatus.message}
  //                                 </div>
  //                             )}

  //                             <div className="mb-[20px]">
  //                                 <label className="block relative">
  //                                     <span className="absolute px-[22px] top-1/2 transform -translate-y-1/2 text-gray-400 z-1">
  //                                         <img src="/images/Vector.png" />
  //                                     </span>
  //                                     <input
  //                                         type="email"
  //                                         placeholder="example@gmail.com"
  //                                         value={forgotPasswordEmail}
  //                                         onChange={(e) => setForgotPasswordEmail(e.target.value)}
  //                                         className="w-full shadow-[inset_0px_0px_11.28px_0px_#00000029] backdrop-blur-[15.23px] text-base font-medium pl-14 px-[22px] py-4 rounded-lg bg-[#261046] text-[#A4A4A4] focus:outline-none"
  //                                     />
  //                                 </label>
  //                             </div>

  //                             <button
  //                                 onClick={handleForgotPassword}
  //                                 className="cursor-pointer w-full py-3 rounded-[18px] bg-[linear-gradient(90.04deg,_#501794_0.03%,_#3E70A1_101.88%)] text-[22px] font-medium hover:opacity-90 transition"
  //                             >
  //                                 Send Reset Link
  //                             </button>

  //                             <div className="text-center mt-4">
  //                                 <button
  //                                     onClick={() => setShowForgotPassword(false)}
  //                                     className="text-cyan-400 hover:underline text-sm"
  //                                 >
  //                                     Back to {formType === "signin" ? "Sign In" : "Sign Up"}
  //                                 </button>
  //                             </div>
  //                         </div>
  //                     </div>
  //                 </div>
  //             </div>
  //         </div>
  //     );
  // }
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div
      className="h-full  banner bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      <HomeHeader />
      <div className="container">
        <div className="flex lg:flex-row items-center justify-between custom-gap-margin mt-16">
          <div className="left">
            <img className="rounded:xl-custom" src="/images/robo.png" />
          </div>

          <div className="form-sec w-[460px] rounded:xl-custom">
            <div className="rounded-2xl max-w-md w-full text-white">
              <h1 className="text-[77.71px] font-bold text-center lg:text-left mob-text">
                {formType === "signin" ? "SIGN IN" : "SIGN UP"}
              </h1>
              <p className="text-[15px] my-[20px] font-bold text-center lg:text-left">
                {formType === "signin"
                  ? "Sign in with email address"
                  : "Register with your email"}
              </p>

              <form onSubmit={handleSubmit(onSubmit)}>
                {formType === "signup" && (
                  <div className="mb-[20px]">
                    <input
                      type="text"
                      placeholder="Full Name"
                      {...register("fullName")}
                      className="w-full shadow-[inset_0px_0px_11.28px_0px_#00000029] backdrop-blur-[15.23px] text-base font-medium px-[22px] py-4 rounded-lg bg-[#261046] text-[#A4A4A4] focus:outline-none"
                    />
                    {errors.fullName && (
                      <span className="text-red-500">
                        {errors.fullName?.message}
                      </span>
                    )}
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
                      {...register("email")}
                      className="w-full shadow-[inset_0px_0px_11.28px_0px_#00000029] backdrop-blur-[15.23px] text-base font-medium pl-14 px-[22px] py-4 rounded-lg bg-[#261046] text-[#A4A4A4] focus:outline-none"
                    />
                  </label>
                  {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                  )}
                </div>

                <div className="flex items-center bg-[#2b0d52] text-white rounded-[12px] p-4 space-x-2 mb-[20px]">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="..." fill="#A4A4A4" />
                  </svg>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...register("password")}
                    className="bg-transparent outline-none w-full placeholder-white placeholder-opacity-60"
                  />
                  <button onClick={handleShowPassword} type="button">
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}

                {formType === "signup" && (
                  <div className="mb-[20px] relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      {...register("confirmPassword")}
                      className="w-full shadow-[inset_0px_0px_11.28px_0px_#00000029]  backdrop-blur-[15.23px] text-base font-medium px-[22px] py-4 rounded-lg bg-[#261046] text-[#A4A4A4] focus:outline-none"
                    />
                    <button
                      onClick={handleShowPassword}
                      className="relative -right-[416px] -top-[36px]"
                      type="button"
                    >
                      {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                    </button>
                    {errors.confirmPassword && (
                      <span className="text-red-500">
                        {errors.confirmPassword.message}
                      </span>
                    )}
                  </div>
                )}

                <button className="cursor-pointer w-full py-3 rounded-[18px] bg-[linear-gradient(90.04deg,_#501794_0.03%,_#3E70A1_101.88%)] text-[22px] font-medium hover:opacity-90 transition">
                  {formType === "signin" ? "Sign In" : "Sign Up"}
                </button>
              </form>

              <div className="text-right mt-2">
                <Link
                  href="/auth/forgot-password"
                  className="text-xs font-semibold text-cyan-400 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {formType === "signin" && (
                <div className="text-[15px] my-[20px] font-bold ml-54">
                  Don't have an account?{" "}
                  <Link
                    href="/auth/signup"
                    className="text-cyan-400 hover:underline"
                  >
                    Sign up
                  </Link>
                </div>
              )}

              <hr className="border border-[#727272] my-[20px]" />
              <div className="my-6 flex items-center">
                <span className="text-[#B6B6B6] text-xs font-semibold">
                  Or continue with
                </span>
              </div>

              <div className="flex justify-center items-center">


                <div className="flex flex-1 gap-4 justify-center">
                  <LoginWithGoogle />
                </div>
                <hr className="border border-[#727272] mx-2 h-10" />

                <div className="flex flex-1 gap-4 justify-center">
                  <LoginWithFacebook />
                </div>
              </div>

              <p className="text-xs text-[#B6B6B6] font-medium my-[20px] text-center lg:text-left">
                By registering you agree to our
                <Link
                  href="/details/terms&condition"
                  className="text-[#9D5CE9] text-xs font-medium ml-1"
                >
                  Terms and Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
