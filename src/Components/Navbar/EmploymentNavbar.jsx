import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

const EmploymentNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/employment/home" },
    { name: "About Us", path: "/employment/about" },
    { name: "Services", path: "/employment/services" },
    { name: "Success Stories", path: "/employment/success" },
    { name: "Contact Us", path: "/employment/contact" },
  ];

  // Scroll to top on route change
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false); // close menu on route change
  }, [pathname]);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={"/"}>
            <div className="text-3xl font-bold flex items-center">
              <span className="text-red-600">FLY</span>
              <span className="bg-red-600 text-white px-2 ml-2 rounded">
                Ambìtion
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-red-600 font-medium ${
                    isActive ? "text-red-600 border-b-2 border-red-600" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex">
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
              APPLY NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <span className="text-2xl">✖</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 px-4 py-4">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-red-600 font-medium ${
                    isActive ? "text-red-600 border-b-2 border-red-600" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* CTA Button (Mobile) */}
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
              APPLY NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default EmploymentNavbar;