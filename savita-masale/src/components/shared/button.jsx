import React from "react";
import { motion } from "framer-motion";


export const PrimeryBtn = ({ title, icon, href, btnClass }) => {

    const iconVariants = {
        // hover: { rotate: -60 },
    };

    return (
        <motion.a
            href={href || "#"}
            className={btnClass}
            whileHover="hover"
        >
            {title}
            <motion.div className="pb-circle">
                <motion.div variants={""} className="icon">
                    {icon}
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


