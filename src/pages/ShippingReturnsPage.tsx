import React from 'react';
import { Truck, Box, RotateCcw, Clock } from 'lucide-react';

const PolicySection: React.FC<{
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, icon, children }) => (
  <div className="mb-12">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mr-4">
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
    </div>
    <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-soft-gray">
      {children}
    </div>
  </div>
);

const ShippingReturnsPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-dark-navy min-h-screen">
      <div className="container-custom py-16 md:py-24">
        <div className="text-center mb-12">
          <Truck className="mx-auto h-12 w-12 text-neon-blue" />
          <h1 className="mt-4 text-4xl font-extrabold font-orbitron tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Shipping & Returns
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Everything you need to know about how we get our products to you and our returns process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <PolicySection title="Shipping Policy" icon={<Box className="w-6 h-6 text-neon-blue" />}>
            <h4>Shipping Costs & Methods</h4>
            <ul>
              <li><strong>Standard Shipping:</strong> Free for orders over ₹1,500. A flat rate of ₹99 applies to orders below this amount.</li>
              <li><strong>Expedited Shipping:</strong> Costs are calculated at checkout based on destination and package weight.</li>
            </ul>
            <h4>Processing Time</h4>
            <p>Orders are typically processed and dispatched within 1-2 business days. You will receive a shipping confirmation email once your order is on its way.</p>
            <h4>Delivery Times</h4>
            <p>
              Standard shipping takes approximately 3-7 business days for delivery. Expedited shipping takes 1-3 business days. Please note that these are estimates and can vary based on your location.
            </p>
          </PolicySection>

          <PolicySection title="Returns & Replacements" icon={<RotateCcw className="w-6 h-6 text-neon-blue" />}>
            <h4>10-Day Replacement Policy</h4>
            <p>
                We want you to be completely satisfied with your purchase. If you encounter an issue with an item, you can request a replacement for eligible products within 10 days of delivery.
            </p>
            <h4>Conditions for Replacement</h4>
            <ul>
                <li>The item must be unused, undamaged, and in its original condition.</li>
                <li>All original packaging, manuals, and accessories must be included.</li>
                <li>The issue must be a manufacturing defect or damage sustained during shipping. Issues arising from misuse are not eligible for replacement.</li>
            </ul>
            <h4>How to Initiate a Replacement</h4>
            <p>
                To start a replacement request, please visit the 'My Orders' section of your account, select the order containing the item in question, and follow the on-screen instructions. Our team will review your request and provide you with further details.
            </p>
            <h4>We're Here to Help</h4>
            <p>
                Your satisfaction is our top priority. If you find any issue with your product, please do not hesitate to contact our customer support team. We are always available to help diagnose the problem and guide you through the replacement process.
            </p>
          </PolicySection>
        </div>
      </div>
    </div>
  );
};

export default ShippingReturnsPage; 