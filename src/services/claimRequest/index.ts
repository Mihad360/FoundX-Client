"use server";
import { axiosUrl } from "@/src/libs/AxiosInstance";

export const claimRequest = async (claimReqData) => {
  try {
    const { data } = await axiosUrl.post("/claim-request", claimReqData);
    return data
  } catch (error) {
    throw new Error(error?.response?.data?.message);
  }
};
