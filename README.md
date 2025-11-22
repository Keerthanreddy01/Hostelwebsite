# Keerthi Reddy Executive Boys & PG Hostel Website

Modern, mobile-first website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Swiper** for an exceptional user experience.

## 🚀 Features

### Modern Tech Stack
- **Next.js 14** with App Router - Server-side rendering & static export
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom theme
- **Framer Motion** - Smooth, performant animations
- **Swiper** - Touch-enabled carousels
- **React Hook Form** - Efficient form validation
- **React Icons** - Beautiful icon library

### Mobile-First Design
- Optimized for QR code scanning experience
- Fast loading times (< 2s initial load)
- Touch gestures for carousels
- Responsive breakpoints for all devices
- Sticky bottom action bar for quick access

### Key Features
- ✅ Hero section with gradient effects
- ✅ Interactive room cards with expandable details
- ✅ Smooth-scrolling amenities grid
- ✅ Touch-enabled reviews carousel
- ✅ Animated FAQ accordions
- ✅ Integrated WhatsApp & call actions
- ✅ Booking form with validation
- ✅ Auto light/dark mode (system preference)
- ✅ SEO optimized with meta tags & JSON-LD schema
- ✅ PWA-ready with manifest
- ✅ Accessibility compliant (WCAG 2.1)

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

```powershell
# Navigate to project directory
cd "c:\Users\keert\Desktop\PROJECTS\Hostel"

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Development

### Available Scripts

```powershell
npm run dev      # Start development server (hot reload)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Project Structure

```
Hostel/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section
│   ├── Rooms.tsx        # Room showcase
│   ├── Amenities.tsx    # Amenities grid
│   ├── Reviews.tsx      # Reviews carousel
│   ├── Rules.tsx        # Rules & regulations
│   ├── FAQ.tsx          # FAQ accordion
│   ├── Location.tsx     # Location & contact
│   ├── BookingForm.tsx  # Booking form
│   ├── StickyBar.tsx    # Bottom action bar
│   ├── WhatsAppButton.tsx # Floating WhatsApp
│   └── ThemeProvider.tsx # Theme context
├── public/
│   └── manifest.json    # PWA manifest
├── assets/
│   └── images/          # Static images
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── postcss.config.js
```

## ✏️ Customization Guide

### Update Room Prices
Edit `components/Rooms.tsx`:
```typescript
const roomData = [
  { price: '₹6,500/month', ... },  // Update prices here
]
```

### Change Contact Info
Global search and replace:
- Phone: `8522002814`
- WhatsApp: Update in all `wa.me/` links
- Owner name: Search `Balashow Reddy`

### Add/Remove Amenities
Edit `components/Amenities.tsx`:
```typescript
const amenities = [
  { icon: FiWifi, title: '...', description: '...' },
  // Add new amenities here
]
```

### Modify Rules
Edit `components/Rules.tsx`:
```typescript
const rules = [
  'Your rule here',
  // Add/remove rules
]
```

### Update FAQs
Edit `components/FAQ.tsx`:
```typescript
const faqs = [
  { question: '...', answer: '...' },
  // Add new FAQs
]
```

### Replace Images
Place images in `public/` or `assets/images/rooms/` and update paths in components.

### Google Maps Integration
In `components/Location.tsx`, replace the placeholder div with:
```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Hostel Location"
/>
```

### Form Backend Integration
Edit `components/BookingForm.tsx`:
```typescript
const onSubmit = async (data: FormData) => {
  // Replace with real API
  const response = await fetch('/api/booking', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  // Handle response
}
```

## 🌐 Deployment

### Static Export (GitHub Pages / Netlify / Vercel)

```powershell
# Build static site
npm run build

# Output in /out directory
# Deploy /out folder to hosting service
```

### Vercel (Recommended)
```powershell
npm i -g vercel
vercel
```

### Netlify
```powershell
npm run build
# Drag /out folder to Netlify
```

### Traditional Hosting
Upload `/out` folder contents to web server root.

## 🎨 Theme Customization

### Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        600: '#YOUR_COLOR',  // Main CTA color
        // ...other shades
      }
    }
  }
}
```

### Fonts
Edit `app/layout.tsx`:
```typescript
import { Inter, Poppins } from 'next/font/google'
const font = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })
```

## 📱 Mobile Optimization

- All touch targets ≥ 44px
- Sticky bottom bar for easy access
- Swipe gestures enabled
- Fast loading (< 2s)
- Responsive images
- Smooth animations (GPU-accelerated)

## ♿ Accessibility

- Semantic HTML
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Screen reader friendly
- Color contrast ≥ WCAG AA

## 🔍 SEO

- Optimized meta tags
- JSON-LD structured data
- Open Graph tags
- Twitter Card tags
- Fast loading times
- Mobile-friendly
- Semantic markup

## 📞 Support

For issues or questions:
- Owner: Balashow Reddy
- Phone: +91 8522002814
- WhatsApp: https://wa.me/918522002814

## 📄 License

© 2024 Keerthi Reddy Executive Boys & PG Hostel. All rights reserved.

---

**Built with ❤️ for quality living**
