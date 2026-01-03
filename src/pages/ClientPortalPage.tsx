import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, MessageCircle } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';

const ClientPortalPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Client Portal | Stafford Group';
  }, []);

  return (
    <>
      <PageHeader 
        title="Client Portal" 
        subtitle="Manage your account and make payments securely"
        backgroundImage="https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card hover:shadow-xl transition-shadow"
              >
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CreditCard size={32} className="text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-800 mb-4">Pay Online</h3>
                  <p className="text-gray-600 mb-6">
                    Make a secure payment through our payment portal
                  </p>
                  <a 
                    href="https://app.simplicitycollect.com/PaymentPortal.aspx?paymentid" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary w-full"
                  >
                    Access Payment Portal
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="card hover:shadow-xl transition-shadow"
              >
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle size={32} className="text-accent-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-800 mb-4">Payment Arrangements</h3>
                  <p className="text-gray-600 mb-6">
                    Set up a flexible payment plan that works for you
                  </p>
                  <a
                    href="https://app.trykredit.com/enroll/welcome?r=staffordgroupweb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:from-accent-600 hover:to-accent-700 hover:shadow-lg focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 w-full"
                  >
                    Discuss Payment Options
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h4 className="text-lg font-bold text-primary-800 mb-4">Important Notice</h4>
              <p className="text-gray-600">
                This is a communication from a debt collector. This is an attempt to collect a debt and any information obtained will be used for that purpose.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientPortalPage;