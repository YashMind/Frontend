export interface CreatebotForm {
  chatbot_name: string;
  public: boolean;
}

export interface UpdateChatbotData {
  id?: number;
  target_link: string;
  train_from?: string;
  document_link?: string;
  text_content?: string;
}

export interface ChatbotDocLinksData {
  id?: number;
  user_id?: number;
  bot_id?: number;
  chatbot_name?: string;
  target_link: string;
  train_from?: string;
  document_link?: string;
  public?: string;
}

export interface ChatbotsData {
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
  domains?: string;
  limit_to?: number;
  every_minutes?: number;
}

export interface TextMessage {
  message: string;
  chat_id: number;
  bot_id: number;
}

export interface chatsIdData {
  id: number;
  user_id: number;
  bot_id: number;
  title: string;
  created_at: string;
}

export interface ChatbotMessages {
  id?: number;
  bot_id?: number;
  chat_id?: number;
  created_at?: string;
  message: string;
  sender: string;
  user_id?: number;
  country?: string;
}

export interface ChatbotHistoryMessages {
  data: ChatbotMessages;
  totalCount: number;
  totalPages: number;
  currentPage: number;
  chatBot: ChatbotsData;
}

export interface ArchivedHistoryMessages {
  data: {
    totalCount: number;
    totalPages: number;
    currentPage: number;
    chatBotId: ChatbotsData;
    chatBotName: string;
    sessions: {
      [key: number]: ChatbotMessages[];
    };
  }[];
  globalTotal: number;
  globalPages: number;
}

export interface ChatbotFaqs {
  bot_id?: number;
  questions: {
    question: string;
    answer: string;
  };
}

export interface ChatbotFaqsQuesAnswer {
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

export interface ChatbotSettings {
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
  user_message_color: string;
  image: string;
  dots_color: string;
  message_bg: string;
  message_color: string;
  live_message_bg: string;
  live_message_color: string;
  name_lead_gen: string;
  is_name_lead_gen: boolean;
  required_name_lead_gen: boolean;
  mail_lead_gen: string;
  is_mail_lead_gen: boolean;
  required_mail_lead_gen: boolean;
  phone_lead_gen: string;
  is_phone_lead_gen: boolean;
  required_phone_lead_gen: boolean;
  message_lead_gen: string;
  is_message_lead_gen: boolean;
  required_message_lead_gen: boolean;
  submission_message_heading_lead_gen: string;
  sumbission_message_lead_gen: string;
  submit_text_lead_gen: string;
  submit_button_color_lead_gen: string;
}

export interface ChatbotDocLinksArray {
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

export interface ChatbotDocLinks {
  current_page: number;
  data: ChatbotDocLinksArray[];
  total_count: number;
  total_pages: number;
  Indexed?: number;
  total_target_links?: number;
  total_document_links?: number;
  pending_count?: number;
  failed_count?: number;
  indexed_count?: number;
  total_chars?: number;
  user_target_links: number;
  user_pending_count: number;
  user_failed_count: number;
  user_indexed_count: number;
  user_total_chars: number;
}

export interface ChatbotCustomSettings {
  id?: number;
  chatbot_name?: string;
  public?: boolean;
}
export interface SecurityForm {
  id?: number;
  allow_domains: boolean;
  rate_limit_enabled: boolean;
  domains?: string;
  limit_to?: number;
  every_minutes?: number;
}

export interface ChatbotLeadsArray {
  id: number;
  user_id: number;
  bot_id: number;
  chat_id: number;
  name: string;
  email: string;
  contact: string;
  message: string;
  type: string;
  created_at: string;
  updated_at: string;
}

export interface ChatbotLeads {
  current_page: number;
  data: ChatbotLeadsArray[];
  total_count: number;
  total_pages: number;
}

export interface BotTokens {
  bot_id?: string;
  tokens?: number;
  token_today?: number;
  token_monthly?: number;
  messages?: number;
}

export interface ChatMessageTokens {
  total_tokens?: number;
  bots?: BotTokens[];
}
