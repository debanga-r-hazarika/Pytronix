import React from 'react';
import { FileText, Lock, Shield } from 'lucide-react';

const PolicySection: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
    <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-soft-gray">
      {children}
    </div>
  </div>
);

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-dark-navy min-h-screen">
      <div className="container-custom py-16 md:py-24">
        <div className="text-center mb-12">
          <Lock className="mx-auto h-12 w-12 text-neon-blue" />
          <h1 className="mt-4 text-4xl font-extrabold font-orbitron tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
          </p>
          <p className="text-sm mt-2 text-gray-400">Last Updated: June 23, 2024</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <PolicySection title="1. Information We Collect">
            <p>We collect information you provide directly to us, such as when you create an account, place an order, or contact customer support. This may include:</p>
            <ul>
              <li>Contact information (name, email, phone number, shipping address)</li>
              <li>Account credentials (password)</li>
              <li>Payment information (processed by our secure payment gateway)</li>
            </ul>
            <p>We also automatically collect certain information when you visit our site, such as your IP address, browser type, and browsing behavior.</p>
          </PolicySection>

          <PolicySection title="2. How We Use Your Information">
            <p>Your information is used to:</p>
            <ul>
              <li>Process and fulfill your orders.</li>
              <li>Communicate with you about your account and orders.</li>
              <li>Improve our website and services.</li>
              <li>Prevent fraudulent transactions.</li>
            </ul>
          </PolicySection>
          
          <PolicySection title="3. Data Security">
            <p>We implement a variety of security measures to maintain the safety of your personal information. All sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.</p>
          </PolicySection>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage; 