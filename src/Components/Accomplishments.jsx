import React from "react";
async function Accomplishments() {
  const res = await fetch("http://localhost:3000/api/projectCount", {
    cache: "no-store",
  });
  const data = await res.json();
  const totalProjects = data.total;
  const accomplishments = [
    {
      number: "02",
      plus: "+",
      title: "Years Experience",
    },
    {
      number: totalProjects.toString().padStart(2, "0"),
      plus: "",
      title: "Completed Projects",
    },
    {
      number: "04",
      plus: "",
      title: "Happy Customers",
    },
    {
      number: "00",
      plus: "",
      title: "Honors and Awards",
    },
  ];
  return (
    <div className="w-full mt-6 grid grid-cols-2 gap-5 md:grid-cols-4">
      {accomplishments.map((dt, index) => {
        return (
          <div
            className="flex flex-col md:flex-row items-center md:gap-2"
            key={index}
          >
            <h2 className="activeText font-semibold md:text-[20px]">
              {dt.number}
              {dt.plus}
            </h2>
            <h2 className="titleText text-xs md:text-xs">{dt.title}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Accomplishments;
