"use client";
import React from "react";
import * as yup from "yup";
import { useForm, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
const schema = yup.object().shape({
  text_message: yup.string().required(),
});
const ChatbotSection = ({ chatbotData }: { chatbotData: ChatbotsData }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<TextMessage>({
    resolver: yupResolver(schema) as Resolver<TextMessage>,
    defaultValues: {
      text_message: "",
    },
  });

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (data: TextMessage) => {
    console.log("data ", data);
    dispatch
    reset();
  }
  return (
    <div className="w-[320] bg-white  h-[500px] rounded-lg shadow-md flex flex-col justify-between ">
      <div className="p-4 flex items-center gap-2 border-b">
        <img
          src="/images/face2.webp"
          alt="Bot"
          className="w-8 h-8 rounded-full"
        />
        <span className="font-semibold text-black">
          {chatbotData?.chatbot_name}
        </span>
      </div>
      <div className="flex-1 p-4 overflow-y-auto text-black">
        <div className="flex items-start gap-2 mb-2">
          <img src="/images/face2.webp" className="w-6 h-6 rounded-full" />
          <p className="bg-gray-200 text-sm p-2 rounded-md max-w-xs">
            Hi, How can I help you today?
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="border-t p-2 flex items-center gap-2">
        <input
         {...register("text_message")}
          type="text"
          placeholder="Type a message..."
          className={`${errors.text_message ? "border-red-500":""} w-full p-2 text-sm rounded-md border text-black border-gray-300 focus:outline-none`}
        />
        <button className="bg-[#05BDFD] p-2 rounded text-white" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M2.01 21L23 12 2.01 3v7l15 2-15 2z" />
          </svg>
        </button>
      </div>
      </form>
      <div className="text-[#6B6B6B] text-center text-sm py-5">
        <h6>powered by fasterbots</h6>
      </div>
    </div>
  );
};

export default ChatbotSection;
