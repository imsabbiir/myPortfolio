'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiFolder3Fill } from "react-icons/ri";

const data = [
  {
    title: "Projects",
    icon: <RiFolder3Fill />,
    link: "projects",
  },
];

function AdminNavBar() {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 left-0 w-full bg-[#252530] z-10">
      <div className="w-[90%] mx-auto flex gap-10 py-3 justify-end">
        {data.map((dt, index) => {
          const isActive = pathname.includes(`/admin/${dt.link}`);

          return (
            <Link
            key={index}
              href={`/admin/${dt.link}`}
              className={`group relative flex items-center gap-3 py-2 px-4 rounded-xl ${isActive ? " text-[#ffc107]" : "text-white"}`}
            >
              <div className="flex items-center gap-3">
                <i className="flex justify-center items-center">
                  {dt.icon}
                </i>
                <span>
                  {dt.title}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default AdminNavBar;
