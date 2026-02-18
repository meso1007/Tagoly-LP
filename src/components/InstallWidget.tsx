'use client'
import { useState, useEffect } from 'react'
import { Check, Copy } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// --- ブランドアイコン (SVG) 修正版 ---

const AppleLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 384 512" fill="currentColor" className={className}>
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
  </svg>
)

const WindowsLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 448 512" fill="currentColor" className={className}>
    <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" />
  </svg>
)

const LinuxLogo = ({ className }: { className?: string }) => (
    // viewBoxを修正し、パスを正確なものに差し替えました
    <svg viewBox="0 0 448 512" fill="currentColor" className={className}>
      <path d="M433.8 420.5c-11.5-1.4-44.5-52.5-49.8-59.9-5.7-8-12.7-17-21.2-24.3-10.2-8.8-21.5-14.7-32.9-18.7v-76.3c0-23.7 13.5-35.8 28.7-52.6 14.7-16.2 24.3-39.2 24.3-65.1 0-51.5-35.1-92.4-86-98.8C290.8 24.6 285.5 24 280 24c-5.5 0-10.8 .6-16.1 1.6-50.9 6.4-86 47.3-86 98.8 0 25.9 9.6 48.9 24.3 65.1 15.2 16.8 28.7 28.9 28.7 52.6v76.3c-11.4 4-22.7 9.9-32.9 18.7-8.5 7.3-15.5 16.3-21.2 24.3-5.3 7.4-38.3 58.5-49.8 59.9-5.8 .7-10.4 2.8-12.7 7.2-2.8 5.4-1.2 12.3 3.6 15.6 5.8 4 13.9 4.2 18.5 2.1 4.2-1.9 10.3-6.5 20.3-14.9 5.8-4.8 11.2-10 16.3-15.4 12.5-13.4 22.8-26.6 30.6-38.6 1.4-2.1 3-4.1 4.6-6 6.8-8.2 13.9-15.2 20.8-20.9 9.8-8.1 19.5-13.2 28.5-16.5 .5 18.2 2.1 52.9 6.7 80.2 6.5 38.3 16.9 66.8 32.5 86.8 8.8 11.3 22.1 18.8 38.8 18.8 16.7 0 30-7.5 38.8-18.8 15.6-20 26-48.5 32.5-86.8 4.6-27.3 6.1-62 6.7-80.2 9 3.3 18.7 8.4 28.5 16.5 6.9 5.7 13.9 12.8 20.8 20.9 1.6 1.9 3.2 3.9 4.6 6 7.8 12 18.1 25.2 30.6 38.6 5.1 5.4 10.5 10.6 16.3 15.4 10 8.4 16.1 13 20.3 14.9 4.6 2.1 12.7 1.9 18.5-2.1 4.8-3.3 6.4-10.2 3.6-15.6-2.3-4.4-6.9-6.5-12.7-7.2z"/>
    </svg>
  )

// もし上記でもうまく表示されない場合は、こちらの「ターミナルアイコン」を使ってください（Linuxっぽさが出るので安全策です）
/*
const LinuxLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
)
*/

// --- メインコンポーネント ---

const INSTALL_CMDS = {
  mac: "brew tap meso1007/tagoly && brew install tagoly",
  win: "iwr https://tagoly.app/install.ps1 -useb | iex",
  linux: "curl -fsSL https://tagoly.app/install.sh | sh",
}

type OSType = 'mac' | 'win' | 'linux';

export default function InstallWidget() {
  const [activeTab, setActiveTab] = useState<OSType>('mac')
  const [copied, setCopied] = useState(false)

  // OS自動判定
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase()
    if (ua.includes('win')) setActiveTab('win')
    else if (ua.includes('linux')) setActiveTab('linux')
    else setActiveTab('mac')
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(INSTALL_CMDS[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // タブの設定データ
  const tabs = [
    { id: 'mac', label: 'macOS', icon: AppleLogo },
    { id: 'win', label: 'Windows', icon: WindowsLogo },
    { id: 'linux', label: 'Linux', icon: LinuxLogo },
  ] as const;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* メインコンテナ */}
      <div className="bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]">
        
        {/* 1. リッチなタブヘッダー */}
        <div className="p-2 bg-neutral-50/80 border-b border-neutral-100">
          <div className="flex bg-neutral-100/50 p-1 rounded-2xl relative"> 
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold rounded-xl transition-all duration-300 z-10
                  ${activeTab === tab.id ? 'text-black' : 'text-neutral-400 hover:text-neutral-600'}
                `}
              >
                {/* 背景のスライディングアニメーション */}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-tab-bg"
                    className="absolute inset-0 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-neutral-100/50"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                
                {/* アイコンとテキスト */}
                <span className="relative z-10 flex items-center gap-2.5">
                  <tab.icon className="w-4 h-4 fill-current" />
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 2. コマンド表示エリア */}
        <div className="p-6 md:p-8 bg-white relative">
          <div className="relative flex items-center justify-between bg-neutral-50 border border-neutral-100 rounded-2xl px-5 py-4 transition-all hover:border-neutral-200 group">
            
            {/* 左端の装飾ライン */}
            <div className="absolute left-0 top-4 bottom-4 w-1 bg-[#ccff00] rounded-r-full" />

            <div className="flex flex-col w-full pl-4 overflow-hidden">
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold mb-1.5 flex items-center gap-2">
                Install Command
                {activeTab === 'mac' && <AppleLogo className="w-3 h-3 opacity-50" />}
                {activeTab === 'win' && <WindowsLogo className="w-3 h-3 opacity-50" />}
                {activeTab === 'linux' && <LinuxLogo className="w-3 h-3 opacity-50" />}
              </span>
              <code className="font-mono text-neutral-800 text-sm md:text-base break-all">
                <span className="text-[#a3cc00] mr-2 select-none font-bold">$</span>
                {INSTALL_CMDS[activeTab]}
              </code>
            </div>
            
            {/* コピーボタン */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCopy}
              className="ml-4 flex-shrink-0 p-3 rounded-xl bg-[#ccff00] text-black shadow-lg shadow-[#ccff00]/20 border border-black/5 flex items-center justify-center min-w-[44px] min-h-[44px] cursor-pointer"
            >
              <AnimatePresence mode='wait' initial={false}>
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                  >
                    <Check className="w-5 h-5" strokeWidth={3} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                  >
                    <Copy className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
          
          {/* 下部の補足メッセージ */}
          <div className="mt-4 flex justify-center h-4 overflow-hidden">
             <AnimatePresence mode="wait">
                <motion.p
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-xs text-neutral-400 font-medium text-center flex items-center gap-1.5"
                >
                  {activeTab === 'mac' && <>Recommended for Homebrew users <AppleLogo className="w-3 h-3 inline pb-0.5"/> </>}
                  {activeTab === 'win' && <>Run in PowerShell (No Admin needed) <WindowsLogo className="w-3 h-3 inline pb-0.5"/> </>}
                  {activeTab === 'linux' && <>Works on most distributions <LinuxLogo className="w-3 h-3 inline pb-0.5"/> </>}
                </motion.p>
             </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  )
}