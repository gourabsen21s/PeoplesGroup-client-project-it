"use client";

import { CardStack } from "./ui/card-stack";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

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
    <section className="p-4 bg-white overflow-hidden">
      <div className="relative pt-16 pb-24 px-5 xs:px-8 xl:px-12 rounded-3xl overflow-hidden">
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(254, 249, 195)"
          gradientBackgroundEnd="rgb(254, 215, 170)"
          firstColor="190, 242, 100"
          secondColor="251, 191, 36"
          thirdColor="254, 215, 170"
          fourthColor="251, 146, 60"
          fifthColor="253, 224, 71"
          pointerColor="245, 158, 11"
          size="80%"
          blendingValue="hard-light"
          containerClassName="absolute inset-0"
          className="absolute inset-0"
          interactive={false}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6">What Our Clients Say</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by leading companies worldwide
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full flex items-center justify-center">
              <CardStack items={testimonials} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


