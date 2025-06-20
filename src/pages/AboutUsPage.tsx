import React from 'react';
import { Building, Target, Users, Zap, Award, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import teamMember1 from '../../public/fonts/mastercard-logo.png';
import teamMember2 from '../../public/fonts/upi-logo.png';
import teamMember3 from '../../public/fonts/visa-logo.png';

const AboutUsPage: React.FC = () => {
  const stats = [
    { value: '5+', label: 'Years in Business', icon: <Award className="w-8 h-8 text-neon-blue" /> },
    { value: '10k+', label: 'Happy Customers', icon: <Users className="w-8 h-8 text-neon-green" /> },
    { value: '100+', label: 'Products Launched', icon: <Rocket className="w-8 h-8 text-neon-violet" /> },
    { value: '24/7', label: 'Customer Support', icon: <Zap className="w-8 h-8 text-yellow-400" /> },
  ];

  const team = [
    { name: 'Alex Johnson', role: 'Founder & CEO', image: teamMember1 },
    { name: 'Maria Garcia', role: 'Head of Engineering', image: teamMember2 },
    { name: 'David Chen', role: 'Lead Product Designer', image: teamMember3 },
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

      {/* Meet the Team Section */}
      <div className="py-16 sm:py-24">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">The passionate minds behind Phytronix.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 bg-gray-50 dark:bg-light-navy rounded-lg shadow-md"
                whileHover={{ y: -5 }}
              >
                <img className="mx-auto h-24 w-24 rounded-full" src={member.image} alt={member.name} />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-sm leading-6 text-neon-blue">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage; 