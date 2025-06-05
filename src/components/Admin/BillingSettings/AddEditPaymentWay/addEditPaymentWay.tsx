"use client";
import { AddUpdatePaymentGateway, } from "@/store/slices/admin/adminSlice";
import { AppDispatch } from "@/store/store";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";

interface AddEditPlanProps {
  show: boolean;
  onHide: () => void;
  userData: AdminPaymentGateway;
}

const schema = yup.object().shape({
  id: yup.number(),
  payment_name: yup
    .string()
    .required("Full Name is a required field")
    .min(3, "Full name must be at least 3 characters"),
  status: yup.string().required("Status is a required field"),
  api_key: yup.string().required("Api key is a required field"),
});

const AddEditPaymentWayModal = ({
  show,
  onHide,
  userData,
}: AddEditPlanProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      payment_name: "",
      status: "",
      api_key: "",
    },
  });

  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (data: AdminPaymentGateway) => {
    dispatch(AddUpdatePaymentGateway({ payload: data }));
    reset();
    onHide();
  };

  useEffect(() => {
    setValue("payment_name", userData?.payment_name);
    setValue("status", userData?.status);
    setValue("api_key", userData?.api_key);
    setValue("id", userData?.id);
  }, [reset, userData?.id, show]);

  return show ? (
    <div className="cursor-pointer fixed inset-0 bg-[rgba(0,0,0,0.6)] bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#0E1A47] text-white rounded-2xl p-10 w-[800px] max-w-full shadow-5xl relative">
        <button
          onClick={onHide}
          className="absolute top-4 right-4 text-white text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-1">
          {userData?.id ? "Edit" : "Add"} Admin
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">
              Payment Name
            </label>
            <select
              {...register("payment_name")}
              className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select payment
              </option>
              <option value="Cashfree">Cashfree</option>
              <option value="PayPal">PayPal</option>
            </select>
            {errors.payment_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.payment_name?.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Status</label>
            <select
              {...register("status")}
              className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select status
              </option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-sm mt-1">
                {errors.status?.message}
              </p>
            )}
          </div>

          {/* <div>
            <label className="block mb-1 text-sm font-medium">Api Key</label>
            <input
              placeholder="Enter api key"
              type="text"
              {...register("api_key")}
              className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
            />
            {errors.api_key && (
              <p className="text-red-500 text-sm mt-1">
                {errors.api_key?.message}
              </p>
            )}
          </div> */}

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

export default AddEditPaymentWayModal;
