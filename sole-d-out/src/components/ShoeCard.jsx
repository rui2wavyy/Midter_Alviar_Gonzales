import { useState } from 'react'
import { Icon } from '@iconify/react'

const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1584735175097-c41a9e302f0e?w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&auto=format&fit=crop',
]

export default function ShoeCard({ shoe, index }) {
  const [selectedSize, setSelectedSize] = useState(null)
  const [imgError, setImgError] = useState(false)

  const image = imgError || !shoe.image
    ? FALLBACK_IMAGES[index % FALLBACK_IMAGES.length]
    : shoe.image

  const totalStock = Object.values(shoe.stock).reduce((a, b) => a + b, 0)

  return (
    <article
      className="group cursor-pointer card-enter"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      {/* Image container */}
      <div className="aspect-[4/3] overflow-hidden bg-[#111111] rounded-sm relative">
        <img
          src={image}
          alt={shoe.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />

        {/* Price badge */}
        <div className="absolute top-4 left-4 bg-[#ff6b50] text-black text-xs font-black px-3 py-1.5 rounded-full tracking-wide">
          ${shoe.price ?? 'N/A'}
        </div>

        {/* Stock badge */}
        <div className="absolute top-4 right-4 bg-[#111111]/90 text-[#888888] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest border border-[#333333]">
          {totalStock} left
        </div>
      </div>

      {/* Info */}
      <div className="mt-8 px-1">
        <div className="flex justify-between items-start">
          <div className="flex-1 pr-4">
            <h3 className="text-2xl font-bold tracking-tight group-hover:text-[#ff6b50] transition-colors duration-300">
              {shoe.name}
            </h3>
            <p className="text-[#555555] text-[10px] font-black uppercase tracking-[0.25em] mt-1">
              {shoe.colorway} &middot; {shoe.gender}
            </p>
          </div>

          <div className="p-3 rounded-full border border-[#333333] group-hover:bg-[#ff6b50] group-hover:border-transparent transition-all duration-300 shrink-0">
            <Icon icon="lucide:arrow-up-right" className="text-xl group-hover:text-black" />
          </div>
        </div>

        {/* Description */}
        <p className="text-[#444444] text-xs leading-relaxed mt-4 line-clamp-2">
          {shoe.description || 'Premium Nike footwear crafted for performance and everyday style.'}
        </p>

        {/* Sizes */}
        <div className="mt-5">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#444444] mb-3">
            Select Size (US)
          </p>
          <div className="flex flex-wrap gap-1.5">
            {shoe.sizes.map((size) => {
              const qty = shoe.stock[size]
              const isSelected = selectedSize === size
              return (
                <button
                  key={size}
                  onClick={() => setSelectedSize(isSelected ? null : size)}
                  className={`text-xs px-2.5 py-1.5 rounded-md border font-medium transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#ff6b50] border-[#ff6b50] text-black font-bold scale-105'
                      : qty > 0
                      ? 'border-[#2a2a2a] text-[#777777] hover:border-white hover:text-white'
                      : 'border-[#1a1a1a] text-[#2a2a2a] cursor-not-allowed line-through'
                  }`}
                >
                  {size}
                </button>
              )
            })}
          </div>
        </div>

        {/* Stock info for selected size */}
        {selectedSize && (
          <div className="mt-3 flex items-center gap-3 fade-up">
            <span className="text-[10px] text-[#555555] uppercase tracking-widest">
              Size {selectedSize}:
            </span>
            <span className={`text-[10px] font-black uppercase tracking-widest ${
              shoe.stock[selectedSize] <= 3 ? 'text-red-400' : 'text-emerald-400'
            }`}>
              {shoe.stock[selectedSize] <= 3
                ? `Only ${shoe.stock[selectedSize]} left!`
                : `${shoe.stock[selectedSize]} in stock`}
            </span>
          </div>
        )}

        {/* Add to cart button */}
        <button
          className="mt-5 w-full py-3 bg-[#1a1a1a] hover:bg-[#ff6b50] hover:text-black border border-[#2a2a2a] hover:border-[#ff6b50] text-[#666666] hover:font-bold text-xs uppercase tracking-widest rounded-lg transition-all duration-300"
        >
          {selectedSize ? `Add Size ${selectedSize} to Cart` : 'Select a Size'}
        </button>
      </div>
    </article>
  )
}
