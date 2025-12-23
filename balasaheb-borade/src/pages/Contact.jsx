import React, { useState } from "react";
import InnerPageHeader from "../components/InnerPageHeader";
import aboutImg from "../assets/images/about-inner.jpg";
import buttoArr from '../assets/images/button-circle.svg';
import fUnderline from '../assets/images/footer-underline.svg';
import contactH from '../assets/images/footer-home.svg';
import contactP from '../assets/images/footer-phone.svg';
import contactE from '../assets/images/footer-email.svg';
import contImg from "../assets/images/contact-img.png";
import { Col, Container, Row } from "react-bootstrap";
import NumbersSec from "../components/NumbersSec";
import waves from "../assets/images/chairman-bottom.svg";
import { motion } from "framer-motion";
const isMobile = window.innerWidth <= 768;
// ---- JSON DATA ----
const contactData = {
  introText:
    "We’ve grown up with the internet revolution, and we know how to deliver on its",
  items: [
    {
      contactHead: "Location",
      contactText:
        "Office No-314/315, Atlanta Shoppers\nServ. No 323/1/1/A/5, Plot No-4/5, Pathardi Road, Nashik",
      icon: contactH,
    },
    {
      contactHead: "Phone",
      phoneOne: "9822761210",
      phoneTwo: "02532951210",
      icon: contactP,
    },
    {
      contactHead: "Email",
      contactText: "Spiplnsk@gmail.com",
      icon: contactE,
    },
  ],
};

const Contact = () => {
  const headingText = "Contact Us";
  const subtitleText = "We deliver excellence in every project.";

  // const [formData, setFormData] = useState({
  //   name: "",
  //   company: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "f592634e-4e2e-4878-b120-b72d7370865c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your message has been sent!");
      e.target.reset();
    } else {
      setResult("Failed to send message. Try again.");
    }
  };




  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  //   setFormData({ name: "", company: "", email: "", phone: "", message: "" });
  // };

  // Framer Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      <InnerPageHeader heading={headingText} subtitle={subtitleText} image={aboutImg} />

      <motion.div
        className="contact-form-wrap"

        variants={isMobile ? {} : fadeUp}
        initial={isMobile ? "visible" : "hidden"}
        whileInView={isMobile ? "visible" : "visible"}



        viewport={{ once: false, amount: 0.2 }}
      >
        <Container>
          <Row className="justify-content-between gy-5">

            <Col md={6} lg={6}>
              <motion.h2
                className="company-title"
                variants={isMobile ? {} : fadeUp}
                initial={isMobile ? "visible" : "hidden"}
                whileInView={isMobile ? "visible" : "visible"}

                viewport={{ once: false }}
              >
                We would love to <br />hear from you
              </motion.h2>

              <motion.p
                className="mb-2 mb-md-4 mt-0 intro"
                variants={isMobile ? {} : fadeUp}
                initial={isMobile ? "visible" : "hidden"}
                whileInView={isMobile ? "visible" : "visible"}
                viewport={{ once: false }}
              >
                {contactData.introText}
              </motion.p>

              <motion.div
                className="contact-form-container"
                variants={isMobile ? {} : fadeUp}
                initial={isMobile ? "visible" : "hidden"}
                whileInView={isMobile ? "visible" : "visible"}

                viewport={{ once: false }}
              >
                <form onSubmit={onSubmit}>
                  <input type="text" name="name" placeholder="Name" required />

                  <input type="text" name="company" placeholder="Company" />

                  <input type="email" name="email" placeholder="Email Address" required />

                  <input type="tel" name="phone" placeholder="Phone" />

                  <textarea name="message" placeholder="How can we help?" required></textarea>

                  <button type="submit" className="common-button">
                    Submit <img src={buttoArr} />
                  </button>

                  {result && <p className="form-status">{result}</p>}
                </form>
              </motion.div>
            </Col>

            <Col md={5} lg={5}>
              <motion.div
                className="contact-grid d-flex flex-column h-100 gap-4 gap-md-5 "

                variants={isMobile ? {} : fadeRight}
                initial={isMobile ? "visible" : "hidden"}
                whileInView={isMobile ? "visible" : "visible"}

                viewport={{ once: false }}
              >
                <h2 style={{ marginBottom: "30px" }} className="company-title">
                  Contact Information
                </h2>

                {contactData.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="contact-card"

                    variants={isMobile ? {} : (index % 2 === 0 ? fadeLeft : fadeRight)}
                    initial={isMobile ? "visible" : "hidden"}
                    whileInView={isMobile ? "visible" : "visible"}



                    viewport={{ once: false }}
                  >
                    <img src={item.icon} alt={item.contactHead} className="icon" />
                    <div className="contp-text">
                      <h4>{item.contactHead}</h4>

                      {item.phoneOne && item.phoneTwo ? (
                        <>
                          <p style={{ marginBottom: "0px" }}>
                            <strong style={{ marginRight: "14px" }}>Mobile:</strong>
                            <a href={`tel:91${item.phoneOne}`}> {item.phoneOne}</a>
                          </p>
                          <p>
                            <strong style={{ marginRight: "14px" }}>Telephone:</strong>
                            <a href={`tel:${item.phoneTwo}`}> {item.phoneTwo}</a>
                          </p>
                        </>
                      ) : item.contactHead === "Email" ? (
                        <p>
                          <a href={`mailto:${item.contactText}`}>{item.contactText}</a>
                        </p>
                      ) : (
                        <p>
                          {item.contactText?.split("\n").map((line, i) => (
                            <span key={i}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}

              </motion.div>
            </Col>

          </Row>
        </Container>
      </motion.div>

      <motion.iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31304.111162182417!2d73.7429474471137!3d19.964344880565005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb4b46622245%3A0xaeabdc23f8dd9daa!2sAtlanta%20Shoppers%20Mall!5e1!3m2!1sen!2sin!4v1765195683637!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: 0, display: "block" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        variants={isMobile ? {} : fadeUp}
        initial={isMobile ? "visible" : "hidden"}
        whileInView={isMobile ? "visible" : "visible"}
        viewport={{ once: false }}
      ></motion.iframe>
    </div>
  );
};

export default Contact;
