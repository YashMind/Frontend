interface CreatebotForm {
  chatbot_name: string;
  public: boolean;
}

interface UpdateChatbotData {
  id?: number;
  target_link: string;
  train_from?: string;
  document_link?: string;
  text_content?: string;
}

interface ChatbotDocLinksData {
  id?: number;
  user_id?: number;
  bot_id?: number;
  chatbot_name?: string;
  target_link: string;
  train_from?: string;
  document_link?: string;
  public?: string;
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
  text_content: string;
  creativity: number;
  token: string;
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
  country?: string;
}

interface ChatbotHistoryMessages {
  data: ChatbotMessages;
  totalCount: number;
  totalPages: number;
  currentPage: number;
  chatBot: ChatbotsData;
}

interface ChatbotFaqs {
  bot_id?: number;
  questions: {
    question: string;
    answer: string;
  };
}

interface ChatbotFaqsQuesAnswer {
  answer: string;
  bot_id: number;
  created_at: string;
  id: number;
  question: string;
  updated_at: string;
  user_id: number;
  length?: number;
  faqId?: number;
}

interface ChatbotSettings {
  id: number;
  bot_id: number;
  title_value: string;
  title_is_active: boolean;
  welcome_message_value: string;
  welcome_message_is_active: boolean;
  suggestions_value: string;
  suggestions_is_active: boolean;
  placeholder_value: string;
  placeholder_is_active: boolean;
  lead_collection: boolean;
  chat_window_bg: string;
  send_button_color: string;
  chat_icon: string;
  chat_icon_color: string;
  user_message_bg: string;
  image: string;
  dots_color: string;
  message_bg: string;
  live_message_bg: string;
}

interface ChatbotDocLinksArray {
  bot_id: number;
  chars?: number;
  chatbot_name: string;
  created_at: string;
  document_link: string;
  id: number;
  public: false;
  status: string;
  target_link: string;
  text_content?: string;
  train_from: string;
  updated_at: string;
  user_id: number;
}

interface ChatbotDocLinks {
  current_page: number;
  data: ChatbotDocLinksArray[];
  total_count: number;
  total_pages: number;
  Indexed?: number,
  total_target_links?:number,
  total_document_links?:number,
  pending_count?:number,
  failed_count?:number,
  indexed_count?: number,
  total_chars?: number
}
