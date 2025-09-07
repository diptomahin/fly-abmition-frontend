import React, { useState } from "react";
import {
  GraduationCap,
  Book,
  Shield,
  Users,
  Award,
  Globe,
  Heart,
  Phone,
  MessageCircle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const EducationServiceComponent = () => {
  const [activeTab, setActiveTab] = useState("student");
  const [selectedService, setSelectedService] = useState(null);

  // Services for students
  const studentServices = [
    {
      icon: <GraduationCap className="text-[#4f2e89]" size={48} />,
      title: "University Admission",
      description: "Guidance and application support for global universities",
      features: [
        "Shortlist universities",
        "Application review",
        "Scholarship guidance",
        "Admission tracking",
      ],
      category: "admission",
    },
    {
      icon: <Book className="text-green-600" size={48} />,
      title: "Test Preparation",
      description: "Coaching for IELTS, TOEFL, GRE, and other standardized tests",
      features: [
        "Practice tests",
        "Study material",
        "Expert coaching",
        "Performance tracking",
      ],
      category: "test-prep",
    },
    {
      icon: <Shield className="text-purple-600" size={48} />,
      title: "Visa Assistance",
      description: "Complete guidance for student visa application and approvals",
      features: [
        "Document preparation",
        "Embassy liaison",
        "Fast-track options",
        "Legal compliance",
      ],
      category: "visa",
    },
    {
      icon: <Globe className="text-teal-600" size={48} />,
      title: "Pre-Departure Orientation",
      description: "Prepare students for studying abroad with guidance and support",
      features: [
        "Cultural orientation",
        "Accommodation advice",
        "Travel tips",
        "Safety guidelines",
      ],
      category: "orientation",
    },
    {
      icon: <Heart className="text-red-500" size={48} />,
      title: "Post-Arrival Support",
      description: "Assistance after arrival for smooth adjustment",
      features: [
        "University enrollment support",
        "Local guidance",
        "24/7 helpdesk",
        "Emergency assistance",
      ],
      category: "support",
    },
  ];

  // Services for universities
  const universityServices = [
    {
      icon: <Users className="text-[#4f2e89]" size={48} />,
      title: "Student Recruitment",
      description: "Attract and enroll students globally",
      features: [
        "Marketing support",
        "Application management",
        "Global outreach",
        "Lead tracking",
      ],
      category: "recruitment",
    },
    {
      icon: <Award className="text-yellow-600" size={48} />,
      title: "Accreditation Support",
      description: "Help with compliance and quality assurance",
      features: [
        "Documentation guidance",
        "Process advisory",
        "Standards compliance",
        "Certification assistance",
      ],
      category: "accreditation",
    },
    {
      icon: <Globe className="text-teal-600" size={48} />,
      title: "Global Partnerships",
      description: "Build international collaborations and exchange programs",
      features: [
        "Partner institutions",
        "Exchange programs",
        "Research collaborations",
        "Student mobility",
      ],
      category: "partnership",
    },
    {
      icon: <Shield className="text-purple-600" size={48} />,
      title: "Visa & Immigration Guidance",
      description: "Support international students with visa and compliance",
      features: [
        "Legal documentation",
        "Application assistance",
        "Policy advisory",
        "Student support",
      ],
      category: "compliance",
    },
  ];

  const currentServices = activeTab === "student" ? studentServices : universityServices;

  return (
    <div>
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              OUR{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f2e89] to-orange-700">
                SERVICES
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#4f2e89] to-orange-700 rounded-full mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
              Comprehensive solutions tailored for students and universities to achieve international success
            </p>
          </div>

          {/* Service Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-xl p-2 flex">
              <button
                onClick={() => setActiveTab("student")}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  activeTab === "student"
                    ? "bg-[#4f2e89] text-white shadow-lg"
                    : "text-gray-600 hover:text-[#4f2e89]"
                }`}
              >
                STUDENT
              </button>
              <button
                onClick={() => setActiveTab("university")}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  activeTab === "university"
                    ? "bg-[#4f2e89] text-white shadow-lg"
                    : "text-gray-600 hover:text-[#4f2e89]"
                }`}
              >
                UNIVERSITY
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-red-200 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* Icon */}
                <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-red-50 transition-colors mx-auto">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center group-hover:text-[#4f2e89] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center mb-4">
                  {service.description}
                </p>

                {/* Features Preview */}
                <div className="space-y-2">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={14} />
                      <span className="text-xs text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Arrow */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                  <ArrowRight className="text-[#4f2e89] mx-auto" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center">
                    {selectedService.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                    <p className="text-gray-600 capitalize">{selectedService.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{selectedService.description}</p>

              <h4 className="font-bold text-gray-900 mb-4">Key Features:</h4>
              <div className="space-y-3 mb-6">
                {selectedService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-[#4f2e89] text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationServiceComponent;
