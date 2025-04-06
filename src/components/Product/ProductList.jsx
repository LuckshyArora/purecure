import React, { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Products } from '../Data/navData';

const ProductList = ({ Product, deliveryDate }) => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scroll = (direction) => {
    const scrollAmount = direction === 'left' ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth;

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener('scroll', updateScrollButtons);
    }
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-xl font-bold mb-4">Products</h2>
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`p-2 rounded border ${canScrollLeft ? 'bg-white text-black' : 'bg-gray-200 text-gray-400'} cursor-not-allowed`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`p-2 rounded border ${canScrollRight ? 'bg-white text-black' : 'bg-gray-200 text-gray-400'} cursor-not-allowed`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {Products.map((product) => (
          <div
            key={product.id}
            className="min-w-[250px] sm:min-w-[300px] lg:min-w-[320px] bg-white rounded-lg shadow-md p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain mb-2 rounded"
              draggable="false"
            />
            <div className="text-left">
              <h2 className="font-bold text-lg">{product.name}</h2>
              <p className="text-md font-semibold text-green-700">₹{product.price}</p>
              <p className="text-sm text-gray-600">
                MRP: ₹{product.mrp}{' '}
                <span className="text-green-600 font-medium">({product.discount}% off)</span>
              </p>
              <p className="text-sm text-gray-500">Packaging: {product.packaging}</p>
              <p className="text-sm text-gray-500">Delivery by: {deliveryDate}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
