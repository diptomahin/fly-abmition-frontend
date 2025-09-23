import React, { useState } from "react";
import {
  Menu,
  X,
  GraduationCap,
  Globe,
  Calendar,
  UserPlus,
  ChevronDown,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const EducationNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleDropdownToggle = (dropdown) =>
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);

  const isActive = (path) => location.pathname === path;
  const isSubrouteActive = (basePath) => location.pathname.startsWith(basePath);

  const getNavLinkClasses = (
    path,
    baseClasses = "px-4 py-2 rounded font-semibold transition-colors"
  ) => {
    const activeClasses = "bg-orange-700 text-white";
    const inactiveClasses = "text-white hover:bg-purple-700";

    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  const getMobileNavLinkClasses = (
    path,
    baseClasses = "block py-3 font-semibold border-b border-gray-200 transition-colors"
  ) => {
    const activeClasses = "text-[#f26b24] bg-[#4f2e89] p-3 rounded";
    const inactiveClasses = "text-gray-700 hover:text-[#4f2e89]";

    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  const studyDestinations = [
    {
      name: "Study in Malaysia",
      flag: "🇲🇾",
      color: "bg-[#4f2e89]",
      path: "/education/applynow",
    },
    {
      name: "Study in India",
      flag: "🇮🇳",
      color: "bg-orange-500",
      path: "/education/applynow",
    },
    {
      name: "Study in Europe",
      flag: "🇪🇺",
      color: "bg-blue-600",
      path: "/education/applynow",
    },
    {
      name: "Study in Canada",
      flag: "🇨🇦",
      color: "bg-red-500",
      path: "/education/applynow",
    },
    {
      name: "Study in USA",
      flag: "🇺🇸",
      color: "bg-blue-700",
      path: "/education/applynow",
    },
    {
      name: "Study in UK",
      flag: "🇬🇧",
      color: "bg-blue-800",
      path: "/education/applynow",
    },
    {
      name: "Study in Australia",
      flag: "🇦🇺",
      color: "bg-[#4f2e89]",
      path: "/education/applynow",
    },
  ];

  return (
    <div className="bg-white shadow-lg">
      {/* Top Nav */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                className="w-44"
                src="https://i.ibb.co.com/gFFK208r/logo.png"
                alt="Fly Ambition Logo"
              />
              <div className="text-gray-600 text-sm">
                <div className="font-semibold">Education Consultant</div>
                <div className="text-xs">
                  Excellence in Education Consultancy
                </div>
              </div>
            </Link>

            {/* Desktop Right Links */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/education/applynow"
                className="bg-purple-500 hover:bg-[#4f2e89] px-4 py-1.5 rounded text-white font-semibold transition-colors"
              >
                APPLY NOW
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-700 hover:text-[#4f2e89] p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="bg-[#4f2e89]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="hidden md:flex items-center justify-between h-14">
              <div className="flex items-center mx-auto space-x-8">
                <Link
                  to="/education/home"
                  className={getNavLinkClasses("/education/home")}
                >
                  HOME
                </Link>
                <Link
                  to="/education/about"
                  className={getNavLinkClasses("/education/about")}
                >
                  ABOUT US
                </Link>

                {/* Study Destinations Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => handleDropdownToggle("destinations")}
                    className={`px-4 py-2 rounded font-semibold flex items-center gap-2 transition-colors ${
                      isSubrouteActive("/study")
                        ? "bg-purple-700 text-white"
                        : "text-white hover:bg-purple-600"
                    }`}
                  >
                    <Globe className="w-4 h-4" /> STUDY DESTINATIONS
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === "destinations" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === "destinations" && (
                      <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-200 z-50"
                      >
                        <div className="grid grid-cols-2 gap-3 p-4">
                          {studyDestinations.map((dest, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ scale: 1.05, y: -2 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Link
                                to={dest.path}
                                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                                  isActive(dest.path)
                                    ? "bg-purple-50 border border-purple-200"
                                    : "hover:bg-gray-100"
                                }`}
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div
                                  className={`w-10 h-8 ${dest.color} rounded flex items-center justify-center text-white text-lg`}
                                >
                                  {dest.flag}
                                </div>
                                <span
                                  className={`font-medium ${
                                    isActive(dest.path)
                                      ? "text-[#4f2e89]"
                                      : "text-gray-700 group-hover:text-[#4f2e89]"
                                  }`}
                                >
                                  {dest.name}
                                </span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/education/services"
                  className={getNavLinkClasses("/education/services")}
                >
                  <span className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" /> Services
                  </span>
                </Link>
                <Link
                  to="/education/contact"
                  className={getNavLinkClasses("/education/contact")}
                >
                  <span className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" /> Contact Us
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white border-t shadow-lg overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <Link
                  to="/education/home"
                  className={getMobileNavLinkClasses("/education/home")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  HOME
                </Link>
                <Link
                  to="/education/about"
                  className={getMobileNavLinkClasses("/education/about")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ABOUT US
                </Link>

                {/* Mobile Destinations Dropdown */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => handleDropdownToggle("mobile-destinations")}
                    className={`w-full text-left py-3 font-semibold flex items-center justify-between transition-colors ${
                      isSubrouteActive("/study")
                        ? "text-[#4f2e89]"
                        : "text-gray-700 hover:text-[#4f2e89]"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Globe className="w-4 h-4" /> STUDY DESTINATIONS
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === "mobile-destinations"
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === "mobile-destinations" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="pl-4 pb-3 space-y-2 overflow-hidden"
                      >
                        {studyDestinations.map((dest, idx) => (
                          <Link
                            key={idx}
                            to={dest.path}
                            className={`flex items-center gap-3 py-2 ${
                              isActive(dest.path)
                                ? "text-[#4f2e89] font-semibold"
                                : "text-gray-600 hover:text-[#4f2e89]"
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className="text-lg">{dest.flag}</span>
                            {dest.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/education/services"
                  className={getMobileNavLinkClasses("/education/services")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" /> Services
                  </span>
                </Link>
                <Link
                  to="/education/contact"
                  className={getMobileNavLinkClasses("/education/contact")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" /> Contact Us
                  </span>
                </Link>
                <Link
                  to="/education/applynow"
                  className="bg-purple-500 hover:bg-[#4f2e89] px-4 py-1.5 rounded text-white font-semibold transition-colors"
                >
                  APPLY NOW
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Close dropdown on outside click */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </div>
  );
};

export default EducationNavbar;
