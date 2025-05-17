import { envConfig } from "@/src/config/envConfig";
import { getNewAccessToken } from "@/src/services/authService";
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
  async function (error) {
    const config = error.config;
    if (error.response.status === 401 && !config?.sent) {
      config.sent = true;
      const res = await getNewAccessToken();
      const accessToken = res?.data.accessToken;

      config.headers["Authorization"] = accessToken;
      (await cookies()).set("accessToken", accessToken);

      return axiosUrl(config);
    } else {
      return Promise.reject(error);
    }
  }
);
