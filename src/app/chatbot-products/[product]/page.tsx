import React from "react";
import ChatbotProducts from "@/components/ChatbotProducts/chatbotProducts";

interface ChatbotPageProps {
  params: Promise<{ product: string }>;
}
const ChatbotProductsPage = async(props: ChatbotPageProps) => {
  const { product } = await props.params;
  return (<ChatbotProducts product={product} />);
};

export default ChatbotProductsPage;
