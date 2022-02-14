import React from "react";
import { useLocation } from "react-router";
const Success = () => {
  const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  // const data = location.stripeData;
  // const cart = location.state.cart;
  const data = location.state;

  console.log("data", data);
  return <div>Successfull. Your order is being prepared...</div>;
};

export default Success;
