'use client'

import Image from 'next/image'
import { ArrowRight, ShoppingBag } from 'lucide-react'

export function HeroSection() {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToOrder = () => {
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 md:py-24 px-4 text-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 transform transition-all duration-500 hover:scale-105">
          <Image 
            src="/logo.png" 
            alt="ZH Kitchen" 
            width={120} 
            height={120}
            className="mx-auto rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white transition-all duration-500">
          ZH Kitchen
        </h1>
        
        <p className="text-lg md:text-2xl mb-8 text-gray-600 dark:text-gray-300 transition-colors duration-500">
          Kue Tradisional Indonesia dengan Cita Rasa Autentik
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToMenu}
            className="group flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Lihat Menu
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={scrollToOrder}
            className="group flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-semibold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            <ShoppingBag className="w-5 h-5" />
            Pesan Sekarang
          </button>
        </div>
      </div>
    </section>
  )
}
