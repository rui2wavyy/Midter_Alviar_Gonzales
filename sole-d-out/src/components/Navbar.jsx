export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-5 flex items-center justify-between text-sm font-medium tracking-tight glass-nav">
      <div className="flex items-center gap-10">
        <a href="/" className="flex items-center group">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-black font-black text-base transition-transform duration-300 group-hover:rotate-12">
            S.
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8 text-[#888888]">
          <a href="#" className="hover:text-white transition-colors duration-200">Home</a>
          <a href="#collection" className="hover:text-white transition-colors duration-200">Collection</a>
          <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
          <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <span className="hidden md:block text-[#555555] text-xs">Free shipping on $100+</span>
        <a
          href="#collection"
          className="px-5 py-2.5 bg-[#1a1a1a] hover:bg-white hover:text-black border border-[#333333] rounded-lg transition-all duration-300 text-sm"
        >
          Shop Now
        </a>
      </div>
    </nav>
  )
}
