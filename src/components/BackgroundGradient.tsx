'use client'

export default function BackgroundGradient() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-[#050505] overflow-hidden">
      {/* ノイズテクスチャ（質感を出す重要ポイント） */}
      <div className="absolute inset-0 opacity-[0.03]"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
           }}
      ></div>

      {/* グラデーションオーブ 1 (青系) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/10 blur-[120px] animate-pulse-slow"></div>

      {/* グラデーションオーブ 2 (紫系) */}
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/10 blur-[100px] animate-float"></div>

      {/* グラデーションオーブ 3 (シアン系 - 下部) */}
      <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-cyan-600/5 blur-[150px] animate-pulse-slower"></div>
    </div>
  )
}