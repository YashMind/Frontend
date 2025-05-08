"use client"
import AuthForm from "@/components/auth/AuthForm";
import { useEffect, useState } from "react";

const SignUpPage = () => {
const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  return <AuthForm  formType="signup"/>;
};

export default SignUpPage;
