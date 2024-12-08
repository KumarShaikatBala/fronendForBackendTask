"use client";
import Loading from "@/app/components/common/Loading";
import { useState } from "react";
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";

function SideNav() {

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  let menuItems;
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} menuItems={menuItems} />
    </>
  );
}
export default SideNav;