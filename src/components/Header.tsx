'use client'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react' // アイコン用

interface HeaderProps {
  show: boolean
}

export default function Header({ show }: HeaderProps) {
  return (
    <motion.header
      // 固定ヘッダー。z-40 なので Intro (z-50) の後ろに隠れる
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-14 py-6 mix-blend-difference text-white pointer-events-none md:pointer-events-auto z-20"
      // Introが終わる頃にアニメーション開始
      initial={false}
      animate={show ? "visible" : "hidden"}
    >
      {/* 左：ロゴ (Tagoly) */}
      <motion.div
        variants={{
          hidden: { y: -20, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2 } }
        }}
        className="text-3xl font-bold tracking-tighter logo-title"
      >
        Tagoly
      </motion.div>

      {/* 右：GitHub Link */}
      <motion.a
        href="https://github.com/meso1007/tagoly"
        target="_blank"
        rel="noopener noreferrer"
        variants={{
          hidden: { y: -20, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.3 } }
        }}
        className="flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-black transition-colors"
      >
        <span className="hidden md:inline">Star on GitHub</span>
        <div className="p-2 bg-neutral-100 rounded-full">
            <Github className="w-5 h-5 text-black" />
        </div>
      </motion.a>
    </motion.header>
  )
}