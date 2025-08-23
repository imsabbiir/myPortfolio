import React from "react";
import BannerButton from "../BannerButton";

function ContactBanner() {

  return (
    <div className="bg w-full h-[270px] mt-6">
      <div className="details">
        <div className="w-[85%] mx-auto flex justify-center items-center h-full relative overflow-hidden text-center md:text-start">
          <div className="w-full text-center">
            <div>
              <h1 className="defaultText text-[27px] md:text-[32px] font-extrabold leading-10 mb-4">
                Ready To Order Your Project?
              </h1>
              <p className="defaultText text-md md:text-lg code mb-6">
                Let's work together!
              </p>
            </div>
            <BannerButton title={"CONTACT ME"} address={"contact"}/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
