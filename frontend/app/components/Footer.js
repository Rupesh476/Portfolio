'use client'

import React from 'react';
import Image from 'next/image';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import {Github, Linkedin, Twitter,Mail} from 'lucide-react'

const Footer = () => {
  // Animation variants for footer sections
  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animation variants for links and icons
  const linkVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      color: '#f43f5e', // rose-500
      transition: { duration: 0.3 },
    },
  };

  // Animation variants for input and button
  const inputVariants = {
    initial: { borderColor: '#d1d5db' },
    hover: {
      borderColor: '#f43f5e', // rose-500
      boxShadow: '0 0 8px rgba(225, 29, 72, 0.3)',
      transition: { duration: 0.3 },
    },
    focus: {
      borderColor: '#f43f5e', // rose-500
      boxShadow: '0 0 8px rgba(225, 29, 72, 0.3)',
      transition: { duration: 0.3 },
    },
  };

  // Animation variants for submit button
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
    <footer id='contact' className="w-full mt-20 bg-gradient-to-t from-gray-100 to-white dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors relative">
      {/* Background Wave */}
      <div className="absolute left-0 w-full z-0 translate-y-[-20%] dark:hidden pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#e11d48"
            fillOpacity="0.1"
            d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>

      <div className="px-4 sm:px-8 md:px-12 lg:px-[12%] py-16 max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12"
        >
          {/* About Section */}
          <div className="text-center lg:text-left">
<a href="#top">
    <p className='cursor-pointer text-2xl font-bold  hover:text-xl w-36 mx-auto lg:mx-0 mb-4 '>Rupesh <span className='text-3xl text-red-600'>.</span></p>
</a> 
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Full-stack developer crafting modern, scalable web applications with React, Next.js, Node.js, and cloud platforms.
            </p>
            <div className="flex items-center gap-2 justify-center lg:justify-start mt-4">
              <Image src={assets.mail_icon} alt="Email icon" className="w-5" />
              <a href="mailto:sahrupesh288@gmail.com" className="text-sm text-gray-700 dark:text-gray-300">
                sahrupesh288@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Work', 'Contact'].map((item, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  initial="initial"
                  whileHover="hover"
                  className="text-sm text-gray-700 dark:text-gray-300"
                >
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Newsletter</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              Subscribe to stay updated with my latest projects and tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <motion.input
                type="email"
                placeholder="Enter your email"
                required
                variants={inputVariants}
                whileHover="hover"
                whileFocus="focus"
                className="w-full sm:w-auto flex-1 p-3 border border-gray-400 rounded-md outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
              />
              <motion.button
                type="submit"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                className="bg-rose-600 text-white rounded-md px-6 py-3 font-medium hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                Subscribe
              </motion.button>
            </form>
          </div>

          {/* Social Media Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Follow Me</h3>
            <ul className="flex justify-center lg:justify-start gap-4">
              <motion.li variants={linkVariants} initial="initial" whileHover="hover">
                <a href="https://github.com/Rupesh" target="_blank" aria-label="GitHub" className='font-bold'>
                  <Github/>
                </a>
              </motion.li>
              <motion.li variants={linkVariants} initial="initial" whileHover="hover">
                <a href="https://www.linkedin.com/in/rupesh-sah-20b634343" target="_blank" aria-label="LinkedIn" className='font-bold'>
                  <Linkedin/>
                </a>
              </motion.li>
              <motion.li variants={linkVariants} initial="initial" whileHover="hover">
                <a href="https://x.com/RupeshSah390" target="_blank" aria-label="Twitter" className='font-bold'>
                  <Twitter/>
                </a>
              </motion.li>
            </ul>
          </div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center border-t border-gray-400 dark:border-gray-700 mt-12 pt-6 text-sm text-gray-700 dark:text-gray-300"
        >
          <p>© {new Date().getFullYear()} Rupesh Sah. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;