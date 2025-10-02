'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Mail, Phone, Clock, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-900 dark:to-gray-800 text-white transition-colors duration-500 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Image 
                  src="/logo.png" 
                  alt="ZH Kitchen Logo" 
                  width={40} 
                  height={40}
                  className="rounded-lg ring-2 ring-orange-500/30"
                />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">ZH Kitchen</h3>
                <p className="text-sm text-gray-400">Kue Tradisional Indonesia</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm transition-colors duration-300">
              Menyajikan kue tradisional Indonesia dengan cita rasa autentik dan kualitas terbaik.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4">Hubungi Kami</h4>
            <div className="space-y-3 text-sm">
              <motion.a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6281234567890'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-all duration-300 group"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                WhatsApp: +62 812-3456-7890
              </motion.a>
              <motion.p className="flex items-center gap-2 text-gray-400" whileHover={{ x: 5 }}>
                <Mail className="w-4 h-4" />
                info@zhkitchen.com
              </motion.p>
              <motion.p className="flex items-center gap-2 text-gray-400" whileHover={{ x: 5 }}>
                <MapPin className="w-4 h-4" />
                Jl. Raya Kuliner No. 123
              </motion.p>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="flex items-center gap-2 text-lg font-bold mb-4">
              <Clock className="w-5 h-5" />
              Jam Operasional
            </h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p>Senin - Jumat: 08:00 - 20:00</p>
              <p>Sabtu - Minggu: 09:00 - 21:00</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-400 text-sm transition-colors duration-300 flex items-center justify-center gap-2">
            &copy; {currentYear} ZH Kitchen. Made with <Heart className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" /> in Indonesia
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
