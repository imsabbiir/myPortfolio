import React from "react";
import { FaDownload } from "react-icons/fa";
function DownloadButton() {
  return (
    <div className="py-5 ">
      <a
        href="/sabbir-resume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="flex gap-2 items-center textWithHover cursor-pointer transition duration-150 text-sm">
          Download CV
          <FaDownload />
        </button>
      </a>
    </div>
  );
}

export default DownloadButton;
