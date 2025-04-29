"use client";
import React, { MouseEvent, useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/store/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { updateChatbotWithoutRouter } from "@/store/slices/chats/chatSlice";
import {
  createPrompt,
  fetchBotPrompts,
} from "@/store/slices/chats/tuningSlice";
// yup schema
const schema = yup.object().shape({
  type: yup.string().required("Prompt type is a required field"),
  prompt: yup.string().required("Prompt is a required field"),
});

type Prompts = {
  type: string;
  prompt: string;
};

const promptTypes = [
  "E-commerce",
  "General Customer Service",
  "Hospitality (Hotels)",
  "Education (Schools)",
  "Healthcare",
  "Real Estate",
  "Finance and Banking",
  "Restaurant and Food Service",
  "Event Management",
  "Legal Services",
  "Nonprofit Organizations",
  "Travel Agencies",
  "Human Resources",
  "Tech Support",
  "Fitness Centers",
  "Automotive Services",
  "Insurance Companies",
  "Job Recruitment",
  "Entertainment Venues",
];

const ChatbotAI = ({ botId }: { botId?: number }) => {
  const [service, setService] = useState("General Customer Service");
  const { chatbotData } = useSelector((state: RootState) => state.chat);
  const prompts = useSelector(
    (state: RootState) => state.tuning.promptsByBotId
  );
  const [creativity, setCreativity] = useState<number>(
    chatbotData.creativity || 0
  );
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Prompts>({
    resolver: yupResolver(schema),
    defaultValues: {
      type: "General Customer Service",
      prompt: "",
    },
  });

  useEffect(() => {
    if (botId) dispatch(fetchBotPrompts(botId));
  }, []);

  const onSubmit = (data: Prompts) => {
    if (promptTypes.includes(data.type) && data.prompt.trim() != "" && botId) {
      dispatch(createPrompt({ prompts: [{ ...data }], bot_id: botId }));
    }
  };

  const handleCreativityChange = (e: React.MouseEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val > 0 && val < 100) {
      dispatch(
        updateChatbotWithoutRouter({ payload: { id: botId, creativity: val } })
      );
    }
  };

  console.log(prompts, "PROMPTS");
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold my-4">AI</h2>
      <div className="min-h-screen ">
        {/* AI Creativity Section */}
        <div className="bg-white rounded-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-black mb-1">AI Creativity</h2>
          <p className="text-sm text-gray-700 mb-4">
            Change the slider to increase or reduce creativity of the bot <br />
            (also known as ‘temperature’ parameter)
          </p>
          {/* Progress bar */}
          <div className="w-full rounded-full">
            <div className="relative">
              <input
                type="range"
                id="percentage-slider"
                min="0"
                max="100"
                value={creativity}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                onChange={(e) => {
                  setCreativity(parseInt(e.target.value));
                }}
                onMouseUp={(e) => {
                  handleCreativityChange(e);
                }}
              />

              <div className="flex justify-between mt-2 px-1">
                <span className="text-sm text-gray-500">{creativity}%</span>
                <span className="text-sm text-gray-500">100%</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Instruction Prompt Section */}
        <div className="bg-white rounded-xl p-6">
          <h2 className="text-lg font-bold text-black mb-1">
            AI Instruction Prompt
          </h2>
          <p className="text-sm text-gray-700 mb-4">
            Give instructions here to tune the behaviour of the bot. You can
            simply explain how you want the bot to behave. <br />
            This will be used as part of the prompt to the AI model.
          </p>

          {/* Dropdown + Buttons */}
          <div className="flex items-center justify-between mb-4">
            <select
              className="bg-[#797879] text-sm font-bold px-4 py-2 rounded-md border-transparent outline-0"
              {...register("type")}
            >
              {promptTypes.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
            <div className="flex gap-2">
              <button className="bg-[#4B4351] text-white text-sm px-4 py-2 rounded-md">
                Delete
              </button>
              <button
                className="bg-[#340555] text-white text-sm px-4 py-2 rounded-md "
                type="submit"
                form="dynamicQAForm"
              >
                Add Prompt
              </button>
            </div>
          </div>

          {/* Prompt Box */}

          <form onSubmit={handleSubmit(onSubmit)} id="dynamicQAForm">
            <div className="flex flex-col h-[300px]">
              <h3 className="font-bold text-sm mb-2 text-black">
                Chatbot Role and Function
              </h3>
              <textarea
                placeholder="Enter your content training here"
                className="flex-grow bg-[#DADADA] rounded-xl p-4 placeholder-[#727272] text-black resize-none outline-none text-sm font-bold"
                {...register("prompt")}
              />
              {errors.prompt && (
                <span className="text-red-500">{errors?.prompt?.message}</span>
              )}
            </div>
          </form>

          {/* Reset Button */}
          <div className="flex justify-end mt-2">
            <button
              onClick={() => reset()}
              className="bg-[#625A67] px-4 py-1 rounded-md text-sm"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotAI;
