import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { shopActions } from "../Store/Slices/ShopSlice";
import ShopItem from "./ShopItem";
const Shop = () => {
  const shopProducts = useSelector((Store) => Store.shop.products);
  return (
    <div className="text-center max-w-xl mx-auto px-4 py-3 bg-red-100">
      <h1 className="text-2xl font-semibold mb-2">
        Buy Your Favourite Products
      </h1>
      {shopProducts.map((item) => (
        <ShopItem
          title={item.title}
          description={item.description}
          price={item.price}
          key={item.id}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default Shop;
