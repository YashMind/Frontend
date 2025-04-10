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
