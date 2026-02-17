'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Copy, Terminal, Apple, Monitor, Laptop } from 'lucide-react'
import { cn } from '@/lib/utils'

const INSTALL_CMDS = {
  mac: {
    label: 'macOS',
    icon: Apple,
    cmd: 'brew tap meso1007/tagoly && brew install tagoly',
    note: 'Requires Homebrew'
  },
  win: {
    label: 'Windows',
    icon: Monitor,
    cmd: 'iwr https://tagoly.app/install.ps1 -useb | iex',
    note: 'Paste into PowerShell (No Admin needed)'
  },
  linux: {
    label: 'Linux',
    icon: Laptop,
    cmd: 'curl -fsSL https://tagoly.app/install.sh | sh',
    note: 'Universal Installer'
  },
}

type OSType = keyof typeof INSTALL_CMDS

export default function InstallWidget() {
  const [activeTab, setActiveTab] = useState<OSType>('mac')
  const [copied, setCopied] = useState(false)

  // OS自動判定 (クライアントサイドのみで実行)
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase()
    if (ua.includes('win')) setActiveTab('win')
    else if (ua.includes('linux')) setActiveTab('linux')
    else setActiveTab('mac')
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(INSTALL_CMDS[activeTab].cmd)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full max-w-3xl mx-auto mt-12 relative group">
      {/* 背景のグロー効果 (高級感) */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
      
      <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl">
        {/* タブヘッダー */}
        <div className="flex border-b border-white/5 bg-white/5">
          {(Object.keys(INSTALL_CMDS) as OSType[]).map((os) => {
            const Icon = INSTALL_CMDS[os].icon
            return (
              <button
                key={os}
                onClick={() => setActiveTab(os)}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium transition-all duration-300",
                  activeTab === os 
                    ? "bg-white/5 text-white shadow-[inset_0_-2px_0_0_#3b82f6]" 
                    : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                )}
              >
                <Icon className="w-4 h-4" />
                {INSTALL_CMDS[os].label}
              </button>
            )
          })}
        </div>

        {/* コマンドエリア */}
        <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-4 bg-black/40">
          <div className="flex-1 w-full bg-[#111] border border-white/10 rounded-lg p-4 font-mono text-sm relative group/code">
            <div className="flex items-center gap-2 text-gray-500 mb-2 select-none">
              <Terminal className="w-3 h-3" />
              <span className="text-xs uppercase tracking-wider">Terminal</span>
            </div>
            <code className="text-blue-400 block break-all">
              <span className="text-gray-500 select-none">$ </span>
              {INSTALL_CMDS[activeTab].cmd}
            </code>
          </div>

          <button
            onClick={handleCopy}
            className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 active:scale-95 transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span className="w-12 text-center">Done</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span className="w-12 text-center">Copy</span>
              </>
            )}
          </button>
        </div>
        
        {/* 注釈 */}
        <div className="px-6 pb-4 text-center md:text-left">
           <p className="text-xs text-gray-500 flex items-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"/>
             {INSTALL_CMDS[activeTab].note}
           </p>
        </div>
      </div>
    </div>
  )
}