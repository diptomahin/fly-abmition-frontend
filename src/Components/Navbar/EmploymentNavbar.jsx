import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const EmploymentNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // Track scroll

  const links = [
    { name: "Home", path: "/employment/home" },
    { name: "About Us", path: "/employment/about" },
    { name: "Services", path: "/employment/services" },
    { name: "Success Stories", path: "/employment/success" },
    { name: "Contact Us", path: "/employment/contact" },
  ];

  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, [pathname]);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const staticText = "Your very own immigration partner to";
  const rotatingTexts = ["Schengen", "Gulf", "America", "South East Asia"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 py-5 transition-colors duration-500 ${
        scrolled ? "bg-[#4f2e89] text-white shadow-lg" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to={"/"}>
            <div className="text-3xl font-bold flex items-center">
              <img className="w-56" src="/logo-2.webp" alt="Fly Ambition Logo" />
            </div>
          </Link>

          <div className="flex flex-col items-center gap-3">
            <h1 className="hidden md:flex text-xl font-semibold gap-1 mx-auto">
              {staticText}
              <span className="text-orange-500 inline-block">
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
                    `px-3 py-2 rounded font-medium border-2 transition-colors duration-300 ${
                      isActive
                        ? "bg-orange-500 text-white border-orange-500"
                        : scrolled
                        ? "text-white border-transparent hover:text-orange-500 hover:bg-white hover:border-white"
                        : "text-gray-700 border-transparent hover:text-white hover:bg-[#4f2e89] hover:border-[#4f2e89]"
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
            <Link to={"/employment/applynow"}>
              <button
                className={`px-4 py-2 rounded transition ${
                  scrolled
                    ? "bg-orange-500 text-white hover:bg-white hover:text-orange-500"
                    : "bg-[#4f2e89] text-white hover:bg-[#f26b24]"
                }`}
              >
                APPLY NOW
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <span className="text-2xl">✖</span> : <span className="text-2xl">☰</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className={`md:hidden shadow-md transition-colors duration-500 ${
            scrolled ? "bg-[#4f2e89] text-white" : "bg-white text-gray-900"
          }`}
        >
          <div className="flex flex-col space-y-4 px-4 py-4">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium ${isActive ? "border-b-2 border-orange-500" : ""}`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* CTA Button (Mobile) */}
            <button
              className={`px-4 py-2 rounded transition ${
                scrolled
                  ? "bg-orange-500 text-white hover:bg-white hover:text-orange-500"
                  : "bg-[#4f2e89] text-white hover:bg-orange-700"
              }`}
            >
              APPLY NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default EmploymentNavbar;
