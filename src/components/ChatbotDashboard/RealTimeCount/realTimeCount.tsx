import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import {
  FaComments,
  FaMicrophoneAlt,
  FaRobot,
  FaWallet,
  FaBalanceScale
} from "react-icons/fa";
import StatCard from "./StatCard";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatMessageTokens } from "@/store/slices/chats/chatSlice";

const RealTimeCount = () => {
  const dispatch = useDispatch<AppDispatch>();

  const tokensData = useSelector((state: RootState) => state.chat.tokens);
  useEffect(() => {
    // dispatch(getChatbots());
    dispatch(fetchChatMessageTokens());
  }, [dispatch]);
  return (
    <div className={`mt-28 flex gap-2 p-2 w-full justify-center items-stretch transition flex-nowrap duration-150`}>
      <StatCard
        icon={<FaComments size={20} color="#FFB85C" />}
        title="Chat Bot Usage"
        stats={[
          { label: "Total", value: tokensData.credits?.credits_purchased || 1 },
          { label: "Used Credits", value: tokensData.credits?.credits_consumed || 0 },
        ]}
        progressPercent={(((tokensData.credits?.credits_consumed || 0) / (tokensData.credits?.credits_purchased || 1)) * 100).toPrecision(1)}
        gradientFrom="#443973"
        gradientTo="#2C1E5A"
      />
      <StatCard
        icon={<FaMicrophoneAlt size={20} color="#6AC0E7" />}
        title="Voice Agent Usage"
        stats={[
          { label: "Consumed", value: 200 },
          { label: "Used Credits", value: 8 },
        ]}
        progressPercent={20}
        gradientFrom="#443973"
        gradientTo="#2C1E5A"
      />
      <StatCard
        icon={<FaRobot size={20} color="#417ED8" />}
        title="Chat LLM Usage"
        stats={[
          { label: "Consumed", value: 200 },
          { label: "Used Credits", value: 8 },
        ]}
        progressPercent={20}
        gradientFrom="#443973"
        gradientTo="#2C1E5A"
      />
      <StatCard
        icon={<FaWallet size={20} color="#417ED8" />}
        title="Wallet Usage"
        stats={[
          { label: "Wallet Credits", value: 500 },
          { label: "Used Credits", value: 200 },
        ]}
        progressPercent={20}
        gradientFrom="#443973"
        gradientTo="#2C1E5A"
      />
      <StatCard
        icon={<FaBalanceScale size={20} color="#417ED8" />}
        title="Balance"
        stats={[
          { label: "Total", value: tokensData.credits?.credits_purchased || 1 },
          { label: "Used Credits", value: tokensData.credits?.credits_consumed || 0 },
        ]}
        buttonText="Add Credit"
        onButtonClick={() => alert("Add Credit clicked")}
        gradientFrom="#443973"
        gradientTo="#2C1E5A"
      />
    </div>
  );
};

export default RealTimeCount;
