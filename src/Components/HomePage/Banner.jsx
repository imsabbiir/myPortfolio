"use client";
import React, { useEffect } from "react";
import Profile from "@/media/me.png";
import Typewriter from "typewriter-effect/dist/core";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
function Banner() {
  const title = "discover my amazing art space";
  let finalTitle = "";
  [...title].forEach((char) => {
    finalTitle += char;
  });

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".title", {
      opacity: 0,
      y: -20,
      duration: 1.2,
      ease: "Expo.easeInOut",
    });
  }, []);

  useEffect(() => {
    new Typewriter("#typewriter, #typewrite", {
      strings: [
        "web interface.",
        "wordpress website.",
        "blogger website.",
        "excel dashboard.",
        "PowerPoint presentation.",
      ],
      autoStart: true,
      loop: true,
    });
  }, []);
  return (
    <div className="bg w-full h-[400px] md:h-[300px]">
      <div className="details">
        <div className="bgOverlay">
          <div className="w-full">
            <h1 className="defaultText text-[25px] md:text-[32px] font-extrabold md:leading-10 mb-4 capitalize">
              {finalTitle}
            </h1>
            <div className="flex justify-center md:justify-start gap-2 mb-6 text-white">
              <div className="hidden md:flex items-center gap-0.5 ">
                <span>&lt;</span>
                <span className="activeText"> code </span>
                <span>&gt;</span>
              </div>
              I build{" "}
              <span id="typewriter" className="inline-block md:ml-3">
                {" "}
              </span>
              <div className="hidden md:flex items-center gap-0.5">
                <span>&lt;/</span>
                <span className="activeText"> code </span>
                <span>&gt;</span>
              </div>
            </div>
            <button
              className="py-3 px-5 activeBg text-[#20202a] text-[11px] cursor-pointer font-semibold"
              onClick={() => navigator("/portfolio")}
            >
              EXPLORE NOW
            </button>
          </div>
          <div className="w-[400px] h-full absolute -right-[40px] bottom-16 hidden md:block">
            <Image
              src={Profile}
              alt="Sabbir ahmed Mriudl"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
