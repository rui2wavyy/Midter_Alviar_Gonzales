import { useGetNikeShoesQuery } from '../features/shoesApi'
import ShoeCard from './ShoeCard'

export default function ShoeGrid() {
  const { data: shoes, isLoading, isError, error } = useGetNikeShoesQuery()

  return (
    <section id="collection" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex justify-between items-end mb-20 border-b border-[#1a1a1a] pb-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 rounded-full bg-[#ff6b50] animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.4em] text-[#555555] uppercase">
              Live Inventory
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            Nike Collection
          </h2>
        </div>
        <span className="hidden md:block text-[#333333] text-[10px] font-black uppercase tracking-[0.3em]">
          Season 2024
        </span>
      </div>

      {/* Loading state */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-40 gap-6">
          <div className="w-10 h-10 rounded-full border-2 border-[#ff6b50] border-t-transparent spinner" />
          <p className="text-[#444444] text-xs font-black uppercase tracking-widest">
            Loading Collection...
          </p>
        </div>
      )}

      {/* Error state */}
      {isError && (
        <div className="flex flex-col items-center justify-center py-40 text-center gap-4">
          <div className="text-5xl mb-2">⚠️</div>
          <p className="text-[#ff6b50] font-black text-lg uppercase tracking-widest">
            API Key Required
          </p>
          <p className="text-[#444444] text-sm max-w-sm leading-relaxed">
            Open the <span className="text-white font-bold">.env</span> file and add your
            RapidAPI key. Get a free key at{' '}
            <span className="text-[#ff6b50]">rapidapi.com</span> → search "Sneaker Database Adidas Nike".
          </p>
          {error?.status && (
            <p className="text-[#333333] text-xs mt-2">
              Error {error.status}: {JSON.stringify(error.data)}
            </p>
          )}
        </div>
      )}

      {/* Shoes grid */}
      {shoes && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
          {shoes.map((shoe, i) => (
            <div key={shoe.id} className={i % 2 !== 0 ? 'md:mt-24' : ''}>
              <ShoeCard shoe={shoe} index={i} />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
