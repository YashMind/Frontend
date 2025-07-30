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
import { FaExclamationTriangle, FaTimes } from "react-icons/fa";
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
                    {/* All Bots token consumption */}
                    All Bots message consumption
                  </p>
                  <p className="text-right font-semibold  text-[#501794] text-lg">
                    {/* {tokensData.token_usage[0].combined_token_consumption || 0} */}
                    {/* {tokensData.token_usage[0].token_limit || 1} */}
                    {tokensData.token_usage[0].combined_message_consumption ||
                      0}
                  </p>
                </div>

                <div className="w-full bg-gray-600 h-2 rounded-full">
                  <div
                    className="bg-[#501794] h-2 rounded-full "
                    style={{
                      width:
                        (tokensData.token_usage[0].combined_token_consumption /
                          tokensData.token_usage[0].token_limit) *
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

          <LowBalanceReminder
            currentBalance={
              tokensData.credits && tokensData.credits.credit_balance
            }
            threshold={20}
            onAddCredits={() => setShowCreditModal(true)}
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">My Bot List</h2>
          <div className="flex flex-wrap gap-4 bg-[#FFFFFF80]/20 backdrop-blur-3xl p-4 rounded-3xl m-4">
            {chatbots &&
              chatbots?.map((item, index: number) => {
                let imgUrl;

                if (item.image) {
                  if (
                    (item.image as string).startsWith("http") ||
                    (item.image as string).startsWith("https")
                  ) {
                    imgUrl = item.image;
                  } else {
                    imgUrl = process.env.NEXT_PUBLIC_BACKEND_URL + item.image;
                  }
                } else {
                  imgUrl = "/images/bot2.png";
                }

                const token =
                  tokensData &&
                  tokensData.token_usage &&
                  tokensData.token_usage.find((tok) => tok.bot_id == item.id);
                return (
                  <Link
                    key={index}
                    href={`/chatbot-dashboard/overview/${item?.id}`}
                    className="group bg-white rounded-lg p-4 flex-1 sm:flex-0 md:basis-1/4 lg:basis-1/5 shadow-xs hover:shadow-sm transition-all duration-200 border border-gray-100 hover:border-blue-100 min-h-[120px] flex flex-col justify-between"
                  >
                    {/* Compact header row */}
                    <div className="flex justify-between items-start ">
                      <div className="flex items-center gap-2">
                        <div className="relative h-10 w-10 rounded-full bg-blue-50 border border-blue-100 ">
                          <Image
                            alt="Chatbot avatar"
                            src={imgUrl}
                            fill
                            className="object-cover"
                          />
                          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border border-white"></span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400 whitespace-nowrap">
                          {!isLoading
                            ? formatDate(item?.created_at, timezone)
                            : "-"}
                        </div>
                        <div className="text-xs text-gray-400 whitespace-nowrap">
                          {!isLoading
                            ? formatTime(item?.created_at, timezone)
                            : "-"}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-gray-800 font-medium text-lg uppercase line-clamp-1 group-hover:text-blue-600">
                      {item?.chatbot_name}
                    </h3>

                    {/* Compact description (if available) */}
                    {item.description && (
                      <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                        {item.description}
                      </p>
                    )}

                    {/* Compact footer */}
                    <div className="mt-2">
                      <div className="flex justify-between items-center text-xs">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                          <span className="text-gray-500">
                            {/* {((token?.user_request_token ?? 0) + (token?.user_response_token ?? 0)).toLocaleString()} tokens */}
                            {(
                              (token?.user_request_message ?? 0) +
                              (token?.user_response_message ?? 0)
                            ).toLocaleString()}{" "}
                            messages
                          </span>
                        </div>
                        <span
                          className={`px-1.5 py-0.5 rounded text-xs ${
                            item.public
                              ? "text-green-700 bg-green-50"
                              : "text-blue-700 bg-blue-50"
                          }`}
                        >
                          {item.public ? "Public" : "Private"}
                        </span>
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

const LowBalanceReminder = ({
  currentBalance,
  threshold = 10,
  onAddCredits = () => {},
}) => {
  const [isVisible, setIsVisible] = useState(true);

  // Check if balance is below threshold
  const isLowBalance = currentBalance < threshold;

  if (!isLowBalance || !isVisible) return null;
  return (
    <div className="relative low-balance-reminder bg-red-50 border-l-4 border-red-500 rounded-lg p-4 ">
      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-red-400 hover:text-red-600 transition-colors"
        aria-label="Dismiss warning"
      >
        <FaTimes />
      </button>

      <div className="flex gap-4  flex-col sm:flex-row justify-between items-start sm:items-center pr-6">
        <div className="flex items-center mb-2 sm:mb-0">
          <FaExclamationTriangle className="text-red-500 text-xl mr-3" />
          <div>
            <h3 className="text-lg font-semibold text-red-800">
              Low Credit Balance
            </h3>
            <p className="text-red-600">
              Only {currentBalance} credits remaining
            </p>
          </div>
        </div>
        {onAddCredits && (
          <button
            onClick={onAddCredits}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Add Credits Now
          </button>
        )}
      </div>
    </div>
  );
};
