export default function Hero() {
  return (
    <header className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#050505_70%)] opacity-70 pointer-events-none" />

      {/* Floating accent ring */}
      <div className="absolute w-[600px] h-[600px] rounded-full border border-[#ff6b50]/10 animate-float pointer-events-none" />
      <div className="absolute w-[800px] h-[800px] rounded-full border border-[#ff6b50]/5 animate-float pointer-events-none" style={{ animationDelay: '1s' }} />

      {/* Main hero text */}
      <div className="relative z-10 text-center px-4 fade-up">
        <p className="text-[#666666] text-[10px] font-black tracking-[0.5em] uppercase mb-8">
          Premium Nike Footwear
        </p>

        <h1 className="hero-text font-black text-white leading-none">
          SOLE'D
          <br />
          <span className="text-[#ff6b50]">OUT.</span>
        </h1>

        <p className="mt-10 text-[#555555] text-base max-w-sm mx-auto leading-relaxed">
          Exclusive drops. Authentic kicks. Limited stock.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#collection"
            className="px-8 py-4 bg-[#ff6b50] hover:bg-[#e55a40] text-black font-bold tracking-widest uppercase text-sm rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#ff6b50]/30"
          >
            Shop Collection
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-transparent border border-[#333333] hover:border-white text-[#888888] hover:text-white font-medium text-sm rounded-xl transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Bottom-left badge */}
      <div className="absolute bottom-12 left-8 md:left-12 flex items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-[#ff6b50] animate-pulse" />
        <span className="text-[#555555] text-[10px] font-black tracking-[0.35em] uppercase">
          New Season · Fresh Drops
        </span>
      </div>

      {/* Bottom-right label */}
      <div className="absolute bottom-12 right-8 md:right-12">
        <span className="text-[#333333] text-[10px] font-black uppercase tracking-widest">
          Est. 2024
        </span>
      </div>
    </header>
  )
}
