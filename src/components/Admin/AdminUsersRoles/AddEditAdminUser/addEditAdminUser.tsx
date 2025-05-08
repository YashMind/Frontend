"use client";
import {
  createSubscriptionPlan,
  updateAdminUser,
} from "@/store/slices/admin/adminSlice";
import { signUpAdmin, signUpUser } from "@/store/slices/auth/authSlice";
import { AppDispatch } from "@/store/store";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";

interface AddEditPlanProps {
  show: boolean;
  onHide: () => void;
  adminUserData: AdminUsersData;
}

const schema = (isEdit: boolean) =>
  yup.object().shape({
    id: yup.number(),
    fullName: yup
      .string()
      .required("Full Name is a required field")
      .min(3, "Full name must be at least 3 characters"),
    email: yup.string().email().required("Email is a required field"),

    password: isEdit
      ? yup.string()
      : yup
          .string()
          .required("Password is a required field")
          .min(8, "Password must be at least 8 characters long")
          .matches(
            /[a-z]/,
            "Password must contain at least one lowercase letter"
          )
          .matches(
            /[A-Z]/,
            "Password must contain at least one uppercase letter"
          )
          .matches(/\d/, "Password must contain at least one number")
          .matches(
            /[@$!%*?&#]/,
            "Password must contain at least one special character"
          ),
    role: yup.string().required("Role is a required field"),
    status: yup.string(),
  });

const AddEditAdminUserModal = ({
  show,
  onHide,
  adminUserData,
}: AddEditPlanProps) => {
  const isEdit = !!adminUserData?.id;
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema(isEdit)),
    defaultValues: {
      fullName: "",
      email: "",
      role: "",
      status: "Active",
    },
  });

  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (data: AdminSignUpForm) => {
    if (data.id) {
      dispatch(updateAdminUser({ payload: data }));
    } else {
      dispatch(signUpAdmin({ payload: data }));
    }
    reset();
    onHide();
  };

  useEffect(() => {
    setValue("fullName", adminUserData?.fullName);
    setValue("email", adminUserData?.email);
    setValue("role", adminUserData?.role);
    setValue("status", adminUserData?.status);
    setValue("id", adminUserData?.id);
  }, [reset, adminUserData?.id, show]);

  return show ? (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#0E1A47] text-white rounded-2xl p-10 w-[800px] max-w-full shadow-5xl relative">
        <button
          onClick={onHide}
          className="absolute top-4 right-4 text-white text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-1">
          {adminUserData?.id ? "Edit" : "Add"} Admin
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Full Name</label>
            <input
              placeholder="Enter name"
              type="text"
              {...register("fullName")}
              className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName?.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              placeholder="Enter email"
              type="email"
              {...register("email")}
              className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              placeholder="Enter password"
              type="password"
              {...register("password")}
              className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password?.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Role</label>
            <select
              {...register("role")}
              className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select role
              </option>
              <option value="Super Admin">Super Admin</option>
              <option value="Billing Admin">Billing Admin</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm mt-1">
                {errors.role?.message}
              </p>
            )}
          </div>

          <hr className="border-gray-600 my-6" />
          <div className="flex justify-start gap-4 mt-6">
            <button
              type="button"
              onClick={onHide}
              className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
            >
              Exit
            </button>
            <button
              type="submit"
              className="bg-[#18B91F] px-6 py-2 rounded text-white hover:bg-green-600 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default AddEditAdminUserModal;
