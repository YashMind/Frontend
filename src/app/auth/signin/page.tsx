// app/auth/signin/page.tsx
import React, { Suspense } from "react";
import AuthForm from "@/components/auth/AuthForm";

// Simple loader component
const Loader = () => {
  return (
    <div
      className="h-full banner bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      <div className="container">
        <div className="flex lg:flex-row items-center justify-between custom-gap-margin mt-16">
          <div className="left">
            <img className="rounded:xl-custom" src="/images/robo.png" />
          </div>
          <div className="form-sec w-[460px] rounded:xl-custom flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-cyan-400"></div>
              <p className="mt-4 text-white">Loading </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SignInPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AuthForm formType="signin" />
    </Suspense>
  );
};

export default SignInPage;
