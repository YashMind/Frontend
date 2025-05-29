import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import {
  FaComments,
  FaMicrophoneAlt,
  FaRobot,
  FaWallet,
  FaBalanceScale
} from "react-icons/fa";
import StatCard from "./StatCard";

const RealTimeCount = () => {

  return (
    <div className={`mt-28 flex gap-2 p-2 w-full justify-center items-stretch transition flex-nowrap duration-150`}>
      <StatCard
        icon={<FaComments size={20} color="#FFB85C" />}
        title="Chat Bot Usage"
        stats={[
          { label: "Consumed", value: 200 },
          { label: "Used Credits", value: 8 },
        ]}
        progressPercent={20}
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
          { label: "Balance Credits", value: 500 },
          { label: "Used Credits", value: 8 },
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
