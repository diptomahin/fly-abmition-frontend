import React from "react";
import { Users, Globe, Shield, Award, Heart, Phone, Mail } from "lucide-react";

const EducationAbout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 pt-10">

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#4f2e89] via-purple-500 to-orange-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-y-3 animate-pulse"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              About FlyAmbition
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
              FlyAmbition is a premier educational consultancy dedicated to helping students achieve their global education dreams. 
              We provide guidance on university selection, application processing, visa assistance, and pre-departure preparation to ensure every student succeeds abroad.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white/10 to-transparent"></div>
      </section>

      {/* Our Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f2e89] to-orange-700">Mission</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                To empower students with the knowledge, guidance, and resources they need to pursue education abroad, opening doors to global opportunities and professional growth.
              </p>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f2e89] to-orange-700">Vision</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted educational consultancy recognized for excellence in student placement, guidance, and support worldwide.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Users className="text-[#4f2e89]" size={48} />, title: "Experienced Counselors", desc: "10+ years guiding students globally" },
                { icon: <Globe className="text-teal-600" size={48} />, title: "Global Network", desc: "Partnerships with 50+ universities worldwide" },
                { icon: <Shield className="text-purple-600" size={48} />, title: "Trusted & Certified", desc: "Licensed consultancy with legal compliance" },
                { icon: <Award className="text-yellow-600" size={48} />, title: "High Success Rate", desc: "95%+ students successfully placed" },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-red-50">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f2e89] to-orange-700">Story</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Founded with a vision to make global education accessible to students, FlyAmbition has helped thousands of learners secure admissions in top universities worldwide. 
            Our dedicated team works closely with students to understand their goals and provide personalized guidance every step of the way.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#4f2e89] to-orange-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Education Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our expert counselors guide you through university selection, application, and pre-departure preparation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#4f2e89] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2 justify-center">
              <Phone size={20} />
              Contact Us Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#4f2e89] transition-colors flex items-center gap-2 justify-center">
              <Mail size={20} />
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationAbout;
