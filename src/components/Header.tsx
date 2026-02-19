'use client'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

interface HeaderProps {
  show: boolean
}

export default function Header({ show }: HeaderProps) {
  return (
    <motion.header
      // 1. レイアウト: 上部固定 + 左右に配置
      // 2. 余白: スマホ(px-6 py-5) -> PC(md:px-12 md:py-8) で段階的に広げる
      // 3. 操作: pointer-events-none で背景のHeroをクリック可能にする (子供要素で auto に戻す)
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5 md:px-12 md:py-8 pointer-events-none"
      initial={false}
      animate={show ? "visible" : "hidden"}
    >
      {/* 左：ロゴ (Tagoly) */}
      <motion.div
        variants={{
          hidden: { y: -20, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }
        }}
        // スマホで少し小さく(3xl)、PCで大きく(4xl)
        // pointer-events-auto でここだけクリック可能に
        className="text-3xl md:text-4xl font-bold tracking-tighter logo-title text-black pointer-events-auto select-none"
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
          visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] } }
        }}
        // groupクラスでホバー時の連動アニメーションを可能にする
        className="group flex items-center gap-3 pointer-events-auto"
      >
        {/* テキスト: スマホでは隠す (hidden sm:block) */}
        <span className="hidden sm:block text-sm font-bold text-neutral-500 group-hover:text-black transition-colors duration-300">
          Star on GitHub
        </span>
        
        {/* アイコン: 丸い背景で強調 */}
        <div className="relative p-2.5 bg-neutral-900 rounded-full group-hover:bg-[#ccff00] group-hover:scale-110 transition-all duration-300 shadow-sm">
           {/* 通常時の白いアイコン */}
           <Github className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300" />
        </div>
      </motion.a>
    </motion.header>
  )
}