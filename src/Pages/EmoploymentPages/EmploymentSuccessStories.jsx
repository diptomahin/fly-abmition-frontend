import React, { useState, useEffect } from 'react';
import { 
  Users, 
  TrendingUp, 
  Globe, 
  Award, 
  Quote, 
  ArrowRight,
  CheckCircle,
  Plane,
  Star,
  Target,
  Building,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  MapPin,
  FileText
} from 'lucide-react';

const EmploymentSuccessStories = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const stats = [
    { number: "5000+", label: "Workers Placed", icon: Users },
    { number: "200+", label: "Partner Companies", icon: Building },
    { number: "25+", label: "Countries", icon: Globe },
    { number: "98%", label: "Success Rate", icon: TrendingUp }
  ];

  const successStories = [
    {
      name: "Sarah Martinez",
      role: "Senior Marketing Director",
      company: "Tech Innovation Corp",
      avatar: "SM",
      story: "FlyAmbition didn't just help me polish my resume—they completely transformed how I approached my career strategy. The personalized coaching sessions gave me the confidence to negotiate better, think bigger, and position myself as a leader.",
      results: [
        "Promoted to Senior Director within 8 months",
        "165% salary increase",
        "Led a team of 25+ professionals",
        "Secured $2M budget responsibility"
      ],
      location: "Dubai, UAE"
    },
    {
      name: "David Kim",
      role: "Tech Startup Founder",
      company: "InnovateTech Solutions",
      avatar: "DK",
      story: "As a software engineer with entrepreneurial dreams, I needed more than technical skills. FlyAmbition's comprehensive program taught me leadership, business strategy, and how to build meaningful professional relationships.",
      results: [
        "Launched successful SaaS startup",
        "Raised $1.2M in seed funding", 
        "Built team of 12 employees",
        "Generated $500K ARR in first year"
      ],
      location: "Singapore"
    },
    {
      name: "Elena Popovic",
      role: "Global Operations VP",
      company: "Fortune 500 Manufacturing",
      avatar: "EP", 
      story: "Moving from Europe to lead operations in North America seemed impossible. FlyAmbition helped me navigate cultural differences, build my network strategically, and present my international experience as a competitive advantage.",
      results: [
        "Secured VP role at Fortune 500 company",
        "Successfully relocated internationally",
        "200% salary increase", 
        "Manages operations across 15 countries"
      ],
      location: "Toronto, Canada"
    },
    {
      name: "Michael Johnson",
      role: "Healthcare Innovation Lead",
      company: "MedTech Global",
      avatar: "MJ",
      story: "After 15 years as a physician, I wanted to transition into healthcare technology but didn't know where to start. FlyAmbition created a roadmap that leveraged my medical expertise while building the business skills I needed.",
      results: [
        "Transitioned from clinical to tech leadership",
        "Joined leading healthtech company",
        "140% compensation increase",
        "Leading innovation for 50M+ patients"
      ],
      location: "London, UK"
    },
    {
      name: "Aisha Rahman", 
      role: "Financial Services Executive",
      company: "Global Investment Bank",
      avatar: "AR",
      story: "As a woman in finance, I faced unique challenges in advancing to executive levels. FlyAmbition's coaching went beyond career advice—they helped me develop executive presence, master strategic communication, and build confidence.",
      results: [
        "Promoted to C-suite within 18 months",
        "First female executive in company history", 
        "Oversees $500M portfolio",
        "Featured in Forbes '30 Under 30'"
      ],
      location: "New York, USA"
    }
  ];

  const testimonials = [
    {
      text: "FlyAmbition transformed my career. Their professional guidance helped me secure a position in Dubai within 3 months. Exceptional service!",
      author: "Rahmat Sheikh",
      role: "Construction Manager, UAE",
      country: "UAE",
    },
    {
      text: "The visa processing and job placement support was incredible. I'm now working my dream job in Canada thanks to FlyAmbition.",
      author: "Maria Santos",
      role: "Software Developer, Canada",
      country: "Canada"
    },
    {
      text: "Professional, reliable, and results-driven. FlyAmbition made my international career transition seamless and successful.",
      author: "Ahmed Hassan",
      role: "Project Manager, Australia",
      country: "Australia"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Real experiences from professionals who flew to success with FlyAmbition
            </p>
            <div className="mt-8 flex justify-center">
              <Plane className="w-16 h-16 opacity-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-red-600">Success</span> Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the ambitious professionals who partnered with FlyAmbition to unlock their potential and achieve extraordinary career growth
            </p>
          </div>

          <div className="space-y-12">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        {story.avatar}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{story.name}</h3>
                        <p className="text-red-600 font-semibold text-lg mb-1">{story.role}</p>
                        <p className="text-gray-600 flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          {story.company} • {story.location}
                        </p>
                      </div>
                      
                      <div className="mb-8">
                        <Quote className="w-8 h-8 text-red-200 mb-4" />
                        <p className="text-gray-700 text-lg italic leading-relaxed">
                          "{story.story}"
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500">
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Target className="w-5 h-5 text-red-600" />
                          Results Achieved:
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {story.results.map((result, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 font-medium">{result}</span>
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

      {/* Modern Testimonials Slider */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client <span className="text-red-400">Testimonials</span>
            </h2>
            <p className="text-xl opacity-80">Success stories from around the globe</p>
          </div>
          
          <div className="relative">
            {/* Navigation buttons */}
            <button 
              onClick={() => setCurrentTestimonial(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={() => setCurrentTestimonial((currentTestimonial + 1) % testimonials.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Testimonials container */}
            <div className="flex transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-8">
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Testimonial Content */}
                        <div className="order-2 md:order-1">
                          <Quote className="w-12 h-12 text-red-400 mb-6" />
                          <p className="text-xl md:text-2xl leading-relaxed italic text-white mb-8">
                            "{testimonial.text}"
                          </p>
                          
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                              {testimonial.avatar}
                            </div>
                            <div>
                              <p className="font-bold text-xl text-white">{testimonial.author}</p>
                              <p className="text-red-300 font-semibold">{testimonial.role}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <MapPin className="w-4 h-4 text-gray-300" />
                                <span className="text-gray-300">{testimonial.country}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Visa/Passport Visual */}
                        <div className="order-1 md:order-2 flex justify-center">
                          <div className="relative">
                            {/* Passport/Visa Document */}
                            <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                              <div className="w-64 h-80 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg border-4 border-yellow-400 relative overflow-hidden">
                                {/* Passport header */}
                                <div className="text-center pt-6 pb-4">
                                  <div className="text-yellow-200 font-bold text-sm mb-2">PASSPORT</div>
                                  <div className="text-white font-semibold text-lg">{testimonial.country.toUpperCase()}</div>
                                </div>
                                
                                {/* Photo area */}
                                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-4">
                                  {testimonial.avatar}
                                </div>
                                
                                {/* Name and details */}
                                <div className="px-4 text-white text-center">
                                  <div className="font-bold text-lg mb-2">{testimonial.author.toUpperCase()}</div>
                                  <div className="text-sm opacity-80 mb-3">{testimonial.role}</div>
                                  
                                  {/* Decorative elements */}
                                  <div className="border-t border-yellow-400 pt-3 mt-3">
                                    <div className="flex justify-between items-center text-xs opacity-60">
                                      <span>VISA</span>
                                      <FileText className="w-4 h-4" />
                                      <span>APPROVED</span>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Success stamp overlay */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12">
                                  <div className="border-4 border-green-400 rounded-full p-2 bg-green-400/20">
                                    <CheckCircle className="w-8 h-8 text-green-400" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Floating success badge */}
                            <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-3 shadow-lg animate-pulse">
                              <Star className="w-6 h-6" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-red-500 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-red-600 to-red-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Flight to Your Dreams?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let our expert team guide you through your international career journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              <Briefcase className="w-5 h-5" />
              Find Jobs Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors flex items-center justify-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmploymentSuccessStories;