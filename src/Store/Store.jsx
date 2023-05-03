import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/AuthSlice";
import shopSlice from "./Slices/ShopSlice";
import cartSlice from "./Slices/CartSlice";
const Store = configureStore({
  reducer: {
    auth: authSlice,
    shop: shopSlice,
    cart: cartSlice,
  },
});

export default Store;
