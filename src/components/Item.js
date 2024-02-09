import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(true)

  const liClass = isInCart ? "" : "in-cart";
  const buttonClass = isInCart ? "add" : "remove";

  function handleClick() {
    setIsInCart(isInCart => !isInCart)
  }
  
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleClick}>{isInCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
