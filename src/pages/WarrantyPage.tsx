import React from 'react';
import { ShieldCheck, Wrench, BookUser, MessageSquare } from 'lucide-react';

const PolicySection: React.FC<{
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, icon, children }) => (
  <div className="mb-12">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mr-4">
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
    </div>
    <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-soft-gray">
      {children}
    </div>
  </div>
);

const WarrantyPage: React.FC = () => {
  const whatsappNumber = "+918638044412";
  const claimWhatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}`;

  const registrationMessage = encodeURIComponent(
    `Hello Phytronix, I would like to register my product for warranty.\n\n` +
    `Full Name: \n` +
    `Order ID: \n` +
    `Product Name: \n` +
    `Date of Purchase (from invoice): `
  );
  const registrationWhatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${registrationMessage}`;

  return (
    <div className="bg-white dark:bg-dark-navy min-h-screen">
      <div className="container-custom py-16 md:py-24">
        <div className="text-center mb-12">
          <ShieldCheck className="mx-auto h-12 w-12 text-neon-green" />
          <h1 className="mt-4 text-4xl font-extrabold font-orbitron tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Warranty Information
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Your purchases are protected. Here's how our product warranties work.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <PolicySection title="Our Warranty Promise" icon={<Wrench className="w-6 h-6 text-neon-green" />}>
            <h4>Coverage</h4>
            <p>
              We stand behind the quality of our products. All items sold by Phytronix are covered by a warranty against manufacturing defects. The specific duration and terms of the warranty can be found on the product page or by contacting our support team.
            </p>
          </PolicySection>

          <PolicySection title="Warranty Registration" icon={<BookUser className="w-6 h-6 text-neon-green" />}>
            <h4>Step 1: Register via WhatsApp</h4>
            <p>
              To activate your warranty, you must register your product within 7 days of delivery. Please send a WhatsApp message to our dedicated warranty support number with the following details:
            </p>
            <ul>
              <li>Your Full Name</li>
              <li>Your Order ID</li>
              <li>The name of the product you purchased</li>
              <li>Date of Purchase (as shown on your invoice)</li>
            </ul>
            <p>Click the button below to start the registration process with a pre-filled message.</p>
            <div className="mt-4">
              <a 
                href={registrationWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Register for Warranty on WhatsApp
              </a>
              <p className="mt-2 text-sm">Or message us directly at <strong>{whatsappNumber}</strong></p>
            </div>
          </PolicySection>

          <PolicySection title="How to Make a Claim" icon={<MessageSquare className="w-5 h-6 text-neon-green" />}>
            <h4>Step 2: Contact Us on WhatsApp</h4>
            <p>
              If you have already registered your product and need to make a warranty claim, please contact us on WhatsApp. Describe the issue in detail, and if possible, include photos or a short video demonstrating the problem.
            </p>
            <div className="mt-4">
              <a 
                href={claimWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Warranty Support
              </a>
              <p className="mt-2 text-sm">Or message us directly at <strong>{whatsappNumber}</strong></p>
            </div>
          </PolicySection>
        </div>
      </div>
    </div>
  );
};

export default WarrantyPage; 