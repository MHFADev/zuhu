'use client'

import { motion } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <motion.header 
      className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-300"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-3xl">🍰</div>
          <div>
            <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">ZH Kitchen</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Authentic Indonesian Pastries</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="hidden md:flex items-center gap-6">
            <a href="#menu" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
              Menu
            </a>
            <a href="#order" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
              Order
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
              Contact
            </a>
          </div>
          <ThemeToggle />
        </motion.div>
      </div>
    </motion.header>
  )
}