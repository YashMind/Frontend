"use client";
import {
  createSubscriptionPlan,
  createUpdateBotProduct,
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
}

const schema = yup.object().shape({
  product_name: yup.string().required("Product name is required"),
  active: yup.boolean(),
});

const AddEditProduct = ({ show, onHide }: AddEditPlanProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      product_name: "",
      active: true,
    },
  });

  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (data: ProductMonitoring) => {
    dispatch(createUpdateBotProduct({ payload: data }));
    reset();
    onHide();
  };

  return show ? (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#0E1A47] text-white rounded-2xl p-10 w-[800px] max-w-full shadow-5xl relative">
        <button
          onClick={onHide}
          className="absolute top-4 right-4 text-white text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-1">Add Product</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">
              Product Name
            </label>
            <input
              placeholder="Enter product name"
              type="text"
              {...register("product_name")}
              className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
            />
            {errors.product_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.product_name.message}
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

export default AddEditProduct;
