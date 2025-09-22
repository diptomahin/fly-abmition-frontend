import React from "react";
import Statistics from "../Sections/statistics";

const HomeStatistics = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-32"
      style={{
        backgroundImage: `url('https://i.ibb.co.com/LhvL0v3T/group-workers-organizing-protest.jpg')`, // replace with your image
      }}
    >
      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-down">
          Empowering Dreams
        </h2>

        {/* Subtext */}
        <p className="text-xl md:text-2xl mb-12 opacity-90" data-aos="fade-up" data-aos-delay="200">
          Building Careers and Creating Global Opportunities
        </p>

        {/* Statistics */}
        <div data-aos="fade-up" data-aos-delay="400">
          <Statistics />
        </div>
      </div>
    </section>
  );
};

export default HomeStatistics;
