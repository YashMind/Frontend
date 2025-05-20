import ChatbotMain from "@/components/ChatbotDashboard/ChatbotMain/chatbotMain";
import { cookies } from "next/headers";

interface ChatbotPageProps {
  params: Promise<{ botPage: string }>;
}
const ChatbotViewPage = async (props: ChatbotPageProps) => {
  const { botPage } = await props.params;
  const cookieStore = await cookies();
  const role = cookieStore.get("role")?.value;

  return <ChatbotMain botPage={botPage} role={role} />;
};

export default ChatbotViewPage;
