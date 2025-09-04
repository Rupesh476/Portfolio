'use client'

import React from 'react';
import { Code, Database, Smartphone, Server, Globe, Zap, Shield, Cog } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Creating beautiful, responsive user interfaces with React, TypeScript, and modern CSS frameworks.',
    features: ['React.js Development', 'TypeScript Integration', 'Responsive Design', 'Performance Optimization'],
    popular: false,
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Building robust server-side applications with Node.js, Express, and scalable architecture.',
    features: ['RESTful APIs', 'Database Integration', 'Authentication', 'Performance Tuning'],
    popular: true,
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Designing and optimizing databases for performance, scalability, and data integrity.',
    features: ['MongoDB Design', 'PostgreSQL', 'Data Modeling', 'Query Optimization'],
    popular: false,
  },
  {
    icon: Globe,
    title: 'Full Stack Solutions',
    description: 'End-to-end web application development from concept to deployment.',
    features: ['MERN Stack', 'Project Architecture', 'Code Review', 'Technical Consulting'],
    popular: true,
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Development',
    description: 'Creating mobile-responsive applications that work seamlessly across all devices.',
    features: ['Progressive Web Apps', 'Mobile Optimization', 'Touch Interfaces', 'App-like Experience'],
    popular: false,
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Improving application speed, SEO, and user experience through advanced optimization techniques.',
    features: ['Code Splitting', 'Lazy Loading', 'Bundle Optimization', 'Core Web Vitals'],
    popular: false,
  },
  {
    icon: Shield,
    title: 'Security Implementation',
    description: 'Implementing robust security measures to protect applications and user data.',
    features: ['Authentication Systems', 'Data Encryption', 'Security Audits', 'OWASP Compliance'],
    popular: true,
  },
  {
    icon: Cog,
    title: 'DevOps & Deployment',
    description: 'Setting up CI/CD pipelines and deploying applications to cloud platforms.',
    features: ['AWS Deployment', 'Docker Containerization', 'CI/CD Setup', 'Monitoring'],
    popular: true,
  },
];

const Services = () => {
  // Animation variants for service cards
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: {
      scale: 1.05,
      rotate: 1,
      boxShadow: '0 8px 20px rgba(225, 29, 72, 0.2)',
      transition: { duration: 0.3 },
    },
  };

  // Animation variants for icons
  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
  };

  // Animation variants for buttons
  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      backgroundColor: '#b91c1c', // rose-700
      boxShadow: '0 4px 15px rgba(225, 29, 72, 0.3)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="services"
      className="w-full  px-4 sm:px-8 md:px-12 lg:px-[12%] py-16 scroll-mt-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors"
    >
      <motion.header
        initial={{scale:0.2, opacity: 0, y: -20 }}
        whileInView={{ scale:1, opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{delay:0.2, duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="text-lg font-medium uppercase text-gray-600 dark:text-gray-400 mb-1 tracking-wider">
          What I Offer
        </h1>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight">
          My Services & Expertise
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto leading-relaxed">
          I offer comprehensive development services to bring your ideas to life with cutting-edge
          technology. From concept to deployment, I&apos;ll help you build something amazing.
        </p>
      </motion.header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-16 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial={{scale:0, opacity: 0, y: -5 }}
            whileInView={{scale:1, opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{delay:0.2, duration: 0.5 }}
            whileHover="hover"
            className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer flex flex-col"
            aria-label={service.title}
          >
            {service.popular && (
              <span className="absolute top-3 right-3 bg-rose-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                Popular
              </span>
            )}
            <motion.div variants={iconVariants} whileHover="hover">
              <service.icon className="w-10 h-10 text-rose-500 mb-4" aria-hidden="true" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{service.title}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{service.description}</p>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-2 flex-grow">
              {service.features.map((feature, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5, color: '#e11d48' }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  {feature}
                  <span className="absolute left-0 bottom-0 h-0.5 bg-rose-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      
    </section>
  );
};

export default Services;