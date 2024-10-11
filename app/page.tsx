import Link from "next/link";
import { metadata } from "./layout";
import TopBar from "@/components/topBar";

export default function Home() {
  metadata.title = "Treffen";

  return (
    <div className="">
      <TopBar isLogin={false} />

      <section className="h-screen w-full bg-gradient-to-b from-primary-900 to-primary-800 py-4 px-6 flex flex-col justify-center items-center">
        <h1 className="font-valorant font-bold text-4xl md:text-5xl lg:text-7xl -mt-8 block text-center">
          Treffen
        </h1>

        <p className="text-sm lg:text-base text-accent-100 block mt-3 w-2/3 text-center">
          Voluptate amet tempor eu nostrud ex nostrud anim. Cillum sunt minim
          commodo pariatur ut excepteur velit duis cillum amet magna aliquip.
        </p>

        <div className="flex flex-row gap-4 mt-6">
          <Link
            href="/login"
            className="px-8 py-2 bg-[#6b6a6a]/[0] hover:bg-[#6b6a6a] text-[#6b6a6a] hover:text-[#161616] rounded-md border border-[#6b6a6a] transition-all duration-300 ease-in-out"
          >
            Masuk
          </Link>
          <Link
            href="/register"
            className="px-8 py-2 bg-[#6b6a6a] hover:bg-[#6b6a6a]/[0] text-[#161616] hover:text-[#6b6a6a] rounded-md border border-[#6b6a6a] transition-all duration-300 ease-in-out"
          >
            Daftar
          </Link>
        </div>
      </section>
    </div>
  );
}
