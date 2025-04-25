import ChatbotMain from "@/components/ChatbotDashboard/ChatbotMain/chatbotMain";

interface ChatbotPageProps {
  params: Promise<{ botPage:string, botId?: number }>;
}
const ChatbotViewPage = async(props: ChatbotPageProps) => {
  const { botPage, botId } = await props.params;
  return <ChatbotMain botPage={botPage} botId={botId} />;
};

export default ChatbotViewPage;
