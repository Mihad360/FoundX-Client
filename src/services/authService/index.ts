"use server";
import { axiosUrl } from "@/src/libs/AxiosInstance";
import { TLogin, TRegister } from "@/src/types/auth.types";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const registerUser = async (userData: TRegister) => {
  try {
    const { data } = await axiosUrl.post("/auth/register", userData);
    if (data?.success) {
      (await cookies()).set("accessToken", data?.data?.accessToken);
      (await cookies()).set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};

export const loginUser = async (userData: TLogin) => {
  try {
    const { data } = await axiosUrl.post("/auth/login", userData);
    if (data?.success) {
      (await cookies()).set("accessToken", data?.data?.accessToken);
      (await cookies()).set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};

export const logOut = async () => {
  (await cookies()).delete("accessToken");
  (await cookies()).delete("refreshToken");
};

export const getUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  let decoded = null;
  if (accessToken) {
    decoded = await jwtDecode(accessToken);
    return decoded;
  }
  return decoded;
};
