import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const EduCta = () => {
  return (
    <div>
      {/* Call to Action */}
      <section
        className="py-16 bg-gradient-to-r from-[#4f2e89] to-orange-700"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Begin Your Study Abroad Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let our experts guide you through admissions, scholarships, and
            visas.
          </p>
          <Link to="/education/applynow">
            <button
              className="bg-white text-[#4f2e89] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2 mx-auto"
              data-aos="zoom-in"
            >
              Contact Us <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EduCta;
