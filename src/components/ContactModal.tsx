'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Check, Loader2, MessageSquare } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    // 送信シミュレーション
    setTimeout(() => {
      setFormState('success')
      setTimeout(() => {
        setFormState('idle')
        onClose() // 送信成功後に閉じる
      }, 2000)
    }, 1500)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 1. 背景のオーバーレイ (黒っぽくしてぼかす) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9999] bg-black/20 backdrop-blur-sm"
          />

          {/* 2. モーダル本体 */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden pointer-events-auto relative border border-neutral-100"
            >
              {/* 装飾: 右上のライムグロー */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ccff00]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              {/* ヘッダー */}
              <div className="px-8 pt-8 flex justify-between items-start relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">Get in touch</h3>
                  <p className="text-neutral-500 text-sm mt-1">
                    Bug report? Feature request? Let us know.
                  </p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-neutral-100 transition-colors text-neutral-400 hover:text-black"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* フォーム */}
              <div className="p-8 relative z-10">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-400 ml-1">EMAIL</label>
                    <input 
                      required type="email" placeholder="dev@example.com"
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 focus:outline-none focus:border-[#ccff00] focus:bg-white transition-all"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-400 ml-1">MESSAGE</label>
                    <textarea 
                      required rows={4} placeholder="How can we help?"
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 focus:outline-none focus:border-[#ccff00] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState !== 'idle'}
                    className={`
                      w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all
                      ${formState === 'idle' 
                        ? 'bg-black text-white hover:bg-neutral-800' 
                        : 'bg-[#ccff00] text-black'}
                    `}
                  >
                    {formState === 'idle' && <>Send Message <Send className="w-4 h-4" /></>}
                    {formState === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
                    {formState === 'success' && <>Sent! <Check className="w-5 h-5" /></>}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}