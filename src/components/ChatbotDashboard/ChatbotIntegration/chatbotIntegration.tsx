import React, { useState } from "react";
import { ZapierDialog } from "./ZapierDialog";
import { useDispatch, useSelector } from "react-redux";
import { ChatbotsData } from "@/types/chatTypes";
import { RootState } from "@/store/store";
import AccessDownloadDialog from "./downloadWordpress";
import Link from "next/link";

const ChatbotIntegration = ({ botId }: { botId?: number }) => {
  const [openDialog, setOpenDialog] = useState<{
    zapier: boolean;
    wordpress: boolean;
  }>({
    zapier: false,
    wordpress: false,
  });
  const chatbotData: ChatbotsData = useSelector(
    (state: RootState) => state.chat.chatbotData
  );

  const slackUrl = process.env.NEXT_PUBLIC_SLACK_URL;
  const zapierUrl = process.env.NEXT_PUBLIC_ZAPIER_URL;

  return (
    <div className="m-4">
      <div className="max-md:ml-12 mb-8">
        <h2 className="text-2xl font-bold text-white">Apps Integration</h2>
        <p className="text-gray-300 font-light mt-2">
          Streamline your workflow by connecting to popular software and social
          media through our integrations.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {/* Card 2 - Whatsapp */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg hover:bg-white/10 transition-colors duration-300 flex flex-col items-center text-center relative mt-8">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-green-500 bg-white/20 backdrop-blur-md rounded-full h-16 w-16 flex justify-center items-center shadow-lg">
            <img
              className="w-8 h-8 object-contain"
              src="/images/logos_whatsapp-icon.png"
              alt="Whatsapp"
            />
          </div>
          <h2 className="pt-8 font-bold text-lg text-white">Whatsapp</h2>
          <p className="text-sm py-4 font-light text-gray-300">
            Connect your chatbot to a WhatsApp business number for automatic
            24/7 responses.
          </p>
          <Link
            href={`/chatbot-dashboard/integration/${botId}/whatsapp`}
            className="mt-auto cursor-pointer bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-lg transition-all"
          >
            Connect
          </Link>
        </div>

        {/* Card 3 - Wordpress */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg hover:bg-white/10 transition-colors duration-300 flex flex-col items-center text-center relative mt-8">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-[#0073AA] bg-white/20 backdrop-blur-md rounded-full h-16 w-16 flex justify-center items-center shadow-lg">
            <img
              className="w-8 h-8 object-contain"
              src="/images/wordpress.png"
              alt="Wordpress"
            />
          </div>
          <h2 className="pt-8 font-bold text-lg text-white">Wordpress</h2>
          <p className="text-sm py-4 font-light text-gray-300">
            Connect your bot with Wordpress site for a seamless integration.
          </p>

          <button
            className="mt-auto cursor-pointer bg-[#0073AA] hover:bg-[#005d8a] text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-lg transition-all"
            onClick={() =>
              setOpenDialog((prev) => ({ ...prev, wordpress: true }))
            }
          >
            Connect
          </button>
        </div>

        {/* Card 4 - Zapier */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg hover:bg-white/10 transition-colors duration-300 flex flex-col items-center text-center relative mt-8">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-[#FF4F00] bg-white/20 backdrop-blur-md rounded-full h-16 w-16 flex justify-center items-center shadow-lg">
            <img
              className="w-8 h-8 object-contain"
              src="/images/logos_zapier.png"
              alt="Zapier"
            />
          </div>
          <h2 className="pt-8 font-bold text-lg text-white">Zapier</h2>
          <p className="text-sm py-4 font-light text-gray-300">
            Use AI-powered automation with Zapier AI Actions to create more
            intelligent workflows.
          </p>
          <button
            className="mt-auto cursor-pointer bg-[#FF4F00] hover:bg-[#d64200] text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-lg transition-all"
            onClick={() => setOpenDialog((prev) => ({ ...prev, zapier: true }))}
          >
            Connect
          </button>
        </div>

        {/* Card 5 - Slack */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg hover:bg-white/10 transition-colors duration-300 flex flex-col items-center text-center relative mt-8">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-[#EBB02E] bg-white/20 backdrop-blur-md rounded-full h-16 w-16 flex justify-center items-center shadow-lg">
            <img
              className="w-8 h-8 object-contain"
              src="/images/devicon_slack.png"
              alt="Slack"
            />
          </div>
          <h2 className="pt-8 font-bold text-lg text-white">Slack</h2>
          <p className="text-sm py-4 font-light text-gray-300">
            Connect your bot with Slack workspaces for a seamless integration.
          </p>
          <Link
            href={`/chatbot-dashboard/integration/${botId}/slack`}
            className="mt-auto cursor-pointer bg-[#EBB02E] hover:bg-[#d49e29] text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-lg transition-all"
          >
            Connect
          </Link>
        </div>
      </div>
      { }
      <AccessDownloadDialog
        token={chatbotData.token}
        fileUrl="/wordpress/yashraa_wordpress.zip"
        isOpen={openDialog.wordpress}
        onClose={() => setOpenDialog((prev) => ({ ...prev, wordpress: false }))}
      />

      <ZapierDialog
        link={zapierUrl}
        token={chatbotData.token}
        isOpen={openDialog.zapier}
        onClose={() => setOpenDialog((prev) => ({ ...prev, zapier: false }))}
      />
    </div>
  );
};

export default ChatbotIntegration;
