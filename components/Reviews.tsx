'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaStar } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/pagination'

const reviews = [
  {
    id: 1,
    name: 'Rahul Kumar',
    rating: 5,
    text: 'Clean rooms and very friendly management. The location is convenient and close to my office. WiFi speed is excellent!',
    date: 'October 2024',
  },
  {
    id: 2,
    name: 'Sandeep Malhotra',
    rating: 5,
    text: 'Great hostel with all basic amenities. The food quality is good and housekeeping is regular. Highly recommended!',
    date: 'September 2024',
  },
  {
    id: 3,
    name: 'Abhishek Tripathi',
    rating: 4,
    text: 'Secure environment with CCTV everywhere. Management is responsive and the rooms are well-maintained.',
    date: 'November 2024',
  },
  {
    id: 4,
    name: 'Naveen Reddy',
    rating: 5,
    text: 'Best PG in Manikonda area! Clean bathrooms, hot water available, and very reasonable pricing. Worth every rupee.',
    date: 'August 2024',
  },
  {
    id: 5,
    name: 'Karthik Sharma',
    rating: 4,
    text: 'Peaceful environment for studies. Good internet connectivity for work from home. Owner is very cooperative.',
    date: 'October 2024',
  },
  {
    id: 6,
    name: 'Vijay Krishnan',
    rating: 5,
    text: 'Feels like home away from home. The staff is helpful and rooms are spacious. Power backup is a huge plus!',
    date: 'September 2024',
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          What Our Residents Say
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Real feedback from people who call this place home
        </p>
      </motion.div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary-600',
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="!pb-12"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={review.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 h-full"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? 'text-yellow-500'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-2">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {review.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {review.date}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #9ca3af;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #2563eb !important;
          width: 24px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  )
}
