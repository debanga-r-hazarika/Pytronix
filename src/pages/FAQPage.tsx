import React from 'react';
import { Accordion, AccordionItem } from '../components/ui/Accordion';
import { HelpCircle, Package, Truck, Shield, CircleUser } from 'lucide-react';

const faqData = {
  "Ordering & Products": [
    {
      q: "How do I place an order?",
      a: "Simply browse our products, select the items you wish to purchase, add them to your cart, and proceed to checkout. Follow the on-screen instructions to enter your shipping information and payment details to complete your order."
    },
    {
      q: "Can I modify or cancel my order after placing it?",
      a: "You can request to cancel your order within 2 hours of placing it, provided it has not already been processed. Once an order is in the processing stage, it cannot be modified or canceled. Please visit your order detail page to check for a cancellation option."
    },
    {
      q: "Are your products new or refurbished?",
      a: "All products sold on Phytronix are brand new and come in their original, sealed packaging unless explicitly stated otherwise on the product page."
    }
  ],
  "Shipping & Delivery": [
    {
      q: "What are your shipping options and costs?",
      a: "We offer standard and expedited shipping. Standard shipping is free for all orders over ₹1,500 and costs ₹99 for orders below that amount. Expedited shipping costs are calculated at checkout based on your location and order weight."
    },
    {
      q: "How long does delivery take?",
      a: "Standard delivery typically takes 3-7 business days, while expedited delivery takes 1-3 business days. Delivery times may vary based on your location and public holidays."
    },
    {
      q: "How can I track my order?",
      a: "Once your order has been shipped, you will receive an email with a tracking number and a link to the courier's website. You can also find the tracking information in the 'My Orders' section of your account."
    }
  ],
  "Returns & Warranty": [
    {
      q: "What is your return policy?",
      a: "We accept returns for eligible items within 10 days of delivery. The item must be unused, in its original condition, and with all original packaging and accessories. Please visit our 'Shipping & Returns' page for detailed information."
    },
    {
      q: "How do I claim a warranty?",
      a: "All our products come with a manufacturer's warranty. To claim the warranty, you will need to register your product on the manufacturer's website and follow their claim process. Please refer to our 'Warranty' page for more details."
    }
  ],
  "Account & Security": [
    {
      q: "Is my personal information secure?",
      a: "Absolutely. We use industry-standard SSL encryption to protect your data. Your payment information is processed securely by our payment gateway partner, and we never store your credit card details."
    },
    {
      q: "How do I reset my password?",
      a: "If you've forgotten your password, you can click the 'Forgot Password' link on the login page. An email will be sent to you with instructions on how to reset it."
    }
  ]
};

const iconMap: { [key: string]: React.ReactNode } = {
  "Ordering & Products": <Package className="w-6 h-6 mr-3 text-neon-blue" />,
  "Shipping & Delivery": <Truck className="w-6 h-6 mr-3 text-neon-blue" />,
  "Returns & Warranty": <Shield className="w-6 h-6 mr-3 text-neon-blue" />,
  "Account & Security": <CircleUser className="w-6 h-6 mr-3 text-neon-blue" />,
};

const FAQPage: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-dark-navy min-h-screen">
      <div className="container-custom py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <HelpCircle className="mx-auto h-12 w-12 text-neon-blue" />
          <h1 className="mt-4 text-4xl font-extrabold font-orbitron tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Have questions? We're here to help. Find answers to common queries below.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-4xl mx-auto">
          {Object.entries(faqData).map(([category, faqs]) => (
            <div key={category} className="mb-10">
              <div className="flex items-center mb-4">
                {iconMap[category]}
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{category}</h2>
              </div>
              <Accordion>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} title={faq.q}>
                    <p>{faq.a}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage; 