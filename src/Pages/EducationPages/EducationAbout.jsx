import React from "react";
import { Users, Globe, Shield, Award,ArrowRight } from "lucide-react";
import EduAbout from "../../Components/EducationComponents/Home/EduAbout";
import TeamMembers from "../../Components/EmplomentComponents/Sections/TeamMembers";
import EduImpact from "../../Components/EducationComponents/Sections/EduImpact";
import { Link } from "react-router";
import EduCta from "../../Components/EducationComponents/Home/EduCta";

const EducationAbout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      {/* Hero Section with Parallax */}
      <section
        className="relative h-[90vh] flex items-center bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80')", // replace with your image
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#4f2e89]/80 via-purple-600/70 to-orange-800/80"></div>

        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl text-center mx-auto" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              About FlyAmbition
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
              FlyAmbition is a premier educational consultancy dedicated to
              helping students achieve their global education dreams. We provide
              guidance on university selection, application processing, visa
              assistance, and pre-departure preparation to ensure every student
              succeeds abroad.
            </p>
            <Link to={"/education/applynow"}>
              <button
                className="bg-white text-[#4f2e89] px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg flex items-center gap-2 justify-center hover:scale-105 hover:bg-[#4f2e89] hover:text-white duration-300 text-center mt-8 mx-auto"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                Get Started <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision Section */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f2e89] to-orange-700">
                  Mission
                </span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                To empower students with the knowledge, guidance, and resources
                they need to pursue education abroad, opening doors to global
                opportunities and professional growth.
              </p>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f2e89] to-orange-700">
                  Vision
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted educational consultancy recognized for
                excellence in student placement, guidance, and support
                worldwide.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: <Users className="text-[#4f2e89]" size={48} />,
                  title: "Experienced Counselors",
                  desc: "10+ years guiding students globally",
                },
                {
                  icon: <Globe className="text-teal-600" size={48} />,
                  title: "Global Network",
                  desc: "Partnerships with 50+ universities worldwide",
                },
                {
                  icon: <Shield className="text-purple-600" size={48} />,
                  title: "Trusted & Certified",
                  desc: "Licensed consultancy with legal compliance",
                },
                {
                  icon: <Award className="text-yellow-600" size={48} />,
                  title: "High Success Rate",
                  desc: "95%+ students successfully placed",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition-shadow"
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-red-50">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <EduImpact />
      {/* Our Story Section */}
      <section
        className="py-20 bg-gradient-to-br from-red-50 to-gray-50 text-center"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f2e89] to-orange-700">
              Story
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Founded with a vision to make global education accessible to
            students, FlyAmbition has helped thousands of learners secure
            admissions in top universities worldwide. Our dedicated team works
            closely with students to understand their goals and provide
            personalized guidance every step of the way.
          </p>
        </div>
      </section>
      <EduAbout />
      <TeamMembers />
      <EduCta/>
    </div>
  );
};

export default EducationAbout;
