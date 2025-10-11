"use client";

import ResizableNavigation from "@/components/ResizableNavigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Blog() {
  return (
    <div className="">
      <ResizableNavigation />
      <div className="p-4 bg-white">
        <section className="relative overflow-hidden pt-24 rounded-3xl">
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
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-tight mb-8">
                Our Blog
              </h1>
              <p className="text-lg text-gray-700">
                Insights, case studies, and best practices from our product design and development teams
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="p-4 bg-white">
        <div className="relative py-12 lg:py-24 rounded-3xl overflow-hidden">
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
          <div className="mb-16">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-2/3 px-4 mb-8 lg:mb-0">
                <Image
                  className="w-full rounded-3xl mb-6"
                  src="/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.52_a5f755af.jpg"
                  alt="Featured Post"
                  width={800}
                  height={500}
                />
                <div className="flex items-center mb-4">
                  <span className="text-sm text-gray-700 mr-4">May 15, 2024</span>
                  <span className="text-sm text-gray-700">5 min read</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl mb-4">
                  The Future of AI in Enterprise Software: Trends to Watch in 2025
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Discover how artificial intelligence is transforming enterprise software development.
                  From predictive analytics to automated testing, we explore the innovations
                  reshaping how businesses build and deploy technology solutions.
                </p>
                <div className="flex items-center mb-6">
                  <Image
                    className="w-12 h-12 rounded-full mr-4"
                    src="/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.51_95252a5b.jpg"
                    alt="Author"
                    width={48}
                    height={48}
                  />
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-gray-700">Senior Technology Analyst</p>
                  </div>
                </div>
                <Link
                  href="#!"
                  className="inline-flex py-3 px-6 items-center justify-center text-sm font-medium text-white border border-teal-900 hover:border-black bg-teal-900 hover:bg-black rounded-full transition duration-200"
                >
                  Read More
                </Link>
              </div>
              <div className="w-full lg:w-1/3 px-4">
                <div className="bg-orange-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-6">Popular Posts</h3>
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-start">
                        <Image
                          className="w-20 h-20 rounded-xl mr-4 flex-shrink-0"
                          src={`/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.52_c7b4ab9e.jpg`}
                          alt={`Post ${i}`}
                          width={80}
                          height={80}
                        />
                        <div>
                          <h4 className="font-medium mb-2 hover:text-teal-700 cursor-pointer">
                            Understanding Cloud Architecture Benefits
                          </h4>
                          <p className="text-sm text-gray-700">May {10 + i}, 2024</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.51_adb4b8ea.jpg",
                title: "How Microservices Architecture is Transforming Enterprise Software",
                excerpt:
                  "Modern application architecture is evolving rapidly with the adoption of microservices and containerization.",
                author: "Michael Chen",
                date: "May 12, 2024",
              },
              {
                image: "/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.51_b4feb97b.jpg",
                title: "Cybersecurity: Modern Threats, Advanced Solutions",
                excerpt:
                  "Exploring how traditional security approaches are being reinvented for the cloud era.",
                author: "Emily Rodriguez",
                date: "May 10, 2024",
              },
              {
                image: "/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.53_02dbe1d4.jpg",
                title: "The Economics of Cloud Migration in 2025",
                excerpt:
                  "Analyzing cost trends and ROI opportunities when moving to cloud infrastructure.",
                author: "David Park",
                date: "May 8, 2024",
              },
              {
                image: "/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.53_e2cdec9d.jpg",
                title: "DevOps: The Key to Continuous Delivery",
                excerpt:
                  "How modern DevOps practices are solving deployment challenges and accelerating release cycles.",
                author: "Lisa Thompson",
                date: "May 5, 2024",
              },
              {
                image: "/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.53_f9406baa.jpg",
                title: "Low-Code Platforms: A Growing Trend",
                excerpt:
                  "Why low-code development tools are making software creation accessible to more people.",
                author: "James Wilson",
                date: "May 3, 2024",
              },
              {
                image: "/fauna-assets/new/WhatsApp Image 2025-10-08 at 18.23.54_92e16c7d.jpg",
                title: "Kubernetes: The Platform of Tomorrow",
                excerpt:
                  "Understanding the potential of container orchestration for scaling modern applications.",
                author: "Rachel Kim",
                date: "May 1, 2024",
              },
            ].map((post, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <Image
                  className="w-full h-48 object-cover"
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={300}
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-sm text-gray-700">{post.date}</span>
                  </div>
                  <h3 className="font-heading text-xl mb-3 hover:text-teal-700 cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-cyan-500 rounded-full mr-2"></div>
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    <Link
                      href="#!"
                      className="text-sm text-teal-900 hover:text-teal-700 font-medium"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="inline-flex py-3 px-8 items-center justify-center text-sm font-medium text-white border border-teal-900 hover:border-black bg-teal-900 hover:bg-black rounded-full transition duration-200">
              Load More Articles
            </button>
          </div>
        </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}


