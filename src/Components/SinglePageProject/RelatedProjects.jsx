"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import DOMPurify from "dompurify";
import { useRouter } from "next/navigation";
function RelatedProjects({ id, projectType }) {
  const route = useRouter();
  const [relatedProjects, setRelatedProjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/projects");
        const projects = await response.json();
        const filteredProjects = projects
          .filter((project) => project._id !== id)
          .filter((project) => project.projectType === projectType);
        setRelatedProjects(filteredProjects.slice(0, 3));
      } catch (error) {
        console.error("Error fetching doctors data", error);
      }
    };
    fetchData();
  }, [id]);
  const stripHtml = (html) => {
    if (typeof window === "undefined") return ""; // For SSR safety
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };
  return (
    <div className="mt-10">
      <p className="titleText text-lg mb-5">Related Projects</p>
      <div className="grid md:grid-cols-2 gap-5">
        {relatedProjects?.map((relatedProject) => {
          return (
            <motion.div
              key={relatedProject._id}
              layoutId={`card-${relatedProject._id}`}
              className="rounded-2xl overflow-hidden cursor-pointer shadow-lg relative h-64 group "
              onClick={() => route.push(`/portfolio/${relatedProject._id}`)}
              >
              
              <Image
                src={relatedProject.images[0]}
                alt={relatedProject.title}
                width={800}
                height={800}
                className="w-full h-full object-cover object-center"
              />

              <div className="w-full h-2/3 absolute -bottom-full left-0 group-hover:-bottom-0 px-5 py-2 transition-all duration-500 ease-in gradientBg">
                <h2 className="text-sm activeText py-2" >
                  {relatedProject.title}
                </h2>
                <div
                  className="text-xs subTitleText"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      stripHtml(relatedProject.description).length > 130
                        ? stripHtml(relatedProject.description).slice(0, 130) +
                            "..."
                        : relatedProject.description
                    ),
                  }}
                ></div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default RelatedProjects;
