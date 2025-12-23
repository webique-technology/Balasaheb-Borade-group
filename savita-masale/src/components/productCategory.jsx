import React, { useState, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdOutlineCurrencyRupee } from "react-icons/md";


import { SecTitle } from "./shared/titleComp";
// import { ProductCard } from "./shared/cardComp";
import { SecondaryBtn } from "./shared/button";

// product imgaes

import cart from "../assets/images/shopping-cart.png"

// import garamMasala from "../assets/images/garam_masala.png"
// import haldi from "../assets/images/haldi_product.png"
// import corianderPowder from "../assets/images/coriander_powder.png"

// import malvaniMasala from "../assets/images/products/malvani-masala.png"
import redChili from "../assets/images/products/red-chili-powder-wp.png"
import chicken from "../assets/images/products/chicken-masala-wp.png"
import shevBhaji from "../assets/images/products/shev-bhaji-masala.png"
import blackPepper from "../assets/images/products/black-pepper.png"
import biryaniMasala from "../assets/images/products/biryani-masala.png"
import DhanaMasala from "../assets/images/products/dhana-powder.png"
import sambarMasala from "../assets/images/products/sambar-masala.png"
import garamMasala from "../assets/images/products/garam-masala-mix.png"
import godaMasala from "../assets/images/products/goda-masala.png"
import haldiSelam from "../assets/images/products/haladi-selam.png"
import kitchenKingMasala from "../assets/images/products/kitchen-king-masala.png"
import malvaniMasala from "../assets/images/products/malvani-masala-wp.png"
import muttonMasala from "../assets/images/products/mutton-masala.png"
import OnionGarlic from "../assets/images/products/kanda-lasun-masala-wp.png" /* need to update */
import vegPulavMasala from "../assets/images/products/veg-pulav-masala.png"


const masalaProduct = [
    {
        id: 1,
        src: redChili,
        title: "Red Chilli Powder",
        decs: "Bold and spicy red chilli powder",
        price: 35,
        category: {
            powdered: true,
            special: false,
        },
    },
    {
        id: 2,
        src: blackPepper,
        title: "Black Pepper",
        decs: "Strong and aromatic black pepper",
        price: 50,
        category: {
            powdered: true,
            special: false,
        },
    },
    {
        id: 3,
        src: haldiSelam,
        title: "Haldi Selam",
        decs: "Pure turmeric powder",
        price: 30,
        category: {
            powdered: true,
            special: false,
        },
    },
    {
        id: 4,
        src: DhanaMasala,
        title: "Dhana Powder",
        decs: "Fresh coriander powder",
        price: 30,
        category: {
            powdered: true,
            special: false,
        },
    },
    {
        id: 5,
        src: sambarMasala,
        title: "Sambar Masala",
        decs: "South Indian sambar blend",
        price: 40,
        category: {
            powdered: false,
            special: true,
        },
    },
    {
        id: 6,
        src: garamMasala,
        title: "Garam Masala",
        decs: "Aromatic garam masala mix",
        price: 45,
        category: {
            powdered: false,
            special: true,
        },
    },
    {
        id: 7,
        src: godaMasala,
        title: "Goda Masala",
        decs: "Maharashtrian goda masala",
        price: 45,
        category: {
            powdered: false,
            special: true,
        },
    },
    {
        id: 8,
        src: malvaniMasala,
        title: "Malvani Masala",
        decs: "Spicy coastal masala",
        price: 35,
        category: {
            powdered: false,
            special: true,
        },
    },
    {
        id: 9,
        src: chicken,
        title: "Chicken Masala",
        decs: "Masala for chicken recipes",
        price: 60,
        category: {
            powdered: false,
            special: true,
        },
    },
    {
        id: 10,
        src: muttonMasala,
        title: "Mutton Masala",
        decs: "Masala for mutton curries",
        price: 65,
        category: {
            powdered: false,
            special: true,
        },
    },
    {
        id: 11,
        src: biryaniMasala,
        title: "Biryani Masala",
        decs: "Fragrant biryani spice mix",
        price: 55,
        category: {
            powdered: false,
            special: true,
        },
    },
    {
        id: 12,
        src: kitchenKingMasala,
        title: "Kitchen King Masala",
        decs: "All-purpose masala",
        price: 50,
        category: {
            powdered: true,
            special: false,
        },
    },
    {
        id: 13,
        src: vegPulavMasala,
        title: "Veg Pulav Masala",
        decs: "Pulav spice blend",
        price: 40,
        category: {
            powdered: false,
            special: true,
        },
    },
    {
        id: 14,
        src: shevBhaji,
        title: "Shev Bhaji Masala",
        decs: "Traditional shev bhaji masala",
        price: 35,
        category: {
            powdered: true,
            special: false,
        },
    },
    {
        id: 15,
        src: OnionGarlic,
        title: "Onion Garlic Masala",
        decs: "Onion garlic cooking masala",
        price: 30,
        category: {
            powdered: true,
            special: false,
        },
    },
];

