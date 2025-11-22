'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { FiSend } from 'react-icons/fi'

type FormData = {
  name: string
  phone: string
  email?: string
  roomType: string
  checkin: string
  message?: string
}

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Message for hostel owner - Clean, professional, easy to scan
    const ownerMessage = 
      `🔔 *NEW ROOM BOOKING INQUIRY*\n` +
      `═══════════════════════════\n\n` +
      
      `👤 *Guest Name*\n` +
      `   ${data.name}\n\n` +
      
      `📱 *Contact Number*\n` +
      `   ${data.phone}\n` +
      `   → Call this number to confirm\n\n` +
      
      `🛏️ *Room Preference*\n` +
      `   ${data.roomType}\n\n` +
      
      `📅 *Check-in Date*\n` +
      `   ${data.checkin}\n\n` +
      
      (data.email ? `📧 *Email Address*\n   ${data.email}\n\n` : '') +
      
      (data.message ? `💬 *Special Request*\n   ${data.message}\n\n` : '') +
      
      `⏰ *Received At*\n` +
      `   ${new Date().toLocaleString('en-IN', { 
        timeZone: 'Asia/Kolkata', 
        hour: '2-digit',
        minute: '2-digit',
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      })}\n\n` +
      
      `═══════════════════════════\n` +
      `✅ *ACTION REQUIRED*\n` +
      `Please call the guest to confirm\n` +
      `room availability and details.`

    // Thank you message for customer - Warm, clear, professional
    const customerMessage = 
      `✨ *BOOKING INQUIRY RECEIVED*\n` +
      `═══════════════════════════\n\n` +
      
      `Dear *${data.name}*,\n\n` +
      `Thank you for your interest in Meghana Reddy Executive Boys PG! 🏠\n\n` +
      
      `📋 *YOUR INQUIRY DETAILS*\n` +
      `───────────────────────────\n` +
      `🛏️  Room Type: *${data.roomType}*\n` +
      `📅  Check-in: *${data.checkin}*\n` +
      `📱  Mobile: *${data.phone}*\n` +
      `───────────────────────────\n\n` +
      
      `⏳ *WHAT HAPPENS NEXT?*\n\n` +
      `   ✓ We'll call you within 2-3 hours\n` +
      `   ✓ Confirm room availability\n` +
      `   ✓ Share complete details & pricing\n` +
      `   ✓ Answer all your questions\n\n` +
      
      `📍 *PROPERTY DETAILS*\n` +
      `───────────────────────────\n` +
      `🏢  Meghana Reddy Executive Boys PG\n` +
      `📌  Manikonda, Hyderabad\n` +
      `📞  +91 8522002814\n` +
      `───────────────────────────\n\n` +
      
      `💼 *WHY CHOOSE US?*\n` +
      `   • Fully furnished rooms\n` +
      `   • Homely food included\n` +
      `   • 24/7 security & WiFi\n` +
      `   • Prime Manikonda location\n\n` +
      
      `If you need immediate assistance,\n` +
      `feel free to call us directly!\n\n` +
      
      `We look forward to hosting you! 🙏\n\n` +
      `Best regards,\n` +
      `*Meghana Reddy PG Team*`

    const ownerWhatsAppURL = `https://wa.me/918522002814?text=${encodeURIComponent(ownerMessage)}`
    const customerWhatsAppURL = `https://wa.me/91${data.phone.replace(/\D/g, '')}?text=${encodeURIComponent(customerMessage)}`

    // Open WhatsApp for owner first
    window.open(ownerWhatsAppURL, '_blank')
    
    setSubmitStatus('success')
    
    // Delay customer message and reset form
    setTimeout(() => {
      window.open(customerWhatsAppURL, '_blank')
      reset()
      setIsSubmitting(false)
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 2000)
  }

  return (
    <section id="booking" className="max-w-3xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Check Room Availability
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Fill in your details and we&apos;ll send you a WhatsApp confirmation within minutes
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Name is required' })}
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all shadow-sm focus:shadow-md"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number *
            </label>
            <input
              id="phone"
              type="tel"
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Please enter a valid 10-digit phone number',
                },
              })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
              placeholder="10-digit mobile number"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email (Optional)
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Room Type *
            </label>
            <select
              id="roomType"
              {...register('roomType', { required: 'Please select a room type' })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
            >
              <option value="">Select room type</option>
              <option value="4-sharing">4 Sharing - ₹6,500/month</option>
              <option value="5-sharing">5 Sharing - ₹5,500/month</option>
              <option value="3-sharing">3 Sharing - ₹7,500/month</option>
              <option value="2-sharing">2 Sharing - ₹9,000/month</option>
            </select>
            {errors.roomType && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.roomType.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="checkin" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Preferred Check-in Date *
            </label>
            <input
              id="checkin"
              type="date"
              {...register('checkin', { required: 'Check-in date is required' })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
            />
            {errors.checkin && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.checkin.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Additional Message (Optional)
            </label>
            <textarea
              id="message"
              rows={4}
              {...register('message')}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all resize-none"
              placeholder="Any special requirements or questions..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white rounded-xl font-medium text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Submitting...
              </>
            ) : (
              <>
                <FiSend className="w-5 h-5" />
                Submit Enquiry
              </>
            )}
          </button>

          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-xl text-center"
            >
              ✅ Thank you! We&apos;ll contact you shortly.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-xl text-center"
            >
              ❌ Something went wrong. Please try calling us directly.
            </motion.div>
          )}
        </form>

        <p className="mt-6 text-xs text-center text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
          You&apos;ll receive instant WhatsApp confirmation • * Required fields
        </p>
      </motion.div>
    </section>
  )
}
