"use client";
import React, { useEffect, useRef, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import Profile from "./Profile";
import SocialIcon from "./SocialIcon";
import Skills from "./Skills/Skills";
function SideBar() {
  const sideRef = useRef(null);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/developerdetails");
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const children = document.querySelector(".children");
    const childrenOverlay = document.querySelector(".childrenOverlay");
  
    if (!children || !childrenOverlay) return;
  
    if (sideBarOpen) {
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
  }, [sideBarOpen]);
  
    useEffect(() => {
      function handleClickOutside(event) {
        if (sideRef.current && !sideRef.current.contains(event.target)) {
          setSideBarOpen(false);
        }
      }
  
      if (sideBarOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [sideBarOpen]);
  return (
    <div
      ref={sideRef}
      className={`absolute top-0 w-[290px] z-20 transition-all duration-500 lg:hidden ${
        sideBarOpen ? "left-0" : "-left-[290px]"
      }`}
    >
      <div
        className={`h-20 w-20 flex justify-center items-center transition-all duration-500 ease-in-out cursor-pointer absolute ${
          sideBarOpen ? "right-0" : "-right-20"
        } z-30`}
        onClick={() => setSideBarOpen(!sideBarOpen)}
      >
        <HiDotsVertical className="subTitleText" />
      </div>

      <div className={`boxBg w-full h-screen relative lg:hidden`}>
        <div className="w-full h-[32%] bg-black">
            {/* <Profile profileSrc={details?.profileImage} name={details?.name} profession={details?.profession}/> */}
        </div>
        {/* <Skills /> */}
        <div className="w-full h-[7%] bg-black absolute bottom-0">
            <h2 className="text-white">hello</h2>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
