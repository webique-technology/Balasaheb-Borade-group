import React from "react";
import flower from '../assets/images/flower.svg'
export const marqueeData = {
  top: [
    { id: 1, image:flower, text: "Shree Pandhari Infra" },
    { id: 2, image:flower, text: "Shree Pandhari Seva Bhavi Sanstha",className: "text-style" },
    { id: 3, image:flower, text: "Savita Masale" },
    { id: 4, image:flower, text: "SB Reality",className: "text-style" },
    { id: 5, image:flower, text: "Ideal Corporation" }
  ],

};
const MarqueeMoving = () => {
  return (
    <div className="marquee-wrapper">

      {/* FIRST MARQUEE - LEFT → RIGHT */}
      <div className="marquee-container">
  <div className="marquee-track left">
    {[...marqueeData.top, ...marqueeData.top].map((item, i) => (
      
      <div key={i} className={`marquee-item ${item.className || ""}`}> 
      <img src={item.image}/>
      {item.text}
      </div>
    ))}
  </div>
</div>




      {/* SECOND MARQUEE - RIGHT → LEFT */}


    </div>
  );
};

export default MarqueeMoving;
