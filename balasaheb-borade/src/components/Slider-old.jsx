import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiChevronDown } from "react-icons/fi";


import image1 from "../assets/images/img1.png";
import image2 from "../assets/images/img2.png";
import image3 from "../assets/images/img3.png";

const images = [
  {
    id: 1,
    url: image1,
    title: "Discover Beautiful Places",
    subtitle: "Explore the world with us",
    button: "Get Started",
  },
  {
    id: 2,
    url: image2,
    title: "Adventure Awaits",
    subtitle: "Find your next journey",
    button: "Explore Now",
  },
  {
    id: 3,
    url: image3,
    title: "Experience Nature",
    subtitle: "Feel the beauty around you",
    button: "View Destinations",
  },
];

export default function HeaderComponent() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="header-container">
      {images.map((slide, index) => (
        <div key={slide.id} className={`slide ${index === current ? "active" : ""}`}>
          <img src={slide.url} alt="Slide" />
          <div className="overlay" />

          <motion.div
            className="slide-content"
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {slide.button}
            </motion.button>
          </motion.div>
        </div>
      ))}

      {/* Down Arrow */}
      <motion.div
        className="down-arrow"
        initial={{ y: 0 }}
        animate={{ y: 15 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.2 }}
      >
        <FiChevronDown size={48} />
      </motion.div>

      {/* Navigation Arrows */}
      <div className="arrow left" onClick={prevSlide}>
        <FiChevronLeft size={50} />
      </div>
      <div className="arrow right" onClick={nextSlide}>
        <FiChevronRight size={50} />
      </div>

      {/* Dots */}
      <div className="dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={current === index ? "active" : ""}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
