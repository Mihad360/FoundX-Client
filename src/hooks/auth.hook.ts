import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/authService";
import { toast } from "sonner";
import { TRegister } from "../types/auth.types";

export const useUserRegistration = () => {
  return useMutation({
    mutationKey: ["userRegister"],
    mutationFn: async (userData: TRegister) => {
      return await registerUser(userData);
    },
    onSuccess: () => {
      toast.success("User Registration Successfull", { duration: 3000 });
    },
    onError: (error) => {
      console.log(error);
      toast.error("User Registration Failed", { duration: 4000 });
    },
  });
};
