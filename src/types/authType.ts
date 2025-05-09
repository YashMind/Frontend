type FormType = "signin" | "signup";
type AuthFormInput = SignInForm | SignUpForm;

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
  id?: number;
  email?: string;
  fullName?: string;
  password?: string;
  isMFA?: boolean;
  isRestricted?: boolean;
  googleId?: string;
  picture?: string;
  provider?: string;
  created_at: string;
  updated_at?: string;
  role?: string;
  plan?: string;
  tokenUsed?: number;
  status?: string;
}

interface TrainingText {
  id?: number;
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

interface AdminSignUpForm {
  id?: number;
  fullName: string;
  email: string;
  password?: string;
  status?: string;
  role?: string;
  plan?: string;
}

interface AdminUpdateUser {
  id?: number;
  fullName: string;
  role?: string;
  plan?: string;
}

interface AdminPaymentGateway {
  id?: number;
  payment_name: string;
  status: string;
  api_key: string;
  created_at?: string;
}
