import { object, string } from "zod";

export const RegisterSchema = object({
  name: string().min(2, "Nama harus lebih dari 2 karakter"),
  email: string().email("Email tidak valid"),
  password: string()
    .min(6, "Password minimal 6 karakter")
    .max(32, "Password tidak boleh lebih dari 32 karakter"),
  ConfirmPassword: string()
    .min(6, "Password minimal 6 karakter")
    .max(32, "Password tidak boleh lebih dari 32 karakter"),
}).refine((data) => data.password === data.ConfirmPassword, {
  message: "Password tidak sama",
  path: ["ConfirmPassword"],
});

export const LoginSchema = object({
  email: string().email("Email tidak valid"),
  password: string()
    .min(6, "Password minimal 6 karakter")
    .max(32, "Password tidak boleh lebih dari 32 karakter"),
});
