import { motion } from "framer-motion"


export const PrimaryBtn = ({
    href = "#",
    btnTitle,
    btnClass = "",
    target,
    btnBackgraound
}) => {
    return (
        <>
            <motion.a
                href={href}
                className={btnClass}
                target={target}
                whileHover={{ scale: 1.05 }}
                style={{background:`${btnBackgraound}`}}
            >
                {btnTitle}
            </motion.a>
        </>
    )
}