'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const duration = 2000
    const interval = 20
    const steps = duration / interval
    const increment = 100 / steps

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment
        if (next >= 100) {
          clearInterval(timer)
          setIsExiting(true)
          setTimeout(onLoadingComplete, 500)
          return 100
        }
        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [onLoadingComplete])

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-all duration-500 ${
        isExiting ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-orange-200/30 dark:bg-orange-900/20 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-200/30 dark:bg-amber-900/20 rounded-full blur-3xl animate-pulse-subtle" 
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 animate-fade-in">
        {/* Logo with spinning gradient border */}
        <div className="relative mb-4">
          {/* Spinning gradient ring */}
          <div className="absolute -inset-4 animate-spin-slow">
            <div className="w-full h-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-full blur-md opacity-75"></div>
          </div>
          
          {/* Static gradient glow */}
          <div className="absolute -inset-3 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full blur-lg opacity-40"></div>
          
          {/* Logo container */}
          <div className="relative bg-white dark:bg-gray-800 p-5 rounded-full shadow-2xl ring-4 ring-orange-200 dark:ring-orange-900/50">
            <Image 
              src="/logo.png" 
              alt="ZH Kitchen" 
              width={100} 
              height={100}
              className="rounded-full animate-pulse-subtle"
              priority
            />
          </div>
        </div>

        {/* Brand name with slide-in animation */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 dark:from-orange-400 dark:via-amber-400 dark:to-yellow-400 bg-clip-text text-transparent mb-2">
            ZH Kitchen
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Menyiapkan kelezatan untuk Anda...
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-72 md:w-80 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
            </div>
          </div>
          <p className="text-center mt-3 text-sm font-medium text-gray-600 dark:text-gray-400">
            {Math.round(progress)}%
          </p>
        </div>

        {/* Bouncing food emojis */}
        <div className="flex gap-5 text-3xl mt-2 opacity-70 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <span className="animate-bounce" style={{ animationDelay: '0s' }}>🥟</span>
          <span className="animate-bounce" style={{ animationDelay: '0.15s' }}>🍡</span>
          <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>🥐</span>
        </div>
      </div>
    </div>
  )
}
