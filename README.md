# ZH Kitchen - Modern Indonesian Restaurant Website

A modern, elegant, and high-performance restaurant website built with Next.js 14+ featuring traditional Indonesian pastries and modern treats.

## 🍰 Features

- **Modern Tech Stack**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion + GSAP for engaging user experience
- **Product Catalog**: Beautiful display of 5 traditional Indonesian pastries
- **Category Filtering**: Filter products by Traditional, Pastry, and Savory categories
- **Dynamic Order System**: Real-time order form with price calculation
- **WhatsApp Integration**: Direct ordering via WhatsApp with formatted messages
- **Responsive Design**: Mobile-first, tablet, and desktop optimized
- **Performance Optimized**: Next.js Image optimization, lazy loading, code splitting

## 🛍️ Product Catalog

Our menu features authentic Indonesian pastries:

1. **Bolen Pisang** (Rp 15.000) - Traditional pastry with banana and cheese filling
2. **Onde Onde** (Rp 8.000) - Sesame balls with sweet mung bean filling  
3. **Kue Sus** (Rp 12.000) - Classic choux pastry with vanilla custard
4. **Pastel Goreng** (Rp 10.000) - Crispy pastry with savory vegetable and meat filling
5. **Risol Mayo** (Rp 11.000) - Modern spring rolls with mayo, meat, and fresh vegetables

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment variables**:
   Create `.env.local` and add your WhatsApp number:
   ```
   NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## 🎨 Design System

- **Colors**: Clean white with warm orange/primary accents (#f0770b)
- **Typography**: Inter + Poppins from Google Fonts
- **Animation**: 21+ smooth micro-interactions and scroll effects
- **Layout**: Modern grid system with card-based design

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px (Touch-optimized)
- **Tablet**: 768px - 1023px (Adaptive layout)
- **Desktop**: 1024px+ (Full feature layout)

## 🔧 Technical Stack

- **Framework**: Next.js 14.2.15 with App Router
- **Language**: TypeScript 5.6+
- **Styling**: Tailwind CSS 3.4+
- **Animations**: Framer Motion 11.1+ & GSAP 3.12+
- **Images**: Next.js Image component with WebP/AVIF optimization
- **Fonts**: Google Fonts (Inter, Poppins)

## 📦 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── ProductCard.tsx    # Product display cards
│   └── OrderForm.tsx      # Order form with WhatsApp integration
├── data/                  # Static data
│   └── products.json      # Product catalog
└── styles/                # Global styles
    └── globals.css        # Tailwind base + custom styles
```

## 🛒 Order System

The order system provides:

- **Dynamic Cart**: Add/remove products with quantity controls
- **Real-time Pricing**: Automatic total calculation in IDR format
- **Customer Forms**: Name, phone, and address collection
- **WhatsApp Integration**: Formatted message generation with order details
- **Order Validation**: Form validation before sending

## 🎯 Performance Features

- **Next.js Image Optimization**: Automatic WebP/AVIF conversion
- **Lazy Loading**: Images load as needed during scroll
- **Code Splitting**: Dynamic imports for optimal bundle size
- **Font Optimization**: Preloaded Google Fonts with swap fallbacks
- **Caching**: No-store headers for development, optimized for production

## 📱 WhatsApp Integration

Orders are sent via WhatsApp with this format:

```
🍽️ ZH KITCHEN ORDER
======================
• Bolen Pisang × 2 = Rp 30.000
• Onde Onde × 3 = Rp 24.000
======================
Total: Rp 54.000

📋 Detail Customer:
Nama: John Doe
No. HP: 081234567890  
Alamat: Jl. Example Street No. 123
======================

Terima kasih telah memesan di ZH Kitchen! 🙏
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  primary: {
    500: '#f0770b', // Main brand color
    // Add your custom colors
  }
}
```

### Products
Update `src/data/products.json` to modify menu items:
```json
{
  "id": "new-product",
  "name": "Product Name",
  "description": "Product description",
  "price": 10000,
  "category": "traditional|pastry|savory",
  "image": "/images/product.jpg"
}
```

### WhatsApp Number
Set your WhatsApp number in `.env.local`:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
```

## 📈 SEO & Metadata

- **Title**: "ZH Kitchen - Authentic Indonesian Pastries"
- **Description**: Optimized for local search and food delivery
- **Keywords**: Indonesian pastries, traditional cakes, food delivery
- **Open Graph**: Social media preview optimization
- **Structured Data**: Ready for Google Rich Results

## 🚀 Deployment

**Recommended: Vercel (Zero Configuration)**

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

**Manual Deployment:**

1. Build the project: `npm run build`
2. Upload `/.next`, `/public`, and config files to your server
3. Run `npm start` on your server

## 📄 Browser Support

- **Modern Browsers**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **Mobile**: iOS Safari 14+, Chrome Mobile 88+
- **Features**: ES2020, CSS Grid, Flexbox, WebP/AVIF images

## 🔧 Environment Variables

```bash
# Required for WhatsApp integration
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📞 Support

For questions or customization help:

- **Email**: developer@zhkitchen.com
- **WhatsApp**: +62 812-3456-7890
- **Documentation**: Check Next.js and Tailwind CSS docs

## 📄 License

© 2024 ZH Kitchen. All rights reserved. Built with ❤️ for authentic Indonesian flavors.