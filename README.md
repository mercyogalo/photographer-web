# Professional Photographer Portfolio Website

A modern, responsive portfolio website built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ **Light/Dark Mode** - Smooth theme switching with system preference detection
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎬 **Video Support** - Custom video players with play/pause controls
- 🎨 **Smooth Animations** - Framer Motion animations throughout
- 🖼️ **Image Optimization** - Next.js Image component with automatic optimization
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🚀 **Performance Optimized** - Fast loading times and optimized assets

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, Montserrat, Playfair Display

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
photographer-web/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── portfolio/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Textarea.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ThemeProvider.tsx
│   ├── ThemeToggle.tsx
│   ├── VideoPlayer.tsx
│   ├── FAQ.tsx
│   └── Testimonial.tsx
├── lib/
│   ├── utils.ts
│   └── constants.ts
└── public/
    ├── images/
    └── videos/
```

## Pages

- **Home** (`/`) - Hero section, about preview, services, portfolio preview
- **About** (`/about`) - About content and testimonials
- **Services** (`/services`) - All services and blog/videos section
- **Portfolio** (`/portfolio`) - Filterable portfolio gallery
- **Contact** (`/contact`) - Contact form, information, and FAQs

## Customization

### Colors

Edit `tailwind.config.ts` to customize the primary color and theme colors.

### Content

Update `lib/constants.ts` to modify:
- Navigation links
- Services
- Portfolio images
- Testimonials
- FAQs

### Images & Videos

Place your images in `public/images/` and videos in `public/videos/`.

**Note**: For the hero video, create a file at `public/videos/hero-video.mp4`. You can use any MP4 video file.

## Building for Production

```bash
npm run build
npm start
```

## Features to Add

- [ ] Email service integration (EmailJS, Formspree, etc.)
- [ ] Google Maps integration
- [ ] Image lightbox for portfolio
- [ ] Blog functionality
- [ ] SEO optimization (sitemap, robots.txt)
- [ ] Analytics integration

## License

MIT

