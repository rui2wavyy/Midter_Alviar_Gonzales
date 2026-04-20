import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

function stripHtml(html) {
  return html?.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim() || ''
}

function isAdultShoe(skus) {
  return skus?.some((s) => {
    const sz = s.nikeSize
    return !sz.includes('C') && !sz.includes('Y') && !sz.includes('PS') &&
      !sz.includes('TD') && !sz.includes('GS') && parseFloat(sz) >= 6
  })
}

function buildStock(sizes, id) {
  const seed = id.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
  return sizes.reduce((acc, size, i) => {
    acc[size] = ((seed * (i + 5)) % 18) + 1
    return acc
  }, {})
}

export const shoesApi = createApi({
  reducerPath: 'shoesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getNikeShoes: builder.query({
      query: () =>
        'nike-api/product_feed/threads/v2/?filter=marketplace(US)&filter=language(en)&filter=channelId(d9a5bc42-4b9c-4976-858a-f159cf99c647)&filter=exclusiveAccess(true,false)&count=60',
      transformResponse: (response) => {
        const shoes = []
        for (const obj of response.objects) {
          if (shoes.length >= 12) break
          const info = obj.productInfo?.[0]
          if (!info) continue
          if (info.merchProduct?.productType !== 'FOOTWEAR') continue
          if (!isAdultShoe(info.skus)) continue

          const sizes = info.skus?.map((s) => s.nikeSize) || []

          shoes.push({
            id: obj.id,
            name: info.productContent?.fullTitle || info.productContent?.title,
            description: stripHtml(info.productContent?.description),
            price: info.merchPrice?.currentPrice || info.merchPrice?.fullPrice,
            image: info.imageUrls?.productImageUrl,
            colorway: info.productContent?.colorDescription || info.productContent?.subtitle || '',
            gender: info.merchProduct?.genders?.[0] || 'UNISEX',
            sizes,
            stock: buildStock(sizes, obj.id),
          })
        }
        return shoes
      },
    }),
  }),
})

export const { useGetNikeShoesQuery } = shoesApi
