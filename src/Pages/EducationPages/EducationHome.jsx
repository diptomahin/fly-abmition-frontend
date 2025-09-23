import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import EducationServiceComponent from "../../Components/EducationComponents/Sections/EducationServiceComponent";
import EduHero from "../../Components/EducationComponents/Home/EduHero";
import EduAbout from "../../Components/EducationComponents/Home/EduAbout";
import EduTestimonials from "../../Components/EducationComponents/Home/EduTestimonials";
import EduCta from "../../Components/EducationComponents/Home/EduCta";
import TeamMembers from "../../Components/EmplomentComponents/Sections/TeamMembers";

const EducationHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      <EduHero />
      <EduAbout />
      <EducationServiceComponent />
      <TeamMembers />
      <EduTestimonials />
      <EduCta />
    </div>
  );
};

export default EducationHome;
