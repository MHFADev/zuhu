import { ProductGrid } from '@/components/ProductGrid'
import { OrderForm } from '@/components/OrderForm'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection'
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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <HeroSection />

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
