import ChatbotEmbedComponent from "@/components/ChatbotEmbed/ChatbotEmbed";

interface EmbedChatbotProps {
  params: Promise<{ botId?: string; }>;
}
const EmbedChatbotPage = async (props: EmbedChatbotProps) => {
  const { botId } = await props.params;
  const domainUrl = process.env.NEXT_PUBLIC_UI_URL;

  return <ChatbotEmbedComponent botId={botId} domainUrl={domainUrl} />;
};

export default EmbedChatbotPage;
