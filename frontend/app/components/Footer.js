'use client'

import React from 'react';
import Image from 'next/image';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

// Parent animation (stagger children)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      ease: 'easeOut',
    },
  },
};

// Children animation (fade + slide)
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } },
};

// Hover animation for social icons
const iconVariants = {
  initial: { scale: 1, color: '#e5e7eb' }, // gray-200
  hover: {
    scale: 1.2,
    color: '#e11d48', // rose-600
    transition: { duration: 0.3 },
  },
};

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full mt-20 bg-gradient-to-t from-gray-100 to-white dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 relative overflow-hidden"
    >
      {/* Animated Background Wave */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-0 w-full z-0 translate-y-[-20%] dark:hidden pointer-events-none"
      >
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#e11d48"
            fillOpacity="0.1"
            d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="px-4 sm:px-8 md:px-12 lg:px-[12%] py-16 max-w-7xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* About Section */}
          <motion.div variants={sectionVariants} className="text-center lg:text-left">
            <a href="#top">
              <p className="cursor-pointer text-2xl font-bold hover:scale-105 transition-transform duration-300 w-36 mx-auto lg:mx-0 mb-4">
                Rupesh <span className="text-3xl text-red-600">.</span>
              </p>
            </a>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Full-stack developer crafting modern, scalable web applications with React, Next.js, Node.js, and cloud platforms.
            </p>
            <div className="flex items-center gap-2 justify-center lg:justify-start mt-4">
              <Image src={assets.mail_icon} alt="Email icon" width={20} height={20} />
              <a href="mailto:sahrupesh288@gmail.com" className="text-sm text-gray-700 dark:text-gray-300">
                sahrupesh288@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div variants={sectionVariants} className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Work', 'Contact'].map((item, index) => (
                <li key={index} className="text-sm text-gray-700 dark:text-gray-300 hover:text-rose-500 transition-colors duration-300">
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div variants={sectionVariants} className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Newsletter</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              Subscribe to stay updated with my latest projects and tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full sm:w-auto flex-1 p-3 border border-gray-400 rounded-md outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-rose-500 focus:ring-2 focus:ring-rose-500 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-rose-600 text-white rounded-md px-6 py-3 font-medium hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>

          {/* Social Media Section */}
          <motion.div variants={sectionVariants} className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Follow Me</h3>
            <ul className="flex justify-center lg:justify-start gap-4">
              {[
                { icon: Github, link: 'https://github.com/Rupesh', label: 'GitHub' },
                { icon: Linkedin, link: 'https://www.linkedin.com/in/rupesh-sah-20b634343', label: 'LinkedIn' },
                { icon: Twitter, link: 'https://x.com/RupeshSah390', label: 'Twitter' },
              ].map((item, index) => (
                <motion.li key={index} variants={iconVariants} initial="initial" whileHover="hover">
                  <a href={item.link} target="_blank" aria-label={item.label}>
                    <item.icon className="w-6 h-6" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          variants={sectionVariants}
          className="text-center border-t border-gray-400 dark:border-gray-700 mt-12 pt-6 text-sm text-gray-700 dark:text-gray-300"
        >
          <p>© {new Date().getFullYear()} Rupesh Sah. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
