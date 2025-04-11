import axios from "axios";

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
    config.withCredentials = true;
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
export default http;
