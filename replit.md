# Overview

ZH Kitchen is a modern restaurant website showcasing traditional Indonesian pastries and treats. Built with Next.js 14+, the application features a beautiful product catalog, interactive ordering system, and WhatsApp integration for seamless customer orders. The site displays 5 authentic Indonesian pastries including Bolen Pisang, Onde Onde, Kue Sus, Pastel Goreng, and Risol Mayo, with category filtering and real-time order management.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: Next.js 14+ with App Router for modern React development and file-based routing
- **TypeScript**: Full type safety across components and data structures
- **Styling**: Tailwind CSS with custom color schemes and responsive design patterns
- **Animation**: Dual animation system using Framer Motion for component animations and GSAP for advanced interactions
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
- **framer-motion**: Advanced animations and gesture handling for interactive UI elements
- **gsap**: Professional-grade animation library for complex motion graphics

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

# Recent Changes (September 30, 2025)

## Design Improvements
- Enhanced Hero Section with sophisticated gradients, floating food icons, animated CTA buttons, and trust indicators
- Upgraded Header with glassmorphism effect, scroll-based animations, responsive mobile menu with hamburger animation
- Modernized Product Cards with advanced hover effects, gradient overlays, quick view badge, and enhanced shadows
- Professional Footer with 4-column layout, social media links, operating hours, and animated elements

## Deployment Configuration
- Configured Next.js for optimal Vercel deployment (removed standalone output mode)
- Added vercel.json with Singapore region and function optimizations
- Created comprehensive .gitignore for proper version control
- Verified production build succeeds without errors
- Development server running on port 5000 with hot reload