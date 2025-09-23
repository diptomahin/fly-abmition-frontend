import React from "react";
import { CheckCircle } from "lucide-react";
import EduStatistics from "../Sections/EduStatistics";
const EduAbout = () => {
  return (
    <div>
      {/* About Preview Section */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f2e89] to-orange-700">
                FlyAmbition
              </span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are a trusted educational consultancy helping students achieve
              their dreams of studying abroad. With partnerships across 20+
              countries and leading universities, we ensure a smooth process
              from admission to arrival.
            </p>
            <ul className="space-y-4">
              {[
                "Licensed & Certified Consultants",
                "Global University Network",
                "Scholarship & Visa Support",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="bg-gradient-to-br from-[#4f2e89] to-orange-700 rounded-3xl p-8 text-white shadow-lg"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold mb-6">Our Impact</h3>
            <EduStatistics />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EduAbout;
