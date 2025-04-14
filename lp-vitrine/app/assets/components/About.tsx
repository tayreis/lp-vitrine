"use client";

import React from "react";
import { motion } from "framer-motion";
import config from "@/config.json";


export default function About() {
    return (
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
            <motion.h2
                className="text-3xl font-bold mb-4"
                initial={config.animations.sectionTitle.initial}
                whileInView={config.animations.sectionTitle.animate}
                transition={config.animations.sectionTitle.transition}
                viewport={{ once: true }}
            >
                {config.about.title}
            </motion.h2>
            <motion.p
                className="text-lg text-gray-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                {config.about.description}
            </motion.p>
        </section>
    )
}