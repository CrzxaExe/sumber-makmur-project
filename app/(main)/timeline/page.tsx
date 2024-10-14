import { metadata } from "@/app/layout";
import { auth } from "@/auth";
import { Forum } from "@/components/comp";
import React from "react";

const Timeline = async () => {
  metadata.title = "Beranda";

  const session = await auth();

  return (
    <div className="mt-2">
      <h1 className="text-lg mb-3">
        Hallo,{" "}
        <span className="text-gray-500 font-bold">{session?.user?.name}</span>
      </h1>

      <Forum />
    </div>
  );
};

export default Timeline;
