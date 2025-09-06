import ContactForm from "../../Components/EmplomentComponents/Forms/ContactForm";
import HomeStatistics from "../../Components/EmplomentComponents/Home/HomeStatistics";
import ShareTripBooking from "../../Components/EmplomentComponents/Home/ShareTripBooking";
import ClientTestimonials from "../../Components/EmplomentComponents/Sections/ClientTestimonials";
import ServicesComponent from "../../Components/EmplomentComponents/Sections/ServicesComponent";

const EmploymentHome = () => {
  return (
    <div className="pt-10">
      <ShareTripBooking></ShareTripBooking>
      <ServicesComponent></ServicesComponent>
      <HomeStatistics></HomeStatistics>
      <ClientTestimonials></ClientTestimonials>
      <ContactForm></ContactForm>
    </div>
  );
};

export default EmploymentHome;
