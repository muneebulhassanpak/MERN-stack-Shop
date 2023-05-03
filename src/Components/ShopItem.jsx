import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../Store/Slices/CartSlice";
const ShopItem = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((Store) => Store.cart.cart);
  const authStatus = useSelector((Store) => Store.auth.loginStatus);
  let title = props.title;
  let price = props.price;
  let description = props.description;
  let id = props.id;
  const addToCartHandler = (e) => {
    e.preventDefault();
    let item = {
      title,
      price,
      quantity: 1,
      id,
    };
    dispatch(cartActions.addToCart(item));
    console.log(cart);
  };
  return (
    <div className="bg-slate-400 text-center p-2 mt-1 rounded-md">
      <div className="relative">
        <h3 className="text-xl font-medium">{title}</h3>
        <span className="absolute top-1 right-1 px-3 py-1 bg-orange-400 text-white rounded-full">
          ${price}
        </span>
      </div>
      <p>{description}</p>
      {authStatus && (
        <button
          className="px-3 py-1 mt-2  bg-white text-orange-400 rounded-md"
          onClick={addToCartHandler}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ShopItem;
