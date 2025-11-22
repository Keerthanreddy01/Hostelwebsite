'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/918522002814?text=Hello%2C%20I%20want%20to%20inquire%20about%20hostel%20accommodation"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white rounded-full shadow-2xl flex items-center justify-center z-40 group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7 group-hover:scale-110 transition-transform" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
    </motion.a>
  )
}
