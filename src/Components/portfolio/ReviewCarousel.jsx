"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ReviewCarousel() {
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
    <div className="full mx-auto py-5">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        className="w-full"
      >
        {reviews?.length > 0 ? (
          reviews.map((review) => (
            <SwiperSlide key={review?._id}>
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
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <p className="text-center text-gray-400">Loading reviews...</p>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}
