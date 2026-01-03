import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-primary-950 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-600/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-1 mb-6 group">
              <img
                src="https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/5c19e074-87f8-4fe5-6b05-6caccfab0200/public"
                alt="Stafford Group"
                className="h-24 w-auto group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-white text-2xl font-bold tracking-wide font-garamond">
                Stafford & Associates
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional debt collection services with integrity, compliance, and results.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center">
              Quick Links
              <div className="ml-3 h-px flex-1 bg-gradient-to-r from-primary-600 to-transparent" />
            </h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Our Services' },
                { to: '/resources', label: 'Resources' },
                { to: '/contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-teal-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-px bg-teal-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center">
              Legal
              <div className="ml-3 h-px flex-1 bg-gradient-to-r from-primary-600 to-transparent" />
            </h3>
            <ul className="space-y-3">
              {[
                { to: '/legal', label: 'Terms of Use' },
                { to: '/legal', label: 'Privacy Policy' },
                { to: '/legal', label: 'SMS Consent' },
                { to: '/resources', label: 'FDCPA Compliance' }
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-teal-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-px bg-teal-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center">
              Contact Us
              <div className="ml-3 h-px flex-1 bg-gradient-to-r from-primary-600 to-transparent" />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="p-2.5 bg-white/5 hover:bg-gradient-to-br hover:from-teal-500 hover:to-teal-600 rounded-lg mr-3 mt-0.5 transition-all duration-300 hover:scale-110">
                  <MapPin size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-gray-400 text-sm leading-relaxed">P.O. Box 433<br />Orange, CA 92856</span>
              </li>
              <li className="flex items-center group">
                <div className="p-2.5 bg-white/5 hover:bg-gradient-to-br hover:from-teal-500 hover:to-teal-600 rounded-lg mr-3 transition-all duration-300 hover:scale-110">
                  <Phone size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <a href="tel:+18002300446" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  800-230-0446
                </a>
              </li>
              <li className="flex items-center group">
                <div className="p-2.5 bg-white/5 hover:bg-gradient-to-br hover:from-teal-500 hover:to-teal-600 rounded-lg mr-3 transition-all duration-300 hover:scale-110">
                  <Mail size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <a href="mailto:info@staffordga.com" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  info@staffordga.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Stafford Group. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs text-center md:text-right max-w-2xl">
              This is a debt collection company. This is an attempt to collect a debt and any information obtained will be used for that purpose.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;