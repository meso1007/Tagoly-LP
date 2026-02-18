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
    const timer = setTimeout(() => {
      setShowIntro(false)
      setTimeout(() => setIntroFinished(true), 400) 
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen bg-white selection:bg-[#ccff00] selection:text-black">
      
      <Header show={introFinished} />

      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroOverlay onComplete={() => console.log('Intro hidden')} />
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