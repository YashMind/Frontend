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
    <div className="w-full m-4">
      <h2 className="text-2xl font-bold mb-5 max-md:ml-12">Settings</h2>

      <div className="bg-[#312d63] min-h-screen p-4 max-w-[320px] rounded-2xl">
        <div className="w-full">
          {/* Basic Section */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md mb-4">
            <div className="bg-indigo-600 text-white px-4 py-2 font-bold text-[22px]">
              Basic
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between text-sm font-light text-black">
                  <label>Name to display for your chatbot</label>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="font-bold">Public</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        {...register("public")}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-300 rounded-full peer peer-checked:bg-indigo-600 transition duration-300"></div>
                      <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-full transition duration-300"></div>
                    </label>
                  </div>
                </div>
                <input
                  type="text"
                  {...register("chatbot_name")}
                  placeholder="Jhon Doe"
                  className=" px-4 py-2 rounded-full bg-[#D9D9D9] text-sm focus:outline-none text-[#727272] placeholder-[#727272]"
                />
                <div>
                  <button
                    type="submit"
                    className="cursor-pointer bg-green-500 hover:bg-green-600 text-white px-6 py-1.5 text-sm font-bold rounded-[10px]"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Security Section */}
          <SecuritySettings botId={botId} />

          {/* Delete Account Section */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md mb-4">
            <div className="bg-indigo-600 text-white px-4 py-2 font-bold text-[22px]">
              Delete Account
            </div>
            <div className="p-4 space-y-4 text-base text-black  font-light">
              <p>
                Deleting a bot is a permanent action and cannot be undone. This will erase all documents linked to the bot and its complete history.
              </p>
              <input
                type="checkbox"
                checked={deleteChecked}
                onChange={(e: any) => setDeleteChecked(e.target.checked)}
                placeholder="Jhon Doe"
                className="cursor-pointer px-4 py-2 rounded-full bg-[#D9D9D9] text-sm focus:outline-none text-[#727272] placeholder-[#727272]"
              />
              <span className="ml-2 text-sm text-gray-600">
                Yes, I want to permanently delete this bot and all its data.
              </span>
              <div>
                <button
                  type="button"
                  className="cursor-pointer bg-red-500 hover:bg-red-800 text-white px-6 py-1.5 text-sm font-bold rounded-[10px] disabled:bg-red-300 disabled:text-white disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={!deleteChecked}
                  onClick={() => handleDeleteChatbot()}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotSettings;
