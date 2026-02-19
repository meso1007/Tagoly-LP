'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, MessageSquare } from 'lucide-react'
import ContactModal from '@/components/ContactModal'

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      {/* 1. コンテナ: Headerに合わせてパディングを調整 (px-6 -> md:px-12) */}
      <footer className="bg-white pt-20 pb-10 border-t border-neutral-100 relative overflow-hidden">
        <div className="w-full px-6 md:px-12 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-8">
          
          {/* 左側：CTA & Install */}
          <div className="flex flex-col gap-8 max-w-2xl w-full">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // スマホ: 5xl, PC: 8xl で劇的なサイズ差をつける
              className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-neutral-900 leading-[0.9]"
            >
              Ready to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8cb300] to-[#ccff00]">
                clean up?
              </span>
            </motion.h2>
            
            <div className="flex flex-col gap-4">
              <p className="text-neutral-400 font-medium text-lg">Start using Tagoly today.</p>
              
              {/* コマンドエリア: スマホでは縦積みで押しやすく */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                 <code className="px-5 py-3 bg-neutral-100 text-neutral-700 rounded-xl font-mono text-sm border border-neutral-200 w-full sm:w-auto text-center sm:text-left">
                   brew install tagoly
                 </code>
                 <a 
                   href="https://github.com/meso1007/tagoly" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-1 text-black font-bold hover:text-blue-600 transition-colors px-2 py-2"
                 >
                   GitHub <ArrowUpRight className="w-4 h-4" />
                 </a>
              </div>
            </div>
          </div>

          {/* 右側：Contact & ロゴ */}
          {/* スマホ: 左寄せ(items-start) で縦並び, PC: 右寄せ(items-end) で整列 */}
          <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-200 bg-white text-neutral-600 hover:text-black hover:border-neutral-300 transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              <MessageSquare className="w-4 h-4 group-hover:text-[#a3cc00] transition-colors" />
              <span className="text-sm font-bold">Contact Support</span>
            </button>

            {/* 巨大文字: スマホでは画面幅に合わせて伸縮(vw)、PCでは固定 */}
            <div className="text-[22vw] md:text-[120px] leading-none font-bold text-neutral-50 select-none pointer-events-none tracking-tighter">
              TAGOLY
            </div>
            
            <p className="text-neutral-400 text-xs md:text-sm">
              © {new Date().getFullYear()} Tagoly. MIT License.
            </p>
          </div>

        </div>
      </footer>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}