import { envConfig } from "@/src/config/envConfig";
import axios from "axios";

export const axiosUrl = axios.create({
  baseURL: envConfig.baseApi,
});
