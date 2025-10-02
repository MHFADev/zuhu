'use client'

import { useState } from 'react'
import { useOrder } from '@/context/OrderContext'
import { ShoppingCart, X, Send, Plus, Minus } from 'lucide-react'

interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
}

interface OrderFormProps {
  products: Product[]
}

export function OrderForm({ products }: OrderFormProps) {
  const { 
    orderItems, 
    isOrderFormOpen, 
    addToOrder, 
    updateQuantity, 
    closeOrderForm, 
    getTotalItems, 
    getTotalPrice,
    openOrderForm
  } = useOrder()
  
  const [customerName, setCustomerName] = useState('')
  const [customerAddress, setCustomerAddress] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const generateWhatsAppMessage = () => {
    const items = orderItems.map(item => 
      `• ${item.product.name} × ${item.quantity} = ${formatPrice(item.product.price * item.quantity)}`
    ).join('\n')

    return `*ZH KITCHEN ORDER*('\n')
    Hallo Saya ingin memesan yang sesuai dengan form ini:
======================
${items}
======================
💸Total: ${formatPrice(getTotalPrice())}

Detail Customer:

🪪Nama: ${customerName}
📱No. HP: ${customerPhone}
📍Alamat: ${customerAddress}
======================

Terima kasih saya tunggu balasannya`
  }

  const handleWhatsAppOrder = () => {
    if (!customerName || !customerPhone || !customerAddress || orderItems.length === 0) {
      alert('Mohon lengkapi semua data pesanan')
      return
    }

    const message = encodeURIComponent(generateWhatsAppMessage())
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6281234567890'
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      {/* Floating Order Button */}
      <button
        className="fixed bottom-6 right-6 group flex items-center gap-2 bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white px-6 py-4 rounded-full shadow-2xl z-50 transition-all duration-500 transform hover:scale-110 hover:rotate-3 animate-bounce"
        onClick={() => openOrderForm()}
        style={{ animationDuration: '3s' }}
      >
        <ShoppingCart className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
        <span className="font-semibold">Keranjang</span>
        {getTotalItems() > 0 && (
          <span className="absolute -top-2 -right-2 bg-gradient-to-br from-red-500 to-pink-600 text-white text-xs rounded-full h-7 w-7 flex items-center justify-center animate-pulse shadow-lg ring-2 ring-white">
            {getTotalItems()}
          </span>
        )}
      </button>

      {/* Order Form Modal */}
      {isOrderFormOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-all duration-300"
          onClick={() => closeOrderForm()}
        >
          <div
            className="bg-white dark:bg-gray-800 p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border-2 border-orange-300 dark:border-orange-700 shadow-2xl transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <ShoppingCart className="w-6 h-6" />
                Keranjang Pesanan
              </h2>
              <button
                onClick={() => closeOrderForm()}
                className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 hover:rotate-90 transform hover:scale-125 rounded-full p-2 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Product Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Pilih Menu:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {products.map(product => (
                  <button
                    key={product.id}
                    className="group relative flex items-center gap-3 p-4 rounded-2xl border-2 border-gray-200 dark:border-gray-600 hover:border-orange-400 dark:hover:border-orange-500 hover:bg-gradient-to-br hover:from-orange-50 hover:to-amber-50 dark:hover:from-orange-900/20 dark:hover:to-amber-900/20 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 shadow-sm hover:shadow-xl overflow-hidden"
                    onClick={() => addToOrder(product)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-400/20 to-orange-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <div className="flex-1 text-left relative z-10">
                      <div className="font-medium text-gray-900 dark:text-white group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors">{product.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {formatPrice(product.price)}
                      </div>
                    </div>
                    <div className="relative z-10 bg-orange-500 group-hover:bg-orange-600 text-white p-2 rounded-full transition-all duration-300 group-hover:rotate-90 group-hover:scale-110">
                      <Plus className="w-4 h-4" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Order Items */}
            {orderItems.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Pesanan Anda:</h3>
                <div className="space-y-3">
                  {orderItems.map(item => (
                    <div
                      key={item.product.id}
                      className="flex items-center gap-4 p-4 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-700 dark:via-gray-700 dark:to-gray-700 rounded-2xl transition-all duration-300 hover:shadow-lg border-2 border-orange-200 dark:border-gray-600 hover:border-orange-400 dark:hover:border-orange-500"
                    >
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 dark:text-white">{item.product.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {formatPrice(item.product.price)} × {item.quantity}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="bg-gradient-to-br from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-md hover:shadow-xl"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-10 text-center font-bold text-gray-900 dark:text-white text-lg">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-md hover:shadow-xl"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent min-w-[100px] text-right text-lg">
                        {formatPrice(item.product.price * item.quantity)}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center text-xl font-bold text-gray-900 dark:text-white">
                    <span>Total:</span>
                    <span>{formatPrice(getTotalPrice())}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Customer Information */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Data Customer:</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full p-4 rounded-2xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:border-orange-500 dark:focus:border-orange-400 transition-all duration-300 hover:border-orange-300 dark:hover:border-orange-600"
                />
                <input
                  type="tel"
                  placeholder="Nomor WhatsApp"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full p-4 rounded-2xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:border-orange-500 dark:focus:border-orange-400 transition-all duration-300 hover:border-orange-300 dark:hover:border-orange-600"
                />
                <textarea
                  placeholder="Alamat Lengkap"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  rows={3}
                  className="w-full p-4 rounded-2xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:border-orange-500 dark:focus:border-orange-400 transition-all duration-300 hover:border-orange-300 dark:hover:border-orange-600"
                />
              </div>
            </div>

            {/* Order Button */}
            <button
              onClick={handleWhatsAppOrder}
              className="group relative w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white py-5 rounded-full font-bold text-lg disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
              disabled={orderItems.length === 0 || !customerName || !customerPhone || !customerAddress}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Send className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:rotate-12" />
              <span className="relative z-10">Pesan via WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
