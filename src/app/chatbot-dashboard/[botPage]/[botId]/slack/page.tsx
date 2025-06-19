import RegisterSlackPage from "@/components/ChatbotDashboard/ChatbotIntegration/registerSlack";
import React from "react";
interface ChatbotPageProps {
    params: Promise<{ botPage: string; botId?: number }>;
}
const page = async (props: ChatbotPageProps) => {
    const { botPage, botId } = await props.params;
    if (botPage == "integeration") return null;
    return <RegisterSlackPage botId={botId} />;
};

export default page;
