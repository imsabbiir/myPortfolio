"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDashboard, MdDesignServices } from "react-icons/md";
import { FiMessageSquare, FiSettings } from "react-icons/fi";
import { RiFolder3Fill } from "react-icons/ri";
import { FaTools, FaCogs, FaBoxOpen } from "react-icons/fa";
import { Divide as Hamburger } from "hamburger-react";
const data = [
  {
    title: "Dashboard",
    icon: <MdDashboard />,
    link: "dashboard",
  },
  {
    title: "Messages",
    icon: <FiMessageSquare />,
    link: "messages",
  },
  {
    title: "Services",
    icon: <FaCogs />,
    link: "services",
  },
  {
    title: "Packages",
    icon: <FaBoxOpen />,
    link: "packages",
  },
  {
    title: "Skills",
    icon: <FaTools />,
    link: "skills",
  },
  {
    title: "Projects",
    icon: <RiFolder3Fill />,
    link: "projects",
  },
  { title: "Settings", icon: <FiSettings />, link: "settings" },
];

function AdminNavBar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      className={`h-full boxBg shadow-lg flex flex-col py-6 space-y-6 px-4 justify-center z-40 transition-all duration-700 ease-in-out ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
    >
      <div
        className={`w-20 h-20 flex justify-center items-center titleText absolute top-0 left-0 transition-all duration-700 ease-in-out ${
          isSidebarOpen ? "" : "subBoxBg"
        }`}
      >
        <Hamburger
          id="mobileNavBarIcon"
          toggled={isSidebarOpen}
          toggle={setIsSidebarOpen}
          size={20}
          duration={0.3}
          distance="sm"
          onClick={() => {
            setIsNavBarOpen(!isSidebarOpen);
          }}
        />
      </div>
      {data.map((dt, index) => {
        const isActive = pathname.includes(`/admin/${dt.link}`);

        return (
          <Link
            key={index}
            href={`/admin/${dt.link}`}
            className={`group relative flex items-center gap-3 h-12 rounded-xl ${
              isActive
                ? "activeBg text-[#1e1e28]"
                : "titleText hover:text-white bgHover "
            }`}
          >
            <div className="flex items-center">
              <i className="w-12 h-12 flex justify-center items-center">
                {dt.icon}
              </i>
              <span
                className={`transition-all duration-500 ease-in-out ${
                  isSidebarOpen ? "opacity-100 ml-0" : "opacity-0 ml-5"
                }`}
              >
                {dt.title}
              </span>
            </div>
            
          </Link>
        );
      })}
    </div>
  );
}

export default AdminNavBar;
