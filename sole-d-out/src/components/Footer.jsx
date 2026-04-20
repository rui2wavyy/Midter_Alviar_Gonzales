import { Icon } from '@iconify/react'

export default function Footer() {
  const socials = [
    { icon: 'lucide:instagram', label: 'Instagram' },
    { icon: 'lucide:twitter', label: 'Twitter' },
    { icon: 'lucide:facebook', label: 'Facebook' },
    { icon: 'lucide:globe', label: 'Website' },
  ]

  return (
    <footer id="contact" className="relative pt-48 pb-32 px-6 md:px-12 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">

        {/* Left — big CTA text */}
        <div className="flex-1">
          <h2 className="text-[14vw] md:text-[10vw] leading-[0.85] font-black tracking-tighter text-white mb-12 select-none">
            SOLE'D<br />OUT.
          </h2>

          <div className="flex flex-col gap-5">
            <a
              href="mailto:shop@soldout.com"
              className="text-2xl md:text-3xl font-semibold hover:text-[#ff6b50] transition-colors w-fit"
            >
              shop@soldout.com
            </a>
            <p className="text-[#555555] text-sm flex items-center gap-2">
              <Icon icon="lucide:map-pin" className="text-[#ff6b50]" />
              Worldwide Shipping Available
            </p>
            <p className="text-[#555555] text-sm flex items-center gap-2">
              <Icon icon="lucide:shield-check" className="text-[#ff6b50]" />
              100% Authentic Nike Products
            </p>
          </div>
        </div>

        {/* Right — social icons */}
        <div className="flex gap-3 md:mb-6">
          {socials.map(({ icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="w-14 h-14 border border-[#2a2a2a] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-2"
            >
              <Icon icon={icon} className="text-xl" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-40 pt-10 border-t border-[#111111] flex flex-col md:flex-row justify-between text-[#2a2a2a] text-[10px] font-black uppercase tracking-widest">
        <p>&copy; 2024 Sole'd Out. All rights reserved.</p>
        <div className="flex gap-10 mt-6 md:mt-0">
          <a href="#" className="hover:text-[#555555] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#555555] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
