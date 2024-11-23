import React from 'react'

const Cart = ({cartItem, handleRemoveFromCart}) => {
  return (
    <>
     <div className="cart">
        <h2>Your Cart</h2>
        {
            cartItem.length > 0 ? (
                cartItem.map((item) => (
                    <li key={item.id} className='cart-item'>
                        <img src={item.image} alt={item.title} className='cart-item-image' />
                        <div className="cart-item-details">
                            <h4>{item.title}</h4>
                            <p>Price: ${item.price}</p>
                        </div>
                        <button className='btn-remove-from-cart'
                        onClick={() => handleRemoveFromCart(item.id)}
                        >Remove</button>
                    </li>
                ))
            ) : (
                <p>Your cart is empty.</p>
            )
        }
    </div> 
    </>
  )
}

export default Cart;
