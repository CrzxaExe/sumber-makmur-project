import React from "react";

const Page = () => {
  return (
    <div>
      <h1 className="text-lg font-semibold text-slate-700">
        Buat postingan baru
      </h1>
      <form className="pt-5">
        <label htmlFor="title" className="block font-light text-base">
          Judul
        </label>
        <input type="text" placeholder="Masukan judul" className=""></input>
      </form>
    </div>
  );
};

export default Page;
