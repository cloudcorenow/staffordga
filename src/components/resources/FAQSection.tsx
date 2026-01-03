import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import FAQItem from './FAQItem';
import { FAQ } from '../../types';

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What is the Fair Debt Collection Practices Act (FDCPA)?",
    answer: "The FDCPA is a federal law that limits the behavior and actions of third-party debt collectors who are attempting to collect debts on behalf of another person or entity. The law restricts the means and methods that collection agencies can use and requires them to treat debtors fairly."
  },
  {
    id: 2,
    question: "How does your debt collection process work?",
    answer: "Our process begins with a thorough review of your accounts. We then implement a strategic, multi-channel approach that may include letters, phone calls, emails, and text messages. We always prioritize compliance and professionalism while working to recover the maximum amount possible."
  },
  {
    id: 3,
    question: "What types of debt do you collect?",
    answer: "We specialize in both consumer and commercial debt collection. This includes credit card debt, medical bills, utility bills, retail accounts, business-to-business debt, and more. Our team has experience across various industries and debt types."
  },
  {
    id: 4,
    question: "How much does your service cost?",
    answer: "We typically work on a contingency fee basis, meaning we only get paid when we successfully recover money for you. Our fees are a percentage of the amount collected and vary based on the age, type, and volume of accounts. Contact us for a customized quote."
  },
  {
    id: 5,
    question: "How quickly can I expect to see results?",
    answer: "The timeline for recovery varies depending on several factors, including the age of the debt, debtor contact information quality, and the nature of the debt. We typically see significant results within the first 30-90 days, with collections continuing for several months."
  },
  {
    id: 6,
    question: "What information do I need to provide to start collections?",
    answer: "To begin the collection process, we'll need basic account information such as debtor name, contact information, amount owed, date of service/purchase, any previous collection attempts, and any supporting documentation (contracts, invoices, statements, etc.)."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className="section">
      <div className="container-custom">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about debt collection and our services."
          center
        />
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;