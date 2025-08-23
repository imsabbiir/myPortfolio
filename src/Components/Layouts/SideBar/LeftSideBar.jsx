'use client';
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

  if (!details) return <div className="p-4">Loading...</div>; // optional loading state

  return (
    <div
      className="sideBar boxBg static left-0 h-full lg:flex flex-col justify-between w-[290px] flex-shrink-0 transition-all duration-500 ease-in-out hidden"
    >
      <Profile
        profileSrc={details.profileImage}
        name={details.name}
        profession={details.profession}
      />
      <Skills
        skills={details.skills}
        residence={details.residence}
        city={details.city}
        district={details.district}
      />
      <SocialIcon
        instagram={details.instagram}
        facebook={details.facebook}
        twitter={details.twitter}
        linkedin={details.linkedin}
      />
    </div>
  );
}
