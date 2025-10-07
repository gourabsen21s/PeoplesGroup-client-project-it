import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
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
                About Us
              </h1>
              <p className="text-lg text-gray-700">
                We are committed to transforming businesses through cutting-edge technology solutions and
                strategic IT consulting services.
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
                <h2 className="font-heading text-4xl sm:text-5xl mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our mission is to accelerate digital transformation for organizations worldwide by
                  providing innovative technology solutions that are scalable, secure, and tailored to specific business needs.
                </p>
                <p className="text-lg text-gray-700">
                  We believe in the power of technology to drive innovation, improve efficiency, and
                  create lasting competitive advantages for businesses of all sizes.
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
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-medium mb-4">Excellence</h3>
                <p className="text-gray-700">
                  We are dedicated to delivering exceptional quality in every project, leveraging best
                  practices and cutting-edge technologies to exceed client expectations.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-medium mb-4">Innovation</h3>
                <p className="text-gray-700">
                  We continuously push the boundaries of what's possible with technology, staying ahead
                  of industry trends and emerging solutions.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-medium mb-4">Partnership</h3>
                <p className="text-gray-700">
                  We build long-term relationships with our clients, working collaboratively to
                  understand their needs and deliver solutions that drive real business value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl mb-6">Our Team</h2>
            <p className="text-lg text-gray-700">
              Meet the passionate individuals driving our mission forward
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                <div className="text-center">
                  <Image
                    className="w-full rounded-2xl mb-4"
                    src={`/fauna-assets/team/team-member-${i}.png`}
                    alt="Team Member"
                    width={300}
                    height={300}
                  />
                  <h4 className="text-xl font-medium mb-1">Team Member {i}</h4>
                  <p className="text-gray-700">Position</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}


