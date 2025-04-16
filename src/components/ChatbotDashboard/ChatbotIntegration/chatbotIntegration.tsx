import ChatbotHeader from "@/components/chatbot/header/chatbotHeader";
import React from "react";
import Image from "next/image";
import RealTimeCount from "@/components/ChatbotDashboard/RealTimeCount/realTimeCount";
import ChatbotSidebar from "@/components/ChatbotDashboard/ChatbotSidebar/chatbotSidebar";

const ChatbotIntegration = () => {
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
