import React from "react";
import { Card } from "react-bootstrap";
import { SecondaryBtn } from "./button";

export const AboutSpecialCard = ({ mainClass, src, title, desc }) => {
    return (
        <>
            <div className={`about-spe-card ${mainClass}`}>
                <img src={src} alt="" className="as-icon" />
                <h5 className="maroon mb-1">{title}</h5>
                <p className="d-none d-md-block m-0">{desc}</p>
            </div>
        </>
    )
}


export const SellerHovercard = ({ img, sellClass = " " }) => {
    return (
        <>
            <Card className={`seller-card ${sellClass}`}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    
                    <SecondaryBtn
                        href={"#Best Seller Card"}
                        btnTitle={"Order Now"}
                        btnClass={"secondryBtn"}
                    />
                </Card.Body>
            </Card>
        </>
    )
}


// export const ProductCard = ({ productImg, productName, productDesc, productPrice }) => {
//     return (
//         <>
//             <div className="product-card">
//                 <img src={productImg} alt="" />
//                 <div className="card-body">
//                     <h5>{productName}</h5>
//                     <p>{productDesc}</p>
//                     <div className="p-card-bottom">
//                         <SecondryBtn
//                             href="#product"
//                             btnTitle={"Order Now"}
//                             btnClass={"secondryBtn"}
//                         />
//                         <span>{productPrice}</span>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }