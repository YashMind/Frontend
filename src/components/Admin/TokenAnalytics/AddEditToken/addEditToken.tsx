"use client";
import {
  createSubscriptionPlan,
  createTokenBots,
} from "@/store/slices/admin/adminSlice";
import { AppDispatch } from "@/store/store";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";

interface AddEditTokenProps {
  show: boolean;
  onHide: () => void;
  tokenData: TokenBots;
}

const schema = yup.object().shape({
  id: yup.number(),
  name: yup.string().required("Name is required"),
  pricing: yup
    .number()
    .typeError("Pricing must be a number")
    .required("Pricing is required "),
  token_limits: yup
    .number()
    .typeError("Token limit must be a number")
    .required("Token limit is required"),
});

const AddEditToken = ({ show, onHide, tokenData }: AddEditTokenProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
    },
  });

  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (data: TokenBots) => {
    dispatch(createTokenBots({ payload: data }));
    reset();
    onHide();
  };

  useEffect(() => {
    setValue("name", tokenData?.name);
    setValue("pricing", tokenData?.pricing);
    setValue("token_limits", tokenData?.token_limits);
    setValue("id", tokenData?.id);
  }, [reset, tokenData?.id, show]);
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
          {tokenData?.id ? "Edit" : "Add"} Plan
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Plan Name</label>
            <input
              placeholder="Enter plan name"
              type="text"
              {...register("name")}
              className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Pricing ($)
            </label>
            <input
              placeholder="Enter pricing"
              type="number"
              {...register("pricing", { valueAsNumber: true })}
              className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
            />
            {errors.pricing && (
              <p className="text-red-500 text-sm mt-1">
                {errors.pricing.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Token Limit
            </label>
            <input
              placeholder="Enter token limits"
              type="number"
              {...register("token_limits", { valueAsNumber: true })}
              className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
            />
            {errors.token_limits && (
              <p className="text-red-500 text-sm mt-1">
                {errors.token_limits.message}
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

export default AddEditToken;
