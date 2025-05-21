"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import LeadGenForm from "./LeadGenForm";
import { ChatbotSettings } from "@/types/chatTypes";
import { IoMdSend } from "react-icons/io";
const ChatbotDummy = ({
  chatbotSettings,
}: {
  chatbotSettings: Partial<Omit<ChatbotSettings, "id">>;
}) => {
  const messagesEndRef: any = useRef(null);
  const chatbotAvatar =
    typeof chatbotSettings.image === "string" &&
    chatbotSettings.image.trim() !== ""
      ? chatbotSettings.image
      : "/images/face2.webp";
  // const chatbotAvatar = chatbotSettings.image || "/images/face2.webp";
  return (
    <div
      className="w-[320]  h-full rounded-lg shadow-md flex flex-col justify-between sticky top-40"
      style={{ backgroundColor: chatbotSettings.chat_window_bg ?? "#ffffff" }}
    >
      <div className="p-4 flex items-center gap-2 border-b">
        {chatbotAvatar && (
          <Image
            src={chatbotAvatar}
            alt="Bot"
            className="w-8 h-8 rounded-full"
            width={20}
            height={20}
          />
        )}
        {chatbotSettings.title_is_active && (
          <span className="font-semibold text-black">
            {chatbotSettings?.title_value}
          </span>
        )}
      </div>
      <div className="flex-1 p-4 overflow-y-auto text-black ">
        {chatbotSettings.welcome_message_is_active && (
          <div className="flex justify-start gap-2 mb-2">
            {chatbotAvatar && (
              <Image
                src={chatbotAvatar}
                alt="Bot"
                className="w-8 h-8 rounded-full"
                width={20}
                height={20}
              />
            )}
            <div
              className="bg-gray-200 p-3 rounded-xl max-w-xs text-sm"
              style={{
                backgroundColor: chatbotSettings.message_bg
                  ? chatbotSettings.message_bg
                  : "#c2c2c2",

                color: chatbotSettings.message_color
                  ? chatbotSettings.message_color
                  : "#000000",
              }}
            >
              {chatbotSettings.welcome_message_value}
            </div>
          </div>
        )}
        <div className={`flex mb-2 justify-end`}>
          <div
            className={`p-3 rounded-xl max-w-xs text-sm text-white`}
            style={{
              backgroundColor: chatbotSettings.user_message_bg
                ? chatbotSettings.user_message_bg
                : "135de8",
              color: chatbotSettings.user_message_color ?? "#000000",
            }}
          >
            What Services Do you provide?
          </div>

          <Image
            src="/images/userimg.png"
            alt="User"
            className="w-8 h-8 rounded-full ml-2"
            width={20}
            height={20}
          />
        </div>

        <div className="flex justify-start items-center gap-2 mb-2">
          {chatbotAvatar && (
            <Image
              src={chatbotAvatar}
              alt="Bot"
              className="w-8 h-8 rounded-full"
              width={20}
              height={20}
            />
          )}
          {chatbotSettings.dots_color && (
            <div
              className=" text-black p-1 rounded-xl max-w-xs text-sm animate-pulse"
              style={{
                backgroundColor: chatbotSettings.message_bg ?? "#135de8",
                color: chatbotSettings.message_color ?? "#000000",
              }}
            >
              <span className="flex gap-1 text-3xl">
                <span
                  className="animate-bounce"
                  style={{ color: chatbotSettings.dots_color ?? "#135de8" }}
                >
                  .
                </span>
                <span
                  className="animate-bounce !delay-150"
                  style={{ color: chatbotSettings.dots_color ?? "#135de8" }}
                >
                  .
                </span>
                <span
                  className="animate-bounce !delay-300"
                  style={{ color: chatbotSettings.dots_color ?? "#135de8" }}
                >
                  .
                </span>
              </span>
            </div>
          )}
        </div>
        {chatbotSettings?.lead_collection && (
          <LeadGenForm
            name={chatbotSettings.name_lead_gen}
            contact={chatbotSettings.phone_lead_gen}
            mail={chatbotSettings.mail_lead_gen}
            message={chatbotSettings.message_lead_gen}
            is_name={chatbotSettings.is_name_lead_gen}
            is_phone={chatbotSettings.is_phone_lead_gen}
            is_mail={chatbotSettings.is_mail_lead_gen}
            is_message={chatbotSettings.is_message_lead_gen}
            required_name={chatbotSettings.required_name_lead_gen}
            required_phone={chatbotSettings.required_phone_lead_gen}
            required_mail={chatbotSettings.required_mail_lead_gen}
            required_message={chatbotSettings.required_message_lead_gen}
            submit_button_text={chatbotSettings.submit_text_lead_gen}
            submit_button_color={chatbotSettings.submit_button_color_lead_gen}
            submission_message_heading={
              chatbotSettings.submission_message_heading_lead_gen
            }
            sumbission_message={chatbotSettings.sumbission_message_lead_gen}
          />
        )}

        <div ref={messagesEndRef} />
      </div>
      <div>
        <div className="flex flex-wrap gap-1 m-1 mx-2">
          {chatbotSettings.suggestions_is_active &&
            chatbotSettings.suggestions_value?.split(",").map((item, index) => {
              return (
                <div
                  key={index + "suggestion"}
                  className="bg-gray-300 text-gray-600 w-fit  rounded-md text-sm py-0.5 px-1.5"
                >
                  <p>{item.trim()}</p>
                </div>
              );
            })}
        </div>
        <div className="border-t p-2 flex items-center gap-2">
          <input
            type="text"
            placeholder={
              chatbotSettings.placeholder_is_active
                ? chatbotSettings.placeholder_value
                : "Type a message..."
            }
            className={` w-full p-2 text-sm rounded-md border text-black border-gray-300 bg-gray-50 focus:outline-none`}
          />
          <button
            className="cursor-pointer p-2 rounded text-white"
            style={{
              backgroundColor: chatbotSettings.send_button_color
                ? chatbotSettings.send_button_color
                : "#135de8",
            }}
            type="submit"
          >
                       <IoMdSend/>
           
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotDummy;
