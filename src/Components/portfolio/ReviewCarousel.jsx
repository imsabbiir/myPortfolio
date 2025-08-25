import React, { useEffect, useState } from "react";
import { GoStarFill } from "react-icons/go";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ReviewCarousel() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();
        setReviews(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
      {reviews?.map((review) => (
        <div key={review?._id} className="h-full p-5 bg-[#252530] rounded">
          <div className="flex gap-5">
            <Image
              src={review.image}
              alt={review.name}
              width={200}
              height={200}
              className="h-14 w-14 rounded-full"
            />
            <div className="leading-0 flex flex-col gap-1.5">
              <h2 className="text-base titleText">{review.name}</h2>
              <i className="text-[11px] activeText leading-3">{review.title}</i>
            </div>
          </div>
          <p className="text-justify mt-2 subTitleText text-xs">
            {review.description}
          </p>
        </div>
      ))}
    </div>
  );
}
