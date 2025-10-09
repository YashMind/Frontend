"use client";
import { createSubscriptionPlan } from "@/store/slices/admin/adminSlice";
import { AppDispatch } from "@/store/store";
import { SubscriptionPlans } from "@/types/adminType";
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
  pricingInr: yup
    .number()
    .typeError("INR Pricing must be a number")
    .required("INR Pricing is required "),
  pricingDollar: yup
    .number()
    .typeError("Dollar Pricing must be a number")
    .required("Dollar Pricing is required "),
  // token_per_unit: yup
  //   .number()
  //   .typeError("Token limit must be a number")
  //   .required("Token limit is required"),
  message_per_unit: yup
    .number()
    .typeError("Message limit must be a number")
    .required("Message limit is required"),
  chatbots_allowed: yup
    .number()
    .typeError("Chatbots allowed must be a number")
    .required("Chatbots is required"),
  chars_allowed: yup
    .number()
    .typeError("Characters allowed must be a number")
    .required("Chars Allowed is required"),
  webpages_allowed: yup
    .number()
    .typeError("Webpages allowed must be a number")
    .required("Webpages Allowed is required"),
  team_strength: yup
    .number()
    .typeError("Team strength must be a number")
    .required("Chatbots is required"),
  duration_days: yup
    .number()
    .typeError("Duration must be a number")
    .required("Duration is required"),
  features: yup.string().trim().nullable(),
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
    dispatch(createSubscriptionPlan({ payload: data })).unwrap().then((res) => {
      console.log("Subscription plan create response:", res)
      reset();
      onHide();
    });
  };

  const onError = (errors: any) => {
    console.error("❌ Validation Errors:", errors);
  };

  useEffect(() => {
    setValue("name", planData?.name);
    setValue("pricingInr", planData?.pricingInr);
    setValue("pricingDollar", planData?.pricingDollar);
    setValue("token_per_unit", planData?.token_per_unit);
    setValue("message_per_unit", planData?.message_per_unit);
    setValue("chatbots_allowed", planData?.chatbots_allowed);
    setValue("chars_allowed", planData?.chars_allowed);
    setValue("webpages_allowed", planData?.webpages_allowed);
    setValue("team_strength", planData?.team_strength);
    setValue("duration_days", planData?.duration_days);
    setValue("features", planData?.features);
    setValue("id", planData?.id);
  }, [reset, planData?.id, show]);

  return show ? (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#0E1A47] text-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl border border-[#1E3A8A] relative">
        <button
          onClick={onHide}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
          aria-label="Close modal"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          {planData?.id ? "Edit" : "Add"} Token Bot
        </h2>

        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Bot Name */}
           <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Bot Name *
              </label>
              <input
                placeholder="e.g. Premium Bot"
                type="text"
                {...register("name")}
                className={`w-full px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ${planData?.id
                  ? "cursor-not-allowed bg-gray-700 text-gray-400"
                  : "bg-[#1A2C65] text-white"
                  }`}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Duration */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Duration *
              </label>
              <select
                {...register("duration_days", { valueAsNumber: true })}
                className="w-full px-4 py-2.5 rounded-lg bg-[#1A2C65] text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              >
                <option value="" disabled selected>
                  Select Duration
                </option>
                {[
                  { duration: 7, label: "Weekly" },
                  { duration: 15, label: "15 Days" },
                  { duration: 30, label: "Monthly" },
                  { duration: 90, label: "Quarterly" },
                  { duration: 180, label: "Bi-annually" },
                  { duration: 365, label: "Yearly" },
                ].map((item, index) => (
                  <option key={index} value={item.duration}>
                    {item.label} ({item.duration} days)
                  </option>
                ))}
              </select>
              {errors.duration_days && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.duration_days.message}
                </p>
              )}
            </div>

            {/* Pricing (INR) */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Pricing (₹) *
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  ₹
                </span>
                <input
                  placeholder="0.00"
                  type="number"
                  step="0.01"
                  {...register("pricingInr", { valueAsNumber: true })}
                  className="w-full pl-8 pr-4 py-2.5 rounded-lg bg-[#1A2C65] text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                />
              </div>
              {errors.pricingInr && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.pricingInr.message}
                </p>
              )}
            </div>

            {/* Pricing (USD) */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Pricing ($) *
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  $
                </span>
                <input
                  placeholder="0"
                  type="number"
                  step="1"
                  {...register("pricingDollar", { valueAsNumber: true })}
                  className="w-full pl-8 pr-4 py-2.5 rounded-lg bg-[#1A2C65] text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                />
              </div>
              {errors.pricingDollar && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.pricingDollar.message}
                </p>
              )}
            </div>
            {/* 
            Token Limit */}
            {/* <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Token Limit *
              </label>
              <input
                placeholder="e.g. 10000"
                type="number"
                {...register("token_per_unit", { valueAsNumber: true })}
                className="w-full px-4 py-2.5 rounded-lg bg-[#1A2C65] text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
              {errors.token_per_unit && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.token_per_unit.message}
                </p>
              )}
            </div> */}

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Message Limit Per Credit*
              </label>
              <input
                placeholder="e.g. 10000"
                type="number"
                {...register("message_per_unit", { valueAsNumber: true })}
                className="w-full px-4 py-2.5 rounded-lg bg-[#1A2C65] text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
              {errors.message_per_unit && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.message_per_unit.message}
                </p>
              )}
            </div>

            {/* Chatbots allowed */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Chatbots Allowed *
              </label>
              <input
                placeholder="e.g. 5"
                type="number"
                {...register("chatbots_allowed", { valueAsNumber: true })}
                className="w-full px-4 py-2.5 rounded-lg bg-[#1A2C65] text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
              {errors.chatbots_allowed && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.chatbots_allowed.message}
                </p>
              )}
            </div>

            {/* Characters allowed */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Characters Allowed *
              </label>
              <input
                placeholder="e.g. 100000"
                type="number"
                {...register("chars_allowed", { valueAsNumber: true })}
                className="w-full px-4 py-2.5 rounded-lg bg-[#1A2C65] text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
              {errors.chars_allowed && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.chars_allowed.message}
                </p>
              )}
            </div>

            {/* Webpages allowed */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Webpages Allowed *
              </label>
              <input
                placeholder="e.g. 20"
                type="number"
                {...register("webpages_allowed", { valueAsNumber: true })}
                className="w-full px-4 py-2.5 rounded-lg bg-[#1A2C65] text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
              {errors.webpages_allowed && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.webpages_allowed.message}
                </p>
              )}
            </div>

            {/* Team Strength */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Team Strength *
              </label>
              <input
                placeholder="e.g. 10"
                type="number"
                {...register("team_strength", { valueAsNumber: true })}
                className="w-full px-4 py-2.5 rounded-lg bg-[#1A2C65] text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
              {errors.team_strength && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.team_strength.message}
                </p>
              )}
            </div>
          </div>

          {/* Features */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Features *
            </label>
            <textarea
              placeholder="List key features separated by commas or bullets"
              rows={4}
              {...register("features")}
              className="w-full px-4 py-2.5 rounded-lg bg-[#1A2C65] text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            ></textarea>
            <p className="text-xs text-gray-400 mt-1">
              Separate features with commas or new lines
            </p>
            {errors.features && (
              <p className="text-red-400 text-xs mt-1">
                {errors.features.message}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-[#1E3A8A]">
            <button
              type="button"
              onClick={onHide}
              className="px-6 py-2.5 rounded-lg border border-gray-500 text-white hover:bg-white/10 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-700 hover:to-blue-500 transition-all duration-200 shadow-lg hover:shadow-blue-500/20"
            >
              {planData?.id ? "Update" : "Create"} Bot
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default AddEditPlan;
