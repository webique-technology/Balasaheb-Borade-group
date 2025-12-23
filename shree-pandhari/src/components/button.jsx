import React from "react";
import { motion } from "framer-motion";

// import arrow  from "../assets/imgaes/rotate_arrow.svg"

export const PrimeryBtn = ({ title, icon, href, btnClass }) => {

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
                    {icon}
                </motion.div>
            </motion.div>
        </motion.a>
    );
};

