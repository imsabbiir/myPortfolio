import React from 'react';
const technologies = [
  {
    id: 1,
    title: "HTML",
    percent: 95,
  },
  {
    id: 2,
    title: "CSS",
    percent: 90,
  },
  {
    id: 3,
    title: "JavaScript",
    percent: 85,
  },
  {
    id: 4,
    title: "React",
    percent: 85,
  },
  {
    id: 5,
    title: "Next",
    percent: 80,
  },
  {
    id: 6,
    title: "MongoDB",
    percent: 80,
  },
];

function SkillBars() {
  return (
    <div className="border-b-[1px] border-[#656566] py-5 flex flex-col gap-4">
      {technologies?.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between text-xs">
            <h3 className="titleText">{skill.title}</h3>
            <h3 className="titleText">{skill.percent}%</h3>
          </div>
          <div className="w-full h-[5px] structureBg rounded-full overflow-hidden">
            <div
              className="h-full activeBg"
              style={{ width: `${skill.percent}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillBars;
