'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ProductCard } from './ProductCard'
import { Sparkles } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  hasVariants?: boolean
  variants?: Array<{
    id: string
    name: string
    price: number
  }>
}

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const gridRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  useEffect(() => {
    if (!gridRef.current || !titleRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

      const cards = gridRef.current!.querySelectorAll('.product-card-gsap')
      gsap.from(cards, {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
        },
        y: 80,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      })
    }, gridRef)

    return () => {
      ctx.revert()
    }
  }, [filteredProducts])

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'pastel', name: 'Pastel' },
    { id: 'risol', name: 'Risol' },
    { id: 'kue', name: 'Kue' },
    { id: 'box', name: 'Box' },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div 
        ref={titleRef}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <motion.div
          className="inline-flex items-center gap-2 mb-4"
          whileHover={{ scale: 1.05 }}
        >
          <Sparkles className="w-6 h-6 text-orange-500" />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 dark:from-orange-400 dark:via-amber-400 dark:to-yellow-400 bg-clip-text text-transparent">
            Menu Spesial
          </h2>
          <Sparkles className="w-6 h-6 text-orange-500" />
        </motion.div>
        <p className="text-gray-600 dark:text-gray-400">Pilih kue tradisional favorit Anda</p>
      </motion.div>

      {/* Category Filter */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg shadow-orange-300 dark:shadow-orange-900/50'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {category.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Products Grid */}
      <motion.div 
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        {filteredProducts.map((product, index) => (
          <motion.div 
            key={product.id}
            className="product-card-gsap"
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
