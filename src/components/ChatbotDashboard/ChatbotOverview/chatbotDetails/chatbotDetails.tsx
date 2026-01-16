"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { BiMessageRounded } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import { VscLightbulbSparkle } from "react-icons/vsc";
import { LuAlarmClock } from "react-icons/lu";
import {
  fetchChatMessageTokens,
  fetchChatMessageTokensSummary,
  getChatbotsDocLinks,
  getChatbotsLeads,
} from "@/store/slices/chats/chatSlice";
import { ChatbotsData, ChatMessageTokensToday } from "@/types/chatTypes";
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
      <div className="flex flex-col gap-4 w-full h-full">
        {/* Today's Usage */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/10 hover:bg-white/15 transition-all duration-300 group">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-white tracking-wide">Today's Usage</h3>
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-300 group-hover:bg-indigo-500/30 transition-colors">
              <LuAlarmClock size={20} className="text-current" />
            </div>
          </div>

          <div className="space-y-2">
            {/* Users */}
            <div className="flex justify-between items-center p-3 rounded-lg hover:bg-white/5 transition-colors">
              <span className="text-gray-300 font-medium">Active Users</span>
              <span className="text-xl font-bold text-white">
                {tokensConsumedSummary?.today?.users || 0}
              </span>
            </div>

            {/* Tokens */}
            <div className="space-y-2">
              <div className="flex justify-between items-center p-3 rounded-lg hover:bg-white/5 transition-colors">
                <span className="text-gray-300 font-medium">
                  {/* Request Tokens */}
                  Request Messages
                </span>
                <span className="text-xl font-semibold text-white">
                  {/* {tokensConsumedSummary?.today?.request_tokens || 0} */}
                  {tokensConsumedSummary?.today?.request_messages || 0}
                </span>
              </div>

              <div className="flex justify-between items-center p-3 rounded-lg hover:bg-white/5 transition-colors">
                <span className="text-gray-300 font-medium">
                  {/* Response Tokens */}
                  Response Messages
                </span>
                <span className="text-xl font-semibold text-white">
                  {/* {tokensConsumedSummary?.today?.response_tokens || 0} */}
                  {tokensConsumedSummary?.today?.response_messages || 0}
                </span>
              </div>

              <div className="pt-3 border-t border-white/10 mt-2">
                <div className="flex justify-between items-center px-3">
                  <span className="text-gray-200 font-semibold tracking-wide">
                    Total Consumption
                  </span>
                  <span className="text-2xl font-bold text-indigo-300 drop-shadow-sm">
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

        {/* Leads Card */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/10 hover:bg-white/15 transition-all duration-300 group">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-md font-semibold text-white tracking-wide">Leads</h3>
            <div className="p-2 rounded-xl bg-blue-500/20 text-blue-300 group-hover:bg-blue-500/30 transition-colors">
              <IoPersonSharp size={20} className="text-current" />
            </div>
          </div>
          <div className="flex items-center justify-between p-2">
            <span className="text-gray-300 font-medium">Generated</span>
            <span className="text-2xl font-bold text-blue-300 drop-shadow-sm">
              {chatbotLeads || 0}
            </span>
          </div>
        </div>

        {/* Trained Card */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/10 hover:bg-white/15 transition-all duration-300 group">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-md font-semibold text-white tracking-wide">
              Knowledge Base
            </h3>
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 group-hover:bg-emerald-500/30 transition-colors">
              <VscLightbulbSparkle size={20} className="text-current" />
            </div>
          </div>
          <div className="flex items-center justify-between p-2">
            <span className="text-gray-300 font-medium">Characters used</span>
            {allowed_total_chars && (
              <div>
                <span className="text-2xl font-bold text-emerald-300 drop-shadow-sm">
                  {formatLargeNumber(user_total_chars ?? 0) ?? 0}
                </span>
                <span className="font-bold text-emerald-400/70 text-sm ml-2">
                  {" "}
                  /{" "}
                  {allowed_total_chars
                    ? formatLargeNumber(allowed_total_chars)
                    : 0}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotDetails;
