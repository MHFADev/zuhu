import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import '../styles/globals.css'

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
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#f0770b',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${inter.className} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f0770b" />
      </head>
      <body className={`${poppins.className} antialiased bg-white text-gray-800`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}