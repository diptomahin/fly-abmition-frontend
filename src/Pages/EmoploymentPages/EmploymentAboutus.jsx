import React  from 'react';
import { 
  Globe, 
  Users, 
  Target, 
  Eye, 
  Award,
  MapPin,
  GraduationCap,
  Briefcase,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Plane,
  Building,
  TrendingUp,
  Shield,
  CheckCircle
} from 'lucide-react';
import { TeamMembers } from '../../Components/EmplomentComponents/Sections/TeamMembers';

const EmploymentAboutus = () => {




  const services = [
    {
      icon: <Users className="text-white" size={24} />,
      title: "Manpower Supply",
      description: "Skilled and semi-skilled workforce for international markets"
    },
    {
      icon: <GraduationCap className="text-white" size={24} />,
      title: "Employment Consulting",
      description: "Expert guidance for overseas employment opportunities"
    },
    {
      icon: <Shield className="text-white" size={24} />,
      title: "Visa Processing",
      description: "Complete documentation and visa assistance services"
    },
    {
      icon: <Building className="text-white" size={24} />,
      title: "Corporate Solutions",
      description: "Customized recruitment solutions for international companies"
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 pt-30">
      {/* Hero Section with Skyline */}
      <section className="relative h-96 bg-gradient-to-r from-[#4f2e89] via-[#f26b24] to-purple-800 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-y-3 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Flying planes animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 animate-pulse">
            <Plane className="text-white/20 transform rotate-45" size={32} />
          </div>
          <div className="absolute top-1/2 right-1/4 animate-pulse delay-1000">
            <Plane className="text-white/20 transform rotate-12" size={28} />
          </div>
          <div className="absolute bottom-1/3 left-1/3 animate-pulse delay-2000">
            <Plane className="text-white/20 transform -rotate-12" size={24} />
          </div>
        </div>
        
        {/* Skyline Silhouettes */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-orange-900 to-transparent">
          <svg className="w-full h-full" viewBox="0 0 1200 200" fill="none">
            {/* City skylines representing global opportunities */}
            <path d="M0 200V120L50 120V80L80 80V60L110 60V100L140 100V120L180 120V140L220 140V160L260 160V200Z" fill="currentColor" className="text-purple-800"/>
            <path d="M200 200V100L230 100V80L260 80V60L280 60V40L300 40V60L320 60V80L350 80V100L380 100V200Z" fill="currentColor" className="text-orange-900"/>
            <path d="M350 200V140L380 140V120L420 120V100L450 100V80L480 80V60L510 60V80L540 80V100L570 100V120L600 120V200Z" fill="currentColor" className="text-purple-800"/>
            
            {/* Iconic structures representing global reach */}
            <path d="M580 200V160L590 160V140L600 140V120L605 120V100L610 100V80L615 80V60L620 60V40L625 40V20L630 20V40L635 40V60L640 60V80L645 80V100L650 100V120L655 120V140L660 140V160L670 160V200Z" fill="currentColor" className="text-orange-900"/>
            
            <path d="M650 200V120L680 120V100L710 100V80L740 80V60L770 60V80L800 80V100L830 100V120L860 120V200Z" fill="currentColor" className="text-purple-800"/>
            <path d="M840 200V140L870 140V120L900 120V100L930 100V80L960 80V100L990 100V120L1020 120V140L1050 140V200Z" fill="currentColor" className="text-orange-700"/>
            
            <path d="M1050 200V60L1060 58V56L1070 54V52L1080 50V48L1090 46V50L1100 52V54L1110 56V58L1120 60V200Z" fill="currentColor" className="text-orange-900"/>
            
            <path d="M1100 200V160L1130 160V140L1160 140V120L1200 120V200Z" fill="currentColor" className="text-purple-800"/>
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Your Global Career Awaits
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Discover Who <span className="text-yellow-300 font-semibold">FlyAmbition</span> Is
            </p>
          </div>
        </div>
      </section>

      {/* Company Logo and Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="items-center">
            {/* Logo and Brand */}
            <div className="text-center  mx-auto">
              {/* FlyAmbition Logo */}
              <div className="mx-auto text-5xl inline-flex items-center mb-8 text-center">
                <div className="bg-[#4f2e89] text-white px-4 py-2 rounded-l font-bold text-2xl">
                  FLY
                </div>
                <div className="bg-white text-[#4f2e89] px-4 py-2 border-2 border-[#4f2e89] rounded-r font-bold text-2xl border-l-0">
                  Ambition
                </div>
              </div>
              
              <div className="text-gray-600 font-medium mb-6">Manpower Supply & Foreign Employment Consulting</div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
                  <div className="text-2xl font-bold text-[#4f2e89]">1000+</div>
                  <div className="text-sm text-gray-600">Jobs Placed</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                  <div className="text-2xl font-bold text-gray-700">25+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
                  <div className="text-2xl font-bold text-[#4f2e89]">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className='my-7 rounded-2xl shadow-2xl p-5 border-y-[#4f2e89] border-y-4 bg-white'>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                Who we <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f2e89] to-orange-700">are</span>
              </h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  FlyAmbition is a leading manpower supply and foreign employment consulting firm based in Bangladesh. We specialize in connecting skilled professionals and workers with premier international opportunities across the Middle East, Europe, North America, and Asia-Pacific regions.
                </p>
                
                <p>
                  Our comprehensive services include manpower recruitment, employment consulting, visa processing, documentation assistance, pre-departure training, and ongoing support for both candidates and international employers seeking reliable workforce solutions.
                </p>
                
                <p>
                  With our commitment to excellence, transparency, and ethical practices, FlyAmbition has established itself as a trusted bridge between talent and opportunity, ensuring successful career transformations and business growth for our global clientele.
                </p>
              </div>

              {/* Services Icons */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {services.map((service, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors">
                    <div className="w-10 h-10 bg-[#4f2e89] rounded-lg flex items-center justify-center">
                      {service.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 text-sm">{service.title}</div>
                      <div className="text-xs text-gray-600">{service.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <button className="group bg-gradient-to-r from-[#4f2e89] to-orange-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
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
            <div className="bg-gradient-to-br from-[#4f2e89] to-orange-700 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              
              <p className="leading-relaxed">
                To provide world-class manpower supply and employment consulting services that bridge the gap between talented professionals and international career opportunities. We are committed to ethical recruitment practices, ensuring transparency, reliability, and mutual success for both candidates and employers while fostering global workforce mobility.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Eye size={24} />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              
              <p className="leading-relaxed">
                To become the most trusted and preferred manpower consulting firm globally, recognized for our excellence in connecting dreams with destinations. We envision a world where geographic boundaries don't limit career aspirations, and we serve as the catalyst for transforming professional lives across continents.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TeamMembers />
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#4f2e89] to-orange-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Fly to Your Dream Career?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful professionals who trusted FlyAmbition with their international career aspirations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#4f2e89] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2 justify-center">
              <Briefcase size={20} />
              Find Jobs Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#4f2e89] transition-colors flex items-center gap-2 justify-center">
              <Users size={20} />
              Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmploymentAboutus;
