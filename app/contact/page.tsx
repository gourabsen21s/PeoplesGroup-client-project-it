"use client";

import ResizableNavigation from "@/components/ResizableNavigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Contact() {
  const [formData, setFormData] = useState({
    buildingType: [] as string[],
    services: [] as string[],
    budget: "",
    fullName: "",
    email: "",
    company: "",
    message: "",
    agreePolicy: false,
  });

  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const toggleBuildingType = (type: string) => {
    setFormData(prev => ({
      ...prev,
      buildingType: prev.buildingType.includes(type)
        ? prev.buildingType.filter(t => t !== type)
        : [...prev.buildingType, type]
    }));
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <ResizableNavigation />
      
      <section className="p-4 bg-white">
        <div className="relative pt-32 pb-20 px-4 rounded-3xl overflow-hidden">
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
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Let's build something beautiful together.
              </h1>
            <p className="text-xl text-gray-600">
              If you're looking for partners to help you create an exceptional digital experience, you've come to the right place.
              </p>
            </div>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">What are you building?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Mobile App", "Website", "Web App", "Talk with us"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => toggleBuildingType(type)}
                    className={`px-6 py-4 rounded-full border-2 transition-all duration-200 font-medium ${
                      formData.buildingType.includes(type)
                        ? "bg-teal-900 text-white border-teal-900"
                        : "bg-white text-gray-900 border-gray-300 hover:border-teal-900"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-lime-50 rounded-3xl p-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-teal-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-1">Kristina Zecevic</h4>
                  <p className="text-gray-600 mb-3">Sales executive</p>
                  <button
                    type="button"
                    className="px-6 py-2 bg-teal-900 text-white rounded-full hover:bg-black transition-colors duration-200 font-medium"
                  >
                    Select available slot
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">What services do you need?</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Product design", "Development", "QA", "Marketing", "Team on Demand"].map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`px-6 py-4 rounded-full border-2 transition-all duration-200 font-medium ${
                      formData.services.includes(service)
                        ? "bg-teal-900 text-white border-teal-900"
                        : "bg-white text-gray-900 border-gray-300 hover:border-teal-900"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Expected budget</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["$10k - $20k", "$20k - $50k", "$50k - $100k", "$100k+"].map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, budget }))}
                    className={`px-6 py-4 rounded-full border-2 transition-all duration-200 font-medium ${
                      formData.budget === budget
                        ? "bg-teal-900 text-white border-teal-900"
                        : "bg-white text-gray-900 border-gray-300 hover:border-teal-900"
                    }`}
                  >
                    {budget}
                  </button>
                ))}
          </div>
      </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Your details</h3>
              <div className="space-y-6">
                <div>
                    <input
                      type="text"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-full focus:outline-none focus:border-teal-900 transition-colors duration-200"
                    />
                  </div>
                <div>
                    <input
                      type="email"
                    placeholder="Your E-mail"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-full focus:outline-none focus:border-teal-900 transition-colors duration-200"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Your Company (optional)"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-full focus:outline-none focus:border-teal-900 transition-colors duration-200"
                    />
                  </div>
                <div>
                    <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      rows={6}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-3xl focus:outline-none focus:border-teal-900 transition-colors duration-200 resize-none"
                  />
                </div>

                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-3xl p-12 text-center transition-all duration-200 ${
                    dragActive ? "border-teal-900 bg-teal-50" : "border-gray-300"
                  }`}
                >
                  <input
                    type="file"
                    multiple
                    id="file-upload"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files) {
                        setUploadedFiles(Array.from(e.target.files));
                      }
                    }}
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <svg className="w-12 h-12 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-gray-600 font-medium">Drag and drop files (optional)</p>
                    <p className="text-sm text-gray-400 mt-2">or click to browse</p>
                  </label>
                  {uploadedFiles.length > 0 && (
                    <div className="mt-4 text-sm text-teal-900">
                      {uploadedFiles.length} file(s) selected
                    </div>
                  )}
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={formData.agreePolicy}
                    onChange={(e) => setFormData(prev => ({ ...prev, agreePolicy: e.target.checked }))}
                    className="mt-1 w-5 h-5 rounded border-gray-300 text-teal-900 focus:ring-teal-900"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    I have read, understood and agree with the privacy and data processing policy. *
                  </label>
                  </div>

                  <button
                    type="submit"
                  className="w-full py-4 bg-teal-900 text-white rounded-full hover:bg-black transition-colors duration-200 font-bold text-lg"
                  >
                  Send message
                  </button>
              </div>
            </div>
                </form>

          <div className="mt-20 text-center">
            <p className="text-gray-600 mb-2">Simply fill out the form above, or email us at</p>
            <a href="mailto:hello@faunaflora.com" className="text-teal-900 font-bold text-lg hover:underline">
              hello@faunaflora.com
            </a>
            <p className="text-gray-600 mt-2">if you prefer.</p>
                    </div>
                    </div>
                  </div>
      </section>

      <section className="p-4 bg-white">
        <div className="relative py-20 rounded-3xl overflow-hidden">
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
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16">Our Offices</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-teal-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
              <h3 className="text-2xl font-bold mb-4">Zagreb</h3>
              <p className="text-gray-600 mb-2">Gradiščanska 24</p>
              <p className="text-gray-600 mb-4">10000, Zagreb, Croatia</p>
              <a href="tel:+385953829188" className="text-teal-900 font-medium hover:underline">
                +385 95 382 9188
              </a>
                    </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-teal-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
              <h3 className="text-2xl font-bold mb-4">New York</h3>
              <p className="text-gray-600 mb-2">500 7th Ave</p>
              <p className="text-gray-600 mb-4">New York, NY 10018, United States</p>
              <a href="tel:+12125551234" className="text-teal-900 font-medium hover:underline">
                +1 (212) 555-1234
              </a>
                    </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-teal-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                  </div>
              <h3 className="text-2xl font-bold mb-4">Belgrade</h3>
              <p className="text-gray-600 mb-2">Požeška 58</p>
              <p className="text-gray-600 mb-4">11000, Belgrade, Serbia</p>
              <a href="tel:+381111234567" className="text-teal-900 font-medium hover:underline">
                +381 11 123 4567
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
