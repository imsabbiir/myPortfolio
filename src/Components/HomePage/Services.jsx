import Link from "next/link";
import React from "react";
const fetchServices = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/services`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};
async function Services() {
  const services = await fetchServices();
  return (
    <div className="mt-7">
      <h2 className="text-base titleText font-semibold ">My Services</h2>
      <div className="w-full mt-6 grid sm:grid-col-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {services?.map((service) => {
          return (
            <div key={service._id} className="px-4 py-6 gradientBg">
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
              <Link href={"/contact"} className="activeText cursor-pointer font-semibold flex items-center text-xs">
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
