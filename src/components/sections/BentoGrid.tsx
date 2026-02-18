'use client'

import { motion } from 'framer-motion'
import { Zap, GitCommit, FileCode, ArrowRight, Check, Terminal } from 'lucide-react'
import { cn } from '@/lib/utils'

// --- Visual Components (微調整) ---

// 1. Scope Visual
const ScopeVisual = () => (
  <div className="flex flex-col items-center justify-center w-full h-full min-h-[160px] bg-neutral-50/50 relative overflow-hidden">
    {/* グリッドを少し薄くして上品に */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    
    <div className="relative z-10 flex flex-col gap-4 items-center">
      <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-blue-100 shadow-sm text-neutral-600 text-sm font-mono group-hover:border-blue-300 transition-colors">
        <FileCode className="w-4 h-4 text-blue-600" />
        <span className="group-hover:text-blue-900 transition-colors">src/auth/login.ts</span>
      </div>
      <ArrowRight className="w-5 h-5 text-blue-200" />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-2 px-4 py-2 bg-[#ccff00] rounded-lg border border-[#b3e600] shadow-sm text-black font-bold font-mono text-sm"
      >
        <GitCommit className="w-4 h-4" />
        feat(auth)
      </motion.div>
    </div>
  </div>
)

// 2. Speed Visual
const SpeedVisual = () => (
  <div className="flex items-center justify-center w-full h-full min-h-[160px] bg-neutral-50/50 relative overflow-hidden group">
    <div className="absolute inset-0 flex items-center justify-center opacity-10">
      {/* 背景のZapを Blue-600 にしてブランドカラーと統一 */}
      <Zap className="w-40 h-40 text-blue-600 rotate-12" />
    </div>
    
    <div className="relative z-10 flex flex-col items-center text-center">
      <div className="text-5xl font-black tracking-tighter text-neutral-900 tabular-nums flex items-baseline">
        0.05
        <span className="text-2xl text-blue-600 font-medium ml-1">s</span>
      </div>
      <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
        Written in Go
      </div>
    </div>
  </div>
)

// 3. Consistency Visual
const ConsistencyVisual = () => (
  <div className="flex flex-col w-full h-full min-h-[160px] bg-neutral-50/50 p-6 relative overflow-hidden">
    <div className="flex flex-col gap-2 relative z-10">
      {[
        { user: 'https://i.pravatar.cc/150?u=1', scope: 'feat(ui)', msg: 'add button' },
        { user: 'https://i.pravatar.cc/150?u=2', scope: 'fix(api)', msg: 'user login' },
        { user: 'https://i.pravatar.cc/150?u=3', scope: 'docs', msg: 'update readme' },
      ].map((log, i) => (
        <motion.div 
          key={i}
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 + (i * 0.1) }}
          className="flex items-center gap-3 bg-white p-2 rounded-lg border border-neutral-100 shadow-sm"
        >
          <img src={log.user} alt="user" className="w-6 h-6 rounded-full grayscale opacity-80 ring-2 ring-blue-50" />
          <div className="h-4 w-full bg-neutral-50 rounded flex items-center px-2 gap-2 overflow-hidden">
            <span className="text-[10px] font-mono font-bold text-blue-600 shrink-0">{log.scope}:</span>
            <span className="text-[10px] font-mono text-neutral-500 truncate">{log.msg}</span>
          </div>
          <Check className="w-3 h-3 text-[#ccff00]" />
        </motion.div>
      ))}
    </div>
  </div>
)

// 4. CLI Visual
const CliVisual = () => (
  <div className="flex items-center justify-center w-full h-full min-h-[160px] bg-neutral-900 p-4 font-mono text-xs leading-relaxed">
    <div className="w-full max-w-[200px]">
      <div className="flex gap-2 mb-2">
        <span className="text-blue-500 font-bold">?</span>
        <span className="text-neutral-200">Select commit type:</span>
      </div>
      <div className="pl-2">
        <div className="flex gap-2 text-blue-400 font-bold">
          <span>❯</span>
          <span className="underline decoration-blue-500/30">feature</span>
        </div>
        <div className="flex gap-2 text-neutral-500">
          <span className="opacity-0">❯</span>
          <span>fix</span>
        </div>
        <div className="flex gap-2 text-neutral-500">
          <span className="opacity-0">❯</span>
          <span>docs</span>
        </div>
      </div>
    </div>
  </div>
)

// --- Main Component ---

const items = [
  {
    title: "Auto-Scope Detection",
    desc: "Tagoly intelligently infers the commit scope from your staged files.",
    header: <ScopeVisual />,
    className: "md:col-span-2",
  },
  {
    title: "Blazing Fast",
    desc: "Built with Go. Starts instantly, runs locally. No latency.",
    header: <SpeedVisual />,
    className: "md:col-span-1",
  },
  {
    title: "Team Consistency",
    desc: "One config file ensures everyone follows the same commit rules.",
    header: <ConsistencyVisual />,
    className: "md:col-span-1",
  },
  {
    title: "Interactive CLI",
    desc: "No more remembering flags. Just answer simple questions.",
    header: <CliVisual />,
    className: "md:col-span-2",
  },
]

export default function BentoGrid() {
  return (
    <section className="py-24 w-full bg-blue-600">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Why Tagoly?
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl">
            Everything you need to keep your git history clean, without the friction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                  // ベーススタイル
                  "group relative overflow-hidden rounded-3xl bg-white flex flex-col",
                  
                  // 👇 変更点: デフォルトは透明なボーダー + 濃い青の影で浮遊感を出す
                  "border-2 border-transparent shadow-xl shadow-blue-900/20",
                  
                  // ホバー時: ボーダーとグローをLimeにする
                  "hover:border-[#ccff00] hover:shadow-[0_0_30px_-5px_rgba(204,255,0,0.6)]",
                  
                  // アニメーション設定
                  "transition-all duration-500 ease-out",
                  
                  item.className
              )}
            >
              {/* Header (Visual) Area */}
              <div className="w-full border-b border-neutral-100 overflow-hidden bg-neutral-50/30">
                 {item.header}
              </div>

              {/* Text Area */}
              <div className="p-6">
                {/* テキストカラーの変更のみ（太字にするとレイアウトがズレるため） */}
                <h3 className="font-bold text-xl text-neutral-900 mb-2 group-hover:text-[#8cb300] transition-colors flex items-center gap-2">
                  {item.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}