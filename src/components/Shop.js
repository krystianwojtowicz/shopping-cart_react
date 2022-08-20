import Header from "./Header";
import Main from "./Main";
import Basket from "./Basket";
import data from "../data";
import { useState, useEffect } from "react";

const cartFromLocalStorage = JSON.parse(
  localStorage.getItem("cartItems") || "[]"
);

function Shop() {
  const { products } = data;
  const [cartItems, setCartItems] = useState(cartFromLocalStorage);
  const [isActive, setActive] = useState(false);

  const totalItems = cartItems.reduce((a, c) => a + c.qty, 0);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const onShow = () => {
    setActive(!isActive);
  };
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const onRemoveAll = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  };

  const onClear = (product) => {
    setCartItems([]);
  };

  return (
    <div className="App">
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
      </nav>
      <Header cartItems={cartItems} onShow={onShow}></Header>
      {/* <div> */}
      <Main onAdd={onAdd} products={products} cartItems={cartItems}></Main>
      <Basket
        onClear={onClear}
        onAdd={onAdd}
        onRemove={onRemove}
        onRemoveAll={onRemoveAll}
        cartItems={cartItems}
        isActive={isActive}
        onShow={onShow}
      ></Basket>
      {/* </div> */}
    </div>
  );
}

export default Shop;
