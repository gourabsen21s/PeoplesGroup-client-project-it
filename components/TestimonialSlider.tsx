"use client";

import { useState } from "react";
import Image from "next/image";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Flow transformed our business operations. Efficient, scalable solutions, outstanding technical expertise!",
    name: "Jenny Wilson",
    role: "CTO, TechCorp",
    image: "/fauna-assets/testimonials/photo-lg.png",
  },
  {
    quote: "Excellent cloud migration services with seamless execution and minimal downtime",
    name: "John Jones",
    role: "CEO, DataSystems Inc",
    image: "/fauna-assets/testimonials/photo-lg.png",
  },
  {
    quote: "Flow's consulting team helped us modernize our entire tech stack. Professional, knowledgeable, and reliable.",
    name: "James Harrison",
    role: "VP Engineering, StartupHub",
    image: "/fauna-assets/testimonials/photo-lg.png",
  },
];

export default function TestimonialSlider() {
  const [activeSlide, setActiveSlide] = useState(1);
  const slideCount = testimonials.length;

  const handlePrev = () => {
    setActiveSlide(activeSlide > 1 ? activeSlide - 1 : slideCount);
  };

  const handleNext = () => {
    setActiveSlide(activeSlide < slideCount ? activeSlide + 1 : 1);
  };

  return (
    <section className="py-12 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
            <div className="max-w-lg mx-auto md:mx-0 overflow-hidden">
              <div
                style={{ transform: `translateX(-${(activeSlide - 1) * 100}%)` }}
                className="flex -mx-4 transition-transform duration-500"
              >
                {testimonials.map((testimonial, index) => (
                  <Image
                    key={index}
                    className="block flex-shrink-0 w-full px-4"
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="max-w-lg mx-auto md:mr-0 overflow-hidden">
              <div
                style={{ transform: `translateX(-${(activeSlide - 1) * 100}%)` }}
                className="flex -mx-4 transition-transform duration-500"
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 px-4 w-full">
                    <h4 className="text-3xl lg:text-4xl font-medium mb-10">{`"${testimonial.quote}"`}</h4>
                    <span className="block text-xl font-medium">{testimonial.name}</span>
                    <span className="block mb-12 lg:mb-32 text-lg text-gray-700">
                      {testimonial.role}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <button
                  onClick={handlePrev}
                  className="inline-block mr-4 text-gray-700 hover:text-lime-500"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.4 16H7.59998"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 24.4L7.59998 16L16 7.59998"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="inline-block text-gray-700 hover:text-lime-500"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.59998 16H24.4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 7.59998L24.4 16L16 24.4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


