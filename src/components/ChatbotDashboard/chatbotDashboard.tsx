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
    dispatch(getChatbots());
    dispatch(fetchChatMessageTokens());
  }, [dispatch]);

  const handleDateString = (dateString: string) => {
    const date = new Date(dateString);
    const updatedDate = date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    return updatedDate;
  };

  return (
    <div className="flex gap-6 ">
      <div className="bg-[#2a2561]  py-2 rounded-[58px] w-[90%] px-10">
        <h2 className="text-2xl font-semibold mb-2">Owner</h2>
        <div className="flex flex-wrap gap-4 bg-[#FFFFFF80] p-4 rounded-3xl m-4">
          {chatbots &&
            chatbots?.map((item, index: number) => {
              return (
                <Link
                  key={index}
                  href={`/chatbot-dashboard/update/${item?.id}`}
                  className="bg-white rounded-2xl p-4 w-full sm:w-[45%] "
                >
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Image
                        alt="alt"
                        src="/images/bot2.png"
                        height={46}
                        width={46}
                      />
                    </div>
                    <span className="font-semibold text-base text-black">
                      {handleDateString(item?.created_at)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-[26px] mt-[10px]">
                    <h2 className="text-black font-semibold text-lg ">
                      {item?.chatbot_name}
                    </h2>
                    <span className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#23c4f2] text-sm cursor-pointer hover:underline">
                      Allocated message
                    </span>
                    <Image
                      alt="alt"
                      src="/images/password.png"
                      height={21}
                      width={16}
                    />
                  </div>
                </Link>
              );
            })}
        </div>

        <h2 className="text-2xl font-semibold mt-4 mb-4">My Bot List</h2>
        <div className="flex gap-4 w-full m-4">
          {/* first div */}
          <div className="bg-[#fff] p-4 rounded-2xl flex-1 ">
            <div className="flex items-center justify-between">
              <p className="mb-2 text-black font-semibold text-lg">
                All Bots token consumption
              </p>
              <p className="text-right font-semibold mt-1 text-[#501794] text-lg">
                {tokensData.total_tokens || 0}/1000
              </p>
            </div>
            <div className="w-full bg-gray-600 h-2 rounded-full">
              <div
                className="bg-[#501794] h-2 rounded-full "
                style={{
                  width: ((tokensData.total_tokens || 0) / 1000) * 100 + "%",
                }}
              />
            </div>
          </div>
          {/* second div */}
          <div
            className="flex items-center justify-center border border-dashed border-gray-400 rounded-2xl flex-1  min-w-[300px] cursor-pointer"
            onClick={() => showModal()}
          >
            <span className="font-semibold text-lg text-white text-center">
              Create New Bot <br></br> +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotDashboard;
