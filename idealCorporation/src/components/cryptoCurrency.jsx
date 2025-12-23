import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TitleLeft } from "./shared/titleComp";
import { motion, LayoutGroup } from "framer-motion";

import cardNo1 from "../assets/images/crypto_no_1.png"
import cardNo2 from "../assets/images/crypto_no_2.png"
import cardNo3 from "../assets/images/crypto_no_3.png"
import cardNo4 from "../assets/images/crypto_no_4.png"

import smartIdeaImg from "../assets/images/smart_ideas.png"
import step from "../assets/images/steps.png"
import pointer from "../assets/images/pointer.png"
const cryptoData = {
    smartIdea: {
        leftImg: smartIdeaImg,
        card: [
            {
                noImg: cardNo1,
                title: "Goal-Based Investing",
                desc: "Build your portfolio around clear financial goals with strategies designed for long-term growth and stability."
            },
            {
                noImg: cardNo2,
                title: "Expert Market Insights",
                desc: "Make informed decisions using professional research, technical analysis, and real-time market intelligence."
            },
            {
                noImg: cardNo3,
                title: "Risk-Managed Strategies",
                desc: "Protect your capital with disciplined risk management and diversified investment approaches."
            },
            {
                noImg: cardNo4,
                title: "Consistent Wealth Creation",
                desc: "Achieve sustainable returns through proven trading systems and time-tested investment principles."
            },
        ],
    },
    simpleSteps: {
        leftImg: step,
        card: [
            {
                noImg: cardNo1,
                title: " Open Your Account",
                desc: "The first mandatory step to buy or sell shares in India."
            },
            {
                noImg: cardNo2,
                title: " Set Clear Goals",
                desc: "Decide if you're investing for growth, income, or long-term security."
            },
            {
                noImg: cardNo3,
                title: "Research First",
                desc: "Study the company, financials, and future potential before placing orders."
            },
            {
                noImg: cardNo4,
                title: "Start Small",
                desc: "Begin with small amounts and build your portfolio gradually with discipline."
            },
        ],
    },
    pointers: {
        leftImg: pointer,
        card: [
            {
                noImg: cardNo1,
                title: "Stay Emotion-Free",
                desc: "Stay calm during market ups and downs—avoid panic buying or selling."
            },
            {
                noImg: cardNo2,
                title: "Know the Risk",
                desc: "Always consider risk tolerance before investing in volatile stocks."
            },
            {
                noImg: cardNo3,
                title: "Review Often",
                desc: "Rebalance based on market changes and personal goals."
            },
            {
                noImg: cardNo4,
                title: "Ignore the Noise",
                desc: "Trust data, not rumors—always invest based on solid analysis"
            },
        ],
    },
};

const CryptoCurrencie = () => {
    const [activeCategory, setActiveCategory] = useState("smartIdea");
    const selectedData = cryptoData[activeCategory];

    return (
        <>
            <Container>
                <TitleLeft
                    heading={"Make Your Goals a Reality"}
                    para={"Trusted Market Advisors for Over a Decade"}
                    extraClass={"text-center"}
                />

                <div className="crypto-count d-flex gap-5 flex-column align-items-center justify-content-center">

                    {/* Category buttons */}
<Row className="crypto-tab row-gap-4">
  <LayoutGroup>
    <Col xs={6} sm={4} lg={4}>
      <motion.button
        layout
        className={`crypto-btn ${activeCategory === "smartIdea" ? "active" : ""}`}
        onClick={() => setActiveCategory("smartIdea")}
      >
        {activeCategory === "smartIdea" && (
          <motion.span
            className="active-pill"
            layoutId="activeTab"
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          />
        )}
        <p>Smart Idea</p>
      </motion.button>
    </Col>

    <Col xs={6} sm={4} lg={4}>
      <motion.button
        layout
        className={`crypto-btn ${activeCategory === "simpleSteps" ? "active" : ""}`}
        onClick={() => setActiveCategory("simpleSteps")}
      >
        {activeCategory === "simpleSteps" && (
          <motion.span
            className="active-pill"
            layoutId="activeTab"
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          />
        )}
        <p>Simple Steps</p>
      </motion.button>
    </Col>

    <Col xs={12} sm={4} lg={4}>
      <motion.button
        layout
        className={`crypto-btn ${activeCategory === "pointers" ? "active" : ""}`}
        onClick={() => setActiveCategory("pointers")}
      >
        {activeCategory === "pointers" && (
          <motion.span
            className="active-pill"
            layoutId="activeTab"
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          />
        )}
        <p>Pointers</p>
      </motion.button>
    </Col>
  </LayoutGroup>
</Row>


                    {/* Product Display */}
                    <Row className="product-display-container row-gap-4">
                        <Col sm={12} lg={6} className="d-flex align-items-center justify-content-center">
                            {/* left image */}
                            {selectedData?.leftImg && (
                                <img src={selectedData.leftImg} alt="" className="img-fluid" />
                            )}
                        </Col>

                        <Col sm={12} lg={6}>
                            <Row className="row-gap-3">
                                {selectedData.card.map((item, i) => (
                                    <Col xs={12} sm={6} md={6} key={i}>
                                        <div className="crypto-card card">
                                            <div className="card-top">
                                                <span>{i + 1}</span>
                                            </div>
                                            <h4 className="card-title">{item.title}</h4>
                                            <div className="card-text">{item.desc}</div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default CryptoCurrencie;
