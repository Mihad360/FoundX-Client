"use server";
import { axiosUrl } from "@/src/libs/AxiosInstance";
import { TRegister } from "@/src/types/auth.types";
import { cookies } from "next/headers";

export const registerUser = async (userData: TRegister) => {
  try {
    const { data } = await axiosUrl.post("/auth/register", userData);
    if (data?.success) {
      (await cookies()).set("accessToken", data?.data?.accessToken);
      (await cookies()).set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (error) {
    return error
    throw new Error(error);
  }
};
