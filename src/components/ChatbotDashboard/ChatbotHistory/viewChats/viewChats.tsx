"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { formatDistanceToNow } from "date-fns";

interface ChatUserModalProps {
  show: boolean;
  onHide: () => void;
  currentMesssages: [];
}

const ViewChatModal = ({
  show,
  onHide,
  currentMesssages,
}: ChatUserModalProps) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] bg-opacity-50 flex items-center justify-center z-50 mb-5">
      <div className="bg-white rounded-2xl shadow-xl w-[600px] p-8 relative">
        <button
          onClick={onHide}
          className="absolute top-4 right-4 text-black text-2xl font-bold"
        >
          &times;
        </button>
        <h4 className=" font-bold text-black mb-6">View chats</h4>

        <div className="h-[400px] overflow-y-auto space-y-4 pr-2">
          {currentMesssages &&
            currentMesssages.map((msg: any, idx: number) => {
              const timeAgo = formatDistanceToNow(new Date(msg?.created_at), {
                addSuffix: true,
              });
              return (
                <div
                  key={idx}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <Image
                      src="/images/face2.webp"
                      alt="Bot"
                      className="w-8 h-8 rounded-full mr-2"
                      width={20}
                      height={20}
                    />
                  )}
                <div className="flex flex-col max-w-[70%]">
                  <div
                    className={`px-4 py-2 rounded-xl text-sm ${
                      msg.sender === "user"
                        ? "bg-[#624DE3] text-white rounded-br-none"
                        : "bg-gray-200 text-black rounded-bl-none"
                    }`}
                  >
                    {msg.message}
                  </div>
                  <span className="text-xs text-gray-500 mt-1 ml-1">{timeAgo}</span>
                </div>
                  {msg.sender === "user" && (
                    <Image
                      src="/images/userimg.png"
                      alt="User"
                      className="w-8 h-8 rounded-full ml-2"
                      width={20}
                      height={20}
                    />
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ViewChatModal;
