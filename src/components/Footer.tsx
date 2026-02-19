'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, MessageSquare } from 'lucide-react' // アイコン追加
import ContactModal from '@/components/ContactModal' // 作成したモーダルをインポート

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <footer className="bg-white pt-20 pb-10 px-4 border-t border-neutral-100 relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
          
          {/* 左側：大きなCTA */}
          <div className="flex flex-col gap-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black tracking-tighter text-neutral-900 leading-[0.9]"
            >
              Ready to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8cb300] to-[#ccff00]">
                clean up?
              </span>
            </motion.h2>
            
            <div className="flex flex-col gap-2">
              <p className="text-neutral-400 font-medium">Start using Tagoly today.</p>
              <div className="flex flex-wrap items-center gap-4">
                 <code className="px-4 py-2 bg-neutral-100 text-neutral-600 rounded-lg font-mono text-sm border border-neutral-200">
                   brew install tagoly
                 </code>
                 <a href="https://github.com/meso1007/tagoly" className="flex items-center gap-1 text-black font-bold hover:text-blue-600 transition-colors">
                   GitHub <ArrowUpRight className="w-4 h-4" />
                 </a>
              </div>
            </div>
          </div>

          {/* 右側：コンタクトボタン & コピーライト */}
          <div className="flex flex-col items-end gap-4">
            
            {/* ✨ 追加: Contactボタン */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-200 bg-white text-neutral-600 hover:text-black hover:border-neutral-300 transition-all shadow-sm hover:shadow-md active:scale-95 mb-4"
            >
              <MessageSquare className="w-4 h-4 group-hover:text-[#a3cc00] transition-colors" />
              <span className="text-sm font-bold">Contact Support</span>
            </button>

            {/* 巨大な装飾文字 */}
            <div className="text-[80px] md:text-[120px] leading-none font-bold text-neutral-50 select-none pointer-events-none tracking-tighter">
              TAGOLY
            </div>
            
            <p className="text-neutral-400 text-sm mt-2">
              © {new Date().getFullYear()} Tagoly. MIT License.
            </p>
          </div>

        </div>
      </footer>

      {/* モーダル呼び出し */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}