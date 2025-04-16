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
  password: string;
}