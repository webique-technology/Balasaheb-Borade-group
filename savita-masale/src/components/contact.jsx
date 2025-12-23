import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";

import "../style/contact.scss";


import insta from "../assets/images/insta.png"
import facebook from "../assets/images/facebook.png"
import linkedin from "../assets/images/linkedin.png"
import twitter from "../assets/images/twitter.png"
import { Link } from "react-router";

const footIcon = [
    { icon: insta, link: "https://www.instagram.com/savitamasaleudyog?igsh=MW90ODFhaGdzMHc5bg==", alt: "Instagram" }, ,
    { icon: facebook, link: "https://www.facebook.com/SavitaMasaleOfficial/" },
    { icon: linkedin, link: "https://in.linkedin.com/in/mr-balasaheb-borade-mrs-savita-b-borade-58230632" },
    { icon: twitter, link: "https://x.com/" },
];


const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        formData.append("access_key", "f592634e-4e2e-4878-b120-b72d7370865c");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                e.target.reset();
                setResult("Success!");
            } else {
                setResult("Error! Please try again.");
            }
        } catch (err) {
            console.error("Error submitting form:", err);
            setResult("Error! Something went wrong.");
        }
    };

    return (
        <section className="">
            <Container>
                <Row className="row-gap-4">

                    {/* Left Section */}
                    <Col sm={12} lg={6}>
                        <div className="contact-info">
                            <h2 className="roboto">Call Us Now!</h2>

                            <div className="contact-no">
                                <a href="tel:+917745061210" className="title-yel">7745061210, </a>
                                <a href="tel:02532951210 " className="title-yel">02532951210</a>
                            </div>

                            <p>
                                <span className="title-yel">Email</span>&nbsp;
                                <a href="mailto:Spiplnsk@gmail.com" className="text-light text-decoration-none">Spiplnsk@gmail.com</a>
                            </p>

                            <address>
                                <span className="title-yel">Office Address</span><br />
                                Office No-314/315, Atlanta Shoppers Serv. No 323/1/1/A/5, <br /> Plot No- 4/5,Pathardi Road, Nashik.
                            </address>
                        </div>

                        {/* Right Side - Social Icons */}
                        <div className="social-icon d-flex align-items-center justify-content-start gap-3">
                            <div className="me-0 me-md-5 d-flex align-items-center gap-3">
                                {footIcon.map(({ icon, link, alt }, index) => (
                                    <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                                        <img src={icon} alt={alt} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </Col>

                    {/* Right Section */}
                    <Col sm={12} lg={6}>
                        <Form className="d-flex flex-column gap-3" onSubmit={onSubmit}>
                            <Row>
                                <Col sm={12} md={6}>
                                    <Form.Group>
                                        <Form.Control required name="first_name" placeholder="First name" />
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={6}>
                                    <Form.Group>
                                        <Form.Control required name="last_name" placeholder="Last name" />
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={6}>
                                    <Form.Group>
                                        <Form.Control required type="tel" name="phone" placeholder="Mobile No." />
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={6}>
                                    <Form.Group>
                                        <Form.Control required type="email" name="email" placeholder="Email Add." />
                                    </Form.Group>
                                </Col>
                                <Col sm={12}>
                                    <Form.Group>
                                        <textarea
                                            name="message"
                                            placeholder="Message"
                                            className="form-control"
                                            rows="4"
                                            required
                                        ></textarea>
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Button */}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 250 }}
                                className="primaryBtn"
                            >
                                <p className="m-0">Submit</p>

                                <motion.div className="pb-circle">
                                    <motion.div className="icon"><FaArrowUp /></motion.div>
                                </motion.div>
                            </motion.button>

                            {result && <p className="result-msg">{result}</p>}
                        </Form>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default Contact;
