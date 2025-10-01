import React from "react";
import CountUp from "react-countup";
import { Shield, Users, Globe, CheckCircle } from "lucide-react";
const EduImpact = () => {
  return (
    <div>
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div data-aos="fade-right">
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
                  <div
                    key={index}
                    className="flex gap-4"
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                  >
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

            {/* Stats with CountUp */}
            <div
              className="bg-gradient-to-br from-[#4f2e89] to-orange-700 rounded-3xl p-8 text-white"
              data-aos="zoom-in"
            >
              <h3 className="text-2xl font-bold mb-8 text-center">
                Our Impact
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: 3000, label: "Students Placed", suffix: "+" },
                  { number: 150, label: "Partner Universities", suffix: "+" },
                  { number: 30, label: "Countries", suffix: "+" },
                  { number: 95, label: "Success Rate", suffix: "%" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold mb-1">
                      <CountUp
                        end={stat.number}
                        duration={7}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                      {stat.suffix}
                    </div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EduImpact;
