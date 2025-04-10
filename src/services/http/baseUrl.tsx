import axios from "axios";
// import Cookies from "js-cookie";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,

  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

// Add a request interceptor
http.interceptors.request.use(
  (config: any) => {
    // const userData = Cookies.get("user_data")
    //   ? JSON.parse(Cookies.get("user_data"))
    //   : null;
    // const authToken = userData?.auth_token;
    // if (authToken) {
    //   config.headers.Authorization = `Bearer ${authToken}`;
    // }
    config.withCredentials = true;
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
export default http;
