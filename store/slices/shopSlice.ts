import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Pet} from "@Types/Pet";

interface State {
  items: Pet[],
  selectedItem: Pet | null
}

const initialState: State = {
  items: [],
  selectedItem: null
}

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<Pet[]>) => {
      state.items = action.payload
    },
    selectItem: (state, action: PayloadAction<Pet>) => {
      state.selectedItem = action.payload
    }
  }
})

export default shopSlice