'use client'

import { motion } from "framer-motion";
import InstallWidget from "@/components/InstallWidget"; 
import { TopGlow } from "@/components/ui/TopGlow"; // さっき作ったやつ

export default function Hero() {
  return (
    // bg-white を指定して清潔に
    <section className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. 天井のグロー (これがヘッダー代わりになる) */}
      <TopGlow />

      {/* コンテンツ (z-index を上げて光の上に表示) */}
      <div className="relative z-10 flex flex-col items-center px-4">
        
        {/* タイトル */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }} // イントロ明けに少し遅らせる
          className="text-center text-5xl md:text-8xl font-extrabold tracking-tighter text-neutral-900 leading-tight"
        >
          Commit with <br />
          <span className="text-neutral-900">Confidence.</span>
        </motion.h1>

        {/* サブタイトル */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-6 text-neutral-500 font-medium text-center max-w-xl text-lg md:text-xl"
        >
          Stop wasting time on format. Tagoly automates scope detection and enforces team consistency.
        </motion.p>

        {/* ウィジェット */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.9, duration: 0.8 }}
           className="mt-12 w-full max-w-2xl"
        >
          <InstallWidget />
        </motion.div>

      </div>
    </section>
  );
}