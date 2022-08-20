// import React from "react";

// export default function Header(props) {
//   return (
//     <div>
//       <header className="hero">
//         <div className="banner">
//           <h1 className="banner-title">collection of mobile phones</h1>
//           <button className="banner-btn">shop now</button>
//         </div>
//       </header>
//     </div>
//   );
// }

import Basket from "./Basket";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const cartFromLocalStorage = JSON.parse(
  localStorage.getItem("cartItems") || "[]"
);

const onShow = () => {
  setActive(!isActive);
};

export default function Header(props) {
  const [cartItems, setCartItems] = useState(cartFromLocalStorage);
  const totalItems = cartItems.reduce((a, c) => a + c.qty, 0);
  const [isActive, setActive] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-center">
        <span>Mobile phones</span>
        <div onClick={onShow} className="cart-btn">
          <span className="nav-icon">
            <i className="fas fa-cart-plus"></i>
          </span>
          <div className="cart-items">
            {totalItems ? <span>{totalItems}</span> : "0"}
          </div>
        </div>
      </div>
      <Basket
        onClear={onClear}
        onAdd={onAdd}
        onRemove={onRemove}
        onRemoveAll={onRemoveAll}
        cartItems={cartItems}
        isActive={isActive}
        onShow={onShow}
      ></Basket>
    </nav>
  );
}
