"use client";

import Link from "next/link";
import { useFormState } from "react-dom";

import { loginCredentials } from "@/lib/action";
import { LoginButton } from "@/components/button";

import { MdOutlineMail, MdPassword } from "react-icons/md";

const FormLogin = () => {
  const [state, formAction] = useFormState(loginCredentials, null);

  return (
    <form action={formAction} className="space-y-6">
      {state?.message ? (
        <div
          className="p-4 mb-4 text-rose-800 rounded bg-rose-200"
          role="alert"
        >
          <span className="font-medium ">{state?.message}</span>
        </div>
      ) : null}

      <div>
        <label
          htmlFor="email"
          className="flex flex-row items-center gap-2 mb-2 text-sm font-medium text-gray-500"
        >
          <MdOutlineMail /> Email
        </label>
        <input
          type="text"
          name="email"
          placeholder="example@gmail.com"
          className="bg-slate-50/[0.1] border border-slate-400 text-slate-400 rounded-md w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-rose-400 mt-2">
            {state?.error?.email}
          </span>
        </div>
      </div>
      <div>
        <label
          htmlFor="password"
          className="flex flex-row items-center gap-2 mb-2 text-sm font-medium text-gray-500"
        >
          <MdPassword /> Kata Sandi
        </label>
        <input
          type="password"
          name="password"
          placeholder="********"
          className="bg-slate-50/[0.1] border border-slate-400 text-slate-400 rounded-md w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-rose-400 mt-2">
            {state?.error?.password}
          </span>
        </div>
      </div>

      <LoginButton />

      <p className="text-sm font-light text-gray-400">
        Belum punya akun?{" "}
        <Link href="/register">
          <span className="text-blue-300 font-medium pl-1 hover:text-blue-500">
            Daftar
          </span>
        </Link>
      </p>
    </form>
  );
};

export default FormLogin;
