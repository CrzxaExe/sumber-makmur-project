import Link from "next/link";
import { metadata } from "./layout";

export default function Home() {
  metadata.title = "LeForum";

  return (
    <div className="py-2 px-4">
      <section>
        <h1>Test</h1>

        <Link href="/login">Login</Link>
      </section>
    </div>
  );
}
