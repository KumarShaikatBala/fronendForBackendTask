import SideNav from "@/app/layouts/SideNav";
import Image from "next/image";

export default function DashboardLayout({ children }) {
  return (
    <div className="relative">
      <SideNav />
      <div className="bg-[#0000001a] min-h-screen sm:ml-64 print:p-0 print:mb-0 print:sm:ml-0">
        <div className="rounded-lg mt-[73px]  print:mt-0">{children}</div>
      </div>

    </div>
  );
}
