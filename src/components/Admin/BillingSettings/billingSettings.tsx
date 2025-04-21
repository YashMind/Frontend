import React from "react";
import Image from "next/image";
const BillingSettings = () => {
  return (
    <div>
      <div className="">
        <div className="bg-[#081028] text-white min-h-screen flex gap-[32px]">
          <div className="dashboard-right flex-1 mr-[30px]">
            {/* Next Page Start */}
            <div className=" text-white font-sans space-y-10">
              {/* Billing Settings */}
              <section>
                <h2 className="text-2xl  font-semibold mb-[28px] ">
                  Billing Settings
                </h2>
                <div className="rounded-xl border border-[#343B4F]  shadow-md overflow-x-auto mb-[50px]">
                  <div className="flex justify-between items-center p-[28] border-b border-[#343B4F]">
                    <h3 className="text-white font-medium text-base ">
                      Payment Gateways
                    </h3>
                    <button className="bg-[#18B91F] text-xs font-medium text-white px-[10px] py-[5px]  rounded hover:bg-green-600">
                      Add Payment Gateway
                    </button>
                  </div>
                  <table className="w-full text-left text-sm">
                    <thead className="text-white/70">
                      <tr>
                        <th className="py-[20px] px-[28px]">
                          <input
                            type="checkbox"
                            className="form-checkbox mr-2 accent-purple-500"
                          ></input>
                        </th>
                        <th className="py-[20px] px-[28px]">Name</th>

                        <th className="py-[20px] px-[28px] flex justify-start items-center">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                              />
                            </svg>
                          </span>
                          <span>Last sync</span>
                        </th>
                        <th className="py-[20px] px-[28px]">Status</th>
                        <th className="py-[20px] px-[28px]">API Key:</th>
                        <th className="py-[20px] px-[28px]">Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/90 ">
                      <tr className="border-t border-white/10">
                        <td className="py-[20px] px-[28px]">
                          <input
                            type="checkbox"
                            className="form-checkbox mr-2 accent-purple-500"
                          ></input>
                        </td>
                        <td className="py-[20px] px-[28px]">Stripe</td>
                        <td className="py-[20px] px-[28px] text-[#AEB9E1]">
                          Today 09:42 AM
                        </td>
                        <td className="py-[20px] px-[28px]">
                          <span className="bg-[#18B91F] text-xs font-medium text-[#FBEDED] px-2 py-0.5 rounded-full">
                            Active
                          </span>
                        </td>
                        <td className="py-[20px] px-[28px] text-[#AEB9E1]">
                          {" "}
                          sk_live_******
                        </td>
                        <td className="flex gap-2 py-[20px] px-[28px]">
                          <button className="bg-green-600 text-xs px-2 py-1 rounded">
                            Configure
                          </button>
                          <button className="bg-gray-600 text-xs px-2 py-1 rounded">
                            Switch
                          </button>
                        </td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="py-[20px] px-[28px]">
                          <input
                            type="checkbox"
                            className="form-checkbox mr-2 accent-purple-500 "
                          ></input>
                        </td>
                        <td className="py-[20px] px-[28px] ">Razorpay</td>
                        <td className="py-[20px] px-[28px] text-[#AEB9E1]">
                          Yesterday 03:15 PM
                        </td>
                        <td className="py-[20px] px-[28px]">
                          <span className="text-xs font-medium text-[#FBEDED] px-2 py-0.5 rounded-full bg-[#C38F00]">
                            Trial
                          </span>
                        </td>
                        <td className="py-[20px] px-[28px] text-[#AEB9E1]">
                          rp_test_******
                        </td>
                        <td className="flex gap-2 py-[20px] px-[28px]">
                          <button className="bg-green-600 text-xs px-2 py-1 rounded">
                            Configure
                          </button>
                          <button className="bg-gray-600 text-xs px-2 py-1 rounded">
                            Disable
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Invoice History */}
              <section>
                <h2 className="text-2xl  font-semibold mb-[28]">
                  Invoice History
                </h2>
                <div className="border border-[#343B4F] rounded-xl shadow-md overflow-x-auto">
                  <div className="flex border-b border-[#343B4F] justify-between items-center p-[28]">
                    <h3 className="text-white font-medium text-base ">
                      Payment Gateways
                    </h3>
                    <button className="bg-[#18B91F] text-xs font-medium text-white px-[10px] py-[5px]  rounded hover:bg-green-600">
                      Add Payment Gateway
                    </button>
                  </div>
                  <table className="w-full text-left text-sm">
                    <thead className="text-white/70 ">
                      <tr>
                        <th className=" py-[20px] px-[28px]">
                          <div className="flex gap-1 items-center">
                            {" "}
                            <Image
                              alt="alt"
                              src="/images/user.png"
                              height={10}
                              width={10}
                            />{" "}
                            Invoice #
                          </div>
                        </th>
                        <th className=" py-[20px] px-[28px]">
                          <div className="flex gap-1 items-center">
                            {" "}
                            <Image
                              alt="alt"
                              src="/images/user.png"
                              height={10}
                              width={10}
                            />{" "}
                            Client
                          </div>
                        </th>
                        <th className=" py-[20px] px-[28px]">
                          <div className="flex gap-1 items-center">
                            {" "}
                            <Image
                              alt="alt"
                              src="/images/user.png"
                              height={10}
                              width={10}
                            />{" "}
                            Date
                          </div>
                        </th>
                        <th className=" py-[20px] px-[28px]">
                          <div className="flex gap-1 items-center">
                            {" "}
                            <Image
                              alt="alt"
                              src="/images/user.png"
                              height={10}
                              width={10}
                            />{" "}
                            Amount
                          </div>
                        </th>
                        <th className=" py-[20px] px-[28px]">
                          <div className="flex gap-1 items-center">
                            {" "}
                            <Image
                              alt="alt"
                              src="/images/user.png"
                              height={10}
                              width={10}
                            />{" "}
                            Plan
                          </div>
                        </th>
                        <th className=" py-[20px] px-[28px]">
                          <div className="flex gap-1 items-center">
                            {" "}
                            <Image
                              alt="alt"
                              src="/images/user.png"
                              height={10}
                              width={10}
                            />{" "}
                            Status
                          </div>
                        </th>
                        <th className=" py-[20px] px-[28px]">
                          <div className="flex gap-1 items-center">
                            {" "}
                            <Image
                              alt="alt"
                              src="/images/user.png"
                              height={10}
                              width={10}
                            />{" "}
                            Action
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-white/90">
                      <tr className="border-t border-white/10">
                        <td className="py-[20px] px-[28px] ">INV-2023-056</td>
                        <td className=" py-[20px] px-[28px] text-[#AEB9E1]">
                          Acme Corp
                        </td>
                        <td className=" py-[20px] px-[28px] text-[#AEB9E1]">
                          May 15, 20..
                        </td>
                        <td className="py-[20px] px-[28px] text-[#AEB9E1] ">
                          $12,500.00
                        </td>
                        <td className="  py-[20px] px-[28px] text-[#AEB9E1]">
                          Enterprise
                        </td>
                        <td className=" py-[20px] px-[28px] text-[#AEB9E1]">
                          <span className="bg-[#18B91F] text-xs text-white px-2 py-0.5 rounded-full">
                            Paid
                          </span>
                        </td>
                        <td>
                          <div className="flex gap-2 py-[20px] px-[28px]">
                            <Image
                              alt="alt"
                              src="/images/download.png"
                              height={16}
                              width={16}
                            />

                            <Image
                              alt="alt"
                              src="/images/tabler_send.png"
                              height={16}
                              width={16}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="border-t border-white/10 ">
                        <td className=" py-[20px] px-[28px]">INV-2023-042</td>
                        <td className="py-[20px] px-[28px] text-[#AEB9E1]">
                          Globex Inc
                        </td>
                        <td className="py-[20px] px-[28px] text-[#AEB9E1]">
                          Apr 28, 20..
                        </td>
                        <td className="py-[20px] px-[28px] text-[#AEB9E1]">
                          $8,200.00
                        </td>
                        <td className="py-[20px] px-[28px] text-[#AEB9E1]">
                          Pro
                        </td>
                        <td className="py-[20px] px-[28px] text-[#AEB9E1]">
                          <span className="bg-yellow-500 text-xs text-white px-2 py-0.5 rounded-full">
                            Overdue
                          </span>
                        </td>
                        <td>
                          <div className="flex gap-2 py-[20px] px-[28px]">
                            <Image
                              alt="alt"
                              src="/images/download.png"
                              height={16}
                              width={16}
                            />

                            <Image
                              alt="alt"
                              src="/images/tabler_send.png"
                              height={16}
                              width={16}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Tax Configuration */}
              <section>
                <h2 className="text-2xl  font-semibold mb-[28]">
                  Tax Configuration
                </h2>
                <div className=" text-white rounded-[12px] grid grid-cols-1 md:grid-cols-2 gap-6 border-[#343B4F] border py-[35px] px-[22px] shadow-[1px_1px_1px_0px_rgba(16,25,52,0.4)]">
                  {/* Tax Section */}
                  <div className="px-[13px] py-[34px] border border-[#343B4F] rounded-[12px] bg-[#0A1330] shadow-[1px_1px_1px_0px_rgba(16,25,52,0.4)]">
                    <div>
                      <label className="block text-base font-medium text-white mb-[10px]">
                        Tax Jurisdiction
                      </label>
                      <select className="w-[247px] bg-white text-[#716B6B] px-[12] py-[8px] rounded-[5px] mb-[21px]  outline-0">
                        <option>India</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-base font-medium text-white mb-[10px]">
                        Tax Identification Number
                      </label>
                      <input
                        type="text"
                        defaultValue="22ABCDE1234F1Z5"
                        className="w-[247px] bg-white text-[#716B6B] px-[12] py-[8px] rounded-[5px] mb-[21px] outline-0"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center bg-[#081028] px-2">
                        <label className="block text-base font-medium text-white mb-[10px]">
                          Tax Rates
                        </label>

                        <Image
                          alt="alt"
                          src="/images/remove.png"
                          height={19}
                          width={19}
                        />
                      </div>
                      <div className="">
                        <input
                          type="text"
                          value="GST"
                          readOnly
                          className="w-[247px] bg-white text-[#716B6B] px-[12] py-[8px] rounded-[5px] mb-[21px] outline-0"
                        />
                        <br></br>
                        <input
                          type="text"
                          value="18"
                          readOnly
                          className="w-[247px] bg-white text-[#716B6B] px-[12] py-[8px] rounded-[5px] mb-[21px] outline-0"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Invoice Preview */}
                  <div className="px-[13px] py-[34px] border border-[#343B4F] rounded-[12px] bg-[#0A1330] shadow-[1px_1px_1px_0px_rgba(16,25,52,0.4)]">
                    <h3 className="text-base font-medium ">Invoice Preview</h3>
                    <div className="flex justify-between font-normal text-sm my-[16px]">
                      <span>Enterprise Plan Subscription</span>
                      <span>$12,500.00</span>
                    </div>
                    <div className="flex justify-between text-sm mb-[16px]">
                      <span>API Overage (50,000 tokens)</span>
                      <span>$250.00</span>
                    </div>
                    <div className="flex justify-between text-sm mb-[16px]">
                      <span>GST (18%)</span>
                      <span>$2,295.00</span>
                    </div>
                    <div className=" mt-[41px] flex justify-between text-sm mb-[16px]">
                      <span>Total Due</span>
                      <span>$15,045.00</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* billing-alerts */}
              <section>
                <h2 className="text-2xl  font-semibold mb-[28]"></h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4  bg-[#0B1120] text-white border-[#343B4F] border py-[35px] px-[22px] shadow-[1px_1px_1px_0px_rgba(16,25,52,0.4)] rounded-[12px] ">
                  {/* Failed Payment Notifications */}
                  <div className="px-[13px] py-[34px] border border-[#343B4F] rounded-[12px] bg-[#0A1330] shadow-[1px_1px_1px_0px_rgba(16,25,52,0.4)]">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-base ">
                        Failed Payment Notifications
                      </h3>
                      <div className="relative inline-block w-10 align-middle ">
                        <input
                          type="checkbox"
                          id="toggle1"
                          className="sr-only peer"
                        />
                        <div className="w-10 h-5 bg-[#AEE5B1] rounded-full peer-checked:bg-green-500 transition duration-300"></div>
                        <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-[#18B91F] rounded-full transition peer-checked:translate-x-5"></div>
                      </div>
                    </div>
                    <div className="bg-[#081028] p-3">
                      <p className="text-sm font-semibold text-white my-3">
                        Receive alerts when client payment methods fail and
                        require action
                      </p>
                      <p className=" text-white text-sm mb-3">
                        Notification Recipients:
                      </p>
                    </div>
                    <div className="bg-[#081028] p-3">
                      <label className="font-semibold text-sm ">
                        Add email address
                      </label>
                      <input
                        type="email"
                        placeholder="Add email address"
                        className="w-full p-2 text-sm bg-[#F0F0F0] border border-gray-600 rounded-md text-[#716B6B] mt-3"
                      />
                    </div>
                  </div>

                  {/* Card Expiry Alerts */}
                  <div className="px-[13px] py-[34px] border border-[#343B4F] rounded-[12px] bg-[#0A1330] shadow-[1px_1px_1px_0px_rgba(16,25,52,0.4)]">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-base ">
                        Card Expiry Alerts
                      </h3>
                      <div className="relative inline-block w-10 align-middle ">
                        <input
                          type="checkbox"
                          id="toggle1"
                          className="sr-only peer"
                        />
                        <div className="w-10 h-5 bg-[#AEE5B1] rounded-full peer-checked:bg-green-500 transition duration-300"></div>
                        <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-[#18B91F] rounded-full transition peer-checked:translate-x-5"></div>
                      </div>
                    </div>
                    <div className="bg-[#081028] p-3">
                      <p className="text-sm font-semibold text-white my-3">
                        Get notified when client payment methods are about to
                        expire
                      </p>
                      <p className=" text-white text-sm mb-3">
                        Notify: 7, 15, and 3 days before expiry
                      </p>
                    </div>
                  </div>

                  {/* Usage Threshold Alerts */}
                  <div className="px-[13px] py-[34px] border border-[#343B4F] rounded-[12px] bg-[#0A1330] shadow-[1px_1px_1px_0px_rgba(16,25,52,0.4)]">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-base ">
                        Usage Threshold Alerts
                      </h3>

                      <div className="relative inline-block w-10 align-middle ">
                        <input
                          type="checkbox"
                          id="toggle3"
                          className="sr-only peer"
                        />

                        <div className="w-10 h-5 bg-gray-600 rounded-full peer-checked:bg-green-500 transition duration-300"></div>
                        <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
                      </div>
                    </div>
                    <div className="bg-[#081028] p-3 mt-[30]">
                      <p className="text-sm font-semibold text-white my-3">
                        Receive notifications when clients approach their usage
                        limits
                      </p>
                      <div className="flex flex-col gap-2 text-sm text-gray-200 mt-2">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="quota"
                            className="accent-blue-500"
                          />
                          80% of quota reached
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="quota"
                            className="accent-blue-500"
                          />
                          100% of quota reached
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingSettings;
