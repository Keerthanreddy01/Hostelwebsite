'use client'

import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'

const rules = [
  'Maintain cleanliness in rooms & common areas',
  'Visitors not allowed inside rooms',
  'No loud music after 10 PM',
  'Report issues to management immediately',
  'Respect hostel property',
  'Smoking & drinking strictly prohibited inside premises',
  'Keep valuables safe - management not responsible for lost items',
  'Follow fire safety protocols',
]

export default function Rules() {
  return (
    <section id="rules" className="max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Rules & Regulations
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Simple guidelines for a harmonious living environment
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-850 dark:to-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
      >
        <ul className="space-y-4">
          {rules.map((rule, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ x: 4 }}
              className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
            >
              <span className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mt-0.5">
                <FiCheck className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              </span>
              <span className="text-gray-700 dark:text-gray-300">{rule}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
