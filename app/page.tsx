"use client";

import ResizableNavigation from "@/components/ResizableNavigation";
import Footer from "@/components/Footer";
import FAQAccordionItem from "@/components/FAQAccordion";
import TestimonialSlider from "@/components/TestimonialSlider";
import Image from "next/image";
import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@/components/ui/animated-modal";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { GlareCard } from "@/components/ui/glare-card";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const products = [
  {
    title: "E-Commerce Platform",
    link: "#",
    thumbnail: "/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.51_95252a5b.jpg",
  },
  {
    title: "Healthcare Dashboard",
    link: "#",
    thumbnail: "/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.51_adb4b8ea.jpg",
  },
  {
    title: "Mobile Banking App",
    link: "#",
    thumbnail: "/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.51_b4feb97b.jpg",
  },
  {
    title: "Analytics Platform",
    link: "#",
    thumbnail: "/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.51_eb204cf8.jpg",
  },
  {
    title: "Social Network",
    link: "#",
    thumbnail: "/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.52_5368594c.jpg",
  },
  {
    title: "AI Content Studio",
    link: "#",
    thumbnail: "/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.52_a5f755af.jpg",
  },
  {
    title: "Fintech Solution",
    link: "#",
    thumbnail: "/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.52_c7b4ab9e.jpg",
  },
  {
    title: "Education Portal",
    link: "#",
    thumbnail: "/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.53_02dbe1d4.jpg",
  },
  {
    title: "Travel Marketplace",
    link: "#",
    thumbnail: "/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.53_e2cdec9d.jpg",
  },
  {
    title: "Enterprise CRM",
    link: "#",
    thumbnail: "/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.53_f9406baa.jpg",
  },
  {
    title: "SaaS Dashboard",
    link: "#",
    thumbnail: "/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.54_92e16c7d.jpg",
  },
  {
    title: "Workflow Automation",
    link: "#",
    thumbnail: "/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.54_4317a0bf.jpg",
  },
];

