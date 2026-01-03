import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to improve your
              <span className="block mt-2">
                recovery rates?
              </span>
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed max-w-xl">
              Our team of experts is ready to help you recover your outstanding receivables with our ethical and effective approach.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact" className="btn bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:from-accent-600 hover:to-accent-700 hover:shadow-lg focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 text-lg group">
              Contact Us
              <PhoneCall size={20} className="ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
            <a href="tel:+18002300446" className="btn bg-white/10 text-white hover:bg-white hover:text-primary-900 backdrop-blur-sm border border-white/20 text-lg">
              <PhoneCall size={20} className="mr-2" />
              800-230-0446
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;