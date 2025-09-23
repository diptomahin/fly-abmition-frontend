import React from "react";
import ApplyForm from "../../Components/EducationComponents/Froms/ApplyForm";

const EducationContact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      {/* Hero Section */}
      <section
        className="relative h-80 bg-gradient-to-r from-[#4f2e89] via-purple-800 to-orange-700 flex items-center mb-20"
        data-aos="fade-down"
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Get in touch with FlyAmbition. We’re here to guide you through your
            study abroad journey with expert advice and personalized support.
          </p>
        </div>
      </section>
      <ApplyForm />
    </div>
  );
};

export default EducationContact;
