"use client";
import React from "react";
import * as yup from "yup";
import { useForm, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  subject: yup.string().required("Subject is required field"),
  message: yup.string().required("Message is required field"),
});
const HelpProducts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<HelpSupportForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: HelpSupportForm) => {
    console.log(data);
    reset();
  };
  return (
    <div className="help-support p-4 md:p-10 text-white bg-[#2B245D] rounded-lg space-y-6">
      <div>
        <h2 className="font-semibold text-[21px]">Help & Support</h2>
        <p className="text-xs font-light mt-2">
          If you need assistance, please fill out the form below, and our
          support team will get back to you shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Subject */}
        <div className="flex flex-col space-y-2 w-full md:w-[422px]">
          <label htmlFor="subject" className="text-lg font-medium text-white">
            Subject:
          </label>
          <input
            {...register("subject")}
            type="text"
            id="subject"
            placeholder="Enter your issue subject"
            className="bg-[#171821] text-white rounded-md p-3 outline-none placeholder-[#D2D2D2] text-sm font-medium w-full"
          />
          {errors.subject && (
            <span className="text-red-500">{errors?.subject?.message}</span>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col space-y-2 w-full md:w-[422px]">
          <label htmlFor="message" className="text-lg font-medium text-white">
            Message:
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={6}
            placeholder="Describe your issue in detail..."
            className="bg-[#171821] text-white rounded-md p-3 outline-none placeholder-[#D2D2D2] text-sm font-medium w-full"
          />
          {errors.message && (
            <span className="text-red-500">{errors?.message?.message}</span>
          )}
        </div>

        {/* Button */}
        <div className="flex justify-center md:justify-start">
          <button
            type="submit"
            className="bg-[#2F0448] px-6 py-2 rounded-[8px] text-white font-medium text-lg"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default HelpProducts;
