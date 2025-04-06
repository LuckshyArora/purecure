import React from "react";
import "./CartItems.css"; 

const CartItem = ({ item, handleQuantityChange, handleRemoveItem }) => {
  return (
    <div className="cart-item">
      <div className="item-info">
        <img src={item.image} alt={item.name} className="item-image" />
        <div className="item-details">
          <h3 className="item-name">{item.name}</h3>
          <p className="item-price">${item.price}</p>
        </div>
      </div>

      <div className="item-actions">
        <select
          value={item.quantity}
          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
          className="quantity-select"
        >
          {[1, 2, 3, 4, 5].map((qty) => (
            <option key={qty} value={qty}>
              {qty}
            </option>
          ))}
        </select>

        <button onClick={() => handleRemoveItem(item.id)} className="remove-btn">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
