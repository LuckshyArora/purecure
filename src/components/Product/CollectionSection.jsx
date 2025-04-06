import React from 'react';
import { categoryImages } from '../Data/navData'; 
import { Link } from 'react-router-dom';

const CollectionSection = () => {
  return (
    <section className="py-12 px-4 lg:px-0 bg-[#f8f8f8]">
      <div className="container mx-auto">
        
        {/* Styled Heading */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-[#212121]">
            Shop by Category!
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categoryImages.map((category, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-sm bg-white">
              
              {/* Image */}
              <img 
                src={category.img} 
                alt={category.name} 
                className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Info Box */}
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-3 rounded-md shadow">
                <h2 className="text-base font-semibold text-gray-900 mb-1">
                  {category.name}
                </h2>
                <Link 
                  to="#" 
                  className="text-sm text-blue-600 underline hover:text-blue-800"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
