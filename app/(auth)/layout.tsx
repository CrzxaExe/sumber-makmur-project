const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <div className="flex flex-col items-center px-6 py-8 mx-auto h-screen mt-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-valorant mt-4 mb-8">
          Treffen
        </h1>

        <div className="w-full rounded bg-[#202227] shadow mt-0 max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
