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
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-indigo-500/10"
    >
      {/* Header */}
      <div className="bg-white/5 px-6 py-4 border-b border-white/10">
        <h3 className="text-xl font-bold text-white tracking-wide">Security Settings</h3>
      </div>

      <div className="p-6 space-y-8">
        {/* Allow Domains Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
            <div className="space-y-1">
              <span className="text-sm font-medium text-gray-200">Domain Restriction</span>
              <p className="text-xs text-gray-500 font-light">Only allow specific domains to embed this chatbot.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                {...register("allow_domains")}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:bg-indigo-500 transition-all duration-300 border border-white/10"></div>
              <div className="absolute left-[3px] top-[3px] w-4.5 h-4.5 bg-white rounded-full shadow-lg peer-checked:translate-x-5 transition-all duration-300"></div>
            </label>
          </div>

          {allowDomains && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <textarea
                {...register("domains")}
                placeholder="e.g. example.com, sub.example.org"
                rows={2}
                className={`w-full px-6 py-3 bg-white/5 border ${errors.domains ? "border-red-500/50" : "border-white/10"
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-sm text-gray-200 placeholder-gray-500 transition-all resize-none`}
              />
              {errors.domains && (
                <span className="text-red-400 text-xs mt-2 flex items-center gap-1">
                  <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                  {errors.domains.message}
                </span>
              )}
              <p className="text-xs text-gray-500 mt-2 px-1 italic">Separate multiple domains with commas.</p>
            </div>
          )}
        </div>

        {/* Rate Limiting Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
            <div className="space-y-1">
              <span className="text-sm font-medium text-gray-200">Rate Limiting</span>
              <p className="text-xs text-gray-500 font-light">Prevent abuse by limiting requests from a single user.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                {...register("rate_limit_enabled")}
                type="checkbox"
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:bg-indigo-500 transition-all duration-300 border border-white/10"></div>
              <div className="absolute left-[3px] top-[3px] w-4.5 h-4.5 bg-white rounded-full shadow-lg peer-checked:translate-x-5 transition-all duration-300"></div>
            </label>
          </div>

          {rateLimitEnabled && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-1">Message Limit</label>
                <div className="relative">
                  <input
                    type="number"
                    {...register("limit_to")}
                    placeholder="e.g. 10"
                    className={`w-full px-6 py-3 bg-white/5 border ${errors.limit_to ? "border-red-500/50" : "border-white/10"
                      } rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-sm text-gray-200 transition-all`}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500 uppercase">msgs</span>
                </div>
                {errors.limit_to && (
                  <span className="text-red-400 text-xs mt-1 block px-1">
                    {errors.limit_to.message}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-1">Time Window</label>
                <div className="relative">
                  <input
                    type="number"
                    {...register("every_minutes")}
                    placeholder="e.g. 5"
                    className={`w-full px-6 py-3 bg-white/5 border ${errors.every_minutes ? "border-red-500/50" : "border-white/10"
                      } rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-sm text-gray-200 transition-all`}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500 uppercase">mins</span>
                </div>
                {errors.every_minutes && (
                  <span className="text-red-400 text-xs mt-1 block px-1">
                    {errors.every_minutes.message}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/10">
          <button
            type="submit"
            disabled={saveStatus === "saving"}
            className={`cursor-pointer group relative overflow-hidden flex items-center gap-2 px-8 py-2.5 rounded-xl font-bold transition-all duration-300 shadow-lg active:scale-95 ${saveStatus === "saving"
              ? "bg-white/10 text-gray-500"
              : saveStatus === "success"
                ? "bg-emerald-600/20 text-emerald-400 border border-emerald-500/30"
                : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/20 hover:shadow-indigo-600/40"
              }`}
          >
            {saveStatus === "saving" ? (
              <>
                <div className="w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
                <span>Saving...</span>
              </>
            ) : saveStatus === "success" ? (
              <>
                <span className="text-lg">✓</span>
                <span>Saved Successfully</span>
              </>
            ) : (
              "Save Security Settings"
            )}
          </button>

          {saveStatus === "error" && (
            <div className="animate-in fade-in duration-300 text-red-400 text-sm font-medium bg-red-500/10 px-4 py-2 rounded-lg border border-red-500/20">
              Failed to save. Please try again.
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default SecuritySettings;
