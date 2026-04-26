import React from "react";
import Image from "next/image";
const testimonialData = [
  {
    id: 1,
    image: "https://i.ibb.co/Nd9H183P/mehedi.jpg",
    name: "Md Mehedi Hasan",
    title: "Game Developer",
    description:
      "Sabbir did a fantastic job customizing my Blogspot theme. He was quick to understand my vision and executed the changes with great precision. The layout looks clean and professional, and it has significantly improved the user experience on my blog. Highly recommended!",
  },
  {
    id: 2,
    image: "https://i.ibb.co/W4cbK30d/Imtiaz.jpg",
    name: "Imtiaz Ahmed",
    title: "Marketing Expert",
    description:
      "I collaborated with Sabbir for a WordPress theme customization project, and I’m truly impressed with his professionalism. He delivered everything on time and went beyond expectations by optimizing the site’s speed and responsiveness. I’ll definitely work with him again.",
  },
  {
    id: 3,
    image: "https://i.ibb.co/pBd7Tf0d/in.jpg",
    name: "IN Technology Ltd",
    title: "Information Technology Limited",
    description:
      "Sabbir delivered an outstanding WordPress website for our company. He managed the entire design and development process efficiently and communicated clearly throughout. The final result is user-friendly, modern, and perfectly aligned with our brand. We’re very satisfied with his work.",
  },
  {
    id: 4,
    image: "https://i.ibb.co/tkrddvd/sahariyar.jpg",
    name: "Sahariyar Hasan",
    title: "Web Designer",
    description:
      "I hired Sabbir to build a responsive landing page with multiple sections, and he nailed it. The design is sleek, and the animations are smooth. He was open to feedback and made all requested revisions promptly. Great experience!",
  },
];


export default function Review() {
  return (
    <div className="py-12">
      <h2 className="text-lg font-semibold titleText mb-5">Client Review</h2>
      <div className="w-full grid md:grid-cols-2 gap-5">
        {testimonialData.map((review) => (
          <div
            key={review.id}
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
