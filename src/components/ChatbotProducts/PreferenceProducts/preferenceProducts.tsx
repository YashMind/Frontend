"use client";
import React from "react";
import * as yup from "yup";
import { useForm, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  preferedAiModel: yup.string().required("Prefered ai model is required field"),
  lastUsedModel: yup.boolean().optional(),
});

const PreferenceProducts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PreferenceForm>({
    resolver: yupResolver(schema) as Resolver<PreferenceForm>,
  });

  const onSubmit = (data: PreferenceForm) => {
    console.log(data.lastUsedModel, data.preferedAiModel);
    reset();
  };
  return (
    <div className="Preferences p-6 space-y-6 bg-[#2B255C] ml-[8px]">
      <h2 className="font-semibold text-[21px]">Preferences</h2>
      <p className="text-xs font-light mt-[8px]">
        Connect your chatbot to a WhatsApp business number for automatic 24/7
        responses.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:col-span-2 relative w-[422px] mt-[30px]">
          <label
            htmlFor="ai-model"
            className="mb-[8px] text-lg font-medium text-white"
          >
            Prefered AI Modal
          </label>
          <input
            {...register("preferedAiModel")}
            type="text"
            id="ai-model"
            placeholder="Chat LLM"
            className="bg-[#171821] text-white text-sm font-medium placeholder-[#D2D2D2] rounded-md px-4 py-3 appearance-none w-full outline-0"
          ></input>
          {errors.preferedAiModel && (
            <span className="text-red-500">
              {errors?.preferedAiModel?.message}
            </span>
          )}
          {/* Custom dropdown icon */}
        </div>

        <p className="text-xs font-light mt-[8px]">
          This will be your default AI model for all new conversations.Remember
          last used model
        </p>
        <div className="flex flex-col gap-2 text-white mt-[30px]">
          <label className="inline-flex items-start gap-2">
            <input
              {...register("lastUsedModel")}
              type="checkbox"
              className="accent-[#D2D2D2] w-[14px] h-[14px] mt-[3px]"
            />
            <span className="text-base font-normal">
              Remember Last Used Model
            </span>
          </label>
          <p className="text-xs font-light mt-[8px]">
            Use your previous conversation's model for new chats.
          </p>

          <button
            type="submit"
            className="bg-[#2F0448] px-6 py-2 rounded-[8px] text-white font-mediumtext-lg w-fit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default PreferenceProducts;
