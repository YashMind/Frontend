"use client";
import axios from "axios";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { useRouter, useSearchParams } from "next/navigation";
import http from "@/services/http/baseUrl";
import toast from "react-hot-toast";
import { toasterError, toasterSuccess } from "@/services/utils/toaster";

const LoginWithGoogle = () => {
  const router = useRouter();

  const searchParams = useSearchParams()
  const signUpWithGoogle = async (accessToken: string) => {
    try {
      // const { data: profile } = await axios.get(
      //   "https://www.googleapis.com/oauth2/v3/userinfo",
      //   {
      //     headers: {
      //       Authorization: `Bearer ${accessToken}`,
      //     },
      //   }
      // );

      // const authData = {
      //   googleId: profile.sub,
      //   fullName: profile.name,
      //   email: profile.email,
      //   token: accessToken,
      // }
      const { data } = await http.post("/auth/google-login", {
        token: accessToken,
      });
      return data;
    } catch (error) {
      console.error("Google Sign-Up/Login failed:", error);
      throw error.response.data.detail;
    }
  };
  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const user = await signUpWithGoogle(response.access_token);
        // Optionally: store tokens or user info here
        if (user) {
          toasterSuccess("Logged with google successfully!", 2000, "id")
          // toast.success("Logged with google successfully!");
          if (searchParams.get('from')) {
            router.push(searchParams.get('from') ?? "/chatbot-dashboard/main");
            return
          }
          router.push("/chatbot-dashboard/main");
        }
      } catch (err: any) {
        console.log("Login with google failed:", err)
        toasterError(err || "Login with google failed!", 2000, "id")
        // toast.error("Login with google failed!");
      }
    },
    onError: () =>
      toasterError("Error in Login with google!", 2000, "id"),

    //  toast.error("Error in Login with google!"),
  });

  return (
    <button
      className="flex items-center cursor-pointer justify-center gap-2 bg-[#3B2063] text-[15px] font-medium text-white px-4 py-3 rounded-[11px] w-full hover:shadow-lg"
      onClick={() => loginWithGoogle()}
    >
      <img src="/images/google.png" alt="Google icon" />
      Google
    </button>
  );
};

export default LoginWithGoogle;
