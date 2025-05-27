import { useState } from "react";

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
}) => {

    const [state, setState] = useState<{ show: boolean }>({ show: false });

    const handleCloseCard = () => {
        setState({ show: false });
    }

    return <div className="relative w-full" onMouseLeave={() => handleCloseCard()}>
        <div
            className={`w-full rounded-xl p-2 px-4 text-white shadow-lg`}
            style={{ background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})` }}
            onClick={() => setState(prev => ({ ...prev, show: true }))}
        >
            <div className="flex items-center  justify-between">
                <h2 className="text-center font-semibold text-base ">{title}</h2>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl">
                    {icon}
                </div>
            </div>

        </div>
        <div className={state.show ? `bg-gradient-to-br from-[#1a1440] to-[#2a0e61] shadow-white w-full rounded-xl p-2 px-4 transition duration-200 ease-in-out text-white  absolute top-0 left-0` : `hidden`} style={{ background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})` }}>
            <div className="flex items-center mb-3  justify-between">
                <h2 className="text-center font-semibold text-base ">{title}</h2>
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
        </div></div>
};

export default StatCard;