import React, { useState } from "react";
import InnerPageHeader from "../components/InnerPageHeader";
import aboutImg from "../assets/images/about-inner.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { HiMiniMagnifyingGlassPlus } from "react-icons/hi2";
import { GoArrowUpRight } from "react-icons/go";
import imgOne from '../assets/images/gp_infra.png';
import imgTwo from '../assets/images/tab2.jpg';
import imgThr from '../assets/images/gp_masale.png';
import imgFor from '../assets/images/gp_realtor.png';
import imgFiv from '../assets/images/tab5.jpg';
import imgSx from '../assets/images/tab3.jpg';
import { Container } from "react-bootstrap";

const Gallery = () => {
  const images = [
    { id: 1, src: imgOne, caption: "Shree Pandhari Infra", content:"Active since 2014 in Nashik, specialising in road and bridge construction." },
    { id: 2, src: imgTwo, caption: "Shree Pandhari Seva Bhavi Sanstha", content:"Active since 2014 in Nashik, specialising in road and bridge construction." },
    { id: 3, src: imgThr, caption: "Savita Masale", content:"Active since 2014 in Nashik, specialising in road and bridge construction." },
    { id: 4, src: imgFor, caption: "SB Reality", content:"Active since 2014 in Nashik, specialising in road and bridge construction." },
    { id: 5, src: imgFiv, caption: "Ideal Corporation", content:"Active since 2014 in Nashik, specialising in road and bridge construction." },
    { id: 6, src: imgThr, caption: "Savita Masale", content:"Active since 2014 in Nashik, specialising in road and bridge construction." },
  ];

  const headingText = "Gallery";
  const subtitleText = "We deliver excellence in every project.";

  const [current, setCurrent] = useState(null); // current index

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // Framer Motion Animation Variants
  const hoverParent = { rest: { scale: 1 }, hover: { scale: 1.03 } };
  const fadeIn = { rest: { opacity: 0, y: 15 }, hover: { opacity: 1, y: 0 } };
  const iconAnim = { rest: { opacity: 0, scale: 0.7 }, hover: { opacity: 1, scale: 1 } };

  return (
    <>
      <InnerPageHeader heading={headingText} subtitle={subtitleText} image={aboutImg} />

      <Container>
        <div className="masonry-gallery">
          {images.map((img, index) => (
            <motion.div
  key={img.id}
  className="masonry-item"
  variants={hoverParent}
  initial="rest"
  whileHover="hover"
>
              <img
                src={img.src}
                alt={img.caption}
                className="gallery-img"
                onClick={() => setCurrent(index)}
              />

              <motion.div className="caption" variants={fadeIn}>
                <div className="gal-txt">
                  <h4>{img.caption}</h4>
                  <p>{img.content}</p>
                </div>

                {/* MAGNIFIER CLICK OPENS LIGHTBOX */}
                <div className="magnifier" onClick={() => setCurrent(index)}>
                  <HiMiniMagnifyingGlassPlus />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* LIGHTBOX */}
        <AnimatePresence>
          {current !== null && (
            <motion.div
              className="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.img
                src={images[current].src}
                alt={images[current].caption}
                className="lightbox-img"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />

              <div className="lightbox-caption">{images[current].caption}</div>

              {/* NAVIGATION ARROWS */}
              <button className="nav-btn left" onClick={prevImage}>
                <FiArrowLeft size={38} />
              </button>

              <button className="nav-btn right" onClick={nextImage}>
                <FiArrowRight size={38} />
              </button>

              {/* CLOSE BUTTON */}
              <button className="close-btn" onClick={() => setCurrent(null)}>
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </>
  );
};

export default Gallery;
