"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import "swiper/css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


function GallerySlider({ images }) {
  const [api, setApi] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Fancybox init
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
    NativeFancybox.bind('[data-fancybox="gallery"]', {
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionEffect: "slide",
      transitionDuration: 600,
      Toolbar: { display: ["zoom", "share", "slideshow", "thumbs", "close"] },
      Thumbs: { autoStart: true },
      Hash: false,
    });

    return () => {
      NativeFancybox.unbind('[data-fancybox="gallery"]');
    };
  }, []);

  // Update active index when slide changes
  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent className="flex">
          {images?.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <a
                data-fancybox="gallery"
                href={image}
                className="art-a art-portfolio-item-frame art-horizontal"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  width={1000}
                  height={500}
                  className="w-full object-cover"
                />
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* <div className="flex justify-between pt-4">
        <button
          onClick={() => api?.scrollPrev()}
          className="activeText text-xl font-semibold cursor-pointer"
        >
          <IoIosArrowBack size={24} />
        </button>

        <button
          onClick={() => api?.scrollNext()}
          className="activeText text-xl font-semibold cursor-pointer"
        >
          <IoIosArrowForward size={24} />
        </button>
      </div> */}

      <div className="flex mt-4 gap-0.5 ">
        {images?.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-150 ease-in-out cursor-pointer ${
              activeIndex === index ? "bg-yellow-500 w-5" : "bg-gray-400 w-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default GallerySlider;
