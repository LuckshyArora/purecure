import React from 'react';
import './ProductList.css';

const ProductList = () => {
  const cartProducts = [
    {
      id: 1,
      name: 'Crocin',
      price: 45.00,
      category: 'Pain Relievers',
      inStock: true,
      stock: 50,
      quantity: 1,
      description: 'Pain reliever',
      image: "https://picsum.photos/200?random=1",
    },
    {
      id: 2,
      name: 'Corex',
      price: 120.00,
      category: 'Cough Syrups',
      inStock: true,
      stock: 100,
      quantity: 1,
      description: 'Cough syrup',
      image: "https://picsum.photos/200?random=2",
    },
    {
      id: 3,
      name: 'Augmentin',
      price: 250.00,
      category: 'Antibiotics',
      inStock: true,
      stock: 53,
      quantity: 1,
      description: 'Antibiotic',
      image: "https://picsum.photos/200?random=3",
    },
    {
      id: 4,
      name: 'Digene',
      price: 60.00,
      category: 'Antacids',
      inStock: true,
      stock: 25,
      quantity: 1,
      description: 'Antacid',
      image: "https://picsum.photos/200?random=4",
    },
    {
      id: 5,
      name: 'Eno',
      price: 50.00,
      category: 'Antacids',
      inStock: true,
      stock: 100,
      quantity: 1,
      description: 'Antacid',
      image: "https://picsum.photos/200?random=5",
    },
    {
      id: 6,
      name: 'Vicks Action 500',
      price: 150.00,
      category: 'Cold and Flu',
      inStock: true,
      stock: 39,
      quantity: 1,
      description: 'Cold and flu medication',
      image: "https://picsum.photos/200?random=6",
    },
    {
      id: 7,
      name: 'Maha Thailam',
      price: 200.00,
      category: 'Ayurvedic',
      inStock: true,
      stock: 20,
      quantity: 1,
      description: 'Ayurvedic oil',
      image: "https://picsum.photos/200?random=7",
    },
    {
      id: 8,
      name: 'Dettol Antiseptic Liquid',
      price: 80.00,
      category: 'First Aid',
      inStock: true,
      stock: 30,
      quantity: 1,
      description: 'Antiseptic liquid',
      image: "https://picsum.photos/200?random=8",
    },
    {
      id: 9,
      name: 'Savlon Antiseptic Liquid',
      price: 70.00,
      category: 'First Aid',
      inStock: true,
      stock: 40,
      quantity: 1,
      description: 'Antiseptic liquid',
      image: "https://picsum.photos/200?random=9",
    },
    {
      id: 10,
      name: 'Betadine Antiseptic Liquid',
      price: 100.00,
      category: 'First Aid',
      inStock: true,
      stock: 70,
      quantity: 1,
      description: 'Antiseptic liquid',
      image: "https://picsum.photos/200?random=10",
    }
  ];

  return (
    <div className="product-list">
      <h1 className="product-list-title">Product List</h1>
      <ul className="product-list-items">
        {cartProducts.map((product) => (
          <li key={product.id} className="product-list-item">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">Price: ${product.price}</p>
            <p className="product-category">Category: {product.category}</p>
            <p className="product-description">{product.description}</p>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;