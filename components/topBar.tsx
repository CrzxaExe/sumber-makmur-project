import React from "react";

import { HiOutlineSearch } from "react-icons/hi";
import { BsWindowFullscreen } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

import Link from "next/link";

const TopBar = () => {
  return (
    <header className="w-[100% - 2.5rem] pl-[3.4rem] md:w-[100% - 9.5rem] md:pl-[9.2rem] pr-2 h-[52px] bg-[#2b2727] flex flex-row justify-between items-center transition-all duration-300 ease-in-out">
      <div className="h-3/4 bg-[#313030] py-2 px-4 overflow-hidden rounded-lg w-[45%] max-w-[500px] flex flex-row gap-1 items-center transition-all duration-300 ease-in-out">
        <HiOutlineSearch />
        <input
          type="text"
          placeholder="Cari apa?"
          className="text-sm bg-[#313030]/[0] w-[90%] outline-none"
        />
      </div>
      <ul className="px-3 flex flex-row items-center gap-2 lg:gap-1 transition-all duration-300 ease-in-out">
        <li className="bg-[#313030] hover:bg-[#4b4a4a] lg:bg-[#313030]/[0] px-3 py-2.5 rounded-xl lg:rounded-sm transition-all duration-300 ease-in-out">
          <Link
            href="post"
            className="flex flex-row justify-center items-center"
          >
            <FaPlus className="block" />
            <span className="hidden lg:block"></span>
          </Link>
        </li>
        <li className="bg-[#313030] hover:bg-[#4b4a4a] lg:bg-[#313030]/[0] px-3 py-2.5 lg:py-2 rounded-xl lg:rounded-sm transition-all duration-300 ease-in-out">
          <Link
            href="timeline"
            className="flex flex-row justify-center items-center"
          >
            <BsWindowFullscreen className="block lg:hidden" />
            <span className="hidden lg:block">Beranda</span>
          </Link>
        </li>
        <li className="bg-[#313030] hover:bg-[#4b4a4a] lg:bg-[#313030]/[0] px-3 py-2.5 lg:py-2 rounded-xl lg:rounded-sm transition-all duration-300 ease-in-out">
          <Link
            href="settings"
            className="flex flex-row justify-center items-center"
          >
            <IoMdSettings className="block lg:hidden" />
            <span className="hidden lg:block">Pengaturan</span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default TopBar;
