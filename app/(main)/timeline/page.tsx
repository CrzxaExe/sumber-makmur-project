import { metadata } from "@/app/layout";
import { auth } from "@/auth";
import React from "react";

const Timeline = async () => {
  metadata.title = "Beranda";

  const session = await auth();

  return (
    <div>
      <h1 className="text-lg">
        Hallo,{" "}
        <span className="text-gray-500 font-bold">{session?.user?.name}</span>
      </h1>
    </div>
  );
};

export default Timeline;
