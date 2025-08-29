'use client'

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from './components/Nav';
import Header from './components/Header';


// Lazy load below-the-fold components
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Works = lazy(() => import('./components/Works'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const Page = () => {

  // Animation variants for page
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <motion.main
      className="bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-300 relative overflow-hidden scroll-smooth"
      initial="initial"
      animate="animate"
      variants={pageVariants}
      // Respect reduced motion preferences
      {...(typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? {} : {})}
    >
      {/* Background Wave */}
      <div className="absolute left-0 w-full z-0 translate-y-[90%] dark:hidden pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#e11d48"
            fillOpacity="0.1"
            d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          />
        </svg>
      </div>

      <Nav/>
      <Header/>

      <div className="relative z-10 max-w-[1440px] mx-auto">
        <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
          <About />
          <Services/>
          <Works/>
          <Contact/>
          <Footer/>
        </Suspense>
      </div>
    </motion.main>
  );
};

export default Page;