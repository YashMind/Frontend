"use client";
import React, { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import { useForm, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
  conversationMessage,
  createChatsId,
  createChatsIdToken,
  deleteChatsMessagesToken,
} from "@/store/slices/chats/chatSlice";
import Image from "next/image";
import { VscClearAll } from "react-icons/vsc";
import LeadGenForm from "../ChatbotDashboard/ChatbotOverview/chatbotSection/LeadGenForm";
import { fetchChatbotSettings } from "@/store/slices/chats/appearanceSettings";

const schema = yup.object().shape({
  message: yup.string().required("Message is required"),
  chat_id: yup.number(),
  bot_id: yup.number(),
});
const ChatbotEmbedSection = ({
  botId,
  domainUrl,
}: {
  botId?: string;
  domainUrl?: string;
}) => {
  const [isBotTyping, setIsBotTyping] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<TextMessage>({
    resolver: yupResolver(schema) as Resolver<TextMessage>,
    defaultValues: {
      message: "",
      chat_id: 0,
      bot_id: 0,
    },
  });

  const dispatch = useDispatch<AppDispatch>();
  const chatIdData: chatsIdData = useSelector(
    (state: RootState) => state.chat.chatIdData
  );
  const chatMessages = useSelector(
    (state: RootState) => state.chat.chatMessages
  );

  const chatbotData = useSelector((state: RootState) => state.chat.chatbotData);
  const onSubmit = (data: TextMessage) => {
    setIsBotTyping(true);
    dispatch(conversationMessage({ payload: data })).finally(() => {
      setIsBotTyping(false);
      reset();
    });
  };

  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    if (botId !== undefined) {
      dispatch(createChatsIdToken({ token: botId }));
    }
  }, [dispatch, botId]);

  const messagesEndRef: any = useRef(null);

  useEffect(() => {
    messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
    if (chatIdData.bot_id && chatIdData.id) {
      setValue("chat_id", chatIdData.id);
      setValue("bot_id", chatIdData.bot_id);
    }
  }, [chatMessages, chatIdData.bot_id, chatIdData.id]);

  const handleDeleteChats = () => {
    dispatch(
      deleteChatsMessagesToken({ token: botId, chat_id: chatIdData.id })
    );
  };

  const chatbotSetting = useSelector(
    (state: RootState) => state.appearance.settings
  );

  useEffect(() => {
    if (chatIdData?.bot_id && !chatbotSetting) {
      dispatch(fetchChatbotSettings(chatIdData?.bot_id));
    }
  }, [chatIdData?.bot_id]);

  return (
    <div className="w-full bg-white  h-[650px] rounded-lg shadow-md flex flex-col justify-between ">
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
      <div className="flex-1 p-4 overflow-y-auto text-black bg-gray-50">
        {chatMessages && chatMessages.length ? (
          chatMessages.map((item, index) => {
            return (
              <div key={index}>
                <div
                  className={`flex mb-2 ${
                    item.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {item.sender === "bot" && (
                    <Image
                      src="/images/face2.webp"
                      alt="Bot"
                      className="w-8 h-8 rounded-full mr-2"
                      width={20}
                      height={20}
                    />
                  )}
                  <div
                    className={`p-3 rounded-xl max-w-xs text-sm ${
                      item.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    {item.message}
                  </div>
                  {item.sender === "user" && (
                    <Image
                      src="/images/userimg.png"
                      alt="User"
                      className="w-8 h-8 rounded-full ml-2"
                      width={20}
                      height={20}
                    />
                  )}
                </div>

                {item.sender === "bot" &&
                  chatbotSetting?.lead_collection &&
                  index <= 2 && (
                    <LeadGenForm
                      bot_id={chatIdData?.bot_id}
                      chat_id={chatIdData?.id}
                      is_name={chatbotSetting?.is_name_lead_gen}
                      is_phone={chatbotSetting?.is_phone_lead_gen}
                      is_mail={chatbotSetting?.is_mail_lead_gen}
                      is_message={chatbotSetting?.is_message_lead_gen}
                      required_name={chatbotSetting?.required_name_lead_gen}
                      required_phone={chatbotSetting?.required_phone_lead_gen}
                      required_mail={chatbotSetting?.required_mail_lead_gen}
                      required_message={
                        chatbotSetting?.required_message_lead_gen
                      }
                      submit_button_text={chatbotSetting?.submit_text_lead_gen}
                      submit_button_color={
                        chatbotSetting?.submit_button_color_lead_gen
                      }
                      submission_message_heading={
                        chatbotSetting?.submission_message_heading_lead_gen
                      }
                      sumbission_message={
                        chatbotSetting?.sumbission_message_lead_gen
                      }
                    />
                  )}
              </div>
            );
          })
        ) : (
          <div className="flex justify-start mb-2">
            <div className="bg-gray-200 p-3 rounded-xl max-w-xs text-sm">
              Hi, How can I help you today?
            </div>
          </div>
        )}
        {isBotTyping && (
          <div className="flex justify-start items-center gap-2 mb-2">
            <Image
              src="/images/face2.webp"
              alt="Bot"
              className="w-8 h-8 rounded-full"
              width={20}
              height={20}
            />
            <div className="bg-gray-200 text-black p-1 rounded-xl max-w-xs text-sm animate-pulse">
              <span className="flex gap-1 text-3xl">
                <span className="animate-bounce">.</span>
                <span className="animate-bounce delay-150">.</span>
                <span className="animate-bounce delay-300">.</span>
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border-t p-2 flex items-center gap-2 w-full">
          <div className="relative w-full">
            {chatMessages?.length > 0 ? (
              <VscClearAll
                color="gray"
                size={25}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                onClick={() => handleDeleteChats()}
              />
            ) : null}
            <input
              {...register("message")}
              type="text"
              placeholder="Type a message..."
              className={`${errors.message ? "border-red-500" : ""} w-full ${
                chatMessages?.length ? "pl-12" : ""
              } p-2 text-sm rounded-md border text-black border-gray-300 focus:outline-none`}
            />
          </div>
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

export default ChatbotEmbedSection;
