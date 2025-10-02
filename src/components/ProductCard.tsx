'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useOrder } from '@/context/OrderContext'
import { ShoppingCart, Plus, Star } from 'lucide-react'

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

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToOrder } = useOrder()
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleAddToOrder = () => {
    if (product.hasVariants && product.variants) {
      if (!selectedVariant) {
        alert('Pilih varian terlebih dahulu')
        return
      }
      const variant = product.variants.find(v => v.id === selectedVariant)
      if (variant) {
        addToOrder({ ...product, id: variant.id, name: variant.name })
      }
    } else {
      addToOrder(product)
    }
  }

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-orange-300 dark:hover:border-orange-700 hover:-translate-y-1"
    >
      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <motion.div
          className="absolute top-2 right-2 bg-orange-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Star className="w-4 h-4" fill="currentColor" />
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <motion.h3 
          className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300"
          whileHover={{ x: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {product.name}
        </motion.h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 transition-colors duration-300 line-clamp-2">
          {product.description}
        </p>

        {/* Variants Selection */}
        {product.hasVariants && product.variants && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Pilih Varian:</p>
            <div className="space-y-2">
              {product.variants.map((variant) => (
                <label
                  key={variant.id}
                  className="flex items-center gap-2 cursor-pointer group/variant"
                >
                  <input
                    type="radio"
                    name={`variant-${product.id}`}
                    value={variant.id}
                    checked={selectedVariant === variant.id}
                    onChange={(e) => setSelectedVariant(e.target.value)}
                    className="w-4 h-4 accent-orange-600 dark:accent-orange-400"
                    suppressHydrationWarning
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300 group-hover/variant:text-gray-900 dark:group-hover/variant:text-white transition-colors duration-200">
                    {variant.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">Harga</p>
            <motion.p 
              className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              {formatPrice(product.price)}
            </motion.p>
          </div>
          
          <motion.button
            onClick={handleAddToOrder}
            className="group/btn flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-90" />
            Pesan
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
