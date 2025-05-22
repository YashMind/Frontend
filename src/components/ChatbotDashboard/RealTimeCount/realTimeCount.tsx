import React from "react";
import {
  FaComments,
  FaMicrophoneAlt,
  FaRobot,
  FaWallet,
  FaBalanceScale
} from "react-icons/fa";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  stats: { label: string; value: number | string }[];
  progressPercent?: number;
  buttonText?: string;
  onButtonClick?: () => void;
  gradientFrom?: string;
  gradientTo?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  stats,
  progressPercent,
  buttonText,
  onButtonClick,
  gradientFrom = "#443973",
  gradientTo = "#2C1E5A",
}) => (
  <div
    className={`w-64 rounded-xl p-4 text-white shadow-lg`}
    style={{ background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})` }}
  >
    <div className="flex items-center mb-4 justify-between">
      <h2 className="text-center font-semibold text-base mb-2">{title}</h2>
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl">
        {icon}
      </div>
    </div>
    {stats.map(({ label, value }) => (
      <div key={label} className="text-sm mb-1 flex justify-between">
        <span>{label}</span>
        <span className="font-bold">{value}</span>
      </div>
    ))}
    {progressPercent && <><div className="w-full bg-gray-300 rounded-full h-2.5 mb-3 mt-3">
      <div
        className="bg-gradient-to-r from-[#9179F9] to-[#6E50E2] h-2.5 rounded-full"
        style={{ width: `${progressPercent}%` }}
      />
    </div>
      <div className="text-right text-sm font-semibold">{progressPercent}%</div></>}
    {buttonText && (
      <button
        onClick={onButtonClick}
        className="cursor-pointer mt-3 w-full py-2 rounded-lg bg-white text-[#2C1E5A] font-semibold hover:bg-gray-200"
      >
        {buttonText}
      </button>
    )}
  </div>
);

const RealTimeCount = () => {
  return (
    <div className="flex justify-between items-center p-6 gap-8">
      <div className="flex gap-10 p-4 w-full mt-25 justify-center flex-wrap">
        <StatCard
          icon={<FaComments size={20} color="#FFB85C" />}
          title="Chat Bot"
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
          title="Voice Agent"
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
          title="Chat LLM"
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
          title="Wallet Status"
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
    </div>
  );
};

export default RealTimeCount;
