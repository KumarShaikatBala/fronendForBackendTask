"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ isSidebarOpen, closeSidebar, menuItems }) => {
  // const router = useRouter();
  const pathName = usePathname();
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleSubMenuClick = (index) => {
    setOpenSubMenu((prevIndex) => (prevIndex === index ? null : index));
  };

  const isActive = (path) => {
    if (pathName === path) {
      return true;
    }
    // Check for partial match (nested routes)
    if (pathName.startsWith(`${path}/`)) {
      return true;
    }

    return false;
  };

  return (
    <div className="sidebar ">
      <div
        className={`fixed w-full sm:w-64 z-30 backdrop-opacity-40 bg-sky-900/50 h-full ${
          isSidebarOpen ? "block" : "hidden"
        } `}
        onClick={closeSidebar}
      >
        {" "}
        
      </div>

      <aside
        id="logo-sidebar"
        className={`fixed bg-white top-0 left-0 z-40 w-64  h-screen pt-20 transition-transform  print:overflow-hidden print:w-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }  border-r border-gray-200 sm:translate-x-0 print:border-0`}
        aria-label="Sidebar"
      >
        <div className="h-full pb-4 overflow-y-auto  scrollhide ">
          <ul className="font-medium space-y-1 text-sm md:text-base">
            {menuItems?.map((menuItem, index) => (
              <li key={index}>
                {menuItem.link ? (
                  <Link
                    href={menuItem.link}
                    passHref
                    className={`flex items-center p-2 text-gray-900 hover:text-black  hover:bg-gray-200 group ${
                      isActive(menuItem.link)
                        ? "bg-primaryColor text-white"
                        : ""
                    }`}
                  >
                    {menuItem.icon}
                    <span className="ms-3">{menuItem.label}</span>
                  </Link>
                ) : (
                  <div className="relative">
                    <button
                      type="button"
                      className={`flex items-center w-full p-2 text-base text-gray-900 transition-all duration-75 group hover:bg-gray-300 hover:text-black ${
                        isActive(menuItem.linkStartsWith)
                          ? "bg-primaryColor text-white"
                          : ""
                      }`}
                      onClick={() => handleSubMenuClick(index)}
                    >
                      {menuItem.icon}
                      <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                        {menuItem.label}
                      </span>
                       <svg
                        className={`w-3 h-3 transform transition-transform ${
                          openSubMenu === index ? "rotate-180" : "rotate-0"
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                      <div
                        className={`transition-all duration-75  ${
                          openSubMenu === index ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.00017 9.99949C5.00017 9.77349 5.07617 9.54649 5.23217 9.35949C5.58517 8.93549 6.21617 8.87849 6.64017 9.23149L12.0112 13.7075L17.3732 9.3925C17.8032 9.0465 18.4332 9.1145 18.7792 9.5445C19.1252 9.9755 19.0572 10.6045 18.6272 10.9515L12.6272 15.7795C12.2562 16.0775 11.7262 16.0735 11.3602 15.7685L5.36017 10.7685C5.12317 10.5705 5.00017 10.2865 5.00017 9.99949Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                    </button>
                    {menuItem.subItems && (
                      <ul
                        // className="overflow-hidden top-full left-0 py-2 space-y-2"
                        // style={{
                        //   maxHeight: openSubMenu === index ? "225px" : "0",
                        //   transition: "max-height 0.3s ease-in-out",
                        // }}
                        className={`${
                          openSubMenu === index
                            ? "max-h-[500px] py-2"
                            : "max-h-0 py-0"
                        } transition-all space-y-2 duration-500 overflow-hidden`}
                      >
                        {menuItem?.subItems?.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subItem.link}
                              className={`flex items-center w-full text-gray-900 transition duration-75 pl-11 group text-sm hover:text-green-600  ${
                                isActive(subItem.link)
                                  ? "text-primaryColor font-bold "
                                  : ""
                              }`}
                            >
                              <div className="flex gap-x-2 items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="25"
                                  height="25"
                                  viewBox="0 0 32 32"
                                  fill="none"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.6016 7.16417L25.0389 15.1642C25.4376 15.6588 25.431 16.3655 25.0243 16.8535L18.3576 24.8535C18.0936 25.1695 17.715 25.3335 17.3323 25.3335C17.0323 25.3335 16.7296 25.2322 16.4803 25.0242C15.9136 24.5535 15.8376 23.7122 16.3096 23.1468L22.2776 15.9855L16.523 8.83617C16.0616 8.26284 16.1523 7.42284 16.727 6.9615C17.3003 6.49884 18.139 6.59084 18.6016 7.16417ZM7.39348 6.96177C7.96682 6.50044 8.80548 6.5911 9.26815 7.16444L15.7055 15.1644C16.1028 15.6591 16.0975 16.3658 15.6908 16.8538L9.02415 24.8538C8.76015 25.1698 8.38148 25.3338 7.99882 25.3338C7.69882 25.3338 7.39615 25.2324 7.14682 25.0244C6.58015 24.5538 6.50415 23.7124 6.97615 23.1471L12.9428 15.9858L7.18948 8.83644C6.72815 8.2631 6.82015 7.4231 7.39348 6.96177Z"
                                    fill={
                                      isActive(subItem.link)
                                        ? "#0B7D5D"
                                        : "black"
                                    }
                                  />
                                </svg>
                                {subItem.label}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
