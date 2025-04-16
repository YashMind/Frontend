"use client";
import React, {useState} from "react";
import { AppDispatch } from "@/store/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
// yup schema
const schema = yup.object().shape({
  text_content: yup.string().required("Text is a required field"),
});

const ChatbotAI = () => {
  const [service, setService] = useState("General Customer Service");
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TrainingText>({ resolver: yupResolver(schema) });

  const onSubmit = (data: TrainingText) => {
    console.log(data);
    reset();
  };

  console.log("service ", service);
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
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-[#00ADEF] w-[25%] rounded-full"></div>
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
            <select className="bg-[#797879] text-sm font-bold px-4 py-2 rounded-md border-transparent outline-0" value={service} onChange={(e) => setService(e.target.value)}>
              <option onClick={()=>setService("General Customer Service")}>General Customer Service</option>
              <option onClick={()=>setService("Technical Support")}>Technical Support</option>
              <option onClick={()=>setService("Sales Assistant")}>Sales Assistant</option>
            </select>
            <div className="flex gap-2">
              <button className="bg-[#4B4351] text-white text-sm px-4 py-2 rounded-md">
                Delete
              </button>
              <button className="bg-[#340555] text-white text-sm px-4 py-2 rounded-md "
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
            <h3 className="font-bold text-sm mb-2 text-black">Chatbot Role and Function</h3>
              <textarea
                placeholder="Enter your content training here"
                className="flex-grow bg-[#DADADA] rounded-xl p-4 placeholder-[#727272] text-black resize-none outline-none text-sm font-bold"
                {...register("text_content")}
              />
              {errors.text_content && (
                <span className="text-red-500">
                  {errors?.text_content?.message}
                </span>
              )}
            </div>
          </form>

          {/* Reset Button */}
          <div className="flex justify-end mt-2">
            <button onClick={()=>reset()} className="bg-[#625A67] px-4 py-1 rounded-md text-sm">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotAI;
