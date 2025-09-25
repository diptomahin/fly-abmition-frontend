import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                className="w-44 object-contain"
                src="/logo-2.webp"
                alt="Fly Ambition Logo"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              FlyAmbition is a leading manpower supply and foreign employment
              consulting company registered in Bangladesh. We specialize in
              connecting skilled professionals and workers with premier
              international opportunities across the Middle East, Europe, North
              America, and Asia Pacific regions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/8801616841627"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-lg hover:bg-[#4f2e89] transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1Fj1Kyk29c/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-lg hover:bg-[#4f2e89] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/flyambitionbd/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-lg hover:bg-[#4f2e89] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:flyambitionbd@gmail.com"
                className="bg-gray-700 p-3 rounded-lg hover:bg-[#4f2e89] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://maps.app.goo.gl/1QjWSv7THrUT2hnn8?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-lg hover:bg-[#4f2e89] transition-colors"
              >
                <MapPin className="w-5 h-5" />
              </a>
              <a
                href="https://flyambitionbd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-lg hover:bg-[#4f2e89] transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/employment/home"
                  className="text-gray-300 hover:text-red-400 transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#4f2e89] rounded-full mr-3"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/employment/about"
                  className="text-gray-300 hover:text-red-400 transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#4f2e89] rounded-full mr-3"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/employment/services"
                  className="text-gray-300 hover:text-red-400 transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#4f2e89] rounded-full mr-3"></span>
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/employment/success"
                  className="text-gray-300 hover:text-red-400 transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#4f2e89] rounded-full mr-3"></span>
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  to="/employment/contact"
                  className="text-gray-300 hover:text-red-400 transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#4f2e89] rounded-full mr-3"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Countries with Flags */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Top Countries</h3>
            <ul className="space-y-3 text-2xl">
              <li className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                <img
                  src="https://flagcdn.com/eu.svg"
                  alt="Schengen Flag"
                  className="w-5 h-5 mr-3"
                />
                Schengen
              </li>
              <li className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                <img
                  src="https://flagcdn.com/ae.svg"
                  alt="Gulf Flag"
                  className="w-5 h-5 mr-3"
                />
                Gulf
              </li>
              <li className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                <img
                  src="https://flagcdn.com/us.svg"
                  alt="America Flag"
                  className="w-5 h-5 mr-3"
                />
                America
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information Bar */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://wa.me/8801616841627"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <div className="bg-[#4f2e89] p-3 rounded-lg mr-4">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Call Us</p>
                <p className="text-white font-semibold">
                  {" "}
                  01616-841627,
                  <br />
                  01616-841628,
                  <br />
                  01872-454000{" "}
                </p>
              </div>
            </a>
            <a
              href="mailto:flyambitionbd@gmail.com"
              className="flex items-center"
            >
              <div className="bg-[#4f2e89] p-3 rounded-lg mr-4">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email Us</p>
                <p className="text-white font-semibold">
                  flyambitionbd@gmail.com
                </p>
              </div>
            </a>
            <a
              href="https://maps.app.goo.gl/1QjWSv7THrUT2hnn8?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <div className="bg-[#4f2e89] p-3 rounded-lg mr-4">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Visit Us</p>
                <p className="text-white font-semibold">
                  Level 2, Binimoy Complex, Dhaka-Mymensingh Highway, Auch Para,
                  Tongi, Gazipur, Bangladesh
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 FlyAmbition. All rights reserved. | Always open
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
