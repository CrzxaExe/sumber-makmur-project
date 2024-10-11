import { auth } from "@/auth";
import React from "react";

interface userCon {
  className?: string;
}

const UserContainer = async ({ className }: userCon) => {
  const session = await auth();

  console.log(session);

  return (
    <div className={`${className}`}>
      <h1 className="font-valorant text-sm hidden lg:block">
        {session?.user?.name}
      </h1>
      <span className="text-xs"></span>
    </div>
  );
};

export default UserContainer;
