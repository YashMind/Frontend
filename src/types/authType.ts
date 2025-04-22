interface SignUpForm {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignInForm {
  email: string;
  password: string;
}

interface SignUpResponse {
  message: string;
}

interface UserProfileData {
  id?: number
  email?: string
  fullName?: string
  password?: string
  isMFA?: boolean
  isRestricted?: boolean
  googleId?: string
  picture?: string
  provider?: string
  created_at: string
  updated_at?: string
}

interface TrainingText {
  text_content: string;
}

interface ProfileForm {
  fullName: string;
  email: string;
  password?: string;
}
interface PreferenceForm {
  preferedAiModel: string;
  lastUsedModel?: boolean;
}

interface HelpSupportForm {
  subject: string;
  message: string;
}

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
  id: number
  chatbot_name: string
  user_id: number
  train_from: string
  target_link: string
  document_link: string
  public: boolean
  created_at: string
  updated_at: string
}

interface TextMessage {
  text_message: string
}