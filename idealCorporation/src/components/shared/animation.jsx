import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";


// animation wrap to on scroll 
export const AnimateOnScroll = ({ children, y = 50, duration = 0.8 }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

// animation wrap to on scroll  slide in left 
export const AnimateScrollLeft = ({
    children,
    x = -100,
    duration = 0.8,
    extraClassLeft = "",
}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            if (typeof window !== "undefined") {
                setIsMobile(window.innerWidth <= 768);
            }
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <motion.div
            ref={ref}
            initial={
                isMobile
                    ? { opacity: 0, y: 40 }
                    : { opacity: 0, x }
            }
            animate={
                inView
                    ? { opacity: 1, x: 0, y: 0 }
                    : { opacity: 0 }
            }
            transition={{ duration, ease: "easeOut" }}
            className={extraClassLeft}
        >
            {children}
        </motion.div>
    );
};

// to AnimateResponsive animation
export const AnimateResponsive = ({
    children,
    mobile = { x: 0, y: 40 },
    tablet = { x: -40, y: 0 },
    desktop = { x: -80, y: 0 },
    duration = 0.8,
    className,
    threshold = 0.2
}) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold,
    });

    const [device, setDevice] = useState("desktop");

    useEffect(() => {
        const updateDevice = () => {
            const width = window.innerWidth;

            if (width < 768) setDevice("mobile");
            else if (width < 1024) setDevice("tablet");
            else setDevice("desktop");
        };

        updateDevice();
        window.addEventListener("resize", updateDevice);
        return () => window.removeEventListener("resize", updateDevice);
    }, []);

    const startPos =
        device === "mobile"
            ? mobile
            : device === "tablet"
                ? tablet
                : desktop;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, ...startPos }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};