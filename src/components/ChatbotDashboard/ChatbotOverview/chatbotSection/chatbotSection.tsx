"use client";
import React, { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import { useForm, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
  conversationMessage,
  deleteUserChatsMessages,
} from "@/store/slices/chats/chatSlice";
import Image from "next/image";
import { fetchChatbotSettings } from "@/store/slices/chats/appearanceSettings";
import { pathToImage } from "@/services/utils/helpers";
import LeadGenForm from "./LeadGenForm";
import { VscClearAll } from "react-icons/vsc";
import { ChatbotsData, chatsIdData, TextMessage } from "@/types/chatTypes";
import { IoMdSend } from "react-icons/io";
import MicrophoneRecorder from "./MicrophoneRecorder";
import ChatMessages from "@/components/utils/MessageRenderer";
import AutoResizingTextarea from "./AutoResizingTextArea";

const schema = yup.object().shape({
  message: yup.string().required("Message is required"),
  chat_id: yup.number(),
  bot_id: yup.number(),
});

const ChatbotSection = ({
  chatbotData,
  botId,
}: {
  chatbotData: ChatbotsData;
  botId?: number;
}) => {
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [chatbotImage, setChatbotImage] = useState("/images/bot2.png");
  const [optimisticMessages, setOptimisticMessages] = useState<any[]>([]);
  const [pendingMessage, setPendingMessage] = useState<string | null>(null);

  const chatbotSetting = useSelector(
    (state: RootState) => state.appearance.settings
  );

  const {
    register,
    handleSubmit,
    reset,
    setValue,
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

  const dispatch = useDispatch<AppDispatch>();
  const chatIdData: chatsIdData = useSelector(
    (state: RootState) => state.chat.chatIdData
  );
  const chatMessages = useSelector(
    (state: RootState) => state.chat.chatMessages
  );

  // Track the last message count to detect new bot responses
  const lastMessageCountRef = useRef(0);

  // When bot response comes, clear optimistic messages
  useEffect(() => {
    if (chatMessages.length > lastMessageCountRef.current) {
      const newMessages = chatMessages.slice(lastMessageCountRef.current);
      const hasNewBotResponse = newMessages.some((msg) => msg.sender === "bot");

      if (hasNewBotResponse && optimisticMessages.length > 0) {
        // Clear optimistic messages when we get a bot response
        setOptimisticMessages([]);
        setIsBotTyping(false);
        setPendingMessage(null);
      }

      lastMessageCountRef.current = chatMessages.length;
    }
  }, [chatMessages, optimisticMessages]);

  useEffect(() => {
    if (botId) {
      dispatch(fetchChatbotSettings(botId));
    }
    // Initialize message count
    lastMessageCountRef.current = chatMessages.length;
  }, [botId]);

  const onSubmit = (data: TextMessage) => {
    if (!data.message.trim()) return;

    // Store the pending message
    setPendingMessage(data.message);

    // 1. Add user message to optimistic state IMMEDIATELY
    const userMessage = {
      id: `optimistic-${Date.now()}`,
      message: data.message,
      sender: "user" as const,
      timestamp: Date.now(),
    };

    setOptimisticMessages([userMessage]);

    // 2. Clear the input immediately
    reset();

    // 3. Show bot typing indicator IMMEDIATELY
    setIsBotTyping(true);

    // 4. Dispatch the message to Redux/API
    dispatch(conversationMessage({ payload: data }))
      .unwrap()
      .catch((error) => {
        // If error, remove optimistic message and typing
        setOptimisticMessages([]);
        setIsBotTyping(false);
        setPendingMessage(null);
        console.error("Failed to send message:", error);
      });
  };

  const getImageUrl = (imageUrl: string) => {
    if (!imageUrl) return "/images/bot2.png";

    if (typeof imageUrl === "string") {
      if (imageUrl.startsWith("http")) {
        return imageUrl;
      }
      return `${process.env.NEXT_PUBLIC_BACKEND_URL}${imageUrl}`;
    }

    return "/images/bot2.png";
  };

  useEffect(() => {
    if (chatbotSetting) {
      setChatbotImage(getImageUrl(chatbotSetting?.image));
    } else {
      setChatbotImage("/images/bot2.png");
    }
  }, [botId, chatbotSetting]);

  const messagesEndRef: any = useRef(null);

  useEffect(() => {
    messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
    if (chatIdData.bot_id && chatIdData.id) {
      setValue("chat_id", chatIdData.id);
      setValue("bot_id", chatIdData.bot_id);
    }
  }, [chatMessages, optimisticMessages, chatIdData.bot_id, chatIdData.id]);

  const handleDeleteChats = () => {
    dispatch(deleteUserChatsMessages({ chat_id: chatIdData.id }));
    setOptimisticMessages([]);
    setPendingMessage(null);
    setIsBotTyping(false);
  };

  const handleInputValue = (item: string) => {
    setValue("message", item);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  // Combine messages for display - show optimistic messages while waiting for response
  const displayMessages =
    optimisticMessages.length > 0
      ? [...chatMessages, ...optimisticMessages]
      : chatMessages;

  return (

    <div
      className="w-full h-[450px] rounded-2xl shadow-xl flex flex-col justify-between border border-white/10 overflow-hidden bg-white/5 backdrop-blur-md"
      style={{
        backgroundColor: chatbotSetting?.chat_window_bg || "rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="p-4 flex items-center gap-2 border-b border-white/10 bg-white/5">
        <Image
          src={chatbotImage}
          alt="Bot"
          className="w-8 h-8 rounded-full"
          width={20}
          height={20}
        />
        <span className="font-semibold text-white">
          {chatbotSetting?.title_is_active
            ? chatbotSetting?.title_value
            : chatbotData?.chatbot_name}
        </span>
      </div>

      <div className="flex-1 p-4 overflow-y-auto text-white scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        {displayMessages && displayMessages.length
          ? displayMessages.map((item, index) => {
            return (
              <div key={item.id || index}>
                <div
                  className={`flex mb-2 ${item.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                >
                  {item.sender === "bot" && (
                    <>
                      <Image
                        src={chatbotImage}
                        alt="Bot"
                        className="w-8 h-8 rounded-full mr-2"
                        width={20}
                        height={20}
                      />
                      <ChatMessages
                        message={item.message}
                        chatbotSetting={chatbotSetting}
                        handleGeneratedButtonClick={(query) =>
                          setValue("message", query)
                        }
                      />
                    </>
                  )}

                  {item.sender === "user" && (
                    <>
                      <div
                        className={`p-3 rounded-xl max-w-xs text-sm `}
                        style={{
                          backgroundColor:
                            chatbotSetting?.user_message_bg ?? "#4f46e5", // Indigo-600 default
                          color:
                            chatbotSetting?.user_message_color ?? "white",
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
                      bot_id={botId}
                      chat_id={chatIdData?.id}
                      name={chatbotSetting.name_lead_gen}
                      contact={chatbotSetting.phone_lead_gen}
                      mail={chatbotSetting.mail_lead_gen}
                      message={chatbotSetting.message_lead_gen}
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
                  className="p-3 rounded-xl max-w-xs text-sm"
                  style={{
                    backgroundColor: chatbotSetting?.message_bg
                      ? chatbotSetting?.message_bg
                      : "rgba(255, 255, 255, 0.1)",
                    color: chatbotSetting.message_color
                      ? chatbotSetting.message_color
                      : "#ffffff",
                  }}
                >
                  {chatbotSetting?.welcome_message_value}
                </div>
              </div>
            </>
          )}

        {/* Bot typing indicator */}
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
              className="p-1 rounded-xl max-w-xs text-sm animate-pulse"
              style={{
                backgroundColor: chatbotSetting?.message_bg ?? "rgba(255, 255, 255, 0.1)",
                color: chatbotSetting?.message_color ?? "#ffffff",
              }}
            >
              <span className="flex gap-1 text-3xl">
                <span
                  className="animate-bounce"
                  style={{ color: chatbotSetting?.dots_color ?? "#6366f1" }}
                >
                  .
                </span>
                <span
                  className="animate-bounce delay-150"
                  style={{ color: chatbotSetting?.dots_color ?? "#6366f1" }}
                >
                  .
                </span>
                <span
                  className="animate-bounce delay-300"
                  style={{ color: chatbotSetting?.dots_color ?? "#6366f1" }}
                >
                  .
                </span>
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyDown} className="bg-white/5 border-t border-white/10">
        <div className="flex flex-wrap gap-1 m-1 mx-2 pt-2">
          {chatbotSetting?.suggestions_is_active &&
            chatbotSetting?.suggestions_value
              ?.split(",")
              .map((item: string, index: number) => {
                return (
                  <button
                    key={index + "suggestion"}
                    type="button"
                    className="bg-white/10 hover:bg-white/20 text-white w-fit rounded-lg text-sm py-1 cursor-pointer px-2 border border-white/10 transition-all"
                    onClick={() => handleInputValue(item.trim())}
                  >
                    <p>{item.trim()}</p>
                  </button>
                );
              })}
        </div>

        <div className="p-2 flex items-center gap-1">
          <div className="relative w-full">
            {displayMessages?.length > 0 ? (
              <VscClearAll
                color="gray"
                size={25}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer transition-colors"
                onClick={() => handleDeleteChats()}
              />
            ) : null}
            <AutoResizingTextarea
              value={watch("message")}
              register={register}
              onChange={(e) => setValue("message", e.target.value)}
              chatbotSetting={chatbotSetting}
              chatMessages={displayMessages}
              errors={errors}
            />
          </div>
          <MicrophoneRecorder
            setTranscript={(text: string) => setValue("message", text)}
            transcript={watch("message")}
            isRecording={isRecording}
            setIsRecording={setIsRecording}
          />
          <button
            className="cursor-pointer p-2 rounded text-white"
            type="submit"
            disabled={isBotTyping} // Optional: disable send while waiting for response
            style={{
              backgroundColor: chatbotSetting?.send_button_color
                ? chatbotSetting?.send_button_color
                : "#05BDFD",
              opacity: isBotTyping ? 0.6 : 1,
            }}
          >
            <IoMdSend />
          </button>
        </div>
      </form>
    </div >

  );
};

export default ChatbotSection;
