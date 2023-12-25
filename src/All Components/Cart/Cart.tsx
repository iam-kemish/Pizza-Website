// import React from 'react'
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useContext } from "react";
import { contextApi } from "../../Context/Context";

const Cart = () => {
  const {item} = useContext(contextApi);
  const cart = item;
  return (
    <div className="my-10 sm:text-xl ml-5">
      <Link
        to="/menu"
        className="transform hover:text-red-700 transition-transform duration-200 active:text-red-600 text-blue-800"
      >
        &larr; Back to menu
      </Link>

      <h2 className="mt-7">
        {
          cart.map((crt)=>{
            return(
             <ul className="mt-7 divide-y divide-stone-200" key={crt.id}>  
             <CartItem crt={crt}/>
             </ul> 
            )
          })
        }
      </h2>

      <div className="mt-7">
        <Link to="/order/new" className="btn">Order pizzas</Link>
        <button className="ml-3 hover:text-red-800 active:text-red-600">Clear cart &rarr;</button>
      </div>
    </div>
  );
};

export default Cart;
