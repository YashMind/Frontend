"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { formatDistanceToNow } from "date-fns";
import ChatMessages from "@/components/utils/MessageRenderer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchChatbotSettings } from "@/store/slices/chats/appearanceSettings";
import { useTimezone } from "@/context/TimeZoneContext";
import { formatDateOrTimeAgo } from "@/components/utils/formatDateTime";

interface ChatUserModalProps {
  botId?: number;
  show: boolean;
  onHide: () => void;
  currentMesssages: [];
}

const ViewChatModal = ({
  botId,
  show,
  onHide,
  currentMesssages,
}: ChatUserModalProps) => {
  const { timezone, isLoading } = useTimezone()
  const dispatch = useDispatch<AppDispatch>();
  const chatbotSetting = useSelector(
    (state: RootState) => state.appearance.settings
  );
  useEffect(() => {
    if (botId && !chatbotSetting) {
      dispatch(fetchChatbotSettings(botId));
    }
  }, []);

  return show ? (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] bg-opacity-50 flex items-center justify-center z-50 mb-5">
      <div
        className="rounded-2xl shadow-xl w-[600px] py-8 relative"
        style={{ backgroundColor: chatbotSetting?.chat_window_bg ?? "#ffffff" }}
      >
        <div className="px-8">
          <button
            onClick={onHide}
            className="absolute top-4 right-4 text-black text-2xl font-bold"
          >
            &times;
          </button>
          <h4 className=" font-bold text-black mb-6">View chats</h4>
        </div>
        <div className="h-[400px] overflow-y-auto space-y-4 pr-2 px-8">
          {currentMesssages &&
            currentMesssages.map((msg: any, idx: number) => {
              const timeAgo = formatDateOrTimeAgo(msg?.created_at, timezone, 10);
              return (
                <div
                  key={idx}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                >
                  {msg.sender === "bot" && (
                    <>
                      <Image
                        src="/images/face2.webp"
                        alt="Bot"
                        className="w-8 h-8 rounded-full mr-2"
                        width={20}
                        height={20}
                      />
                      <ChatMessages
                        message={msg.message}
                        chatbotSetting={chatbotSetting}
                        handleGeneratedButtonClick={() => { }}
                      />
                    </>
                  )}
                  {msg.sender === "user" && (
                    <>
                      <div className="flex flex-col max-w-[70%]">
                        <div
                          className={`p-3 rounded-xl max-w-xs text-sm `}
                          style={{
                            backgroundColor:
                              chatbotSetting?.user_message_bg ?? "blue",
                            color:
                              chatbotSetting?.user_message_color ?? "black",
                          }}
                        >
                          {msg.message}
                        </div>
                        <span className="text-xs text-gray-500 mt-1 ml-1">
                          {timeAgo}
                        </span>
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
              );
            })}
        </div>
      </div>
    </div>
  ) : null;
};

export default ViewChatModal;
