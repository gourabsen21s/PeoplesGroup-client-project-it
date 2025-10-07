import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQAccordionItem from "@/components/FAQAccordion";
import TestimonialSlider from "@/components/TestimonialSlider";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div>
        <p className="mb-0 py-3 bg-lime-500 text-center">
          Want to learn how to build templates like this one? Visit{" "}
          <a href="#!">www.pixelrocket.store</a>
        </p>
      </div>
      <div>
        <section className="relative bg-teal-900">
          <Image
            className="absolute top-0 left-0 w-full h-full"
            src="/fauna-assets/headers/bg-waves.png"
            alt=""
            width={1920}
            height={1080}
          />
          <Navigation variant="white" />
          <div className="relative pt-18 pb-24 sm:pb-32 lg:pt-36 lg:pb-62">
            <div className="container mx-auto px-4 relative">
              <div className="max-w-lg xl:max-w-xl mx-auto text-center">
                <h1 className="font-heading text-5xl xs:text-7xl xl:text-8xl tracking-tight text-white mb-8">
                  Transforming Business Through Technology
                </h1>
                <p className="max-w-md xl:max-w-none text-lg text-white opacity-80 mb-10">
                  Our commitment to innovation drives digital transformation for businesses worldwide.
                  Partner with us on a journey towards a future where cutting-edge technology solutions
                  empower your organization to achieve unprecedented growth and efficiency.
                </p>
                <a
                  href="#!"
                  className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200"
                >
                  See our solutions
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-10 md:mb-0">
              <div className="text-center">
                <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">500+</h5>
                <span className="text-base lg:text-lg text-gray-700">
                  Projects Delivered
                </span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-10 md:mb-0">
              <div className="text-center">
                <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">250+</h5>
                <span className="text-base lg:text-lg text-gray-700">
                  Enterprise Clients
                </span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-10 sm:mb-0">
              <div className="text-center">
                <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">10,000+</h5>
                <span className="text-base lg:text-lg text-gray-700">
                  Hours of Consulting
                </span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-4">
              <div className="text-center">
                <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">98%</h5>
                <span className="text-base lg:text-lg text-gray-700">
                  Client Satisfaction Rate
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-4 bg-white">
        <div className="pt-16 pb-24 px-5 xs:px-8 xl:px-12 bg-lime-500 rounded-3xl">
          <div className="container mx-auto px-4">
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
              <h1 className="font-heading text-4xl sm:text-6xl mb-24">Key to digital success</h1>
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
                      <h5 className="text-2xl font-medium mb-3">Cloud Solutions</h5>
                      <p className="mb-6">
                        Modern cloud infrastructure enables businesses to scale efficiently and securely.
                        Our solutions help organizations migrate, optimize, and manage their cloud
                        environments for maximum performance and cost-effectiveness.
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
                      <h5 className="text-2xl font-medium mb-3">Custom Software Development</h5>
                      <p className="mb-6">
                        Tailored software solutions designed specifically for your business needs.
                        Our expert developers build scalable, maintainable applications using modern
                        technologies and best practices.
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
                      <h5 className="text-2xl font-medium mb-3">Cybersecurity</h5>
                      <p className="mb-6">
                        Comprehensive security solutions to protect your digital assets and data.
                        We implement industry-leading security practices, conduct audits, and provide
                        ongoing monitoring to keep your business secure.
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
                      <h5 className="text-2xl font-medium mb-3">Digital Transformation</h5>
                      <p className="mb-6">
                        Strategic consulting to modernize your business processes and technology stack.
                        We help organizations leverage emerging technologies like AI, IoT, and automation
                        to drive innovation and competitive advantage.
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
      <section className="py-12 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-24 text-center">
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl tracking-sm mb-16">
              Our commitment to innovation empowers businesses to thrive in the digital age through transformative technology solutions.
            </h1>
            <a
              href="#!"
              className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
            >
              Get in touch
            </a>
          </div>
          <div className="flex justify-center">
            <div className="flex-shrink-0 h-full max-w-xs sm:max-w-md md:max-w-xl mr-4 sm:mr-8">
              <Image
                className="block w-full"
                src="/fauna-assets/about/about-image2.png"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="flex-shrink-0 h-full max-w-xs sm:max-w-md md:max-w-xl mr-4 sm:mr-8">
              <Image
                className="block w-full"
                src="/fauna-assets/about/about-image3.png"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="flex-shrink-0 h-full max-w-xs sm:max-w-md md:max-w-xl mr-4 sm:mr-8">
              <Image
                className="block w-full"
                src="/fauna-assets/about/about-image4.png"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="flex-shrink-0 h-full max-w-xs sm:max-w-md md:max-w-xl mr-4 sm:mr-8">
              <Image
                className="block w-full"
                src="/fauna-assets/about/about-image2.png"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="hidden md:block sm:flex-shrink-0 h-full max-w-md md:max-w-xl mr-4 sm:mr-8">
              <Image
                className="block w-full"
                src="/fauna-assets/about/about-image3.png"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="hidden md:block sm:flex-shrink-0 h-full max-w-md md:max-w-xl mr-4 sm:mr-8">
              <Image
                className="block w-full"
                src="/fauna-assets/about/about-image4.png"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h1 className="font-heading text-6xl mb-6">FAQ</h1>
            <p className="text-gray-700">Here you will find the answers to the frequently asked questions.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <FAQAccordionItem
              question="What IT services do you offer?"
              answer="We provide comprehensive IT services including cloud infrastructure, custom software development, cybersecurity solutions, digital transformation consulting, DevOps implementation, and ongoing technical support to meet your business needs."
            />
            <FAQAccordionItem
              question="How does cloud migration benefit my business?"
              answer="Cloud migration offers scalability, reduced infrastructure costs, improved disaster recovery, enhanced collaboration, and the ability to access resources from anywhere. We handle the entire migration process to ensure minimal disruption to your operations."
            />
            <FAQAccordionItem
              question="What industries do you specialize in?"
              answer="We serve clients across various industries including finance, healthcare, retail, manufacturing, and technology startups. Our team has deep expertise in developing industry-specific solutions that address unique challenges and regulatory requirements."
            />
            <FAQAccordionItem
              question="What is your approach to cybersecurity?"
              answer="We implement a comprehensive, multi-layered security approach including network security, endpoint protection, regular vulnerability assessments, security training, incident response planning, and compliance management to protect your digital assets."
            />
            <FAQAccordionItem
              question="How long does a typical software development project take?"
              answer="Project timelines vary based on complexity and scope. Simple applications may take 2-3 months, while enterprise solutions can take 6-12 months. We use agile methodologies to deliver incremental value throughout the development process and ensure transparency at every stage."
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
      </section>
      <TestimonialSlider />
      <div>
        <div>
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
                        <p className="text-lg text-white opacity-80">
                          Partner with us to unlock the full potential of technology for your organization
                        </p>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-4 lg:text-right">
                      <a
                        href="#!"
                        className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200"
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
