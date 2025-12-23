import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";

import wpImgb1 from "../assets/imgaes/wp_img_b1.png";
import wpImgs1 from "../assets/imgaes/wp_img_s1.png";
import { AnimateScrollLeft, AnimateResponsive } from "./shared/animation";



const pageVariants = {
    enterLeft: {
        opacity: 0,
        x: -60
    },
    enterRight: {
        opacity: 0,
        x: 60
    },
    center: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.35 }
    },
    exitLeft: {
        opacity: 0,
        x: -60,
        transition: { duration: 0.25 }
    },
    exitRight: {
        opacity: 0,
        x: 60,
        transition: { duration: 0.25 }
    }
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

                {/* Tabs Header */}
                <div className="wp-slide-count">
                    <Tabs
                        activeKey={active}
                        onSelect={handleTabClick}
                        justify
                        id="motion-tabs"
                    >
                        <Tab eventKey="first" title={<>Work In <br className="d-none d-sm-none"/> Hand</>} />
                        <Tab eventKey="second" title="Project Completed" />
                    </Tabs>

                    <motion.div
                        className="wp-active-slide"
                        layout
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        animate={{ x: active === "first" ? "0%" : "100%" }}
                    />
                </div>

                {/* Motion Content */}
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
                                    {/* column 1 */}
                                    <div className="wp-cards-grid">
                                        <div className="wp-card">
                                            {/* card 1 */}
                                            <div className="wp-cardb">
                                                <img src={wpImgb1} alt="Swami Pride Apartment Pathardi Phata - Image 1" />
                                                {/* <div class="wpc-info">
                                                    <p>10. Construction of Building Work Swami Pride Appartment Pathardi Phata, Nashik</p>
                                                    <span class="rs-badge">Rs.3.5 Crores</span>
                                                </div> */}
                                            </div>
                                            {/* card 2 */}
                                            <div className="wp-cardb">
                                                <img src={wpImgs1} alt="Swami Pride Apartment Pathardi Phata - Image 2" />
                                                {/* <div className="wpc-info">
                                                    <p>10. Construction of Building Work Swami Pride Appartment Pathardi Phata, Nashik</p>
                                                </div> */}
                                            </div>
                                        </div>
                                        {/* column 2 */}
                                        <div className="d-none d-lg-block">
                                            <div className="wp-card">
                                                <div className="wp-cardb">
                                                    <img src={wpImgs1} alt="Swami Pride Apartment Pathardi Phata - Image 1" />
                                                    {/* <div class="wpc-info">
                                                        <p>10. Construction of Building Work Swami Pride Appartment Pathardi Phata, Nashik</p>
                                          
                                                    </div> */}
                                                </div>
                                                <div className="wp-cardb">
                                                    <img src={wpImgb1} alt="Swami Pride Apartment Pathardi Phata - Image 2" />
                                                    {/* <div className="wpc-info">
                                                        <p>10. Construction of Building Work Swami Pride Appartment Pathardi Phata, Nashik</p>
                                         
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* column 3 */}
                                        <div className="wp-card">
                                            <div className="wp-cardb order-2 order-lg-1">
                                                <img src={wpImgb1} alt="Swami Pride Apartment Pathardi Phata - Image 1" />
                                                {/* <div className="wpc-info">
                                                    <p>10. Construction of Building Work Swami Pride Apartment Pathardi Phata, Nashik</p>
                               
                                                </div> */}
                                            </div>
                                            <div className="wp-cardb order-1 order-lg-2">
                                                <img src={wpImgs1} alt="Swami Pride Apartment Pathardi Phata - Image 2" />
                                                {/* <div className="wpc-info">
                                                    <p>10. Construction of Building Work Swami Pride Apartment Pathardi Phata, Nashik</p>
                                  
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
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
                                className="tab-motion-content"
                            >
                                <div className="wp-cards-grid">
                                    {/* column 1 */}
                                    <div className="wp-card">
                                        {/* card 1 */}
                                        <div className="wp-cardb">
                                            <img src={wpImgb1} alt="Swami Pride Apartment Pathardi Phata - Image 1" />
                                            <div className="wpc-info">
                                                <p>10. Construction of Building Work Swami Pride Appartment Pathardi Phata, Nashik</p>
                                                <span className="rs-badge">Rs.3.5 Crores</span>
                                            </div>
                                        </div>
                                        {/* card 2 */}
                                        <div className="wp-cardb">
                                            <img src={wpImgs1} alt="Swami Pride Apartment Pathardi Phata - Image 2" />
                                            <div className="wpc-info">
                                                <p>10. Construction of Building Work Swami Pride Appartment Pathardi Phata, Nashik</p>
                                                <span className="rs-badge">Rs.3.5 Crores</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* column 2 */}
                                    <div className="d-none d-lg-block">
                                        <div className="wp-card">
                                            <div className="wp-cardb">
                                                <img src={wpImgs1} alt="Swami Pride Apartment Pathardi Phata - Image 1" />
                                                <div className="wpc-info">
                                                    <p>10. Construction of Building Work Swami Pride Appartment Pathardi Phata, Nashik</p>
                                                    <span className="rs-badge">Rs.3.5 Crores</span>
                                                </div>
                                            </div>
                                            <div className="wp-cardb">
                                                <img src={wpImgb1} alt="Swami Pride Apartment Pathardi Phata - Image 2" />
                                                <div className="wpc-info">
                                                    <p>10. Construction of Building Work Swami Pride Appartment Pathardi Phata, Nashik</p>
                                                    <span className="rs-badge">Rs.3.5 Crores</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* column 3 */}
                                    <div className="wp-card">
                                        <div className="wp-cardb order-2 order-lg-1">
                                            <img src={wpImgb1} alt="Swami Pride Apartment Pathardi Phata - Image 1" />
                                            <div className="wpc-info">
                                                <p>10. Construction of Building Work Swami Pride Apartment Pathardi Phata, Nashik</p>
                                                <span className="rs-badge">Rs.3.5 Crores</span>
                                            </div>
                                        </div>
                                        <div className="wp-cardb order-1 order-lg-2">
                                            <img src={wpImgs1} alt="Swami Pride Apartment Pathardi Phata - Image 2" />
                                            <div className="wpc-info">
                                                <p>10. Construction of Building Work Swami Pride Apartment Pathardi Phata, Nashik</p>
                                                <span className="rs-badge">Rs.3.5 Crores</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </Container>
    );
};

export default WorkProjects;