import ChatbotMain from "@/components/ChatbotDashboard/ChatbotMain/chatbotMain";

interface ChatbotPageProps {
  params: Promise<{ botId?: number }>;
}
const ChatbotViewPage = async(props: ChatbotPageProps) => {
  const { botId } = await props.params;
  return <ChatbotMain botId={botId} />;
};

export default ChatbotViewPage;
