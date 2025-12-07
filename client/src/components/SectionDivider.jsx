import React from 'react'
import { motion } from 'framer-motion'

export default function SectionDivider() {
    return (
        <motion.div
            className="section-divider"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="divider-line" />
            <div className="divider-glow" />
        </motion.div>
    )
}
