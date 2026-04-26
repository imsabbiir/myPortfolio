import Link from "next/link";
import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
const pricingPlans = [
  {
    id: 1,
    title: "Project Base",
    price: "custom",
    services: [
      {
        id: 101,
        serviceName: "Front-end Development",
        included: true,
      },
      {
        id: 102,
        serviceName: "WordPress Services",
        included: true,
      },
      {
        id: 103,
        serviceName: "Blogger Services",
        included: true,
      },
      {
        id: 104,
        serviceName: "Redesign and updates",
        included: false,
      },
      {
        id: 105,
        serviceName: "Microsoft Office Services",
        included: false,
      },
    ],
  },
  {
    id: 2,
    title: "Hourly payment",
    price: "20",
    services: [
      {
        id: 201,
        serviceName: "Front-end Development",
        included: true,
      },
      {
        id: 202,
        serviceName: "WordPress Services",
        included: true,
      },
      {
        id: 203,
        serviceName: "Blogger Services",
        included: true,
      },
      {
        id: 204,
        serviceName: "Redesign and updates",
        included: true,
      },
      {
        id: 205,
        serviceName: "Microsoft Office Services",
        included: true,
      },
    ],
  },
  {
    id: 3,
    title: "Full Time",
    price: "1999",
    services: [
      {
        id: 301,
        serviceName: "Front-end Development",
        included: true,
      },
      {
        id: 302,
        serviceName: "WordPress Services",
        included: true,
      },
      {
        id: 303,
        serviceName: "Blogger Services",
        included: true,
      },
      {
        id: 304,
        serviceName: "Redesign and updates",
        included: true,
      },
      {
        id: 305,
        serviceName: "Microsoft Office Services",
        included: true,
      },
    ],
  },
];

async function PricePlan() {
  return (
    <div className="mt-7">
      <h2 className="titleText font-semibold text-lg">Price Plans</h2>
      <div className="w-full mt-6 grid sm:grid-col-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {pricingPlans?.map((plan, index) => {
          return (
            <div
              key={index}
              className="px-4 py-6 boxBg flex flex-col items-center"
            >
              <h2 className="text-lg font-semibold titleText mb-4">
                {plan.title}
              </h2>
              <p className="text-[32px] font-semibold activeText mb-4 uppercase">
                {plan.price}
                <span className={` pl-1 ${plan.price === "custom" ? "" : "text-base font-normal subTitleText" }`}>{plan.price === "custom" ? "*" : "$"}</span>
              </p>
              <ul className="mt-5 mb-10 flex flex-col items-center gap-5">
                {plan?.services?.map((service, index) => {
                  return (
                    <li
                      key={index}
                      className={`activeText flex items-center gap-3 text-sm leading-0 ${
                        service?.included ? "opacity-100" : "opacity-30"
                      }`}
                    >
                      <h3 className="text-[10px] font-light">
                        {service.included ? (
                          <span>
                            <FaCheck />
                          </span>
                        ) : (
                          <span>
                            <FaTimes />
                          </span>
                        )}
                      </h3>

                      <span className={`subTitleText text-xs `}>
                        {service.serviceName}
                      </span>
                    </li>
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

export default PricePlan;
