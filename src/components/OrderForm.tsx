'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useOrder } from '@/context/OrderContext'

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

    return `🍽️ *ZH KITCHEN ORDER*
======================
${items}
======================
Total: ${formatPrice(getTotalPrice())}

📋 Detail Customer:
Nama: ${customerName}
No. HP: ${customerPhone}
Alamat: ${customerAddress}
======================

Terima kasih telah memesan di ZH Kitchen! 🙏`
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
      <motion.button
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
        onClick={() => openOrderForm()}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl">🛒</span>
          {getTotalItems() > 0 && (
            <span className="bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
              {getTotalItems()}
            </span>
          )}
        </div>
      </motion.button>

      {/* Order Form Modal */}
      <AnimatePresence>
        {isOrderFormOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => closeOrderForm()}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700"
              initial={{ scale: 0.5, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <span>🛒</span>
                  Keranjang Pesanan
                </h2>
                <button
                  onClick={() => closeOrderForm()}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* Product Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Pilih Menu:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {products.map(product => (
                    <motion.button
                      key={product.id}
                      className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700 hover:border-primary-300 dark:hover:border-primary-500 transition-all"
                      onClick={() => addToOrder(product)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="text-2xl">
                        {product.category === 'traditional' ? '🏮' :
                         product.category === 'pastry' ? '🧁' : '🥟'}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-medium text-gray-800 dark:text-gray-200">{product.name}</div>
                        <div className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
                          {formatPrice(product.price)}
                        </div>
                      </div>
                      <span className="text-primary-500 dark:text-primary-400">+</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Order Items */}
              {orderItems.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">Pesanan Anda:</h3>
                  <div className="space-y-3">
                    {orderItems.map(item => (
                      <motion.div
                        key={item.product.id}
                        className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <div className="flex-1">
                          <div className="font-medium">{item.product.name}</div>
                          <div className="text-sm text-gray-600">
                            {formatPrice(item.product.price)} × {item.quantity}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center"
                          >
                            −
                          </button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="bg-primary-500 hover:bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                        <div className="font-bold text-primary-600 min-w-[100px] text-right">
                          {formatPrice(item.product.price * item.quantity)}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Total:</span>
                      <span className="text-primary-600">{formatPrice(getTotalPrice())}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Customer Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Data Customer:</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <input
                    type="tel"
                    placeholder="Nomor WhatsApp"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <textarea
                    placeholder="Alamat Lengkap"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              {/* Order Button */}
              <motion.button
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={orderItems.length === 0 || !customerName || !customerPhone || !customerAddress}
              >
                <span>📱</span>
                Pesan via WhatsApp
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}