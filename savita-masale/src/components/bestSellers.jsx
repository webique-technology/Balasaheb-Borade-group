import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { SecTitle } from "./shared/titleComp";
import { motion } from "framer-motion";

import haldiMasala from "../assets/images/chicken-masala.png"
import pulavMasals from "../assets/images/shev-bhaji-masala.png"
import masalaKonw from "../assets/images/red-chili.png"
import onionGarlic from "../assets/images/onion-garlic.png"
import matanMasala from "../assets/images/malavani-masala.png"
import { SecondaryBtn } from "./shared/button";

const bestMasala = [
    {
        src: pulavMasals,
        classfor: "",
        title: "Shev Bhaji Masala",
    },
    {
        src: masalaKonw,
        classfor: "",
        title: "Red Chili Powder",
    },
    {
        src: onionGarlic,
        classfor: "",
        title: "Malvani Masala",
    },
    {
        src: matanMasala,
        classfor: "",
        title: "Onion Garlic Masala",
    },
    {
        src: haldiMasala,
        title: "Chicken Masala",
        classfor: "d-block d-lg-none"
    },
    {
        src: pulavMasals,
        title: "Shev Bhaji Masala",
        classfor: "d-block d-lg-none"
    },
]

const BestSellrs = () => {
    return (
        <>
            <Container>
                <SecTitle
                    heading={"Our Best-Sellers"}
                    extraClass="maroon"
                />
                <Row className="mt-3 mt-md-5">
                    <Col sm={12} md={12} lg={6} className="d-none d-lg-block sell-big-card">
                        <Card className={`seller-card sl-card-1`}>
                            <Card.Img variant="top" src={haldiMasala} />
                            <Card.Body>
                                <SecondaryBtn
                                    href={`https://wa.me/917745061210?text=I want to order the Chicken Masala`}
                                    btnTitle={"Order Now"}
                                    btnClass={"secondryBtn"}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={12} lg={6} className="best-masala-grid">
                        {bestMasala.map((value, i) => {
                            return (
                                <>
                                    <Card className={`seller-card ${value.classfor}`}>
                                        <img src={value.src} alt="" className="card-img-top" />
                                        <Card.Body>
                                            <motion.a
                                                href={`https://wa.me/917745061210?text=I want to order the ${value.title}`}
                                                className="secondryBtn"
                                                target="_blank"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <p className="m-0">Order Now</p>
                                                {/* {src && (
                                                    <img src={src} alt={alt} className="d-block d-md-none" />
                                                )} */}
                                            </motion.a>

                                        </Card.Body>
                                    </Card>
                                </>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BestSellrs;