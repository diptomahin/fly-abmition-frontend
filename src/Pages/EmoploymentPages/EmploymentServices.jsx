import React, { useState } from 'react';
import { 
  Plane, 
  Users, 
  FileText,
  Briefcase,
  GraduationCap,
  Shield,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Building,
  Globe,
  Award,
  Heart,
  Phone,
  Mail,
  MessageCircle,
  Star,
  Target
} from 'lucide-react';
const EmploymentServices = () => {
   const [activeTab, setActiveTab] = useState('employer');
  const [selectedService, setSelectedService] = useState(null);

  const employerServices = [
    {
      icon: <Users className="text-red-600" size={48} />,
      title: "Worker Sourcing",
      description: "Comprehensive recruitment of skilled and semi-skilled workers for international markets",
      features: ["Multi-industry expertise", "Pre-screened candidates", "Bulk recruitment", "Quality assurance"],
      category: "recruitment"
    },
    {
      icon: <Award className="text-yellow-600" size={48} />,
      title: "Skill Test",
      description: "Professional skill assessment and certification for various trade categories",
      features: ["Technical assessments", "Practical evaluations", "Industry standards", "Certification support"],
      category: "assessment"
    },
    {
      icon: <Plane className="text-blue-600" size={48} />,
      title: "Air Ticket",
      description: "Flight booking and travel arrangement services for deployed workers",
      features: ["Best fare rates", "Group bookings", "Flexible scheduling", "Travel insurance"],
      category: "travel"
    },
    {
      icon: <FileText className="text-green-600" size={48} />,
      title: "Visa Processing",
      description: "Complete visa documentation and processing for international deployment",
      features: ["Document preparation", "Embassy liaison", "Fast processing", "Legal compliance"],
      category: "documentation"
    },
    {
      icon: <Shield className="text-purple-600" size={48} />,
      title: "Permit Documentation",
      description: "Work permit and legal documentation assistance for employers",
      features: ["Legal compliance", "Government liaison", "Documentation support", "Permit renewal"],
      category: "legal"
    },
    {
      icon: <GraduationCap className="text-indigo-600" size={48} />,
      title: "Pre-Departure Training",
      description: "Comprehensive training programs for workers before deployment",
      features: ["Cultural orientation", "Safety training", "Language basics", "Work protocols"],
      category: "training"
    },
    {
      icon: <Building className="text-teal-600" size={48} />,
      title: "Travel & Deployment Support",
      description: "End-to-end support for worker travel and deployment logistics",
      features: ["Airport assistance", "Transit support", "Accommodation help", "Orientation support"],
      category: "support"
    },
    {
      icon: <Heart className="text-red-500" size={48} />,
      title: "Post-Deployment Support",
      description: "Ongoing support and assistance after worker deployment",
      features: ["24/7 helpline", "Issue resolution", "Welfare monitoring", "Emergency support"],
      category: "support"
    }
  ];

  const workerServices = [
    {
      icon: <Briefcase className="text-red-600" size={48} />,
      title: "Job Placement",
      description: "International job opportunities across multiple industries and countries",
      features: ["Gulf countries", "European markets", "North America", "Asia-Pacific region"],
      category: "placement"
    },
    {
      icon: <Shield className="text-green-600" size={48} />,
      title: "Work Permit",
      description: "Complete work permit processing and documentation assistance",
      features: ["Legal documentation", "Government processing", "Fast-track options", "Renewal support"],
      category: "documentation"
    },
    {
      icon: <Users className="text-blue-600" size={48} />,
      title: "CV & Interview Preparation",
      description: "Professional resume building and interview coaching services",
      features: ["Resume optimization", "Interview coaching", "Skill highlighting", "Industry formatting"],
      category: "preparation"
    },
    {
      icon: <Heart className="text-purple-600" size={48} />,
      title: "Medical & Legal Assistance",
      description: "Health checkups and legal documentation support",
      features: ["Medical examinations", "Health certificates", "Legal clearances", "Document attestation"],
      category: "medical"
    },
    {
      icon: <MessageCircle className="text-teal-600" size={48} />,
      title: "Embassy Appointment Support",
      description: "Assistance with embassy appointments and visa interviews",
      features: ["Appointment booking", "Interview preparation", "Document review", "Follow-up support"],
      category: "embassy"
    },
    {
      icon: <FileText className="text-indigo-600" size={48} />,
      title: "Visa Processing",
      description: "Complete visa application and processing services",
      features: ["Application filing", "Document preparation", "Status tracking", "Approval support"],
      category: "visa"
    },
    {
      icon: <GraduationCap className="text-orange-600" size={48} />,
      title: "Pre-Departure Training",
      description: "Essential training before traveling for international employment",
      features: ["Cultural orientation", "Language basics", "Work safety", "Communication skills"],
      category: "training"
    },
    {
      icon: <Phone className="text-green-500" size={48} />,
      title: "Post-Arrival Support",
      description: "Ongoing support and assistance after reaching destination country",
      features: ["Settlement support", "Issue resolution", "Career guidance", "Emergency assistance"],
      category: "support"
    }
  ];

  const currentServices = activeTab === 'employer' ? employerServices : workerServices;

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
              At FlyAmbition, we provide complete solutions for students, skilled workers, and employers — from visa processing and job placement to recruitment and training. Whether it's pursuing international career opportunities, securing the right job, or connecting with top talent, we make the journey simple, trusted, and successful.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white/10 to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">SERVICES</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
              Comprehensive solutions tailored for both employers seeking skilled workforce and workers pursuing international career opportunities
            </p>
          </div>

          {/* Service Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-xl p-2 flex">
              <button
                onClick={() => setActiveTab('employer')}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  activeTab === 'employer'
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-red-600'
                }`}
              >
                EMPLOYER
              </button>
              <button
                onClick={() => setActiveTab('worker')}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  activeTab === 'worker'
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-red-600'
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
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center group-hover:text-red-600 transition-colors">
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
                  <ArrowRight className="text-red-600 mx-auto" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">Work</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures smooth and efficient service delivery from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Initial assessment and requirement analysis", icon: <MessageCircle /> },
              { step: "02", title: "Documentation", desc: "Complete paperwork and legal compliance", icon: <FileText /> },
              { step: "03", title: "Processing", desc: "Efficient handling and coordination", icon: <Target /> },
              { step: "04", title: "Success", desc: "Successful placement and ongoing support", icon: <Star /> }
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
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
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">FlyAmbition</span>?
              </h2>
              
              <div className="space-y-6">
                {[
                  { icon: <Shield />, title: "Licensed & Certified", desc: "Fully licensed consultancy with government approvals" },
                  { icon: <Users />, title: "Experienced Team", desc: "10+ years of experience in international recruitment" },
                  { icon: <Globe />, title: "Global Network", desc: "Strong partnerships with employers in 25+ countries" },
                  { icon: <CheckCircle />, title: "Success Rate", desc: "98% successful placement rate with ongoing support" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8 text-center">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "5000+", label: "Workers Placed" },
                  { number: "200+", label: "Partner Companies" },
                  { number: "25+", label: "Countries" },
                  { number: "98%", label: "Success Rate" }
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
            Let our expert team guide you through your international career journey
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
              
              <button className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmploymentServices;
