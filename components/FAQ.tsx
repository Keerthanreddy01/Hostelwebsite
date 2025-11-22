'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  {
    question: 'What are the check-in and check-out times?',
    answer: 'Check-in is from 10:00 AM onwards, and check-out is by 9:00 AM. Flexible timings can be arranged with prior notice to management.',
  },
  {
    question: 'Are visitors allowed?',
    answer: 'Visitors are allowed only in the lobby and common areas. Room access is restricted to residents only for security and privacy reasons.',
  },
  {
    question: 'What is the payment and cancellation policy?',
    answer: 'Payment is required monthly in advance (1st week of the month). Security deposit is refundable. Cancellation requires 15 days notice, and partial refunds are subject to management policy.',
  },
  {
    question: 'Is food provided?',
    answer: 'Yes, home-style food is available as an optional service. We offer breakfast, lunch, and dinner with monthly meal plans. Menu and pricing details available on request.',
  },
  {
    question: 'How do I book a room?',
    answer: 'You can book by calling us at +91 8522002814, messaging on WhatsApp, or filling out the booking form on this website. Visit our hostel for a tour before finalizing.',
  },
  {
    question: 'Is WiFi available in rooms?',
    answer: 'Yes, high-speed WiFi is available throughout the hostel with good coverage in all rooms. Perfect for remote work and online classes.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="max-w-4xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Get answers to common questions
        </p>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <span className="font-medium text-gray-900 dark:text-white pr-4">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
              >
                <FiChevronDown className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-5 pt-0 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
