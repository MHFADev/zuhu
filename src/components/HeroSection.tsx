'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!titleRef.current || !sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3,
      })

      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        opacity: 0.9,
        scale: 0.98,
      })
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [])

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToOrder = () => {
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 px-4 text-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-orange-200 dark:bg-orange-900/30 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-amber-200 dark:bg-amber-900/30 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-200 dark:bg-yellow-900/30 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      <motion.div 
        className="max-w-5xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            animate="float"
            variants={floatingVariants}
            className="inline-block"
          >
            <motion.div
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.5 }
              }}
              className="relative"
            >
              <Image 
                src="/logo.png" 
                alt="ZH Kitchen" 
                width={120} 
                height={120}
                className="mx-auto rounded-2xl shadow-2xl ring-4 ring-orange-200 dark:ring-orange-900/50"
              />
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <Sparkles className="w-6 h-6 text-orange-500 dark:text-orange-400" fill="currentColor" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.h1 
          ref={titleRef}
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 dark:from-orange-400 dark:via-amber-400 dark:to-yellow-400 animate-gradient-shift"
          style={{ backgroundSize: '200% 200%' }}
        >
          ZH Kitchen
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-2xl mb-8 text-gray-700 dark:text-gray-300 transition-colors duration-500 max-w-2xl mx-auto"
        >
          Kue Tradisional Indonesia dengan Cita Rasa Autentik
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={scrollToMenu}
            className="group relative flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 text-white font-bold rounded-full overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.08, rotate: 2 }}
            whileTap={{ scale: 0.92 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/50 to-yellow-400/0"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <span className="relative z-10">Lihat Menu</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
          </motion.button>

          <motion.button
            onClick={scrollToOrder}
            className="group relative flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-3 border-orange-500 dark:border-orange-400 text-orange-600 dark:text-orange-300 font-bold rounded-full hover:bg-gradient-to-br hover:from-orange-500 hover:to-amber-600 hover:text-white hover:border-transparent dark:hover:from-orange-400 dark:hover:to-amber-500 transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.08, rotate: -2 }}
            whileTap={{ scale: 0.92 }}
          >
            <ShoppingBag className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
            <span className="relative z-10">Pesan Sekarang</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
