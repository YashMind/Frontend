export type FormType = "signin" | "signup";
export type AuthFormInput = SignInForm | SignUpForm;

export interface SignUpForm {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignInForm {
  email: string;
  password: string;
}

export interface SignUpResponse {
  message: string;
}

export interface UserProfileData {
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
  role?: any;
  plan?: string | any;
  tokenUsed?: number;
  status?: string;
  activate_plan: boolean;
  base_rate_per_token: number;
  messageUsed?: number;
}

export interface TrainingText {
  id?: number;
  text_content: string;
}

export interface ProfileForm {
  fullName: string;
  email: string;
  password?: string;
}
export interface PreferenceForm {
  preferedAiModel: string;
  lastUsedModel?: boolean;
}

export interface HelpSupportForm {
  subject: string;
  message: string;
}

export interface AdminSignUpForm {
  id?: number;
  fullName: string;
  email: string;
  password?: string;
  status?: string;
  role?: string | null;
  plan?: string;
}

export interface AdminUpdateUser {
  id?: number;
  fullName: string;
  role?: string;
  plan?: string;
}

export interface AdminPaymentGateway {
  id?: number;
  payment_name: string;
  status: string;
  api_key: string;
  created_at?: string;
}
