import Hero from "@/components/sections/Hero";
import BentoGrid from "@/components/sections/BentoGrid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#050505]">
      <Hero />
      <BentoGrid />
      {/* スペース調整用の余白 */}
      <div className="h-40" /> 
    </main>
  );
}