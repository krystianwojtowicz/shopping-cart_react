import React from 'react'

export default function Product(props) {
    const { product, onAdd, cartItems } = props;
    return (
        <div>
            <article className="product">
                <div className="img-container">
                    <img src={product.image} alt={product.title} className='product-img'></img>
                    <button onClick={() => onAdd(product)} 
                    disabled={cartItems && cartItems.find((item) => item.id === product.id)}
                            className="bag-btn" data-id={product.id}>
                        <i className='fas fa-shopping-cart'></i>
                    add to bag
                </button>
                
                </div>
                <h3>{product.title}</h3>
                <h4>{product.price}</h4>
            </article>

        </div>
    )
}
