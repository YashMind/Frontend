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
  fetchChatMessageTokensToday,
  getChatbotsDocLinks,
  getChatbotsLeads,
} from "@/store/slices/chats/chatSlice";
import { ChatMessageTokensToday } from "@/types/chatTypes";

const ChatbotDetails = ({ botId }: { botId?: number }) => {
  const dispatch = useDispatch<AppDispatch>();
  const tokensData = useSelector((state: RootState) =>
    state.chat.tokens.token_usage?.find((bot) => bot.bot_id == botId)
  );
  const trainedChars = useSelector(
    (state: RootState) => state.chat.ChatbotDocLinksData.total_chars
  );
  const chatbotLeads = useSelector(
    (state: RootState) => state.chat.chatbotLeadsData.total_count
  );

  const [tokensConsumedToday, setTokensConsumedToday] =
    useState<ChatMessageTokensToday>();

  useEffect(() => {
    if (botId) {
      dispatch(fetchChatMessageTokensToday({ bot_id: botId }))
        .unwrap()
        .then((res) => {
          setTokensConsumedToday(res);
        });
    }
  }, [dispatch, botId]);

  useEffect(() => {
    dispatch(fetchChatMessageTokens());
    dispatch(getChatbotsDocLinks({ bot_id: botId }));
    dispatch(getChatbotsLeads({ bot_id: botId }));
  }, [dispatch]);

  return (
    <div className="w-full ml-20">
      <div className="flex flex-wrap gap-4 w-[650px] bg-[#FFFFFF80] px-4  py-[37px] rounded-[28px] ">
        <div className="bg-white rounded-2xl p-4 w-full sm:w-[48%] ">
          <div className="flex justify-between mb-2">
            <div className="flex items-center space-x-2 justify-between w-full">
              <p className="font-semibold text-base  text-[#000]">
                Today's Users and Token Consumption
              </p>
              <div className="p-2 rounded-full bg-[#161A55]">
                <LuAlarmClock size={30} />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mb-[10px] mt-[10px] gap-4">
            <h2 className="text-black font-semibold text-lg ">
              <span className="text-[#6B6B6B]">Users:</span>{" "}
              {tokensConsumedToday?.users || 0}
            </h2>
            <h2 className="text-black font-semibold text-lg ">
              <span className="text-[#6B6B6B]">Request Tokens:</span>{" "}
              {tokensConsumedToday?.request_tokens || 0}
            </h2>
            <h2 className="text-black font-semibold text-lg ">
              <span className="text-[#6B6B6B]">Response Tokens:</span>{" "}
              {tokensConsumedToday?.response_tokens || 0}
            </h2>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 w-full sm:w-[48%] ">
          <div className="flex justify-between mb-2">
            <div className="flex items-center space-x-2 justify-between w-full">
              <p className="font-semibold text-base  text-[#000]">
                Overall Token Consumption
              </p>
              <div className="p-2 rounded-full bg-[#161A55]">
                <BiMessageRounded size={30} />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mb-[10px] mt-auto gap-4">
            <h2 className="text-black font-semibold text-lg ">
              <span className="text-[#6B6B6B]">Response Tokens:</span>{" "}
              {tokensData?.user_request_token +
                tokensData?.slack_request_tokens +
                tokensData?.whatsapp_request_tokens +
                tokensData?.wordpress_request_tokens +
                tokensData?.zapier_request_tokens || 0}
            </h2>
            <h2 className="text-black font-semibold text-lg ">
              <span className="text-[#6B6B6B]">Request Tokens:</span>{" "}
              {tokensData?.user_response_token +
                tokensData?.slack_response_tokens +
                tokensData?.whatsapp_response_tokens +
                tokensData?.wordpress_response_tokens +
                tokensData?.zapier_response_tokens || 0}
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 w-[650px] bg-[#FFFFFF80] px-4  py-[37px] rounded-[28px] mt-[22px] ">
        <div className="bg-white rounded-2xl p-4 w-full sm:w-[48%] ">
          <div className="flex justify-between mb-2">
            <div className="flex items-center space-x-2 justify-between w-full">
              <p className="font-semibold text-base  text-[#000]">
                Fastbot Leads:{" "}
              </p>
              <div className="p-2 rounded-full bg-[#161A55]">
                <IoPersonSharp size={30} />
              </div>
            </div>
          </div>
          <div className="flex  items-center mb-[10px] mt-[10px] gap-10">
            <h2 className="text-black font-semibold text-lg ">
              <span className="text-[#6B6B6B]">Generated:</span>{" "}
              {chatbotLeads || 0}
            </h2>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 w-full sm:w-[48%] ">
          <div className="flex justify-between mb-2">
            <div className="flex items-center space-x-2 justify-between w-full">
              <p className="font-semibold text-base  text-[#000]">Trained</p>
              <div className="p-2 rounded-full bg-[#161A55]">
                <VscLightbulbSparkle size={30} />
              </div>
            </div>
          </div>
          <div className="flex  items-center mb-[10px] mt-[10px] gap-10">
            <h2 className="text-black font-semibold text-lg ">
              <span className="text-[#6B6B6B]">Character used:</span>{" "}
              {trainedChars || 0}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotDetails;
