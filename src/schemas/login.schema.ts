import { z } from "zod";

export const loginValidation = z.object({
  email: z.string().trim().email("Please enter a valid email"),
  password: z.string().trim().min(6, "password must be at least 6 character"),
});

export const registerValidation = z.object({
  name: z.string().trim(),
  email: z.string().trim().email("Please enter a valid email"),
  password: z.string().trim().min(6, "password must be at least 6 character"),
  mobileNumber: z.string().trim(),
});
