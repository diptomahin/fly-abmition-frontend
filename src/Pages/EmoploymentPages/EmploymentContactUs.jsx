import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  Briefcase, 
  Globe, 
  Home,
  MessageSquare,
  Clock,
  Award,
  Users,
  CheckCircle
} from 'lucide-react';

const EmploymentContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    desiredJob: '',
    destination: '',
    location: '',
    skills: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-red-600 text-white px-3 py-1 rounded font-bold text-lg">
              FLY
            </div>
            <span className="font-semibold text-gray-800">Ambition</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium">About Us</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium">Services</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium">Success Stories</a>
            <a href="#" className="text-red-600 font-medium">Contact Us</a>
          </div>
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors">
            APPLY NOW
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Ready to take flight to your global career? Let's discuss your international opportunities and make your dreams a reality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">Speak directly with our experts</p>
              <p className="text-red-600 font-semibold">+1 (555) 123-4567</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">Get detailed information</p>
              <p className="text-red-600 font-semibold">info@flyambition.com</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-2">Meet us in person</p>
              <p className="text-red-600 font-semibold">123 Career Street, City</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Contact us for <span className="text-red-600">Details</span>
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the details below and our expert team will get back to you within 24 hours
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 mr-2" />
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter your mobile number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Desired Job
                  </label>
                  <input
                    type="text"
                    name="desiredJob"
                    value={formData.desiredJob}
                    onChange={handleInputChange}
                    placeholder="What position are you looking for?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Globe className="w-4 h-4 mr-2" />
                    Where do you want to go?
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    placeholder="Preferred destination country"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Home className="w-4 h-4 mr-2" />
                    Where do you live in?
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Your current location"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Award className="w-4 h-4 mr-2" />
                  Your Skills/Profession
                </label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  placeholder="Describe your skills and professional background"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your career goals and how we can help..."
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>

              <div className="text-center pt-6">
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center mx-auto"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-6 h-6 mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 mr-2" />
                      Submit Application
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-red-600 mb-2">5000+</div>
                <div className="text-gray-600 font-medium">Workers Placed</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-red-600 mb-2">200+</div>
                <div className="text-gray-600 font-medium">Partner Companies</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-red-600 mb-2">25+</div>
                <div className="text-gray-600 font-medium">Countries</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
                <div className="text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="py-12 bg-red-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-8 h-8 text-white mr-3" />
            <h3 className="text-2xl font-bold text-white">Quick Response Guarantee</h3>
          </div>
          <p className="text-red-100 text-lg">
            Our expert consultants will respond to your inquiry within 2-4 hours during business hours
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Take Flight to Your Dreams?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Let our expert team guide you through your international career journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Us Now
            </button>
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmploymentContactUs;