import React, { useEffect } from 'react';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import Values from '../components/about/Values';
import CTA from '../components/home/CTA';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Stafford Group & Associates';
  }, []);

  return (
    <>
      <PageHeader 
        title="About Stafford Group & Associates" 
        subtitle="Professional debt recovery with integrity and results"
        backgroundImage="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle
                title="Our Story"
                subtitle="Delivering exceptional recovery solutions with a respectful, solution-driven approach."
              />
              
              <div className="space-y-6 text-gray-700">
                <p>
                  At Stafford Group, we specialize in managing accounts receivables with a commitment to professionalism, integrity, and results. Whether handling accounts placed by third parties or acquired directly, our mission is to deliver exceptional recovery solutions while maintaining a respectful and solution-driven approach.
                </p>
                <p>
                  We understand that every financial situation is unique, which is why our team works closely with consumers to find the best path forward—whether through structured payment plans or settlements that align with their current circumstances. By fostering open communication and a results-oriented strategy, we help clients recover outstanding balances efficiently while ensuring a positive experience for all parties involved.
                </p>
                <p>
                  Our dedicated accounts receivables teams work tirelessly to provide strategic, compliant, and ethical debt resolution services. Additionally, we ensure accurate credit bureau trade line updates, reinforcing our commitment to transparency and fairness.
                </p>
                <p className="text-lg font-medium text-primary-700">
                  Let us help you navigate the path to financial resolution with confidence.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Stafford Group & Associates team meeting" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <Values />
      <CTA />
    </>
  );
};

export default AboutPage;