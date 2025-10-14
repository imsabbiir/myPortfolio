// components/ReviewSlider.jsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image"; // remove if you prefer <img>

export default function DemoCarousel() {
  const [reviews, setReviews] = useState([]);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);
  const pointerData = useRef({ startX: 0, isDown: false, scrollStart: 0 });
  const [isPaused, setIsPaused] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  // AUTOPLAY SETTINGS
  const AUTOPLAY_DELAY = 3500; // ms

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

  // start autoplay (scroll by one card)
  useEffect(() => {
    stopAutoplay();
    if (!isPaused && reviews.length > 0) startAutoplay();
    return () => stopAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, reviews]);

  function startAutoplay() {
    intervalRef.current = setInterval(() => {
      moveNext();
    }, AUTOPLAY_DELAY);
  }
  function stopAutoplay() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  // helper: get first visible card width
  function getCardWidth() {
    const track = trackRef.current;
    if (!track) return 0;
    const first = track.querySelector(".review-slide");
    return first ? first.offsetWidth : track.clientWidth;
  }

  // Next / Prev
  function moveNext() {
    const track = trackRef.current;
    if (!track) return;
    const cardW = getCardWidth();
    // if already at end (or close), go back to start for an infinite feel
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 2) {
      track.scrollTo({ left: 0, behavior: "smooth" });
      setCurrentPage(0);
      return;
    }
    track.scrollBy({ left: cardW, behavior: "smooth" });
    setCurrentPage((p) => p + 1);
  }

  function movePrev() {
    const track = trackRef.current;
    if (!track) return;
    const cardW = getCardWidth();
    if (track.scrollLeft <= 0) {
      // jump to end
      track.scrollTo({
        left: track.scrollWidth - track.clientWidth,
        behavior: "smooth",
      });
      // approximate current page
      setCurrentPage(
        Math.max(0, Math.floor((track.scrollWidth - track.clientWidth) / cardW))
      );
      return;
    }
    track.scrollBy({ left: -cardW, behavior: "smooth" });
    setCurrentPage((p) => Math.max(0, p - 1));
  }

  // Pause on hover
  function handleMouseEnter() {
    setIsPaused(true);
    stopAutoplay();
  }
  function handleMouseLeave() {
    setIsPaused(false);
  }

  // Touch / pointer dragging for swipe
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function pointerDown(e) {
      pointerData.current.isDown = true;
      pointerData.current.startX = e.pageX ?? e.touches?.[0]?.pageX;
      pointerData.current.scrollStart = track.scrollLeft;
      stopAutoplay();
      track.classList.add("dragging");
    }

    function pointerMove(e) {
      if (!pointerData.current.isDown) return;
      const x = e.pageX ?? e.touches?.[0]?.pageX;
      const dx = pointerData.current.startX - x;
      track.scrollLeft = pointerData.current.scrollStart + dx;
    }

    function pointerUp() {
      if (!pointerData.current.isDown) return;
      pointerData.current.isDown = false;
      track.classList.remove("dragging");
      setTimeout(() => {
        if (!isPaused) startAutoplay();
      }, 300);

      // after swipe, snap roughly to nearest card
      const cardW = getCardWidth();
      if (cardW === 0) return;
      const newIndex = Math.round(track.scrollLeft / cardW);
      track.scrollTo({ left: newIndex * cardW, behavior: "smooth" });
      setCurrentPage(newIndex);
    }

    // pointer events + touch events
    track.addEventListener("pointerdown", pointerDown);
    window.addEventListener("pointermove", pointerMove);
    window.addEventListener("pointerup", pointerUp);

    // fallback for touch (in some browsers)
    track.addEventListener("touchstart", pointerDown, { passive: true });
    window.addEventListener("touchmove", pointerMove, { passive: false });
    window.addEventListener("touchend", pointerUp);

    return () => {
      track.removeEventListener("pointerdown", pointerDown);
      window.removeEventListener("pointermove", pointerMove);
      window.removeEventListener("pointerup", pointerUp);
      track.removeEventListener("touchstart", pointerDown);
      window.removeEventListener("touchmove", pointerMove);
      window.removeEventListener("touchend", pointerUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, reviews]);

  // keyboard navigation (left/right)
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowRight") moveNext();
      if (e.key === "ArrowLeft") movePrev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // update currentPage when user manually scrolls (keeps dots in sync)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = null;
    function onScroll() {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const cardW = getCardWidth();
        if (!cardW) return;
        const idx = Math.round(track.scrollLeft / cardW);
        setCurrentPage(idx);
      });
    }
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      track.removeEventListener("scroll", onScroll);
    };
  }, [reviews]);

  if (!reviews || reviews.length === 0) {
    return (
      <div className="py-12 text-center text-gray-400">No reviews yet.</div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* TRACK */}
      <div
        ref={trackRef}
        className="overflow-x-auto scroll-smooth no-scrollbar flex gap-4 py-6 px-2"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="review-slide flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2"
            role="group"
            aria-roledescription="slide"
          >
            <div className="h-full p-6 bg-[#252530] rounded-xl shadow-lg cursor-pointer">
              <div className="flex items-center gap-4">
                {/* if you're using next/image keep this; else replace with <img src={review.image} /> */}
                {review.image ? (
                  <div className="h-14 w-14 rounded-full overflow-hidden relative flex-shrink-0">
                    <Image
                      src={review.image}
                      alt={review.name || "reviewer"}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-14 w-14 rounded-full bg-gray-700 flex items-center justify-center text-sm text-white">
                    N/A
                  </div>
                )}
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

      {/* Controls */}
      <button
        onClick={movePrev}
        aria-label="Previous"
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white"
      >
        ‹
      </button>
      <button
        onClick={moveNext}
        aria-label="Next"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white"
      >
        ›
      </button>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {Array.from({ length: Math.max(1, reviews.length) }).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const track = trackRef.current;
              if (!track) return;
              const cardW = getCardWidth();
              track.scrollTo({ left: i * cardW, behavior: "smooth" });
              setCurrentPage(i);
            }}
            className={`w-2 h-2 rounded-full ${
              currentPage === i ? "bg-yellow-400" : "bg-gray-500/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        /* remove native scrollbar (a bit) */
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* optional dragging cursor */
        .dragging {
          cursor: grabbing;
          user-select: none;
        }
      `}</style>
    </div>
  );
}
