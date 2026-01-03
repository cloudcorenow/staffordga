import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | Stafford Group & Associates';
  }, []);

  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Reach out to our team for inquiries, quotes, or assistance"
        backgroundImage="https://images.pexels.com/photos/7709086/pexels-photo-7709086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <ContactForm />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactInfo />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;