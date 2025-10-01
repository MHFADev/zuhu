'use client'

import { ThemeToggle } from './ThemeToggle'
import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, UtensilsCrossed, ShoppingCart, Phone } from 'lucide-react'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    { href: '#menu', label: 'Menu', icon: UtensilsCrossed },
    { href: '#order', label: 'Order', icon: ShoppingCart },
    { href: '#contact', label: 'Contact', icon: Phone },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-sm border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="transform transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/logo.png" 
                alt="ZH Kitchen Logo" 
                width={40} 
                height={40}
                className="rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white transition-colors">
                ZH Kitchen
              </h1>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-all duration-300 group"
                  >
                    <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    {item.label}
                  </a>
                )
              })}
            </nav>
            
            <div className="pl-6 border-l border-gray-300 dark:border-gray-600">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="px-4 py-4 space-y-2 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 font-medium"
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
