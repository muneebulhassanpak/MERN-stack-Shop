import { createSlice } from "@reduxjs/toolkit";
const initialShopState = {
  products: [
    {
      title: "T-Shirt",
      description: "This is a T-Shirt with good stuff",
      price: "56.55",
      id: Math.random(),
    },
    {
      title: "Bat",
      description: "This is a Ballance bat imported from the UK ",
      price: "200",
      id: Math.random(),
    },
  ],
};
const shopSlice = createSlice({
  name: "shopProducts",
  initialState: initialShopState,
  reducers: {
    addProduct(state, action) {
      state.products = [action.payload, ...state.products];
    },
  },
});

export const shopActions = shopSlice.actions;
export default shopSlice.reducer;
