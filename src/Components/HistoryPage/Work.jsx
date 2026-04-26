import React from "react";
const experiences = [
  {
    id: 1,
    title: "Web Development Internship",
    address: "Dhanmondi, Dhaka",
    institute: "Creative It",
    time: "Full Time",
    year: "2021-2022",
  },
  {
    id: 2,
    title: "WordPress Customization",
    address: "Section 06, Mirpur, Dhaka",
    institute: "IN Technology Ltd",
    time: "Part Time",
    year: "2022-2023",
  },
  {
    id: 3,
    title: "Website Maintenance",
    address: "Brammandi, Velanogor, Narsingdi",
    institute: "Digital Institute of Information and Technology",
    time: "Full Time",
    year: "2018-2019",
  },
];

async function Work() {



  return (
    <div>
      <h2 className=" text-lg font-semibold titleText mt-10 md:mt-0">
        Work History
      </h2>
      <div className="lists mt-6">
        <div className="flex flex-col gap-8 w-[85%]">
          {experiences?.map((experience, index) => {
            return (
              <div
                key={index}
                className="w-full historyBox p-5 before:border-[#FFC107] box"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-[13px] font-medium titleText">
                    {experience.title}
                  </h2>
                  <div className="text-[9px] md:text-xs px-2 md:px-4 py-1 md:py-2  rounded-full boxBg subTitleText">
                    <span>{experience.year}</span>
                  </div>
                </div>
                <i className="text-xs activeText">{experience.address}</i>
                <div className="mt-7 mb-5 flex flex-col gap-2 text-xs">
                  <h1 className="font-medium titleText">
                    Institute:{" "}
                    <span className="subTitleText">{experience.institute}</span>
                  </h1>
                  <h1 className="font-medium titleText">
                    Time: <span className="subTitleText">{experience.time}</span>
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
