"use server";

import { LoginSchema, RegisterSchema } from "./zod";
import { hashSync } from "bcrypt-ts";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

// Register function
export const registerCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  const validate = RegisterSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validate.success) {
    return {
      error: validate.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validate.data;
  const hashPassword = hashSync(password, 10);

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        status: "No status",
        password: hashPassword,
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      message: "Gagal melakukan register",
    };
  }

  redirect("/login");
};

// Login function
export const loginCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  const validate = LoginSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validate.success) {
    return {
      error: validate.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validate.data;

  try {
    await signIn("credentials", { email, password, redirectTo: "/timeline" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Login tidak valid" };
        default:
          return { message: "Ada masalah" };
      }
    }
    throw error;
  }
};
