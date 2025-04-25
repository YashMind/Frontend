import React from "react";

const SettingProducts = () => {
  return (
    <div className="mt-[30px]">
      <h2 className="font-semibold text-[21px]">Settings</h2>
      <p className="text-lg font-medium my-[30px]">General</p>
      <div className="flex flex-wrap gap-[30px] sm:block">
        <div className="w-full sm:w-[422px]">
          <h3 className="font-medium text-sm mb-[8]">Archived Chats</h3>
          <p className="text-xs font-light mb-[8px]">
            View and manage your archived chats.
          </p>
          <input
            type="text"
            placeholder="View Archived Chats"
            className="bg-[#171821] placeholder-[#D2D2D2] text-xs font-medium py-[21px] px-[13] rounded-[11px] w-full"
            id=""
          />
        </div>

        <div className="w-[422px]">
          <h3 className="font-medium text-sm mb-[8]">Archived Chats</h3>
          <p className="text-xs font-light mb-[8px]">
            View and manage your archived chats.
          </p>
          <input
            type="text"
            placeholder="View Archived Chats"
            className="bg-[#171821] placeholder-[#D2D2D2] text-xs font-medium py-[21] px-[13] rounded-[11px] w-full"
            id=""
          />
        </div>
      </div>

      <div className="w-full sm:w-[422px] mt-[30px]">
        <h3 className="font-medium text-sm mb-[8px]">Delete All Chats</h3>
        <p className="text-xs font-light mb-[8px]">
          Permanently delete all your chats. This action cannot be undone.
        </p>
        <input
          type="text"
          placeholder="Delete All Chats"
          className="bg-[#C10000] placeholder-[#D2D2D2] text-xs font-medium py-[21px] px-[13px] rounded-[11px] w-full"
          id=""
        />

        <p className="text-lg font-medium my-[30px]">Data Control</p>
        <div className="w-full sm:w-[422px]">
          <h3 className="font-medium text-sm mb-[8px]">Archived Chats</h3>
          <p className="text-xs font-light mb-[8px]">
            You can control all your data here.
          </p>
          <input
            type="text"
            placeholder="Select Data"
            className="bg-[#171821] placeholder-[#D2D2D2] text-xs font-medium py-[21px] px-[13px] rounded-[11px] w-full"
            id=""
          />
          <div className="mt-[20px]">
            <a
              href=""
              className="bg-[#01BEED] text-white px-4 py-2 rounded-[12px]"
            >
              Export Data
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingProducts;
