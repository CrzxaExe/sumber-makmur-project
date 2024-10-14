import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen max-w-screen-lg flex items-center justify-center px-6 py-4 container">
      <div className="bg-gray-100 w-full text-gray-900 px-5 py-4 rounded-md">
        {children}
      </div>
    </div>
  );
};

export default Layout;
