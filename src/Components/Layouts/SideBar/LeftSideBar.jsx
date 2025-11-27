"use client";
import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import Skills from "./Skills/Skills";
import SocialIcon from "./SocialIcon";

export default function LeftSideBar() {
  const [details, setDetails] = useState(null);
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch("/api/developerdetails");
        const data = await res.json();
        setDetails(data);
      } catch (error) {
        console.error("Fetching details failed:", error);
      }
    };

    fetchDetails();
  }, []);


  

  return (
    <div className="sideBar boxBg static -left-[290px] h-full lg:flex flex-col justify-between w-[290px] flex-shrink-0 transition-all duration-500 ease-in-out hidden">
      <div className="w-full h-[32%]">
        <Profile
          profileSrc={details?.profileImage}
          name={details?.name}
          profession={details?.profession}
        />
      </div>
      <Skills
        skills={details?.skills}
        residence={details?.residence}
        city={details?.city}
        district={details?.district}
      />

      <div className="w-full h-[7%]">
        <SocialIcon
          instagram={details?.instagram}
          facebook={details?.facebook}
          twitter={details?.twitter}
          linkedin={details?.linkedin}
        />
      </div>
    </div>
  );
}
