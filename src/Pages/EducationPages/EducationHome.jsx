import React from "react";
import { ArrowRight, GraduationCap, Globe, Users, CheckCircle } from "lucide-react";
import EducationServiceComponent from "../../Components/EducationComponents/EducationServiceComponent";
;

const EducationHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-gradient-to-r from-[#f26b24] via-purple-500 to-purple-800 flex items-center">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Empowering Students for a Global Future
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            FlyAmbition guides you through every step of your study abroad journey —
            from admission and scholarships to visas and settlement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#4f2e89] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2 justify-center">
              Get Started <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#4f2e89] transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
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
          <div className="bg-gradient-to-br from-[#4f2e89] to-orange-700 rounded-3xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Our Impact</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "10,000+", label: "Students Guided" },
                { number: "200+", label: "University Partners" },
                { number: "20+", label: "Countries" },
                { number: "95%", label: "Visa Success Rate" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
    
        <EducationServiceComponent />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            What Our Students Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Aisha Khan",
                feedback:
                  "FlyAmbition helped me secure admission in Canada with a scholarship. The team was supportive throughout.",
              },
              {
                name: "Ravi Patel",
                feedback:
                  "Visa process was smooth and stress-free. I am now pursuing my Masters in Australia thanks to FlyAmbition.",
              },
              {
                name: "Maria Gomez",
                feedback:
                  "Their guidance on choosing the right university in the UK was invaluable. Highly recommended!",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.feedback}"
                </p>
                <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#4f2e89] to-orange-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Begin Your Study Abroad Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let our experts guide you through admissions, scholarships, and visas.
          </p>
          <button className="bg-white text-[#4f2e89] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2 mx-auto">
            Contact Us <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default EducationHome;

