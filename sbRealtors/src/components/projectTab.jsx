import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Tab, Tabs } from "react-bootstrap";
import { AnimateResponsive } from "./shared/animation";

import wpIMG1 from "../assets/images/wip/work-in-hand-1.jpg"
import wpIMG2 from "../assets/images/wip/work-in-hand-2.jpg"
import wpIMG3 from "../assets/images/wip/work-in-hand-4.jpg"
import wpIMG4 from "../assets/images/wip/work-in-hand-3.jpg"
import wpIMG5 from "../assets/images/wip/work-in-hand-5.jpg"
import wpIMG6 from "../assets/images/wip/work-in-hand-6.jpg"

// project completed

import pcVer1 from "../assets/images/wip/done-11.jpg"
import pcVer2 from "../assets/images/wip/done-12.jpg"
import pcVer3 from "../assets/images/wip/done-13.jpg"
import pcVer4 from "../assets/images/wip/done-14.jpg"
import pcVer5 from "../assets/images/wip/done-15.jpg"
import pcVer6 from "../assets/images/wip/done-16.jpg"

const pageVariants = {
  enterLeft: { opacity: 0, x: -60 },
  enterRight: { opacity: 0, x: 60 },
  center: { opacity: 1, x: 0, transition: { duration: 0.35 } },
  exitLeft: { opacity: 0, x: -60, transition: { duration: 0.25 } },
  exitRight: { opacity: 0, x: 60, transition: { duration: 0.25 } }
};

const workInHandCards = [
  {
    img: wpIMG1,
    title: "Construction of Building Work Swami Pride Apartment Pathardi Phata, Nashik",
    extraClass: ""
    /*cost: "Rs.3.5 Crores"*/
  },
  {
    img: wpIMG2,
    title: "Construction of Building Work Swami Pride Apartment Pathardi Phata, Nashik",
    extraClass: ""
    /*cost: "Rs.3.5 Crores"*/
  },
  {
    img: wpIMG3,
    title: "Construction of Building Work Swami Pride Apartment Pathardi Phata, Nashik",
    extraClass: ""
    /*cost: "Rs.3.5 Crores"*/
  },
  {
    img: wpIMG4,
    title: "Construction of Building Work Swami Pride Apartment Pathardi Phata, Nashik",
    extraClass: ""
    /*cost: "Rs.3.5 Crores"*/
  },
  {
    img: wpIMG5,
    title: "Construction of Building Work Swami Pride Apartment Pathardi Phata, Nashik",
    extraClass: "d-none d-sm-block"
    /*cost: "Rs.3.5 Crores"*/
  },
  {
    img: wpIMG6,
    title: "Construction of Building Work Swami Pride Apartment Pathardi Phata, Nashik",
    extraClass: "d-none d-sm-block"
    /*cost: "Rs.3.5 Crores"*/
  },
];

const completedCards = [
  {
    img: pcVer1,
    title: "Completed Work - Swami Pride Apartment Pathardi Phata, Nashik",
    extraClass: ""
    /*cost: "Rs.3.5 Crores"*/
  },
  {
    img: pcVer2,
    title: "Completed Work - Swami Pride Apartment Pathardi Phata, Nashik",
    extraClass: ""
    /*cost: "Rs.3.5 Crores"*/
  },
  {
    img: pcVer4,
    title: "Completed Work - Swami Pride Apartment Pathardi Phata, Nashik",
    extraClass: ""
    /*cost: "Rs.3.5 Crores"*/
  },
  {
    img: pcVer3,
    title: "Completed Work - Swami Pride Apartment Pathardi Phata, Nashik",
    extraClass: ""
    /*cost: "Rs.3.5 Crores"*/
  },
  {
    img: pcVer5,
    title: "Completed Work - Swami Pride Apartment Pathardi Phata, Nashik",
    extraClass: "d-none d-sm-block"
    /*cost: "Rs.3.5 Crores"*/
  },
  {
    img: pcVer6,
    title: "Completed Work - Swami Pride Apartment Pathardi Phata, Nashik",
    extraClass: "d-none d-sm-block"
    /*cost: "Rs.3.5 Crores"*/
  },
];

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const EPCardsGrid = ({ cards }) => {
  const columns = chunkArray(cards, 2);

  let globalIndex = 0;

  return (
    <div className="wp-cards-grid">
      {columns.map((colCards, colIndex) => (
        <div className="wp-card" key={colIndex}>
          {colCards.map((card, index) => {
            const isEven = globalIndex % 2 === 0;
            globalIndex++;

            return (
              <div
                className={`wp-cardb ${index === 0 ? "order-2 order-lg-1" : "order-1 order-lg-2"
                  } ${card.extraClass}`}
                key={index}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className={"img-4-3"}
                />

                {/* <div className="wpc-info">
                  <p>{card.title}</p>
                  {card.cost && <span className="rs-badge">{card.cost}</span>}
                </div> */}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

const WorkProjects = () => {
  const [active, setActive] = useState("first");
  const [direction, setDirection] = useState("right");

  const handleTabClick = (key) => {
    setDirection(key === "second" ? "right" : "left");
    setActive(key);
  };

  return (
    <Container>
      <div className="work-projects-section gap-5 d-flex flex-column align-items-center justify-content-center">

        <div className="wp-slide-count">
          <Tabs activeKey={active} onSelect={handleTabClick} justify id="motion-tabs">
            <Tab eventKey="first" title="Work In Hand" />
            <Tab eventKey="second" title="Project Completed" />
          </Tabs>

          <motion.div
            className="wp-active-slide"
            layout
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            animate={{ x: active === "first" ? "0%" : "100%" }}
          />
        </div>

        {/* motion content */}
        <div className="wp-tabs-content">

          <AnimatePresence mode="wait">
            {active === "first" && (
              <motion.div
                key="tab1"
                variants={pageVariants}
                initial={direction === "right" ? "enterRight" : "enterLeft"}
                animate="center"
                exit={direction === "right" ? "exitLeft" : "exitRight"}
                className="w-100"
              >
                <AnimateResponsive x={-200} y={0} duration={1}>
                  <EPCardsGrid cards={workInHandCards} />
                </AnimateResponsive>
              </motion.div>
            )}
            {active === "second" && (
              <motion.div
                key="tab2"
                variants={pageVariants}
                initial={direction === "right" ? "enterRight" : "enterLeft"}
                animate="center"
                exit={direction === "right" ? "exitLeft" : "exitRight"}
                className="w-100"
              >
                <EPCardsGrid cards={completedCards} />
              </motion.div>
            )}

          </AnimatePresence>

        </div>
      </div>
    </Container>
  );
};

export default WorkProjects;
