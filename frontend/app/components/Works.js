'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { assets } from '../assets/assets';

const Works = () => {
  const workData = [
    {
      title: 'Tutor Session Booking Project',
      description: 'A full-stack web app to book online sessions with separate admin and tutor dashboards, featuring a secured, responsive UI and payment gateway.',
      code: 'https://github.com/Rupesh476/Tutor',
      liveDemo: 'https://tutor-three-delta.vercel.app/',
      bgImage: '/tutor-img.png',
    },
    {
      title: 'Car rental platform',
      description: 'A comprehensive car rental platform that allows users to browse, book, and manage car rentals with ease. Features include user authentication, payment integration, and an intuitive UI.',
      code: 'https://github.com/Rupesh476/CarRental',
      liveDemo: 'https://car-rental-six-lilac.vercel.app',
      bgImage: '/rental.png',
    }
  ];

  // Card hover animation variants
  const cardVariants = {
    initial: { y: 0, scale: 1, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  // Button animation variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      backgroundColor: '#f43f5e',
      color: '#ffffff',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  // Icon animation for the view project button
  const iconVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 45, transition: { duration: 0.3 } },
  };

  return (
    <div id="work" className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center mb-16 relative z-10"
      >
        <h1 className="text-lg font-semibold uppercase text-gray-600 dark:text-gray-400 mb-2 tracking-widest">
          My Portfolio
        </h1>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          My Latest Work
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4 leading-relaxed">
          Explore my web development portfolio showcasing full-stack expertise with modern technologies and responsive design.
        </p>
      </motion.header>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {workData.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg dark:shadow-gray-700 flex flex-col"
          >
            <Image
              src={project.bgImage}
              alt={project.title}
              width={300}
              height={200}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <div className="flex flex-col flex-grow">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm rounded-md bg-rose-100 text-rose-600 font-medium transition-colors"
                >
                  <motion.span variants={buttonVariants} initial="initial" whileHover="hover">
                    Code
                  </motion.span>
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm rounded-md bg-rose-100 text-rose-600 font-medium transition-colors"
                >
                  <motion.span variants={buttonVariants} initial="initial" whileHover="hover">
                    Live Demo
                  </motion.span>
                </a>
              </div>
            </div>
            <motion.div
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
              className="absolute bottom-8 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-red-700"
            >
              <Image src={assets.send_icon} alt="View project" className="w-4 h-4" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.a
        href="#"
        initial="initial"
        whileHover="hover"
        className="w-max flex items-center justify-center gap-3 text-gray-700 dark:text-gray-300 border border-gray-700 dark:border-gray-600 rounded-full py-3 px-12 mx-auto mt-12 font-medium transition-colors"
      >
        Show More
        <motion.div variants={{ hover: { x: 6, transition: { duration: 0.3 } } }}>
          <Image src={assets.right_arrow_bold} alt="Right arrow" className="w-5" />
        </motion.div>
      </motion.a>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{scale:1, opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{  duration: 0.5 }}
        className="bg-rose-50 dark:bg-rose-900/50 rounded-xl py-8 px-6 mt-8 sm:px-8 text-center max-w-4xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-black dark:text-white">
          Ready to Start Your Project?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 max-w-lg mx-auto leading-relaxed">
          Let&apos;s discuss your requirements and create something amazing together. I&apos;m here to help bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            className="bg-rose-600 text-white rounded-lg px-6 py-3 font-medium hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-colors"
          >
            Get Free Consultation
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            className="border border-gray-400 dark:border-gray-600 rounded-lg px-6 py-3 font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors"
          >
            View Portfolio
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Works;