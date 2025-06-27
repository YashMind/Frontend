"use client";
import React, { useEffect } from "react";
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
interface ChatbotDashboardProps {
  showModal: () => void;
}
const ChatbotDashboard = ({ showModal }: ChatbotDashboardProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const chatbots: ChatbotsData[] = useSelector(
    (state: RootState) => state.chat.chatbots
  );

  const tokensData = useSelector((state: RootState) => state.chat.tokens);
  const chatbotError = useSelector((state: RootState) => state.chat.error);
  useEffect(() => {
    dispatch(fetchChatMessageTokens());
  }, [dispatch]);

  return (
    <div className="flex gap-6 w-full">
      <div className="bg-[#2a2561]  py-2 rounded-3xl w-full px-6">
        {" "}
        <div className="flex flex-wrap gap-4 w-full my-4">
          {/* first div */}
          {tokensData &&
            tokensData.token_usage &&
            tokensData.token_usage.length > 0 && (
              <div className="bg-[#fff] p-4 rounded-2xl  ">
                <div className="flex gap-4  items-center justify-between">
                  <p className="mb-2 text-black font-semibold text-lg">
                    All Bots token consumption
                  </p>
                  <p className="text-right font-semibold  text-[#501794] text-lg">
                    {tokensData.token_usage[0].combined_token_consumption || 0}
                    {/* {tokensData.token_usage[0].token_limit || 1} */}
                  </p>
                </div>
                <div className="w-full bg-gray-600 h-2 rounded-full">
                  <div
                    className="bg-[#501794] h-2 rounded-full "
                    style={{
                      width:
                        ((tokensData.token_usage[0]
                          .combined_token_consumption) ?? 0 /
                          tokensData.token_usage[0].token_limit ?? 1) *
                        100 +
                        "%",
                    }}
                  />
                </div>
              </div>
            )}
          {/* second div */}
          <div
            className="flex items-center justify-center border border-dashed border-gray-400 rounded-2xl   min-w-[300px] cursor-pointer"
            onClick={() => showModal()}
          >
            <span className="font-semibold text-lg text-white text-center">
              Create New Bot <br></br> +
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">My Bot List</h2>
          <div className="flex flex-wrap gap-4 bg-[#FFFFFF80]/20 backdrop-blur-3xl p-4 rounded-3xl m-4">
            {chatbots &&
              chatbots?.map((item, index: number) => {
                return (
                  <Link
                    key={index}
                    href={`/chatbot-dashboard/overview/${item?.id}`}
                    className="bg-white rounded-xl p-5 flex-1 sm:flex-0 md:basis-1/4 lg:basis-1/5 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-blue-100"
                  >
                    {/* Header with avatar and timestamp */}
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <Image
                            alt="Chatbot avatar"
                            src={
                              item?.image
                                ? process.env.NEXT_PUBLIC_BACKEND_URL +
                                item.image
                                : "/images/bot2.png"
                            }
                            height={56}
                            width={56}
                            className="rounded-full border-2 border-white shadow-sm"
                          />
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end font-light text-right text-xs text-gray-500 space-y-0.5 whitespace-nowrap">
                        <span>{formatDate(item?.created_at)}</span>
                        <span>{formatTime(item?.created_at)}</span>
                      </div>
                    </div>

                    {/* Chatbot name and status */}
                    <div className="mb-1">
                      <h2 className="text-gray-800 font-semibold text-lg line-clamp-1 uppercase">
                        {item?.chatbot_name}
                      </h2>
                    </div>

                    {/* Footer with status and privacy indicator */}
                    <div className="flex justify-between items-center">
                      {/* <div className="flex items-center space-x-1.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${item. ? 'bg-green-400' : 'bg-gray-300'}`}></span>
                      <span className="text-xs text-gray-500">
                        {item.active ? 'Active' : 'Inactive'}
                      </span>
                    </div> */}

                      {!item.public && (
                        <div className="flex items-center space-x-1 bg-blue-50 px-2 py-1 rounded-md">
                          <Image
                            alt="Private"
                            src="/images/password.png"
                            height={16}
                            width={16}
                            className="opacity-70"
                          />
                          <span className="text-xs text-blue-600">Private</span>
                        </div>
                      )}
                    </div>

                    {/* Optional: Add description if available */}
                    {item.description && (
                      <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotDashboard;
