import React, { useState, useEffect } from "react";
import { products } from "./index";
import { FaHeart, FaRegHeart, FaTimes } from "react-icons/fa";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState(
    products.map((product) => ({ ...product, quantity: 1 }))
  );
  const [favorites, setFavorites] = useState([]);
  const [totalItems, setTotalItems] = useState(
    cartItems.reduce((sum, item) => sum + item.quantity, 0)
  );

  useEffect(() => {
    setTotalItems(cartItems.reduce((sum, item) => sum + item.quantity, 0));
    if (totalItems === 10) {
      alert("Congratulations! you have 10 items in your shopping cart !");
    }
  }, [cartItems, totalItems]);

  const handleFavoriteToggle = (id) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter((favId) => favId !== id);
      } else {
        return [...prevFavorites, id];
      }
    });
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + delta;
          if (newQuantity < 0) return item;
          console.log(`Item ID: ${id}, Quantity: ${newQuantity}`);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    });
  };

  const progressPercentage = Math.min(100, (totalItems / 10) * 100);

  return (
    <div className="shopping-cart">
      <h1 className="title-shopping">Shopping Cart</h1>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercentage}%` }} />
        <div className="truck">&#128666;</div>
      </div>
      <div className="cart-header">
        <div>Product</div>
        <div>Variation</div>
        <div>Quantity</div>
        <div>Price</div>
        <div>Total</div>
      </div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.imageUrl} alt={item.title} />
            <div className="item-details">
              <strong>{item.title}</strong>
              <div className="variation">
                {favorites.includes(item.id) ? (
                  <FaHeart
                    onClick={() => handleFavoriteToggle(item.id)}
                    className="heart-icon favorite"
                    title="Remove from favourite"
                  />
                ) : (
                  <FaRegHeart
                    onClick={() => handleFavoriteToggle(item.id)}
                    className="heart-icon"
                    title="add to favourite"
                  />
                )}
                <p>
                  Size: {item.size} Color: {item.color}
                </p>
              </div>
            </div>
            <div className="quantity-control">
              <button onClick={() => handleQuantityChange(item.id, -1)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, 1)}>
                +
              </button>
            </div>
            <p>&#8358;{item.price.toLocaleString()}</p>
            <p>&#8358;{(item.price * item.quantity).toLocaleString()}</p>
            <FaTimes
              onClick={() => handleRemoveItem(item.id)}
              className="remove-icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
