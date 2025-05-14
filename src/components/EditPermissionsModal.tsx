"use client";
import {getRolePermissions,updateRoleAdmin} from "@/store/slices/admin/adminSlice";
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
  roleData: string;
  onUpdatePermissions: (updatedData: AdminPermissionsForm) => void;
}

interface AdminPermissionsForm {
  id?: number;
  role?: string;
  permissions?: string[] | null;
}

const schema = () =>
  yup.object().shape({
    id: yup.number(),
    role: yup.string().required("Role is a required field"),
    permissions: yup.array().notRequired(),
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

const EditPermissionModal = ({
  show,
  onHide,
  adminUserData,
  onUpdatePermissions
}: AddEditPlanProps) => {

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema()),
  });
  
  const dispatch = useDispatch<AppDispatch>();
  const options = permissionsArray.map((item) => ({
    value: item,
    label: item,
  }));

    useEffect(() => {
    setValue("role", adminUserData?.role);
    setValue("id", adminUserData?.id);
    setValue("permissions", adminUserData?.permissions || []);
  }, [reset, adminUserData?.id, show]);

  const onSubmit = async (data: AdminPermissionsForm) => {
    if (data.id) {
      await dispatch(updateRoleAdmin({ payload: data }));
      const updated = await dispatch(getRolePermissions(data.role!)).unwrap();
      onUpdatePermissions({ id: data.id, role: data.role, permissions: updated.permissions });
      reset();
      onHide();
    }
  };

  return show ? (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#0E1A47] text-white rounded-2xl p-10 w-[800px] max-w-full shadow-5xl relative">
        <button
          onClick={onHide}
          className="cursor-pointer absolute top-4 right-4 text-white text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4">
          Edit Permissions
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <>
            <div>
              <label className="block mb-1 text-sm font-medium">Role</label>
              <select
                disabled
                {...register("role")}
                className="cursor-not-allowed w-full px-4 py-2 rounded bg-gray-300 text-black focus:outline-none"
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
                    (watch("permissions") || []).includes(opt.value)
                  )}
                  options={options}
                  onChange={(selected) => {
                    setValue(
                      "permissions",
                      selected.map((s) => s.value)
                    );
                  }}
                  className="text-black cursor-pointer"
                  classNamePrefix="select"
                  styles={{
                    multiValueRemove: (base) => ({
                      ...base,
                      cursor: "pointer",
                    }),
                  }}
                />
                {errors.permissions && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.permissions?.message}
                  </p>
                )}
              </div>
            ) : null}
          </>
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

export default EditPermissionModal;
