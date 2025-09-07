import React from "react";
import {
  Book,
  Users,
  FileText,
  Shield,
  CheckCircle,
  Globe,
  Phone,
  Mail,
  MessageCircle,
  Star,
  GraduationCap,
} from "lucide-react";

import EducationServiceComponent from "../../Components/EducationComponents/EducationServiceComponent";

const EducationServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 pt-10">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#4f2e89] via-orange-700 to-[#f26b24] overflow-hidden">
        {/* Background Image Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-y-3 animate-pulse"></div>
        </div>

        {/* Book Animation */}
        <div className="absolute top-1/4 left-1/4 animate-pulse delay-1000">
          <Book className="text-white/30 transform rotate-12" size={64} />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-pulse delay-2000">
          <Globe className="text-white/20" size={48} />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Pathway to Global Education
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
              At FlyAmbition, we guide students to pursue their dream education abroad. 
              From counseling and application assistance to visa processing and scholarship guidance, 
              we make studying overseas simple, trusted, and successful.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white/10 to-transparent"></div>
      </section>

      {/* Services Section */}
      <EducationServiceComponent></EducationServiceComponent>

      {/* Process Flow Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f2e89] to-orange-700">
                Assist Students
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our structured process ensures students have a smooth journey from application to enrollment.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Counseling",
                desc: "Personalized guidance based on academic profile",
                icon: <MessageCircle />,
              },
              {
                step: "02",
                title: "Application Assistance",
                desc: "Help with university applications and documentation",
                icon: <FileText />,
              },
              {
                step: "03",
                title: "Visa Support",
                desc: "End-to-end visa application guidance",
                icon: <Globe />,
              },
              {
                step: "04",
                title: "Enrollment Success",
                desc: "Securing admission and preparing for study abroad",
                icon: <GraduationCap />,
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow border-4 border-red-100 group-hover:border-red-200">
                    <div className="text-[#4f2e89] group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#4f2e89] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f2e89] to-orange-700">
                  FlyAmbition
                </span>
                ?
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <Shield />,
                    title: "Licensed & Trusted",
                    desc: "Certified consultancy recognized by international institutions",
                  },
                  {
                    icon: <Users />,
                    title: "Experienced Counselors",
                    desc: "Over 10 years guiding students to global universities",
                  },
                  {
                    icon: <Globe />,
                    title: "Global University Network",
                    desc: "Strong partnerships with top universities worldwide",
                  },
                  {
                    icon: <CheckCircle />,
                    title: "High Success Rate",
                    desc: "95%+ students successfully placed abroad",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-[#4f2e89] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-br from-[#4f2e89] to-orange-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8 text-center">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "3000+", label: "Students Placed" },
                  { number: "150+", label: "Partner Universities" },
                  { number: "30+", label: "Countries" },
                  { number: "95%", label: "Success Rate" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold mb-1">{stat.number}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#4f2e89] to-orange-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Pursue Your Dream Education?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our expert counselors guide you through your global study journey
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

export default EducationServices;
