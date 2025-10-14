"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Review() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();
        setReviews(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="py-12">
      <h2 className="text-lg font-semibold titleText mb-5">Client Review</h2>
      <div className="w-full grid md:grid-cols-2 gap-5">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="flex justify-center items-center"
          >
            <div className="h-full p-6 bg-[#252530] rounded-xl shadow-lg cursor-pointer">
              <div className="flex items-center gap-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={100}
                  height={100}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-base font-semibold text-white">
                    {review.name}
                  </h2>
                  <p className="text-sm text-gray-400">{review.title}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mt-3 leading-relaxed text-justify">
                {review.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
