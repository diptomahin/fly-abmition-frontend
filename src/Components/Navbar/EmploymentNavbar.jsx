import React from 'react'
import { Link } from 'react-router';
import { NavLink } from "react-router-dom";
const EmploymentNavbar=() =>{
  const links = [
    { name: "Home", path: "/employment/home" },
    { name: "About Us", path: "/employment/about" },
    { name: "Services", path: "/employment/services" },
    { name: "Success Stories", path: "/employment/success" },
    { name: "Contact Us", path: "/employment/contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={'/'}>
          <div className="text-white text-3xl font-bold">
          <span className="text-red-600">FLY</span>
          <span className="bg-red-600 text-white px-2 ml-2 rounded">
            Ambìtion
          </span>
        </div></Link>

          {/* Nav Links */}
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

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
              APPLY NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {/* Add your mobile hamburger menu here if needed */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default EmploymentNavbar