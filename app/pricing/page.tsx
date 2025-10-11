"use client";

import ResizableNavigation from "@/components/ResizableNavigation";
import Footer from "@/components/Footer";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Pricing() {
  return (
    <div className="">
      <ResizableNavigation />
      <div className="p-4 bg-white">
        <section className="relative overflow-hidden pt-24 rounded-3xl">
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
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-tight mb-8">
                Pricing Plans
              </h1>
              <p className="text-lg text-gray-700">
                Flexible engagement models to match your product development needs
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="p-4 bg-white">
        <div className="relative py-12 lg:py-24 rounded-3xl overflow-hidden">
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
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">$2,500</span>
                  <span className="text-gray-700">/month</span>
                </div>
                <ul className="mb-8">
                  <li className="mb-3 flex items-start">
                    <svg
                      className="w-6 h-6 text-cyan-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Product strategy workshop</span>
                  </li>
                  <li className="mb-3 flex items-start">
                    <svg
                      className="w-6 h-6 text-cyan-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>UX/UI design & prototyping</span>
                  </li>
                  <li className="mb-3 flex items-start">
                    <svg
                      className="w-6 h-6 text-cyan-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>24/7 technical support</span>
                  </li>
                </ul>
                <a
                  href="#!"
                  className="block w-full text-center py-3 px-6 bg-teal-900 hover:bg-black text-white font-medium rounded-full transition duration-200"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gradient-to-br from-cyan-400 to-teal-500 p-8 rounded-2xl shadow-lg relative">
                <div className="absolute top-0 right-0 bg-teal-900 text-white px-4 py-1 rounded-bl-2xl rounded-tr-2xl text-sm font-medium">
                  Popular
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">$5,000</span>
                  <span className="text-gray-900">/month</span>
                </div>
                <ul className="mb-8">
                  <li className="mb-3 flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-900 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Everything in Starter</span>
                  </li>
                  <li className="mb-3 flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-900 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Full-stack development</span>
                  </li>
                  <li className="mb-3 flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-900 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Marketing & growth support</span>
                  </li>
                  <li className="mb-3 flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-900 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Priority support & SLA</span>
                  </li>
                </ul>
                <a
                  href="#!"
                  className="block w-full text-center py-3 px-6 bg-teal-900 hover:bg-black text-white font-medium rounded-full transition duration-200"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">Custom</span>
                  <span className="text-gray-700"></span>
                </div>
                <ul className="mb-8">
                  <li className="mb-3 flex items-start">
                    <svg
                      className="w-6 h-6 text-cyan-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Everything in Professional</span>
                  </li>
                  <li className="mb-3 flex items-start">
                    <svg
                      className="w-6 h-6 text-cyan-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Dedicated development team</span>
                  </li>
                  <li className="mb-3 flex items-start">
                    <svg
                      className="w-6 h-6 text-cyan-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Product manager & designer</span>
                  </li>
                  <li className="mb-3 flex items-start">
                    <svg
                      className="w-6 h-6 text-cyan-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Custom tech stack & architecture</span>
                  </li>
                </ul>
                <a
                  href="#!"
                  className="block w-full text-center py-3 px-6 bg-teal-900 hover:bg-black text-white font-medium rounded-full transition duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}


