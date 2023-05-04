import { createSlice } from "@reduxjs/toolkit";
const initialCartState = {
  cart: { cartItems: [], totalPrice: 0, visibility: false },
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  // reducers: {
  //   addToCart(state, action) {
  //     let id = action.payload.id;
  //     let cart = state.cart.slice();
  //     if (cart.length > 0) {
  //       for (let i = 0; i < cart.length; i++) {
  //         if (cart[i].id == id) {
  //           let foundItem = cart[i];
  //           let itemQuantity = +foundItem.quantity + 1;
  //           let newItem = { ...foundItem, quantity: itemQuantity };
  //           cart[i] = newItem;
  //           state.cart = cart;
  //         } else {
  //           state.cart = cart.push(action.payload);
  //         }
  //       }
  //     } else {
  //       state.cart = [action.payload];
  //     }
  //   },
  // },

  reducers: {
    addToCart(state, action) {
      const id = action.payload.id;
      const item = action.payload;
      let cartPrice = state.cart.totalPrice;
      const cart = state.cart.cartItems.slice(); // create a copy of the cart array

      const existingItemIndex = cart.findIndex((item) => item.id === id);
      if (existingItemIndex !== -1) {
        // item already exists in cart
        const existingItem = cart[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: +existingItem.quantity + 1,
        };
        cartPrice += +item.price;
        cart[existingItemIndex] = updatedItem;
      } else {
        // item does not exist in cart
        cart.push(item);
        cartPrice += +item.price;
      }
      state.cart = {
        cartItems: cart,
        totalPrice: cartPrice,
        visibility: state.visibility,
      };
    },
    removeFromCart(state, action) {
      const id = action.payload.id;
      const item = action.payload;
      let cartPrice = state.cart.totalPrice;
      let newCart;
      const cart = state.cart.cartItems.slice(); // create a copy of the cart array

      const existingItemIndex = cart.findIndex((item) => item.id === id);

      // item already exists in cart
      const existingItem = cart[existingItemIndex];
      if (existingItem.quantity >= 2) {
        const updatedItem = {
          ...existingItem,
          quantity: +existingItem.quantity - 1,
        };
        cartPrice += -item.price;
        cart[existingItemIndex] = updatedItem;
        newCart = cart;
      } else {
        cartPrice -= +item.price;
        newCart = cart.filter((item) => item.id != id);
      }

      state.cart = {
        cartItems: newCart,
        totalPrice: cartPrice,
        visibility: state.visibility,
      };
    },
    toggleCart(state) {
      state.cart.visibility = !state.cart.visibility;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
