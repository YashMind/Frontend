import React, { useState } from "react";
import PhoneDialog from "./whatsappDialog";

const ChatbotIntegration = ({ botId }: { botId?: number }) => {
  const [openWhatsappDialog, setOpenWhatsappDialog] = useState<boolean>();

  const slackUrl = process.env.NEXT_PUBLIC_SLACK_URL;

  return (
    <div className="w-full m-10">
      <h2 className="text-2xl font-bold my-[30]">Integration</h2>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-6 w-full  text-center bg-[#9592AE] p-18 rounded-[24px] ">
        {/* Card 1 */}
        <div className="bg-white text-black rounded-2xl pb-[12px] pt-[25px]  px-[47px] shadow-lg relative">
          <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-[#DF437E] bg-[#D9D9D9] rounded-full h-[58px] w-[58px] flex justify-center items-center">
            <img className="" src="/images/icon1.png" />
          </div>
          <h2 className="pt-[9px] font-medium text-sm">Instagram</h2>
          <p className="text-xs py-[9px] font-light">
            Use your chatbot to respond to incoming messages to your Instagram
            business account.
          </p>
          <button className="cursor-pointer bg-[#CC39A2] text-white px-4 py-1 rounded-full text-[12px] font-bold">
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
            Connect your chatbot to a WhatsApp business number for automatic
            24/7 responses.
          </p>
          <button
            onClick={() => setOpenWhatsappDialog(true)}
            className="cursor-pointer bg-[#60D669] text-white px-4 py-1 rounded-full text-[12px] font-bold"
          >
            Connect Number
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-black rounded-2xl pb-[12px] pt-[25px]  px-[47px] shadow-lg relative ">
          <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-[#0073AA] bg-[#D9D9D9] rounded-full h-[58px] w-[58px] flex justify-center items-center">
            <img className="" src="/images/wordpress.png" />
          </div>
          <h2 className="pt-[9px] font-medium text-sm">Wordpress</h2>
          <p className="text-xs py-[9px] font-light">
            Connect your bot with Slack workspaces for a seamless integration.
          </p>
          <button className="cursor-pointer bg-[#0073AA] text-white px-4 py-1 rounded-full text-[12px] font-bold">
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
            Use AI-powered automation with Zapier AI Actions to create more
            intelligent workflows.
          </p>
          <button className="cursor-pointer bg-[#FF4F00] text-white px-4 py-1 rounded-full text-[12px] font-bold">
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
            Connect your bot with Slack workspaces for a seamless integration.
          </p>
          <a
            href={slackUrl + `bot_id=${botId}`}
            className="cursor-pointer bg-[#EBB02E] text-white px-4 py-1 rounded-full text-[12px] font-bold"
            target="_blank"
          >
            Connect
          </a>
        </div>

        {/* Card 6 */}
        <div className="bg-white text-black rounded-2xl pb-[12px] pt-[25px]  px-[47px] shadow-lg relative mt-8 ">
          <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-[#466CFF] bg-[#D9D9D9] rounded-full h-[58px] w-[58px] flex justify-center items-center">
            <img className="" src="/images/facebook-messenger-icon 1.png" />
          </div>
          <h2 className="pt-[9px] font-medium text-sm">Messenger</h2>
          <p className="text-xs py-[9px] font-light">
            Use your chatbot to automatically reply to your Facebook pages
            messages or comments.
          </p>
          <button className="cursor-pointer bg-[#466CFF] text-white px-4 py-1 rounded-full text-[12px] font-bold">
            Export All
          </button>
        </div>
      </div>
      <PhoneDialog
        botId={botId}
        isOpen={openWhatsappDialog}
        onClose={() => setOpenWhatsappDialog(false)}
      />
    </div>
  );
};

export default ChatbotIntegration;
