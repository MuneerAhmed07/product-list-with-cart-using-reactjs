import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([]);

  console.log(cart);

  // handle add to cart
  const handleAddtoCart = (product) => {
    if(cart.some((item) => item.id === product.id)) {
      alert("This item is already in your Cart!");
      return;
    }
    setCart([...cart, product]);
  }

  // handle remove from cart
  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  return (
    <div className="App">
      <header className="app-header">
        <h1>Product List with Cart</h1>
      </header>
      <div className="app-container">
        <ProductList handleAddtoCart= {handleAddtoCart} />
        <Cart cartItem={cart} handleRemoveFromCart={handleRemoveFromCart}/>
      </div>
    </div>
  );
}

export default App;
