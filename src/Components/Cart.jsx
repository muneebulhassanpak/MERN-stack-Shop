import React from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
const Cart = () => {
  const cartData = useSelector((Store) => Store.cart.cart.cartItems);
  console.log(cartData);
  let status = cartData.length > 0 ? true : false;
  const totalPrice = useSelector((Store) => Store.cart.totalPrice);
  return (
    <div className="max-w-2xl p-3 bg-orange-300 rounded-md mx-auto my-3 text-center">
      <h1 className="text-2xl mb-2">Cart Items</h1>
      {!status && <p>Nothing in cart</p>}
      {status &&
        cartData.map((item) => (
          <CartItem
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            totalPrice={totalPrice}
            key={item.id}
            id={item.id}
          />
        ))}
    </div>
  );
};

export default Cart;
