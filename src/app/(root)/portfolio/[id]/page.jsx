import React from "react";
import GallerySlider from "@/Components/SinglePageProject/GallerySlider";
import SingleProjectDescription from "@/Components/SinglePageProject/SingleProjectDescription";
import RelatedProjects from "@/Components/SinglePageProject/RelatedProjects";

const fetchProject = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/${id}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
};
async function Page({ params }) {
  const { id } = await params;
  const project = await fetchProject(id);
  if (!project)
    return <div className="p-4 activeText">Project not found.</div>;

  return (
      <div className="p-5 md:p-0 space-y-8 bg-transparent">
        <div className="flex flex-col md:flex-row justify-between gap-2">
          <h1 className="text-xs md:text-xl font-bold activeText">{project.title}</h1>
          <p className="subTitleText text-[8px] md:text-xs capitalize flex items-center px-2 md:px-7 py-0 md:py-2 h-fit rounded-full subBoxBg w-fit border border-[#4e4e4e]">
            {project.projectType}
          </p>
        </div>
        {/* <GallerySlider images={project.images}/> */}
        <SingleProjectDescription project={project}/>
        <RelatedProjects id={project._id} projectType={project.projectType}/>
      </div>
  );
}

export default Page;
