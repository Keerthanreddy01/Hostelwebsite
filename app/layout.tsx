import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import type { Metadata } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Meghana Reddy Executive Boys & PG Hostel | Manikonda Hyderabad',
  description: 'Premium boys & PG hostel in Manikonda, Hyderabad. Comfortable rooms, safety, WiFi, CCTV, housekeeping, and convenient location. Book now.',
  keywords: ['hostel', 'PG', 'Hyderabad', 'Manikonda', 'boys hostel', 'accommodation'],
  authors: [{ name: 'Meghana Reddy Hostel' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' }
  ],
  openGraph: {
    title: 'Meghana Reddy Executive Boys & PG Hostel',
    description: 'Comfort • Safety • Convenience — Your Home in Hyderabad',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Meghana Reddy Hostel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keerthi Reddy Executive Boys & PG Hostel',
    description: 'Comfort • Safety • Convenience — Your Home in Hyderabad',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LodgingBusiness',
              name: 'Meghana Reddy Executive Boys & PG Hostel',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Manikonda, Shaikpet',
                addressLocality: 'Hyderabad',
                addressRegion: 'Telangana',
                addressCountry: 'IN',
              },
              telephone: '+91-8522002814',
              description: 'Premium boys & PG hostel with comfortable rooms, safety, WiFi, CCTV, housekeeping.',
              openingHours: 'Mo-Su 00:00-23:59',
              priceRange: '₹₹',
              amenityFeature: [
                { '@type': 'LocationFeatureSpecification', name: 'WiFi', value: true },
                { '@type': 'LocationFeatureSpecification', name: 'CCTV Security', value: true },
                { '@type': 'LocationFeatureSpecification', name: 'Housekeeping', value: true },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-100 antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
