import React from "react";
import { useState, useEffect, Activity } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Col, Nav, Row } from "react-bootstrap";
// import { HiOutlineMail } from "react-icons/hi";
// import { IoCallOutline } from "react-icons/io5";
import { style } from "motion/react-m";

const ContactItem = ({ icon, title, contactHerf, contactValue, extraClass }) => {
    return (
        <>
            <div className={`contact-ce d-flex align-items-center justify-content-start gap-3 ${extraClass}`}>
                <span className="icon">{icon}</span>
                <div className="contact-info d-flex flex-column align-items-start justify-content-start">
                    <p className="text-white mb-1">{title}</p>
                    <a href={contactHerf} className="text-white">{contactValue}</a>
                </div>
            </div>
        </>
    )
}

export const SideBar = () => {

    const [open, setOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const sections = ["home", "about", "features", "goals", "contact"];
    const scrollToId = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 90);

            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const top = element.offsetTop;
                    const bottom = top + element.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < bottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    // Lock body scroll when sidebar is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    const sidebarVariants = {
        hidden: { x: 500, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: 500, opacity: 0, transition: { duration: 0.4 } },
    };
    const iconTop = { open: { rotate: 45, y: 7, x: -1 }, closed: { rotate: 0, y: 0, x: 0 } };
    const iconMiddle = { open: { opacity: 0 }, closed: { opacity: 1 } };
    const iconBottom = { open: { rotate: -45, y: -8, x: 1 }, closed: { rotate: 0, y: 0, x: 0 } };


    return (
        <>
            <div
                type="button"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                className={open ? "toggel-bg d-lg-none align-item border-0 shadow-none" : "toggle-btn d-lg-none align-item border-0 shadow-none"}
            >
                <motion.div animate={open ? "open" : "closed"} variants={iconTop} transition={{ duration: 0.3 }}>
                    <div className="toggle-bar"></div>
                </motion.div>
                <motion.div animate={open ? "open" : "closed"} variants={iconMiddle} transition={{ duration: 0.3 }}>
                    <div className="toggle-bar"></div>
                </motion.div>
                <motion.div animate={open ? "open" : "closed"} variants={iconBottom} transition={{ duration: 0.3 }}>
                    <div className="toggle-bar"></div>
                </motion.div>
            </div>
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            className="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                        ></motion.div>

                        <motion.div
                            className="side-bar-menu d-flex d-lg-none "
                            variants={sidebarVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.45 }}
                        >
                            <div className="side-bar">
                                <Activity>
                                    <Nav className="side-link">
                                        <Nav.Link onClick={() => { scrollToId("home"), setOpen(false) }} className="">Home</Nav.Link>
                                        <Nav.Link onClick={() => { scrollToId("about"), setOpen(false) }} className="">About</Nav.Link>
                                        <Nav.Link onClick={() => { scrollToId("services"), setOpen(false) }} className="">Services</Nav.Link>
                                        <Nav.Link onClick={() => { scrollToId("testimonials"), setOpen(false) }} className="">Testimonials</Nav.Link>
                                        {/* <Nav.Link onClick={() => { scrollToId("testimoni"), setOpen(false) }} className="">Testimonial</Nav.Link> */}
                                        <Nav.Link onClick={() => { scrollToId("contact"), setOpen(false) }} className="">Contact</Nav.Link>
                                    </Nav>
                                </Activity>
                                <div className="side-bar-contact d-flex flex-column gap-3 mt-4">
                                    <ContactItem
                                        icon={(<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                        </svg>)}
                                        title={"Email"}
                                        contactHerf={"mailto:Spiplnsk@gmail.com"}
                                        contactValue={"Spiplnsk@gmail.com"}
                                        extraClass={"border-bottom pb-2"}
                                    />
                                    <ContactItem
                                        icon={(<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                        </svg>)}
                                        title={"Call"}
                                        contactHerf={"tel:9325561210"}
                                        contactValue={"9325561210"}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

