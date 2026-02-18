'use client'
import { motion } from 'framer-motion'

export default function IntroOverlay({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#ccff00]"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }} // 幕が上がる
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50, transition: { duration: 0.4 } }} 
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-black text-8xl md:text-9xl font-bold tracking-tighter logo-title"
      >
        Tagoly
      </motion.div>
    </motion.div>
  )
}