import { useMutation } from "@tanstack/react-query";
import { createPost } from "../services/posts";
import { toast } from "sonner";

export const useCreatePost = () => {
  return useMutation({
    mutationKey: ["postData"],
    mutationFn: async (postData: FormData) => {
      return await createPost(postData);
    },
    onSuccess: () => {
      toast.success("Post Successfull", { duration: 3000 });
    },
    onError: (error) => {
      console.log(error.message);
      toast.error(error.message || "Post Failed", {
        duration: 4000,
      });
    },
  });
};
