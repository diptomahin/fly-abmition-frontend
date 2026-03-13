import React, { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react";
import ContactForm from "../../Components/EmplomentComponents/Forms/ContactForm";
import Statistics from "../../Components/EmplomentComponents/Sections/statistics";
import Hero from "../../Components/EmplomentComponents/Sections/Hero";
import Cta from "../../Components/EmplomentComponents/Sections/Cta";

const EmploymentContactUs = () => {
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 pt-30">
      {/* Hero Section */}
      {/* <section 
        className="bg-gradient-to-r from-[#4f2e89] to-orange-800 text-white py-20"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center" data-aos="zoom-in" data-aos-delay="300">
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Ready to take flight to your global career? Let's discuss your international opportunities and make your dreams a reality.
            </p>
          </div>
        </div>
      </section> */}
      <Hero
        imageUrl="/images/employment2.webp"
        title="Get in Touch"
        subtitle="Ready to take flight to your global career? Let's discuss your international opportunities and make your dreams a reality."
      />
      {/* Contact Information Cards */}
      <section className="py-16 my-5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <a href="https://wa.me/8801616841627" className="h-full">
              <div
                className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300 h-full flex flex-col"
                data-aos="fade-right"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-[#4f2e89]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-2">
                  Speak directly with our experts
                </p>
                <p className="text-[#4f2e89] font-semibold">
                  01616-841627
                  <br />
                  01616-841628
                </p>
              </div>
            </a>

            <a href="mailto:flyambitionbd@gmail.com" className="h-full">
              <div
                className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300 h-full flex flex-col"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-[#4f2e89]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-2">Get detailed information</p>
                <p className="text-[#4f2e89] font-semibold">
                  flyambitionbd@gmail.com
                  <br />
                  hr@flyambitionbd.com
                  <br />
                  info@flyambitionbd.com
                </p>
              </div>
            </a>

            <button
              onClick={() => setShowLocationPopup(!showLocationPopup)}
              className="h-full w-full"
            >
              <div
                className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300 h-full flex flex-col cursor-pointer"
                data-aos="fade-left"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-[#4f2e89]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-2">Meet us in person</p>
                <p className="text-[#4f2e89] font-semibold">
                  Click to see our offices
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div data-aos="fade-up" data-aos-duration="1200">
        <ContactForm />
      </div>

      {/* Quick Stats */}
      {/* <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
              <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#4f2e89] mb-2">5000+</div>
                <div className="text-gray-600 font-medium">Workers Placed</div>
              </div>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="200">
              <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#4f2e89] mb-2">200+</div>
                <div className="text-gray-600 font-medium">Partner Companies</div>
              </div>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="300">
              <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#4f2e89] mb-2">25+</div>
                <div className="text-gray-600 font-medium">Countries</div>
              </div>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="400">
              <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#4f2e89] mb-2">98%</div>
                <div className="text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Statistics></Statistics>
      {/* Response Time Section */}
      <section
        className="py-12 bg-[#4f2e89]"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div
            className="flex items-center justify-center mb-4"
            data-aos="zoom-in"
          >
            <Clock className="w-8 h-8 text-white mr-3" />
            <h3 className="text-2xl font-bold text-white">
              Quick Response Guarantee
            </h3>
          </div>
          <p className="text-red-100 text-lg">
            Our expert consultants will respond to your inquiry within 2-4 hours
            during business hours
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <Cta></Cta>

      {/* Location Popup Modal */}
      {showLocationPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-lg p-8 max-w-2xl w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-white flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-[#4f2e89]" />
                Our Offices
              </h2>
              <button
                onClick={() => setShowLocationPopup(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              {/* Bangladesh Office */}
              <div className="border border-gray-700 rounded-lg p-6 hover:border-[#4f2e89] transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Bangladesh Office</h3>
                <p className="text-gray-300 leading-relaxed">
                  H-1, Level 2, Binimoy Complex, Dhaka- Mymensingh Highway, Auch Para, Nishat Nagar- 1711, Tongi West, Gazipur.
                </p>
              </div>

              {/* China Office */}
              <div className="border border-gray-700 rounded-lg p-6 hover:border-[#4f2e89] transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">China Office</h3>
                <p className="text-gray-300 leading-relaxed">
                  22F, Building B, World Trade Plaza, No. 9, Fuhong Road, Funan Community, Futian Subdistrict, Shenzhen City, China.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowLocationPopup(false)}
              className="mt-6 w-full bg-[#4f2e89] hover:bg-[#6b3da8] text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmploymentContactUs;
