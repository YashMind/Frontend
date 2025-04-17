import Image from "next/image";
import React from "react";

const AdminMain = () => {
  return (
    <div>
      {/* Total revenu */}
      <div className="total-revenu mt-[17]">
        <div className="  text-white ">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-[#0B1739] ">
            {/* Total Revenue Card */}
            <div className="col-span-2 p-4 border border-[#343B4F] shadow">
              <h2 className="text-lg font-semibold mb-2">Total revenue</h2>
              <div className="text-3xl font-bold">
                $240.8K{" "}
                <span className="text-green-400 text-sm ml-2">24.8%</span>
              </div>
              <Image
                alt="alt"
                src="/images/img3.png"
                className="w-full"
                height={394}
                width={593}
              />
            </div>

            {/* Right Side Cards */}
            <div className="">
              {/* Total Profit Card */}
              <div className="bg-[#151A2E]  border border-[#343B4F] shadow p-[25]">
                <h2 className="text-lg font-semibold ">Total profit</h2>
                <div className="text-2xl font-bold">
                  $144.6K{" "}
                  <span className="text-green-400 text-sm ml-2">28.5%</span>
                </div>
                <Image
                  alt="alt"
                  className=""
                  src="/images/img4.png"
                  height={123}
                  width={320}
                />

                <div className="text-xs text-gray-400 mt-2">
                  Last 12 months{" "}
                  <span className="text-purple-400 ml-2 cursor-pointer">
                    View report
                  </span>
                </div>
              </div>

              {/* Total Sessions Card */}
              <div className="bg-[#151A2E] rounded-xl shadow-md p-[25]">
                <h2 className="text-lg font-semibold mb-2">Total sessions</h2>
                <div className="text-2xl font-bold">
                  400 <span className="text-green-400 text-sm ml-2">16.9%</span>
                </div>
                <Image
                  alt="alt"
                  className=""
                  src="/images/img1.png"
                  height={171}
                  width={312}
                />
                <div className="text-xs text-green-400 mt-2">
                  ● Live <span className="text-white ml-2">10k visitors</span>
                  <span className="text-purple-400 ml-2 cursor-pointer">
                    View report
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* report overviews */}
      <div className="flex justify-between items-center mb-6 mt-[40px]">
        <h1 className="text-xl font-semibold">Reports overview</h1>
        <div className="flex gap-2">
          <button className="bg-[#13192f] text-white px-3 py-2 text-sm rounded flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 9h10M5 21h14a2 2 0 002-2v-5H3v5a2 2 0 002 2z"
              />
            </svg>
            Select date
          </button>
          <button className="bg-[#13192f] text-white px-3 py-2 text-sm rounded">
            Export data ↓
          </button>
          <button className="bg-[#9d34da] text-white px-3 py-2 text-sm rounded">
            Create report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Alerts Section */}
        <div className="bg-[#13192f] p-6 rounded-xl">
          <h2 className="text-sm text-gray-400 mb-4">
            Alerts (Quota overuse, payment failures)
          </h2>
          <div className="flex justify-center mb-4">
            {/* Circular Chart Placeholder */}
            <svg width="160" height="80" viewBox="0 0 160 80">
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="transparent"
                stroke="#e74c3c"
                strokeWidth="15"
                strokeDasharray="120"
                strokeDashoffset="0"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="transparent"
                stroke="#3498db"
                strokeWidth="15"
                strokeDasharray="60"
                strokeDashoffset="-120"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="transparent"
                stroke="#1abc9c"
                strokeWidth="15"
                strokeDasharray="30"
                strokeDashoffset="-180"
              />
            </svg>
          </div>
          <div className="text-center text-3xl font-semibold">23,648</div>
          <p className="text-center text-sm text-gray-400">Users by device</p>
          <div className="mt-6 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#d946ef] rounded-full"></span>{" "}
                Desktop users
              </span>
              <span>15,624</span>
            </div>
            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#38bdf8] rounded-full"></span>{" "}
                Phone app users
              </span>
              <span>5,546</span>
            </div>
            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#22d3ee] rounded-full"></span>{" "}
                Laptop users
              </span>
              <span>2,478</span>
            </div>
          </div>
        </div>

        {/* Top Active Users Table */}
        <div className="bg-[#13192f] p-6 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm text-gray-400">Top Active Users</h2>
            <button className="text-sm text-white bg-[#0d1224] border border-gray-600 px-2 py-1 rounded">
              Jan 2024
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="text-gray-400 text-left">
                <tr>
                  <th className="py-2">#</th>
                  <th className="py-2">Date</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Total</th>
                </tr>
              </thead>
              <tbody className="text-white divide-y divide-gray-700">
                <tr>
                  <td className="py-2">2</td>
                  <td>Dec 30, 10:06 AM</td>
                  <td>
                    <span className="bg-[#05C16833] text-[#14CA74] px-2 py-1 rounded text-xs">
                      Paid
                    </span>
                  </td>
                  <td>$329.40</td>
                </tr>
                <tr>
                  <td className="py-2">3</td>
                  <td>Dec 29, 2:59 AM</td>
                  <td>
                    <span className="bg-[#FFB01633] text-[#FDB52A] px-2 py-1 rounded text-xs">
                      Pending
                    </span>
                  </td>
                  <td>$117.24</td>
                </tr>
                <tr>
                  <td className="py-2">4</td>
                  <td>Dec 29, 12:54 AM</td>
                  <td>
                    <span className="bg-[#FFB01633] text-[#FDB52A] px-2 py-1 rounded text-xs">
                      Pending
                    </span>
                  </td>
                  <td>$52.16</td>
                </tr>
                <tr>
                  <td className="py-2">5</td>
                  <td>Dec 28, 2:32 PM</td>
                  <td>
                    <span className="bg-[#05C16833] text-[#14CA74] px-2 py-1 rounded text-xs">
                      Paid
                    </span>
                  </td>
                  <td>$350.52</td>
                </tr>
                <tr>
                  <td className="py-2">6</td>
                  <td>Dec 27, 2:20 PM</td>
                  <td>
                    <span className="bg-[#FFB01633] text-[#FDB52A] px-2 py-1 rounded text-xs">
                      Pending
                    </span>
                  </td>
                  <td>$246.78</td>
                </tr>
                <tr>
                  <td className="py-2">7</td>
                  <td>Dec 26, 9:48 AM</td>
                  <td>
                    <span className="bg-[#05C16833] text-[#14CA74] px-2 py-1 rounded text-xs">
                      Paid
                    </span>
                  </td>
                  <td>$64.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* users by country */}
      <div className="bg-[#0B1739] mt-5 text-white p-6 rounded-xl w-full mx-auto">
        <p className="text-base pb-2 text-white">Users by country</p>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 w-full lg:w-1/3">
          <div>
            <div className="flex items-end gap-2">
              <h2 className="text-3xl font-semibold">12.4 K</h2>
              <span className="text-[#14CA74] bg-[#05C16833] bg-opacity-30 px-2 py-0.5 text-sm rounded">
                28.5%
              </span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <p className="text-sm text-gray-400">Total Users</p>
            <button className="text-sm text-gray-400 bg-[#0A1330] p-2 hover:text-white">
              Export ↓
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left List */}
          <div className="w-full lg:w-1/3 space-y-4">
            {[
              { name: "United States", users: 3600, percent: "30%" },
              { name: "United Kingdom", users: 3000, percent: "25%" },
              { name: "Canada", users: 2400, percent: "20%" },
              {
                name: "Australia",
                users: 1800,
                percent: "15%",
                active: true,
              },
              { name: "Spain", users: 1500, percent: "15%" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center my-10"
              >
                <div className="w-30">
                  <p
                    className={`text-sm ${
                      item.active ? "text-cyan-400" : "text-white"
                    }`}
                  >
                    {item.name}
                  </p>
                  <div className="w-full bg-gray-700 h-1 rounded-full mt-1">
                    <div
                      className={`h-1 rounded-full ${
                        item.active ? "bg-cyan-400" : "bg-purple-500"
                      }`}
                      style={{ width: item.percent }}
                    ></div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs">{item.users}</p>
                </div>
                <div className="">
                  <p className="text-xs text-gray-400">{item.percent}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Map */}
          <div className="w-full h-full lg:w-2/3 relative">
            <img
              src="images/graph-image.png"
              alt="World map with highlighted regions"
              className="w-full rounded-lg"
            />
            <div className="absolute top-1/2 left-[60%] transform -translate-x-1/2 -translate-y-1/2 bg-[#1B2040] text-cyan-300 p-4 rounded-lg shadow-xl">
              <p className="text-sm">1.88 K</p>
              <p className="text-xs text-white">Australia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMain;
