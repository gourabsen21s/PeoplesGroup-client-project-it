import ResizableNavigation from "@/components/ResizableNavigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "Lead Product Designer",
    image: "/fauna-assets/team/team-member-1.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    designation: "Senior Developer",
    image: "/fauna-assets/team/team-member-2.png",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    designation: "UX Researcher",
    image: "/fauna-assets/team/team-member-3.png",
  },
  {
    id: 4,
    name: "James Wilson",
    designation: "Engineering Manager",
    image: "/fauna-assets/team/team-member-4.png",
  },
];

export default function About() {
  return (
    <div className="">
      <ResizableNavigation />
      <div>
        <section className="overflow-hidden pt-24">
          <div className="container mx-auto px-4 py-16">
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
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
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
                src="/fauna-assets/about/about-image-right.png"
                alt="About"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl mb-6">Our Values</h2>
            <p className="text-lg text-gray-700">The principles that guide everything we do</p>
          </div>
          <div className="flex flex-wrap -mx-4 justify-center">
            <div className="w-full md:w-1/3 px-4 mb-12">
              <BackgroundGradient className="h-full p-8 bg-white rounded-3xl">
                <h3 className="text-2xl font-medium mb-4 text-center">Be 1% better every day</h3>
                <p className="text-gray-700 text-center">
                  We continually reinforce growth mindset values by giving our team opportunities to evolve
                  and move forward with their professional growth day in, day out.
                </p>
              </BackgroundGradient>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-12">
              <BackgroundGradient className="h-full p-8 bg-white rounded-3xl">
                <h3 className="text-2xl font-medium mb-4 text-center">Make things happen</h3>
                <p className="text-gray-700 text-center">
                  We don't wait for things to happen. We make things happen. Taking initiative is a major
                  factor in building proactive and accountable teams.
                </p>
              </BackgroundGradient>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-12">
              <BackgroundGradient className="h-full p-8 bg-white rounded-3xl">
                <h3 className="text-2xl font-medium mb-4 text-center">Zero bullshit</h3>
                <p className="text-gray-700 text-center">
                  We empower strong and transparent relationships with both our clients and employees.
                  Bringing them better work experience is not a suggestion, it's a requirement.
                </p>
              </BackgroundGradient>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
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
      </section>
      <Footer />
    </div>
  );
}


