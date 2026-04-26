import React from "react";

const others = [
  "Tailwind, SCSS, Bootstrap",
  "Material UI, Shadcn UI, Hero UI",
  "WordPress, Blogger",
  "Auth.js, JWT, Stripe, Redux",
  "Git, GitHub, Postman, VS Code",
  "Word, Excel, PowerPoint, Access",
  "ChatGPT, DALL·E, Gemini, Copilot",
  "Vercel, JSON, REST API",
  "Photoshop, CapCut",
];

function OtherSkills() {
  return (
    <div className="border-b-[1px] border-[#656566] py-5 text-xs">
      <ul className="flex gap-1 flex-col">
        {others?.map((otherSkill, index) => {
          return (
            <ol className="activeText" key={index}>
              <span className="subTitleText">{otherSkill}</span>
            </ol>
          );
        })}
      </ul>
    </div>
  );
}

export default OtherSkills;
