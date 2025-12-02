import { useState } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Wireless Headphones", price: 79.99, emoji: "🎧" },
    { id: 2, name: "Laptop", price: 899.99, emoji: "💻" },
    { id: 3, name: "Smartphone", price: 699.99, emoji: "📱" }
  ]);

  const [cart, setCart] = useState([]);
  
  // Function to add to cart
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      // Item exists - increase quantity
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // New item - add with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Calculate cart total
  const cartTotal = cart.reduce((sum, item) => 
    sum + (item.price * item.quantity), 0
  );

  return (
    <div className="App">
      <header>
        <h1>🛒 Local Grocer (React Version)</h1>
        <div className="cart-summary">
          <p>Cart Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
          <p>Total: ${cartTotal.toFixed(2)}</p>
        </div>
      </header>
      
      <main>
        <h2>Products</h2>
        <div className="products-grid">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;