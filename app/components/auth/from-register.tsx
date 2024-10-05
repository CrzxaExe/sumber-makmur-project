"use client";

import Link from "next/link";
import { useFormState } from "react-dom";

import { registerCredentials } from "@/lib/action";
import { RegisterButton } from "@/app/components/button";

const FormRegister = () => {
  const [state, formAction] = useFormState(registerCredentials, null);

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
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-500"
        >
          Nama
        </label>
        <input
          type="text"
          name="name"
          placeholder="Nama"
          className="bg-slate-50/[0.1] border border-slate-400 text-slate-400 rounded-md w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-rose-400 mt-2">
            {state?.error?.name}
          </span>
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-500"
        >
          Email
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
          className="block mb-2 text-sm font-medium text-gray-500"
        >
          Password
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
      <div>
        <label
          htmlFor="ConfirmPassword"
          className="block mb-2 text-sm font-medium text-gray-500"
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="ConfirmPassword"
          placeholder="********"
          className="bg-slate-50/[0.1] border border-slate-400 text-slate-400 rounded-md w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-rose-400 mt-2">
            {state?.error?.ConfirmPassword}
          </span>
        </div>
      </div>

      <RegisterButton />

      <p className="text-sm font-light text-gray-400">
        Sudah punya akun?{" "}
        <Link href="/login">
          <span className="text-blue-300 font-medium pl-1 hover:text-blue-500">
            Login
          </span>
        </Link>
      </p>
    </form>
  );
};

export default FormRegister;