// const masalaProduct = [
//     {
//         id: 1,
//         src: redChili,
//         title: "Red Chilli Powder",
//         decs: "Bold and spicy red chilli powder",
//         price: 35,
//         category: {
//             powdered: true,
//             wholeSpices: false,
//             // special: false,
//             // comboPacks: true,
//         },
//     },
//     {
//         id: 2,
//         src: blackPepper,
//         title: "Black Pepper",
//         decs: "Strong and aromatic black pepper",
//         price: 50,
//         category: {
//             powdered: false,
//             wholeSpices: true,
//             // special: false,
//             // comboPacks: true,
//         },
//     },
//     {
//         id: 3,
//         src: haldiSelam,
//         title: "Haldi Selam",
//         decs: "Pure turmeric powder",
//         price: 30,
//         category: {
//             powdered: true,
//             wholeSpices: false,
//             // special: false,
//             // comboPacks: true,
//         },
//     },
//     {
//         id: 4,
//         src: DhanaMasala,
//         title: "Dhana Powder",
//         decs: "Fresh coriander powder",
//         price: 30,
//         category: {
//             powdered: true,
//             wholeSpices: false,
//             // special: false,
//             // comboPacks: true,
//         },
//     },
//     {
//         id: 5,
//         src: sambarMasala,
//         title: "Sambar Masala",
//         decs: "South Indian sambar blend",
//         price: 40,
//         category: {
//             powdered: false,
//             wholeSpices: false,
//             // special: true,
//             // comboPacks: true,
//         },
//     },
//     {
//         id: 6,
//         src: garamMasala,
//         title: "Garam Masala",
//         decs: "Aromatic garam masala mix",
//         price: 45,
//         category: {
//             powdered: false,
//             wholeSpices: false,
//             // special: true,
//             // comboPacks: true,
//         },
//     },
//     {
//         id: 7,
//         src: godaMasala,
//         title: "Goda Masala",
//         decs: "Maharashtrian goda masala",
//         price: 45,
//         category: {
//             powdered: false,
//             wholeSpices: false,
//             // special: true,
//             // comboPacks: true,
//         },
//     },
//     {
//         id: 8,
//         src: malvaniMasala,
//         title: "Malvani Masala",
//         decs: "Spicy coastal masala",
//         price: 35,
//         category: {
//             powdered: false,
//             wholeSpices: false,
//             // special: true,
//             // comboPacks: true,
//         },
//     },
//     {
//         id: 9,
//         src: chicken,
//         title: "Chicken Masala",
//         decs: "Masala for chicken recipes",
//         price: 60,
//         category: {
//             powdered: false,
//             wholeSpices: false,
//             // special: true,
//             // comboPacks: true,
//         },
//     },
//     {
//         id: 10,
//         src: muttonMasala,
//         title: "Mutton Masala",
//         decs: "Masala for mutton curries",
//         price: 65,
//         category: {
//             powdered: false,
//             wholeSpices: false,
//             // special: true,
//             // comboPacks: true,
//         },
//     },
//     {
//         id: 11,
//         src: biryaniMasala,
//         title: "Biryani Masala",
//         decs: "Fragrant biryani spice mix",
//         price: 55,
//         category: {
//             powdered: false,
//             wholeSpices: false,
//             // special: true,
//             // comboPacks: true,
//         },
//     },
//     {
//         id: 12,
//         src: kitchenKingMasala,
//         title: "Kitchen King Masala",
//         decs: "All-purpose masala",
//         price: 50,
//         category: {
//             powdered: false,
//             wholeSpices: false,
//             // special: true,
//             // comboPacks: true,
//         },
//     },
//     {
//         id: 13,
//         src: vegPulavMasala,
//         title: "Veg Pulav Masala",
//         decs: "Pulav spice blend",
//         price: 40,
//         category: {
//             powdered: false,
//             wholeSpices: false,
//             // special: true,
//             // comboPacks: true,
//         },
//     },
//     {
//         id: 14,
//         src: shevBhaji,
//         title: "Shev Bhaji Masala",
//         decs: "Traditional shev bhaji masala",
//         price: 35,
//         category: {
//             powdered: false,
//             wholeSpices: false,
//             // special: true,
//             // comboPacks: true,
//         },
//     },
//     {
//         id: 15,
//         src: OnionGarlic,
//         title: "Onion Garlic Masala",
//         decs: "Onion garlic cooking masala",
//         price: 30,
//         category: {
//             powdered: true,
//             wholeSpices: false,
//             // special: false,
//             // comboPacks: true,
//         },
//     },
// ];



