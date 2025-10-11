"use client";

import ResizableNavigation from "@/components/ResizableNavigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { GlareCard } from "@/components/ui/glare-card";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "Lead Product Designer",
    image: "/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.51_95252a5b.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    designation: "Senior Developer",
    image: "/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.51_adb4b8ea.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    designation: "UX Researcher",
    image: "/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.51_b4feb97b.jpg",
  },
  {
    id: 4,
    name: "James Wilson",
    designation: "Engineering Manager",
    image: "/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.51_eb204cf8.jpg",
  },
];

export default function About() {
  return (
    <div className="">
      <ResizableNavigation />
      <div className="p-4 bg-white">
        <section className="relative overflow-hidden pt-24 rounded-3xl">
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(204, 251, 241)"
            gradientBackgroundEnd="rgb(217, 249, 157)"
            firstColor="20, 184, 166"
            secondColor="163, 230, 53"
            thirdColor="94, 234, 212"
            fourthColor="132, 204, 22"
            fifthColor="153, 246, 228"
            pointerColor="45, 212, 191"
            size="80%"
            blendingValue="hard-light"
            containerClassName="absolute inset-0"
            className="absolute inset-0"
            interactive={false}
          />
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-tight mb-8">
                About Us
              </h1>
              <p className="text-lg text-gray-700">
                Software specialists, design visionaries and product experts working together to solve complex business challenges.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="p-4 bg-white">
        <div className="relative py-12 lg:py-24 rounded-3xl overflow-hidden">
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(254, 243, 199)"
            gradientBackgroundEnd="rgb(253, 224, 71)"
            firstColor="251, 191, 36"
            secondColor="254, 215, 170"
            thirdColor="253, 224, 71"
            fourthColor="245, 158, 11"
            fifthColor="253, 230, 138"
            pointerColor="251, 146, 60"
            size="80%"
            blendingValue="hard-light"
            containerClassName="absolute inset-0"
            className="absolute inset-0"
            interactive={false}
          />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-lg">
                <h2 className="font-heading text-4xl sm:text-5xl mb-6">Our Approach</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We leverage proven AI tools and modern development practices to deliver high-quality results faster.
                  Our seasoned teams combine strategic thinking with hands-on expertise to build solutions that matter.
                </p>
                <p className="text-lg text-gray-700">
                  All software, zero bullshit. We focus on what works, delivering on time and within budget
                  while maintaining the highest standards of quality and transparency.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <Image
                className="w-full rounded-3xl"
                src="/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.52_5368594c.jpg"
                alt="About"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
        </div>
      </section>
      <section className="p-4 bg-white">
        <div className="relative pt-16 pb-24 px-5 xs:px-8 xl:px-12 rounded-3xl overflow-hidden">
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(204, 251, 241)"
            gradientBackgroundEnd="rgb(217, 249, 157)"
            firstColor="20, 184, 166"
            secondColor="6, 182, 212"
            thirdColor="94, 234, 212"
            fourthColor="34, 211, 238"
            fifthColor="153, 246, 228"
            pointerColor="8, 145, 178"
            size="80%"
            blendingValue="hard-light"
            containerClassName="absolute inset-0"
            className="absolute inset-0"
            interactive={false}
          />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl mb-4">Our Values</h2>
            <p className="text-lg text-gray-700 mb-4">The principles that guide everything we do</p>
            <p className="text-sm text-gray-600">Hover over each card to experience the glare effect</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlareCard className="border border-black/[0.2] dark:border-white/[0.2]">
              <div className="flex flex-col items-start p-8 h-[30rem]">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-4xl">1%</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Be 1% better every day</h3>
                <p className="text-gray-700 leading-relaxed">
                  We continually reinforce growth mindset values by giving our team opportunities to evolve
                  and move forward with their professional growth day in, day out.
                </p>
              </div>
            </GlareCard>

            <GlareCard className="border border-black/[0.2] dark:border-white/[0.2]">
              <div className="flex flex-col items-start p-8 h-[30rem]">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-4xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Make things happen</h3>
                <p className="text-gray-700 leading-relaxed">
                  We don't wait for things to happen. We make things happen. Taking initiative is a major
                  factor in building proactive and accountable teams.
                </p>
              </div>
            </GlareCard>

            <GlareCard className="border border-black/[0.2] dark:border-white/[0.2]">
              <div className="flex flex-col items-start p-8 h-[30rem]">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-4xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Zero bullshit</h3>
                <p className="text-gray-700 leading-relaxed">
                  We empower strong and transparent relationships with both our clients and employees.
                  Bringing them better work experience is not a suggestion, it's a requirement.
                </p>
              </div>
            </GlareCard>
            </div>
        </div>
        </div>
      </section>
      <section className="p-4 bg-white">
        <div className="relative py-12 lg:py-24 rounded-3xl overflow-hidden">
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(240, 253, 244)"
            gradientBackgroundEnd="rgb(204, 251, 241)"
            firstColor="190, 242, 100"
            secondColor="20, 184, 166"
            thirdColor="163, 230, 53"
            fourthColor="94, 234, 212"
            fifthColor="167, 243, 208"
            pointerColor="45, 212, 191"
            size="80%"
            blendingValue="hard-light"
            containerClassName="absolute inset-0"
            className="absolute inset-0"
            interactive={false}
          />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl mb-6">Our Team</h2>
            <p className="text-lg text-gray-700 mb-12">
              Meet the passionate individuals driving our mission forward
            </p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
              <AnimatedTooltip items={teamMembers} />
            </div>
          </div>
        </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}


