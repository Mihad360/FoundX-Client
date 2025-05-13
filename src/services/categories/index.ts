import { axiosUrl } from "@/src/libs/AxiosInstance";

export const getCaegories = async () => {
  try {
    const { data } = await axiosUrl.get("/item-categories");
    return data
  } catch (error) {
    throw new Error(error?.response?.data?.message);
  }
};
