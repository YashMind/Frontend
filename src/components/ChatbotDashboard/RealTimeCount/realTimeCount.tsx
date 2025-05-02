import Image from "next/image";
import React from "react";
import { FaMicrophone } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { TbBrain } from "react-icons/tb";

const RealTimeCount = () => {
  return (
    <div className="flex justify-between items-center p-6 gap-8">
      <div className=" relative flex-1 bg-white rounded-xl min-h-48 h-fit mt-[6.75rem] p-4">
        <div className="absolute p-2 rounded-full bg-[#EC9B43] -top-4 -left-4">
          <BiMessageRoundedDetail className="text-white" size={25} />
        </div>
        <div className="mx-auto text-black flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">Chat Bot</h1>
          <div className="w-[60%] text-lg my-3 space-y-2">
            <div className="flex justify-between">
              <p>Consumed</p>
              <p className="font-semibold">200</p>
            </div>
            <div className="flex justify-between">
              <p>Used credits</p>
              <p className="font-semibold">8</p>
            </div>
            <div className="w-full bg-[#D9D9D9] rounded-full  relative h-4 text-black">
              <div
                className="bg-[#2B255C] rounded-full absolute left-0 h-4"
                style={{ width: (8 / 20) * 100 + "%" }}
              ></div>
              <div className="absolute top-5 text-black right-0 font-semibold">
                {(8 / 20) * 100}%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative flex-1 bg-white rounded-xl min-h-48 h-fit mt-[6.75rem] p-4">
        <div className="absolute p-2 rounded-full bg-[#6AC0E7] -top-4 -left-4">
          <FaMicrophone size={25} className={"text-white"} />
        </div>
        <div className="mx-auto text-black flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">Voice agent</h1>
          <div className="w-[60%] text-lg my-3 space-y-2">
            <div className="flex justify-between">
              <p>Consumed</p>
              <p className="font-semibold">200</p>
            </div>
            <div className="flex justify-between">
              <p>Used credits</p>
              <p className="font-semibold">8</p>
            </div>
            <div className="w-full bg-[#D9D9D9] rounded-full  relative h-4 text-black">
              <div
                className="bg-[#2B255C] rounded-full absolute left-0 h-4"
                style={{ width: (8 / 20) * 100 + "%" }}
              ></div>
              <div className="absolute top-5 text-black right-0 font-semibold">
                {(8 / 20) * 100}%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative flex-1 bg-white rounded-xl min-h-48 h-fit mt-[6.75rem] p-4">
        <div className="absolute p-2 rounded-full bg-[#417ED8] -top-4 -left-4">
          <TbBrain size={25} className={"text-white"} />
        </div>
        <div className="mx-auto text-black flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">Chat LLM</h1>
          <div className="w-[60%] text-lg my-3 space-y-2">
            <div className="flex justify-between">
              <p>Consumed</p>
              <p className="font-semibold">200</p>
            </div>
            <div className="flex justify-between">
              <p>Used credits</p>
              <p className="font-semibold">8</p>
            </div>
            <div className="w-full bg-[#D9D9D9] rounded-full  relative h-4 text-black">
              <div
                className="bg-[#2B255C] rounded-full absolute left-0 h-4"
                style={{ width: (8 / 20) * 100 + "%" }}
              ></div>
              <div className="absolute top-5 text-black right-0 font-semibold">
                {(8 / 20) * 100}%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative flex-1 bg-white rounded-xl min-h-48 h-fit mt-[6.75rem] p-4">
        <div className="absolute p-2 rounded-full bg-[#417ED8] -top-4 -left-4">
          <TbBrain size={25} className={"text-white"} />
        </div>
        <div className="mx-auto text-black flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">Wallet Status</h1>
          <div className="w-[60%] text-lg my-3 space-y-2">
            <div className="flex justify-between">
              <p>Consumed</p>
              <p className="font-semibold">500</p>
            </div>
            <div className="flex justify-between">
              <p>Used credits</p>
              <p className="font-semibold">200</p>
            </div>
            <div className="w-full bg-[#D9D9D9] rounded-full  relative h-4 text-black">
              <div
                className="bg-[#2B255C] rounded-full absolute left-0 h-4"
                style={{ width: (200 / 500) * 100 + "%" }}
              ></div>
              <div className="absolute top-5 text-black right-0 font-semibold">
                {(8 / 20) * 100}%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative flex-1 bg-white rounded-xl min-h-48 h-fit mt-[6.75rem] p-4">
        <div className="absolute p-2 rounded-full bg-[#417ED8] -top-4 -left-4">
          <TbBrain size={25} className={"text-white"} />
        </div>
        <div className="mx-auto h-full text-black flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">Balance</h1>
          <div className="w-[60%] text-lg my-3 space-y-2 ">
            <div className="flex justify-between">
              <p>Balance credits</p>
              <p className="font-semibold">500</p>
            </div>
          </div>
          <button
            type="button"
            className="bg-[#5AB88B] rounded-xl p-2 text-center w-[70%] text-white font-semibold text-2xl cursor-pointer"
          >
            Add Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RealTimeCount;
