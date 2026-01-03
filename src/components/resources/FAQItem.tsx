import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ } from '../../types';

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, onToggle, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
      >
        <h3 className="text-lg font-medium text-primary-800">{faq.question}</h3>
        <span className="text-primary-600 ml-4">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-gray-600">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQItem;