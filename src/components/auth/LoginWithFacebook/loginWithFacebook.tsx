// components/FacebookLoginButton.tsx
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useRouter } from "next/navigation";

const LoginWithFacebook = () => {
  const router = useRouter();

  const handleFacebookResponse = async (response: any) => {
    try {
      const res = await fetch("http://localhost:8000/facebook-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // for cookie
        body: JSON.stringify({ token: response.accessToken }),
      });

      const data = await res.json();
      if (res.ok) {
        console.log("Facebook login success:", data);
        router.push("/dashboard"); // or wherever you want to go
      } else {
        console.error("Facebook login failed:", data.detail);
      }
    } catch (err) {
      console.error("Error during Facebook login:", err);
    }
  };

  return (
    <FacebookLogin
      appId="YOUR_FACEBOOK_APP_ID"
      autoLoad={false}
      fields="name,email"
      callback={handleFacebookResponse}
      render={(renderProps: any) => (
      <button className="flex items-center justify-center gap-2 bg-[#3B2063] text-[15px] font-medium  text-white px-4 py-3 rounded-[11px] w-full hover:shadow-lg" onClick={renderProps.onClick}>
      <img src="/images/facebook.png" />
      Facebook
    </button>
      )}
    />
  );
};

export default LoginWithFacebook;
