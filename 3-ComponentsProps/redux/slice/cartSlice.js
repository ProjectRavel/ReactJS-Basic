import { createSlice } from "@reduxjs/toolkit";

// Mendapatkan data cart dari localStorage jika ada, jika tidak maka array kosong
const initialState = {
  data: JSON.parse(localStorage.getItem('cart')) || []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.qty++;
      } else {
        state.data.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
