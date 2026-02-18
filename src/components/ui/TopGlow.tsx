"use client";
import { motion } from "framer-motion";

export const TopGlow = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[300px] z-0 pointer-events-none overflow-hidden">
      {/* 天井に張り付く横長の光。
         w-full で横幅いっぱい。
         blur-3xl で強くぼかす。
         -top-20 で画面外に少しはみ出させることで、自然な「漏れ光」にする。
      */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }} // イントロが上がるタイミングに合わせてじわっと出す
        className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[120%] h-[200px] bg-[#ccff00] blur-[80px] opacity-60"
      />
      
      {/* アクセントとして、中心だけ少し強く光らせる（オプション）
         ヘッダーロゴの真裏あたりに来るように。
      */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-[#ccff00] blur-[60px] opacity-80 mix-blend-multiply"
      />
    </div>
  );
};