"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";

export default function CustomReview() {
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

  if (!reviews.length) {
    return (
      <p className="text-center text-gray-400 py-10">Loading reviews...</p>
    );
  }

  return (
    <div className="w-11/12 mx-auto py-12">
      <h2 className="text-2xl font-semibold titleText text-center mb-8">
        Client Review
      </h2>

      <Carousel
        // plugins={[
        //   Autoplay({
        //     delay: 3500,
        //     stopOnInteraction: false,
        //   }),
        // ]}
        className="w-full max-w-6xl mx-auto"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem
              key={review._id}
              className="md:basis-1/2 lg:basis-1/3 px-2"
            >
              <div className="p-6 bg-[#252530] rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300 cursor-pointer flex flex-col justify-between h-full">
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

                <p className="text-gray-300 text-sm mt-4 leading-relaxed text-justify">
                  {review.description}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center gap-4 mt-6">
          <CarouselPrevious className="bg-gray-700 text-white hover:bg-gray-600" />
          <CarouselNext className="bg-gray-700 text-white hover:bg-gray-600" />
        </div>
      </Carousel>
    </div>
  );
}
