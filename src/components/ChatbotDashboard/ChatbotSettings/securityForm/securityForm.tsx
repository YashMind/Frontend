"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { updateChatbotWithoutRouter } from "@/store/slices/chats/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { SecurityForm } from "@/types/chatTypes";

const domainRegex =
  /^(https?:\/\/)?((localhost)|(\d{1,3}(\.\d{1,3}){3})|([a-zA-Z0-9-]+\.[a-zA-Z]{2,}))(:\d+)?(\/.*)?$/;


const schema = yup.object().shape({
  domains: yup
    .string()
    .optional()
    .test("is-valid-domains", "Enter valid domain URLs separated by commas", (value) => {
      if (!value) return true;
      return value
        .split(",")
        .map((d) => d.trim())
        .every((domain) => domainRegex.test(domain));
    }),
  allow_domains: yup.boolean().optional(),
  rate_limit_enabled: yup.boolean().optional(),
  limit_to: yup
    .number()
    .nullable()
    .transform((v, o) => (o === "" ? null : v))
    .min(1, "Must be at least 1 message")
    .optional(),
  every_minutes: yup
    .number()
    .nullable()
    .transform((v, o) => (o === "" ? null : v))
    .min(1, "Must be at least 1 minute")
    .optional(),
});

const SecuritySettings = ({ botId }: { botId?: number }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { chatbotData, loading, error } = useSelector(
    (state: RootState) => state.chat
  );

  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<SecurityForm>({
    resolver: yupResolver(schema) as any,
    defaultValues: {
      allow_domains: false,
      rate_limit_enabled: false,
    },
  });

  const allowDomains = watch("allow_domains");
  const rateLimitEnabled = watch("rate_limit_enabled");

  useEffect(() => {
    if (chatbotData) {
      reset({
        domains: chatbotData.domains || "",
        allow_domains: chatbotData.allow_domains ?? false,
        rate_limit_enabled: chatbotData.rate_limit_enabled ?? false,
        limit_to: chatbotData.limit_to ?? undefined,
        every_minutes: chatbotData.every_minutes ?? undefined,
        id: botId,
      });
    }
  }, [chatbotData, botId, reset]);

  const onSubmit = async (data: SecurityForm) => {
    try {
      setSaveStatus("saving");
      await dispatch(updateChatbotWithoutRouter({ payload: data })).unwrap();
      setSaveStatus("success");
      setTimeout(() => setSaveStatus("idle"), 3000);
    } catch (err) {
      console.error("Failed to update chatbot:", err);
      setSaveStatus("error");
    }
  };



  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl overflow-hidden shadow-md mb-4"
    >
      {/* Header */}
      <div className="bg-indigo-600 text-white px-4 py-2 font-bold text-[22px]">
        Security
      </div>

      <div className="p-4 space-y-4 font-light text-gray-700 text-base">
        {/* Allow Domains Toggle */}
        <div className="flex justify-between items-center">
          <span>Allow these domains to embed the chatbot on their sites</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              {...register("allow_domains")}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-300 rounded-full peer peer-checked:bg-indigo-600 transition duration-300"></div>
            <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-full transition duration-300"></div>
          </label>
        </div>

        {/* Domain Input */}
        {allowDomains && (
          <div>
            <input
              {...register("domains")}
              placeholder="e.g. example.com, sub.example.org"
              className={`w-full px-4 py-2 border ${errors.domains ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none text-sm text-gray-700 bg-[#F3F4F6]`}
            />
            {errors.domains && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.domains.message}
              </span>
            )}
          </div>
        )}

        {/* Rate Limiting Toggle */}
        <div className="flex justify-between items-center">
          <span>Activate rate limiting for incoming requests</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              {...register("rate_limit_enabled")}
              type="checkbox"
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-300 rounded-full peer peer-checked:bg-indigo-600 transition duration-300"></div>
            <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-full transition duration-300"></div>
          </label>
        </div>

        {/* Rate Limit Fields */}
        {rateLimitEnabled && (
          <div className="flex gap-4">
            <div className="w-1/2">
              <input
                type="number"
                {...register("limit_to")}
                placeholder="Limit to"
                className={`w-full px-4 py-2 border ${errors.limit_to ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none text-sm text-gray-700 bg-[#F3F4F6]`}
              />
              <span className="block text-sm text-gray-500 mt-1">Messages</span>
              {errors.limit_to && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.limit_to.message}
                </span>
              )}
            </div>

            <div className="w-1/2">
              <input
                type="number"
                {...register("every_minutes")}
                placeholder="Every X minutes"
                className={`w-full px-4 py-2 border ${errors.every_minutes ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none text-sm text-gray-700 bg-[#F3F4F6]`}
              />
              <span className="block text-sm text-gray-500 mt-1">Minutes</span>
              {errors.every_minutes && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.every_minutes.message}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={saveStatus === "saving"}
          className={`cursor-pointer ${saveStatus === "saving"
            ? "bg-gray-400"
            : "bg-green-500 hover:bg-green-600"
            } text-white px-6 py-1.5 text-sm font-bold rounded-[10px] transition`}
        >
          {saveStatus === "saving"
            ? "Saving..."
            : saveStatus === "success"
              ? "Saved ✓"
              : "Save"}
        </button>

        {/* Inline Error or Success Feedback */}
        {saveStatus === "error" && (
          <p className="text-red-600 text-sm font-medium mt-2">
            Failed to save settings. Please try again.
          </p>
        )}
      </div>
    </form>
  );
};

export default SecuritySettings;
