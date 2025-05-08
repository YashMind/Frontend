'use client';

import AuthForm from "@/components/auth/AuthForm";
import { useEffect, useState } from "react";

const SignInPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;

  return <AuthForm  formType="signin"/>;
};

export default SignInPage;
