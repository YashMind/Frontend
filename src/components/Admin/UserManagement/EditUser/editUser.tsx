"use client";
import {
  updateUserByAdmin,
} from "@/store/slices/admin/adminSlice";
import { AppDispatch } from "@/store/store";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";

interface AddEditPlanProps {
  show: boolean;
  onHide: () => void;
  userData: AdminUsersData;
}

const schema = yup.object().shape({
  id: yup.number(),
  fullName: yup
    .string()
    .required("Full Name is a required field")
    .min(3, "Full name must be at least 3 characters"),
  plan: yup.string(),
  role: yup.string(),
});

const AddEditUserModal = ({ show, onHide, userData }: AddEditPlanProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
    },
  });

  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (data: AdminUpdateUser) => {
    if (data.id) {
      dispatch(updateUserByAdmin({ payload: data }));
    }
    reset();
    onHide();
  };

  useEffect(() => {
    setValue("fullName", userData?.fullName);
    setValue("plan", userData?.plan);
    setValue("role", userData?.role);
    setValue("id", userData?.id);
  }, [reset, userData?.id, show]);

  return show ? (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#0E1A47] text-white rounded-2xl p-10 w-[800px] max-w-full shadow-5xl relative">
        <button
          onClick={onHide}
          className="cursor-pointer absolute top-4 right-4 text-white text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-1">
          {userData?.id ? "Edit" : "Add"} Admin
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Full Name</label>
            <input
              placeholder="Enter name"
              type="text"
              disabled
              {...register("fullName")}
              className=" cursor-not-allowed w-full px-4 py-2 rounded bg-gray-300  text-black focus:outline-none"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName?.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Plan</label>
            <select
              {...register("plan")}
              className="cursor-pointer w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
            >
              <option value="">Select Plan</option>
              <option value="basic">Basic</option>
              <option value="pro">Pro</option>
              <option value="ent">Enterprise</option>
            </select>
            {errors.plan && (
              <p className="text-red-500 text-sm mt-1">{errors.plan?.message}</p>
            )}
          </div>


          <div>
            <label className="block mb-1 text-sm font-medium">Role</label>
            <select
              {...register("role")}
              className="cursor-pointer w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select role
              </option>
              <option value="Super Admin">Super Admin</option>
              <option value="Billing Admin">Billing Admin</option>
              <option value="User">User</option>
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
              className="cursor-pointer border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
            >
              Exit
            </button>
            <button
              type="submit"
              className="cursor-pointer bg-[#18B91F] px-6 py-2 rounded text-white hover:bg-green-600 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default AddEditUserModal;
