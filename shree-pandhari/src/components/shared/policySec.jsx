import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";

import policyMain from "../../assets/imgaes/policy_sec.png";
import backImgP from "../../assets/imgaes/policy_man.png";
import { AnimateScrollLeft } from "./animation";

const PolicyContainer = ({ open, setOpen }) => {
    return (
        <>
            {/* Backdrop */}
            {open && (
                <div
                    className="policy-backdrop"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Popup */}
            <div className={`policy-content ${open ? "d-block" : "d-none"}`}>
                <div className="policy-in">
                    <p>
                        <strong>IT ADYANTAGB:</strong><br />
                        Our state-of-the-art information technology platform supports all engineering and
                        construction projects nationwide. This includes a wide range of applications to collect,
                        process, and share information across all lines of business. This standardization of
                        business processes ensures a common information model supporting various functions
                        of the company. Business process automation enables timely decision-making,
                        compliance with quality, statutory, and regulatory commitments, and fosters teamwork
                        beyond individual functions. Our corporate sustainability is strengthened by
                        management-level views into the enterprise, driven by KPIs and monitored by
                        executive dashboards for timely alerts and proactive decision-making.
                        <br /><br />

                        <strong>ENVIRONMENT AND ENERGY MANAGEMENT:</strong><br />
                        Our entire computing capacity is deployed on virtualized servers for their tremendous
                        energy utilization benefits. By reducing the number of physical servers and maximizing
                        CPU usage, we have cut costs, reduced space requirements, and minimized our carbon
                        footprint through lower power utilization in both equipment and cooling.
                        <br /><br />

                        <strong>IN TUNE WITH INTERNATIONAL PRACTICES – VALUE ENGINEERING:</strong><br />
                        SHREE PANDHARI INFRASTRUCTURE PVT LTD is among the first infrastructure
                        companies to adopt the value engineering concept. We have organized 40-hour
                        workshops for our staff, resulting in several successful certifications. The
                        implementation of value engineering in ongoing and future projects is under serious
                        consideration, offering substantial benefits for both SHREE PANDHARI
                        INFRASTRUCTURE PVT LTD and our clients.<br /><br />
                        Value engineering, a key to “best-in-class” performance, is a powerful team-building and
                        creative tool. It ensures that the “right” job is done and aligns customer needs with
                        design teams. It also promotes and manages change within the organization,
                        encouraging “outside-the-box” thinking through a cross-functional team approach.
                        <br /><br />

                        <strong>VALUE ENGINEERING ENSURES THE FOLLOWING BENEFITS TO CLIENTS:</strong><br />
                        • Adds value to products and services.<br />
                        • Provides high returns on investment.<br />
                        • Reduces capital and life cycle costs.<br />
                        • Improves performance, productivity, and quality.<br />
                        • Reduces time to market and improves project schedules.<br />
                        • Provides a steep change rather than just incremental improvements.<br />
                        • Offers creative and cost-effective solutions to complex technical and organizational problems.<br />
                        • Enhances management's decision-making capabilities by presenting alternative solutions.<br /><br />

                        <strong>HUMAN RESOURCES – THE KEY TO SUCCESS:</strong><br />
                        At SHREE PANDHARI INFRASTRUCTURE PVT LTD, human resources are a strategic
                        business partner, adding value in talent acquisition, management, and culture building.
                        We strive to provide employees with the right environment and opportunities for
                        self-development. This begins with hiring the best, training them, and empowering them
                        to tackle challenges as part of highly motivated project teams. Our unique Employee
                        Value Proposition is based on four key pillars: Caring, Sharing, Learning, and Growing.
                        <br /><br />
                        Our highly qualified professionals combine creativity and initiative with accumulated
                        experience. Complementing the talents of our in-house team is a panel of eminent
                        consultants with specialized knowledge and experience, whose services are utilized for
                        specific projects. Our project managers from various engineering disciplines provide
                        leadership to ensure the successful completion of projects to the satisfaction of our
                        clients.<br /><br />

                        <strong>X QUALITY POLICY:</strong><br />
                        “To optimize processes through continuous improvement and to execute
                        projects on time and economically, thereby enhancing customer satisfaction.”
                        <br /><br />

                        <strong>OCCUPATIONAL HEALTH, SAFETY & ENVIRONMENT (OHS&E) POLICY:</strong><br />
                        We are committed to:<br />
                        • Complying with all applicable OHS&E legislation.<br />
                        • Improving OHS&E performance to control risks.<br />
                        • Promoting awareness among employees.<br />
                        • Providing a safe and healthy environment.<br />
                        • Sustaining environmental conditions at all sites.<br /><br />

                        <strong>HEALTH, SAFETY & ENVIRONMENT:</strong><br />
                        Employee safety is our top priority. SHREE PANDHARI INFRASTRUCTURE PVT LTD
                        emphasizes process safety and behavior-based safety. We provide PPE, training, and
                        strict practices to reduce hazards.<br /><br />

                        <strong>ENVIRONMENTAL PROTECTION:</strong><br />
                        We preserve open spaces and protect sensitive areas through proactive planning. We
                        adopt environmentally friendly execution methods and collaborate with clients for
                        sustainable sites.
                    </p>
                </div>
                <button className="close-btn" onClick={() => setOpen(false)}>
                    Close
                </button>
            </div>
        </>
    );
};

export const PolicySec = ({ spanT, mainT, para, extraclass }) => {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <div className="policy-sec">
                <Row className="gap-0">
                    <Col sm={12} lg={6}>
                        <AnimateScrollLeft x={-200} duration={1} extraClassLeft="d-flex flex-column gap-3 gap-md-4">
                            <div className="sectitle">
                                <h2 className="m-0">
                                    <span className={`title-yel ${extraclass}`}>{spanT}</span>{mainT}
                                </h2>
                            </div>

                            <p className="me-0 me-md-4 para">{para}</p>

                            <motion.button
                                type="button"
                                onClick={() => setOpen(true)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 250 }}
                                style={{ border: "none", background: "transparent", padding: 0 }}
                                className="primaryBtn"
                            >
                                <p className="m-0">Read Our Policy</p>
                                <motion.div className="pb-circle">
                                    <motion.div className="icon">
                                        <FaArrowUp />
                                    </motion.div>
                                </motion.div>
                            </motion.button>
                        </AnimateScrollLeft>
                    </Col>

                    <Col sm={12} lg={6}>
                        <AnimateScrollLeft x={-200} duration={1} extraClassLeft="d-none d-lg-flex justify-content-center">
                            <img src={policyMain} alt="Policy-camputer-img" className="policy-img" />
                            <img src={backImgP} alt="Contstruction-man" className="policy-man d-none d-lg-block" />
                        </AnimateScrollLeft>
                    </Col>
                </Row>

                <PolicyContainer open={open} setOpen={setOpen} />
            </div>
        </Container>
    );
};
