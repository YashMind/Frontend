import { useState, useEffect } from "react";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  stats: { label: string; value: number | string }[];
  progressPercent?: any;
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleToggleCard = () => {
    setState((prev) => ({ ...prev, show: !prev.show }));
  };

  const handleCloseCard = () => {
    if (!isMobile) {
      setState({ show: false });
    }
  };

  return (
    <div
      className={`relative w-full md:w-64 lg:w-80 transition-all duration-300 ${isMobile && state.show ? "mb-0.5" : ""}`}
      onMouseLeave={handleCloseCard}
    >
      {/* Primary Card */}
      <div
        className={`w-full rounded-2xl p-4 text-white shadow-xl cursor-pointer transition-all duration-300 border border-white/10 backdrop-blur-md hover:shadow-indigo-500/10 hover:border-white/20 active:scale-[0.98] ${isMobile && state.show ? "hidden" : "bg-gradient-to-br from-white/10 to-white/5"
          }`}
        onClick={handleToggleCard}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 space-y-1">
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">{title}</h2>
            <p className="text-xs text-indigo-400 font-medium">View detailed usage →</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center shadow-inner transition-transform duration-300 hover:rotate-6">
            {icon}
          </div>
        </div>
      </div>

      {/* Expanded State (Glass Overlay) */}
      <div
        className={
          state.show
            ? `bg-[#1a1440]/90 backdrop-blur-2xl shadow-2xl w-full rounded-2xl p-5 transition-all duration-300 ease-out text-white border border-white/20 z-20 ${isMobile ? "relative mt-2" : "absolute top-0 left-0"
            } animate-in fade-in zoom-in-95`
            : `hidden`
        }
      >
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              {icon}
            </div>
            <h2 className="font-bold text-lg tracking-tight">{title}</h2>
          </div>
          <button
            onClick={handleToggleCard}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          {stats.map(({ label, value }) => (
            <div key={label} className="bg-white/5 p-3 rounded-xl border border-white/5 transition-colors hover:bg-white/10">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{label}</span>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {value}
                </span>
              </div>
            </div>
          ))}

          {progressPercent !== undefined && (
            <div className="pt-2 px-1">
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-bold text-gray-400">USAGE PROGRESS</span>
                <span className="text-sm font-black text-indigo-400">{progressPercent}%</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-3 p-0.5 border border-white/10">
                <div
                  className="bg-indigo-500 h-full rounded-full shadow-[0_0_12px_rgba(99,102,241,0.4)] transition-all duration-500 ease-out relative"
                  style={{ width: `${progressPercent}%` }}
                >
                  <div className="absolute top-0 right-0 w-1.5 h-full bg-white/40 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          )}

          {buttonText && (
            <button
              onClick={onButtonClick}
              className="group relative cursor-pointer mt-4 w-full py-3.5 rounded-xl bg-indigo-600 text-white font-black text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-600/20 active:scale-[0.97]"
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
