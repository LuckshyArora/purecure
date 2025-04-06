import React, { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { healthPackages } from '../Data/navData';

const HealthCheckupSection = () => {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ right: 300, behavior: 'smooth' });
  };

  return (
    <section className="py-12 px-4 lg:px-0 bg-[#f8f8f8]">
      <div className="container mx-auto">
        {/* Heading + SEE ALL */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-[#212121]">
            Full body health checkups
          </h2>
          <Link to="#" className="bg-[#ff6b6b] text-white px-4 py-2 text-sm rounded">
            SEE ALL
          </Link>
        </div>

        {/* Scrollable Cards */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 pb-2"
          >
            {healthPackages.map((pkg, index) => (
              <div
                key={index}
                className="min-w-[250px] bg-white rounded-lg shadow-sm p-4 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                    {pkg.name}
                  </h3>
                  {pkg.safe && (
                    <span className="text-[10px] px-2 py-[2px] bg-orange-100 text-orange-600 font-medium rounded flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l9 4v6c0 5.25-3.44 9.88-9 11-5.56-1.12-9-5.75-9-11V6l9-4z"/></svg>
                      SAFE
                    </span>
                  )}
                </div>
                <div className="text-lg font-bold">₹{pkg.currentPrice}</div>
                <div className="text-sm text-gray-500 line-through">₹{pkg.oldPrice}</div>
                <div className="inline-block mt-1 px-2 py-[2px] text-[12px] border border-green-500 text-green-600 font-medium rounded">
                  {pkg.discount}
                </div>
              </div>
            ))}
          </div>
        
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2"
          >
            <FiChevronLeft className="text-xl text-gray-700" />
          </button>
          {/* Scroll Button (Right) */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2"
          >
            <FiChevronRight className="text-xl text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HealthCheckupSection;
