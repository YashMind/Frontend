"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchChatMessageTokens,
  getChatbots,
} from "@/store/slices/chats/chatSlice";
import { ChatbotsData } from "@/types/chatTypes";
import { formatDate, formatTime } from "../utils/formatDateTime";
import { FaShareAlt, FaUserCircle } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import AddCreditModal from "./RealTimeCount/addCreditModal";
import { useTimezone } from "@/context/TimeZoneContext";

interface ChatbotDashboardProps {
  showModal: () => void;
}

const ChatbotDashboard = ({ showModal }: ChatbotDashboardProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { timezone, isLoading } = useTimezone();
  const chatbots: ChatbotsData[] = useSelector(
    (state: RootState) => state.chat.chatbots
  );

  const [showCreditModal, setShowCreditModal] = useState<boolean>(false);
  const tokensData = useSelector((state: RootState) => state.chat.tokens);

  useEffect(() => {
    dispatch(fetchChatMessageTokens());
  }, [dispatch]);

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-[#2a2561] to-[#1a1541] py-2 sm:py-6 rounded-2xl sm:rounded-3xl w-full px-2 sm:px-6">
        {/* Header stats section - Small boxes */}
        <div className="flex flex-col sm:flex-row gap-3 w-full mb-4 sm:mb-6">

          {/* First card - Message Consumption */}
          {tokensData?.token_usage?.[0] && (
            <div className="bg-gradient-to-br from-white to-gray-50 p-3 sm:p-4 rounded-xl shadow flex-1 min-w-0">
              <div className="flex justify-between items-center mb-2">
                <div className="flex-1 min-w-0">
                  <p className="text-gray-600 text-xs font-medium truncate">
                    All Bots Messages
                  </p>
                  <p className="text-lg font-bold text-[#501794] mt-0.5 truncate">
                    {tokensData.token_usage[0].combined_message_consumption?.toLocaleString() ||
                      0}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#501794] to-[#3a0f6b] flex items-center justify-center ml-2 flex-shrink-0">
                  <span className="text-white text-xs font-bold">
                    {(
                      (tokensData.token_usage[0].combined_token_consumption /
                        tokensData.token_usage[0].token_limit) *
                      100
                    ).toFixed(0)}
                    %
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#501794] to-[#7c3aed] rounded-full transition-all duration-500"
                  style={{
                    width: `${
                      (tokensData.token_usage[0].combined_token_consumption /
                        tokensData.token_usage[0].token_limit) *
                      100
                    }%`,
                  }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1 truncate">
                {tokensData.token_usage[0].combined_token_consumption?.toLocaleString()}{" "}
                / {tokensData.token_usage[0].token_limit?.toLocaleString()}{" "}
                tokens
              </p>
            </div>
          )}

          {/* Second card - Create New Bot */}
          <div
            className="border border-dashed border-gray-400 hover:border-gray-500 rounded-xl min-w-0 flex-1 cursor-pointer transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-transparent to-white/5 group"
            onClick={showModal}
          >
            <div className="h-full flex flex-col items-center justify-center p-3 sm:p-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl text-white">+</span>
              </div>
              <h3 className="text-sm font-semibold text-white text-center">
                Create New Bot
              </h3>
              <p className="text-gray-300 text-center mt-0.5 text-xs">
                Build AI assistant
              </p>
            </div>
          </div>
        </div>

        {/* Bot List Section - Big cards */}
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
            <h2 className="text-xl font-bold text-white">My Bot List</h2>
            <div className="text-gray-300 text-sm">
              Total: {chatbots?.length || 0} bots
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chatbots?.map((item: any, index: number) => {
              let imgUrl;
              if (item.image) {
                imgUrl = item.image.startsWith("http")
                  ? item.image
                  : `${process.env.NEXT_PUBLIC_BACKEND_URL}${item.image}`;
              } else {
                imgUrl = "/images/bot2.png";
              }

              const token = tokensData?.token_usage?.find(
                (tok) => tok.bot_id == item.id
              );
              const messageCount =
                (token?.user_request_message ?? 0) +
                (token?.user_response_message ?? 0);

              return (
                <Link
                  key={index}
                  href={`/chatbot-dashboard/overview/${item?.id}`}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-blue-200"
                >
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 p-0.5">
                          <div className="w-full h-full rounded-lg bg-white p-1.5">
                            <Image
                              alt="Chatbot avatar"
                              src={imgUrl}
                              width={56}
                              height={56}
                              className="object-cover rounded-lg"
                            />
                          </div>
                        </div>
                        <div
                          className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center ${
                            item.is_shared ? "bg-purple-500" : "bg-green-500"
                          }`}
                        >
                          {item.is_shared ? (
                            <HiUserGroup className="w-3 h-3 text-white" />
                          ) : (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
                          {item?.chatbot_name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-gray-500">
                            {!isLoading
                              ? formatDate(item?.created_at, timezone)
                              : "-"}
                          </span>
                          <span className="text-gray-300">•</span>
                          <span className="text-sm text-gray-500">
                            {!isLoading
                              ? formatTime(item?.created_at, timezone)
                              : "-"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Privacy Badge */}
                    <div
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm ml-2 flex-shrink-0 ${
                        item.is_shared
                          ? "bg-purple-50 text-purple-700 border border-purple-100"
                          : item.public
                          ? "bg-blue-50 text-blue-700 border border-blue-100"
                          : "bg-gray-50 text-gray-700 border border-gray-100"
                      }`}
                    >
                      {item.is_shared ? (
                        <>
                          <HiUserGroup className="w-3.5 h-3.5" />
                          <span className="font-medium">Shared</span>
                        </>
                      ) : item.public ? (
                        <span className="font-medium">Public</span>
                      ) : (
                        <span className="font-medium">Private</span>
                      )}
                    </div>
                  </div>

                  {/* Shared By Section */}
                  {item.is_shared && item.owner_info && (
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                          <FaShareAlt className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-purple-600 font-medium mb-1">
                            Shared with you by
                          </p>
                          <div className="flex items-center gap-2">
                            <FaUserCircle className="w-4 h-4 text-gray-500 flex-shrink-0" />
                            <p className="text-base font-semibold text-gray-900 truncate">
                              {item.owner_info.owner_full_name ||
                                item.owner_info.owner_email?.split("@")[0]}
                            </p>
                          </div>
                          {item.owner_info.owner_email && (
                            <p className="text-sm text-gray-500 truncate mt-0.5">
                              {item.owner_info.owner_email}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Stats Footer */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                          <span className="text-blue-600 text-xl">💬</span>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                            Total Messages
                          </p>
                          <p className="font-bold text-gray-800 text-lg">
                            {messageCount.toLocaleString()}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-gray-500">Owner</p>
                        <div className="flex items-center gap-2 justify-end mt-1">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              item.owner_info?.is_owner
                                ? "bg-green-500"
                                : "bg-purple-500"
                            }`}
                          />
                          <span className="text-base font-medium text-gray-800">
                            {item.owner_info?.is_owner
                              ? "You"
                              : "Shared Access"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-base">→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {showCreditModal && (
        <AddCreditModal onClose={() => setShowCreditModal(false)} />
      )}
    </div>
  );
};

export default ChatbotDashboard;
