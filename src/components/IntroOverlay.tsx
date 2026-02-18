'use client'
import { motion } from 'framer-motion'

const STRIP_COUNT = 14;

export default function IntroOverlay({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-none">
      
      {/* 1. 背景のストライプカーテン */}
      <div className="absolute inset-0 flex w-full h-full">
        {[...Array(STRIP_COUNT)].map((_, i) => (
          <motion.div
            key={i}
            className="relative w-full bg-[#ccff00] border-r border-black/5 last:border-r-0"
            initial={{ height: "100%" }}
            animate={{ height: "0%" }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
              delay: 1.8 + (i * 0.05),
            }}
            onAnimationComplete={() => {
              if (i === STRIP_COUNT - 1) {
                onComplete();
              }
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 overflow-hidden py-4"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.3 }}
      >
        {/* テキスト本体 */}
        {/* items-center を items-baseline に変更すると、より自然な位置で揃うことがあります */}
        <div className="flex items-baseline"> 
          {"Tagoly".split("").map((char, i) => (
            <motion.span
              key={i}
              // leading-none を追加して行間をタイトにし、余白の影響を最小限にする
              className="text-black text-7xl md:text-9xl font-bold tracking-tighter leading-none inline-block"
              initial={{ y: 150 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: i * 0.05,
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </motion.div>

    </div>
  )
}