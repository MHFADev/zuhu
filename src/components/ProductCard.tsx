'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useOrder } from '@/context/OrderContext'
import { ShoppingCart, Plus } from 'lucide-react'

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
    <div className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-600">
      {/* Image Section */}
      <div className="relative h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
          {product.name}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 transition-colors duration-300">
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
                    className="w-4 h-4 text-gray-900 focus:ring-gray-900 dark:text-white dark:focus:ring-white transition-all duration-200"
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
            <p className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
              {formatPrice(product.price)}
            </p>
          </div>
          
          <button
            onClick={handleAddToOrder}
            className="group/btn flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-2 font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <Plus className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-90" />
            Pesan
          </button>
        </div>
      </div>
    </div>
  )
}
