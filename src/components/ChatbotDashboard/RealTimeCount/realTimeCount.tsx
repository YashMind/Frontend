import Image from "next/image";
import React from "react";

const RealTimeCount = () => {
  return (
    <div className="bg-[#2a2561]  p-4 mb-[20px] mt-[108px] rounded-[300px]">
      <div className="flex items-center justify-between mb-2 gap-5">
        <h2 className="font-semibold text-lg">Real Time Count:</h2>
        <div className="overflow-x-auto w-full">
          <table className="w-full text-sm text-white text-center border border-gray-500">
            <thead className="bg-[#2a2463]">
              <tr>
                <th className="p-2 border border-white text-sm font-extrabold">
                  Tools
                </th>
                <th className="p-2 border border-white text-sm font-extrabold">
                  Chat Bot
                </th>
                <th className="p-2 border border-white text-sm font-extrabold">
                  Voice Agent
                </th>
                <th className="p-2 border border-white text-sm font-extrabold">
                  LLM
                </th>
                <th
                  className="p-2 border border-white text-sm font-extrabold "
                  colSpan={3}
                >
                  <div className="flex justify-between items-center ">
                    <div>
                      {" "}
                      <p>
                        {" "}
                        Main Balance :{" "}
                        <span className="text-[#18B91F] ml-6"> 500$</span>{" "}
                      </p>
                    </div>
                    <div>
                      <Image
                        className=""
                        alt="alt"
                        src="/images/refresh.png"
                        height={12}
                        width={12}
                      />
                    </div>
                  </div>
                </th>
              </tr>
              <tr className="bg-[#2a2463]">
                <th className="p-2 border border-white text-sm font-extrabold">
                  Consumed
                </th>
                <td className="p-2 border border-white font-semibold text-sm">
                  200
                </td>
                <td className="p-2 border border-white font-semibold text-sm">
                  100
                </td>
                <td className="p-2 border border-white font-semibold text-sm">
                  5000
                </td>
                <td className="p-2 border border-white font-semibold text-sm">
                  Total
                </td>
                <td className="p-2 border border-white font-semibold text-sm">
                  Main Bal.
                </td>
                <td className="p-2 border border-white font-semibold text-sm">
                  Add Credit
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-white text-sm font-extrabold">
                  Used Credit
                </td>
                <td className="p-2 border border-white font-semibold text-sm">
                  2
                </td>
                <td className="p-2 border border-white font-semibold text-sm">
                  5
                </td>
                <td className="p-2 border border-white font-semibold text-sm">
                  5
                </td>
                <td className="p-2 border border-white font-semibold text-sm">
                  6
                </td>
                <td className="p-2 border border-white font-semibold text-sm">
                  500
                </td>
                <td className="p-2 border border-white font-semibold text-sm">
                  100
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-semibold text-lg">
          Total Credit consumed: <span className="font-semibold">22</span>
        </p>
      </div>
    </div>
  );
};

export default RealTimeCount;
