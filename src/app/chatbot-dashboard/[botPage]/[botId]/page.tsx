import ChatbotMain from "@/components/ChatbotDashboard/ChatbotMain/chatbotMain";
import { cookies } from "next/headers";

interface ChatbotPageProps {
  params: Promise<{ botPage: string; botId?: number }>;
}
const ChatbotViewPage = async (props: ChatbotPageProps) => {
  const { botPage, botId } = await props.params;
  const cookieStore = await cookies();
  const role = cookieStore.get("role")?.value;
  return <ChatbotMain botPage={botPage} botId={botId} role={role} />;
};

export default ChatbotViewPage;
