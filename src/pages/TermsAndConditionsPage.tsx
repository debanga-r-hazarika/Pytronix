import React from 'react';
import { FileText } from 'lucide-react';

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

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-dark-navy min-h-screen">
      <div className="container-custom py-16 md:py-24">
        <div className="text-center mb-12">
          <FileText className="mx-auto h-12 w-12 text-neon-blue" />
          <h1 className="mt-4 text-4xl font-extrabold font-orbitron tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Terms & Conditions
          </h1>
           <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Please read these terms carefully before using our services.
          </p>
          <p className="text-sm mt-2 text-gray-400">Last Updated: June 23, 2024</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <PolicySection title="1. Agreement to Terms">
            <p>By accessing or using our website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the service.</p>
          </PolicySection>

          <PolicySection title="2. User Accounts">
            <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our service.</p>
          </PolicySection>
          
          <PolicySection title="3. Intellectual Property">
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Phytronix and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries.</p>
          </PolicySection>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage; 