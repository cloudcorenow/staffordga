import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 overflow-hidden min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-primary-50/30 z-0" />

      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="container-custom relative z-10 pt-12 pb-24 md:pt-16 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 border border-primary-300 rounded-full text-primary-800 text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <Shield size={16} className="text-primary-700" />
              <span>Trusted Professional Services</span>
            </motion.div>

            <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6"
>
  Professional Debt Recovery{' '}
  <span className="inline-block mt-1 text-blue-600">
    Solutions
  </span>
</motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed"
            >
              We specialize in managing accounts receivables with integrity and results. Our team collaborates with consumers to identify effective solutions through customized payment plans and settlements.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Link
                to="/contact"
                className="btn bg-blue-600 text-white hover:bg-blue-700 border-blue-600 hover:border-blue-700 group text-center"
              >
                Get Started
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-gray-300"
            >
              {[
                { icon: Users, label: 'Expert Team', value: '25+' },
                { icon: TrendingUp, label: 'Recovery Rate', value: '95%' },
                { icon: Shield, label: 'Years Experience', value: '20+' }
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <stat.icon className="text-primary-600 mb-3 mx-auto lg:mx-0" size={28} />
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-700 leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-300/40 to-secondary-300/40 rounded-3xl blur-3xl" />
              <img
                src="/360_f_760150631_ybt94qov9zyuutrqpc6ibfbyvtgdh4ss.jpg"
                alt="Financial protection and money management"
                className="relative rounded-3xl shadow-2xl border border-gray-200 w-full"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500" />
    </div>
  );
};

export default Hero;