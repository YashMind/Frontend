"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { signInUser, signUpUser } from "@/store/slices/auth/authSlice";
import { useRouter } from "next/navigation";
import LoginWithFacebook from "@/components/auth/LoginWithFacebook/loginWithFacebook";
import LoginWithGoogle from "@/components/auth/LoginWithGoogle/loginWithGoogle";

// yup schema
const schema = yup.object().shape({
  email: yup
  .string()
  .email()
  .required("Email is a required field"),

  password: yup
    .string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(/[@$!%*?&#]/, "Password must contain at least one special character")
});
const SignIn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<SignInForm>({ resolver: yupResolver(schema) });
  
    const onSubmit = (data: SignInForm) => {
      dispatch(signInUser({payload: data, router}))
      reset();
    };
  return (
    <div>
      <div
        className="h-full lg:h-screen banner  bg-center bg-cover bg-no-repeat banner flex justify-center items-center"
        style={{ backgroundImage: "url('/images/banner.png')" }}
      >
        <div className="container">
          <div className="flex lg:flex-row items-center justify-between custom-gap-margin">
            <div className="left">
              <img className="rounded:xl-custom" src="/images/robo.png" />
            </div>
            <div className="form-sec w-[460px]  rounded:xl-custom">
              <div className="  rounded-2xl max-w-md w-full text-white">
                <h1 className="text-[77.71px] font-bold text-center lg:text-left mob-text">
                  SIGN IN
                </h1>
                <p className="text-[15px] my-[20px] font-bold text-center lg:text-left">
                  Sign in with email address
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                {/* email */}
                <div className="mb-[20px]">
                  <label className="block relative">
                    <span className="absolute  px-[22px] top-1/2 transform -translate-y-1/2 text-gray-400 z-1">
                      <img src="/images/Vector.png" />
                    </span>
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      {...register("email")}
                      className="w-full shadow-[inset_0px_0px_11.28px_0px_#00000029] backdrop-blur-[15.23668384552002px] backdrop-filter text-base font-medium  pl-14  px-[22px] py-4 rounded-lg bg-[#261046]  text-[#A4A4A4]  focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </label>
                </div>
                {errors.email && <span className="text-red-500">{errors?.email?.message}</span>}

                {/* Password */}
                <div className="flex items-center bg-[#2b0d52] text-white rounded-[12px] p-4  space-x-2 mb-[20px]">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 17.8433C11.4696 17.8433 10.9609 17.6325 10.5858 17.2575C10.2107 16.8824 10 16.3737 10 15.8433C10 14.7333 10.89 13.8433 12 13.8433C12.5304 13.8433 13.0391 14.054 13.4142 14.429C13.7893 14.8041 14 15.3128 14 15.8433C14 16.3737 13.7893 16.8824 13.4142 17.2575C13.0391 17.6325 12.5304 17.8433 12 17.8433ZM18 20.8433V10.8433H6V20.8433H18ZM18 8.84326C18.5304 8.84326 19.0391 9.05398 19.4142 9.42905C19.7893 9.80412 20 10.3128 20 10.8433V20.8433C20 21.3737 19.7893 21.8824 19.4142 22.2575C19.0391 22.6325 18.5304 22.8433 18 22.8433H6C5.46957 22.8433 4.96086 22.6325 4.58579 22.2575C4.21071 21.8824 4 21.3737 4 20.8433V10.8433C4 9.73326 4.89 8.84326 6 8.84326H7V6.84326C7 5.51718 7.52678 4.24541 8.46447 3.30773C9.40215 2.37005 10.6739 1.84326 12 1.84326C12.6566 1.84326 13.3068 1.97259 13.9134 2.22386C14.52 2.47514 15.0712 2.84343 15.5355 3.30773C15.9998 3.77202 16.3681 4.32322 16.6194 4.92984C16.8707 5.53647 17 6.18665 17 6.84326V8.84326H18ZM12 3.84326C11.2044 3.84326 10.4413 4.15933 9.87868 4.72194C9.31607 5.28455 9 6.04761 9 6.84326V8.84326H15V6.84326C15 6.04761 14.6839 5.28455 14.1213 4.72194C13.5587 4.15933 12.7956 3.84326 12 3.84326Z"
                        fill="#A4A4A4"
                      />
                    </svg>

                    <input
                      type="password"
                      placeholder="Password"
                      {...register("password")}
                      className="bg-transparent outline-none w-full placeholder-white placeholder-opacity-60"
                    />
                  </div>
                  {errors.password && <span className="text-red-500">{errors?.password?.message}</span>}

                <button className="w-full py-3 rounded-[18px] bg-[linear-gradient(90.04deg,_#501794_0.03%,_#3E70A1_101.88%)] text-[22px]  font-medium hover:opacity-90 transition ">
                  Sign In
                </button>
                </form>
                <div className="text-right mt-2">
                  <a
                    href="#"
                    className="text-xs font-semibold text-cyan-400 hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>
                <hr className="border border-[#727272] my-[20px] " />
                <div className="my-6 flex items-center ">
                  <span className="text-[#B6B6B6] text-xs font-semibold ">
                    Or continue with
                  </span>
                </div>

                <div className="flex gap-4 justify-center">
                  <LoginWithGoogle />
                  <LoginWithFacebook />
                </div>

                <p className=" text-xs text-[#B6B6B6]  font-medium my-[20px] text-center lg:text-left ">
                  By registering you with our{" "}
                  <a href="#" className="text-[#9D5CE9] text-xs font-medium ">
                    Terms and Conditions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
