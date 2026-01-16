"use client";
import React, { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteChatbot,
  updateChatbotWithoutRouter,
} from "@/store/slices/chats/chatSlice";
import { useRouter } from "next/navigation";
import SecuritySettings from "./securityForm/securityForm";
import { ChatbotCustomSettings } from "@/types/chatTypes";

const schema = yup.object().shape({
  id: yup.number(),
  chatbot_name: yup.string().optional(),
  public: yup.boolean().optional(),
});
const ChatbotSettings = ({ botId }: { botId?: number }) => {
  const [deleteChecked, setDeleteChecked] = useState<boolean>(false);
  const { chatbotData } = useSelector((state: RootState) => state.chat);
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: ChatbotCustomSettings) => {
    dispatch(updateChatbotWithoutRouter({ payload: data }));
  };

  useEffect(() => {
    setValue("chatbot_name", chatbotData?.chatbot_name);
    setValue("public", chatbotData?.public);
    setValue("id", botId);
  }, [chatbotData?.chatbot_name]);

  const router = useRouter();
  const handleDeleteChatbot = () => {
    dispatch(deleteChatbot({ bot_id: botId, router }));
  };
  return (
    <div className="p-4 md:p-6 space-y-8 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-3xl font-bold text-white tracking-tight max-md:ml-12">Settings</h2>
      </div>

      <div className="space-y-6">
        {/* Basic Section */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-indigo-500/10">
          <div className="bg-white/5 px-6 py-4 border-b border-white/10">
            <h3 className="text-xl font-bold text-white tracking-wide">Basic Settings</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="p-6">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-300">Display Name</label>
                  <p className="text-xs text-gray-500 font-light">The name your users will see when interacting with the chatbot.</p>
                </div>
                <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                  <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Public Access</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      {...register("public")}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:bg-indigo-500 transition-all duration-300 border border-white/10"></div>
                    <div className="absolute left-[3px] top-[3px] w-4.5 h-4.5 bg-white rounded-full shadow-lg peer-checked:translate-x-5 transition-all duration-300"></div>
                  </label>
                </div>
              </div>

              <div className="relative group">
                <input
                  type="text"
                  {...register("chatbot_name")}
                  placeholder="e.g. My Awesome Assistant"
                  className="w-full px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="group relative cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-2.5 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 active:scale-95 flex items-center gap-2"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Security Section */}
        <SecuritySettings botId={botId} />

        {/* Delete Section */}
        <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-red-500/20 shadow-2xl transition-all duration-300">
          <div className="bg-red-500/10 px-6 py-4 border-b border-red-500/20">
            <h3 className="text-xl font-bold text-red-400 tracking-wide">Danger Zone</h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="bg-red-500/5 border-l-4 border-red-500 p-4 rounded-r-xl">
              <p className="text-sm text-red-200/80 leading-relaxed font-light">
                Deleting a bot is <span className="font-bold underline">permanent</span> and cannot be undone.
                All linked documents, configurations, and chat history will be permanently erased from our servers.
              </p>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
              onClick={() => setDeleteChecked(!deleteChecked)}>
              <div className="pt-0.5">
                <input
                  type="checkbox"
                  checked={deleteChecked}
                  onChange={(e) => setDeleteChecked(e.target.checked)}
                  className="w-5 h-5 rounded border-white/20 bg-white/5 text-red-500 focus:ring-red-500 focus:ring-offset-0 transition-all cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <label className="text-sm text-gray-300 select-none cursor-pointer group-hover:text-white transition-colors">
                I understand that this action is irreversible and I want to delete this chatbot.
              </label>
            </div>

            <div className="flex justify-start">
              <button
                type="button"
                className="cursor-pointer bg-red-600/80 hover:bg-red-600 disabled:bg-white/10 disabled:text-gray-500 disabled:cursor-not-allowed text-white px-8 py-2.5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-red-600/20 active:scale-95"
                disabled={!deleteChecked}
                onClick={() => handleDeleteChatbot()}
              >
                Delete Chatbot
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotSettings;
