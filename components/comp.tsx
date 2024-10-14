export const Post = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} block bg-slate-800/[0] w-full`}>
      <h1>Post Name</h1>
    </div>
  );
};

export const Forum = ({ className }: { className?: string }) => {
  return (
    <div
      className={`${className} flex flex-col bg-[#3a3535]/[0.7] px-4 py-3 rounded relative`}
    >
      <h1 className="block font-semibold font-mono">Nama Forum</h1>
      <p className="block">Test</p>

      <span className="absolute right-3 bottom-1 text-xs lg:text-sm">
        05.49
      </span>
    </div>
  );
};
