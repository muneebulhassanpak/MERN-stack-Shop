import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../Store/Slices/AuthSlice";
import { cartActions } from "../Store/Slices/CartSlice";
const Navbar = () => {
  const authStatus = useSelector((Store) => Store.auth.loginStatus);
  const cart = useSelector((Store) => Store.cart.cart.cartItems);
  // let cartStatus = cart.length > 0 ? cart.length : 0;
  let netQuantity = 0;
  for (let i = 0; i < cart.length; i++) {
    netQuantity = netQuantity + cart[i].quantity;
  }
  const dispatch = useDispatch();
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.logout());
  };
  const toggleCart = (e) => {
    e.preventDefault();
    dispatch(cartActions.toggleCart());
  };
  return (
    <header className="bg-purple-400 p-3">
      <nav className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="flex-1 text-3xl font-medium font-strange">Logo</h1>
        <ul className="flex flex-2 justify-between items-center font-poppins">
          <li className="px-3 py-1 mx-1 text-white text-base font-thin">
            <a href="">Shop</a>
          </li>
          {authStatus && (
            <li className="px-3 py-1 mx-1 text-white text-base font-thin ">
              <a href="" onClick={toggleCart}>
                Cart {netQuantity}
              </a>
            </li>
          )}

          {!authStatus && (
            <>
              <li className="px-3 py-1 mx-1 text-white text-base font-thin ">
                <a href="">Sign Up</a>
              </li>
              <li className="px-3 py-1 mx-1 text-white text-base font-thin border-2 border-yellow-300 rounded-md">
                <a href="" onClick={loginHandler}>
                  Login
                </a>
              </li>
            </>
          )}

          {authStatus && (
            <li className="px-3 py-1 mx-1 text-white text-base font-thin border-2 border-yellow-300 rounded-md">
              <a href="" onClick={logoutHandler}>
                Logout
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
