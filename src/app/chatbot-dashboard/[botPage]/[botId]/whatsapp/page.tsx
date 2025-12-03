import RegisterWhatsAppPage from "@/components/ChatbotDashboard/ChatbotIntegration/registerWhatsApp";
import React from "react";

interface ChatbotPageProps {
  params: Promise<{ botPage: string; botId?: number }>;
}

const Page = async (props: ChatbotPageProps) => {
  const { botPage, botId } = await props.params;
  if (botPage == "integeration") return null;
  return <RegisterWhatsAppPage botId={botId} />;
};

export default Page;
