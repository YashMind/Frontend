"use client";
import React, { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import { useForm, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
  conversationMessage,
  createChatsIdToken,
  deleteChatsMessagesToken,
} from "@/store/slices/chats/chatSlice";
import Image from "next/image";
import { VscClearAll } from "react-icons/vsc";
import LeadGenForm from "../ChatbotDashboard/ChatbotOverview/chatbotSection/LeadGenForm";
import { fetchChatbotSettings } from "@/store/slices/chats/appearanceSettings";
import { chatsIdData, TextMessage } from "@/types/chatTypes";
import { pathToImage } from "@/services/utils/helpers";
import ChatMessages from "../utils/MessageRenderer";
import MicrophoneRecorder from "../ChatbotDashboard/ChatbotOverview/chatbotSection/MicrophoneRecorder";
import { isLoggedin } from "@/store/slices/auth/authSlice";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import { UserProfileData } from "@/types/authType";

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
  const hasRun = useRef(false);
  const messagesEndRef: any = useRef(null);
  const dispatch = useDispatch<AppDispatch>();
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const chatIdData: chatsIdData = useSelector(
    (state: RootState) => state.chat.chatIdData
  );
  const chatMessages = useSelector(
    (state: RootState) => state.chat.chatMessages
  );
  const chatbotData = useSelector((state: RootState) => state.chat.chatbotData);
  const chatbotSetting = useSelector(
    (state: RootState) => state.appearance.settings
  );
  const userData: UserProfileData | null = useSelector(
    (state: RootState) => state.auth.loggedInUser
  );


  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<TextMessage>({
    resolver: yupResolver(schema) as Resolver<TextMessage>,
    defaultValues: {
      message: "",
      chat_id: 0,
      bot_id: 0,
    },
  });


  useEffect(() => {
    console.log(chatbotData)
    if (Object.keys(chatbotData).length > 0 && !chatbotData.public) {
      dispatch(isLoggedin()).unwrap().then((res) => {
        // if(res.user.)
      }).catch((err) => {
        toast.error('Unauthorized, Kindly login')
        redirect(`/auth/signin?from=/embed/${botId}`)
      })
    }
  }, [chatbotData])

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    if (botId !== undefined) {
      dispatch(createChatsIdToken({ token: botId }));
    }
  }, [dispatch, botId]);

  useEffect(() => {
    messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
    if (chatIdData.bot_id && chatIdData.id) {
      setValue("chat_id", chatIdData.id);
      setValue("bot_id", chatIdData.bot_id);
    }
  }, [chatMessages, chatIdData.bot_id, chatIdData.id]);


  const onSubmit = (data: TextMessage) => {
    setIsBotTyping(true);
    setIsRecording(false)
    const temp = { ...data }
    reset()
    dispatch(conversationMessage({ payload: temp })).unwrap().then(() => reset()).finally(() => {
      setIsBotTyping(false);
    });
  };


  const handleDeleteChats = () => {
    dispatch(
      deleteChatsMessagesToken({ token: botId, chat_id: chatIdData.id })
    );
  };

  const chatbotImage =
    chatbotSetting && chatbotSetting?.image
      ? pathToImage(chatbotSetting?.image) ?? "/images/face2.webp"
      : "/images/face2.webp";

  useEffect(() => {
    if (chatIdData?.bot_id && !chatbotSetting) {
      dispatch(fetchChatbotSettings(chatIdData?.bot_id));
    }
  }, [chatIdData?.bot_id]);

  return (
    <div
      className="w-full h-screen  rounded-lg shadow-md flex flex-col justify-between "
      style={{ backgroundColor: chatbotSetting?.chat_window_bg ?? "#ffffff" }}
    >
      <div className="p-4 flex items-center gap-2 border-b">
        <Image
          src={chatbotImage}
          alt="Bot"
          className="w-8 h-8 rounded-full"
          width={20}
          height={20}
        />
        <span className="font-semibold text-black">
          {chatbotSetting?.title_is_active
            ? chatbotSetting?.title_value
            : chatbotData?.chatbot_name}
        </span>
      </div>
      <div className="flex-1 p-4 overflow-y-auto text-black">
        {chatMessages && chatMessages.length
          ? chatMessages.map((item, index) => {
            return (
              <div key={index}>
                <div
                  className={`flex mb-2 ${item.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                >
                  {item.sender === "bot" && (<>
                    <Image
                      src={chatbotImage}
                      alt="Bot"
                      className="w-8 h-8 rounded-full mr-2"
                      width={20}
                      height={20}
                    />
                    <ChatMessages message={item.message} chatbotSetting={chatbotSetting} handleGeneratedButtonClick={(query) => setValue('message', query)} /></>
                  )}{" "}
                  {item.sender === "user" && (
                    <>
                      <div
                        className={`p-3 rounded-xl max-w-xs text-sm ${item.sender === "user" ? "text-white" : "text-black"
                          }`}
                        style={{
                          backgroundColor: chatbotSetting?.user_message_bg ?? "blue"
                        }}
                      >
                        {item.message}
                      </div>

                      <Image
                        src="/images/userimg.png"
                        alt="User"
                        className="w-8 h-8 rounded-full ml-2"
                        width={20}
                        height={20}
                      />
                    </>
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
                      submit_button_text={
                        chatbotSetting?.submit_text_lead_gen
                      }
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
          : chatbotSetting?.welcome_message_is_active && (
            <>
              <div className="flex justify-start gap-2 mb-2">
                <Image
                  src={chatbotImage}
                  alt="Bot"
                  className="w-8 h-8 rounded-full"
                  width={20}
                  height={20}
                />
                <div
                  className="bg-gray-200 p-3 rounded-xl max-w-xs text-sm"
                  style={{
                    backgroundColor: chatbotSetting?.message_bg
                      ? chatbotSetting?.message_bg
                      : "#c2c2c2",
                  }}
                >
                  {chatbotSetting?.welcome_message_value}
                </div>
              </div>
            </>
          )}
        {isBotTyping && (
          <div className="flex justify-start items-center gap-2 mb-2">
            <Image
              src={chatbotImage}
              alt="Bot"
              className="w-8 h-8 rounded-full"
              width={20}
              height={20}
            />
            <div
              className="bg-gray-200 text-black p-1 rounded-xl max-w-xs text-sm animate-pulse"
              style={{
                backgroundColor: chatbotSetting?.message_bg ?? "lightslategray",
              }}
            >
              <span className="flex gap-1 text-3xl">
                <span
                  className="animate-bounce"
                  style={{ color: chatbotSetting?.dots_color ?? "#135de8" }}
                >
                  .
                </span>
                <span
                  className="animate-bounce delay-150"
                  style={{ color: chatbotSetting?.dots_color ?? "#135de8" }}
                >
                  .
                </span>
                <span
                  className="animate-bounce delay-300"
                  style={{ color: chatbotSetting?.dots_color ?? "#135de8" }}
                >
                  .
                </span>
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap gap-1 m-1 mx-2">
          {chatbotSetting?.suggestions_is_active &&
            chatbotSetting?.suggestions_value
              ?.split(",")
              .map((item: string, index: number) => {
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
        <div className="border-t p-2 flex items-center gap-2  w-full">
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
              placeholder={
                chatbotSetting?.placeholder_is_active
                  ? chatbotSetting?.placeholder_value
                  : "Type a message..."
              }
              className={`${errors.message ? "border-red-500" : ""} w-full ${chatMessages?.length ? "pl-12" : ""
                } p-2 text-sm rounded-md border text-black border-gray-300 focus:outline-none`}
            />
          </div>
          <MicrophoneRecorder
            setTranscript={(text: string) => setValue("message", text)}
            transcript={watch("message")}
            isRecording={isRecording}
            setIsRecording={setIsRecording}
          />
          <button
            className="p-2 rounded text-white"
            type="submit"
            style={{
              backgroundColor: chatbotSetting?.send_button_color
                ? chatbotSetting?.send_button_color
                : "#05BDFD",
            }}
          >
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
    </div>
  );
};

export default ChatbotEmbedSection;
