'use client'
import React from "react";
import Accomplishments from "@/Components/Accomplishments";
import ContactBanner from "@/Components/portfolio/ContactBanner";
import ProjectItem from "@/Components/portfolio/ProjectItem";
import Review from "@/Components/portfolio/Review";

function Portfolio() {


  return (
    <div className="p-5">
      <ProjectItem />
      <Review />
      <Accomplishments />
      <ContactBanner />
    </div>
  );
}

export default Portfolio;
