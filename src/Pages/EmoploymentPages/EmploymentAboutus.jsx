import React from "react";
import {
  Users,
  Target,
  Eye,
  GraduationCap,
  ArrowRight,
  Building,
  Shield,
} from "lucide-react";
import { TeamMembers } from "../../Components/EmplomentComponents/Sections/TeamMembers";
import Statistics from "../../Components/EmplomentComponents/Sections/statistics";
import Hero from "../../Components/EmplomentComponents/Sections/Hero";
import Cta from "../../Components/EmplomentComponents/Sections/Cta";

const EmploymentAboutus = () => {
  const services = [
    {
      icon: <Users className="text-white" size={24} />,
      title: "Manpower Supply",
      description:
        "Skilled and semi-skilled workforce for international markets",
    },
    {
      icon: <GraduationCap className="text-white" size={24} />,
      title: "Employment Consulting",
      description: "Expert guidance for overseas employment opportunities",
    },
    {
      icon: <Shield className="text-white" size={24} />,
      title: "Visa Processing",
      description: "Complete documentation and visa assistance services",
    },
    {
      icon: <Building className="text-white" size={24} />,
      title: "Corporate Solutions",
      description:
        "Customized recruitment solutions for international companies",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 pt-30">
      {/* Hero Section with Skyline */}
      {/* <section 
        className="relative h-96 bg-gradient-to-r from-[#4f2e89] via-[#f26b24] to-purple-800 overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        Hero Content
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center justify-center">
          <div className="text-center" data-aos="zoom-in" data-aos-delay="400">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Your Global Career Awaits
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Discover Who <span className="text-yellow-300 font-semibold">FlyAmbition</span> Is
            </p>
          </div>
        </div>
      </section> */}
      <Hero
        imageUrl="/images/employment1.webp"
        title="Your Global Career Awaits"
        subtitle="Discover Who FlyAmbition Is"
      />
      {/* Company Logo and Introduction */}
      <section
        className="py-20 bg-white"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="container mx-auto px-6">
          <div className="items-center">
            {/* Logo and Brand */}
            <div className="text-center mx-auto">
              <div
                className="mx-auto text-5xl inline-flex items-center mb-8 text-center"
                data-aos="zoom-in"
              >
                <div className="bg-[#4f2e89] text-white px-4 py-2 rounded-l font-bold text-2xl">
                  FLY
                </div>
                <div className="bg-white text-[#4f2e89] px-4 py-2 border-2 border-[#4f2e89] rounded-r font-bold text-2xl border-l-0">
                  Ambition
                </div>
              </div>
              <div
                className="text-gray-600 font-medium mb-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Manpower Supply & Foreign Employment Consulting
              </div>
              {/* Stats */}
              <div data-aos="fade-up" data-aos-delay="400">
                <Statistics />
              </div>
            </div>

            {/* Content */}
            <div
              className="my-7 rounded-2xl shadow-2xl p-5 border-y-[#4f2e89] border-y-4 bg-white"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                Who we{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f2e89] to-orange-700">
                  are
                </span>
              </h2>

              <div
                className="space-y-6 text-gray-700 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <p>
                  FlyAmbition is a leading manpower supply and foreign
                  employment consulting firm based in Bangladesh. We specialize
                  in connecting skilled professionals and workers with premier
                  international opportunities across the Middle East, Europe,
                  North America, and Asia-Pacific regions.
                </p>
                <p>
                  Our comprehensive services include manpower recruitment,
                  employment consulting, visa processing, documentation
                  assistance, pre-departure training, and ongoing support for
                  both candidates and international employers seeking reliable
                  workforce solutions.
                </p>
                <p>
                  With our commitment to excellence, transparency, and ethical
                  practices, FlyAmbition has established itself as a trusted
                  bridge between talent and opportunity, ensuring successful
                  career transformations and business growth for our global
                  clientele.
                </p>
              </div>

              {/* Services Icons */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors"
                    data-aos="zoom-in"
                    data-aos-delay={200 * (index + 1)}
                  >
                    <div className="w-10 h-10 bg-[#4f2e89] rounded-lg flex items-center justify-center">
                      {service.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 text-sm">
                        {service.title}
                      </div>
                      <div className="text-xs text-gray-600">
                        {service.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div
                className="mt-8 text-center"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <button className="group bg-gradient-to-r from-[#4f2e89] to-orange-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
                  Start Your Journey
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div
              className="bg-gradient-to-br from-[#4f2e89] to-orange-700 rounded-3xl p-8 text-white shadow-2xl"
              data-aos="fade-right"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="leading-relaxed">
                To provide world-class manpower supply and employment consulting
                services that bridge the gap between talented professionals and
                international career opportunities. We are committed to ethical
                recruitment practices, ensuring transparency, reliability, and
                mutual success for both candidates and employers while fostering
                global workforce mobility.
              </p>
            </div>

            {/* Vision */}
            <div
              className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl p-8 text-white shadow-2xl"
              data-aos="fade-left"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Eye size={24} />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="leading-relaxed">
                To become the most trusted and preferred manpower consulting
                firm globally, recognized for our excellence in connecting
                dreams with destinations. We envision a world where geographic
                boundaries don't limit career aspirations, and we serve as the
                catalyst for transforming professional lives across continents.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div data-aos="fade-up" data-aos-duration="1200">
        <TeamMembers />
      </div>

      {/* Call to Action */}
      <Cta />
    </div>
  );
};

export default EmploymentAboutus;
