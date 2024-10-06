import Link from "next/link";
import { FaTimeline } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";

const Sidebar = () => {
  return (
    <nav className="bg-[#2b2727] w-[2.7rem] md:w-[8.5rem] h-screen fixed flex flex-col items-center truncate overflow-hidden transition-all duration-300 ease-in-out">
      <div className="flex justify-center items-center font-bold px-2 mt-3 mb-1 py-1">
        <h1 className="text-base font-valorant hidden md:block">Treffen</h1>
        <h1 className="text-sm font-valorant md:hidden">Tfn</h1>
      </div>
      <div className="bg-[#4d4b4b] h-[3px] w-full mt-2 md:mt-1"></div>
      <ul className="flex flex-col items-center md:items-start text-base bg-[#3a3535] md:pl-2 w-full h-screen text-[#9c9c9c] font-mono font-bold">
        <li className="hover:bg-[#1b1919] pl-3 md:pl-4 w-full hover:rounded-l-lg hover:py-3 py-3 md:py-2 transition-all duration-300 ease-in-out hover:text-[#e6e6e6]">
          <Link href="/timeline" className="flex flex-row gap-2 items-center">
            <FaTimeline className="md:hidden block xl:block" />
            <span className="text-base hidden md:block">Beranda</span>
          </Link>
        </li>
        <li className="hover:bg-[#1b1919] -mt-2 md:mt-0 hover:mt-0 pl-3 md:pl-4 w-full rounded-l-lg hover:py-3 py-3 md:py-2 justify-self-end transition-all duration-300 ease-in-out hover:text-[#e6e6e6]">
          <Link href="/user" className="flex flex-row gap-2 items-center">
            <FaAddressCard className="md:hidden block xl:block hover:md:block" />
            <span className="text-base hidden md:block">Grup</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
