import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';

const LegalPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Legal Information | Stafford Group';
  }, []);

  return (
    <>
      <PageHeader 
        title="Legal Information" 
        subtitle="Terms of Use, Privacy Policy, and Important Disclosures"
        backgroundImage="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle
                title="Terms and Conditions"
                subtitle="Last Updated: January 1, 2023"
              />
              
              <div className="prose max-w-none">
                <h3 className="text-xl font-bold text-primary-800 mb-4">Use of Information and Materials</h3>
                <p className="mb-6">
                  Stafford Group reserves the right, at its sole discretion, to modify these Terms of Use, temporarily or permanently discontinue the site or any portion thereof, at any time and for any reason, without prior notice. The information, materials, terms, and descriptions on this site are subject to change.
                </p>
                <p className="mb-6">
                  Unauthorized use of the Stafford Group website, including but not limited to unauthorized access to systems, misuse of passwords, or any improper use of information on the site, is strictly prohibited. Availability of products and services may vary by geographic location and is subject to final determination by Stafford Group. Your continued use of this site after any modifications take effect constitutes your acceptance of the updated Terms of Use.
                </p>

                <h3 className="text-xl font-bold text-primary-800 mb-4">Electronic Communications Consent</h3>
                <p className="mb-6">
                  By using our services, you agree to receive all notices, disclosures, and communications electronically. Stafford Group may contact you via email, SMS (text messages), phone calls (including prerecorded or automated messages), or other provided contact methods.
                </p>

                <h3 className="text-xl font-bold text-primary-800 mb-4">Text Messaging (SMS) Consent</h3>
                <p className="mb-4">
                  By providing your phone number, you expressly consent to receive SMS (text messages) from Stafford Group, its agents, representatives, affiliates, or anyone calling on our behalf, including through automated dialing systems, artificial voice messages, and prerecorded messages.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Message frequency may vary depending on your account status and interactions.</li>
                  <li>Standard messaging and data rates may apply per your mobile carrier's terms.</li>
                  <li>Consent to receive text messages is not required as a condition of purchasing any products or services.</li>
                </ul>

                <h4 className="text-lg font-bold text-primary-800 mb-3">Opting Out of SMS Communications</h4>
                <p className="mb-4">You may opt out of receiving text messages at any time by:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Replying "STOP" to any text message you receive from us.</li>
                  <li>Calling our customer service at (800) 820-2207.</li>
                  <li>Emailing info@staffordga.com with the subject line "Opt-Out of Text Messages", including your full name, phone number, and a request to stop SMS communications.</li>
                </ul>

                <h4 className="text-lg font-bold text-primary-800 mb-3">Certification of Phone Number Ownership</h4>
                <p className="mb-4">By providing your phone number, you certify that:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>The number belongs to you and not someone else.</li>
                  <li>You are authorized to receive calls and messages at that number.</li>
                  <li>You will notify us if you stop using or change the number.</li>
                </ul>

                <h3 className="text-xl font-bold text-primary-800 mb-4">Limitation of Liability</h3>
                <p className="mb-8">
                  Stafford Group is not liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this site, including system failures, errors, omissions, or interruptions, even if advised of the possibility of such damages.
                </p>

                <SectionTitle
                  title="Privacy Policy"
                  subtitle="Effective Date: January 1, 2023"
                />

                <p className="mb-6">
                  This Privacy Policy replaces all previous versions and governs how Stafford Group ("we," "our") collects, uses, and protects personal information obtained through our website www.staffordga.com.
                </p>

                <h3 className="text-xl font-bold text-primary-800 mb-4">Information We Collect</h3>
                <p className="mb-4">We may collect personal information when you:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Visit our website</li>
                  <li>Submit forms or applications</li>
                  <li>Subscribe to newsletters or updates</li>
                  <li>Make payments</li>
                </ul>

                <p className="mb-4">The types of information we collect may include:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Personal identifiers: Name, address, phone number, email, date of birth</li>
                  <li>Financial information: Social Security number, income, account balances, payment history</li>
                  <li>Credit information: Credit history and scores</li>
                  <li>Banking details: Bank name, routing number, account type, and account number</li>
                </ul>

                <h3 className="text-xl font-bold text-primary-800 mb-4">How We Use Your Information</h3>
                <p className="mb-4">Your information may be used to:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Improve customer service and support</li>
                  <li>Process transactions or assist with online activities</li>
                  <li>Send updates and communications related to your account</li>
                  <li>Share relevant services or offers from trusted partners</li>
                </ul>

                <h3 className="text-xl font-bold text-primary-800 mb-4">Data Security & Sharing</h3>
                <p className="mb-6">
                  Personal financial information is securely stored and accessible only to authorized personnel, affiliates, service providers, and legal/regulatory entities as required by law. We do not sell or share your personal information with third parties for marketing purposes.
                </p>

                <p className="mb-4">We may disclose your information to:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Government agencies for legal compliance</li>
                  <li>Authorized service providers who assist in account management</li>
                  <li>Entities acquiring or servicing your account</li>
                </ul>

                <h3 className="text-xl font-bold text-primary-800 mb-4">Consent & Updates</h3>
                <p className="mb-6">
                  By using our website, you consent to this Privacy Policy. Any changes will be posted here. For questions, contact us at info@staffordga.com.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalPage;