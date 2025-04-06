import React from 'react';
import heroImg from '../../../assets/heroImg.webp';

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Doctor"
        className="w-full h-[400px] md:h-[500px] lg:h-[750px] object-cover"
      />

      {/* <div className="absolute inset-0 flex items-center justify-center bg-opacity-100">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Your Trusted Online Pharmacy</h1>
          <p className="text-lg md:text-xl">Safe. Reliable. Delivered to your doorstep.</p>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
