'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import faviconLogo from '@/favicon.ico'

// 画面幅に応じたストリップ数（レスポンシブ）
function getStripCount(width: number) {
  if (width < 640) return 8   // sm 未満
  if (width < 1024) return 12 // md
  return 14                   // lg 以上
}

const SUBTITLE = "The Intelligent Commit Tool";

export default function IntroOverlay({ onComplete }: { onComplete: () => void }) {
  const [stripCount, setStripCount] = useState(14)

  useEffect(() => {
    const update = () => setStripCount(getStripCount(window.innerWidth))
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-none">

      {/* 1. 背景のストライプカーテン */}
      <div className="absolute inset-0 flex w-full h-full">
        {[...Array(stripCount)].map((_, i) => (
          <motion.div
            key={i}
            className="relative flex-1 bg-[#ccff00] border-r border-black/5 last:border-r-0"
            initial={{ height: "100%" }}
            animate={{ height: "0%" }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
              delay: 1.8 + (i * 0.05),
            }}
            onAnimationComplete={() => {
              if (i === stripCount - 1) {
                onComplete();
              }
            }}
          />
        ))}
      </div>

      {/* 2. テキストコンテナ */}
      <motion.div
        // 👇 変更: flex flex-col items-center を追加して、タイトルとサブタイトルを縦に並べる
        className="relative z-10 overflow-hidden py-4 px-8 flex flex-col items-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.3 }}
      >
        {/* メインタイトル (変更なし) */}
        <div className="flex items-center gap-4 logo-title">
          {"Tagoly".split("").map((char, i) => (
            <motion.span
              key={i}
              className="text-black text-7xl md:text-9xl font-bold tracking-tighter leading-none inline-block"
              initial={{ y: 200 }}
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

        {/* 👇 追加: サブタイトル */}
        <motion.p
          className="mt-4 text-lg md:text-2xl font-medium text-black/80 tracking-wide"
          initial={{ opacity: 0, y: 20 }} // 下からふわっと
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.6, // メインタイトルが出揃った少し後に開始
          }}
        >
          {SUBTITLE}
        </motion.p>

      </motion.div>

    </div>
  )
}