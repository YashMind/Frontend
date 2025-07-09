"use client";
import { useRouter } from "next/navigation";
import React from "react";
import * as yup from "yup";
import { useForm, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createChatbot } from "@/store/slices/chats/chatSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { CreatebotForm } from "@/types/chatTypes";
import { promptTypes } from "../../ChatbotAI/chatbotAI";

interface EditUserModalProps {
  show: boolean;
  onHide: () => void;
}

// Define a list of available domains
const DOMAIN_OPTIONS = promptTypes.map(domain => ({
  value: domain,
  label: domain
}));

const schema = yup.object().shape({
  chatbot_name: yup.string().required("Bot name is required field"),
  public: yup.boolean().optional(),
  domain: yup.string().required("Please select a domain")
});

const CreatebotModal = ({ show, onHide }: EditUserModalProps) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatebotForm>({
    resolver: yupResolver(schema) as Resolver<CreatebotForm>,
  });

  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (data: CreatebotForm) => {
    dispatch(createChatbot({ payload: data, router }))
      .unwrap()
      .then(() => {
        onHide();
      });
    reset();
  };

  return show ? (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] bg-opacity-50 flex items-center justify-center z-50 mb-5">
      <div className="bg-white rounded-2xl shadow-xl w-[600px] p-8 relative">
        <button
          onClick={onHide}
          className="cursor-pointer absolute top-4 right-4 text-black text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-black mb-6">Create New Bot</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Give Your bot a name
            </label>
            <input
              {...register("chatbot_name")}
              type="text"
              placeholder="Enter bot name"
              className="w-full border text-black border-gray-300 text-xs rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.chatbot_name && (
              <span className="text-red-500 mt-2">
                {errors?.chatbot_name?.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select Domain
            </label>
            <select
              {...register("domain")}
              className="w-full border text-black border-gray-300 text-xs rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select a domain</option>
              {DOMAIN_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.domain && (
              <span className="text-red-500 mt-2">
                {errors?.domain?.message}
              </span>
            )}
          </div>

          <div className="pb-5 mt-4">
            <label className="text-sm font-semibold text-gray-700 mb-6">
              Make your bot public
            </label>
          </div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <span className="mr-2 text-black text-sm font-semibold">
                Public
              </span>
              {/* Toggle */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  {...register("public")}
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked
                />
                <div className="w-11 h-6 bg-[#9F9F9F] rounded-full peer peer-checked:bg-black transition-all duration-300"></div>
                <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white border border-gray-300 rounded-full transition-all duration-300 peer-checked:translate-x-5"></div>
              </label>
            </div>
          </div>

          <div className="flex justify-start gap-4">
            <button
              className="cursor-pointer bg-[#18B91F] text-white px-6 py-2 rounded-md font-semibold"
              type="submit"
            >
              Save
            </button>
            <button
              className="cursor-pointer bg-[#9F9F9F] text-white px-6 py-2 rounded-md font-semibold"
              onClick={onHide}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default CreatebotModal;