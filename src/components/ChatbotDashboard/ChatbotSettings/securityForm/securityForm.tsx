"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { updateChatbotWithoutRouter } from "@/store/slices/chats/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { SecurityForm } from "@/types/chatTypes";

const domainRegex = /^(https:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

const schema = yup.object().shape({
  domains: yup
    .string()
    .optional()
    .test(
      "is-valid-domains",
      "Enter valid domain URLs separated by commas",
      (value) => {
        if (!value) return true;
        return value
          .split(",")
          .map((d) => d.trim())
          .every((domain) => domainRegex.test(domain));
      }
    ),
  allow_domains: yup.string().optional(),
  rate_limit_enabled: yup.boolean().optional(),
  limit_to: yup.number().optional(),
  every_minutes: yup.number().optional(),
});

const SecuritySettings = ({ botId }: { botId?: number }) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<SecurityForm>({
    resolver: yupResolver(schema) as any,
  });

  const allowDomains = watch("allow_domains");
  const rateLimitEnabled = watch("rate_limit_enabled");

  const onSubmit = (data: SecurityForm) => {
    dispatch(updateChatbotWithoutRouter({ payload: data }));
  };

  const { chatbotData } = useSelector((state: RootState) => state.chat);
  useEffect(() => {
    setValue("domains", chatbotData?.domains);
    setValue("limit_to", chatbotData?.limit_to);
    setValue("every_minutes", chatbotData?.every_minutes);
    setValue("id", botId);
  }, [chatbotData?.domains]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl overflow-hidden shadow-md mb-4"
    >
      <div className="bg-black text-white px-4 py-2 font-bold text-[22px]">
        Security
      </div>
      <div className="p-4 space-y-4 font-light text-gray-700 text-base">
        {/* Allow Domains */}
        <div className="flex justify-between items-center">
          <span>
            Allow these domains only to add the chatbot to their website
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              {...register("allow_domains")}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-300 rounded-full peer peer-checked:bg-black transition duration-300"></div>
            <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-full transition duration-300"></div>
          </label>
        </div>
        {allowDomains && (
          <div>
            <input
              {...register("domains")}
              placeholder="e.g. example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none text-sm text-gray-700 bg-[#D9D9D9]"
            />
            {errors.domains && (
              <span className="text-red-500">{errors?.domains?.message}</span>
            )}
          </div>
        )}

        {/* Rate Limiting */}
        <div className="flex justify-between items-center">
          <span>Enable rate limiting</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              {...register("rate_limit_enabled")}
              type="checkbox"
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-300 rounded-full peer peer-checked:bg-black transition duration-300"></div>
            <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-full transition duration-300"></div>
          </label>
        </div>
        {rateLimitEnabled && (
          <div className="flex gap-4">
            <div className="w-1/2">
              <input
                type="number"
                {...register("limit_to")}
                placeholder="Limit to"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none text-sm text-gray-700 bg-[#D9D9D9]"
              />
              <span className="block text-sm text-gray-500 mt-1">messages</span>
            </div>

            <div className="w-1/2">
              <input
                type="number"
                {...register("every_minutes")}
                placeholder="Every X minutes"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none text-sm text-gray-700 bg-[#D9D9D9]"
              />
              <span className="block text-sm text-gray-500 mt-1">minutes</span>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-1.5 text-sm font-bold rounded-[10px]"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default SecuritySettings;
