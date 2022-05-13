import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./slices/shopSlice"

export const store = configureStore({
  reducer: {
    shop: shopSlice.reducer
  }
})

export const { addItems, selectItem } = shopSlice.actions
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch