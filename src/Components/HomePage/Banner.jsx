import React from "react";
import Profile from "@/media/me.png";

import Image from "next/image";

import BannerButton from "../BannerButton";
import TypeWriter from "./TypeWriter";

function Banner() {
  const title = "discover my amazing art space";
  let finalTitle = "";
  [...title].forEach((char) => {
    finalTitle += char;
  });

  return (
    <div className="bg w-full h-[400px] md:h-[300px]">
      <div className="details">
        <div className="bgOverlay">
          <div className="w-full">
            <h1 className="defaultText text-[25px] md:text-[32px] font-extrabold md:leading-10 mb-4 capitalize">
              {finalTitle}
            </h1>
            <TypeWriter />
            <BannerButton title={"EXPLORE NOW"} address={"portfolio"} />
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
