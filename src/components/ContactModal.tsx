'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Loader2, Check, MessageSquare, Terminal } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')

    // デバッグ用: コンソールで送信データを確認できます
    console.log("送信データ:", formData); 

    try {
      // 👇 自分のIDになっているか再確認
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/mykdpolb";

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormState('success')
        setFormData({ email: '', message: '' })
        setTimeout(() => {
          setFormState('idle')
          onClose()
        }, 2000)
      } else {
        const data = await response.json();
        console.error("Formspree Error:", data); // エラー詳細を表示
        setFormState('error')
        setTimeout(() => setFormState('idle'), 3000)
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setFormState('error')
      setTimeout(() => setFormState('idle'), 3000)
    }
  }

  // 👇 入力をStateに反映させる関数
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景オーバーレイ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9999] bg-neutral-950/60 backdrop-blur-sm"
          />

          {/* モーダル本体 */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              className="w-full max-w-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto relative flex flex-col"
            >
              
              {/* ヘッダーエリア */}
              <div className="relative overflow-hidden px-8 pt-8 pb-6 bg-neutral-50 border-b border-neutral-100">
                <div className="absolute top-0 right-0 -mt-12 -mr-12 w-40 h-40 bg-[#ccff00] rounded-full blur-3xl pointer-events-none mix-blend-multiply" />
                <div className="relative z-10 flex justify-between items-start">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shadow-sm">
                      <Terminal className="w-6 h-6 text-[#ccff00]" />
                    </div>
                    <div>
                      <h3 className="text-4xl font-black tracking-tight text-neutral-900">
                        Get in touch
                      </h3>
                      <p className="text-neutral-500 text-sm mt-1 font-medium">
                        Questions, bug reports, or feedback.
                      </p>
                    </div>
                  </div>
                  <button onClick={onClose} className="p-2 -mr-2 -mt-2 rounded-full bg-white hover:bg-neutral-100 border border-transparent hover:border-neutral-200 transition-all text-neutral-400 hover:text-black shadow-sm">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* フォームエリア */}
              <div className="p-8 relative">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-70 pointer-events-none" />

                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  
                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider">
                      Your Email
                    </label>
                    <div className="relative group">
                        <input 
                        required 
                        id="email"
                        // 👇 【重要】ここを追加！これがないと空送信になります
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        // 👆 ここまで
                        type="email" 
                        placeholder="developer@example.com"
                        className="w-full bg-white/80 backdrop-blur-sm border-2 border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#ccff00] focus:ring-4 focus:ring-[#ccff00]/20 transition-all shadow-sm group-hover:border-neutral-300"
                        />
                    </div>
                  </div>
                  
                  {/* Message Input */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider">
                      Message
                    </label>
                    <div className="relative group">
                        <textarea 
                        required 
                        id="message"
                        // 👇 【重要】ここを追加！
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        // 👆 ここまで
                        rows={5} 
                        placeholder="How can we help improve your workflow?"
                        className="w-full bg-white/80 backdrop-blur-sm border-2 border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#ccff00] focus:ring-4 focus:ring-[#ccff00]/20 transition-all resize-none shadow-sm group-hover:border-neutral-300"
                        />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formState !== 'idle' && formState !== 'error'}
                    className={`
                      w-full py-4 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all shadow-md
                      ${formState === 'idle' 
                        ? 'bg-black text-white hover:bg-neutral-800 hover:shadow-xl hover:scale-[1.01] active:scale-[0.98]' 
                        : formState === 'error'
                        ? 'bg-red-500 text-white' // エラー時は赤くする
                        : 'bg-[#ccff00] text-black border-2 border-[#ccff00] cursor-default'}
                    `}
                  >
                    {formState === 'idle' && <>Send Message <ArrowRight className="w-5 h-5" /></>}
                    {formState === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
                    {formState === 'success' && <>Message Sent! <Check className="w-5 h-5" /></>}
                    {formState === 'error' && <>Error. Try Again.</>}
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