'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '../assets/assets';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);
    formData.append('access_key', 'edd24c6f-8ce8-4097-b201-e1bea55e2c50');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult('Form Submitted Successfully');
        event.target.reset();
      } else {
        setResult(data.message || 'Submission failed. Please try again.');
        console.error('Error:', data);
      }
    } catch (error) {
      setResult('Network error. Please try again later.');
      console.error('Network error:', error);
    }
  };

  // Animation variants for contact items
  const contactItemVariants = {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hover: {
      scale: 1.05,
      boxShadow: '0 4px 15px rgba(225, 29, 72, 0.2)',
      transition: { duration: 0.3 },
    },
  };

  // Animation variants for form container
  const formVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { y: -5, transition: { duration: 0.3 } },
  };

  // Animation variants for inputs
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
    <section
      id="contact"
      className="w-full px-4 sm:px-8 md:px-12 lg:px-[12%] py-16 scroll-mt-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors"
    >
      {/* Background Wave */}
      <div className="absolute left-0 w-full z-0 translate-y-[80%] dark:hidden pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#e11d48"
            fillOpacity="0.1"
            d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          />
        </svg>
      </div>

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="text-xl font-semibold text-gray-600 dark:text-gray-400 tracking-wider">
          Connect with Me
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-3 leading-relaxed">
          Ready to bring your project to life? Let&apos;s discuss how we can work together to create something amazing.
        </p>
      </motion.header>

      <div className="mx-auto grid gap-12 xl:grid-cols-2 items-start max-w-7xl relative z-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8 px-4 sm:px-0"
        >
          <h2 className="text-center xl:text-left text-4xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="max-w-xl mx-auto xl:mx-0 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I&apos;m always interested in discussing new opportunities, whether it&apos;s a full-time position, freelance project, or collaboration. I&apos;d love to hear from you! If you have any questions, comments, or feedback, please use the form below.
          </p>

          <div className="space-y-6 max-w-md mx-auto xl:mx-0">
            <ContactItem
              icon={<Mail className="w-6 h-6 text-rose-500" />}
              title="Email"
              detail="sahrupesh288@gmail.com"
              variants={contactItemVariants}
            />
            <ContactItem
              icon={<Phone className="w-6 h-6 text-rose-500" />}
              title="Phone"
              detail="+9749702549523"
              variants={contactItemVariants}
            />
            <ContactItem
              icon={<MapPin className="w-6 h-6 text-rose-500" />}
              title="Location"
              detail="Siraha, Nepal"
              variants={contactItemVariants}
            />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={formVariants}
          initial="initial"
          whileInView="animate"
          whileHover="hover"
          viewport={{ once: true }}
          className="max-w-2xl ml-10 px-20 xl:px-10  bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <Input
                label="Name"
                name="name"
                placeholder="Enter your name"
                required
                variants={inputVariants}
              />
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                variants={inputVariants}
                className="lg:col-span-2"
              />
              <Input
                label="Subject"
                name="subject"
                placeholder="Project Inquiry"
                variants={inputVariants}
              />
            </div>

            <label htmlFor="message" className="block font-medium text-gray-900 dark:text-gray-100">
              Message
              <motion.textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Enter your message"
                required
                variants={inputVariants}
                whileFocus="focus"
                className="w-full p-4 border border-gray-400 rounded-md outline-none resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
              />
            </label>

            <motion.button
              type="submit"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              className="py-3 px-8 flex items-center gap-2 bg-rose-600 text-white rounded-full mx-auto font-medium hover:bg-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-500 transition-colors"
            >
              Submit Now
              <motion.div whileHover={{ x: 4, transition: { duration: 0.3 } }}>
                <Image src={assets.right_arrow_white} alt="Right arrow" className="w-4" />
              </motion.div>
            </motion.button>

            {result && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-center text-rose-600 dark:text-rose-400"
              >
                {result}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, detail, variants }) => (
  <motion.div
    variants={variants}
    initial="initial"
    whileInView="animate"
    whileHover="hover"
    viewport={{ once: true }}
    className="flex items-start gap-4 border-b border-gray-300 dark:border-gray-700 pb-4"
  >
    <div>{icon}</div>
    <div>
      <h3 className="text-xl font-semibold text-black dark:text-white">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{detail}</p>
    </div>
  </motion.div>
);

const Input = ({ label, name, placeholder, required, type = 'text', className = '', variants }) => (
  <label htmlFor={name} className="block w-full font-medium text-gray-900 dark:text-gray-100">
    <span className="block mb-2">{label}</span>
    <motion.input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      required={required}
      variants={variants}
      whileHover="hover"
      whileFocus="focus"
      className={`w-full p-3 border border-gray-400 rounded-md outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors ${className}`}
    />
  </label>
);

export default Contact;