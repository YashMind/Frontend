"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface EditUserModalProps {
  show: boolean;
  onHide: () => void;
}

const CreatebotModal = ({ show, onHide }: EditUserModalProps) => {
  if (!show) return null;
  const router = useRouter();
  const handleCreatebot = () => {
    router.push("/chatbot-dashboard/overview-add")
  }
  return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] bg-opacity-50 flex items-center justify-center z-50 mb-5">
        <div className="bg-white rounded-2xl shadow-xl w-[600px] p-8 relative">
        <button
          onClick={onHide}
          className="absolute top-4 right-4 text-black text-2xl font-bold"
        >
          &times;
        </button>
                <h2 className="text-2xl font-bold text-black mb-6">
                  Create New Bot
                </h2>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Give Your bot a name
                </label>
                <input
                  type="text"
                  placeholder="Enter bot name"
                  className="w-full border text-black border-gray-300 text-xs rounded-md px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <div className="pb-5">
                  <label className="text-sm font-semibold text-gray-700 mb-6">
                    Make your bot public
                  </label>
                </div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <span className="mr-2 text-black text-sm font-semibold">
                      Public
                    </span>
                    {/* Toggle */}
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-11 h-6 bg-[#9F9F9F] rounded-full peer peer-checked:bg-black transition-all duration-300"></div>
                      <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white border border-gray-300 rounded-full transition-all duration-300 peer-checked:translate-x-5"></div>
                    </label>
                  </div>
                </div>

                <div className="flex justify-start gap-4">
                  <button className="bg-[#18B91F] text-white px-6 py-2 rounded-md font-semibold"
                  onClick={()=> handleCreatebot()}>
                    Save
                  </button>
                  <button className="bg-[#9F9F9F] text-white px-6 py-2 rounded-md font-semibold"
                    onClick={onHide}>
                    Close
                  </button>
                </div>
              </div>
        </div>
  );
};

export default CreatebotModal;