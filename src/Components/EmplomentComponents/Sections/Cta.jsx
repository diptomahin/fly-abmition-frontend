import React from "react";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router";
const Cta = () => {
  return (
    <section
      className="py-16 bg-gradient-to-r from-[#4f2e89] to-orange-700"
      data-aos="zoom-in-up"
      data-aos-duration="1200"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Take Flight to Your Dreams?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Let our expert team guide you through your international career
          journey
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Link to="/employment/contact">
            <button className="bg-white text-[#4f2e89] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2 justify-center">
              <Phone size={20} />
              Contact Us Now
            </button>
          </Link>
          <Link to="/employment/applynow">
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#4f2e89] transition-colors flex items-center gap-2 justify-center">
            <Mail size={20} />
            Get Free Consultation
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
