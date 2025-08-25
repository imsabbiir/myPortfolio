"use client";
import Image from "next/image";
import DOMPurify from "dompurify";
import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
const NavButtons = [
  { id: "1", category: "all", value: "All" },
  { id: "2", category: "design", value: "Design" },
  { id: "3", category: "development", value: "Development" },
  { id: "4", category: "wordpress", value: "WordPress" },
  { id: "5", category: "blogger", value: "Blogger" },
];
function ProjectItem() {
  const route = useRouter();
  const [portfolioItem, setPortfolioItem] = useState([]);
  const [currentProjects, setCurrentProjects] = useState([]);
  const [filterWith, setFilterWith] = useState("all");
  const [projectrow, setProjectrow] = useState(2);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/projects");
        const projects = await response.json();
        setPortfolioItem(projects);
      } catch (error) {
        console.error("Error fetching doctors data", error);
      }
    };
    fetchData();
  }, []);
  const filteredPortfolio = useMemo(() => {
    if (filterWith === "all") return portfolioItem;
    return portfolioItem.filter(
      (portfolio) => portfolio.projectType.toLowerCase() === filterWith
    );
  }, [portfolioItem, filterWith]);

  useEffect(() => {
    const projectShowPerClick = 2;
    const lastProjectIndex = projectrow * projectShowPerClick;
    const firstProjectIndex = 0;
    setCurrentProjects(
      filteredPortfolio?.slice(firstProjectIndex, lastProjectIndex)
    );
  }, [projectrow, filteredPortfolio]);

  console.log(currentProjects);
  return (
    <>
    <div className="w-full h-[50px] flex flex-wrap gap-3 md:gap-10 items-center mt-5 mb-4 md:mt-3 md:font-semibold">
      {
        NavButtons.map((dt) => (
          <button
            key={dt.id}
            onClick={() => setFilterWith(dt.category)}
            className={`cursor-pointer textWithHover text-xs md:text-base ${filterWith === dt.category ? 'activeText' : 'titleText'}`}
          >
            {dt.value}
          </button>
        ))
      }
    </div>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {currentProjects.map((currentProject) => {
          return (
            <div
              key={currentProject._id}
              className="rounded-2xl overflow-hidden cursor-pointer shadow-lg relative h-64 group "
              onClick={() => route.push(`/portfolio/${currentProject._id}`)}
            >
              <Image
                src={currentProject.images[0]}
                alt={currentProject.title}
                width={800}
                height={800}
                className="w-full h-full object-cover object-center"
              />

              <div className="w-full h-2/3 boxBg absolute -bottom-full left-0 group-hover:-bottom-0 px-5 py-2 transition-all duration-500 ease-in">
                <p className="text-[9px] md:text-xs uppercase titleText">
                  {currentProject.projectType}
                </p>
                <h2 className="text-sm md:text-lg activeText py-2">
                  {currentProject.title}
                </h2>
                <div
                  className="text-xs subTitleText"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      currentProject.description.length > 150
                        ? currentProject.description.slice(0, 150) + "..."
                        : currentProject.description
                    ),
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full flex justify-center pt-10">
        {projectrow * 2 < portfolioItem.length && (
          <button
            className="py-2 px-5 bg-[#FFC107] text-[#20202a] text-[11px] cursor-pointer font-semibold"
            onClick={() => setProjectrow(projectrow + 1)}
          >
            MORE
          </button>
        )}
      </div>
    </>
  );
}

export default ProjectItem;
