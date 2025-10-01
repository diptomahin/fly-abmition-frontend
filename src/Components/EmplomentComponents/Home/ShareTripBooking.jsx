import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ShareTripBooking() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/banner_3.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Parallax Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
        >
          Discover The World With <span className="text-orange-500">FlyAmbition</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-2xl mb-8 max-w-2xl"
        >
          Flights, Hotels, Holidays & More – All In One Place.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Link to="/employment/applynow">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-transform hover:scale-105 shadow-lg">
              Get Started
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
