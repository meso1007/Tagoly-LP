'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 px-4 border-t border-neutral-100">
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
            <div className="flex items-center gap-4">
               <code className="px-4 py-2 bg-neutral-100 text-neutral-600 rounded-lg font-mono text-sm border border-neutral-200">
                 brew install tagoly
               </code>
               <a href="https://github.com/meso1007/tagoly" className="flex items-center gap-1 text-black font-bold hover:text-blue-600 transition-colors">
                 GitHub <ArrowUpRight className="w-4 h-4" />
               </a>
            </div>
          </div>
        </div>

        {/* 右側：コピーライトなど */}
        <div className="text-right">
          <div className="text-[120px] leading-none font-bold text-neutral-50 select-none pointer-events-none">
            TAGOLY
          </div>
          <p className="text-neutral-400 text-sm mt-4">
            © {new Date().getFullYear()} Tagoly. MIT License.
          </p>
        </div>

      </div>
    </footer>
  )
}