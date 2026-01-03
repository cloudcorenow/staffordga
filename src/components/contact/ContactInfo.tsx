import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactInfo as ContactInfoType } from '../../types';

const contactInfo: ContactInfoType = {
  address: "P.O. Box 433, Orange, CA 92856",
  phone: "800-230-0446",
  email: "info@staffordga.com",
  hours: "Monday - Thursday: 7:00 AM - 4:00 PM PST\nFriday: 7:00 AM - 12:00 PM PST"
};

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-primary-800 text-white rounded-lg shadow-md p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin size={24} className="text-white mr-4 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-medium text-white mb-1">Mailing Address</h4>
            <p className="text-white">{contactInfo.address}</p>
          </div>
        </div>

        <div className="flex items-start">
          <Phone size={24} className="text-white mr-4 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-medium text-white mb-1">Phone & Fax</h4>
            <p className="text-white">
              <a href={`tel:${contactInfo.phone}`} className="hover:text-teal-400 transition-colors">
                Phone: {contactInfo.phone}
              </a>
            </p>
            <p className="text-white">Fax: 855-466-6308</p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail size={24} className="text-white mr-4 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-medium text-white mb-1">Email</h4>
            <p className="text-white">
              <a href={`mailto:${contactInfo.email}`} className="hover:text-teal-400 transition-colors">
                {contactInfo.email}
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock size={24} className="text-white mr-4 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-medium text-white mb-1">Business Hours</h4>
            <p className="text-white whitespace-pre-line">{contactInfo.hours}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;