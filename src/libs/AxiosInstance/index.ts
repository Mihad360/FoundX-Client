import { envConfig } from "@/src/config/envConfig";
import axios from "axios";
import { cookies } from "next/headers";

export const axiosUrl = axios.create({
  baseURL: envConfig.baseApi,
});

axiosUrl.interceptors.request.use(
  function (config) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosUrl.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
