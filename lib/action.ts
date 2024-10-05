"use server";

import { RegisterSchema } from "./zod";
import { hashSync } from "bcrypt-ts";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

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
