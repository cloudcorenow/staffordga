import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, ShieldCheck, Headset } from 'lucide-react';

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
      icon: <Monitor size={32} />,
      value: "Online Access",
      label: "Review your account when it suits you"
    },
    {
      icon: <ShieldCheck size={32} />,
      value: "Secure Payments",
      label: "Make payments through a protected portal"
    },
    {
      icon: <Headset size={32} />,
      value: "Helpful Assistance",
      label: "Get answers when you need them"
    }
  ];
  
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
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