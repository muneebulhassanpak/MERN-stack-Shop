import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/Slices/CartSlice";
const CartItem = (props) => {
  let productName = props.title;
  let productPrice = props.price;
  let productQuantity = props.quantity;
  let productId = props.id;
  let cartTotal = props.totalPrice;
  const dispatch = useDispatch();
  let myObject = {
    title: productName,
    price: productPrice,
    quantity: productQuantity,
    id: productId,
  };
  const incrementHandler = (e) => {
    e.preventDefault();
    dispatch(cartActions.addToCart(myObject));
  };
  const decrementHandler = (e) => {
    e.preventDefault();
    dispatch(cartActions.removeFromCart(myObject));
  };
  return (
    <div className="flex justify-between items-center p-2 mb-1 bg-orange-200  rounded-e-md">
      <div className="flex-1 flex justify-between items-center ">
        <h3 className="font-semibold text-xl  ">{productName}</h3>
        <h4 className=" mx-2">${productPrice}</h4>
        <p className=" mx-2 ">x {productQuantity}</p>
        <h3>{cartTotal}</h3>
      </div>
      <div className="flex-2 ">
        <button
          className="px-3 py-1 border-2 border-black rounded-md mr-2"
          onClick={incrementHandler}
        >
          +
        </button>
        <button
          className="px-3 py-1 border-2 border-black rounded-md"
          onClick={decrementHandler}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CartItem;
