import React from 'react'

const EduTestimonials = () => {
  return (
    <div>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            What Our Students Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Aisha Khan",
                feedback:
                  "FlyAmbition helped me secure admission in Canada with a scholarship. The team was supportive throughout.",
              },
              {
                name: "Ravi Patel",
                feedback:
                  "Visa process was smooth and stress-free. I am now pursuing my Masters in Australia thanks to FlyAmbition.",
              },
              {
                name: "Maria Gomez",
                feedback:
                  "Their guidance on choosing the right university in the UK was invaluable. Highly recommended!",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.feedback}"
                </p>
                <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default EduTestimonials
