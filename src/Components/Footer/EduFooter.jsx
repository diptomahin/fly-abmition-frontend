import {
  BookOpen,
  GraduationCap,
  Globe,
  Mail,
  Phone,
  MapPin,
  Users,
  MessageSquare,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";

const EduFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="items-center space-x-2 mb-4">
              <img
                className="w-44 object-contain"
                src="https://i.ibb.co.com/5X9d7Y1m/logo-2.png"
                alt="Fly Ambition Logo"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              FlyAmbition Edu is a trusted educational consultancy guiding
              students to achieve their dreams of studying abroad. We partner
              with top universities worldwide, providing end-to-end support from
              university selection and admission to visa processing and career
              counseling.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-[#4f2e89] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-[#4f2e89] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-[#4f2e89] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                "Home",
                "About Us",
                "Our Services",
                "Universities",
                "Contact Us",
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="hover:text-red-400 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-[#4f2e89] rounded-full mr-3"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center hover:text-red-400 transition-colors cursor-pointer">
                <GraduationCap className="w-4 h-4 mr-3 text-[#4f2e89]" /> University Admissions
              </li>
              <li className="flex items-center hover:text-red-400 transition-colors cursor-pointer">
                <BookOpen className="w-4 h-4 mr-3 text-[#4f2e89]" /> Test Preparation (IELTS, TOEFL, SAT)
              </li>
              <li className="flex items-center hover:text-red-400 transition-colors cursor-pointer">
                <Globe className="w-4 h-4 mr-3 text-[#4f2e89]" /> Study Abroad Programs
              </li>
              <li className="flex items-center hover:text-red-400 transition-colors cursor-pointer">
                <Users className="w-4 h-4 mr-3 text-[#4f2e89]" /> Career Counseling
              </li>
              <li className="flex items-center hover:text-red-400 transition-colors cursor-pointer">
                <MessageSquare className="w-4 h-4 mr-3 text-[#4f2e89]" /> Visa & Documentation Support
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information Bar */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <div className="bg-[#4f2e89] p-3 rounded-lg mr-4">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Call Us</p>
                <a
                  href="tel:+880123456789"
                  className="text-white font-semibold hover:text-red-400"
                >
                  +880 1234-567-89
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-[#4f2e89] p-3 rounded-lg mr-4">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email Us</p>
                <a
                  href="mailto:info@flyambitionedu.com"
                  className="text-white font-semibold hover:text-red-400"
                >
                  info@flyambitionedu.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-[#4f2e89] p-3 rounded-lg mr-4">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Visit Us</p>
                <a
                  href="https://goo.gl/maps/xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:text-red-400"
                >
                  45 Education Lane, Dhaka, Bangladesh
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-500 mb-4 md:mb-0">
              © 2025 FlyAmbition Edu. All rights reserved. | Registered in Bangladesh
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-red-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EduFooter;
