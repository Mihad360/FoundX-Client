import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "../services/authService";
import { toast } from "sonner";
import { TLogin, TRegister } from "../types/auth.types";

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
      console.log(error.message);
      toast.error(error.message || "User Registration Failed", {
        duration: 4000,
      });
    },
  });
};

export const useUserLogin = () => {
  return useMutation({
    mutationKey: ["userLogin"],
    mutationFn: async (userData: TLogin) => {
      return await loginUser(userData);
    },
    onSuccess: () => {
      toast.success("User Logged in Successfull", { duration: 3000 });
    },
    onError: (error) => {
      console.log(error.message);
      toast.error(error.message || "User Login Failed", {
        duration: 4000,
      });
    },
  });
};
