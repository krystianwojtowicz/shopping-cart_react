import React from "react";
import Product from "./Product";

export default function Main(props) {
  const { products, onAdd, cartItems } = props;
  return (
    <div>
      <section className="products">
        <div className="section-title">
          <h2>our products</h2>
        </div>
        <div className="products-center">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onAdd={onAdd}
              cartItems={cartItems}
            ></Product>
          ))}
        </div>
      </section>
    </div>
  );
}
