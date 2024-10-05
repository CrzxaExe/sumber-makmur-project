"use client";

import { useFormStatus } from "react-dom";

export const RegisterButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-sky-300 text-sm text-slate-700 py-2 px-5 hover:text-slate-900 rounded-md uppercase hover:bg-sky-400 active:bg-sky-800 transition duration-300 ease-in-out"
    >
      {pending ? "Register..." : "Register"}
    </button>
  );
};
