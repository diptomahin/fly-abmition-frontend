import { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  User,
  Briefcase,
  Globe,
  Home,
  MessageSquare,
  Award,
  CheckCircle,
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    desiredJob: "",
    destination: "",
    location: "",
    skills: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="mb-7">
      <section className="w-full md:w-11/12 mx-auto py-16 bg-white rounded-lg shadow-lg  border-y-[#4f2e89] border-y-4">
        <div className="w-full mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Contact us for <span className="text-[#4f2e89]">Details</span>
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the details below and our expert team will get back to
              you within 24 hours
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
                  className="bg-gradient-to-r from-[#4f2e89] to-orange-700 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:from-orange-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center mx-auto"
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
    </div>
  );
};
export default ContactForm;
