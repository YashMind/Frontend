"use client"
import React from "react";
import { AppDispatch } from "@/store/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
// yup schema
const schema = yup.object().shape({
  text_content: yup
  .string()
  .required("Text is a required field"),
});
const ChatbotTexts = () => {
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
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold my-4">Texts</h2>
      <p className="text-sm  font-light">
        This is a quick and easy method to quickly train your chatbot on extra
        data. Simple add any text below
      </p>
      <div className="bg-[#2E265C]flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl w-full max-w-5xl p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col h-[300px]">
            <textarea
              placeholder="Enter your content training here"
              className="flex-grow bg-[#DADADA] rounded-xl p-4 placeholder-[#727272] text-black resize-none outline-none text-sm font-bold"
              {...register("text_content")}
            />
            {errors.text_content && <span className="text-red-500">{errors?.text_content?.message}</span>}
            <div className="flex justify-end mt-2">
              <button type="submit" className="bg-[#340555] text-white text-sm px-4 py-1 rounded-md">
                Send
              </button>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ChatbotTexts;