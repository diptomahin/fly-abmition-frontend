import React, { useState } from "react";
import {
  Plane,
  Users,
  FileText,
  Briefcase,
  GraduationCap,
  Shield,
  CheckCircle,
  ArrowRight,
  Building,
  Award,
  Heart,
  Phone,
  MessageCircle,
} from "lucide-react";
const ServicesComponent = () => {
  const [activeTab, setActiveTab] = useState("worker");
  const [selectedService, setSelectedService] = useState(null);

  const employerServices = [
    {
      icon: <Users className="text-[#4f2e89]" size={48} />,
      title: "Worker Sourcing",
      description:
        "Comprehensive recruitment of skilled and semi-skilled workers for international markets",
      features: [
        "Multi-industry expertise",
        "Pre-screened candidates",
        "Bulk recruitment",
        "Quality assurance",
      ],
      category: "recruitment",
    },
    {
      icon: <Award className="text-yellow-600" size={48} />,
      title: "Skill Test",
      description:
        "Professional skill assessment and certification for various trade categories",
      features: [
        "Technical assessments",
        "Practical evaluations",
        "Industry standards",
        "Certification support",
      ],
      category: "assessment",
    },
    {
      icon: <Plane className="text-blue-600" size={48} />,
      title: "Air Ticket",
      description:
        "Flight booking and travel arrangement services for deployed workers",
      features: [
        "Best fare rates",
        "Group bookings",
        "Flexible scheduling",
        "Travel insurance",
      ],
      category: "travel",
    },
    {
      icon: <FileText className="text-green-600" size={48} />,
      title: "Visa Processing",
      description:
        "Complete visa documentation and processing for international deployment",
      features: [
        "Document preparation",
        "Embassy liaison",
        "Fast processing",
        "Legal compliance",
      ],
      category: "documentation",
    },
    {
      icon: <Shield className="text-purple-600" size={48} />,
      title: "Permit Documentation",
      description:
        "Work permit and legal documentation assistance for employers",
      features: [
        "Legal compliance",
        "Government liaison",
        "Documentation support",
        "Permit renewal",
      ],
      category: "legal",
    },
    {
      icon: <GraduationCap className="text-indigo-600" size={48} />,
      title: "Pre-Departure Training",
      description:
        "Comprehensive training programs for workers before deployment",
      features: [
        "Cultural orientation",
        "Safety training",
        "Language basics",
        "Work protocols",
      ],
      category: "training",
    },
    {
      icon: <Building className="text-teal-600" size={48} />,
      title: "Travel & Deployment Support",
      description:
        "End-to-end support for worker travel and deployment logistics",
      features: [
        "Airport assistance",
        "Transit support",
        "Accommodation help",
        "Orientation support",
      ],
      category: "support",
    },
    {
      icon: <Heart className="text-red-500" size={48} />,
      title: "Post-Deployment Support",
      description: "Ongoing support and assistance after worker deployment",
      features: [
        "24/7 helpline",
        "Issue resolution",
        "Welfare monitoring",
        "Emergency support",
      ],
      category: "support",
    },
  ];

  const workerServices = [
    {
      icon: <Briefcase className="text-[#4f2e89]" size={48} />,
      title: "Job Placement",
      description:
        "International job opportunities across multiple industries and countries",
      features: [
        "Gulf countries",
        "European markets",
        "North America",
        "Asia-Pacific region",
      ],
      category: "placement",
    },
    {
      icon: <Shield className="text-green-600" size={48} />,
      title: "Work Permit",
      description:
        "Complete work permit processing and documentation assistance",
      features: [
        "Legal documentation",
        "Government processing",
        "Fast-track options",
        "Renewal support",
      ],
      category: "documentation",
    },
    {
      icon: <Users className="text-blue-600" size={48} />,
      title: "CV & Interview Preparation",
      description:
        "Professional resume building and interview coaching services",
      features: [
        "Resume optimization",
        "Interview coaching",
        "Skill highlighting",
        "Industry formatting",
      ],
      category: "preparation",
    },
    {
      icon: <Heart className="text-purple-600" size={48} />,
      title: "Medical & Legal Assistance",
      description: "Health checkups and legal documentation support",
      features: [
        "Medical examinations",
        "Health certificates",
        "Legal clearances",
        "Document attestation",
      ],
      category: "medical",
    },
    {
      icon: <MessageCircle className="text-teal-600" size={48} />,
      title: "Embassy Appointment Support",
      description: "Assistance with embassy appointments and visa interviews",
      features: [
        "Appointment booking",
        "Interview preparation",
        "Document review",
        "Follow-up support",
      ],
      category: "embassy",
    },
    {
      icon: <FileText className="text-indigo-600" size={48} />,
      title: "Visa Processing",
      description: "Complete visa application and processing services",
      features: [
        "Application filing",
        "Document preparation",
        "Status tracking",
        "Approval support",
      ],
      category: "visa",
    },
    {
      icon: <GraduationCap className="text-orange-600" size={48} />,
      title: "Pre-Departure Training",
      description:
        "Essential training before traveling for international employment",
      features: [
        "Cultural orientation",
        "Language basics",
        "Work safety",
        "Communication skills",
      ],
      category: "training",
    },
    {
      icon: <Phone className="text-green-500" size={48} />,
      title: "Post-Arrival Support",
      description:
        "Ongoing support and assistance after reaching destination country",
      features: [
        "Settlement support",
        "Issue resolution",
        "Career guidance",
        "Emergency assistance",
      ],
      category: "support",
    },
  ];

  const currentServices = activeTab === "employer" ? employerServices : workerServices;
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
              Comprehensive solutions tailored for both employers seeking
              skilled workforce and workers pursuing international career
              opportunities
            </p>
          </div>

          {/* Service Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-xl p-2 flex">
              <button
                onClick={() => setActiveTab("employer")}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  activeTab === "employer"
                    ? "bg-[#4f2e89] text-white shadow-lg"
                    : "text-gray-600 hover:text-[#4f2e89]"
                }`}
              >
                EMPLOYER
              </button>
              <button
                onClick={() => setActiveTab("worker")}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  activeTab === "worker"
                    ? "bg-[#4f2e89] text-white shadow-lg"
                    : "text-gray-600 hover:text-[#4f2e89]"
                }`}
              >
                WORKER
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
                      <CheckCircle
                        className="text-green-500 flex-shrink-0"
                        size={14}
                      />
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedService(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
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
export default ServicesComponent;
