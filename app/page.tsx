'use client'

import Hero from '@/components/Hero'
import Rooms from '@/components/Rooms'
import Amenities from '@/components/Amenities'
import Reviews from '@/components/Reviews'
import Rules from '@/components/Rules'
import FAQ from '@/components/FAQ'
import Location from '@/components/Location'
import BookingForm from '@/components/BookingForm'
import StickyBar from '@/components/StickyBar'
import WhatsAppButton from '@/components/WhatsAppButton'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <a 
        href="#main" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg"
      >
        Skip to Content
      </a>
      
      <Hero />
      
      <main id="main" className="pb-32 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Rooms />
          <Amenities />
          <Reviews />
          <Rules />
          <FAQ />
          <Location />
          <BookingForm />
        </motion.div>
      </main>

      <StickyBar />
      <WhatsAppButton />
      
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 pb-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Meghana Reddy Executive Boys & PG Hostel. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
            Manikonda, Shaikpet, Hyderabad, Telangana • +91 8522002814
          </p>
        </div>
      </footer>
    </>
  )
}
