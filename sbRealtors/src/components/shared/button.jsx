import React from "react";
import { motion } from "framer-motion";
import btnArrow from "../../assets/images/button-arrow.png"
import { HiOutlineHome } from "react-icons/hi2";
export const PrimeryBtn = ({ title, href, btnClass }) => {

    const iconVariants = {
        hover: { rotate: 0 },
    };

    return (
        <motion.a
            href={href || "#"}
            className={btnClass}
            whileHover="hover"
        >
            {title}
            <motion.div className="pb-circle">
                <motion.div variants={iconVariants} className="icon">
                    <img src={btnArrow} alt="" />
                </motion.div>
            </motion.div>
        </motion.a>
    );
};


export const SecondaryBtn = ({
    href = "#",
    btnTitle,
    btnClass = "",
    src,
    alt = "",
    target,
}) => {
    return (
        <motion.a
            href={href}
            className={btnClass}
            target={target}
            whileHover={{ scale: 1.05 }}
        >
            <p className="d-none d-md-block m-0">{btnTitle}</p>
            {src && (
                <img src={src} alt={alt} className="d-block d-md-none" />
            )}
        </motion.a>
    );
};


export const WebsiteButton = ({
    href = "#",
    btnTitle,
    btnClass = "",
    src,
    alt = "",
    target,
}) => {
    return (
        <motion.a
            href={href}
            className={btnClass}
            target={target}
            whileHover={{ scale: 1.05 }}
        >
            <p className="d-none d-md-block m-0">{btnTitle}</p>
            {src && (
                <HiOutlineHome />
            )}
        </motion.a>
    );
};