const ProductCategory = () => {
    const [activeCategory, setActiveCategory] = useState("powdered");

    const filteredProducts = useMemo(() => {
        return masalaProduct.filter((p) => p.category[activeCategory]).slice(0, 8);;
    }, [activeCategory]);

    return (
        <Container>
            <SecTitle heading="PRODUCT CATEGORIES" extraClass="maroon" />

            <div className="product-count pt-4 mt-md-4 mt-lg-5 d-flex gap-4 gap-md-5 flex-column align-items-center justify-content-center">

                {/* Category buttons */}
                <Row className="product-tab row-gap-4">
                    <Col xs={6} md={6} lg={6}>
                        <button
                            className={activeCategory === "powdered" ? "activeTab" : " "}
                            onClick={() => setActiveCategory("powdered")}>
                            Powdered Masala
                        </button>
                    </Col>
                    <Col xs={6} md={6} lg={6}>
                        <button
                            className={activeCategory === "special" ? "activeTab" : " "}
                            onClick={() => setActiveCategory("special")}>
                            Special
                        </button>
                    </Col>
                    {/* <Col xs={6} md={6} lg={3}>
                        <button
                            className={activeCategory === "wholeSpices" ? "activeTab" : " "}
                            onClick={() => setActiveCategory("wholeSpices")}>
                            Whole Spices
                        </button>
                    </Col>
                    <Col xs={6} md={6} lg={3}>
                        <button
                            className={activeCategory === "comboPacks" ? "activeTab" : " "}
                            onClick={() => setActiveCategory("comboPacks")}>
                            Combo Packs
                        </button>
                    </Col> */}
                </Row>

                {/* Product Display */}
                <Row className="product-display-container row-gap-3">
                    {filteredProducts.map((product) => (
                        <Col xs={6} md={6} lg={4} xl={3} className="px-2">
                            <div className="product-card" key={product.id}>
                                <img src={product.src} alt={product.title} className="img-fluid" />

                                <div className="card-body d-flex flex-row">
                                    <div>
                                        <h5 className="maroon mb-1">{product.title}</h5>
                                        <p className="d-none d-md-block">{product.decs}</p>
                                    </div>
                                    <div className="p-card-bottom">
                                        <a as="a"
                                            href={`https://wa.me/917745061210?text=I want to order the ${product.title}`}
                                            target="_blank" className="secondryBtn">
                                            <img src={cart} alt={`cart ${product.title}`} className="" />
                                        </a>

                                        <span className="maroon">
                                            ₹{product.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
};

export default ProductCategory;
