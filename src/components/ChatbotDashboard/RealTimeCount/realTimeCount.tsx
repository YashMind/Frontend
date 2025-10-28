import React, { useEffect, useState } from "react";
import {
  FaComments,
  FaMicrophoneAlt,
  FaRobot,
  FaWallet,
  FaBalanceScale,
  FaExclamationTriangle,
  FaTimes,
} from "react-icons/fa";
import StatCard from "./StatCard";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatMessageTokens } from "@/store/slices/chats/chatSlice";
import { useRouter } from "next/navigation";
import AddCreditModal from "./addCreditModal";

export default function RealTimeCount() {
  const [showCreditModal, setShowCreditModal] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const tokensData = useSelector((state: RootState) => state.chat.tokens);
  useEffect(() => {
    dispatch(fetchChatMessageTokens());
  }, [dispatch]);

  return (
    <div
      className={`mt-[3.5%] flex flex-col md:flex-row gap-2 p-2 w-full justify-center items-stretch transition flex-nowrap duration-150 max-h-[7%] `}
    >
      <StatCard
        icon={<FaComments size={20} color="#FFB85C" />}
        title="Chat Bot Usage"
        stats={[
          {
            // label: "Used Tokens",
            label: "Used Messages",
            value:
              (tokensData.token_usage &&
                tokensData.token_usage.length > 0 &&
                tokensData.token_usage[0]?.combined_message_consumption) ||
              0,
          },
          {
            label: "Used Credits",
            value: tokensData.credits?.credits_consumed_messages || 0,
          },
        ]}
        progressPercent={(
          ((tokensData.credits?.credits_consumed_messages || 0) /
            (tokensData.credits?.credits_purchased || 1)) *
          100
        ).toFixed(0)}
        gradientFrom="#443973"
        gradientTo="#2C1E5A"
      />
      {/* <StatCard
        icon={<FaMicrophoneAlt size={20} color="#6AC0E7" />}
        title="Voice Agent Usage"
        stats={[
          { label: "Used minutes", value: 0 },
          { label: "Used Credits", value: 0 },
        ]}
        progressPercent={0}
        gradientFrom="#443973"
        gradientTo="#2C1E5A"
      />
      <StatCard
        icon={<FaRobot size={20} color="#417ED8" />}
        title="Chat LLM Usage"
        stats={[
          { label: "Used Tokens", value: 0 },
          { label: "Used Credits", value: 0 },
        ]}
        progressPercent={0}
        gradientFrom="#443973"
        gradientTo="#2C1E5A"
      /> */}
      <StatCard
        icon={<FaWallet size={20} color="#417ED8" />}
        title="Wallet Usage"
        stats={[
          {
            label: "Wallet Credits",
            value: tokensData.credits?.credits_purchased || 0,
          },
          {
            label: "Used Credits",
            value: tokensData.credits?.credits_consumed_messages || 0,
          },
        ]}
        progressPercent={(
          ((tokensData.credits?.credits_consumed_messages || 0) /
            (tokensData.credits?.credits_purchased || 1)) *
          100
        ).toFixed(0)}
        gradientFrom="#443973"
        gradientTo="#2C1E5A"
      />
      <StatCard
        icon={<FaBalanceScale size={20} color="#417ED8" />}
        title="Balance"
        stats={[
          {
            label: "Balance Credits",
            value:
              tokensData.credits?.credits_purchased -
              tokensData.credits?.credits_consumed_messages || 0,
          },
        ]}
        buttonText="Add Credit"
        onButtonClick={() => setShowCreditModal(true)}
        gradientFrom="#443973"
        gradientTo="#2C1E5A"
      />
      {showCreditModal && (
        <AddCreditModal onClose={() => setShowCreditModal(false)} />
      )}
    </div>
  );
}
