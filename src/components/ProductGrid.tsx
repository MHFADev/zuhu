'use client'

import { useState } from 'react'
import { ProductCard } from './ProductCard'

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

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'pastel', name: 'Pastel' },
    { id: 'risol', name: 'Risol' },
    { id: 'kue', name: 'Kue' },
    { id: 'box', name: 'Box' },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white transition-colors duration-500">
        Menu
      </h2>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 font-medium transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === category.id
                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="transform transition-all duration-300 hover:-translate-y-2">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}
