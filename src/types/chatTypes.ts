interface CreatebotForm {
  chatbot_name: string;
  public: boolean;
}

interface UpdateChatbotData {
  id?: number;
  target_link: string;
  train_from: string;
  document_link?: string;
}

interface ChatbotsData {
  id: number;
  chatbot_name: string;
  user_id: number;
  train_from: string;
  target_link: string;
  document_link: string;
  public: boolean;
  created_at: string;
  updated_at: string;
}

interface TextMessage {
  message: string;
  chat_id: number;
  bot_id: number;
}

interface chatsIdData {
  id: number;
  user_id: number;
  bot_id: number;
  title: string;
  created_at: string;
}

interface ChatbotMessages {
  id?: number;
  bot_id?: number;
  chat_id?: number;
  created_at?: string;
  message: string;
  sender: string;
  user_id?: number;
}
