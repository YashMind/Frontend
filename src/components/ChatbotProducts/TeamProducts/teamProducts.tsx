import React from 'react'

const TeamProducts = () => {
  return (
    <div className="team p-6 md:p-10 text-white bg-[#2B245D] rounded-lg space-y-6">
            <h2 className="font-semibold text-[21px]">Team</h2>
            <div className="flex gap-2  my-[30]">
              {" "}
              <h2 className="text-lg font-semibold ">Team Name :</h2>{" "}
              <p className="bg-[#171821] text-white text-sm font-light px-4 rounded-[12px] flex justify-center">
                abcd@123
              </p>
            </div>
            <h2 className="text-sm font-normal mb-[8]">Team Members</h2>
            <p className="text-xs font-light">
              View and manage your archived chats.
            </p>
            <div className="w-[422px] mt-[8px]">
              <input
                type="text"
                placeholder="Alina (Admin)"
                className="bg-[#171821] placeholder-[#42E8E0] text-xs font-medium py-[21] px-[13] rounded-[11px] w-full"
                id=""
              ></input>
              <input
                type="text"
                placeholder="John Doe (Member)"
                className="bg-[#171821] my-[8px] placeholder-[#D2D2D2] text-xs font-medium py-[21] px-[13] rounded-[11px] w-full"
                id=""
              ></input>
              <input
                type="text"
                placeholder="Smith (Member)"
                className="bg-[#171821] placeholder-[#D2D2D2] text-xs font-medium py-[21] px-[13] rounded-[11px] w-full"
                id=""
              ></input>
            </div>
            <h2 className="text-lg font-medium mt-[30px] mb-[8px]">
              Recent Activity
            </h2>
            <a
              href=""
              className="bg-[#01BEED] text-white px-4 py-2 rounded-[12px]"
            >
              Export Data
            </a>
          </div>
  )
}

export default TeamProducts
