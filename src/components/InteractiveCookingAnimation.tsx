'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const cookingSteps = [
  { emoji: '🥄', text: 'Mengaduk adonan...', duration: 2 },
  { emoji: '🔥', text: 'Memasak dengan api sedang...', duration: 3 },
  { emoji: '⏰', text: 'Menunggu matang...', duration: 2 },
  { emoji: '✨', text: 'Kue siap disajikan!', duration: 2 },
]

export function InteractiveCookingAnimation() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timeoutRefs = useRef<NodeJS.Timeout[]>([])

  useEffect(() => {
    return () => {
      // Clean up all timeouts on unmount
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout))
    }
  }, [])

  const startCooking = () => {
    if (isAnimating) return
    
    setIsAnimating(true)
    setCurrentStep(0)

    let stepIndex = 0
    const animateStep = () => {
      if (stepIndex < cookingSteps.length) {
        setCurrentStep(stepIndex)
        const timeout = setTimeout(() => {
          stepIndex++
          if (stepIndex < cookingSteps.length) {
            animateStep()
          } else {
            const finalTimeout = setTimeout(() => {
              setIsAnimating(false)
              setCurrentStep(0)
            }, 1000)
            timeoutRefs.current.push(finalTimeout)
          }
        }, cookingSteps[stepIndex].duration * 1000)
        timeoutRefs.current.push(timeout)
      }
    }
    animateStep()
  }

  return (
    <div className="text-center py-8">
      <motion.div
        className="inline-block p-6 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 rounded-3xl shadow-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="text-6xl mb-4"
          animate={isAnimating ? {
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          } : {}}
          transition={{
            duration: 0.8,
            repeat: isAnimating ? Infinity : 0,
            ease: "easeInOut"
          }}
        >
          {isAnimating ? cookingSteps[currentStep]?.emoji : '👩‍🍳'}
        </motion.div>

        <motion.h3 
          className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200"
          key={isAnimating ? currentStep : 'idle'}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isAnimating ? cookingSteps[currentStep]?.text : 'Lihat Proses Memasak!'}
        </motion.h3>

        <motion.button
          onClick={startCooking}
          disabled={isAnimating}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            isAnimating 
              ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 cursor-not-allowed'
              : 'bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-xl'
          }`}
          whileHover={!isAnimating ? { scale: 1.05 } : {}}
          whileTap={!isAnimating ? { scale: 0.95 } : {}}
        >
          {isAnimating ? 'Sedang Memasak...' : '🍳 Mulai Masak!'}
        </motion.button>

        {isAnimating && (
          <motion.div
            className="mt-4"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ 
              duration: cookingSteps.reduce((sum, step) => sum + step.duration, 0),
              ease: "linear" 
            }}
          >
            <div className="h-2 bg-primary-200 dark:bg-primary-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{
                  duration: cookingSteps.reduce((sum, step) => sum + step.duration, 0),
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}