import React from "react";
import ApplyForm from "../../Components/EducationComponents/Froms/ApplyForm";

const EduApplyNow = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section
        className="relative h-80 bg-gradient-to-r from-[#4f2e89] via-purple-800 to-orange-700 flex items-center mb-20"
        data-aos="fade-down"
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Apply For Consultation</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
           Fill out the form below to schedule a free consultation with our education experts. We’re here to help you take the next step towards your study abroad dreams!
          </p>
        </div>
      </section>
      <ApplyForm />
    </div>
  );
};

export default EduApplyNow;
