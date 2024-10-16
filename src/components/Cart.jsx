import React from "react";
import { useSelector } from "react-redux";
import { getItemsSelector } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const items = useSelector(getItemsSelector);
  console.log(items); 
  const total = items.cartItems.reduce((a, b) => a + (b.price * b.quantity), 0);
  return (
    <div className="alert alert-success flex gap-8 px-3 h-max">
      <h3 className="text-3xl">
        Total Items: {items.cartItems.length} (Rs. {total})/-
        {/* Total Items: Rs. 300/- */}
      </h3>
      <button><Link to="/checkout">Checkout</Link></button>
    </div>
  );
};

export default Cart;
