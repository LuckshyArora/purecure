import React from 'react'
import { featuresData } from '../Data/navData';

const Features = () => {
  return (
    <section className="py-16 px4 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {featuresData.map(({ icon, heading, message}, index) => {
          return (
            <div key={index} className="flex flex-col items-center">
              <div className="p-4 rounded mb-4">
                {React.createElement(icon, { className: "h-7 w-7" })}
              </div>
              <h4 className="tracking-tighter mb-2">{heading}</h4>
              <p className="text-gray-600 text-sm tracking-tighter">
                {message}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;