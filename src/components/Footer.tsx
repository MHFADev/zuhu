'use client'

import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Instagram', icon: '📷', href: '#', color: 'hover:text-pink-400' },
    { name: 'Facebook', icon: '👥', href: '#', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: '🐦', href: '#', color: 'hover:text-sky-400' },
    { name: 'TikTok', icon: '🎵', href: '#', color: 'hover:text-purple-400' },
  ]

  const quickLinks = [
    { name: 'Tentang Kami', href: '#' },
    { name: 'Menu Lengkap', href: '#menu' },
    { name: 'Cara Pemesanan', href: '#order' },
    { name: 'Syarat & Ketentuan', href: '#' },
    { name: 'Kebijakan Privasi', href: '#' },
  ]

  return (
    <motion.footer 
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-950 dark:to-black text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl">🍰</div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                  ZH Kitchen
                </h3>
                <p className="text-sm text-gray-400">Authentic Indonesian Pastries</p>
              </div>
            </motion.div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Menyajikan kue tradisional Indonesia dengan cita rasa autentik dan kualitas terbaik sejak bertahun-tahun.
            </p>
            
            {/* Social Media */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-300">Ikuti Kami</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className={`text-2xl ${social.color} transition-colors`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">Link Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <motion.span
                      className="text-primary-500 group-hover:text-primary-400"
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Menu Favorit */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">Menu Favorit</h4>
            <ul className="space-y-3">
              {['Bolen Pisang', 'Onde Onde', 'Kue Sus', 'Pastel Goreng', 'Risol Mayo'].map((item, index) => (
                <motion.li
                  key={item}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-primary-500">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Hours */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">Hubungi Kami</h4>
            <div className="space-y-4">
              <motion.a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6285883268684'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">📱</span>
                <div>
                  <p className="text-xs text-gray-500">WhatsApp</p>
                  <p className="font-semibold">+62 858-8326-8684</p>
                </div>
              </motion.a>
              
              <motion.div
                className="flex items-center gap-3 text-gray-400"
                whileHover={{ x: 5 }}
              >
                <span className="text-2xl">📧</span>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="font-semibold">info@zhkitchen.com</p>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-center gap-3 text-gray-400"
                whileHover={{ x: 5 }}
              >
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-xs text-gray-500">Lokasi</p>
                  <p className="font-semibold">Jl. Raya Kuliner No. 123</p>
                </div>
              </motion.div>

              <div className="pt-4 border-t border-gray-700">
                <p className="text-sm font-semibold mb-2 text-gray-300">⏰ Jam Operasional</p>
                <div className="text-sm text-gray-400 space-y-1">
                  <p>Senin - Jumat: 08:00 - 20:00</p>
                  <p>Sabtu - Minggu: 09:00 - 21:00</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-700/50 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} ZH Kitchen. All rights reserved. Made with ❤️ for authentic Indonesian taste.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary-400 transition-colors">Kebijakan Privasi</a>
              <span>•</span>
              <a href="#" className="hover:text-primary-400 transition-colors">Syarat & Ketentuan</a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}