import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="">
      <div>
        <p className="mb-0 py-3 bg-lime-500 text-center">
          Want to learn how to build templates like this one? Visit{" "}
          <a href="#!">www.pixelrocket.store</a>
        </p>
      </div>
      <div>
        <section className="overflow-hidden">
          <Navigation />
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-tight mb-8">
                Contact Us
              </h1>
              <p className="text-lg text-gray-700">
                Get in touch with our team. We're here to help with all your IT consulting and technology needs.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-lg">
                <h2 className="font-heading text-3xl sm:text-4xl mb-6">Send us a message</h2>
                <form>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500"
                      type="text"
                      id="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500"
                      type="email"
                      id="email"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-lime-500"
                      id="message"
                      rows={6}
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-teal-900 hover:bg-black text-white font-medium rounded-full transition duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="bg-orange-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6 text-teal-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-gray-700">contact@techflow.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6 text-teal-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p className="text-gray-700">(671) 555-0110</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6 text-teal-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Address</h4>
                      <p className="text-gray-700">
                        123 Tech Boulevard
                        <br />
                        Innovation City, IC 12345
                      </p>
                    </div>
                  </div>
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


