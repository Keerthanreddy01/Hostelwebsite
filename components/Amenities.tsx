'use client'

import { motion } from 'framer-motion'
import { 
  FiWifi, 
  FiZap, 
  FiShield, 
  FiDroplet, 
  FiSun,
  FiHome
} from 'react-icons/fi'
import { MdCleaningServices, MdWaterDrop, MdLocalDining } from 'react-icons/md'

const amenities = [
  { icon: FiDroplet, title: '24/7 Water', description: 'Uninterrupted water supply' },
  { icon: FiWifi, title: 'High-Speed WiFi', description: 'Fast & reliable internet' },
  { icon: FiZap, title: 'Power Backup', description: 'Generator backup available' },
  { icon: FiShield, title: 'CCTV Security', description: '24/7 surveillance' },
  { icon: MdCleaningServices, title: 'Housekeeping', description: 'Daily cleaning service' },
  { icon: FiSun, title: 'Hot Water', description: 'Available morning & evening' },
  { icon: FiHome, title: 'Attached Bathrooms', description: 'Modern & clean' },
  { icon: MdWaterDrop, title: 'RO Water', description: 'Pure drinking water' },
  { icon: MdLocalDining, title: 'Home-style Food', description: 'Optional meal plans' },
]

export default function Amenities() {
  return (
    <section id="amenities" className="max-w-6xl mx-auto px-4 py-16 bg-gray-50 dark:bg-gray-900/50 -mx-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Amenities
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Everything you need for a comfortable stay
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 px-4">
        {amenities.map((amenity, index) => (
          <motion.div
            key={amenity.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.08, y: -8 }}
            className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-600"
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/30 dark:to-blue-900/30 rounded-full ring-2 ring-primary-100 dark:ring-primary-800/50">
                <amenity.icon className="w-6 h-6 md:w-8 md:h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {amenity.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {amenity.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
