import React from "react";
import { useSelector } from "react-redux";
//Components Import
import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
export default function App() {
  const cartvisibility = useSelector((Store) => Store.cart.cart.visibility);
  return (
    <>
      <Navbar />
      {cartvisibility && <Cart />}
      <Shop />
    </>
  );
}
