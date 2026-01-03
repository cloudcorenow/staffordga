import React from 'react';
import { motion } from 'framer-motion';
import { Percent, Users, Award, CreditCard } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center group"
    >
      <div className="inline-flex p-4 bg-secondary-500/10 rounded-xl text-white mb-4 group-hover:bg-secondary-500/20 group-hover:scale-110 group-hover:text-teal-400 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">{value}</h3>
      <p className="text-gray-300 text-lg">{label}</p>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Percent size={32} />,
      value: "32%",
      label: "Average Recovery Rate"
    },
    {
      icon: <Users size={32} />,
      value: "850+",
      label: "Satisfied Clients"
    },
    {
      icon: <Award size={32} />,
      value: "25+",
      label: "Years of Experience"
    },
    {
      icon: <CreditCard size={32} />,
      value: "$250M+",
      label: "Recovered for Clients"
    }
  ];
  
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;