import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, Building, FileText, LineChart, BarChart, Clock, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import CTA from '../components/home/CTA';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="p-6 border-b border-gray-100">
        <div className="text-secondary-600 mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-primary-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="p-6">
        <h4 className="font-medium text-primary-700 mb-3">Key Features:</h4>
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className="text-secondary-500 mr-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Services | Stafford Group & Associates';
  }, []);

  const services = [
    {
      icon: <CreditCard size={40} />,
      title: "Consumer Debt Collection",
      description: "Recover outstanding consumer debts with our ethical and compliant collection practices that preserve customer relationships.",
      features: [
        "Early-stage collections to prevent aging accounts",
        "Multi-channel contact strategies",
        "Payment plan negotiation and setup",
        "Credit bureau reporting when appropriate"
      ]
    },
    {
      icon: <Building size={40} />,
      title: "Commercial Collections",
      description: "Specialized B2B debt recovery services to help your business maintain healthy cash flow and business relationships.",
      features: [
        "Dedicated commercial collection specialists",
        "Industry-specific recovery strategies",
        "Preservation of valuable business relationships",
        "Detailed documentation for potential litigation"
      ]
    },
    {
      icon: <FileText size={40} />,
      title: "Legal Collections",
      description: "When necessary, our network of attorneys can pursue legal action to recover debts through litigation and judgments.",
      features: [
        "Nationwide attorney network",
        "Pre-litigation review and assessment",
        "Court representation when necessary",
        "Post-judgment enforcement strategies"
      ]
    },
    {
      icon: <LineChart size={40} />,
      title: "Portfolio Management",
      description: "Comprehensive analysis and management of your receivables portfolio to maximize recovery rates.",
      features: [
        "Account segmentation and prioritization",
        "Custom collection strategies by segment",
        "Regular performance reporting",
        "Ongoing portfolio optimization"
      ]
    },
    {
      icon: <BarChart size={40} />,
      title: "Analytics & Reporting",
      description: "Gain valuable insights into your accounts receivable with our detailed analytics and reporting tools.",
      features: [
        "Custom dashboards and reporting",
        "Recovery trend analysis",
        "Performance benchmarking",
        "Strategic recommendations"
      ]
    },
    {
      icon: <Clock size={40} />,
      title: "Early Intervention",
      description: "Prevent delinquencies from becoming defaults with our early intervention services.",
      features: [
        "30/60/90-day past due management",
        "Polite payment reminders",
        "Customer self-service payment options",
        "Early resolution incentives"
      ]
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Compliance Management",
      description: "Ensure all collection activities are fully compliant with federal and state regulations.",
      features: [
        "FDCPA, FCRA, and TCPA compliance",
        "State-specific regulatory adherence",
        "Regular compliance audits",
        "Staff training and certification"
      ]
    },
    {
      icon: <Users size={40} />,
      title: "Skip Tracing",
      description: "Locate hard-to-find debtors with our advanced skip tracing techniques and resources.",
      features: [
        "Multiple database searches",
        "Social media investigation",
        "Employment verification",
        "Asset location services"
      ]
    }
  ];

  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive debt recovery solutions tailored to your needs"
        backgroundImage="https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section">
        <div className="container-custom">
          <SectionTitle
            title="How We Can Help"
            subtitle="We offer a comprehensive range of debt collection and accounts receivable management services to help businesses improve cash flow and reduce bad debt write-offs."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                index={index}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-primary-800 mb-4">Not sure which service is right for you?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team can help you determine the best approach based on your specific situation and goals.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get a Consultation <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      <section className="section bg-primary-800 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Collection Process</h2>
              <p className="text-xl text-gray-200 mb-8">
                We follow a structured, strategic approach to maximize recovery while maintaining compliance and professionalism.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-secondary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Account Placement & Review</h3>
                    <p className="text-gray-300">
                      We thoroughly review each account to determine the optimal collection strategy based on account history, balance, and available information.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Contact & Negotiation</h3>
                    <p className="text-gray-300">
                      We implement a multi-channel contact strategy to reach debtors and work to establish payment arrangements that are reasonable for all parties.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Resolution & Payment</h3>
                    <p className="text-gray-300">
                      We facilitate payment through multiple convenient options and maintain clear communication throughout the resolution process.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Reporting & Remittance</h3>
                    <p className="text-gray-300">
                      We provide detailed reporting on all collection activities and prompt remittance of recovered funds to our clients.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Professional debt collection process" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <CTA />
    </>
  );
};

export default ServicesPage;