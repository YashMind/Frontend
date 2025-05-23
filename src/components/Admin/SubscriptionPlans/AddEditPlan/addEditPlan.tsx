"use client";
import { createSubscriptionPlan } from "@/store/slices/admin/adminSlice";
import { AppDispatch } from "@/store/store";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";

interface AddEditPlanProps {
  show: boolean;
  onHide: () => void;
  planData: SubscriptionPlans;
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
  features: yup.string().required("Features is required"),
});

const AddEditPlan = ({ show, onHide, planData }: AddEditPlanProps) => {
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
      features: "",
    },
  });

  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (data: SubscriptionPlans) => {
    dispatch(createSubscriptionPlan({ payload: data }));
    reset();
    onHide();
  };

  useEffect(() => {
    setValue("name", planData?.name);
    setValue("pricing", planData?.pricing);
    setValue("token_limits", planData?.token_limits);
    setValue("features", planData?.features);
    setValue("id", planData?.id);
  }, [reset, planData?.id, show]);

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
          {planData?.id ? "Edit" : "Add"} Token Bot
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Bot Name</label>
            <input
              placeholder="Enter bot name"
              type="text"
              disabled={!!planData?.id}
              {...register("name")}
              className={`w-full px-4 py-2 rounded  text-black focus:outline-none ${planData?.id ? "cursor-not-allowed bg-gray-300" : "bg-white"
                }`}
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

          <div>
            <label className="block mb-1 text-sm font-medium">Features</label>
            <textarea
              placeholder="Enter features"
              rows={4}
              {...register("features")}
              className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
            ></textarea>
            {errors.features && (
              <p className="text-red-500 text-sm mt-1">
                {errors.features.message}
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

export default AddEditPlan;
