import React from 'react';

const CartItem = ({ item, handleQuantityChange, handleRemoveItem }) => {
  return (
    <div className="cart-item flex justify-between items-center py-4 border-b border-gray-200">
      <div className="item-info flex items-center">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
        <div className="ml-4">
          <h3 className="text-lg font-bold">{item.name}</h3>
          <p className="text-gray-600">${item.price}</p>
        </div>
      </div>
      <div className="item-actions flex items-center">
        <select
          value={item.quantity}
          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
          className="mr-4 py-1 px-2 border border-gray-200 rounded"
        >
          {[1, 2, 3, 4, 5].map((quantity) => (
            <option key={quantity} value={quantity}>
              {quantity}
            </option>
          ))}
        </select>
        <button
          onClick={() => handleRemoveItem(item.id)}
          className="py-1 px-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;