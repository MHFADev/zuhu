'use client'

import Image from 'next/image'
import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react'

export function HeroSection() {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToOrder = () => {
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative py-16 md:py-24 px-4 text-center bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <div className="relative inline-block">
            <Image 
              src="/logo.png" 
              alt="ZH Kitchen" 
              width={120} 
              height={120}
              className="mx-auto rounded-2xl shadow-lg ring-4 ring-orange-200 dark:ring-orange-900/50"
            />
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-6 h-6 text-orange-500 dark:text-orange-400" fill="currentColor" />
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 dark:from-orange-400 dark:via-amber-400 dark:to-yellow-400">
          ZH Kitchen
        </h1>
        
        <p className="text-lg md:text-2xl mb-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Kue Tradisional Indonesia dengan Cita Rasa Autentik
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToMenu}
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>Lihat Menu</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={scrollToOrder}
            className="group flex items-center gap-2 px-8 py-4 bg-white/10 border-2 border-orange-500 dark:border-orange-400 text-orange-600 dark:text-orange-300 font-bold rounded-full hover:bg-orange-500 hover:text-white hover:border-transparent transition-all duration-300 shadow-lg"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Pesan Sekarang</span>
          </button>
        </div>
      </div>
    </section>
  )
}
