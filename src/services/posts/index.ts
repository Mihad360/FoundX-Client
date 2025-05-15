"use server";
import { axiosUrl } from "@/src/libs/AxiosInstance";
import { revalidateTag } from "next/cache";

export const createPost = async (postData: FormData): Promise<any> => {
  try {
    const { data } = await axiosUrl.post("/items", postData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    revalidateTag("posts");
    return data;
  } catch (error) {
    throw new Error(error?.response?.data?.message);
  }
};