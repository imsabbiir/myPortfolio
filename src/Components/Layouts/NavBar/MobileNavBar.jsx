"use client";
import React, { useEffect, useRef, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import NavigationMenu from "./NavigationMenu";
import ThemeButton from "@/Components/themeButton";

function MobileNavBar() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const mobileNavBarIcon = document.querySelector("#mobileNavBarIcon");
    if (mobileNavBarIcon) {
      mobileNavBarIcon.addEventListener("click", () => {
        
      });
    }
  }, []);
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
      if (menuRef.current && !menuRef.current.contains(event.target)) {
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
      className={`w-[200px] shadow-2xl h-full boxBg lg:hidden flex flex-col justify-between transition-all duration-300 ease-in absolute ${
        isNavBarOpen ? "right-0" : "-right-[200px]"
      } top-0 z-10`}
    >
      <div className="w-full relative">
        <div
          className={`w-20 h-20 flex justify-center items-center absolute ${
            isNavBarOpen ? "left-0" : "-left-20"
          } top-0 z-10 transition-all duration-500 subTitleText`}
        >
          <Hamburger
            id="mobileNavBarIcon"
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

export default MobileNavBar;
