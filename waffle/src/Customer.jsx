import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './Customer.css';

const items = [
  { id: 1, name: 'Item 1', stock: 5 },
  { id: 2, name: 'Item 2', stock: 10 },
  { id: 3, name: 'Item 3', stock: 1 },
];

function Customer() {
  const [cart, setCart] = useState([]);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [currentView, setCurrentView] = useState('items');

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleCheckout = () => {
    // Simulate stock update
    const updatedItems = items.map((item) => {
      const cartItem = cart.find((cartItem) => cartItem.id === item.id);
      if (cartItem) {
        const updatedItem = { ...item, stock: item.stock - 1 };
        if (updatedItem.stock <= 0) {
          return null; // Remove item if stock is depleted
        }
        return updatedItem;
      }
      return item;
    });

    // Remove null items
    const filteredItems = updatedItems.filter(Boolean);

    // Update stock and set checkout complete
    items.splice(0, items.length, ...filteredItems);
    setCheckoutComplete(true);
    setCart([]);
  };

  const renderItems = () => (
    <div className="middle">
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Stock: {item.stock}</p>
          <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );

  const renderCart = () => (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );

  const renderCheckout = () => (
    <div className="checkout">
      <h2>Checkout</h2>
      {checkoutComplete ? (
        <div>
          <p>Order confirmed!</p>
          <QRCode value="Order ID: 12345" />
        </div>
      ) : (
        <p>Please confirm your order.</p>
      )}
      <button onClick={handleCheckout} disabled={checkoutComplete}>
        Confirm Order
      </button>
    </div>
  );

  return (
    <div>
      <nav className="top">
        <h1>Way cheaper!</h1>
        <button onClick={() => setCurrentView('items')}>Home</button>
        <button onClick={() => setCurrentView('cart')}>
          Cart ({cart.length})
        </button>
        <button onClick={() => setCurrentView('checkout')}>Checkout</button>
      </nav>

      {currentView === 'items' && renderItems()}
      {currentView === 'cart' && renderCart()}
      {currentView === 'checkout' && renderCheckout()}
    </div>
  );
}

export default Customer;
