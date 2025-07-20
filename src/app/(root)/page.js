'use client'
import Accomplishments from "@/Components/Accomplishments";
import Banner from "@/Components/HomePage/Banner";
import PricePlan from "@/Components/HomePage/PricePlan";
import Services from "@/Components/HomePage/Services";
import React from "react";

function page() {
  return (
    <div className="px-5 pt-5 md:px-0 md:pt-0">
      <Banner />
      <Accomplishments />
      <Services />
      <PricePlan />
    </div>
  );
}

export default page;
