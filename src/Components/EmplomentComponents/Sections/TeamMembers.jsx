import React from "react";
export const TeamMembers = () => {
  const teamMembers = [
    {
      name: "Musa Khan",
      position: "Managing Director",
      avatar: "👨‍💼",
      speciality: "International Relations",
    },
    {
      name: "Parvez",
      position: "HR Director",
      avatar: "👨‍💼",
      speciality: "Talent Acquisition",
    },
    {
      name: "Fahmi Al-Ayyubi",
      position: "Operations Manager",
      avatar: "👨‍💼",
      speciality: "Process Management",
    },
    {
      name: "Amzad Hossain",
      position: "Client Relations Head",
      avatar: "👨‍💼",
      speciality: "Customer Success",
    },
    {
      name: "Fayez Ahmed",
      position: "Legal Advisor",
      avatar: "👨‍💼",
      speciality: "Visa & Documentation",
    },
  ];

  return (
    <div>
      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f2e89] to-orange-700">
                Team
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#4f2e89] to-orange-700 rounded-full mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Meet our experienced professionals dedicated to making your
              international career dreams come true
            </p>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-red-200 hover:border-red-200"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                {/* Avatar */}
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-[#4f2e89] rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-shadow">
                  {member.avatar}
                </div>

                {/* Info */}
                <h4 className="font-bold text-gray-900 mb-1 group-hover:text-[#4f2e89] transition-colors">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-600 font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-xs text-[#4f2e89] font-medium">
                  {member.speciality}
                </p>

                {/* Hover effect */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-[#4f2e89] rounded-full mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamMembers;
