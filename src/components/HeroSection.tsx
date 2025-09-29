'use client'

import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <motion.section 
      className="relative py-20 px-4 text-center bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-700 dark:to-primary-800 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }}
      />
      
      <motion.h1 
        className="text-5xl md:text-6xl font-bold mb-6 text-shadow"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        ZH Kitchen
      </motion.h1>
      
      <motion.p 
        className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-shadow"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Kue Tradisional Indonesia dengan Cita Rasa Autentik
      </motion.p>
      
      <motion.div
        className="text-6xl mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5, type: "spring", stiffness: 200 }}
      >
        🥮
      </motion.div>
    </motion.section>
  )
}