'use client'

import Image from 'next/image'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="transform transition-all duration-300 hover:translate-x-2">
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/logo.png" 
                alt="ZH Kitchen Logo" 
                width={40} 
                height={40}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold">ZH Kitchen</h3>
                <p className="text-sm text-gray-400">Kue Tradisional Indonesia</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm transition-colors duration-300">
              Menyajikan kue tradisional Indonesia dengan cita rasa autentik dan kualitas terbaik.
            </p>
          </div>

          {/* Contact */}
          <div className="transform transition-all duration-300 hover:translate-x-2">
            <h4 className="text-lg font-bold mb-4">Hubungi Kami</h4>
            <div className="space-y-3 text-sm">
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6281234567890'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 group"
              >
                <Phone className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                WhatsApp: +62 812-3456-7890
              </a>
              <p className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                info@zhkitchen.com
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                Jl. Raya Kuliner No. 123
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="transform transition-all duration-300 hover:translate-x-2">
            <h4 className="flex items-center gap-2 text-lg font-bold mb-4">
              <Clock className="w-5 h-5" />
              Jam Operasional
            </h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p>Senin - Jumat: 08:00 - 20:00</p>
              <p>Sabtu - Minggu: 09:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm transition-colors duration-300">
            &copy; {currentYear} ZH Kitchen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
