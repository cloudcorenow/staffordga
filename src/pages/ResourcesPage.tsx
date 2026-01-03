import React, { useEffect } from 'react';
import PageHeader from '../components/common/PageHeader';
import FAQSection from '../components/resources/FAQSection';
import ComplianceInfo from '../components/resources/ComplianceInfo';
import CTA from '../components/home/CTA';

const ResourcesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Resources | Stafford Group & Associates';
  }, []);

  return (
    <>
      <PageHeader 
        title="Resources & Information" 
        subtitle="Learn more about debt collection, compliance, and your rights"
        backgroundImage="https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <FAQSection />
      <ComplianceInfo />
      <CTA />
    </>
  );
};

export default ResourcesPage;