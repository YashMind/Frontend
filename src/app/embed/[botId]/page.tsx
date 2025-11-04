import ChatbotEmbedComponent from "@/components/ChatbotEmbed/ChatbotEmbed";
import { redirect } from "next/navigation";

interface EmbedChatbotPageProps {
  params: Promise<{ botId?: string }>;
  searchParams: Promise<{ domain?: string }>;
}

const EmbedChatbotPage = async ({ params: paramsPromise, searchParams: searchParamsPromise }: EmbedChatbotPageProps) => {
  const params = await paramsPromise;
  const botId = params.botId;
  const searchParams = await searchParamsPromise;
  const domainUrl = searchParams.domain || null;

  if (!botId) redirect("/404");

  return <ChatbotEmbedComponent botId={botId} domainUrl={domainUrl ?? ""} />;
};

export default EmbedChatbotPage;
