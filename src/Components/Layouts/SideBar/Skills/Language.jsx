import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const languages = [
  {
    id: 1,
    title: "Bangla",
    percent: 100,
  },
  {
    id: 2,
    title: "English",
    percent: 90,
  },
  {
    id: 3,
    title: "Hindi",
    percent: 50,
  },
];

function Language() {
  return (
    <div className="border-b-[1px] border-[#656566] py-5 flex gap-2 justify-around">
      {languages?.map((lang, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 justify-center"
        >
          <CircularProgressbar
            value={lang.percent}
            text={`${lang.percent}%`}
            styles={buildStyles({
              textColor: "#fafafc",
              pathColor: "#ffc107",
              trailColor: "#2c2c38",
            })}
          />
          <p className="titleText text-xs capitalize">{lang.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Language;
