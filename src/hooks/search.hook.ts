import { useMutation } from "@tanstack/react-query";
import { searchItems } from "../services/search";

export const useSearchTerm = () => {
  return useMutation({
    mutationKey: ["searchTerm"],
    mutationFn: async (searchTerm: string) => {
      return await searchItems(searchTerm);
    },
  });
};
