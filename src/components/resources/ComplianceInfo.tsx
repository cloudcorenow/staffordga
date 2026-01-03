import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const ComplianceInfo: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title="Regulatory Compliance"
          subtitle="At Stafford Group & Associates, we are committed to maintaining the highest standards of legal and ethical compliance."
          center
        />
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="md:w-16 flex justify-center">
                <ShieldCheck size={48} className="text-primary-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Compliance Commitment</h3>
                <p className="text-gray-700 mb-4">
                  As a professional debt collection agency, we strictly adhere to all federal and state regulations governing debt collection practices. We maintain comprehensive compliance management systems and regularly train our staff on the latest legal requirements.
                </p>
                <p className="text-gray-700">
                  All our collection activities comply with the following regulations:
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="text-lg font-bold text-primary-700 mb-3">Fair Debt Collection Practices Act (FDCPA)</h4>
                <p className="text-gray-600">
                  The FDCPA prohibits debt collectors from using abusive, unfair, or deceptive practices when collecting debts. We strictly follow all FDCPA guidelines regarding communication times, debtor rights, and collection methods.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="text-lg font-bold text-primary-700 mb-3">Fair Credit Reporting Act (FCRA)</h4>
                <p className="text-gray-600">
                  The FCRA regulates how consumer credit information is collected, disseminated, and used. We ensure accurate reporting of credit information and respect consumers' rights to dispute inaccurate information.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="text-lg font-bold text-primary-700 mb-3">Telephone Consumer Protection Act (TCPA)</h4>
                <p className="text-gray-600">
                  The TCPA restricts telemarketing calls, automatic telephone dialing systems, and artificial or prerecorded voice messages. We maintain strict compliance with all TCPA regulations in our communication methods.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="text-lg font-bold text-primary-700 mb-3">State-Specific Regulations</h4>
                <p className="text-gray-600">
                  Many states have additional debt collection regulations beyond federal requirements. Our compliance team ensures that all collection activities adhere to the specific regulations of each state where we operate.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-5 bg-primary-50 border-l-4 border-primary-600 rounded">
              <p className="text-gray-700">
                <strong>FDCPA Disclosure:</strong> This is a communication from a debt collector. This is an attempt to collect a debt and any information obtained will be used for that purpose.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceInfo;