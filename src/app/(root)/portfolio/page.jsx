import React from 'react'
import Accomplishments from "@/Components/Accomplishments";
import ContactBanner from "@/Components/portfolio/ContactBanner";
import ProjectItem from "@/Components/portfolio/ProjectItem";
import Review from "@/Components/portfolio/Review";

export const metadata = {
  title: "Projects | Sabbir Ahmed",
  description: "View all development and design projects by Sabbir Ahmed.",
};
function page() {
  return (
    <div className="p-5">
      <ProjectItem />
      <Review />
      <Accomplishments />
      <ContactBanner />
    </div>
  )
}

export default page