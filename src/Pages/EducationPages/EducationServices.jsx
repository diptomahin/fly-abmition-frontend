import React, { useEffect } from "react";
import {
  Book,
  FileText,
  Globe,
  MessageCircle,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import EducationServiceComponent from "../../Components/EducationComponents/Sections/EducationServiceComponent";
import EduImpact from "../../Components/EducationComponents/Sections/EduImpact";
import EduCta from "../../Components/EducationComponents/Home/EduCta";
import { Link } from "react-router";

const EducationServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 ">
      {/* Hero Section with Parallax */}
      <section
        className="relative h-[90vh] flex items-center bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80')", // replace with your hero image
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#4f2e89]/80 via-orange-700/70 to-[#f26b24]/80"></div>

        {/* Animated Icons */}
        <div
          className="absolute top-1/4 left-1/4 animate-bounce"
          data-aos="fade-right"
        >
          <Book className="text-white/30 rotate-12" size={64} />
        </div>
        <div
          className="absolute bottom-1/3 right-1/4 animate-bounce delay-500"
          data-aos="fade-left"
        >
          <Globe className="text-white/20" size={48} />
        </div>

        {/* Content */}
        <div className="relative pt-10 z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Pathway to Global Education
            </h1>
            <p className= "text-lg md:text-xl  text-white/90 leading-relaxed max-w-3xl">
              At FlyAmbition, we guide students to pursue their dream education
              abroad. From counseling and application assistance to visa
              processing and scholarship guidance, we make studying overseas
              simple, trusted, and successful.
            </p>
            <Link to={"/education/applynow"}>
            <button
              className="bg-white text-[#4f2e89] px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg flex items-center gap-2 justify-center hover:scale-105 hover:bg-[#4f2e89] hover:text-white duration-300 mt-8"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Get Started <ArrowRight size={20} />
            </button>
            </Link>
          </div>
        </div>
      </section>

      <EducationServiceComponent />

      {/* Process Flow Section */}
      <section
        className="py-20 bg-gradient-to-br from-red-50 to-gray-50"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f2e89] to-orange-700">
                Assist Students
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our structured process ensures students have a smooth journey from
              application to enrollment.
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
              <div
                key={index}
                className="text-center group"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EduImpact />
      <EduCta />
    </div>
  );
};

export default EducationServices;
