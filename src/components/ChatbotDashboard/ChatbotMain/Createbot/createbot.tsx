"use client";
import React from "react";

interface EditUserModalProps {
  show: boolean;
  onHide: () => void;
}

const CreatebotModal = ({ show, onHide }: EditUserModalProps) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#0E1A47] text-white rounded-2xl p-10 w-[800px] max-w-full shadow-5xl relative">
        <button
          onClick={onHide}
          className="absolute top-4 right-4 text-white text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-1">Edit</h2>
        <p className="text-xs text-gray-300 mb-6">Lorem ipsum dolor</p>

        <div className="grid grid-cols-3 text-sm text-white font-medium pb-3 mb-3 border-gray-600 border-b-2 ">
          <span>Pricing</span>
          <span>Token Limits</span>
          <span>Features</span>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="$0000"
            className="bg-gray-300 text-black px-3 py-2 rounded w-full text-xs"
          />
          <input
            type="text"
            placeholder="12"
            className="bg-white text-black px-3 py-2 rounded w-full text-xs"
          />
          <input
            type="text"
            placeholder="10 tokens"
            className="bg-white text-black px-3 py-2 rounded w-full text-xs"
          />

          {/* Repeat for remaining features */}
          <div></div>
          <div></div>
          <input
            type="text"
            placeholder="Free downloads"
            className="bg-white text-black px-3 py-2 rounded w-full text-xs"
          />
          <div></div>
          <div></div>
          <input
            type="text"
            placeholder="Free downloads"
            className="bg-white text-black px-3 py-2 rounded w-full text-xs"
          />
          <div></div>
          <div></div>
          <input
            type="text"
            placeholder="Free downloads"
            className="bg-white text-black px-3 py-2 rounded w-full text-xs"
          />
          <div></div>
          <div></div>
          <input
            type="text"
            placeholder="Free downloads"
            className="bg-white text-black px-3 py-2 rounded w-full text-xs"
          />
          <div></div>
          <div></div>
          <input
            type="text"
            placeholder="Free downloads"
            className="bg-white text-black px-3 py-2 rounded w-full text-xs"
          />
          <div></div>
          <div></div>
          <input
            type="text"
            placeholder="Free downloads"
            className="bg-white text-black px-3 py-2 rounded w-full text-xs"
          />
        </div>

        <hr className="border-gray-600 my-6" />

        <div className="flex justify-start gap-4">
          <button
            onClick={onHide}
            className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
          >
            Exit
          </button>
          <button className="bg-[#18B91F] px-6 py-2 rounded text-white hover:bg-green-600 transition">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatebotModal;