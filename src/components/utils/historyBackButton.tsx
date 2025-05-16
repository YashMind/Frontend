"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi"; // Using Feather Icons

const HistoryBackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    // If there's history, go back, otherwise go to home
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleGoBack}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      <FiArrowLeft className="w-4 h-4" />
      Back
    </button>
  );
};

export default HistoryBackButton;
