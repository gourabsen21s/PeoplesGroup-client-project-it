"use client";

import { CardStack } from "./ui/card-stack";

const testimonials = [
  {
    id: 1,
    name: "Jenny Wilson",
    designation: "CTO, TechCorp",
    content: (
      <p className="text-lg">
        Flow transformed our business operations. Efficient, scalable solutions, outstanding technical expertise!
      </p>
    ),
  },
  {
    id: 2,
    name: "John Jones",
    designation: "CEO, DataSystems Inc",
    content: (
      <p className="text-lg">
        Excellent cloud migration services with seamless execution and minimal downtime
      </p>
    ),
  },
  {
    id: 3,
    name: "James Harrison",
    designation: "VP Engineering, StartupHub",
    content: (
      <p className="text-lg">
        Flow's consulting team helped us modernize our entire tech stack. Professional, knowledgeable, and reliable.
      </p>
    ),
  },
];

export default function TestimonialSlider() {
  return (
    <section className="py-12 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full flex items-center justify-center">
            <CardStack items={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
}


