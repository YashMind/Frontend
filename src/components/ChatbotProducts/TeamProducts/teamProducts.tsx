import React from "react";

const TeamProducts = () => {
  return (
    <div className="team p-4 md:p-10 text-white bg-[#2B245D] rounded-lg space-y-6">
      <h2 className="font-semibold text-[21px]">Team</h2>

      <div className="flex flex-col md:flex-row md:items-center gap-2 my-6">
        <h2 className="text-lg font-semibold">Team Name :</h2>
        <p className="bg-[#171821] text-white text-sm font-light px-4 py-1 rounded-[12px] flex justify-center w-fit">
          abcd@123
        </p>
      </div>

      <h2 className="text-sm font-normal mb-2">Team Members</h2>
      <p className="text-xs font-light">View and manage your archived chats.</p>

      <div className="w-full md:w-[422px] mt-2 space-y-2">
        <input
          type="text"
          placeholder="Alina (Admin)"
          className="bg-[#171821] placeholder-[#42E8E0] text-xs font-medium py-3 px-3 rounded-[11px] w-full"
        />
        <input
          type="text"
          placeholder="John Doe (Member)"
          className="bg-[#171821] placeholder-[#D2D2D2] text-xs font-medium py-3 px-3 rounded-[11px] w-full"
        />
        <input
          type="text"
          placeholder="Smith (Member)"
          className="bg-[#171821] placeholder-[#D2D2D2] text-xs font-medium py-3 px-3 rounded-[11px] w-full"
        />
      </div>

      <h2 className="text-lg font-medium mt-6 mb-2">Recent Activity</h2>

      <a
        href="#"
        className="bg-[#01BEED] text-white px-4 py-2 rounded-[12px] inline-block w-fit"
      >
        Export Data
      </a>
    </div>
  );
};

export default TeamProducts;
