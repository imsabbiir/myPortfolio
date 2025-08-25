"use client";
import React from "react";
import { ReviewCarousel } from "./ReviewCarousel";
function CustomCarousel() {

  return (
    <div className="relative w-full overflow-hidden mt-10">
      <h2 className="text-lg font-semibold titleText mb-6">Client Review</h2>
      <ReviewCarousel />
    </div>
  );
}

export default CustomCarousel;
