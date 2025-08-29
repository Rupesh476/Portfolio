'use client'

import React from 'react';
import Image from 'next/image';
import { assets, toolsData } from '../assets/assets';
import { Code, Database, Palette, Server } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: Palette,
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      icon: Server,
      technologies: ['Node.js', 'Python', 'Express', 'FastAPI', 'GraphQL'],
    },
    {
      category: 'Database',
      icon: Database,
      technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Supabase', 'Prisma'],
    },
    {
      category: 'DevOps',
      icon: Code,
      technologies: ['Docker', 'CI/CD Pipeline', 'AWS', 'Vercel', 'GitHub Actions', 'Kubernetes'],
    },
  ];

  // Animation variants for skills cards
  const cardVariants = {
    initial: { rotateY: 0, y: 0 },
    hover: {
      rotateY: 10,
      y: -10,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  // Animation variants for tool icons
  const toolVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
  };

  return (
    <div
      id="about"
      className="w-full px-6 sm:px-[12%] py-16 scroll-mt-20 bg-gradient-to-b from-white to-gray-100 dark:from-[#0f172a] dark:to-gray-900"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-lg font-medium text-gray-500 dark:text-gray-300 tracking-wider">
          Introduction
        </h1>
        <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight">
          About Me
        </h2>
      </motion.div>

      {/* Profile and Description */}
      <div className="flex w-full flex-col lg:flex-row items-center gap-12 sm:gap-20 my-16">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="w-64 sm:w-80 rounded-3xl overflow-hidden shadow-xl border-4 border-red-500/20 dark:border-red-500/30"
        >
          <Image
            src="/IMG20250825201025.jpg"
            alt="Rupesh Sah"
            width={320}
            height={100}
            className="w-full rounded-3xl object-cover transition-transform duration-300"
          />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 text-gray-800 dark:text-gray-200"
        >
          <p className="text-lg leading-relaxed tracking-wide">
            Passionate about crafting <span className="text-red-500 font-semibold">scalable full-stack web solutions</span> and delivering innovative user experiences using modern technologies. Specialized in{' '}
            <span className="text-blue-500 font-semibold">React</span>,{' '}
            <span className="text-red-500 font-semibold">Next.js</span>,{' '}
            <span className="text-green-600 font-semibold">Node.js</span>, and cloud solutions.
          </p>

          <h3 className="text-2xl mt-8 mb-4 font-semibold border-t pt-4 text-center text-black dark:text-white">
            My Journey
          </h3>
          <p className="text-base leading-relaxed">
            I embarked on my coding journey 2 years ago and have been constantly learning and evolving. I specialize in building full-stack applications that are not just functional but also beautifully designed and user-friendly.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            When I&apos;m not coding, you&apos;ll find me exploring new tech, contributing to open-source, or helping others in the dev community.
          </p>

          {/* Tools Section */}
          <h4 className="mt-6 text-xl font-semibold text-gray-700 dark:text-gray-300">Tools I Use</h4>
          <ul className="flex flex-wrap items-center gap-4 mt-4">
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                variants={toolVariants}
                initial="initial"
                whileHover="hover"
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 dark:border-white rounded-lg shadow-md dark:bg-gray-800 bg-white hover:bg-red-50 dark:hover:bg-red-900 transition-colors duration-300"
              >
                <Image src={tool} alt={`Tool ${index + 1}`} className="w-6 sm:w-8" />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className="flex flex-col items-center text-center border border-gray-300 dark:border-gray-600 py-6 px-4 rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <skill.icon className="w-8 h-8 mb-3 text-red-500" />
            <h3 className="font-semibold text-lg mb-3 border-b pb-1 w-full text-black dark:text-white">
              {skill.category}
            </h3>
            <ul className="text-sm text-gray-700 dark:text-gray-200 grid grid-cols-2 gap-3 w-full">
              {skill.technologies.map((tech, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.05, backgroundColor: '#fee2e2', color: '#7f1d1d' }}
                  transition={{ duration: 0.2 }}
                  className="bg-red-50 dark:bg-red-900 dark:text-white text-center rounded-lg py-1 px-2 cursor-default"
                >
                  {tech}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;