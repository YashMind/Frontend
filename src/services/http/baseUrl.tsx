import axios from "axios";
// import Cookies from "js-cookie";

const api = axios.create({
  baseURL: process.env.NEXT_APP_ADV_URL,

  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

// Add a request interceptor
api.interceptors.request.use(
  (config: any) => {
    // const userData = Cookies.get("user_data")
    //   ? JSON.parse(Cookies.get("user_data"))
    //   : null;
    // const authToken = userData?.auth_token;
    // if (authToken) {
    //   config.headers.Authorization = `Bearer ${authToken}`;
    // }

    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
export default api;
