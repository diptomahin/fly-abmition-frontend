import React from 'react'
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router';
const EduHero = () => {
  return (
    <div>
       {/* Hero Section with Parallax */}
      <section
        className="relative h-[90vh] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1400&q=80')", // Replace with your preferred hero image
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#f26b24]/70 via-purple-600/70 to-purple-900/70"></div>
        <div
          className="relative z-10 container mx-auto px-6 text-center"
          data-aos="fade-up"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Empowering Students for a Global Future
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            FlyAmbition guides you through every step of your study abroad journey — 
            from admission and scholarships to visas and settlement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={"/education/applynow"}>
            <button
              className="bg-white text-[#4f2e89] px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg flex items-center gap-2 justify-center hover:scale-105 hover:bg-[#4f2e89] hover:text-white duration-300"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Get Started <ArrowRight size={20} />
            </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default EduHero
