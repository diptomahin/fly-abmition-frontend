import React from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const EducationContact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 pt-10">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-[#4f2e89] via-purple-800 to-orange-700 flex items-center">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Get in touch with FlyAmbition. We’re here to guide you through your
            study abroad journey with expert advice and personalized support.
          </p>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Have questions about admissions, visas, or our services? Reach out
              to us and our team will respond promptly to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-[#4f2e89] rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Office Address
                  </h3>
                  <p className="text-gray-600">
                    123 FlyAmbition St, Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-[#4f2e89] rounded-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone Number</h3>
                  <p className="text-gray-600">+880 1234 567 890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-[#4f2e89] rounded-xl">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email Address</h3>
                  <p className="text-gray-600">info@FlyAmbition.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4f2e89]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4f2e89]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+880 1234 567 890"
                    className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4f2e89]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4f2e89]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4f2e89]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#4f2e89] text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationContact;
