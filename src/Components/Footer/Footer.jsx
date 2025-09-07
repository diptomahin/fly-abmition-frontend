import {
  Users,
  Briefcase,
  Mail,
  Award,
  Phone,
  MapPin,
  Globe,
  MessageSquare,
} from "lucide-react";
const Footer = () => {
  return (
          <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-[#4f2e89] text-white px-3 py-1 rounded font-bold text-lg">
                  FLY
                </div>
                <span className="font-semibold text-white text-lg">Ambition</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                FlyAmbition is a leading manpower supply and foreign employment consulting company registered in Bangladesh. We specialize in connecting skilled professionals and workers with premier international opportunities across the Middle East, Europe, North America, and Asia Pacific regions.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gray-700 p-3 rounded-lg hover:bg-[#4f2e89] transition-colors cursor-pointer">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="bg-gray-700 p-3 rounded-lg hover:bg-[#4f2e89] transition-colors cursor-pointer">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="bg-gray-700 p-3 rounded-lg hover:bg-[#4f2e89] transition-colors cursor-pointer">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="bg-gray-700 p-3 rounded-lg hover:bg-[#4f2e89] transition-colors cursor-pointer">
                  <Globe className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                    <span className="w-2 h-2 bg-[#4f2e89] rounded-full mr-3"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                    <span className="w-2 h-2 bg-[#4f2e89] rounded-full mr-3"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                    <span className="w-2 h-2 bg-[#4f2e89] rounded-full mr-3"></span>
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                    <span className="w-2 h-2 bg-[#4f2e89] rounded-full mr-3"></span>
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                    <span className="w-2 h-2 bg-[#4f2e89] rounded-full mr-3"></span>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                    <Users className="w-4 h-4 mr-3 text-[#4f2e89]" />
                    Worker Sourcing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                    <Award className="w-4 h-4 mr-3 text-[#4f2e89]" />
                    Skill Assessment
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                    <Globe className="w-4 h-4 mr-3 text-[#4f2e89]" />
                    Visa Processing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                    <Briefcase className="w-4 h-4 mr-3 text-[#4f2e89]" />
                    Employment Consulting
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                    <MessageSquare className="w-4 h-4 mr-3 text-[#4f2e89]" />
                    Career Guidance
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information Bar */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <div className="bg-[#4f2e89] p-3 rounded-lg mr-4">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Call Us</p>
                  <p className="text-white font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#4f2e89] p-3 rounded-lg mr-4">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email Us</p>
                  <p className="text-white font-semibold">info@flyambition.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#4f2e89] p-3 rounded-lg mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Visit Us</p>
                  <p className="text-white font-semibold">123 Career Street, Dhaka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 FlyAmbition. All rights reserved. | Licensed by Government of Bangladesh
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
