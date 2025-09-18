import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const staticText = "Your very own immigration partner to"; // fixed part
  const rotatingTexts = ["Schengen", "Gulf", "America", "South East Asia"]; // animated part
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500); // change every 2.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to={"/"}>
            <div className="text-3xl font-bold flex items-center">
              <img
                className="w-56"
                src="https://i.ibb.co.com/gFFK208r/logo.png"
                alt="Fly Ambition Logo"
              />
            </div>
          </Link>
          <div className="flex flex-col items-center gap-3">
            <h1 className="hidden md:flex text-xl font-semibold gap-1 mx-auto">
              {staticText}
              <span className="text-orange-500 inline-block min-w-[100px] ">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingTexts[index]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block"
                  >
                    {rotatingTexts[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            {/* Desktop Links */}
            <div className="hidden md:flex space-x-6 items-center">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-gray-700 p-2 rounded hover:text-white hover:bg-[#4f2e89] hover:border-2 hover:border-[#4f2e89] font-medium ${
                      isActive
                        ? "text-white p-2 rounded bg-[#4f2e89] border-[#4f2e89]"
                        : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex mt-10">
            <button className="bg-[#4f2e89] text-white px-4 py-2 rounded hover:bg-[#f26b24] transition">
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
                  `text-gray-700 hover:text-[#4f2e89] font-medium ${
                    isActive ? "text-[#4f2e89] border-b-2 border-[#4f2e89]" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* CTA Button (Mobile) */}
            <button className="bg-[#4f2e89] text-white px-4 py-2 rounded hover:bg-orange-700 transition">
              APPLY NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default EmploymentNavbar;
