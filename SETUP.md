# Setup Guide

## Video Files Required

The website uses video files in several places. You'll need to add the following videos to `public/videos/`:

1. **hero-video.mp4** - Home page hero section (autoplay, looping)
   - Recommended: 1920x1080, MP4 format, under 10MB
   - Should be muted and loopable

2. **showcase-video.mp4** - Video showcase section on home page
   - Recommended: 1920x1080, MP4 format

3. **blog-1.mp4, blog-2.mp4, blog-3.mp4, blog-4.mp4** - Services page blog section
   - Recommended: 800x450, MP4 format

### Video Optimization Tips

- Use H.264 codec for maximum compatibility
- Compress videos to reduce file size
- Keep hero video under 10MB for fast loading
- Use appropriate resolution (1080p for hero, 720p for smaller videos)

### Temporary Solution

If you don't have videos yet, you can:
1. Use placeholder videos from services like Pexels or Pixabay
2. Replace video sections with images temporarily
3. Comment out video components until videos are ready

## Image Optimization

All images are loaded from Unsplash by default. To use your own images:

1. Place images in `public/images/`
2. Update image URLs in `lib/constants.ts`
3. Ensure images are optimized (WebP format recommended)

## Customization

### Branding
- Update logo text in `components/Navbar.tsx` (line with "PhotoStudio")
- Update site name in `app/layout.tsx` metadata
- Update footer content in `components/Footer.tsx`

### Colors
- Primary color: Edit `tailwind.config.ts` → `colors.primary.DEFAULT`
- Theme colors: Adjust `colors.light` and `colors.dark` in tailwind config

### Content
- Navigation: `lib/constants.ts` → `NAV_LINKS`
- Services: `lib/constants.ts` → `SERVICES`
- Portfolio: `lib/constants.ts` → `PORTFOLIO_IMAGES`
- Testimonials: `lib/constants.ts` → `TESTIMONIALS`
- FAQs: `lib/constants.ts` → `FAQS`

## Form Submission

The contact form currently simulates submission. To enable real form submission:

1. Choose a service (EmailJS, Formspree, API route, etc.)
2. Update `app/contact/page.tsx` → `handleSubmit` function
3. Add environment variables if needed

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
- Ensure Node.js 18+ is supported
- Run `npm run build` to test production build
- Set environment variables if needed

## Performance Checklist

- [ ] Optimize all images (WebP format)
- [ ] Compress videos (H.264, appropriate bitrate)
- [ ] Test on mobile devices
- [ ] Check Lighthouse scores
- [ ] Verify all links work
- [ ] Test form submission
- [ ] Verify theme toggle works
- [ ] Test all animations

