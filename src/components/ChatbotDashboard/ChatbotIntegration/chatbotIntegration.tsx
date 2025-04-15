import ChatbotHeader from "@/components/chatbot/header/chatbotHeader";
import React from "react";
import Image from "next/image";

const ChatbotIntegration = () => {
  return (
    <div className=" bg-gradient-to-r from-[#002B58] to-[#3B0459] ">
      {/* header */}
      <ChatbotHeader noFix={true} addBgColor={true} />
      <div className="min-h-screen bg-gradient-to-br from-[#1a1440] to-[#2a0e61] text-white p-4">
        {/* Real Time Count + Table */}
        <div className="bg-[#2a2561]  p-4 mb-[20px] mt-[125px] rounded-[300px]">
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
                            <span className="text-[#18B91F] ml-6">
                              {" "}
                              500$
                            </span>{" "}
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

        {/* Owner Section */}
        <div className="flex gap-3 justify-between">
          <div className="bg-[#2a2561]   rounded-[58px] w-full pr-3 flex gap-[35px]">
            <div className="w-[220px]  bg-black text-white p-4 flex flex-col gap-6  rounded-tl-[58px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[58px]">
              {/* Section: Overview */}
              <div>
                <p className="text-white text-sm flex items-center gap-2 font-light">
                  <Image
                    className="m-auto mb-4"
                    alt="alt"
                    src="/images/dashboard.png"
                    height={20}
                    width={20}
                  />{" "}
                  Overview
                </p>
              </div>

              {/* Section: Activity */}
              <div className="flex flex-col gap-3">
                <p className="text-[#898989] font-normal text-sm">Activity</p>
                <p className="flex  gap-2 text-[#01BEED] text-xs font-light items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  Chat logs
                </p>
                <p className="flex items-center gap-2 text-white text-xs font-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  Leads
                </p>
              </div>

              {/* Section: Training Data */}
              <div className="flex flex-col gap-3">
                <p className="text-[#898989] font-normal text-sm">
                  Training Data
                </p>
                <p className="flex items-center gap-2 text-white text-xs font-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  Data Input
                </p>
                <p className="flex items-center gap-2 text-white text-xs font-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>{" "}
                  Content Upload
                </p>
                <p className="flex items-center gap-2 text-white text-xs font-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>{" "}
                  FAQs
                </p>
              </div>

              {/* Section: Behaviour */}
              <div className="flex flex-col gap-3">
                <p className=" text-[#898989] font-normal text-sm">Behaviour</p>
                <p className="flex items-center gap-2 text-white text-xs font-light">
                  <i className="fas fa-sliders-h"></i> Response Tuning
                </p>
              </div>

              {/* Section: Deployment */}
              <div className="flex flex-col gap-3">
                <p className="text-[#898989] font-normal text-sm">Deployment</p>
                <p className="flex items-center gap-2 text-white text-xs font-light">
                  <i className="fas fa-eye"></i> Visual Setting
                </p>
                <p className="flex items-center gap-2 text-white text-xs font-light">
                  <i className="fas fa-cogs"></i> Launch Setting
                </p>
              </div>

              {/* Section: Advance */}
              <div className="flex flex-col gap-3">
                <p className="text-[#898989] font-normal text-sm">Advance</p>
                <p className="flex items-center gap-2 text-white text-xs font-light">
                  <i className="fas fa-plug"></i> Connect Apps
                </p>
                <p className="flex items-center gap-2 text-white text-xs font-light">
                  <i className="fas fa-cog"></i> Settings Preferences
                </p>
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-2xl font-bold my-[30]">Integration</h2>
              <div className="grid grid-cols-3 md:grid-cols-3 gap-6 w-full  text-center bg-[#9592AE] p-18 rounded-[24px] ">
                {/* Card 1 */}
                <div className="bg-white text-black rounded-2xl pb-[12px] pt-[25px]  px-[47px] shadow-lg relative">
                  <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-[#DF437E] bg-[#D9D9D9] rounded-full h-[58px] w-[58px] flex justify-center items-center">
                    <img className="" src="/images/icon1.png" />
                  </div>
                  <h2 className="pt-[9px] font-medium text-sm">Instagram</h2>
                  <p className="text-xs py-[9px] font-light">
                    Use your chatbot to respond to incoming messages to your
                    Instagram business account.
                  </p>
                  <button className="bg-[#CC39A2] text-white px-4 py-1 rounded-full text-[12px] font-bold">
                    Export All
                  </button>
                </div>

                {/* Card 2 */}
                <div className="bg-white text-black rounded-2xl pb-[12px] pt-[25px]  px-[47px] shadow-lg relative ">
                  <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-[#60D669] bg-[#D9D9D9] rounded-full h-[58px] w-[58px] flex justify-center items-center">
                    <img className="" src="/images/logos_whatsapp-icon.png" />
                  </div>
                  <h2 className="pt-[9px] font-medium text-sm">Whatsapp</h2>
                  <p className="text-xs py-[9px] font-light">
                    Connect your chatbot to a WhatsApp business number for
                    automatic 24/7 responses.
                  </p>
                  <button className="bg-[#60D669] text-white px-4 py-1 rounded-full text-[12px] font-bold">
                    Export All
                  </button>
                </div>

                {/* Card 3 */}
                <div className="bg-white text-black rounded-2xl pb-[12px] pt-[25px]  px-[47px] shadow-lg relative ">
                  <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-[#0073AA] bg-[#D9D9D9] rounded-full h-[58px] w-[58px] flex justify-center items-center">
                    <img className="" src="/images/wordpress.png" />
                  </div>
                  <h2 className="pt-[9px] font-medium text-sm">Wordpress</h2>
                  <p className="text-xs py-[9px] font-light">
                    Connect your bot with Slack workspaces for a seamless
                    integration.
                  </p>
                  <button className="bg-[#0073AA] text-white px-4 py-1 rounded-full text-[12px] font-bold">
                    Export All
                  </button>
                </div>

                {/* Card 4 */}
                <div className="bg-white text-black rounded-2xl pb-[12px] pt-[25px]  px-[47px] shadow-lg relative mt-8 ">
                  <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-[#FF4F00] bg-[#D9D9D9] rounded-full h-[58px] w-[58px] flex justify-center items-center">
                    <img className="" src="/images/logos_zapier.png" />
                  </div>
                  <h2 className="pt-[9px] font-medium text-sm">Zapier</h2>
                  <p className="text-xs py-[9px] font-light">
                    Use AI-powered automation with Zapier AI Actions to create
                    more intelligent workflows.
                  </p>
                  <button className="bg-[#FF4F00] text-white px-4 py-1 rounded-full text-[12px] font-bold">
                    Export All
                  </button>
                </div>

                {/* Card 5 */}
                <div className="bg-white text-black rounded-2xl pb-[12px] pt-[25px]  px-[47px] shadow-lg relative mt-8">
                  <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-[#EBB02E] bg-[#D9D9D9] rounded-full h-[58px] w-[58px] flex justify-center items-center">
                    <img className="" src="/images/devicon_slack.png" />
                  </div>
                  <h2 className="pt-[9px] font-medium text-sm">Slack</h2>
                  <p className="text-xs py-[9px] font-light">
                    Connect your bot with Slack workspaces for a seamless
                    integration.
                  </p>
                  <button className="bg-[#EBB02E] text-white px-4 py-1 rounded-full text-[12px] font-bold">
                    Export All
                  </button>
                </div>

                {/* Card 6 */}
                <div className="bg-white text-black rounded-2xl pb-[12px] pt-[25px]  px-[47px] shadow-lg relative mt-8git add . ">
                  <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-[#466CFF] bg-[#D9D9D9] rounded-full h-[58px] w-[58px] flex justify-center items-center">
                    <img
                      className=""
                      src="/images/facebook-messenger-icon 1.png"
                    />
                  </div>
                  <h2 className="pt-[9px] font-medium text-sm">Messenger</h2>
                  <p className="text-xs py-[9px] font-light">
                    Use your chatbot to automatically reply to your Facebook
                    pages messages or comments.
                  </p>
                  <button className="bg-[#466CFF] text-white px-4 py-1 rounded-full text-[12px] font-bold">
                    Export All
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100px] bg-[#2a2561]  rounded-[58px]">
            <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center m-auto mb-5">
              <Image
                className="m-auto mb-4"
                alt="alt"
                src="/images/face1.png"
                height={68}
                width={58}
              />
            </div>
            <Image
              className="m-auto"
              alt="alt"
              src="/images/face2.png"
              height={68}
              width={58}
            />
            <hr className="bg-[linear-gradient(90deg,#501794_49.49%,#3E70A1_50.51%)] p-[1px] rounded-md my-6"></hr>
            <Image
              className="m-auto"
              alt="alt"
              src="/images/plus.png"
              height={24}
              width={24}
            />
          </div>

          {/* My Bot List */}

          {/* Right Sidebar */}
        </div>
      </div>
    </div>
  );
};

export default ChatbotIntegration;
