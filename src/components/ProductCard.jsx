import React from 'react'

const ProductCard = ({product, onHandleCart}) => {
    return (
        <>
            <div className="product-card">
                <img src={product.image} alt={product.title} className='product-image' />
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
                <button className='btn-add-to-cart' onClick={() => onHandleCart(product)}>Add to Cart</button>
            </div>
        </>
    )
}

export default ProductCard;
