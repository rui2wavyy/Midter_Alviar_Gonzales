import { configureStore } from '@reduxjs/toolkit'
import { shoesApi } from '../features/shoesApi'

export const store = configureStore({
  reducer: {
    [shoesApi.reducerPath]: shoesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shoesApi.middleware),
})
