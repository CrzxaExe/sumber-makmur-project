import Sidebar from "@/components/sidebar";
import TopBar from "@/components/topBar";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Sidebar />
      <TopBar />
      <div className="pt-3 px-6 pl-[4rem] md:pl-[9.9rem] transition-all duration-300 ease-in-out">
        {children}
      </div>
    </div>
  );
};

export default PagesLayout;
