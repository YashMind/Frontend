"use client";
import React, { useEffect } from "react";
import { AppDispatch, RootState } from "@/store/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { updateChatbotWithoutRouter } from "@/store/slices/chats/chatSlice";
// yup schema
const schema = yup.object().shape({
  text_content: yup.string().required("Text is a required field"),
});
const ChatbotTexts = ({ botId }: { botId?: number }) => {
  const { chatbotData } = useSelector((state: RootState) => state.chat);
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<TrainingText>({ resolver: yupResolver(schema) });

  const onSubmit = (data: TrainingText) => {
    data.id = botId;
    dispatch(updateChatbotWithoutRouter({ payload: data }));
    reset()
  };

  useEffect(() => {
    setValue("text_content", chatbotData?.text_content);
  }, [chatbotData?.text_content]);

  return (
    <div className="w-full ml-10 ">
      <h2 className="text-2xl font-bold my-4 ">Texts</h2>
      <p className="text-sm  font-light">
        This is a quick and easy method to quickly train your chatbot on extra
        data. Simple add any text below
      </p>
      <div className="bg-[#2E265C]flex items-center justify-center mt-10">
        <div className="bg-white rounded-2xl w-full max-w-5xl p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col h-[300px]">
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
              <div className="flex justify-end mt-2">
                <button
                  type="submit"
                  className="cursor-pointer p-2 bg-[#340555] text-white text-sm rounded-md"
                >
                  Send Text
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
