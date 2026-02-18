'use client'

import { motion } from 'framer-motion'
import { Terminal, Check, ChevronRight } from 'lucide-react'

export default function TerminalDemo() {
  return (
    <section className="py-24 px-4 w-full bg-neutral-50 overflow-hidden">
      <div className="max-w-5xl mx-auto relative"> {/* relativeを追加 */}
        
        {/* セクションタイトル */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-4">
            It feels like <span className="text-blue-600">magic</span>.
          </h2>
          <p className="text-neutral-500 text-lg">
            No arguments. No flags. Just type commit.
          </p>
        </div>

        {/* 👇 アクセント追加: 背景のグローエフェクト 
            ターミナルの後ろで青からライムグリーンへ変化する光
        */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] max-w-[800px] -z-0 pointer-events-none">
          {/* 青い光 (左上) */}
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500/10 blur-[100px] rounded-full mix-blend-multiply animate-pulse" style={{ animationDuration: '4s' }} />
          {/* ライム色の光 (右下) */}
          <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-[#ccff00]/20 blur-[100px] rounded-full mix-blend-multiply" />
        </div>

        {/* ターミナルウィンドウ */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          // z-10 を追加して光の上に表示
          className="relative z-10 rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] bg-[#0A0A0A] border border-neutral-800 font-mono text-sm md:text-base leading-relaxed"
        >
          {/* ターミナルヘッダー */}
          <div className="flex items-center px-4 py-3 bg-[#1A1A1A] border-b border-white/5">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="flex-1 text-center text-neutral-500 text-xs font-sans select-none">
              tagoly — interactive
            </div>
          </div>

          {/* ターミナルボディ */}
          <div className="p-6 md:p-8 min-h-[400px] text-neutral-300">
            
            {/* 1. コマンド入力 */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#ccff00]">➜</span>
              <span className="text-blue-400">~/project</span>
              <span className="text-neutral-500">$</span>
              <span className="text-white">git commit</span>
            </div>

            {/* 2. Tagolyの起動 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-1"
            >
              <div className="flex gap-2">
                <span className="text-blue-500 font-bold">?</span>
                <span className="text-white font-bold">Select commit type</span>
                <span className="text-neutral-500">(Use arrow keys)</span>
              </div>
              <div className="pl-4 text-[#ccff00] font-bold">❯ feat      <span className="text-neutral-500 font-normal ml-2">A new feature</span></div>
              <div className="pl-4 text-neutral-500">  fix       <span className="text-neutral-600 ml-2">A bug fix</span></div>
              <div className="pl-4 text-neutral-500">  docs      <span className="text-neutral-600 ml-2">Documentation only changes</span></div>
            </motion.div>

            {/* 3. Scope自動検知 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-6 space-y-1"
            >
              <div className="flex gap-2">
                <span className="text-blue-500 font-bold">?</span>
                <span className="text-white font-bold">Scope detected from staged files:</span>
              </div>
              <div className="pl-4 flex items-center gap-2">
                <span className="text-[#ccff00]">✔</span>
                <span className="text-white">auth</span>
                <span className="text-neutral-600 text-xs border border-neutral-800 px-2 py-0.5 rounded ml-2">src/auth/login.ts</span>
              </div>
            </motion.div>

            {/* 4. メッセージ入力 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="mt-6 space-y-1"
            >
               <div className="flex gap-2">
                <span className="text-blue-500 font-bold">?</span>
                <span className="text-white font-bold">Enter short description:</span>
              </div>
              <div className="pl-4 flex items-center gap-1">
                <span className="text-neutral-400">feat(auth):</span>
                <span className="text-white">implement google login</span>
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2 h-5 bg-[#ccff00] inline-block align-middle ml-1"
                />
              </div>
            </motion.div>

            {/* 5. 完了メッセージ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.5 }}
              className="mt-8 p-4 bg-neutral-900/50 border-l-4 border-[#ccff00] rounded-r-lg"
            >
               <div className="flex items-center gap-2 text-[#ccff00] font-bold mb-1">
                 <Check className="w-4 h-4" />
                 <span>Commit created successfully!</span>
               </div>
               <div className="text-neutral-500 text-xs font-mono">
                 [main 8a2b3c] feat(auth): implement google login
               </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}