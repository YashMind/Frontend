"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { IoPersonSharp } from "react-icons/io5";
import { VscLightbulbSparkle } from "react-icons/vsc";
import { LuAlarmClock } from "react-icons/lu";
import {
  fetchChatMessageTokens,
  fetchChatMessageTokensSummary,
  getChatbotsDocLinks,
  getChatbotsLeads,
} from "@/store/slices/chats/chatSlice";
import { ChatMessageTokensToday } from "@/types/chatTypes";
import { formatLargeNumber } from "@/components/utils/formatLargeNumber";

const ChatbotDetails = ({ botId }: { botId?: number }) => {
  const dispatch = useDispatch<AppDispatch>();
  const tokensData = useSelector((state: RootState) =>
    state.chat.tokens.token_usage?.find((bot) => bot.bot_id == botId)
  );
  const { allowed_total_chars, user_total_chars } = useSelector(
    (state: RootState) => state.chat.ChatbotDocLinksData
  );
  const chatbotLeads = useSelector(
    (state: RootState) => state.chat.chatbotLeadsData.total_count
  );

  const [tokensConsumedSummary, setTokensConsumedSummary] =
    useState<ChatMessageTokensToday>();

  useEffect(() => {
    if (botId) {
      dispatch(fetchChatMessageTokensSummary({ bot_id: botId }))
        .unwrap()
        .then((res) => {
          setTokensConsumedSummary(res);
        });
    }
  }, [dispatch, botId]);

  useEffect(() => {
    dispatch(fetchChatMessageTokens());
    dispatch(getChatbotsDocLinks({ bot_id: botId }));
    dispatch(getChatbotsLeads({ bot_id: botId }));
  }, [dispatch]);

  return (
    <div className="flex-1">
      <div className="flex flex-wrap gap-4 bg-[#FFFFFF80] px-3 py-3 rounded-2xl w-full max-w-4xl">
        <div className="bg-white rounded-2xl p-6 flex-1 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">Today's Usage</h3>
            <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
              <LuAlarmClock size={24} className="text-current" />
            </div>
          </div>

          <div className="space-y-4">
            {/* Users */}
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-medium">Active Users</span>
              <span className="text-xl font-bold text-gray-800">
                {tokensConsumedSummary?.today?.users || 0}
              </span>
            </div>

            {/* Tokens */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium">
                  {/* Request Tokens */}
                  Request Messages
                </span>
                <span className="text-xl font-semibold text-gray-800">
                  {/* {tokensConsumedSummary?.today?.request_tokens || 0} */}
                  {tokensConsumedSummary?.today?.request_messages || 0}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium">
                  {/* Response Tokens */}
                  Response Messages
                </span>
                <span className="text-xl font-semibold text-gray-800">
                  {/* {tokensConsumedSummary?.today?.response_tokens || 0} */}
                  {tokensConsumedSummary?.today?.response_messages || 0}
                </span>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">
                    Total Consumption
                  </span>
                  <span className="text-2xl font-bold text-indigo-700">
                    {/* {(tokensConsumedSummary?.today?.response_tokens || 0) +
                      (tokensConsumedSummary?.today?.request_tokens || 0)} */}
                    {(tokensConsumedSummary?.today?.response_messages || 0) +
                      (tokensConsumedSummary?.today?.request_messages || 0)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 flex-1 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">Monthly's Usage</h3>
            <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
              <LuAlarmClock size={24} className="text-current" />
            </div>
          </div>

          <div className="space-y-4">
            {/* Users */}
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-medium">Active Users</span>
              <span className="text-xl font-bold text-gray-800">
                {tokensConsumedSummary?.monthly?.users || 0}
              </span>
            </div>

            {/* Tokens */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium">
                  {/* Request Tokens */}
                  Request Messages
                </span>
                <span className="text-xl font-semibold text-gray-800">
                  {/* {tokensConsumedSummary?.monthly?.request_tokens || 0} */}
                  {tokensConsumedSummary?.monthly?.request_messages || 0}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium">
                  {/* Response Tokens */}
                  Response Messages
                </span>
                <span className="text-xl font-semibold text-gray-800">
                  {/* {tokensConsumedSummary?.monthly?.response_tokens || 0} */}
                  {tokensConsumedSummary?.monthly?.response_messages || 0}
                </span>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">
                    Total Consumption
                  </span>
                  <span className="text-2xl font-bold text-indigo-700">
                    {/* {(tokensConsumedSummary?.monthly?.response_tokens || 0) +
                      (tokensConsumedSummary?.monthly?.request_tokens || 0)} */}
                    {(tokensConsumedSummary?.monthly?.response_messages || 0) +
                      (tokensConsumedSummary?.monthly?.request_messages || 0)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 w-full max-w-4xl bg-white/50 px-3 py-3 rounded-2xl mt-6 backdrop-blur-sm">
        {/* Leads Card */}
        <div className="bg-white rounded-2xl p-6 flex-1 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Leads</h3>
            <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
              <IoPersonSharp size={24} className="text-current" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500 font-medium">Generated</span>
            <span className="text-2xl font-bold text-indigo-600">
              {chatbotLeads || 0}
            </span>
          </div>
          {/* Optional: Add progress bar or comparison */}
          {/* <div className="mt-4 pt-3 border-t border-gray-100">
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500"
                style={{ width: `${Math.min(100, (chatbotLeads || 0) / 10)}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">10% of monthly target</p>
          </div> */}
        </div>

        {/* Trained Card */}
        <div className="bg-white rounded-2xl p-6 flex-1 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Knowledge Base
            </h3>
            <div className="p-3 rounded-full bg-emerald-100 text-emerald-600">
              <VscLightbulbSparkle size={24} className="text-current" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500 font-medium">Characters used</span>
            {allowed_total_chars && (
              <div>
                <span className="text-2xl font-bold text-emerald-600">
                  {formatLargeNumber(user_total_chars ?? 0) ?? 0}
                </span>
                <span className="font-bold text-emerald-600 text-sm">
                  {" "}
                  /{" "}
                  {allowed_total_chars
                    ? formatLargeNumber(allowed_total_chars)
                    : 0}
                </span>
              </div>
            )}
          </div>
          {/* Optional: Add usage visualization */}
          {/* <div className="mt-4 pt-3 border-t border-gray-100">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Storage used</span>
              <span>{(trainedChars / 1000000).toFixed(1)}MB / 10MB</span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden mt-1">
              <div
                className="h-full bg-emerald-500"
                style={{ width: `${Math.min(100, (trainedChars || 0) / 100000)}%` }}
              ></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ChatbotDetails;
