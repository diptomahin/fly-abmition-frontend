import React, { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, MapPin, CheckCircle, Star } from "lucide-react";

const EduTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Fetch testimonials from backend
  const fetchTestimonials = async () => {
    try {
      const res = await fetch("https://api.flyambitionbd.com/api/testimonials");
      const data = await res.json();
      if (data.success) {
        // Only include Student testimonials
        const filtered = data.data.filter((t) => t.role === "Student");
        setTestimonials(filtered);
      }
    } catch (err) {
      console.error("Failed to fetch testimonials:", err);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  if (testimonials.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-500">
        No student testimonials available.
      </p>
    );
  }

  return (
    <div data-aos="fade-down" className="bg-gradient-to-br from-gray-800 to-gray-900 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center text-white mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success <span className="text-red-400">Stories</span>
          </h2>
          <p className="text-xl opacity-80">Inspiring career journeys from around the world</p>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={() =>
              setCurrentTestimonial(
                currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() =>
              setCurrentTestimonial((currentTestimonial + 1) % testimonials.length)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial */}
          <div className="px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              {testimonials[currentTestimonial] && (
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Testimonial Content */}
                    <div className="order-2 md:order-1">
                      <Quote className="w-12 h-12 text-red-400 mb-6" />
                      <p className="text-lg md:text-xl leading-relaxed italic text-white mb-6">
                        "{testimonials[currentTestimonial].text}"
                      </p>

                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-[#4f2e89] rounded-full flex items-center justify-center text-white text-xl font-bold">
                          {testimonials[currentTestimonial].author[0]}
                        </div>
                        <div>
                          <p className="font-bold text-white">
                            {testimonials[currentTestimonial].author}
                          </p>
                          <p className="text-red-300 font-semibold">
                            {testimonials[currentTestimonial].role || "Student"}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className="w-4 h-4 text-gray-300" />
                            <span className="text-gray-300">
                              {testimonials[currentTestimonial].country}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Image / Passport */}
                    <div className="order-1 md:order-2 flex justify-center">
                      <div className="relative w-full flex justify-center">
                        {testimonials[currentTestimonial].image ? (
                          <img
                            src={`https://api.flyambitionbd.com/${testimonials[currentTestimonial].image}`}
                            alt={testimonials[currentTestimonial].author}
                            className="w-80 h-52 md:w-96 md:h-72 object-cover rounded-xl border-4 border-yellow-400 shadow-2xl"
                          />
                        ) : (
                          <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 w-80 h-52 md:w-96 md:h-72">
                            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg border-4 border-yellow-400 relative overflow-hidden flex flex-col items-center justify-center">
                              <div className="text-yellow-200 font-bold text-sm mb-2">
                                PASSPORT
                              </div>
                              <div className="text-white font-semibold text-lg">
                                {testimonials[currentTestimonial].country?.toUpperCase()}
                              </div>
                              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-red-500 to-[#4f2e89] rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-4">
                                {testimonials[currentTestimonial].author[0]}
                              </div>
                            </div>

                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12">
                              <div className="border-4 border-green-400 rounded-full p-2 bg-green-400/20">
                                <CheckCircle className="w-8 h-8 text-green-400" />
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Floating success badge */}
                        <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-3 shadow-lg animate-pulse">
                          <Star className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-red-500 scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EduTestimonials;
