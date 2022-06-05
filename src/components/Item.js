import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const ifInChart = inCart ? "in-cart" : ""

  function updatingCart(){
    // console.log(name)
    // console.log(category)
    if(ifInChart !== ""){
      setInCart(false)
    } else{
      setInCart(true)
    }
  }

  return (
    <li className={ifInChart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={updatingCart}>{ifInChart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
