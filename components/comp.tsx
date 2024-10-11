export const Post = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} block bg-slate-800/[0] w-full`}>
      <h1>Post Name</h1>
    </div>
  );
};

export const Forum = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} flex`}>
      <h1>Nama Forum</h1>
    </div>
  );
};
