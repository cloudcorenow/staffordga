import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Briefcase, Shield } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  gradient: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay, gradient }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl" style={{ background: gradient }} />

      <div className="relative">
        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <div className="text-white">{icon}</div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <CheckCircle size={28} />,
      title: "Compliant Recovery",
      description: "We adhere to all FDCPA, FCRA, and state regulations in our collection practices to protect your business and reputation.",
      gradient: "from-primary-600 to-primary-700"
    },
    {
      icon: <Award size={28} />,
      title: "Industry Expertise",
      description: "With decades of experience across multiple industries, we have the knowledge to handle various debt types and situations.",
      gradient: "from-primary-600 to-primary-700"
    },
    {
      icon: <Briefcase size={28} />,
      title: "Custom Solutions",
      description: "We tailor our approach to your specific needs, whether you're a small business or large enterprise.",
      gradient: "from-primary-600 to-primary-700"
    },
    {
      icon: <Shield size={28} />,
      title: "Data Security",
      description: "Your information and your customers' data are protected with enterprise-grade security and encryption.",
      gradient: "from-primary-600 to-primary-700"
    }
  ];

  return (
    <section className="section bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <SectionTitle
          title="Why Choose Stafford Group"
          subtitle="We combine industry expertise with ethical practices to deliver exceptional recovery results."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
              gradient={feature.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;