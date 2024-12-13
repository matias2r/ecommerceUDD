import React, { useState } from "react";
import banner1 from "../assets/banner1.webp";
import banner2 from "../assets/banner2.webp";
import banner3 from "../assets/banner3.webp";
import banner4 from "../assets/banner4.webp";
import banner5 from "../assets/banner5.webp";

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [banner1, banner2, banner3, banner4, banner5];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="default-carousel" className="relative w-full p-5">
      <div className="relative overflow-hidden rounded-lg h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[500px]">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "block" : "hidden"
            } duration-700 ease-in-out`}
          >
            <img
              src={banner}
              className="absolute block w-full h-full object-cover"
              alt={`Banner ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Contenedor de indicadores de navegación */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-10 left-1/2 space-x-3 rtl:space-x-reverse">
        {banners.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3.5 h-3.5 rounded-full ${
              currentIndex === index ? "bg-pink-500" : "bg-white"
            }`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Botón de navegación izquierda */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-8 h-16 rounded-lg bg-white group-focus:ring-white group-focus:outline-none shadow-lg">
          <svg
            className="w-4 h-4 text-purple-700 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>

      {/* Botón de navegación derecha */}
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-8 h-16 rounded-lg bg-white group-focus:ring-white group-focus:outline-none shadow-lg">
          <svg
            className="w-4 h-4 text-purple-700 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};
