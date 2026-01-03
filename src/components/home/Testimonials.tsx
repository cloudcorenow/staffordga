import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { Testimonial } from '../../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Stafford Group has been instrumental in improving our cash flow. Their professional approach and respect for our customer relationships sets them apart from other collection agencies.",
    author: "Sarah Johnson",
    position: "CFO, Metropolitan Healthcare"
  },
  {
    id: 2,
    quote: "We've seen a 35% increase in recovery rates since partnering with Stafford Group. Their team's expertise and dedication to compliance gives us peace of mind.",
    author: "Michael Chen",
    position: "Finance Director, Technovate Inc"
  },
  {
    id: 3,
    quote: "Their approach is both firm and respectful. They've helped us recover debts we thought were lost while maintaining positive relationships with our clients.",
    author: "Robert Martinez",
    position: "Owner, Martinez & Sons Contracting"
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  
  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="section bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what our clients have to say about working with us."
          center
        />

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -left-4 md:-left-8 top-1/2 transform -translate-y-1/2 text-primary-600/10 pointer-events-none">
            <Quote size={120} />
          </div>

          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white p-10 md:p-12 rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-secondary-500/5 to-transparent rounded-bl-full" />

            <div className="relative">
              <div className="mb-6">
                <Quote size={32} className="text-secondary-500 mb-4" />
              </div>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                {testimonials[current].quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonials[current].author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-lg">{testimonials[current].author}</h4>
                  <p className="text-gray-600">{testimonials[current].position}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center items-center mt-10 gap-4">
            <button
              onClick={prev}
              className="p-3 rounded-xl bg-white shadow-md text-primary-600 hover:bg-primary-600 hover:text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index ? 'w-8 bg-primary-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-xl bg-white shadow-md text-primary-600 hover:bg-primary-600 hover:text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;