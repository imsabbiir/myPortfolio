import Link from "next/link";
import React from "react";
const services = [
  {
    id: 1,
    title: "Front-end Development",
    details: [
      "Custom Website Design",
      "Website Redesign",
      "Landing page",
      "User Experience Optimization",
      "Performance Optimization"
    ]
  },
  {
    id: 2,
    title: "WordPress Services",
    details: [
      "Theme Customization",
      "Plugin Installation and Configuration",
      "Site Maintenance and Support",
      "E-commerce Solution",
      "Wordpress Website Redesign"
    ]
  },
  {
    id: 3,
    title: "Microsoft Office Services",
    details: [
      "Excel Dashboard Creation",
      "Advanced Excel Functions & VBA",
      "Data Analysis & Reporting",
      "PowerPoint Presentation Design",
      "Access Database Management"
    ]
  }
]
async function Services() {

  return (
    <div className="mt-7">
      <h2 className="text-base titleText font-semibold ">My Services</h2>
      <div className="w-full mt-6 grid sm:grid-col-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {services?.map((service) => {
          return (
            <div key={service.id} className="px-4 py-6 gradientBg">
              <h2 className="text-sm font-semibold titleText mb-4">
                {service.title}
              </h2>
              <ul className="mb-4">
                {service.details.map((li, index) => {
                  return (
                    <ol key={index} className="activeText">
                      <span className="subTitleText text-xs">{li}</span>
                    </ol>
                  );
                })}
              </ul>
              <Link
                href={"/contact"}
                className="activeText cursor-pointer font-semibold flex items-center text-xs"
              >
                <span>ORDER NOW</span>{" "}
                <span className="text-[18px] pl-1"> &gt;</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
