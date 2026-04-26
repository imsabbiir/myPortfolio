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
    <div className="bg w-full  h-[400px] md:h-[300px] relative">
      <div className="w-full h-full bg-[rgba(45,45,45,0.5)] relative">
          <div className="w-[350px] h-[400px] md:h-[300px] absolute right-[0px] top-0 hidden md:block overflow-hidden">
            <Image
              src={Profile}
              alt="Sabbir ahmed Mriudl"
              width={1000}
              height={1000}
              className="w-[350px] h-auto pt-7"
            />
          </div>
        <div className="w-[90%] md:w-[85%] mx-auto flex justify-center items-center h-full relative overflow-hidden text-center md:text-start">
          <div className="w-full">
            <h1 className="defaultText text-[25px] md:text-[32px] font-extrabold md:leading-10 mb-4 capitalize">
              {finalTitle}
            </h1>
            <TypeWriter />
            <BannerButton title={"EXPLORE NOW"} address={"portfolio"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
