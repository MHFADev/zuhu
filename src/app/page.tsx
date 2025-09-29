import { ProductGrid } from '@/components/ProductGrid'
import { OrderForm } from '@/components/OrderForm'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection'
import { InteractiveCookingAnimation } from '@/components/InteractiveCookingAnimation'
import productsData from '@/data/products.json'

interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
}

export default function Home() {
  const products: Product[] = productsData.products

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary-50 to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <Header />
      
      <HeroSection />

      {/* Interactive Cooking Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            🎭 Fitur Interaktif - Proses Memasak!
          </h2>
          <InteractiveCookingAnimation />
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 px-4">
        <ProductGrid products={products} />
      </section>

      {/* Order Section */}
      <section id="order" className="py-8">
        <OrderForm products={products} />
      </section>
      
      {/* Contact Section */}
      <section id="contact">
        <Footer />
      </section>
    </div>
  )
}