import React, { useState } from "react";
import {
  Menu,
  X,
  GraduationCap,
  Globe,
  Users,
  Calendar,
  FileText,
  Building,
  UserPlus,
  ChevronDown,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const EducationNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Helper function to check if route is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Helper function to check if any subroute is active
  const isSubrouteActive = (basePath) => {
    return location.pathname.startsWith(basePath);
  };

  // Active link classes
  const getNavLinkClasses = (
    path,
    baseClasses = "px-4 py-2 rounded font-semibold transition-colors"
  ) => {
    const activeClasses = "bg-orange-700 text-white";
    const inactiveClasses = "text-white hover:bg-[#4f2e89]";

    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  // Mobile nav link classes
  const getMobileNavLinkClasses = (
    path,
    baseClasses = "block py-3 font-semibold border-b border-gray-200 transition-colors"
  ) => {
    const activeClasses = "text-[#f26b24] bg-[#4f2e89] border-red-20 p-3";
    const inactiveClasses = "text-gray-700 hover:text-[#4f2e89]";

    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  const studyDestinations = [
    {
      name: "Study in Malaysia",
      flag: "🇲🇾",
      color: "bg-[#4f2e89]",
      path: "/education/study/malaysia",
    },
    {
      name: "Study in India",
      flag: "🇮🇳",
      color: "bg-orange-500",
      path: "/education/study/india",
    },
    {
      name: "Study in Europe",
      flag: "🇪🇺",
      color: "bg-blue-600",
      path: "/education/study/europe",
    },
    {
      name: "Study in Canada",
      flag: "🇨🇦",
      color: "bg-red-500",
      path: "/education/study/canada",
    },
    {
      name: "Study in USA",
      flag: "🇺🇸",
      color: "bg-blue-700",
      path: "/education/study/usa",
    },
    {
      name: "Study in UK",
      flag: "🇬🇧",
      color: "bg-blue-800",
      path: "/education/study/uk",
    },
    {
      name: "Study in Australia",
      flag: "🇦🇺",
      color: "bg-[#4f2e89]",
      path: "/education/study/australia",
    },
  ];


  return (
    <div className="bg-white shadow-lg">
      {/* Top Header Bar */}
      <div className="bg-gray-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/testimonials"
                className="hover:text-red-400 transition-colors flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Testimonials
              </Link>
              <Link to="/news" className="hover:text-red-400 transition-colors">
                News
              </Link>
              <Link
                to="/team"
                className="hover:text-red-400 transition-colors flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                Team
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Link
                to="/events"
                className="bg-purple-500 hover:bg-[#4f2e89] px-4 py-1.5 rounded text-white font-semibold transition-colors flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                UPCOMING EVENTS
              </Link>
              <Link
                to="/apply"
                className="bg-purple-500 hover:bg-[#4f2e89] px-4 py-1.5 rounded text-white font-semibold transition-colors"
              >
                APPLY NOW
              </Link>
              <Link
                to="/alumni-registration"
                className="bg-purple-500 hover:bg-[#4f2e89] px-4 py-1.5 rounded text-white font-semibold transition-colors flex items-center gap-2"
              >
                <UserPlus className="w-4 h-4" />
                ALUMNI REGISTRATION
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                 <img className="w-44" src="/public/logo.png" alt="Fly Ambition Logo" />
                </div>
                <div className="text-gray-600 text-sm">
                  <div className="font-semibold">Education Consultant</div>
                  <div className="text-xs">
                    Excellence in Education Consultancy
                  </div>
                </div>
              </Link>
            </div>

            {/* Study Destinations Logos - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-6">
              {studyDestinations.slice(0, 4).map((destination, index) => (
                <Link
                  key={index}
                  to={destination.path}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div
                    className={`w-16 h-12 ${
                      destination.color
                    } rounded-lg flex items-center justify-center text-white text-2xl shadow-md group-hover:shadow-lg transition-all ${
                      isActive(destination.path)
                        ? "ring-2 ring-[#4f2e89] ring-offset-2"
                        : ""
                    }`}
                  >
                    {destination.flag}
                  </div>
                  <span
                    className={`text-xs mt-1 font-semibold transition-colors ${
                      isActive(destination.path)
                        ? "text-[#4f2e89]"
                        : "text-gray-700 group-hover:text-[#4f2e89]"
                    }`}
                  >
                    {destination.name.split(" ")[2]}
                  </span>
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-[#4f2e89] p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Main Menu Bar */}
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
                    className={`px-4 py-2 rounded font-semibold transition-colors flex items-center gap-2 ${
                      isSubrouteActive("/study")
                        ? "bg-[#4f2e89] text-white"
                        : "text-white hover:bg-[#4f2e89]"
                    }`}
                  >
                    <Globe className="w-4 h-4" />
                    STUDY DESTINATIONS
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === "destinations" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === "destinations" && (
                    <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border z-50">
                      <div className="grid grid-cols-2 gap-2 p-4">
                        {studyDestinations.map((destination, index) => (
                          <Link
                            key={index}
                            to={destination.path}
                            className={`flex items-center gap-3 p-3 rounded-lg transition-colors group ${
                              isActive(destination.path)
                                ? "bg-red-50 border border-red-200"
                                : "hover:bg-gray-50"
                            }`}
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div
                              className={`w-10 h-8 ${destination.color} rounded flex items-center justify-center text-white text-lg`}
                            >
                              {destination.flag}
                            </div>
                            <span
                              className={`font-medium ${
                                isActive(destination.path)
                                  ? "text-[#4f2e89]"
                                  : "text-gray-700 group-hover:text-[#4f2e89]"
                              }`}
                            >
                              {destination.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  to="/education/services"
                  className={`${getNavLinkClasses(
                    "/education/services"
                  )} flex items-center gap-2`}
                >
                  <GraduationCap className="w-4 h-4" />
                  Services
                </Link>
                <Link
                  to="/education/contact"
                  className={`${getNavLinkClasses(
                    "/education/contact"
                  )} flex items-center gap-2`}
                >
                  <GraduationCap className="w-4 h-4" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {/* Main menu items */}
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

              {/* Study Destinations Mobile */}
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
                    <Globe className="w-4 h-4" />
                    STUDY DESTINATIONS
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "mobile-destinations"
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {activeDropdown === "mobile-destinations" && (
                  <div className="pl-4 pb-3 space-y-2">
                    {studyDestinations.map((destination, index) => (
                      <Link
                        key={index}
                        to={destination.path}
                        className={`flex items-center gap-3 py-2 transition-colors ${
                          isActive(destination.path)
                            ? "text-[#4f2e89] font-semibold"
                            : "text-gray-600 hover:text-[#4f2e89]"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="text-lg">{destination.flag}</span>
                        {destination.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/education/services"
                className={`${getMobileNavLinkClasses(
                  "/services"
                )} flex items-center gap-2`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <GraduationCap className="w-4 h-4" />
                Services
              </Link>
              <Link
                to="/education/contact"
                className={`${getMobileNavLinkClasses(
                  "/contact"
                )} flex items-center gap-2`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <GraduationCap className="w-4 h-4" />
                Contact Us
              </Link>

              {/* Mobile study destination cards */}
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Study Destinations
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {studyDestinations.slice(0, 4).map((destination, index) => (
                    <Link
                      key={index}
                      to={destination.path}
                      className="flex flex-col items-center group cursor-pointer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div
                        className={`w-16 h-12 ${
                          destination.color
                        } rounded-lg flex items-center justify-center text-white text-2xl shadow-md ${
                          isActive(destination.path)
                            ? "ring-2 ring-[#4f2e89] ring-offset-2"
                            : ""
                        }`}
                      >
                        {destination.flag}
                      </div>
                      <span
                        className={`text-xs mt-1 font-semibold text-center ${
                          isActive(destination.path)
                            ? "text-[#4f2e89]"
                            : "text-gray-700"
                        }`}
                      >
                        {destination.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Close dropdown when clicking outside */}
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
