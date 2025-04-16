import ChatbotMain from "@/components/ChatbotDashboard/ChatbotMain/chatbotMain";

interface ChatbotPageProps {
  params: Promise<{ botPage: string }>;
}
const ChatbotViewPage = async(props: ChatbotPageProps) => {
  const { botPage } = await props.params;
  console.log("main ", botPage)
  return <ChatbotMain botPage={botPage} />;
};

export default ChatbotViewPage;
