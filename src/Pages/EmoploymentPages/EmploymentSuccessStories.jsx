import React from "react";
import {
  Building,
  Quote,
  Target,
  CheckCircle,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import ClientTestimonials from "../../Components/EmplomentComponents/Sections/ClientTestimonials";
import Statistics from "../../Components/EmplomentComponents/Sections/statistics";
import Hero from "../../Components/EmplomentComponents/Sections/Hero";
import Cta from "../../Components/EmplomentComponents/Sections/Cta";

const EmploymentSuccessStories = () => {
  return (
    <div className="min-h-screen bg-white pt-30">
      <Hero
        imageUrl="/images/employment1.webp"
        title=" Our Success Stories"
        subtitle=" Meet the ambitious professionals who partnered with FlyAmbition to
              unlock their potential and achieve extraordinary career growth"
      />
      {/* Stats Section */}
      <Statistics />

      {/* Success Stories Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Modern Testimonials Slider */}
            <ClientTestimonials />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <Cta></Cta>
    </div>
  );
};

export default EmploymentSuccessStories;
