import React from 'react';
import { Building, Target, Users, Zap, Award, Rocket, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutUsPage: React.FC = () => {
  const stats = [
    { value: '2+', label: 'Years in Business', icon: <Award className="w-8 h-8 text-neon-blue" /> },
    { value: '500+', label: 'Happy Clients', icon: <Users className="w-8 h-8 text-neon-green" /> },
    { value: '50+', label: 'Projects Done', icon: <Rocket className="w-8 h-8 text-neon-violet" /> },
    { value: '24/7', label: 'Customer Support', icon: <Zap className="w-8 h-8 text-yellow-400" /> },
  ];

  return (
    <div className="bg-white dark:bg-dark-navy text-gray-800 dark:text-soft-gray">
      {/* Hero Section */}
      <div className="relative bg-gray-50 dark:bg-light-navy pt-24 pb-16 text-center">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Building className="mx-auto h-12 w-12 text-neon-blue" />
            <h1 className="mt-4 text-4xl font-extrabold font-orbitron tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              About Phytronix
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
              Innovating at the intersection of technology and creativity to bring you the future of electronics.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="py-16 sm:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Target className="h-10 w-10 text-neon-blue mb-4" />
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Our Mission</h2>
              <p className="mt-6 text-lg leading-8">
                At Phytronix, our mission is to empower creators, innovators, and enthusiasts by providing cutting-edge electronic components and devices. We believe that technology should be accessible, powerful, and reliable. We are committed to sourcing the highest quality products and delivering an exceptional customer experience, from discovery to delivery.
              </p>
            </div>
            <div className="w-full h-64 bg-gray-200 dark:bg-light-navy rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" alt="Lab" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 dark:bg-light-navy py-16 sm:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <p className="text-5xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Growth & Funding Section */}
      <div className="py-16 sm:py-24">
        <div className="container-custom">
          <div className="text-center">
            <TrendingUp className="mx-auto h-12 w-12 text-neon-green" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Our Growth & Funding</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
              We're excited to announce that we have secured <span className="font-bold text-neon-green">₹7 Lakhs</span> in funding to fuel our mission and accelerate innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage; 