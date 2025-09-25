import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare,
  Clock,
} from 'lucide-react';
import ContactForm from '../../Components/EmplomentComponents/Forms/ContactForm';
import Statistics from '../../Components/EmplomentComponents/Sections/statistics';
import Hero from '../../Components/EmplomentComponents/Sections/Hero';
import Cta from '../../Components/EmplomentComponents/Sections/Cta';

const EmploymentContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-30">
      {/* Hero Section */}
      {/* <section 
        className="bg-gradient-to-r from-[#4f2e89] to-orange-800 text-white py-20"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center" data-aos="zoom-in" data-aos-delay="300">
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Ready to take flight to your global career? Let's discuss your international opportunities and make your dreams a reality.
            </p>
          </div>
        </div>
      </section> */}
      <Hero
        imageUrl="/images/employment2.webp"
        title="Get in Touch"
        subtitle="Ready to take flight to your global career? Let's discuss your international opportunities and make your dreams a reality."
      />
      {/* Contact Information Cards */}
      <section className="py-16 my-5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div 
              className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300"
              data-aos="fade-right"
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-[#4f2e89]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">Speak directly with our experts</p>
              <p className="text-[#4f2e89] font-semibold">+1 (555) 123-4567</p>
            </div>

            <div 
              className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-[#4f2e89]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">Get detailed information</p>
              <p className="text-[#4f2e89] font-semibold">info@flyambition.com</p>
            </div>

            <div 
              className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300"
              data-aos="fade-left"
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-[#4f2e89]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-2">Meet us in person</p>
              <p className="text-[#4f2e89] font-semibold">123 Career Street, City</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div data-aos="fade-up" data-aos-duration="1200">
        <ContactForm />
      </div>

      {/* Quick Stats */}
      {/* <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
              <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#4f2e89] mb-2">5000+</div>
                <div className="text-gray-600 font-medium">Workers Placed</div>
              </div>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="200">
              <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#4f2e89] mb-2">200+</div>
                <div className="text-gray-600 font-medium">Partner Companies</div>
              </div>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="300">
              <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#4f2e89] mb-2">25+</div>
                <div className="text-gray-600 font-medium">Countries</div>
              </div>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="400">
              <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#4f2e89] mb-2">98%</div>
                <div className="text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Statistics></Statistics>
      {/* Response Time Section */}
      <section 
        className="py-12 bg-[#4f2e89]"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4" data-aos="zoom-in">
            <Clock className="w-8 h-8 text-white mr-3" />
            <h3 className="text-2xl font-bold text-white">Quick Response Guarantee</h3>
          </div>
          <p className="text-red-100 text-lg">
            Our expert consultants will respond to your inquiry within 2-4 hours during business hours
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <Cta></Cta>
    </div>
  );
};

export default EmploymentContactUs;
