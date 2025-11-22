'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiWifi, FiLock, FiZap, FiDroplet } from 'react-icons/fi'

const roomData = [
  {
    id: '4-sharing',
    title: '4 Sharing Room',
    description: 'Spacious, well-ventilated rooms with individual lockers, study tables, and premium mattresses.',
    price: '₹6,500/month',
    image: '/rooms/4-sharing.jpg',
    amenities: ['WiFi', 'Lockers', 'Hot Water', 'CCTV'],
    features: ['Individual study desk', 'Attached bathroom', 'Daily housekeeping', 'Spacious storage'],
  },
  {
    id: '5-sharing',
    title: '5 Sharing Room',
    description: 'Economical option with essential comforts, perfect for students and working professionals.',
    price: '₹5,500/month',
    image: '/rooms/5-sharing.jpg',
    amenities: ['WiFi', 'Lockers', 'Hot Water', 'CCTV'],
    features: ['Personal locker', 'Common bathroom', 'Regular cleaning', 'Budget-friendly'],
  },
  {
    id: '3-sharing',
    title: '3 Sharing Room',
    description: 'Balanced privacy and affordability with good lighting, ventilation, and personal space.',
    price: '₹7,500/month',
    image: '/rooms/3-sharing.jpg',
    amenities: ['WiFi', 'Lockers', 'Hot Water', 'CCTV'],
    features: ['More personal space', 'Attached bathroom', 'Premium amenities', 'Quiet environment'],
  },
  {
    id: '2-sharing',
    title: '2 Sharing Room',
    description: 'Premium accommodation with maximum privacy, comfort, and spacious living area.',
    price: '₹9,000/month',
    image: '/rooms/2-sharing.jpg',
    amenities: ['WiFi', 'Lockers', 'Hot Water', 'CCTV'],
    features: ['Maximum privacy', 'Attached bathroom', 'AC available', 'Premium comfort'],
  },
]

const amenityIcons: { [key: string]: any } = {
  WiFi: FiWifi,
  Lockers: FiLock,
  'Hot Water': FiDroplet,
  CCTV: FiZap,
}

export default function Rooms() {
  const [expandedRoom, setExpandedRoom] = useState<string | null>(null)

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="rooms" className="max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our Rooms
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Choose from our variety of well-maintained rooms designed for comfort and convenience
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {roomData.map((room, index) => (
          <motion.article
            key={room.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700"
          >
            <div className="aspect-video bg-gradient-to-br from-primary-100 via-blue-50 to-indigo-100 dark:from-primary-900 dark:via-blue-900 dark:to-indigo-900 flex items-center justify-center p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-primary-200/20 to-transparent dark:from-primary-800/20"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {room.id.charAt(0)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Sharing</div>
              </div>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {room.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {room.description}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {room.price}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {room.amenities.map((amenity) => {
                  const Icon = amenityIcons[amenity]
                  return (
                    <span
                      key={amenity}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium"
                    >
                      {Icon && <Icon className="w-3 h-3" />}
                      {amenity}
                    </span>
                  )
                })}
              </div>

              <button
                onClick={() => setExpandedRoom(expandedRoom === room.id ? null : room.id)}
                className="w-full text-sm text-primary-600 dark:text-primary-400 hover:underline font-medium"
              >
                {expandedRoom === room.id ? 'Show less' : 'More details'}
              </button>

              {expandedRoom === room.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2 pt-2 border-t border-gray-200 dark:border-gray-700"
                >
                  <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    {room.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary-600 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              <button
                onClick={scrollToBooking}
                className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-colors duration-200"
              >
                Book Now
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
