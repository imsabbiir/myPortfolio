"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Carousel } from "primereact/carousel";
import { GoStarFill } from "react-icons/go";
export default function BasicDemo() {
  const [reviews, setReviews] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "320px",
      numVisible: 0,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/reviews");
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const productTemplate = (review) => {
    return (
      <div className="h-[270px] mx-2 p-5 rounded bg-[#20202a]">
        <div className="flex gap-5">
          <Image
            src={review.image}
            alt={review.name}
            width={56}
            height={56}
            className="h-14 w-14 rounded-full object-cover"
          />
          <div className="leading-0 flex flex-col gap-1.5">
            <h2 className="text-base titleText">{review.name}</h2>
            <i className="text-[11px] activeText">{review.title}</i>
          </div>
        </div>
        <p className="text-justify mt-2 subTitleText text-xs">
          {review.description}
        </p>
        <div className="structureBg w-fit rounded-full mt-5 py-2 px-4 hidden md:flex gap-1 absolute bottom-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <GoStarFill key={i} className="activeText" />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="card text-yellow-500">
      <Carousel
        value={reviews}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
