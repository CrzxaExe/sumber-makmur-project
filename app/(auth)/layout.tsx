const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-between px-6 py-8 mx-auto h-screen mt-9">
        <div className="w-full rounded bg-[#202227] shadow mt-0 max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
