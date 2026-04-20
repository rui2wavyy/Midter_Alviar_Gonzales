import { Icon } from '@iconify/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ShoeGrid from './components/ShoeGrid'
import Footer from './components/Footer'

const floatingNavItems = [
  { icon: 'lucide:layout-grid', label: 'Home' },
  { icon: 'lucide:search', label: 'Search' },
  { icon: 'lucide:heart', label: 'Wishlist' },
  { icon: 'lucide:shopping-bag', label: 'Cart' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#ebebeb] overflow-x-hidden">
      <Navbar />

      {/* Floating bottom dock */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[110] hidden md:flex items-center gap-2 p-2 glass-nav rounded-2xl shadow-2xl">
        <div className="flex items-center gap-1 pr-4 border-r border-[#222222]">
          {floatingNavItems.map(({ icon, label }) => (
            <button
              key={label}
              title={label}
              className="p-3 hover:bg-[#1e1e1e] rounded-xl transition-all duration-200 group"
            >
              <Icon icon={icon} className="text-xl text-[#888888] group-hover:text-white transition-colors" />
            </button>
          ))}
        </div>
        <a
          href="#collection"
          className="px-6 py-3 bg-[#ff6b50] hover:bg-[#e55a40] text-black font-black text-xs tracking-widest uppercase rounded-xl transition-all duration-300"
        >
          Shop Now
        </a>
      </div>

      <Hero />
      <ShoeGrid />
      <Footer />
    </div>
  )
}