export default function Home() {
  return (
    <div className="">
      <ResizableNavigation />
        <section className="p-4 bg-white overflow-hidden">
          <div className="relative rounded-3xl overflow-hidden">
            <BackgroundGradientAnimation
              gradientBackgroundStart="rgb(13, 148, 136)"
              gradientBackgroundEnd="rgb(20, 184, 166)"
              firstColor="20, 184, 166"
              secondColor="163, 230, 53"
              thirdColor="94, 234, 212"
              fourthColor="45, 212, 191"
              fifthColor="153, 246, 228"
              pointerColor="190, 242, 100"
              size="80%"
              blendingValue="hard-light"
              containerClassName="absolute inset-0"
              className="absolute inset-0"
              interactive={false}
            />
            <div className="relative z-10">
              <HeroParallax products={products} />
            </div>
          </div>
        </section>
        <section className="p-4 bg-white">
        <div className="relative pt-16 pb-16 px-5 xs:px-8 xl:px-12 rounded-3xl overflow-hidden">
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(255, 237, 213)"
            gradientBackgroundEnd="rgb(254, 215, 170)"
            firstColor="255, 154, 158"
            secondColor="254, 215, 170"
            thirdColor="251, 191, 36"
            fourthColor="234, 179, 8"
            fifthColor="253, 186, 116"
            pointerColor="251, 146, 60"
            size="80%"
            blendingValue="hard-light"
            containerClassName="absolute inset-0"
            className="absolute inset-0"
            interactive={false}
          />
          <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-10 md:mb-0">
              <div className="text-center">
                  <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4 font-bold">50+</h5>
                <span className="text-base lg:text-lg text-gray-700">
                  Projects Delivered
                </span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-10 md:mb-0">
              <div className="text-center">
                  <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4 font-bold">10+</h5>
                <span className="text-base lg:text-lg text-gray-700">
                  Enterprise Clients
                </span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-10 sm:mb-0">
              <div className="text-center">
                  <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4 font-bold">1000+</h5>
                <span className="text-base lg:text-lg text-gray-700">
                  Hours of Consulting
                </span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-4">
              <div className="text-center">
                  <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4 font-bold">98%</h5>
                <span className="text-base lg:text-lg text-gray-700">
                  Client Satisfaction Rate
                </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="solutions" className="p-4 bg-white">
        <div className="relative pt-16 pb-24 px-5 xs:px-8 xl:px-12 rounded-3xl overflow-hidden">
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(190, 242, 100)"
            gradientBackgroundEnd="rgb(132, 204, 22)"
            firstColor="163, 230, 53"
            secondColor="132, 204, 22"
            thirdColor="190, 242, 100"
            fourthColor="101, 163, 13"
            fifthColor="217, 249, 157"
            pointerColor="163, 230, 53"
            size="80%"
            blendingValue="hard-light"
            containerClassName="absolute inset-0"
            className="absolute inset-0"
            interactive={false}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex mb-4 items-center">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#022C22" />
              </svg>
              <span className="inline-block ml-2 text-sm font-medium">Solutions</span>
            </div>
            <div className="border-t border-teal-900 border-opacity-25 pt-14">
              <h1 className="font-heading text-4xl sm:text-6xl mb-24">Our services</h1>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full sm:w-1/2 px-4 mb-16">
                  <div>
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
                        fill="white"
                      />
                      <circle cx="16" cy="16" r="4" fill="#022C22" />
                      <circle cx="24" cy="32" r="4" fill="#022C22" />
                      <circle cx="32" cy="16" r="4" fill="#022C22" />
                    </svg>
                    <div className="mt-6">
                      <h5 className="text-2xl font-medium mb-3">Strategy</h5>
                      <p className="mb-6">
                        Product discovery workshops, design sprints, user research, user interviews, and product planning are some techniques we use before jumping to the design itself.
                      </p>
                      <a href="#!" className="inline-block text-lg  font-medium hover:text-teal-700">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 px-4 mb-16">
                  <div>
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
                        fill="white"
                      />
                      <rect x="23" y="8" width="2" height="12" rx="1" fill="#022C22" />
                      <rect x="23" y="28" width="2" height="12" rx="1" fill="#022C22" />
                      <rect
                        x="34.6066"
                        y="11.9792"
                        width="2"
                        height="12"
                        rx="1"
                        transform="rotate(45 34.6066 11.9792)"
                        fill="#022C22"
                      />
                      <rect
                        x="20.4645"
                        y="26.1213"
                        width="2"
                        height="12"
                        rx="1"
                        transform="rotate(45 20.4645 26.1213)"
                        fill="#022C22"
                      />
                      <rect
                        x="28"
                        y="25"
                        width="2"
                        height="12"
                        rx="1"
                        transform="rotate(-90 28 25)"
                        fill="#022C22"
                      />
                      <rect
                        x="8"
                        y="25"
                        width="2"
                        height="12"
                        rx="1"
                        transform="rotate(-90 8 25)"
                        fill="#022C22"
                      />
                      <rect
                        x="26.1213"
                        y="27.5355"
                        width="2"
                        height="12"
                        rx="1"
                        transform="rotate(-45 26.1213 27.5355)"
                        fill="#022C22"
                      />
                      <rect
                        x="11.9792"
                        y="13.3934"
                        width="2"
                        height="12"
                        rx="1"
                        transform="rotate(-45 11.9792 13.3934)"
                        fill="#022C22"
                      />
                    </svg>
                    <div className="mt-6">
                      <h5 className="text-2xl font-medium mb-3">Product design</h5>
                      <p className="mb-6">
                        Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that's easy on the eyes.
                      </p>
                      <a href="#!" className="inline-block text-lg  font-medium hover:text-teal-700">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 px-4 mb-16 sm:mb-0">
                  <div>
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
                        fill="white"
                      />
                      <path
                        d="M25 24C25 24.5523 24.5523 25 24 25C23.4477 25 23 24.5523 23 24C23 23.4477 23.4477 23 24 23C24.5523 23 25 23.4477 25 24Z"
                        fill="#022C22"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24 25C24.5523 25 25 24.5523 25 24C25 23.4477 24.5523 23 24 23C23.4477 23 23 23.4477 23 24C23 24.5523 23.4477 25 24 25Z"
                        fill="#022C22"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M40 23C40.5523 23 41 23.4477 41 24C41 33.3888 33.3888 41 24 41C23.4477 41 23 40.5523 23 40C23 39.4477 23.4477 39 24 39C32.2843 39 39 32.2843 39 24C39 23.4477 39.4477 23 40 23Z"
                        fill="#022C22"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24 9C15.7157 9 9 15.7157 9 24C9 24.5523 8.55228 25 8 25C7.44772 25 7 24.5523 7 24C7 14.6112 14.6112 7 24 7C24.5523 7 25 7.44772 25 8C25 8.55228 24.5523 9 24 9Z"
                        fill="#022C22"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M36 23C36.5523 23 37 23.4477 37 24C37 31.1797 31.1797 37 24 37C23.4477 37 23 36.5523 23 36C23 35.4477 23.4477 35 24 35C30.0751 35 35 30.0751 35 24C35 23.4477 35.4477 23 36 23Z"
                        fill="#022C22"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24 13C17.9249 13 13 17.9249 13 24C13 24.5523 12.5523 25 12 25C11.4477 25 11 24.5523 11 24C11 16.8203 16.8203 11 24 11C24.5523 11 25 11.4477 25 12C25 12.5523 24.5523 13 24 13Z"
                        fill="#022C22"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M32 23C32.5523 23 33 23.4477 33 24C33 28.9706 28.9706 33 24 33C23.4477 33 23 32.5523 23 32C23 31.4477 23.4477 31 24 31C27.866 31 31 27.866 31 24C31 23.4477 31.4477 23 32 23Z"
                        fill="#022C22"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24 17C20.134 17 17 20.134 17 24C17 24.5523 16.5523 25 16 25C15.4477 25 15 24.5523 15 24C15 19.0294 19.0294 15 24 15C24.5523 15 25 15.4477 25 16C25 16.5523 24.5523 17 24 17Z"
                        fill="#022C22"
                      />
                    </svg>
                    <div className="mt-6">
                      <h5 className="text-2xl font-medium mb-3">Development</h5>
                      <p className="mb-6">
                        With GitHub Copilot and ChatGPT, our AI-powered engineering, combined with the right tech stack for each job, ensures we deliver robust solutions on time and within budget.
                      </p>
                      <a href="#!" className="inline-block text-lg  font-medium hover:text-teal-700">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 px-4">
                  <div>
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
                        fill="white"
                      />
                      <path
                        d="M23.8425 12.3779C23.9008 12.238 24.0992 12.238 24.1575 12.3779L30.1538 26.7692C31.9835 31.1605 28.7572 36 24 36Lnan nanL24 36C19.2428 36 16.0165 31.1605 17.8462 26.7692L23.8425 12.3779Z"
                        fill="#022C22"
                      />
                    </svg>
                    <div className="mt-6">
                      <h5 className="text-2xl font-medium mb-3">Marketing & growth</h5>
                      <p className="mb-6">
                        By understanding the mechanics of digital marketing, we make sure to put your product, at the right time, in front of the right people.
                      </p>
                      <a href="#!" className="inline-block text-lg  font-medium hover:text-teal-700">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-4 bg-white overflow-hidden">
        <div className="relative pt-16 pb-24 px-5 xs:px-8 xl:px-12 rounded-3xl overflow-hidden">
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
          <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto mb-24 text-center">
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl tracking-sm mb-16">
              We build digital products that drive growth and innovation for businesses worldwide.
            </h1>
            <a
              href="#!"
                className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-white hover:text-white border border-teal-900 hover:border-cyan-500 bg-teal-900 hover:bg-cyan-500 rounded-full transition duration-200"
            >
              Get in touch
            </a>
          </div>
          <div className="flex justify-center gap-4 sm:gap-8">
            <Modal>
              <ModalTrigger className="flex-shrink-0 h-full max-w-xs sm:max-w-md md:max-w-xl group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <Image
                className="block w-full"
                    src="/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.52_5368594c.jpg"
                    alt="Project showcase"
                width={500}
                height={500}
              />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-bold text-xl">View Project Details</p>
                  </div>
                </div>
              </ModalTrigger>
              <ModalBody>
                <ModalContent>
                  <h4 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                    E-Commerce Platform Transformation ✨
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400 text-base mb-8">
                    We helped a global retail brand modernize their digital presence with a cutting-edge e-commerce platform, resulting in 300% increase in online sales.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-bold text-lg mb-2">Challenge</h5>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        Outdated technology stack, poor mobile experience, and slow page load times were causing high cart abandonment rates.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-2">Solution</h5>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        Built a modern headless commerce solution using Next.js, integrated with AI-powered product recommendations and personalization.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-2">Results</h5>
                      <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-2">
                        <li>300% increase in online sales</li>
                        <li>50% reduction in page load time</li>
                        <li>85% improvement in mobile conversion rate</li>
                      </ul>
                    </div>
            </div>
                </ModalContent>
                <ModalFooter>
                  <button className="px-6 py-2 bg-teal-900 text-white rounded-md text-sm hover:bg-black transition-colors">
                    View Case Study
                  </button>
                </ModalFooter>
              </ModalBody>
            </Modal>

            <Modal>
              <ModalTrigger className="flex-shrink-0 h-full max-w-xs sm:max-w-md md:max-w-xl group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <Image
                className="block w-full"
                    src="/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.51_adb4b8ea.jpg"
                    alt="Project showcase"
                width={500}
                height={500}
              />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-bold text-xl">View Project Details</p>
                  </div>
                </div>
              </ModalTrigger>
              <ModalBody>
                <ModalContent>
                  <h4 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                    AI-Powered Healthcare Platform 🏥
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400 text-base mb-8">
                    Developed an intelligent healthcare management system that streamlined patient care and reduced administrative burden by 60%.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-bold text-lg mb-2">Challenge</h5>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        Manual processes, fragmented systems, and difficulty coordinating care across multiple departments.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-2">Solution</h5>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        Created a unified platform with AI-powered scheduling, automated workflows, and real-time patient monitoring dashboards.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-2">Results</h5>
                      <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-2">
                        <li>60% reduction in administrative time</li>
                        <li>40% improvement in patient satisfaction</li>
                        <li>99.9% system uptime achieved</li>
                      </ul>
                    </div>
            </div>
                </ModalContent>
                <ModalFooter>
                  <button className="px-6 py-2 bg-teal-900 text-white rounded-md text-sm hover:bg-black transition-colors">
                    View Case Study
                  </button>
                </ModalFooter>
              </ModalBody>
            </Modal>

            <Modal>
              <ModalTrigger className="flex-shrink-0 h-full max-w-xs sm:max-w-md md:max-w-xl group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <Image
                className="block w-full"
                    src="/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.51_b4feb97b.jpg"
                    alt="Project showcase"
                width={500}
                height={500}
              />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-bold text-xl">View Project Details</p>
                  </div>
                </div>
              </ModalTrigger>
              <ModalBody>
                <ModalContent>
                  <h4 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                    FinTech Mobile Banking App 💳
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400 text-base mb-8">
                    Built a secure, user-friendly mobile banking application that attracted 100,000+ users in the first 6 months.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-bold text-lg mb-2">Challenge</h5>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        Creating a mobile-first banking experience that balances security with ease of use, while meeting strict regulatory requirements.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-2">Solution</h5>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        Designed and developed a React Native app with biometric authentication, real-time fraud detection, and instant payment processing.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-2">Results</h5>
                      <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-2">
                        <li>100,000+ users in first 6 months</li>
                        <li>4.8/5 star rating on app stores</li>
                        <li>Zero security breaches since launch</li>
                      </ul>
                    </div>
            </div>
                </ModalContent>
                <ModalFooter>
                  <button className="px-6 py-2 bg-teal-900 text-white rounded-md text-sm hover:bg-black transition-colors">
                    View Case Study
                  </button>
                </ModalFooter>
              </ModalBody>
            </Modal>

            <Modal>
              <ModalTrigger className="hidden md:block flex-shrink-0 h-full max-w-md md:max-w-xl group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <Image
                className="block w-full"
                    src="/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.51_eb204cf8.jpg"
                    alt="Project showcase"
                width={500}
                height={500}
              />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-bold text-xl">View Project Details</p>
                  </div>
                </div>
              </ModalTrigger>
              <ModalBody>
                <ModalContent>
                  <h4 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                    SaaS Analytics Dashboard 📊
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400 text-base mb-8">
                    Created a comprehensive analytics platform that helps businesses make data-driven decisions with real-time insights.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-bold text-lg mb-2">Challenge</h5>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        Companies struggled to make sense of data scattered across multiple platforms and tools.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-2">Solution</h5>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        Built a unified dashboard with AI-powered insights, customizable reports, and seamless third-party integrations.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-2">Results</h5>
                      <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-2">
                        <li>500+ enterprise customers</li>
                        <li>70% faster decision-making process</li>
                        <li>$2M ARR in first year</li>
                      </ul>
            </div>
            </div>
                </ModalContent>
                <ModalFooter>
                  <button className="px-6 py-2 bg-teal-900 text-white rounded-md text-sm hover:bg-black transition-colors">
                    View Case Study
                  </button>
                </ModalFooter>
              </ModalBody>
            </Modal>
            </div>
          </div>
        </div>
      </section>
      <section className="p-4 bg-white">
        <div className="relative pt-16 pb-24 px-5 xs:px-8 xl:px-12 rounded-3xl overflow-hidden">
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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-sm mb-8">
              Clever, creative, collaborative.
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              What is Peoples Group in a nutshell? Individually, we're software specialists, design visionaries and product experts. Together, we're a group of competent folks solving complex matters.
            </p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-4 bg-white">
        <div className="relative pt-16 pb-24 px-5 xs:px-8 xl:px-12 rounded-3xl overflow-hidden">
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
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6">Our Core Values</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hover over each card to experience the glare effect
              </p>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <GlareCard className="border border-black/[0.2] dark:border-white/[0.2]">
              <div className="flex flex-col items-start p-8 h-[30rem]">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-4xl font-bold text-white">1%</span>
          </div>
                <h3 className="text-2xl font-bold mb-4">Be 1% better every day</h3>
                <p className="text-gray-700 leading-relaxed">
                  We continually reinforce growth mindset values by giving our team opportunities to evolve and move forward with their professional growth day in, day out.
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
                  We don't wait for things to happen. We make things happen. Taking initiative is a major factor in building proactive and accountable teams.
                </p>
              </div>
            </GlareCard>

            <GlareCard className="border border-black/[0.2] dark:border-white/[0.2]">
              <div className="flex flex-col items-start p-8 h-[30rem]">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-4xl">🤝</span>
            </div>
                <h3 className="text-2xl font-bold mb-4">All for one and one for all</h3>
                <p className="text-gray-700 leading-relaxed">
                  We listen, acknowledge, and put people where they play best. Cultivating team spirit as the prime value increases inspiration, work proficiency, and escalates the probability of success.
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
                  We empower strong and transparent relationships with both our clients and employees. Bringing them better work experience is not a suggestion, it's a requirement.
                </p>
              </div>
            </GlareCard>
            </div>
          </div>
        </div>
      </section>
      <section className="p-4 bg-white">
        <div className="relative pt-16 pb-24 px-5 xs:px-8 xl:px-12 rounded-3xl overflow-hidden">
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(254, 226, 226)"
            gradientBackgroundEnd="rgb(254, 202, 202)"
            firstColor="251, 146, 60"
            secondColor="254, 215, 170"
            thirdColor="251, 113, 133"
            fourthColor="252, 165, 165"
            fifthColor="254, 205, 211"
            pointerColor="244, 114, 182"
            size="80%"
            blendingValue="hard-light"
            containerClassName="absolute inset-0"
            className="absolute inset-0"
            interactive={false}
          />
          <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h1 className="font-heading text-6xl mb-6">FAQ</h1>
            <p className="text-gray-700">Here you will find the answers to the frequently asked questions.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <FAQAccordionItem
              question="What services do you offer?"
              answer="We offer Strategy (product discovery, design sprints, user research), Product Design (wireframing, prototyping, UI design), Development (AI-powered engineering with modern tech stacks), and Marketing & Growth (digital marketing and product positioning)."
            />
            <FAQAccordionItem
              question="How do you leverage AI in your development process?"
              answer="We use GitHub Copilot and ChatGPT to accelerate development while maintaining high quality. Our AI-powered engineering approach, combined with the right tech stack for each job, ensures we deliver robust solutions on time and within budget."
            />
            <FAQAccordionItem
              question="What makes your approach different?"
              answer="All software, zero bullshit. We focus on transparency, proactive communication, and delivering what works. Our teams combine strategic thinking with hands-on expertise, and we make things happen rather than waiting for them to happen."
            />
            <FAQAccordionItem
              question="Do you work with startups or enterprises?"
              answer="Both! We work with innovative startups looking to build their first product and established enterprises seeking to modernize their technology stack. Our agile team structure scales to meet the needs of organizations of any size."
            />
            <FAQAccordionItem
              question="How do discovery workshops work?"
              answer="Discovery workshops help us understand your vision and requirements before jumping into design and development. We use techniques like design sprints, user interviews, and product planning to define a clear roadmap from idea to realization."
            />
            <div className="sm:flex py-10 px-5 sm:px-10 bg-orange-50 rounded-2xl">
              <div className="mb-4 sm:mb-0 sm:mr-6">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
                    fill="#BEF264"
                  />
                  <path
                    d="M13.676 15.5617C11.7951 17.8602 10.6666 20.7983 10.6666 24C10.6666 27.2017 11.7951 30.1398 13.6761 32.4383L18.9201 27.1943C18.3372 26.2694 18 25.174 18 24C18 22.8259 18.3372 21.7306 18.92 20.8057L13.676 15.5617Z"
                    fill="#022C22"
                  />
                  <path
                    d="M15.5616 13.6761L20.8056 18.9201C21.7306 18.3372 22.8259 18 24 18C25.174 18 26.2694 18.3372 27.1943 18.9201L32.4383 13.6761C30.1398 11.7951 27.2017 10.6666 24 10.6666C20.7982 10.6666 17.8601 11.7951 15.5616 13.6761Z"
                    fill="#022C22"
                  />
                  <path
                    d="M34.3239 15.5617L29.0799 20.8057C29.6628 21.7307 30 22.8259 30 24C30 25.174 29.6627 26.2693 29.0799 27.1943L34.3238 32.4383C36.2048 30.1398 37.3333 27.2017 37.3333 24C37.3333 20.7983 36.2048 17.8602 34.3239 15.5617Z"
                    fill="#022C22"
                  />
                  <path
                    d="M32.4382 34.3239L27.1942 29.0799C26.2693 29.6628 25.174 30 24 30C22.8259 30 21.7307 29.6628 20.8057 29.0799L15.5617 34.3239C17.8602 36.2048 20.7983 37.3333 24 37.3333C27.2016 37.3333 30.1397 36.2048 32.4382 34.3239Z"
                    fill="#022C22"
                  />
                </svg>
              </div>
              <div>
                <h5 className="text-xl font-medium mb-4">Still have questions?</h5>
                <p className="text-gray-700">
                  <span>For assistance, please visit our </span>
                  <a href="#!" className="inline-block text-black font-medium underline">
                    Contact Us
                  </a>
                  <span> page or call our customer support hotline at </span>
                  <span className="text-black font-medium">(671) 555-0110</span>
                  <span>
                    . Our dedicated team is ready to help you accelerate your digital transformation
                    and achieve your technology goals.
                  </span>
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialSlider />
      <div className="p-4 bg-white">
        <div className="pt-8 pb-8 px-5 xs:px-8 xl:px-12 bg-white rounded-3xl">
          <section>
            <div className="p-4">
              <div className="max-w-xl lg:max-w-5xl mx-auto xl:max-w-none px-5 md:px-12 xl:px-24 py-16 bg-teal-900 rounded-2xl">
                <div className="container mx-auto px-4">
                  <div className="flex flex-wrap items-center -mx-4">
                    <div className="w-full lg:w-2/3 px-4 mb-8 lg:mb-0">
                      <div className="max-w-md xl:max-w-none">
                        <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl tracking-sm text-white mb-6">
                          Ready to Transform Your Business?
                        </h1>
                        <p className="text-lg text-white">
                          Partner with us to unlock the full potential of technology for your organization
                        </p>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-4 lg:text-right">
                      <a
                        href="#!"
                        className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-white border border-cyan-500 hover:border-teal-900 bg-cyan-500 hover:bg-teal-900 rounded-full transition duration-200"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}