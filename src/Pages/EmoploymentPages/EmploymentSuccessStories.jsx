import React from "react";
import {
  Building,
  Quote,
  Target,
  CheckCircle,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import ClientTestimonials from "../../Components/EmplomentComponents/Sections/ClientTestimonials";
import Statistics from "../../Components/EmplomentComponents/Sections/statistics";
import Hero from "../../Components/EmplomentComponents/Sections/Hero";
import Cta from "../../Components/EmplomentComponents/Sections/Cta";

const EmploymentSuccessStories = () => {
  const successStories = [
    {
      name: "Sarah Martinez",
      role: "Senior Marketing Director",
      company: "Tech Innovation Corp",
      avatar: "SM",
      story:
        "FlyAmbition didn't just help me polish my resume—they completely transformed how I approached my career strategy. The personalized coaching sessions gave me the confidence to negotiate better, think bigger, and position myself as a leader.",
      results: [
        "Promoted to Senior Director within 8 months",
        "165% salary increase",
        "Led a team of 25+ professionals",
        "Secured $2M budget responsibility",
      ],
      location: "Dubai, UAE",
    },
    {
      name: "David Kim",
      role: "Tech Startup Founder",
      company: "InnovateTech Solutions",
      avatar: "DK",
      story:
        "As a software engineer with entrepreneurial dreams, I needed more than technical skills. FlyAmbition's comprehensive program taught me leadership, business strategy, and how to build meaningful professional relationships.",
      results: [
        "Launched successful SaaS startup",
        "Raised $1.2M in seed funding",
        "Built team of 12 employees",
        "Generated $500K ARR in first year",
      ],
      location: "Singapore",
    },
    {
      name: "Elena Popovic",
      role: "Global Operations VP",
      company: "Fortune 500 Manufacturing",
      avatar: "EP",
      story:
        "Moving from Europe to lead operations in North America seemed impossible. FlyAmbition helped me navigate cultural differences, build my network strategically, and present my international experience as a competitive advantage.",
      results: [
        "Secured VP role at Fortune 500 company",
        "Successfully relocated internationally",
        "200% salary increase",
        "Manages operations across 15 countries",
      ],
      location: "Toronto, Canada",
    },
    {
      name: "Michael Johnson",
      role: "Healthcare Innovation Lead",
      company: "MedTech Global",
      avatar: "MJ",
      story:
        "After 15 years as a physician, I wanted to transition into healthcare technology but didn't know where to start. FlyAmbition created a roadmap that leveraged my medical expertise while building the business skills I needed.",
      results: [
        "Transitioned from clinical to tech leadership",
        "Joined leading healthtech company",
        "140% compensation increase",
        "Leading innovation for 50M+ patients",
      ],
      location: "London, UK",
    },
    {
      name: "Aisha Rahman",
      role: "Financial Services Executive",
      company: "Global Investment Bank",
      avatar: "AR",
      story:
        "As a woman in finance, I faced unique challenges in advancing to executive levels. FlyAmbition's coaching went beyond career advice—they helped me develop executive presence, master strategic communication, and build confidence.",
      results: [
        "Promoted to C-suite within 18 months",
        "First female executive in company history",
        "Oversees $500M portfolio",
        "Featured in Forbes '30 Under 30'",
      ],
      location: "New York, USA",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-30">
      {/* Modern Testimonials Slider */}
      <ClientTestimonials />

      {/* Stats Section */}
      <Statistics />

      {/* Success Stories Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#4f2e89]">Success</span> Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the ambitious professionals who partnered with FlyAmbition to
              unlock their potential and achieve extraordinary career growth
            </p>
          </div>

          <div className="space-y-12">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white border-l-2 border-t-2 border-[#4f2e89] rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 overflow-hidden"
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-[#4f2e89] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        {story.avatar}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {story.name}
                        </h3>
                        <p className="text-[#4f2e89] font-semibold text-lg mb-1">
                          {story.role}
                        </p>
                        <p className="text-gray-600 flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          {story.company} • {story.location}
                        </p>
                      </div>

                      <div className="mb-8">
                        <Quote className="w-8 h-8 text-[#4f2e89] mb-4 opacity-40" />
                        <p className="text-gray-700 text-lg italic leading-relaxed">
                          "{story.story}"
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-[#4f2e89]">
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Target className="w-5 h-5 text-[#4f2e89]" />
                          Results Achieved:
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {story.results.map((result, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 hover:translate-x-1 transition-transform"
                            >
                              <CheckCircle className="w-5 h-5 text-[#4f2e89] flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 font-medium">
                                {result}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
     <Cta></Cta>
    </div>
  );
};

export default EmploymentSuccessStories;
