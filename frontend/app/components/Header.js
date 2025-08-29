'use client'

import React from 'react'
import Image from 'next/image'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const Header = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine)
  }

  return (
    <section id='home' className="relative w-full min-h-screen flex items-center justify-center px-6 py-10 bg-white dark:bg-[#0f172a] overflow-hidden">

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: '' },
          particles: {
            number: { value: 50 },
            color: { value: '#64748b' },
            shape: { type: 'circle' },
            opacity: { value: 0.3 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            links: {
              enable: true,
              color: '#94a3b8',
              distance: 100,
              opacity: 0.2,
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#f87171"
            fillOpacity="0.2"
            d="M0,96L60,122.7C120,149,240,203,360,202.7C480,203,600,149,720,122.7C840,96,960,96,1080,117.3C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-10 z-10"
      >
        {/* LEFT TEXT SECTION */}
        <div className="text-center md:text-left flex-1">
          <h1 className="flex items-center justify-center md:justify-start gap-2 text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Hi! I&#39;m Rupesh Sah
            <Image src={assets.hand_icon} alt="Waving hand" className="w-6 h-6" />
          </h1>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mt-2 leading-tight">
            Full Stack Developer
          </h2>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
            I build modern web apps using{' '}
            <span className="text-blue-500 font-medium">React</span>,{' '}
            <span className="text-red-500 font-medium">Next.js</span>,{' '}
            <span className="text-green-600 font-medium">Node.js</span> & cloud platforms.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 justify-center md:justify-start">
            <a
              href="#contact"
              className="group px-8 py-3 bg-red-500 text-white rounded-full flex items-center gap-2 shadow-lg hover:bg-red-600 hover:scale-105 transition duration-300"
            >
              Contact Me
              <Image
                src={assets.right_arrow_white}
                alt="Right arrow"
                className="w-4 group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>

            <a
              href="/sample-resume.pdf"
              download
              className="group px-8 py-3 border border-gray-500 dark:border-gray-300 rounded-full flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300 text-gray-800 dark:text-gray-200 hover:scale-105"
            >
              My Resume
              <Image
                src={assets.download_icon}
                alt="Download icon"
                className="w-4 group-hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>
        </div>

        {/* RIGHT PROFILE IMAGE */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-72 h-72">
            <Image
              src="/IMG20250829100219.jpg"
              alt="Profile"
              fill
              className="rounded-full object-cover border-4 border-red-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Header
