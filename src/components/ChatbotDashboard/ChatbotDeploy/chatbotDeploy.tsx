import ChatbotHeader from "@/components/chatbot/header/chatbotHeader";
import React from "react";
import Image from "next/image";
import RealTimeCount from "@/components/ChatbotDashboard/RealTimeCount/realTimeCount";
import ChatbotSidebar from "@/components/ChatbotDashboard/ChatbotSidebar/chatbotSidebar";

const ChatbotDeploy = () => {
  return (
    <div className=" bg-gradient-to-r from-[#002B58] to-[#3B0459] ">
      {/* header */}
      <ChatbotHeader noFix={true} addBgColor={true} />
      <div className="min-h-screen bg-gradient-to-br from-[#1a1440] to-[#2a0e61] text-white p-4">
        {/* Real Time Count + Table */}
        <RealTimeCount />

        {/* Owner Section */}
        <div className="flex gap-3 justify-between">
          <div className="bg-[#2a2561]   rounded-[58px] w-full pr-3 flex gap-[35px]">
          <ChatbotSidebar />            
            <div className="w-full">
              <h2 className="text-2xl font-bold my-[30]">Deploy</h2>
              <div className="bg-[#312d63] min-h-screen flex items-center justify-center p-4 rounded-[28px]">
                <div className="w-full max-w-6xl space-y-6">
                  {/* Top Section */}
                  <div className="bg-white rounded-2xl shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    {/* Left */}
                    <div className="space-y-4">
                      <Image
                        className="m-auto mb-4"
                        alt="alt"
                        src="/images/direct-link.png"
                        height={216}
                        width={198}
                      />

                      <div className="text-center md:text-left">
                        <h2 className=" text-black text-2xl font-medium text-center">
                          Direct Link
                        </h2>
                        <p className="font-light text-xs text-black text-center">
                          Share access to your chatbot by using the link below
                          or with the QR code.
                        </p>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          className="w-full bg-[#D9D9D9] text-[#727272] px-4 py-2 rounded-full text-sm placeholder-[#727272]"
                          value="1234kbk@job.com"
                          readOnly
                        />
                        <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
                          <Image
                            className=""
                            alt="alt"
                            src="/images/file.png"
                            height={14}
                            width={16}
                          />
                        </span>
                      </div>
                      <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-6 py-1.5 rounded mt-[15px]">
                        Save
                      </button>
                    </div>

                    {/* Right (QR) */}
                    <div className="flex flex-col items-center justify-center gap-4">
                      <Image
                        className="m-auto mb-4"
                        alt="alt"
                        src="/images/qr.png"
                        height={304}
                        width={304}
                      />
                      <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-6 py-1.5 rounded">
                        Download QR
                      </button>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Display Inside Webpage */}
                    <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
                      <Image
                        className="m-auto mb-4"
                        alt="alt"
                        src="/images/direct-link.png"
                        height={216}
                        width={198}
                      />
                      <div className="text-center">
                        <h2 className=" text-black text-2xl font-medium text-center">
                          Display Inside Webpage
                        </h2>
                        <p className=" font-light text-xs text-black text-center">
                          Add the code below to the header of your Website to
                          display the chatbot on all pages.
                        </p>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          className="w-full bg-[#D9D9D9] text-[#727272] px-4 py-2 rounded-full text-sm placeholder-[#727272]"
                          value="1234kbk@job.com"
                          readOnly
                        />
                        <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
                          <Image
                            className=""
                            alt="alt"
                            src="/images/file.png"
                            height={14}
                            width={16}
                          />
                        </span>
                      </div>
                      <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-6 py-1.5 rounded mt-[15px]">
                        Save
                      </button>
                    </div>

                    {/* Add to a Website */}
                    <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
                      <Image
                        className="m-auto mb-4"
                        alt="alt"
                        src="/images/image-3.png"
                        height={132}
                        width={121}
                      />
                      <div className="text-center">
                        <h2 className=" text-black text-2xl font-medium text-center">
                          Add to a Website
                        </h2>
                        <p className=" font-light text-xs text-black text-center">
                          Display the open chatbot window inside a webpage with
                          an i-frame, ready to use.
                        </p>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          className="w-full bg-[#D9D9D9] text-[#727272] px-4 py-2 rounded-full text-sm placeholder-[#727272]"
                          value="1234kbk@job.com"
                          readOnly
                        />
                        <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
                          <Image
                            className=""
                            alt="alt"
                            src="/images/file.png"
                            height={14}
                            width={16}
                          />
                        </span>
                      </div>
                      <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-6 py-1.5 rounded mt-[15px]d">
                        Save
                      </button>
                    </div>
                  </div>
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

export default ChatbotDeploy;
