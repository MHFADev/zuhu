'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
}

interface OrderItem {
  product: Product
  quantity: number
}

interface OrderContextType {
  orderItems: OrderItem[]
  isOrderFormOpen: boolean
  addToOrder: (product: Product) => void
  updateQuantity: (productId: string, newQuantity: number) => void
  openOrderForm: () => void
  closeOrderForm: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

const OrderContext = createContext<OrderContextType | undefined>(undefined)

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([])
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false)

  const addToOrder = (product: Product) => {
    setOrderItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id)
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { product, quantity: 1 }]
    })
    setIsOrderFormOpen(true)
  }

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setOrderItems(prev => prev.filter(item => item.product.id !== productId))
    } else {
      setOrderItems(prev =>
        prev.map(item =>
          item.product.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      )
    }
  }

  const openOrderForm = () => setIsOrderFormOpen(true)
  const closeOrderForm = () => setIsOrderFormOpen(false)

  const getTotalItems = () => {
    return orderItems.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return orderItems.reduce((total, item) => total + (item.product.price * item.quantity), 0)
  }

  return (
    <OrderContext.Provider
      value={{
        orderItems,
        isOrderFormOpen,
        addToOrder,
        updateQuantity,
        openOrderForm,
        closeOrderForm,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export function useOrder() {
  const context = useContext(OrderContext)
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider')
  }
  return context
}