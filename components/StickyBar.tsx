'use client'

import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { MdBedroomParent } from 'react-icons/md'

export default function StickyBar() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl border-t-2 border-gray-200 dark:border-gray-800 shadow-2xl">
      <div className="flex items-stretch divide-x divide-gray-200 dark:divide-gray-700">
        <a
          href="tel:+918522002814"
          className="flex-1 flex flex-col items-center justify-center py-3 px-2 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors group"
        >
          <FiPhone className="w-5 h-5 text-primary-600 dark:text-primary-400 mb-1 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Call</span>
        </a>

        <a
          href="https://wa.me/918522002814?text=Hello%2C%20I%20want%20to%20inquire%20about%20hostel%20accommodation"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-3 px-2 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors group"
        >
          <FaWhatsapp className="w-5 h-5 text-green-600 dark:text-green-400 mb-1 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">WhatsApp</span>
        </a>

        <button
          onClick={scrollToBooking}
          className="flex-1 flex flex-col items-center justify-center py-3 px-2 bg-primary-600 hover:bg-primary-700 transition-colors group"
        >
          <MdBedroomParent className="w-5 h-5 text-white mb-1 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-medium text-white">Book Room</span>
        </button>
      </div>
    </div>
  )
}
