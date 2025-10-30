"use client";
import Image from "next/image";
import { getMeData, updateUserProfile } from "@/store/slices/auth/authSlice";
import { AppDispatch, RootState } from "@/store/store";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiEditLine } from "react-icons/ri";
import * as yup from "yup";
import { useForm, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { ProfileForm } from "@/types/authType";


const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required field"),
  email: yup.string().email().required("Email is a required field"),

  password: yup
    .string()
    .transform((value) => (value === "" ? undefined : value))
    .notRequired()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&#]/,
      "Password must contain at least one special character"
    ),
});
const ProfileProducts = () => {
  const router = useRouter()
  const [edit, setEdit] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { userData } = useSelector((state: RootState) => state.auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileForm>({
    resolver: yupResolver(schema) as Resolver<ProfileForm>,
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    dispatch(getMeData({ router }));
    if (userData) {
      reset({
        fullName: userData.fullName || "",
        email: userData.email || "",
        password: "",
      });
    }
  }, [reset, userData?.fullName]);
  const onSubmit = (data: ProfileForm) => {
    dispatch(updateUserProfile({ payload: data, router }))
    reset();
  };
  return (
    <div>
      <div className="bg-[#081028] p-[30px]  rounded-[22px] mb-[8px]">
        <h2 className="text-[21px] mb-4 font-semibold">Profile</h2>
        <div className="flex items-center gap-10">
          <div className="relative w-24 h-24">
            <Image
              alt="alt"
              src="/images/profile.png"
              height={33}
              width={347}
            />
            <button className="absolute bottom-0 right-0 bg-[#6C1BB0] p-1.5 rounded-full text-white text-xs">
              <i className="ri-edit-2-line"></i>
            </button>
          </div>
          <div>
            <h3 className="text-[26px] font-medium">{userData?.fullName}</h3>
            <p className="text-base font-medium text-white">Admin</p>
            <p className="text-base font-medium text-white">
              {userData?.email}
            </p>
          </div>
        </div>
      </div>

      {/* Personal Info Section */}
      <div className="bg-[#081028] p-[30px]  rounded-[22px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[21px] mb-4 font-semibold">
            Personal Information
          </h2>
          <button
            className="bg-[#2F0448] text-white px-4 py-1 rounded-[24px] text-lg font-medium flex items-center gap-1"
            onClick={() => setEdit(true)}
          >
            Edit
            <RiEditLine />
          </button>
        </div>
        <table className="w-full text-sm text-gray-300">
          <thead>
            <tr>
              <th className="text-left text-[#87888C] font-medium text-lg">
                Name
              </th>
              <th className="text-left text-[#87888C] font-medium text-lg">
                Email
              </th>
              <th className="text-left text-[#87888C] font-medium text-lg">
                Password
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pt-[13] text-sm font-medium">
                {userData?.fullName}
              </td>
              <td className="pt-[13] text-sm font-medium">{userData?.email}</td>
              <td className="pt-[13] text-sm font-medium">******</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* edit profile */}
      {edit ? (
        <div className="edit-profile p-6 space-y-6 bg-[#2B255C] ml-[8px]">
          <h1 className="font-semibold text-[21px]">Edit Profile</h1>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6 "
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* First Name */}
            <div className="flex flex-col w-[422px]">
              <label
                htmlFor="fullName"
                className="mb-[8px] text-lg font-medium"
              >
                First Name
              </label>
              <input
                {...register("fullName")}
                type="text"
                id="fullName"
                placeholder="Alina"
                className="bg-[#171821] text-white rounded-md p-[12]  outline-none placeholder-[#D2D2D2] text-xs font-medium"
              />
              {errors.fullName && (
                <span className="text-red-500">
                  {errors?.fullName?.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col w-[422px]">
              <label htmlFor="email" className="mb-[8px] text-lg font-medium">
                Email
              </label>
              <input
                {...register("email")}
                readOnly
                type="email"
                id="email"
                placeholder="joli@gmail.com"
                className="bg-[#171821] text-white rounded-md p-[12]  outline-none placeholder-[#D2D2D2] text-xs font-medium"
              />
              {errors.email && (
                <span className="text-red-500">{errors?.email?.message}</span>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col md:col-span-2 w-[422px]">
              <label
                htmlFor="password"
                className="mb-[8px] text-lg font-medium"
              >
                Password
              </label>
              <input
                {...register("password")}
                type=" Password"
                id="pwd"
                placeholder="password"
                className="bg-[#171821] text-white rounded-md p-[12]  outline-none placeholder-[#D2D2D2] text-xs font-medium"
              ></input>
              {errors.password && (
                <span className="text-red-500">
                  {errors?.password?.message}
                </span>
              )}
            </div>

            {/* Save Button */}
            <div>
              <button
                type="submit"
                className="bg-[#2F0448] px-6 py-2 rounded-[8px] text-white font-mediumtext-lg"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default ProfileProducts;
