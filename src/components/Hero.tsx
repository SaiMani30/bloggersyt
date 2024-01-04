"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import banner1 from "@/images/blogImage1.png";
import banner2 from "@/images/blogImage2.png";
import banner3 from "@/images/blogImage3.png";
import banner4 from "@/images/blogImage4.png";
import banner5 from "@/images/blogImage5.png";
import banner6 from "@/images/blogImage6.png";
import banner7 from "@/images/blogImage7.png";
import banner8 from "@/images/blogImage8.png";

const Hero = () => {
  const banners = [banner1, banner2, banner3, banner4, banner5, banner6, banner7, banner8];
  const [currentBanner, setCurrentBanner] = useState(0);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    // Automatically transition to the next banner every 2.5 seconds
    const intervalId = setInterval(() => {
      nextBanner();
    }, 2500);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentBanner]); // Run the effect whenever currentBanner changes

  return (
    <div className="w-full max-h-screen relative">
      <Image
        src={banners[currentBanner]}
        alt={`banner image ${currentBanner + 1}`}
        className="w-full max-h-screen object-contain"
      />
      <div className="absolute top-0 w-full h-full bg-black/30 text-white flex flex-col items-center justify-center">
      <h1
  className="text-4xl md:text-6xl lg:text-8xl font-manrope font-extrabold text-transparent bg-clip-text text-center"
  style={{
    background: 'linear-gradient(90deg, #DC6601, #FF5F1F)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  }}
>
  EXPLORE BLOGS
</h1>
        <p className="text-lg md:text-2xl lg:text-4xl font-semibold">
          {/* Add some meaningful content here */}
        </p>
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <button
            className="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={prevBanner}
          >
            {"< "}
          </button>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <button
            className="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={nextBanner}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
