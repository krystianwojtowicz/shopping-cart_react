import React from "react";

export default function Basket(props) {
  const { onClear, cartItems, onAdd, onRemove, onRemoveAll, isActive, onShow } =
    props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  return (
    <div>
      <div className={`cart-overlay ${isActive ? "transparentBcg" : ""}`}>
        <div className={`cart ${isActive ? "showCart" : ""}`}>
          <span onClick={onShow} className="close-cart">
            <i className="fas fa-window-close"></i>
          </span>
          <h2>your cart</h2>
          <div className="cart-content">
            {cartItems.length === 0 && <div>Cart is Empty</div>}
            {/* {cartItems.length === 0 && <div>Cart is Empty</div>} */}
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt="product"></img>
                <div>
                  <h4>{item.title}</h4>
                  <h5>${item.price}</h5>
                  <span
                    className="remove-item"
                    data-id={item.id}
                    onClick={() => onRemoveAll(item)}
                  >
                    remove
                  </span>
                </div>
                <div>
                  {/* <button onClick={() => onAdd(item)} className='fas fa-chevron-up'>+</button> */}
                  <i
                    onClick={() => onAdd(item)}
                    className="fas fa-chevron-up"
                    data-id={item.id}
                  ></i>
                  {/* data-remove zamiast data id */}
                  {/* data-id js data-id react */}
                  {/* usunac data-id */}
                  <p className="item-amount">
                    {item.qty} x ${item.price.toFixed(2)}
                  </p>
                  {/* <button onClick={() => onRemove(item)} className='fas fa-chevron-down'>-</button> */}
                  <i
                    onClick={() => onRemove(item)}
                    className="fas fa-chevron-down"
                    data-id={item.id}
                  ></i>
                  {/* czy divy sie zgadzaja? */}
                  {/* spr kod po kliknieciu */}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-footer">
            <h3>
              your total : ${" "}
              <span className="cart-total">{itemsPrice.toFixed(2)}</span>
            </h3>
            {/* <button onClick={onClear} className="clear-cart banner-btn">
              clear cart
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
