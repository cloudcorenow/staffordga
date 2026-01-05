import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Briefcase, BookOpen } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const Value: React.FC<ValueProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex gap-4"
    >
      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-primary-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const Values: React.FC = () => {
  const values = [
    {
      icon: <Heart size={24} />,
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and a commitment to doing what's right for all parties involved."
    },
    {
      icon: <Shield size={24} />,
      title: "Compliance",
      description: "We adhere to all legal and regulatory requirements, maintaining the highest standards of ethical conduct."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Professionalism",
      description: "Our team maintains a respectful and courteous approach in all interactions, representing our clients with dignity."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Education",
      description: "We believe in educating debtors about their options and rights, fostering cooperative resolution."
    }
  ];
  
  return (
    <section className="section">
      <div className="container-custom">
        <SectionTitle
          title="Our Core Values"
          subtitle="These principles guide everything we do and shape how we serve our clients."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {values.map((value, index) => (
            <Value
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;