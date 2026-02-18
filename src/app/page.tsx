'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import IntroOverlay from '@/components/IntroOverlay'
import Hero from '@/components/sections/Hero'
import Header from '@/components/Header'
import BentoGrid from '@/components/sections/BentoGrid'
import TerminalDemo from '@/components/sections/TerminalDemo' // 追加
import Footer from '@/components/Footer' // 追加

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false)
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    if (showIntro) {
      // イントロが表示されている間はスクロールを禁止し、トップに固定
      document.body.style.overflow = 'hidden'
      window.scrollTo(0, 0)
    } else {
      // イントロが終わったらスクロールを許可
      document.body.style.overflow = 'unset'
    }
  }, [showIntro])

  const handleIntroComplete = () => {
    // 念の為、終わった瞬間にもトップへ戻す
    window.scrollTo(0, 0);
    
    setShowIntro(false)
    setTimeout(() => setIntroFinished(true), 100) 
  }
  return (
    <main className="relative min-h-screen bg-white selection:bg-[#ccff00] selection:text-black">
      
      <Header show={introFinished} />

      <AnimatePresence mode="wait">
        {showIntro && (
          // 👇 ここで完了時の関数を渡す
          <IntroOverlay onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      <div className="relative z-0">
        <Hero />
        <BentoGrid/>
        {/* 新しいセクションを追加 */}
        <TerminalDemo />
        <Footer />
      </div>

    </main>
  )
}