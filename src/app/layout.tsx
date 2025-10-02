import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import '../styles/globals.css'
import { OrderProvider } from '@/context/OrderContext'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'ZH Kitchen - Authentic Indonesian Pastries',
  description: 'Discover traditional Indonesian pastries and modern treats at ZH Kitchen. Order fresh bolen, onde-onde, kue sus, and more for delivery.',
  keywords: 'Indonesian pastries, traditional cakes, bolen pisang, onde-onde, kue sus, pastel goreng, risol mayo, ZH Kitchen',
  authors: [{ name: 'ZH Kitchen' }],
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    shortcut: '/logo.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f0770b',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${inter.className} scroll-smooth`}>
      <body className={`${poppins.className} antialiased bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300`}>
        <ThemeProvider>
          <OrderProvider>
            <main className="min-h-screen">
              {children}
            </main>
          </OrderProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}