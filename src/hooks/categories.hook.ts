import { useQuery } from "@tanstack/react-query";
import { getCaegories } from "../services/categories";

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["useCategories"],
    queryFn: async () => {
      return await getCaegories();
    },
    // onSuccess: () => {
    //   toast.success("User Registration Successfull", { duration: 3000 });
    // },
    // onError: (error) => {
    //   console.log(error.message);
    //   toast.error(error.message || "User Registration Failed", {
    //     duration: 4000,
    //   });
    // },
  });
};
