'use client'

import { motion } from 'framer-motion'
import { Zap, GitCommit, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const items = [
  {
    title: "Auto-Scope Detection",
    desc: "Tagoly intelligently infers the commit scope from your staged files.",
    header: (
      <div className="flex items-center justify-center w-full h-full min-h-[120px] bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl border border-white/5 overflow-hidden relative">
        <div className="font-mono text-sm text-gray-400">
          src/auth/login.ts <span className="text-blue-500">→</span> feat(auth)
        </div>
      </div>
    ),
    icon: <GitCommit className="h-4 w-4 text-blue-500" />,
    className: "md:col-span-2",
  },
  {
    title: "Blazing Fast",
    desc: "Built with Go. Starts instantly, runs locally. No latency.",
    header: (
      <div className="flex items-center justify-center w-full h-full min-h-[120px] bg-neutral-900 rounded-xl border border-white/5">
        <Zap className="w-12 h-12 text-yellow-500" />
      </div>
    ),
    icon: <Zap className="h-4 w-4 text-yellow-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Team Consistency",
    desc: "One config file ensures everyone follows the same commit rules.",
    header: (
      <div className="flex items-center justify-center w-full h-full min-h-[120px] bg-neutral-900 rounded-xl border border-white/5">
        <div className="flex -space-x-2">
           {[1,2,3].map(i => (
             <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#050505]" />
           ))}
        </div>
      </div>
    ),
    icon: <CheckCircle className="h-4 w-4 text-green-500" />,
    className: "md:col-span-1",
  },
]

export default function BentoGrid() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Why Tagoly?
        </h2>
        <p className="text-gray-400">Everything you need to keep your git history clean.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-[#0A0A0A] border border-white/10 justify-between flex flex-col space-y-4",
              item.className
            )}
          >
            {item.header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
              <div className="flex items-center gap-2 mb-2">
                  {item.icon}
                  <div className="font-bold text-neutral-200">
                    {item.title}
                  </div>
              </div>
              <div className="font-normal text-neutral-400 text-xs dark:text-neutral-300">
                {item.desc}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}