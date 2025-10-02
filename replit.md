# Overview

ZH Kitchen is a modern restaurant website showcasing traditional Indonesian pastries and treats. Built with Next.js 14+, the application features a beautiful product catalog, interactive ordering system, and WhatsApp integration for seamless customer orders. The site displays 5 authentic Indonesian pastries including Bolen Pisang, Onde Onde, Kue Sus, Pastel Goreng, and Risol Mayo, with category filtering and real-time order management.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: Next.js 14+ with App Router for modern React development and file-based routing
- **TypeScript**: Full type safety across components and data structures
- **Styling**: Tailwind CSS with custom color schemes and responsive design patterns
- **Animation**: Lightweight CSS-based animations for optimal performance (pulse, spin, fade, slide, shimmer effects)
- **Font System**: Google Fonts integration with Inter and Poppins font families

## Component Structure
- **Layout Components**: Header with sticky navigation, Footer with contact information
- **Product Display**: ProductGrid with category filtering and ProductCard for individual items
- **Ordering System**: OrderForm with real-time price calculation and quantity management
- **Hero Section**: Animated landing area with gradient backgrounds

## State Management
- **React Context**: OrderContext manages shopping cart state, order items, and form visibility
- **Local State**: Component-level state for filters, loading states, and form inputs
- **Order Flow**: Add to cart, quantity updates, and order form interactions

## Data Architecture
- **Static Data**: Product catalog stored in JSON format with structured product information
- **Product Schema**: Includes id, name, description, price, category, and image paths
- **Category System**: Traditional, Pastry, and Savory classifications with icon mapping

## Performance Optimizations
- **Image Optimization**: Next.js Image component with WebP/AVIF formats and responsive sizing
- **Code Splitting**: Automatic route-based splitting via Next.js App Router
- **Font Loading**: Optimized Google Fonts loading with display=swap
- **Compression**: Enabled gzip compression and removed powered-by headers

# External Dependencies

## Third-Party Libraries
- No heavy animation libraries - using native CSS animations for optimal performance and fast load times

## WhatsApp Integration
- **Direct Messaging**: Environment variable configuration for WhatsApp business number
- **Order Formatting**: Automatic message generation with customer details and order summary
- **Deep Linking**: WhatsApp API integration for seamless order placement

## Development Tools
- **ESLint**: Code quality and consistency enforcement with Next.js configuration
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins
- **TypeScript Compiler**: Strict type checking with path mapping for clean imports

## Font Services
- **Google Fonts**: Inter and Poppins font families with multiple weights and optimized loading

# Deployment Configuration

## Vercel Deployment
- **Platform**: Optimized for Vercel serverless deployment
- **Build Command**: `npm run build` - Production build with TypeScript/ESLint validation
- **Dev Command**: `npm run dev` - Development server on port 5000
- **Region**: Singapore (sin1) for optimal Southeast Asia performance
- **Functions**: Serverless functions with 1024MB memory, 10s max duration

## Production Optimizations
- **Image Optimization**: WebP/AVIF formats with responsive device sizes
- **Compression**: Gzip compression enabled
- **Minification**: SWC minifier for optimal bundle size
- **Strict Mode**: React strict mode and TypeScript strict checking enabled
- **Security**: Powered-by header removed for security

## Environment Variables
- **NEXT_PUBLIC_WHATSAPP_NUMBER**: WhatsApp business number for order integration

# Recent Changes

## October 2, 2025 - Performance Optimization & Lightweight Animations

### Performance-First Animation System
- **Removed Heavy Libraries**: Eliminated Framer Motion and GSAP to improve load times and reduce bundle size
- **CSS-Only Animations**: Implemented lightweight, performant CSS animations including:
  - `pulse-subtle`: Gentle pulsing effect for logo and loading elements
  - `spin-slow`: Smooth 3-second rotation for decorative elements
  - `fade-in`: Smooth entrance animation for content
  - `slide-up`: Upward slide with fade for staggered content reveals
  - `shimmer`: Animated shimmer effect for progress bars and highlights
- **Server Startup**: Optimized to ~2.4-3 seconds (previously slower with animation libraries)

### Loading Screen Implementation
- **Elegant Entry Experience**: Created visually appealing LoadingScreen component with:
  - Spinning gradient ring around logo (orange/amber/yellow theme)
  - Smooth progress bar with shimmer effect
  - Staggered content animations (fade-in → slide-up sequence)
  - Bouncing food emojis (🥟 🍡 🥐) with delayed timing
  - Smooth exit transition (fade-out with scale effect)
- **Zero External Dependencies**: Built entirely with React hooks and CSS animations
- **Performance**: 2-second loading duration with smooth 500ms exit animation

### Header Logo Animation
- **Subtle Interactions**: Added gentle hover and idle animations to logo:
  - Continuous pulse-subtle effect for subtle presence
  - Hover: scale(1.1) + rotate(5deg) with smooth transition
  - Orange glow effect on hover matching brand colors
- **Lightweight**: Uses only CSS transitions and animations, no JavaScript libraries

### Technical Performance Improvements
- **Bundle Size**: Significantly reduced by removing Framer Motion (~90KB) and GSAP (~50KB)
- **Load Time**: Faster initial page load and Time-to-Interactive
- **Animation Performance**: All animations run on GPU-accelerated CSS properties
- **Memory Efficiency**: No animation library overhead or cleanup requirements

### Design Consistency
- Maintained orange/amber gradient scheme throughout all animations
- Consistent timing functions (ease-in-out, ease-out) for smooth motion
- Cohesive visual language across loading screen, header, and page transitions

## September 30, 2025 - Initial Design Implementation

### Design Improvements
- Enhanced Hero Section with sophisticated gradients, floating food icons, animated CTA buttons, and trust indicators
- Upgraded Header with glassmorphism effect, scroll-based animations, responsive mobile menu with hamburger animation
- Modernized Product Cards with advanced hover effects, gradient overlays, quick view badge, and enhanced shadows
- Professional Footer with 4-column layout, social media links, operating hours, and animated elements

### Deployment Configuration
- Configured Next.js for optimal Vercel deployment (removed standalone output mode)
- Added vercel.json with Singapore region and function optimizations
- Created comprehensive .gitignore for proper version control
- Verified production build succeeds without errors
- Development server running on port 5000 with hot reload