"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { signUpUser } from "@/store/slices/auth/authSlice";
import { useRouter } from "next/navigation";
import LoginWithFacebook from "@/components/auth/LoginWithFacebook/loginWithFacebook";
import LoginWithGoogle from "@/components/auth/LoginWithGoogle/loginWithGoogle";
import Link from "next/link";
// yup schema
const schema = yup.object().shape({
  fullName: yup
  .string()
  .required("Full Name is a required field")
  .min(3, "Full name must be at least 3 characters"),

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
    .matches(/[@$!%*?&#]/, "Password must contain at least one special character"),

  confirmPassword: yup
    .string()
    .required("Confirm password is a required field")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading }: any = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpForm>({ resolver: yupResolver(schema) });

  const onSubmit = (data: SignUpForm) => {
    dispatch(signUpUser({payload: data, router}));
    reset();
  };
  return (
    <div>
      <div
        className="h-full lg:h-screen bg-center bg-cover bg-no-repeat banner flex justify-center items-center bg-mob"
        style={{ backgroundImage: "url('/images/banner.png')" }}
      >
        <div className={`container ${styles.text}`}>
          <div className="flex flex-col lg:flex-row items-center justify-between custom-gap-margin">
            <div className="left">
              <img className="rounded:xl-custom" src="/images/robo.png" />
            </div>
            <div className="form-sec w-[460px] ">
              <div className="  rounded-2xl max-w-md w-full text-white">
                <h1 className="text-[77.71px] font-bold  lg:text-left mob-text text-center">
                  SIGN IN
                </h1>
                <p className="text-[15px] my-[20px] font-bold lg:text-left text-center">
                  Sign in with email address
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4 ">
                  {/* Full Name */}
                  <div className="flex items-center bg-[#261046] shadow-[inset_0px_0px_11.28px_0px_#00000029] backdrop-blur-[15.23668384552002px] backdrop-filter text-white rounded-[12px] p-3 space-x-2">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 9.96875C13.933 9.96875 15.5 8.40175 15.5 6.46875C15.5 4.53575 13.933 2.96875 12 2.96875C10.067 2.96875 8.5 4.53575 8.5 6.46875C8.5 8.40175 10.067 9.96875 12 9.96875Z"
                        stroke="#A4A4A4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 21.4688C2 17.0503 6.0295 13.4688 11 13.4688M15.5 21.9688L20.5 16.9688L18.5 14.9688L13.5 19.9688V21.9688H15.5Z"
                        stroke="#A4A4A4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <input
                      type="text"
                      placeholder="Full Name"
                      {...register("fullName")}
                      className=" outline-none w-full  text-base font-medium  text-[#A4A4A4]   rounded-[12px] "
                    />
                  </div>
                  {errors.fullName && <span className="text-red-500">{errors?.fullName?.message}</span>}

                  {/* Email */}
                  <div className="flex items-center bg-[#261046] backdrop-blur-custom shadow-inset-custom text-[#A4A4A4] rounded-[12px] p-4 space-x-2">
                    <svg
                      width="26"
                      height="20"
                      viewBox="0 0 26 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.95812 0.505371H21.11C22.1598 0.505371 23.1665 0.901536 23.9088 1.60671C24.6511 2.31189 25.0681 3.26832 25.0681 4.26559V15.5462C25.0681 16.5435 24.6511 17.4999 23.9088 18.2051C23.1665 18.9103 22.1598 19.3065 21.11 19.3065H3.95812C2.90836 19.3065 1.9016 18.9103 1.15931 18.2051C0.417016 17.4999 0 16.5435 0 15.5462V4.26559C0 3.26832 0.417016 2.31189 1.15931 1.60671C1.9016 0.901536 2.90836 0.505371 3.95812 0.505371ZM3.95812 1.75878C3.29844 1.75878 2.71791 1.97186 2.26932 2.34788L12.5341 8.65251L22.7988 2.34788C22.3502 1.97186 21.7697 1.75878 21.11 1.75878H3.95812ZM12.5341 10.1691L1.49089 3.36314C1.38534 3.63889 1.31937 3.95224 1.31937 4.26559V15.5462C1.31937 16.2111 1.59738 16.8487 2.09225 17.3188C2.58711 17.7889 3.25828 18.0531 3.95812 18.0531H21.11C21.8098 18.0531 22.481 17.7889 22.9759 17.3188C23.4707 16.8487 23.7487 16.2111 23.7487 15.5462V4.26559C23.7487 3.95224 23.6828 3.63889 23.5772 3.36314L12.5341 10.1691Z"
                        fill="#A4A4A4"
                      />
                    </svg>

                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      {...register("email")}
                      className="bg-transparent outline-none w-full placeholder-[#A4A4A4]"
                    />
                  </div>
                  {errors.email && <span className="text-red-500">{errors?.email?.message}</span>}

                  {/* Password */}
                  <div className="flex items-center bg-[#2b0d52] text-white rounded-[12px] p-4  space-x-2">
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
                  {/* Confirm Password */}
                  <div className="flex items-center bg-[#2b0d52] text-white rounded-[12px] p-4 space-x-2 mb-[20px]">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 17.7808C11.4696 17.7808 10.9609 17.57 10.5858 17.195C10.2107 16.8199 10 16.3112 10 15.7808C10 14.6708 10.89 13.7808 12 13.7808C12.5304 13.7808 13.0391 13.9915 13.4142 14.3665C13.7893 14.7416 14 15.2503 14 15.7808C14 16.3112 13.7893 16.8199 13.4142 17.195C13.0391 17.57 12.5304 17.7808 12 17.7808ZM18 20.7808V10.7808H6V20.7808H18ZM18 8.78076C18.5304 8.78076 19.0391 8.99148 19.4142 9.36655C19.7893 9.74162 20 10.2503 20 10.7808V20.7808C20 21.3112 19.7893 21.8199 19.4142 22.195C19.0391 22.57 18.5304 22.7808 18 22.7808H6C5.46957 22.7808 4.96086 22.57 4.58579 22.195C4.21071 21.8199 4 21.3112 4 20.7808V10.7808C4 9.67076 4.89 8.78076 6 8.78076H7V6.78076C7 5.45468 7.52678 4.18291 8.46447 3.24523C9.40215 2.30755 10.6739 1.78076 12 1.78076C12.6566 1.78076 13.3068 1.91009 13.9134 2.16136C14.52 2.41264 15.0712 2.78093 15.5355 3.24523C15.9998 3.70952 16.3681 4.26072 16.6194 4.86734C16.8707 5.47397 17 6.12415 17 6.78076V8.78076H18ZM12 3.78076C11.2044 3.78076 10.4413 4.09683 9.87868 4.65944C9.31607 5.22205 9 5.98511 9 6.78076V8.78076H15V6.78076C15 5.98511 14.6839 5.22205 14.1213 4.65944C13.5587 4.09683 12.7956 3.78076 12 3.78076Z"
                        fill="#A4A4A4"
                      />
                    </svg>

                    <input
                      type="password"
                      placeholder="Confirm Password"
                      {...register("confirmPassword")}
                      className="bg-transparent outline-none w-full placeholder-[#A4A4A4]"
                    />
                  </div>
                  {errors.confirmPassword && <span className="text-red-500">{errors?.confirmPassword?.message}</span>}
                </div>
                <button className="w-full py-3 rounded-[12px] bg-[linear-gradient(90.04deg,_#501794_0.03%,_#3E70A1_101.88%)] text-[22px]  font-medium hover:opacity-90 transition " type="submit">
                  Sign up
                </button>
                </form>

                <div className="text-right mt-2"></div>
                <hr className="border border-[#727272] my-[20px] " />
                <div className="my-6 flex items-center ">
                  <span className="text-[#B6B6B6] text-xs font-semibold ">
                    Or continue with
                  </span>
                </div>

                <div className="flex gap-4 justify-center">
                <LoginWithGoogle />
                {/* <LoginWithFacebook /> */}
                </div>

                <p className=" text-xs text-[#B6B6B6]  font-medium my-[20px] lg:text-left text-center">
                  By registering you with our{" "}
                  <Link href="#" className="text-[#9D5CE9] text-xs font-medium ">
                    Terms and Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
