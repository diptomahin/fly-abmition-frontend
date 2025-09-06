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
const EmploymentServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 pt-10">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-red-600 via-red-700 to-red-800 overflow-hidden">
        {/* Background Image Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-y-3 animate-pulse"></div>
        </div>

        {/* Plane Animation */}
        <div className="absolute top-1/4 left-1/4 animate-pulse delay-1000">
          <Plane className="text-white/30 transform rotate-45" size={64} />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-pulse delay-2000">
          <Globe className="text-white/20" size={48} />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Gateway to Global Opportunities
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
              At FlyAmbition, we provide complete solutions for students,
              skilled workers, and employers — from visa processing and job
              placement to recruitment and training. Whether it's pursuing
              international career opportunities, securing the right job, or
              connecting with top talent, we make the journey simple, trusted,
              and successful.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white/10 to-transparent"></div>
      </section>

      {/* Services Section */}
      <ServicesComponent></ServicesComponent>

      {/* Process Flow Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
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
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow border-4 border-red-100 group-hover:border-red-200">
                    <div className="text-red-600 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
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
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
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
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 flex-shrink-0">
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
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 text-white">
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
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Take Flight to Your Dreams?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our expert team guide you through your international career
            journey
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2 justify-center">
              <Phone size={20} />
              Contact Us Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-colors flex items-center gap-2 justify-center">
              <Mail size={20} />
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmploymentServices;
