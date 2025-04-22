import React from 'react';
import background from "../assets/853844-hd_1920_1080_25fps.mp4"

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover z-0"
        src={background}
      />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Service</h1>
        <p className="text-xl">We provide the best solutions to grow your business.</p>
      </div>
    </section>
  );
};

export default Hero;