import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Swal from "sweetalert2";

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please fill in Name, Email, and Phone before submitting.",
      });
      return;
    }

    try {
      const response = await fetch("https://api.flyambitionbd.com/send-education-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "We’ll get back to you within 24 hours.",
          timer: 3000,
          showConfirmButton: false,
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Something went wrong! Please try again later.",
      });
    }
  };

  return (
    <div>
      {/* Contact Info + Form Section */}
      <section className="bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Have questions about admissions, visas, or our services? Reach out
              to us and our team will respond promptly to assist you.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <a
                href="https://maps.app.goo.gl/1QjWSv7THrUT2hnn8?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:scale-105 transition-transform"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-[#4f2e89] rounded-xl hover:bg-[#4f2e89] hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Office Address
                  </h3>
                  <p className="text-gray-600">
                    Level 2, Binimoy Complex,
                    <br /> Dhaka- Mymensingh Highway, Tongi, Gazipur,
                    Bangladesh,
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="https://wa.me/8801616841627"
                className="flex items-start gap-4 hover:scale-105 transition-transform"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-[#4f2e89] rounded-xl hover:bg-[#4f2e89] hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone Number</h3>
                  <p className="text-gray-600">
                    01616-841627,
                    <br />
                    01616-841628,
                    <br />
                    01872-454000
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:flyambitionbd@gmail.com"
                className="flex items-start gap-4 hover:scale-105 transition-transform"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-[#4f2e89] rounded-xl hover:bg-[#4f2e89] hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email Address</h3>
                  <p className="text-gray-600">flyambitionbd@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-gray-50 p-8 rounded-2xl shadow-lg"
            data-aos="fade-left"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Message For Consultation
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4f2e89]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                    className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4f2e89]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+880 1234 567 890"
                    required
                    className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4f2e89]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Enter subject"
                    className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4f2e89]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message here..."
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4f2e89]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full hover:bg-orange-700 bg-[#4f2e89] text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyForm;
