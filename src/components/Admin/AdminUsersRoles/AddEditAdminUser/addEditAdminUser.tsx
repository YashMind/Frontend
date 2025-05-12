"use client";
import {
  createSubscriptionPlan,
  updateAdminUser,
  updateClientUser,
} from "@/store/slices/admin/adminSlice";
import { signUpAdmin, signUpUser } from "@/store/slices/auth/authSlice";
import { AppDispatch } from "@/store/store";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import Select from "react-select";

interface AddEditPlanProps {
  show: boolean;
  onHide: () => void;
  adminUserData: AdminUsersData;
  roleData:string
}

const schema = (isEdit: boolean,roleData:string) =>
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
          role:
          roleData === "admin"
            ? yup.string().required("Role is a required field")
            : yup.string().notRequired(),
        
    status: yup.string(),
    role_permissions: yup.array().notRequired(),
  });

const roleArray = [
  "Super Admin",
  "Billing Admin",
  "Product Admin",
  "Support Admin",
];
const permissionsArray = [
  "Full system access",
  "Manage all admin accounts",
  "Configure roles & permissions",
  "View all activity logs",
  "Manage payment gateways",
  "View and issue invoices",
  "Configure tax settings",
  "Process refunds",
  "Configure API settings",
  "Manage model deployments",
  "View usage analytics",
  "Access developer tools",
  "Access support tickets",
  "View client accounts",
  "Basic troubleshooting",
  "Escalate issues",
];

const AddEditAdminUserModal = ({
  show,
  onHide,
  adminUserData,
  roleData
}: AddEditPlanProps) => {
  const isEdit = !!adminUserData?.id;
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema(isEdit,roleData)),
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
    roleData === "admin"
      ? dispatch(updateAdminUser({ payload: data }))
      : dispatch(updateClientUser({ payload: data }));
  } else {
    dispatch(signUpAdmin({ payload: data }));
  }

  reset();
  onHide();
};


  const options = permissionsArray.map((item) => ({
    value: item,
    label: item,
  }));

  useEffect(() => {
    setValue("fullName", adminUserData?.fullName);
    setValue("email", adminUserData?.email);
    setValue("role", adminUserData?.role);
    setValue("status", adminUserData?.status || "Active");
    setValue("id", adminUserData?.id);
    setValue("role_permissions", adminUserData?.role_permissions || []);
  }, [reset, adminUserData?.id, show]);

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
          {adminUserData?.id ? "Edit" : "Add"} {roleData =="admin"?"Admin":"Client"}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Full Name</label>
            <input
              placeholder="Enter name"
            disabled={!!adminUserData?.id}
              type="text"
              {...register("fullName")}
              
               className={`w-full px-4 py-2 rounded  text-black focus:outline-none ${adminUserData?.id ? "cursor-not-allowed bg-gray-300" : "bg-white"
                }`}
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
               disabled={!!adminUserData?.id}
              {...register("email")}
                className={`w-full px-4 py-2 rounded  text-black focus:outline-none ${adminUserData?.id ? "cursor-not-allowed bg-gray-300" : "bg-white"
                }`}
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

        {roleData=="admin"?
        <>
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
              {roleArray?.map((item, index) => {
                return (
                  <option value={item} key={index} className="cursor-pointer">
                    {item}
                  </option>
                );
              })}
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm mt-1">
                {errors.role?.message}
              </p>
            )}
          </div>

          {watch("role") ? (
            <div>
              <label className="block mb-1 text-sm font-medium">
                Permissions
              </label>
              <Select
                isMulti
                value={options.filter((opt) =>
                  (watch("role_permissions") || []).includes(opt.value)
                )}
                options={options}
                onChange={(selected) => {
                  setValue(
                    "role_permissions",
                    selected.map((s) => s.value)
                  );
                }}
                className="text-black cursor-pointer"
                classNamePrefix="select"
              />
              {errors.role_permissions && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.role_permissions?.message}
                </p>
              )}
            </div>
          ) : null}
          </>
          :""}
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

export default AddEditAdminUserModal;
