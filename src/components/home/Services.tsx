import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, FileText, Building, LineChart } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        <div className="text-primary-600 mb-6 inline-block p-4 bg-primary-50 rounded-xl group-hover:bg-gradient-to-br group-hover:from-primary-600 group-hover:to-primary-700 group-hover:text-white transition-all duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <CreditCard size={40} />,
      title: "Consumer Debt Collection",
      description: "Recover outstanding consumer debts with our ethical and compliant collection practices that preserve customer relationships."
    },
    {
      icon: <Building size={40} />,
      title: "Commercial Collections",
      description: "Specialized B2B debt recovery services to help your business maintain healthy cash flow and business relationships."
    },
    {
      icon: <FileText size={40} />,
      title: "Legal Collections",
      description: "When necessary, our network of attorneys can pursue legal action to recover debts through litigation and judgments."
    },
    {
      icon: <LineChart size={40} />,
      title: "Portfolio Management",
      description: "Comprehensive analysis and management of your receivables portfolio to maximize recovery rates."
    }
  ];

  return (
    <section className="section bg-white relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <SectionTitle
          title="Our Services"
          subtitle="We offer a comprehensive range of debt collection and accounts receivable management services."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;