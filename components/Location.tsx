'use client'

import { motion } from 'framer-motion'
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Location() {
  return (
    <section id="location" className="max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Location & Contact
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Visit us or get in touch easily
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Contact Information
          </h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                <FiMapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white mb-1">Address</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Manikonda, Shaikpet<br />
                  Hyderabad, Telangana<br />
                  India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                <FiPhone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white mb-1">Phone</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  Owner: Balashow Reddy
                </p>
                <a 
                  href="tel:+918522002814"
                  className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                >
                  +91 8522002814
                </a>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap gap-3">
              <a
                href="tel:+918522002814"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-colors shadow-md"
              >
                <FiPhone className="w-4 h-4" />
                Call Now
              </a>

              <a
                href="https://wa.me/918522002814?text=Hello%2C%20I%20want%20to%20inquire%20about%20hostel%20accommodation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors shadow-md"
              >
                <FaWhatsapp className="w-4 h-4" />
                WhatsApp
              </a>

              <a
                href="https://maps.app.goo.gl/9AXq1ZTd7uUxfydv8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white rounded-xl font-medium transition-colors shadow-md"
              >
                <FiMapPin className="w-4 h-4" />
                Directions
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
        >
          <div className="aspect-video bg-gradient-to-br from-primary-100 via-blue-50 to-indigo-100 dark:from-primary-900 dark:via-blue-900 dark:to-indigo-900 flex items-center justify-center p-12">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.6 }}
              >
                <FiMapPin className="w-20 h-20 text-primary-600 dark:text-primary-400 mx-auto mb-6" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                View Our Location
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm mx-auto">
                Click below to open our exact location in Google Maps
              </p>
              <motion.a
                href="https://maps.app.goo.gl/9AXq1ZTd7uUxfydv8"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <FiMapPin className="w-6 h-6" />
                Show Location on Map
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
