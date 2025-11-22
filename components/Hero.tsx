'use client'

import { motion } from 'framer-motion'
import { FiPhone, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'

export default function Hero() {
  return (
    <header className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-blue-600 to-indigo-700 dark:from-primary-900 dark:via-blue-900 dark:to-indigo-950">
      {/* Building Image Overlay */}
      <div className="absolute inset-0 opacity-35">
        <Image 
          src="/building.png" 
          alt="Hostel Building" 
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Gradient Overlay to ensure text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-600/50 via-blue-600/45 to-indigo-700/55 dark:from-primary-900/75 dark:via-blue-900/65 dark:to-indigo-950/80"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto px-4 py-12 text-center"
      >
        <div className="space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-white font-medium">Premium PG Accommodation</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight px-4"
          >
            Meghana Reddy
            <br />
            <span className="text-yellow-300">Executive Boys</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white/90">& PG Hostel</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light px-4"
          >
            Your Premium Home in <span className="font-semibold text-yellow-300">Manikonda, Hyderabad</span>
            <br />
            <span className="text-base sm:text-lg text-white/80">Comfort • Safety • Convenience</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 px-4 w-full max-w-2xl mx-auto"
          >
            <motion.a
              href="tel:+918522002814"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-700 rounded-full font-bold text-base sm:text-lg shadow-2xl hover:shadow-3xl transition-all w-full sm:w-auto"
            >
              <FiPhone className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="whitespace-nowrap">Call: 8522002814</span>
            </motion.a>

            <motion.a
              href="https://wa.me/918522002814?text=Hello%2C%20I%20want%20to%20inquire%20about%20hostel%20accommodation"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white rounded-full font-bold text-base sm:text-lg shadow-2xl hover:shadow-3xl hover:bg-green-600 transition-all w-full sm:w-auto"
            >
              <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
              WhatsApp Us
            </motion.a>

            <motion.a
              href="https://maps.app.goo.gl/9AXq1ZTd7uUxfydv8"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-full font-bold text-base sm:text-lg shadow-2xl hover:bg-white/20 transition-all w-full sm:w-auto"
            >
              <FiMapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              Directions
            </motion.a>
          </motion.div>

          {/* Info Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-6"
          >
            <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-white text-sm font-medium">🏠 4 Room Types</span>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-white text-sm font-medium">⚡ 24/7 Facilities</span>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-white text-sm font-medium">📍 Prime Location</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="currentColor"
            className="text-white dark:text-gray-950"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </header>
  )
}
