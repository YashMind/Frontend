"use client";
import axios from "axios";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import http from "@/services/http/baseUrl";
import toast from "react-hot-toast";

const LoginWithGoogle = () => {
  const router = useRouter();

  const signUpWithGoogle = async (accessToken: string) => {
    try {
      const { data: profile } = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const { data } = await http.post("/google-login", {
        googleId: profile.sub,
        name: profile.name,
        email: profile.email,
        token: accessToken,
      });

      return data;
    } catch (error) {
      console.error("Google Sign-Up/Login failed:", error);
      throw error;
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const user = await signUpWithGoogle(response.access_token);
        // Optionally: store tokens or user info here
        if(user){
            toast.success("Logged with google successfully!")
            router.push("/dashboard");
        }
      } catch (err) {
        console.log("Login failed:", err);
        toast.error("Login with google failed!")
      }
    },
    onError: () => toast.error("Error in Login with google!"),
  });

  return (
    
      <button
        className="flex items-center justify-center gap-2 bg-[#3B2063] text-[15px] font-medium text-white px-4 py-3 rounded-[11px] w-full hover:shadow-lg"
        onClick={() => loginWithGoogle()}
      >
        <img src="/images/google.png" alt="Google icon" />
        Google
      </button>
    
  );
};

export default LoginWithGoogle;

