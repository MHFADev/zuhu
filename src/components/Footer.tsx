'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer 
      className="bg-gray-800 dark:bg-gray-950 text-white py-12 px-4 mt-20 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">🍰</div>
              <div>
                <h3 className="text-xl font-bold">ZH Kitchen</h3>
                <p className="text-gray-300">Authentic Indonesian Pastries</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Menyajikan kue tradisional Indonesia dengan cita rasa autentik dan kualitas terbaik sejak bertahun-tahun.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Menu Favorit</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">🥮 Bolen Pisang</li>
              <li className="hover:text-white transition-colors cursor-pointer">⚪ Onde Onde</li>
              <li className="hover:text-white transition-colors cursor-pointer">🧁 Kue Sus</li>
              <li className="hover:text-white transition-colors cursor-pointer">🥟 Pastel Goreng</li>
              <li className="hover:text-white transition-colors cursor-pointer">🌯 Risol Mayo</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <span className="text-green-400">📱</span>
                <span>WhatsApp: </span>
                <a 
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6285883268684'}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors underline"
                >
                  +62 858-8326-8684
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400">📧</span>
                <span>Email: info@zhkitchen.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-red-400">📍</span>
                <span>Jl. Raya Kuliner No. 123, Jakarta</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>&copy; 2024 ZH Kitchen. All rights reserved. Made with ❤️ for authentic Indonesian taste.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}