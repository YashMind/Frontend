"use client";
import React, { useEffect } from "react";
import { AppDispatch, RootState } from "@/store/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { updateChatbotWithoutRouter } from "@/store/slices/chats/chatSlice";
import { TrainingText } from "@/types/authType";
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
    // reset();
  };

  useEffect(() => {
    setValue("text_content", chatbotData?.text_content || `Company Name: [Enter company name]
Brand Name: [Enter brand name]
Support Page Link: [Enter URL]
Support Email: [Enter email address]
Contact Info: [Phone number, email, etc.]
Company Address: [Full address]

Tone Guidelines: [e.g., Friendly, Professional, Casual]
Formatting Rules: [e.g., Use bullet points, bold keywords]
Custom Phrasing: [e.g., Call users "guests", say "Let's go!" instead of "Start"]
Key Policies: [e.g., Return policy, terms of service]

Company Genre/Industry: [e.g., Education, Health, Tech]
Location: [City, Country]
Website: [Enter website]
Social Media: [Links or handles]
Company Description: [Short summary]
Services Offered: [List of services]`);
  }, [chatbotData?.text_content]);

  return (
    <div className="m-4 h-full">
      <h2 className="text-2xl max-w-[50%] font-bold mb-4 max-md:ml-12">
        Train Bot with simple text
      </h2>
      <p className="text-sm font-light">
        Easily enhance your chatbot’s training by adding additional text below. It’s a fast and simple way to update your bot with new information.
      </p>
      <div className=" flex flex-1 items-center justify-center mt-4">
        <div className="bg-white rounded-2xl w-full  p-4 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col  min-h-[500px]">
              <textarea
                placeholder="Enter your content training here"
                className="flex-grow bg-[#DADADA] rounded-xl p-4 placeholder-[#727272] text-black resize-none outline-none text-sm font-bold h-full"
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
                  Save
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
