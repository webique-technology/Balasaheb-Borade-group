import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import { AnimateScrollLeft } from "./shared/animation";
import insta from "../assets/imgaes/insta.png"
import facebook from "../assets/imgaes/facebook.png"
import linkedin from "../assets/imgaes/linkedin.png"
import twitter from "../assets/imgaes/twitter.png"

const footIcon = [
    { icon: insta, link: "https://www.instagram.com/" },
    { icon: facebook, link: "https://www.facebook.com/" },
    { icon: linkedin, link: "https://www.linkedin.com/" },
    { icon: twitter, link: "https://x.com/" },
];
const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        formData.append("access_key", "a052bd3c-6907-4ba5-b0ab-6ffe071aa5af");

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
        <Container>
            <Row className="row-gap-3">
                {/* Left Section */}
                <Col sm={12} lg={6}>
                    <AnimateScrollLeft x={-100} duration={1}>
                        <div className="contact-info">
                            <h2 className="roboto">Call Us Now!</h2>

                            <div className="contact-no">
                                <a href="tel:9325561210" className="title-yel">9325561210 , </a>
                                <a href="tel:0253-2352210" className="title-yel">0253-2352210</a>
                            </div>

                            <p>
                                <span className="title-yel">Email</span>&nbsp;
                                <a href="mailto:Spiplnsk@gmail.com" className="text-light text-decoration-none">Spiplnsk@gmail.com</a>
                            </p>

                            <address>
                                <span className="title-yel">Office Address</span><br />
                                Office No-314/315, Atlanta Shoppers Serv. No 323/1/1/A/5, <br /> Plot No- 4/5,Pathardi Road, Nashik.
                            </address>

                            {/* Right Side - Social Icons */}
                            <Col
                                xs={{ order: 0 }}
                                md={{ order: 0, span: 4 }}
                                className="d-flex align-items-center  gap-3"
                            >
                                <div className="me-0 me-md-5 d-flex align-items-center gap-3">
                                    {footIcon.map(({ icon, link, alt }, index) => (
                                        <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                                            <img src={icon} alt={alt} />
                                        </a>
                                    ))}
                                </div>
                            </Col>
                        </div>
                    </AnimateScrollLeft>
                </Col>

                {/* Right Section */}
                <Col sm={12} lg={6}>
                    <AnimateScrollLeft x={-200} duration={1}>
                        <Form className="d-flex flex-column gap-3 gap-md-4" onSubmit={onSubmit}>
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

                            {/* Result message */}
                            {result && <p>{result}</p>}
                        </Form>
                    </AnimateScrollLeft>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
