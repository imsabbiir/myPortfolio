"use client";
import React, { useEffect, useRef, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import NavigationMenu from "./NavigationMenu";

import ThemeButton from "@/Components/themeButton";
function NavBar() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
  const children = document.querySelector(".children");
  const childrenOverlay = document.querySelector(".childrenOverlay");

  if (!children || !childrenOverlay) return;

  if (isNavBarOpen) {
    children.style.pointerEvents = "none";
    childrenOverlay.classList.remove("opacity-0");
    childrenOverlay.classList.remove("hidden");
    childrenOverlay.classList.add("opacity-100");
    document.body.style.overflow = "hidden";
  } else {
    children.style.pointerEvents = "all";
    childrenOverlay.classList.remove("opacity-100");
    childrenOverlay.classList.add("opacity-0");
    childrenOverlay.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}, [isNavBarOpen]);

   useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target) ) {
        setIsNavBarOpen(false);
      }
    }

    if (isNavBarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavBarOpen]);

  

  return (
    <div
      ref={menuRef}
      className={`${
        isNavBarOpen ? "w-[200px]" : "w-[82px]"
      } boxBg lg:flex flex-col justify-between transition-all duration-300 ease-in hidden h-full absolute right-0 top-0`}
    >
      {/* menuIcon */}
      <div className="subBoxBg w-full h-[82px]">
        <div className="w-[82px] h-[82px] flex justify-center items-center titleText">
          <Hamburger
            toggled={isNavBarOpen}
            toggle={setIsNavBarOpen}
            size={20}
            duration={0.3}
            distance="sm"
            onClick={() => {
              setIsNavBarOpen(!isNavBarOpen);
            }}
          />
        </div>
      </div>

      <NavigationMenu
        isNavBarOpen={isNavBarOpen}
        setIsNavBarOpen={setIsNavBarOpen}
      />

      {/* Dark and light mode icon */}
      <ThemeButton />
    </div>
  );
}

export default NavBar;
