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
        className="fixed bottom-6 right-6 group flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-4 shadow-lg z-50 transition-all duration-300 transform hover:scale-110"
        onClick={() => openOrderForm()}
      >
        <ShoppingCart className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
        <span className="font-semibold">Keranjang</span>
        {getTotalItems() > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
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
            className="bg-white dark:bg-gray-800 p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700 transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <ShoppingCart className="w-6 h-6" />
                Keranjang Pesanan
              </h2>
              <button
                onClick={() => closeOrderForm()}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300 hover:rotate-90 transform"
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
                    className="group flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                    onClick={() => addToOrder(product)}
                  >
                    <div className="flex-1 text-left">
                      <div className="font-medium text-gray-900 dark:text-white">{product.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {formatPrice(product.price)}
                      </div>
                    </div>
                    <Plus className="w-5 h-5 text-gray-900 dark:text-white transition-transform duration-300 group-hover:rotate-90" />
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
                      className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-700 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-600"
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
                          className="bg-gray-300 hover:bg-gray-400 text-gray-900 w-8 h-8 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-semibold text-gray-900 dark:text-white">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 w-8 h-8 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="font-bold text-gray-900 dark:text-white min-w-[100px] text-right">
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
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all duration-300"
                />
                <input
                  type="tel"
                  placeholder="Nomor WhatsApp"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all duration-300"
                />
                <textarea
                  placeholder="Alamat Lengkap"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  rows={3}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all duration-300"
                />
              </div>
            </div>

            {/* Order Button */}
            <button
              onClick={handleWhatsAppOrder}
              className="group w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-4 font-semibold text-lg disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
              disabled={orderItems.length === 0 || !customerName || !customerPhone || !customerAddress}
            >
              <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              Pesan via WhatsApp
            </button>
          </div>
        </div>
      )}
    </>
  )
}
