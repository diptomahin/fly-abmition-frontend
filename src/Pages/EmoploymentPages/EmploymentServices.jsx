import React from "react";
import {
  Plane,
  Users,
  FileText,
  Shield,
  CheckCircle,
  Globe,
  Phone,
  Mail,
  MessageCircle,
  Star,
  Target,
} from "lucide-react";
import ServicesComponent from "../../Components/EmplomentComponents/Sections/ServicesComponent";
import Hero from "../../Components/EmplomentComponents/Sections/Hero";
import Cta from "../../Components/EmplomentComponents/Sections/Cta";

const EmploymentServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 pt-30">
      {/* Hero Section */}
    <Hero
      imageUrl="https://i.ibb.co.com/W42HnMg2/three-factory-workers-safety-hats-discussing-manufacture-plan.jpg"
      title="Comprehensive Employment Services"
      subtitle="Your Gateway to Global Opportunities"
    />
      {/* Services Section */}
      <div data-aos="fade-up" data-aos-duration="1200">
        <ServicesComponent />
      </div>

      {/* Process Flow Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f2e89] to-orange-700">
                Work
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures smooth and efficient service
              delivery from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Initial assessment and requirement analysis",
                icon: <MessageCircle />,
              },
              {
                step: "02",
                title: "Documentation",
                desc: "Complete paperwork and legal compliance",
                icon: <FileText />,
              },
              {
                step: "03",
                title: "Processing",
                desc: "Efficient handling and coordination",
                icon: <Target />,
              },
              {
                step: "04",
                title: "Success",
                desc: "Successful placement and ongoing support",
                icon: <Star />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center group"
                data-aos="zoom-in"
                data-aos-delay={index * 200}
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div data-aos="fade-right" data-aos-duration="1200">
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
                    title: "Licensed & Certified",
                    desc: "Fully licensed consultancy with government approvals",
                  },
                  {
                    icon: <Users />,
                    title: "Experienced Team",
                    desc: "10+ years of experience in international recruitment",
                  },
                  {
                    icon: <Globe />,
                    title: "Global Network",
                    desc: "Strong partnerships with employers in 25+ countries",
                  },
                  {
                    icon: <CheckCircle />,
                    title: "Success Rate",
                    desc: "98% successful placement rate with ongoing support",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4" data-aos="fade-up" data-aos-delay={index * 200}>
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-[#4f2e89] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div
              className="bg-gradient-to-br from-[#4f2e89] to-orange-700 rounded-3xl p-8 text-white"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <h3 className="text-2xl font-bold mb-8 text-center">
                Our Impact
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "5000+", label: "Workers Placed" },
                  { number: "200+", label: "Partner Companies" },
                  { number: "25+", label: "Countries" },
                  { number: "98%", label: "Success Rate" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center"
                    data-aos="zoom-in"
                    data-aos-delay={index * 200}
                  >
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
      <Cta></Cta>
    </div>
  );
};

export default EmploymentServices;
