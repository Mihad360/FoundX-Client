"use server"
import { axiosUrl } from "@/src/libs/AxiosInstance";

export const searchItems = async (searchTerm: string) => {
  try {
    const { data } = await axiosUrl.get(
      `/search-items?searchTerm=${searchTerm}`
    );
    return data
  } catch (error) {
    throw new Error(error?.response.data.message);
  }
};
