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
  hasVariants?: boolean
  variants?: Array<{
    id: string
    name: string
    price: number
  }>
}

export default function Home() {
  const products: Product[] = productsData.products

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="floating-background">
        <div className="floating-item pastel-1">🥟</div>
        <div className="floating-item pastel-2">🥟</div>
        <div className="floating-item onde-1">🍡</div>
        <div className="floating-item onde-2">🍡</div>
        <div className="floating-item bolen-1">🥐</div>
        <div className="floating-item bolen-2">🥐</div>
      </div>
      
      <div className="relative z-10">
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
    </div>
  )
}
