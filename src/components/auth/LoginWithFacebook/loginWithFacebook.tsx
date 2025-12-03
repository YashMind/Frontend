// components/FacebookLoginButton.tsx
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useRouter } from "next/navigation";
import http from "@/services/http/baseUrl";
import { toasterError, toasterSuccess } from "@/services/utils/toaster";

// import toast from "react-hot-toast";

const LoginWithFacebook = () => {
  const router = useRouter();

  const handleFacebookResponse = async (response: any) => {
    try {
      const res = await http.post("auth/facebook-login", {
        token: response.accessToken,
      });
      if (res.status === 200) {
        toasterSuccess("Logged with facebook successfully!", 10000, "id");
        // toast.success("Logged with facebook successfully!")
        router.push("/chatbot");
      } else {
        toasterError("Logged with facebook failed!", 10000, "id");
        // toast.error("Logged with facebook failed!")
      }
    } catch (err) {
      toasterError("Something went wrong!", 10000, "id");

      // toast.error("Something went wrong!")
    }
  };

  return (
    <FacebookLogin
      appId="2271284516636620"
      autoLoad={false}
      fields="name,email, picture"
      callback={handleFacebookResponse}
      scope="public_profile,email"
      render={(renderProps: any) => (
        <button
          className="flex items-center justify-center gap-2 bg-[#3B2063] text-[15px] font-medium  text-white px-4 py-3 rounded-[11px] w-full hover:shadow-lg"
          onClick={renderProps.onClick}
        >
          <img src="/images/facebook.png" />
          Facebook
        </button>
      )}
    />
  );
};

export default LoginWithFacebook;
