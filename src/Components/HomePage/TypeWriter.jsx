"use client";
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
function TypeWriter() {
  useEffect(() => {
    new Typewriter("#typewriter, #typewrite", {
      strings: [
        "web interface.",
        "wordpress website.",
        "blogger website.",
        "excel dashboard.",
        "PowerPoint presentation.",
      ],
      autoStart: true,
      loop: true,
    });
  }, []);
  return (
    <div className="flex justify-center md:justify-start gap-2 mb-6 text-white">
      <div className="hidden md:flex items-center gap-0.5 ">
        <span>&lt;</span>
        <span className="activeText"> code </span>
        <span>&gt;</span>
      </div>
      I build{" "}
      <span id="typewriter" className="inline-block md:ml-3">
        {" "}
      </span>
      <div className="hidden md:flex items-center gap-0.5">
        <span>&lt;/</span>
        <span className="activeText"> code </span>
        <span>&gt;</span>
      </div>
    </div>
  );
}

export default TypeWriter;
